import { computed, ref, watch } from 'vue'

const SESSION_KEY = 'code-route-exam-session'
const HISTORY_KEY = 'code-route-exam-history'
const HISTORY_SIZE = 10

export const EXAM_SIZES = [20, 40]
export const SECONDS_PER_QUESTION = 60
export const PASS_RATE = 0.85 // seuil indicatif : 34/40, 17/20

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
// { keys, answers: { key: [indices] }, flagged: [keys], current, startedAt, deadline, finishedAt }
const session = ref(read(SESSION_KEY, null))
const history = ref(read(HISTORY_KEY, []))
watch(session, (value) => write(SESSION_KEY, value), { deep: true })
watch(history, (value) => write(HISTORY_KEY, value), { deep: true })

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

  const remaining = computed(() => {
    const deadline = session.value?.deadline
    if (!deadline) return null
    const end = session.value.finishedAt ?? now.value
    return Math.max(0, Math.round((deadline - end) / 1000))
  })

  function startTicker() {
    if (ticker) return
    ticker = setInterval(() => {
      now.value = Date.now()
      if (status.value === 'en-cours' && remaining.value === 0) finish()
    }, 1000)
  }

  function stopTicker() {
    clearInterval(ticker)
    ticker = null
  }

  function start(keys, { timed }) {
    const startedAt = Date.now()
    session.value = {
      keys,
      answers: {},
      flagged: [],
      current: 0,
      startedAt,
      deadline: timed ? startedAt + keys.length * SECONDS_PER_QUESTION * 1000 : null,
      finishedAt: null,
    }
    now.value = startedAt
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
    return {
      detail,
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

  function finish() {
    if (!session.value || session.value.finishedAt) return
    session.value.finishedAt = Math.min(Date.now(), session.value.deadline ?? Infinity)
    const r = results.value
    history.value = [
      { date: session.value.finishedAt, correct: r.correct, total: r.total, duration: r.duration, passed: r.passed },
      ...history.value,
    ].slice(0, HISTORY_SIZE)
  }

  function reset() {
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
    results,
    start,
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
