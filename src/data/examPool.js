// Banque de questions de l'examen blanc : questions officielles du manuel DGTT
// et QCM des 14 chapitres du cours, mises au même format.
import { chapters, chapterRoute } from './chapters/chapter-meta.js'
import { beninChapters, loadBeninChapter, isPlayable } from './benin/meta.js'

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

export function drawQuestions(pool, size) {
  const official = shuffle(pool.filter((q) => q.source === 'dgtt'))
  const course = shuffle(pool.filter((q) => q.source === 'cours'))
  const nbCourse = Math.min(course.length, size - Math.round(size * OFFICIAL_SHARE))
  const picked = [...official.slice(0, size - nbCourse), ...course.slice(0, nbCourse)]
  return shuffle(picked).map((q) => q.key)
}
