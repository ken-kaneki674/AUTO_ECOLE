import { ref, computed } from 'vue'

const STORAGE_KEY = 'revision-scoring-history'
const STORAGE_KEY_SESSION = 'revision-scoring-session'

// Système de scoring inspiré des sondages WhatsApp du groupe de révision
// Tranches de notes comme dans le groupe
export const SCORE_RANGES = [
  { label: '20/20', min: 20, max: 20 },
  { label: '19/20', min: 19, max: 19 },
  { label: '18/20', min: 18, max: 18 },
  { label: '17/20', min: 17, max: 17 },
  { label: '16/20', min: 16, max: 16 },
  { label: '15/20', min: 15, max: 15 },
  { label: '14/20', min: 14, max: 14 },
  { label: '10 à 13', min: 10, max: 13 },
  { label: '0 à 9', min: 0, max: 9 }
]

// Seuil de réussite (14/20 comme à l'ANaTT)
export const PASS_THRESHOLD = 14

function getFromStorage(key, fallback) {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : fallback
  } catch {
    return fallback
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Storage unavailable
  }
}

export function useRevisionScoring() {
  const sessionHistory = ref(getFromStorage(STORAGE_KEY, []))
  const currentSession = ref(getFromStorage(STORAGE_KEY_SESSION, null))

  const bestScore = computed(() => {
    if (sessionHistory.value.length === 0) return 0
    return Math.max(...sessionHistory.value.map(s => s.score))
  })

  const averageScore = computed(() => {
    if (sessionHistory.value.length === 0) return 0
    const total = sessionHistory.value.reduce((sum, s) => sum + s.score, 0)
    return Math.round(total / sessionHistory.value.length)
  })

  const passRate = computed(() => {
    if (sessionHistory.value.length === 0) return 0
    const passed = sessionHistory.value.filter(s => s.score >= PASS_THRESHOLD).length
    return Math.round((passed / sessionHistory.value.length) * 100)
  })

  const scoreRange = computed(() => {
    if (!currentSession.value) return null
    return SCORE_RANGES.find(range =>
      currentSession.value.score >= range.min && currentSession.value.score <= range.max
    )
  })

  function startSession(sujetId, sujetTitle) {
    currentSession.value = {
      id: Date.now(),
      sujetId,
      sujetTitle,
      startedAt: new Date().toISOString(),
      finishedAt: null,
      score: null,
      total: null,
      correct: null,
      answers: {},
      themeResults: []
    }
    saveToStorage(STORAGE_KEY_SESSION, currentSession.value)
  }

  function recordAnswer(questionId, userAnswer, isCorrect) {
    if (!currentSession.value) return

    currentSession.value.answers[questionId] = {
      userAnswer,
      isCorrect,
      timestamp: new Date().toISOString()
    }
    saveToStorage(STORAGE_KEY_SESSION, currentSession.value)
  }

  function finishSession(results) {
    if (!currentSession.value) return

    currentSession.value.finishedAt = new Date().toISOString()
    currentSession.value.score = results.score
    currentSession.value.total = results.total
    currentSession.value.correct = results.correct
    currentSession.value.themeResults = results.themes

    // Add to history
    const historyEntry = {
      id: currentSession.value.id,
      sujetId: currentSession.value.sujetId,
      sujetTitle: currentSession.value.sujetTitle,
      date: currentSession.value.finishedAt,
      score: currentSession.value.score,
      total: currentSession.value.total,
      correct: currentSession.value.correct,
      passed: currentSession.value.score >= PASS_THRESHOLD,
      themeResults: currentSession.value.themeResults,
      duration: Math.round(
        (new Date(currentSession.value.finishedAt) - new Date(currentSession.value.startedAt)) / 1000
      )
    }

    sessionHistory.value = [historyEntry, ...sessionHistory.value].slice(0, 50) // Keep last 50 sessions
    saveToStorage(STORAGE_KEY, sessionHistory.value)

    const finalResults = { ...currentSession.value }
    currentSession.value = null
    saveToStorage(STORAGE_KEY_SESSION, null)

    return finalResults
  }

  function abandonSession() {
    currentSession.value = null
    saveToStorage(STORAGE_KEY_SESSION, null)
  }

  function getScoreRangeLabel(score) {
    const range = SCORE_RANGES.find(r => score >= r.min && score <= r.max)
    return range ? range.label : `${score}/20`
  }

  function getScorePollOptions() {
    return SCORE_RANGES.map(range => ({
      label: range.label,
      value: range.label,
      description: `${range.min === range.max ? 'Note exacte' : 'Tranche de notes'}`
    }))
  }

  function getStatsByTheme() {
    const themeStats = {}

    sessionHistory.value.forEach(session => {
      session.themeResults?.forEach(theme => {
        if (!themeStats[theme.label]) {
          themeStats[theme.label] = {
            label: theme.label,
            totalQuestions: 0,
            correctAnswers: 0,
            attempts: 0
          }
        }
        themeStats[theme.label].totalQuestions += theme.total
        themeStats[theme.label].correctAnswers += theme.correct
        themeStats[theme.label].attempts++
      })
    })

    return Object.values(themeStats).map(stat => ({
      ...stat,
      accuracy: stat.totalQuestions > 0
        ? Math.round((stat.correctAnswers / stat.totalQuestions) * 100)
        : 0
    }))
  }

  function getRecentSessions(limit = 10) {
    return sessionHistory.value.slice(0, limit)
  }

  function getSessionProgress() {
    if (!currentSession.value) return null

    const answeredCount = Object.keys(currentSession.value.answers).length
    const correctCount = Object.values(currentSession.value.answers).filter(a => a.isCorrect).length

    return {
      answered: answeredCount,
      correct: correctCount,
      currentScore: answeredCount > 0 ? Math.round((correctCount / answeredCount) * 20) : 0
    }
  }

  function clearHistory() {
    sessionHistory.value = []
    saveToStorage(STORAGE_KEY, [])
  }

  function exportHistory() {
    return JSON.stringify(sessionHistory.value, null, 2)
  }

  return {
    sessionHistory,
    currentSession,
    bestScore,
    averageScore,
    passRate,
    scoreRange,
    startSession,
    recordAnswer,
    finishSession,
    abandonSession,
    getScoreRangeLabel,
    getScorePollOptions,
    getStatsByTheme,
    getRecentSessions,
    getSessionProgress,
    clearHistory,
    exportHistory
  }
}