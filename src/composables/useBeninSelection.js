import { useQuizProgress } from './useQuizProgress.js'
import { BENIN_FILTERS, findFilter } from '../data/benin/meta.js'

function shuffle(list) {
  const copy = [...list]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

// Sélection de questions pour une série de révision. Le résultat est figé au moment
// de l'appel : une question « jamais faite » ne doit pas disparaître de la série
// dès qu'on y répond.
export function useBeninSelection() {
  const { answers, resetQuestions } = useQuizProgress()

  function counts(list) {
    return Object.fromEntries(
      BENIN_FILTERS.map((f) => [f.id, list.filter((q) => f.matches(q, answers)).length])
    )
  }

  function select(list, filterId, { limit = null, random = false } = {}) {
    const filter = findFilter(filterId)
    let picked = list.filter((q) => filter.matches(q, answers))
    if (random) picked = shuffle(picked)
    if (limit) picked = picked.slice(0, limit)
    return picked
  }

  // Efface les réponses d'une série pour pouvoir y répondre à nouveau.
  function replay(list) {
    resetQuestions(list.map((q) => q.id))
  }

  return { counts, select, replay }
}
