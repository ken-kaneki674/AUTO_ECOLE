import { reactive, watch } from 'vue'

const STORAGE_KEY = 'code-route-progress'

function loadAnswers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

// État partagé par toute l'application (singleton de module) : chaque composant
// qui importe ce composable voit et modifie la même progression.
const answers = reactive(loadAnswers())

watch(
  answers,
  (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    } catch {
      // stockage indisponible : la session continue sans persistance
    }
  },
  { deep: true }
)

// `correct` vaut un indice (une seule bonne réponse) ou un tableau d'indices
// (questions à réponses multiples, comme dans le manuel officiel du Bénin).
export function toIndexList(value) {
  return (Array.isArray(value) ? value : [value]).slice().sort((a, b) => a - b)
}

export function useQuizProgress() {
  function answerQuestion(questionId, selected, correct) {
    const chosen = toIndexList(selected)
    const expected = toIndexList(correct)
    const isCorrect = chosen.length === expected.length && chosen.every((v, i) => v === expected[i])
    answers[questionId] = { selected, correct: isCorrect }
  }

  function getAnswer(questionId) {
    return answers[questionId]
  }

  function isAnswered(questionId) {
    return Boolean(answers[questionId])
  }

  function resetQuestions(questionIds) {
    for (const id of questionIds) delete answers[id]
  }

  function resetAll() {
    for (const key of Object.keys(answers)) delete answers[key]
  }

  function stats(questionIds) {
    const total = questionIds.length
    let answered = 0
    let correct = 0
    for (const id of questionIds) {
      const a = answers[id]
      if (a) {
        answered += 1
        if (a.correct) correct += 1
      }
    }
    return {
      total,
      answered,
      correct,
      percent: total ? Math.round((answered / total) * 100) : 0,
      score: total ? Math.round((correct / total) * 100) : 0,
    }
  }

  return { answers, answerQuestion, getAnswer, isAnswered, resetQuestions, resetAll, stats }
}
