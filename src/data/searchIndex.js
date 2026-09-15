import { chapters, chapterRoute } from './chapters/chapter-meta.js'

// Charge tous les fichiers de questions (ch1.json … ch14.json, examen.json) présents
// dans src/data/questions/ au moment du build, sans avoir à les lister à la main.
const questionModules = import.meta.glob('./questions/*.json', { eager: true })

function questionsFor(fileName) {
  const mod = questionModules[`./questions/${fileName}.json`]
  return mod?.default ?? []
}

function buildIndex() {
  const entries = []

  for (const chapter of chapters) {
    entries.push({
      type: 'chapitre',
      title: `Chapitre ${chapter.num} — ${chapter.title}`,
      text: chapter.title,
      to: chapterRoute(chapter.id),
    })

    for (const question of questionsFor(chapter.id)) {
      entries.push({
        type: 'question',
        title: `Chapitre ${chapter.num} — ${chapter.title}`,
        text: question.question,
        to: chapterRoute(chapter.id),
      })
    }
  }

  for (const question of questionsFor('examen')) {
    entries.push({
      type: 'examen',
      title: 'Examen blanc',
      text: question.question,
      to: { name: 'examen' },
    })
  }

  return entries
}

export const searchIndex = buildIndex()
