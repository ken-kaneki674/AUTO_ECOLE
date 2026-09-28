// Banque de questions de l'examen blanc : questions officielles du manuel DGTT
// et QCM des 14 chapitres du cours, mises au même format.
import { chapters, chapterRoute } from './chapters/chapter-meta.js'
import { beninChapters, loadBeninChapter, isPlayable } from './benin/meta.js'

// Thèmes de l'examen : chaque thème regroupe des chapitres du cours et du manuel DGTT.
export const EXAM_THEMES = [
  { id: 'signalisation', label: 'Signalisation', cours: [1, 14], dgtt: [2] },
  { id: 'priorites', label: 'Priorités, croisement, dépassement', cours: [2, 3], dgtt: [3] },
  { id: 'manoeuvres', label: 'Arrêt, stationnement, vitesse, manœuvres', cours: [4, 5, 13], dgtt: [4] },
  { id: 'routes', label: 'Routes pour automobiles et autoroutes', cours: [6], dgtt: [5] },
  { id: 'conducteur', label: 'Conducteur : alcool, secourisme, infractions', cours: [9, 11], dgtt: [6] },
  { id: 'permis', label: 'Permis et catégories de véhicules', cours: [10, 12], dgtt: [7, 8, 9, 10] },
  { id: 'vehicule', label: 'Véhicule, mécanique, entretien', cours: [7, 8], dgtt: [11] },
]

function themeOf(source, chapterNum) {
  return EXAM_THEMES.find((t) => t[source].includes(chapterNum))?.id
}

const courseModules = import.meta.glob('./questions/*.json', { eager: true, import: 'default' })

function toList(value) {
  return (Array.isArray(value) ? value : [value]).slice().sort((a, b) => a - b)
}

function courseQuestions() {
  const byId = new Map()
  for (const chapter of chapters) {
    for (const q of courseModules[`./questions/${chapter.id}.json`] ?? []) {
      byId.set(q.id, { q, chapter })
    }
  }
  for (const q of courseModules['./questions/examen.json'] ?? []) {
    const chapter = chapters.find((c) => c.num === q.chapterRef)
    if (chapter) byId.set(q.id, { q, chapter })
  }
  return [...byId.values()].map(({ q, chapter }) => ({
    key: q.id,
    source: 'cours',
    theme: themeOf('cours', chapter.num),
    group: `Cours · ${chapter.num}. ${chapter.title}`,
    to: chapterRoute(chapter.id),
    question: q.question,
    choices: q.choices,
    correct: toList(q.correct),
    explanation: q.explanation,
  }))
}

async function officialQuestions() {
  const lists = await Promise.all(
    beninChapters.map(async (chapter) => {
      const questions = await loadBeninChapter(chapter.num)
      return questions
        // Les questions dont le corrigé ou l'illustration pose problème restent
        // consultables dans leur chapitre mais ne sont pas tirées à l'examen.
        .filter((q) => isPlayable(q) && !q.needsReview)
        .map((q) => ({
          key: q.id,
          source: 'dgtt',
          theme: themeOf('dgtt', chapter.num),
          num: q.num,
          group: `Manuel DGTT · ${chapter.roman}. ${chapter.title}`,
          to: { name: 'benin-chapitre', params: { id: String(chapter.num) } },
          question: q.question,
          choices: q.choices,
          correct: toList(q.correct),
          images: q.images,
        }))
    })
  )
  return lists.flat()
}

let poolPromise = null

export function loadExamPool() {
  poolPromise ??= officialQuestions().then((official) => [...official, ...courseQuestions()])
  return poolPromise
}

// Part des questions officielles dans un tirage : l'examen s'appuie d'abord sur le
// manuel de la DGTT, complété par les QCM du cours.
export const OFFICIAL_SHARE = 0.75

function shuffle(list) {
  const copy = [...list]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

// Réglages du contenu : { source: 'mixte' | 'dgtt' | 'cours', themes: [ids] }.
// Sans thème sélectionné, tous les thèmes sont retenus.
export function filterPool(pool, { source = 'mixte', themes = [] } = {}) {
  return pool.filter(
    (q) => (source === 'mixte' || q.source === source) && (!themes.length || themes.includes(q.theme))
  )
}

export function drawQuestions(pool, size, config = {}) {
  const candidates = filterPool(pool, config)
  if (config.source && config.source !== 'mixte') return shuffle(candidates).slice(0, size).map((q) => q.key)
  const official = shuffle(candidates.filter((q) => q.source === 'dgtt'))
  const course = shuffle(candidates.filter((q) => q.source === 'cours'))
  // ~3/4 de questions officielles, complétées par le cours (ou l'inverse si un
  // thème manque de questions d'une source).
  const nbCourse = Math.min(course.length, Math.max(size - Math.round(size * OFFICIAL_SHARE), size - official.length))
  const picked = [...official.slice(0, size - nbCourse), ...course.slice(0, nbCourse)]
  return shuffle(picked).map((q) => q.key)
}
