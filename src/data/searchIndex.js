// Index de recherche transversal : chapitres et sections du cours, chapitres du
// manuel DGTT, panneaux (cours et manuel), questions (cours et manuel), lexique,
// chiffres clés et pages de l'application.
//
// Chargement en 2 phases :
// - Phase 1 (instantanée) : pages + titres de chapitres + lexique
// - Phase 2 (lazy) : sections, panneaux, questions (chargées en arrière-plan)
import { chapters, chapterRoute } from './chapters/chapter-meta.js'
import { beninChapters, loadBeninBank } from './benin/meta.js'
import { lexique, chiffres, mnemos } from './lexique.js'
import { valeursBenin } from './valeursBenin.js'

export const SEARCH_TYPES = [
  { id: 'chapitre', label: 'Chapitres et sections', icon: '📖' },
  { id: 'panneau', label: 'Panneaux', icon: '🚦' },
  { id: 'question', label: 'Questions', icon: '❓' },
  { id: 'lexique', label: 'Lexique et chiffres clés', icon: '📚' },
]

const courseQuestionModules = import.meta.glob('./questions/ch*.json', { eager: true, import: 'default' })
// Texte brut des composants de chapitre, chargé à la demande.
const chapterSources = import.meta.glob('../chapters/Chapter*.vue', { query: '?raw', import: 'default' })

const PAGES = [
  { title: 'Examen blanc', text: 'examen blanc chronométré test entraînement conditions réelles', to: { name: 'examen' } },
  { title: 'Mon espace', text: 'tableau de bord progression recommandation points faibles révision', to: { name: 'espace' } },
  { title: 'Questions officielles DGTT', text: 'banque de questions officielles manuel DGTT examen permis Bénin', to: { name: 'benin' } },
  { title: 'Catalogue des panneaux', text: 'catalogue panneaux illustrations signalisation images', to: { name: 'benin-panneaux' } },
  { title: 'Lexique et fiches de révision', text: 'lexique vocabulaire définitions chiffres clés fiches mémo plan de révision', to: { name: 'lexique' } },
]

// Index léger : chargé immédiatement (pages + titres de chapitres + lexique)
function lightIndex() {
  return [
    ...PAGES.map((p) => ({ ...p, type: 'chapitre', kind: 'Page' })),
    ...chapters.map((chapter) => ({
      type: 'chapitre',
      kind: 'Chapitre du cours',
      title: `Chapitre ${chapter.num} — ${chapter.title}`,
      text: chapter.title,
      to: chapterRoute(chapter.id),
    })),
    ...beninChapters.map((c) => ({
      type: 'chapitre',
      kind: 'Chapitre du manuel DGTT',
      title: `Manuel DGTT ${c.roman} — ${c.title}`,
      text: c.title,
      to: { name: 'benin-chapitre', params: { id: String(c.num) } },
    })),
    ...lexiqueEntries(),
  ]
}

function stripTags(html) {
  return html
    .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{\{[\s\S]*?\}\}/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

// Remplace <ValeurBenin k="…" /> par la valeur, pour que « 50 km/h » soit trouvable.
function inlineValues(html) {
  return html.replace(/<ValeurBenin k="([^"]+)"\s*\/>/g, (_, k) => valeursBenin[k]?.value ?? '')
}

// Sections (<h3>) d'un chapitre avec leur texte, et panneaux (<div class="pan">).
function parseChapter(source, chapter) {
  const template = inlineValues(source.slice(source.indexOf('<template>')))
  const entries = []
  const parts = template.split(/<h3[^>]*>/)
  for (const part of parts.slice(1)) {
    const end = part.indexOf('</h3>')
    const heading = stripTags(part.slice(0, end))
    const number = heading.match(/^(\d+\.\d+)/)?.[1]
    entries.push({
      type: 'chapitre',
      kind: 'Section du cours',
      title: heading,
      context: `Chapitre ${chapter.num} — ${chapter.title}`,
      text: stripTags(part.slice(end)),
      to: { ...chapterRoute(chapter.id), query: number ? { section: number } : {} },
    })
  }
  for (const match of template.matchAll(/<div class="pan">([\s\S]*?)<\/div>/g)) {
    // Sans viewBox, un SVG ne se réduit pas à la taille de la vignette : on l'ajoute.
    const svg = (match[1].match(/<svg[\s\S]*?<\/svg>/)?.[0] ?? '').replace(
      /<svg((?:(?!viewBox)[^>])*?)width="(\d+)" height="(\d+)"((?:(?!viewBox)[^>])*)>/,
      '<svg$1width="$2" height="$3" viewBox="0 0 $2 $3"$4>'
    )
    const name = stripTags(match[1])
    if (!name) continue
    entries.push({
      type: 'panneau',
      kind: 'Panneau du cours',
      title: name,
      context: `Chapitre ${chapter.num} — ${chapter.title}`,
      text: name,
      svg,
      to: chapterRoute(chapter.id),
    })
  }
  return entries
}

async function courseEntries() {
  const entries = []
  for (const chapter of chapters) {
    entries.push({
      type: 'chapitre',
      kind: 'Chapitre du cours',
      title: `Chapitre ${chapter.num} — ${chapter.title}`,
      text: chapter.title,
      to: chapterRoute(chapter.id),
    })
    const loader = chapterSources[`../chapters/Chapter${chapter.num}.vue`]
    if (loader) entries.push(...parseChapter(await loader(), chapter))
    for (const q of courseQuestionModules[`./questions/${chapter.id}.json`] ?? []) {
      entries.push({
        type: 'question',
        kind: 'QCM du cours',
        title: q.question,
        context: `Chapitre ${chapter.num} — ${chapter.title}`,
        text: `${q.question} ${q.choices.join(' ')} ${q.explanation ?? ''}`,
        to: chapterRoute(chapter.id),
      })
    }
  }
  return entries
}

async function officialEntries() {
  const bank = await loadBeninBank()
  const entries = beninChapters.map((c) => ({
    type: 'chapitre',
    kind: 'Chapitre du manuel DGTT',
    title: `Manuel DGTT ${c.roman} — ${c.title}`,
    text: c.title,
    to: { name: 'benin-chapitre', params: { id: String(c.num) } },
  }))
  const signs = new Map()
  for (const q of bank) {
    const chapter = beninChapters.find((c) => c.num === q.chapter)
    entries.push({
      type: 'question',
      kind: 'Question officielle',
      title: `Q${q.num}. ${q.question}`,
      context: `Manuel DGTT ${chapter.roman} — ${chapter.title}`,
      text: `Q${q.num} ${q.question} ${q.choices.join(' ')} ${(q.signs ?? []).join(' ')}`,
      image: q.images?.[0],
      to: { name: 'benin-entrainement', query: { ids: q.id, mode: 'cartes' } },
    })
    // Une entrée « panneau » par illustration du manuel, avec les questions qui l'utilisent.
    for (const src of q.images ?? []) {
      const sign = signs.get(src) ?? { src, codes: new Set(), questions: [] }
      for (const code of q.signs ?? []) sign.codes.add(code)
      sign.questions.push(q)
      signs.set(src, sign)
    }
  }
  for (const sign of signs.values()) {
    const codes = [...sign.codes]
    const first = sign.questions[0]
    entries.push({
      type: 'panneau',
      kind: 'Illustration du manuel DGTT',
      title: codes.length ? `Panneau ${codes.join(' · ')}` : `Illustration de la Q${first.num}`,
      context: `${sign.questions.length} question(s) · ${first.question}`,
      text: `${codes.join(' ')} ${sign.questions.map((q) => `${q.question} ${q.choices.join(' ')}`).join(' ')}`,
      image: sign.src,
      to: { name: 'benin-panneaux', query: { ...(codes[0] ? { q: codes[0] } : {}), img: sign.src } },
    })
  }
  return entries
}

function lexiqueEntries() {
  return [
    ...lexique.map((t) => ({
      type: 'lexique',
      kind: t.source === 'dgtt' ? 'Lexique · définition DGTT' : 'Lexique',
      title: t.terme,
      context: t.definition,
      text: `${t.terme} ${t.definition}`,
      to: { name: 'lexique', query: { q: t.terme }, hash: '#termes' },
    })),
    ...chiffres.flatMap((g) =>
      g.items.map((item) => {
        const valeur = item.k ? valeursBenin[item.k]?.value : item.valeur
        return {
          type: 'lexique',
          kind: `Chiffre clé · ${g.theme}`,
          title: item.notion,
          context: valeur,
          text: `${item.notion} ${valeur} ${g.theme}`,
          to: { name: 'lexique', hash: '#chiffres' },
        }
      })
    ),
    ...mnemos.map((m) => ({
      type: 'lexique',
      kind: 'Moyen mnémotechnique',
      title: m.sigle,
      context: `${m.sens} — ${m.role}`,
      text: `${m.sigle.replace(/\./g, '')} ${m.sens} ${m.role}`,
      to: { name: 'lexique', hash: '#mnemos' },
    })),
  ]
}

let indexPromise = null
let indexValue = null

// Phase 1 : index léger instantané (synchrone)
export function getLightIndex() {
  if (!indexValue) {
    indexValue = lightIndex()
  }
  return indexValue
}

// Phase 2 : index complet (async, chargé en arrière-plan)
export function loadSearchIndex() {
  if (indexPromise) return indexPromise
  // Charger l'index complet en arrière-plan
  indexPromise = Promise.all([courseEntries(), officialEntries()]).then(([course, official]) => {
    const fullIndex = [
      ...lightIndex(),
      ...course,
      ...official,
    ]
    indexValue = fullIndex
    return fullIndex
  })
  return indexPromise
}
