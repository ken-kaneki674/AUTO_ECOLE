// Liste des identifiants de questions par chapitre / examen, utilisée pour calculer
// la progression (ProgressBadge) sans avoir à charger le composant complet du chapitre.
const questionModules = import.meta.glob('./questions/*.json', { eager: true })

function idsFor(fileName) {
  const mod = questionModules[`./questions/${fileName}.json`]
  return (mod?.default ?? []).map((q) => q.id)
}

export function chapterQuestionIds(chapterId) {
  return idsFor(chapterId)
}

export function examQuestionIds() {
  return idsFor('examen')
}
