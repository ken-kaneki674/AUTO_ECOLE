// Importe les QCM du « Manuel du candidat à l'examen du permis de conduire »
// (DGTT Bénin, édition 2011) à partir du texte extrait du PDF avec corrigés :
//
//   pdftotext -enc UTF-8 -layout "Code de route questions benin-2.pdf" scripts/benin-source/manuel-reponses.txt
//
// Produit src/data/benin/chN.json (un fichier par chapitre du manuel) et affiche un
// rapport des questions à relire. Les images associées (voir extract-benin-images.py)
// sont lues depuis scripts/benin-source/images.json si ce fichier existe.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const sourceFile = join(root, 'scripts/benin-source/manuel-reponses.txt')
const imagesFile = join(root, 'scripts/benin-source/images.json')
const outDir = join(root, 'src/data/benin')

const ROMAN = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9, X: 10, XI: 11 }
const LETTERS = 'abcdefgh'

// Mentions qui supposent une illustration à côté de la question.
const NEEDS_IMAGE = /\b(ce panneau|ces panneaux|cette signalisation|ce panonceau|ce signal|cette balise|ces balises|ce marquage|cette image|ci-contre|ci-dessous|ci-dessus|cette situation|ce geste|ce feu|cette figure|ce dessin|ce schéma|ce véhicule|cet agent)\b/i
const SIGN_CODE = /\b(?:AB|AK|[ABCJKMDEF])\s?-?\d{1,2}(?:[a-z]\d?)?(?:-\d)?\b/g

function clean(text) {
  return text
    .replace(/­/g, ' – ') // tiret conditionnel utilisé comme séparateur dans le manuel
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.])/g, '$1')
    .replace(/(\s–)+\s/g, ' – ')
    .trim()
}

function parseAnswer(raw) {
  // « Réponse a-c-d », « Réponses : a, c », « Répons c », « Réponse .d. », « c et d »
  const letters = raw.toLowerCase().replace(/\bet\b/g, ' ').match(/\b[a-h]\b/g) ?? []
  return [...new Set(letters.map((l) => LETTERS.indexOf(l)))].sort((a, b) => a - b)
}

function parseBlock(num, body) {
  const lines = body.split('\n')
  const answerIdx = lines.findIndex((l) => /^\s*R[ée]pons\w*\b/i.test(l))
  const answerLine = answerIdx >= 0 ? lines[answerIdx].replace(/^\s*R[ée]pons\w*\s*/i, '') : ''
  const content = (answerIdx >= 0 ? lines.slice(0, answerIdx) : lines)
    .filter((l) => !/^\s*\d{1,3}\s*$/.test(l)) // numéros de page
    .flatMap((l) => {
      // Libellés d'image capturés dans une colonne de droite (« 150m », « SAVE »…)
      if (/^\s*(-?[a-h]\s+)*-?[a-h]\s*$/.test(l)) return [l] // lettres sous des dessins
      const line = l.replace(/(\S)\s{8,}\S.{0,14}$/, '$1')
      // « …question ? a) » : la marque d'option est collée en fin de ligne
      const tail = line.match(/^(.*\S)\s+([a-h]\s*\))\s*$/)
      if (tail) return [tail[1], tail[2]]
      return [line]
    })

  const question = []
  const choices = []
  const choiceLetters = [] // lettre d'origine de chaque choix (le manuel en saute parfois une)
  let imageLetters = [] // choix dessinés : seules les lettres « a  b  c » subsistent dans le texte
  let expected = 0
  for (const line of content) {
    const indent = line.match(/^\s*/)[0].length
    const text = line.trim()
    if (!text) continue
    const marker = text.match(/^([a-h])\s*[)\-]\s*(.*)$/)
    const letterIdx = marker ? LETTERS.indexOf(marker[1]) : -1
    if (marker && letterIdx >= expected && letterIdx <= expected + 1) {
      choices.push(marker[2])
      choiceLetters.push(letterIdx)
      expected = letterIdx + 1
      continue
    }
    if (choices.length === 0 && /^(-?[a-h]\s*)+$/.test(text.replace(/\s{2,}\S{3,}.*$/, ''))) {
      imageLetters.push(...text.match(/\b[a-h]\b/g))
      continue
    }
    if (choices.length === 0) {
      if (indent >= 20 && text.length <= 20) continue // légende d'image
      question.push(text)
    } else {
      if (indent >= 25 && text.length <= 12) continue // légende d'image
      choices[choices.length - 1] += ` ${text}`
    }
  }

  const answerLetters = parseAnswer(answerLine)
  const questionText = clean(question.join(' '))
  let cleanChoices = choices.map(clean)
  let letters = choiceLetters
  let imageChoices = false
  if (cleanChoices.length < 2 && imageLetters.length >= 2) {
    // Les choix sont des dessins : on propose les lettres, l'image fait le reste.
    imageLetters = [...new Set(imageLetters)].sort()
    cleanChoices = imageLetters.map((l) => `Réponse ${l}`)
    letters = imageLetters.map((l) => LETTERS.indexOf(l))
    imageChoices = true
  }
  const correct = answerLetters.map((l) => letters.indexOf(l))
  const signs = [...new Set((questionText.match(SIGN_CODE) ?? []).map((s) => s.replace(/\s/g, '')))]

  const issues = []
  if (answerIdx < 0) issues.push('pas de réponse')
  if (cleanChoices.length < 2) issues.push('choix illisibles')
  if (cleanChoices.some((c) => !c)) issues.push('choix vide')
  if (!correct.length) issues.push('réponse illisible')
  if (correct.some((i) => i < 0)) issues.push('réponse hors des choix')

  return {
    num,
    question: questionText,
    choices: cleanChoices,
    correct: correct.filter((i) => i >= 0),
    imageChoices,
    signs,
    needsImage: signs.length > 0 || imageChoices || NEEDS_IMAGE.test(questionText) || cleanChoices.length < 2,
    issues,
  }
}

function parse(text) {
  const src = text.replace(/\r/g, '').replace(/\f/g, '\n')
  const chapterMarks = [...src.matchAll(/CHAPITRE\s*[:-]?\s*([IVX]+)\b/g)].map((m) => ({
    pos: m.index,
    num: ROMAN[m[1]],
  }))
  const headers = [...src.matchAll(/^\s*Question\s*n\s*°\s*(\d+)/gm)]
  const questions = []
  headers.forEach((h, i) => {
    const start = h.index + h[0].length
    let end = i + 1 < headers.length ? headers[i + 1].index : src.length
    const nextChapter = chapterMarks.find((c) => c.pos > h.index && c.pos < end)
    if (nextChapter) end = nextChapter.pos
    const chapter = [...chapterMarks].reverse().find((c) => c.pos < h.index)?.num ?? 1
    questions.push({ chapter, ...parseBlock(Number(h[1]), src.slice(start, end)) })
  })
  return questions
}

const questions = parse(readFileSync(sourceFile, 'utf8'))
const images = existsSync(imagesFile) ? JSON.parse(readFileSync(imagesFile, 'utf8')) : {}

mkdirSync(outDir, { recursive: true })
const byChapter = new Map()
for (const q of questions) {
  const entry = {
    id: `bj-q${q.num}`,
    num: q.num,
    question: q.question,
    choices: q.choices.length >= 2 ? q.choices : [],
    correct: q.correct,
  }
  if (q.imageChoices) entry.imageChoices = true
  if (q.signs.length) entry.signs = q.signs
  if (images[q.num]?.length) entry.images = images[q.num]
  if (q.needsImage && !entry.images) entry.missingImage = true
  if (q.issues.length || (q.needsImage && !entry.images)) entry.needsReview = true
  if (!byChapter.has(q.chapter)) byChapter.set(q.chapter, [])
  byChapter.get(q.chapter).push(entry)
}

const playable = (q) => q.choices.length >= 2 && q.correct.length > 0
const index = {}
for (const [chapter, list] of byChapter) {
  writeFileSync(join(outDir, `ch${chapter}.json`), JSON.stringify(list, null, 1) + '\n')
  index[chapter] = list.filter(playable).map((q) => q.num)
}
writeFileSync(join(outDir, 'index.json'), JSON.stringify(index) + '\n')

// Rapport
const nums = questions.map((q) => q.num)
const missing = []
for (let n = 1; n <= Math.max(...nums); n++) if (!nums.includes(n)) missing.push(n)
const withIssues = questions.filter((q) => q.issues.length)
console.log(`${questions.length} questions importées`)
for (const [chapter, list] of [...byChapter].sort((a, b) => a[0] - b[0])) {
  console.log(`  chapitre ${chapter} : ${list.length} questions`)
}
console.log(`Numéros absents du manuel : ${missing.join(', ') || 'aucun'}`)
console.log(`Réponses multiples : ${questions.filter((q) => q.correct.length > 1).length}`)
console.log(`Questions avec illustration : ${questions.filter((q) => q.needsImage).length} (images associées : ${Object.keys(images).length})`)
console.log(`Questions à relire (${withIssues.length}) :`)
for (const q of withIssues) console.log(`  Q${q.num} — ${q.issues.join(', ')}`)
