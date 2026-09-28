import { computed, ref, watch } from 'vue'
import { useQuizProgress } from './useQuizProgress.js'
import { EXAM_THEMES } from '../data/examPool.js'

const SESSION_KEY = 'code-route-exam-session'
const HISTORY_KEY = 'code-route-exam-history'
const HISTORY_SIZE = 20

export const EXAM_SIZES = [20, 40]
export const SECONDS_PER_QUESTION = 60
export const PASS_RATE = 0.85 // seuil indicatif : 34/40, 17/20
// Alertes de temps restant, en secondes.
export const TIME_ALERTS = [300, 60]

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function write(key, value) {
  try {
    if (value == null) localStorage.removeItem(key)
    else localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // stockage indisponible : l'examen continue sans persistance
  }
}

function sameAnswer(selected = [], correct) {
  const a = [...selected].sort((x, y) => x - y)
  return a.length === correct.length && a.every((v, i) => v === correct[i])
}

// Session en cours, partagée par toute l'application et reprise après rechargement.
// { keys, config, answers: { key: [indices] }, flagged: [keys], current, startedAt, deadline,
//   pausedAt, alerts: [secondes déjà signalées], lastAlert: { seconds, at }, finishedAt }
const session = ref(read(SESSION_KEY, null))
const history = ref(read(HISTORY_KEY, []))
watch(session, (value) => write(SESSION_KEY, value), { deep: true })
watch(history, (value) => write(HISTORY_KEY, value), { deep: true })

// Historique seul (lecture), pour l'accueil.
export function useExamHistory() {
  return history
}

const now = ref(Date.now())
let ticker = null

export function useExamSession(poolRef) {
  // Questions du tirage, dans l'ordre, retrouvées dans la banque.
  const questions = computed(() => {
    if (!session.value || !poolRef.value) return []
    const byKey = new Map(poolRef.value.map((q) => [q.key, q]))
    return session.value.keys.map((k) => byKey.get(k)).filter(Boolean)
  })

  const status = computed(() => {
    if (!session.value) return 'accueil'
    return session.value.finishedAt ? 'resultats' : 'en-cours'
  })

  const paused = computed(() => Boolean(session.value?.pausedAt))

  const remaining = computed(() => {
    const deadline = session.value?.deadline
    if (!deadline) return null
    const end = session.value.finishedAt ?? session.value.pausedAt ?? now.value
    return Math.max(0, Math.round((deadline - end) / 1000))
  })

  // Message d'alerte affiché une dizaine de secondes après le passage d'un seuil.
  const alertMessage = computed(() => {
    const last = session.value?.lastAlert
    if (!last || status.value !== 'en-cours' || now.value - last.at > 10000) return null
    return last.seconds >= 60 ? `Plus que ${last.seconds / 60} minute(s) !` : `Plus que ${last.seconds} secondes !`
  })

  function checkAlerts() {
    const s = session.value
    if (!s?.deadline || s.pausedAt || s.finishedAt) return
    for (const seconds of TIME_ALERTS) {
      if (remaining.value <= seconds && remaining.value > 0 && !s.alerts?.includes(seconds)) {
        s.alerts = [...(s.alerts ?? []), seconds]
        s.lastAlert = { seconds, at: Date.now() }
      }
    }
  }

  function startTicker() {
    if (ticker) return
    ticker = setInterval(() => {
      now.value = Date.now()
      if (status.value !== 'en-cours' || paused.value) return
      checkAlerts()
      if (remaining.value === 0) finish()
    }, 1000)
  }

  function stopTicker() {
    clearInterval(ticker)
    ticker = null
  }

  function start(keys, { timed, config = {} }) {
    const startedAt = Date.now()
    session.value = {
      keys,
      config,
      alerts: [],
      pausedAt: null,
      answers: {},
      flagged: [],
      current: 0,
      startedAt,
      deadline: timed ? startedAt + keys.length * SECONDS_PER_QUESTION * 1000 : null,
      finishedAt: null,
    }
    now.value = startedAt
  }

  function pause() {
    if (session.value && !session.value.pausedAt) session.value.pausedAt = Date.now()
  }

  // La durée de la pause est rendue au chronomètre et retirée du temps passé.
  function resume() {
    const s = session.value
    if (!s?.pausedAt) return
    const pausedFor = Date.now() - s.pausedAt
    if (s.deadline) s.deadline += pausedFor
    s.startedAt += pausedFor
    s.pausedAt = null
    now.value = Date.now()
  }

  function toggleChoice(key, index) {
    const list = session.value.answers[key] ?? []
    session.value.answers[key] = list.includes(index) ? list.filter((i) => i !== index) : [...list, index]
  }

  function toggleFlag(key) {
    const flagged = session.value.flagged
    session.value.flagged = flagged.includes(key) ? flagged.filter((k) => k !== key) : [...flagged, key]
  }

  function goTo(index) {
    session.value.current = Math.min(Math.max(index, 0), session.value.keys.length - 1)
  }

  const results = computed(() => {
    if (!session.value) return null
    const detail = questions.value.map((q) => {
      const selected = session.value.answers[q.key] ?? []
      return { question: q, selected, ok: sameAnswer(selected, q.correct) }
    })
    const correct = detail.filter((d) => d.ok).length
    const total = detail.length
    const groups = new Map()
    for (const d of detail) {
      const g = groups.get(d.question.group) ?? { name: d.question.group, to: d.question.to, total: 0, correct: 0 }
      g.total += 1
      if (d.ok) g.correct += 1
      groups.set(g.name, g)
    }
    const themes = EXAM_THEMES.map((t) => {
      const list = detail.filter((d) => d.question.theme === t.id)
      return { id: t.id, label: t.label, total: list.length, correct: list.filter((d) => d.ok).length }
    }).filter((t) => t.total)
    return {
      detail,
      themes,
      correct,
      total,
      answered: detail.filter((d) => d.selected.length).length,
      score: total ? Math.round((correct / total) * 100) : 0,
      passed: total > 0 && correct >= Math.ceil(total * PASS_RATE),
      threshold: Math.ceil(total * PASS_RATE),
      duration: Math.round(((session.value.finishedAt ?? now.value) - session.value.startedAt) / 1000),
      groups: [...groups.values()].sort((a, b) => a.correct / a.total - b.correct / b.total),
    }
  })

  const { answerQuestion } = useQuizProgress()

  function finish() {
    if (!session.value || session.value.finishedAt) return
    if (session.value.pausedAt) resume()
    session.value.finishedAt = Math.min(Date.now(), session.value.deadline ?? Infinity)
    const r = results.value
    // Les réponses de l'examen comptent dans la progression : les erreurs
    // apparaissent ensuite dans « Réviser mes erreurs ».
    for (const d of r.detail) {
      if (d.selected.length) answerQuestion(d.question.key, d.selected, d.question.correct)
    }
    history.value = [
      {
        date: session.value.finishedAt,
        correct: r.correct,
        total: r.total,
        duration: r.duration,
        passed: r.passed,
        config: session.value.config ?? {},
        timed: Boolean(session.value.deadline),
        themes: r.themes.map(({ label, correct, total }) => ({ label, correct, total })),
      },
      ...history.value,
    ].slice(0, HISTORY_SIZE)
  }

  function reset() {
    session.value = null
  }

  // Abandon : l'examen est effacé sans être compté dans l'historique.
  function abandon() {
    session.value = null
  }

  function clearHistory() {
    history.value = []
  }

  return {
    session,
    history,
    questions,
    status,
    remaining,
    paused,
    alertMessage,
    results,
    start,
    pause,
    resume,
    abandon,
    toggleChoice,
    toggleFlag,
    goTo,
    finish,
    reset,
    clearHistory,
    startTicker,
    stopTicker,
  }
}
