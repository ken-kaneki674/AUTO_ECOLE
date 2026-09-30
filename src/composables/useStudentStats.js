import { computed, shallowRef } from 'vue'
import { useQuizProgress } from './useQuizProgress.js'
import { PASS_RATE } from './useExamSession.js'
import { loadExamPool, EXAM_THEMES } from '../data/examPool.js'
import { chapters, chapterRoute } from '../data/chapters/chapter-meta.js'
import { chapterQuestionIds } from '../data/questionIds.js'
import { beninChapters, beninQuestionIds } from '../data/benin/meta.js'

export const SERIES_SIZE = 15
export const SECONDS_PER_QUESTION = 30
const MIN_ANSWERS = 5

// Durée estimée d'une série, arrondie à la minute supérieure.
export function estimatedMinutes(count) {
  return Math.max(1, Math.ceil((count * SECONDS_PER_QUESTION) / 60))
}

// Mélange stable sur la journée : la recommandation ne change pas à chaque
// affichage, mais varie d'un jour à l'autre.
function dailyOrder(list) {
  const day = new Date().toDateString()
  // FNV-1a + brassage final : deux clés voisines (bj-q10, bj-q11) donnent des
  // valeurs sans rapport, donc un vrai mélange.
  const hash = (s) => {
    let h = 2166136261
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i)
      h = Math.imul(h, 16777619)
    }
    h ^= h >>> 15
    h = Math.imul(h, 2246822507)
    h ^= h >>> 13
    return h >>> 0
  }
  return [...list].sort((a, b) => hash(day + a.key) - hash(day + b.key))
}

function rate(correct, answered) {
  return answered ? Math.round((correct / answered) * 100) : null
}

const pool = shallowRef(null)
let loading = null
function ensurePool() {
  loading ??= loadExamPool().then((list) => (pool.value = list))
  return loading
}

export function useStudentStats() {
  const { answers, stats } = useQuizProgress()
  // Ne plus charger le pool immédiatement : chargement différé quand nécessaire

  const ready = computed(() => Boolean(pool.value))

  // Charger le pool de manière différée quand on y accède
  const ensurePoolWhenNeeded = () => {
    if (!pool.value && !loading) {
      ensurePool()
    }
  }

  const global = computed(() => {
    ensurePoolWhenNeeded()
    const list = pool.value ?? []
    let answered = 0
    let correct = 0
    for (const q of list) {
      const a = answers[q.key]
      if (a) {
        answered += 1
        if (a.correct) correct += 1
      }
    }
    return {
      total: list.length,
      answered,
      correct,
      errors: answered - correct,
      progress: list.length ? Math.round((answered / list.length) * 100) : 0,
      success: rate(correct, answered),
    }
  })

  const themes = computed(() => {
    ensurePoolWhenNeeded()
    return EXAM_THEMES.map((theme) => {
      const list = (pool.value ?? []).filter((q) => q.theme === theme.id)
      const errors = list.filter((q) => answers[q.key]?.correct === false)
      const fresh = list.filter((q) => !answers[q.key])
      const answered = list.length - fresh.length
      const correct = answered - errors.length
      const detail = [
        ...theme.cours.map((num) => {
          const chapter = chapters.find((c) => c.num === num)
          const s = stats(chapterQuestionIds(chapter.id))
          return { key: `c${num}`, label: `Cours ${num}. ${chapter.title}`, to: chapterRoute(chapter.id), ...s, success: rate(s.correct, s.answered) }
        }),
        ...theme.dgtt.map((num) => {
          const chapter = beninChapters.find((c) => c.num === num)
          const s = stats(beninQuestionIds(num))
          return {
            key: `d${num}`,
            label: `Manuel DGTT ${chapter.roman}. ${chapter.title}`,
            to: { name: 'benin-chapitre', params: { id: String(num) } },
            ...s,
            success: rate(s.correct, s.answered),
          }
        }),
      ]
      return {
        ...theme,
        total: list.length,
        answered,
        correct,
        errors,
        fresh,
        coverage: list.length ? Math.round((answered / list.length) * 100) : 0,
        success: rate(correct, answered),
        detail,
      }
    })
  })

  const weakest = computed(() =>
    themes.value
      .filter((t) => t.answered >= MIN_ANSWERS && t.success < 100)
      .sort((a, b) => a.success - b.success)
      .slice(0, 3)
  )

  // Série de révision pour un thème : ses erreurs d'abord, puis des questions jamais faites.
  function seriesFor(theme) {
    const picked = [...dailyOrder(theme.errors), ...dailyOrder(theme.fresh)].slice(0, SERIES_SIZE)
    return picked.map((q) => q.key)
  }

  const recommendation = computed(() => {
    if (!pool.value) return null
    const threshold = Math.round(PASS_RATE * 100)
    const make = (kind, theme, message, ids) => ({
      kind,
      theme,
      message,
      ids,
      count: ids.length,
      minutes: estimatedMinutes(ids.length),
    })

    if (global.value.answered < 10) {
      const theme = themes.value.find((t) => t.id === 'signalisation')
      return make('demarrage', theme, 'Commence par la signalisation : c’est la base de l’examen et le thème le plus fourni.', seriesFor(theme))
    }

    const weak = weakest.value[0]
    if (weak && weak.success < threshold) {
      return make(
        'faiblesse',
        weak,
        `Tu fais actuellement beaucoup d’erreurs sur le thème « ${weak.label} » (${weak.success} % de réussite).`,
        seriesFor(weak)
      )
    }

    const leastCovered = [...themes.value].filter((t) => t.fresh.length).sort((a, b) => a.coverage - b.coverage)[0]
    if (leastCovered && leastCovered.coverage < 50) {
      return make(
        'couverture',
        leastCovered,
        `Tu n’as encore vu que ${leastCovered.coverage} % des questions du thème « ${leastCovered.label} ».`,
        seriesFor(leastCovered)
      )
    }

    return make('pret', null, 'Tes résultats sont solides sur tous les thèmes : passe un examen blanc dans les conditions réelles.', [])
  })

  return { ready, pool, global, themes, weakest, recommendation, seriesFor }
}
