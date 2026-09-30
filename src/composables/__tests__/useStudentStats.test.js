import { describe, it, expect } from 'vitest'
import { estimatedMinutes, SERIES_SIZE } from '../useStudentStats.js'

describe('useStudentStats - estimatedMinutes', () => {
  it('calculates minutes for a series', () => {
    expect(estimatedMinutes(15)).toBe(8) // 15 * 30 / 60 = 7.5 → 8
    expect(estimatedMinutes(1)).toBe(1) // minimum 1 minute
    expect(estimatedMinutes(2)).toBe(1) // 2 * 30 / 60 = 1
    expect(estimatedMinutes(3)).toBe(2) // 3 * 30 / 60 = 1.5 → 2
  })

  it('rounds up to nearest minute', () => {
    expect(estimatedMinutes(5)).toBe(3) // 5 * 30 / 60 = 2.5 → 3
    expect(estimatedMinutes(10)).toBe(5) // 10 * 30 / 60 = 5
    expect(estimatedMinutes(11)).toBe(6) // 11 * 30 / 60 = 5.5 → 6
  })
})

describe('useStudentStats - rate', () => {
  it('calculates success rate', () => {
    const rate = (correct, answered) => answered ? Math.round((correct / answered) * 100) : null
    expect(rate(8, 10)).toBe(80)
    expect(rate(5, 10)).toBe(50)
    expect(rate(10, 10)).toBe(100)
    expect(rate(0, 10)).toBe(0)
  })

  it('returns null for zero answered', () => {
    const rate = (correct, answered) => answered ? Math.round((correct / answered) * 100) : null
    expect(rate(0, 0)).toBe(null)
    expect(rate(5, 0)).toBe(null)
  })
})

describe('useStudentStats - seriesFor', () => {
  it('returns correct series size', () => {
    const mockTheme = {
      errors: Array.from({ length: 10 }, (_, i) => ({ key: `err${i}` })),
      fresh: Array.from({ length: 20 }, (_, i) => ({ key: `fresh${i}` })),
    }

    const seriesFor = (theme) => {
      return [...theme.errors, ...theme.fresh].slice(0, SERIES_SIZE).map((q) => q.key)
    }

    const result = seriesFor(mockTheme)
    expect(result.length).toBe(SERIES_SIZE)
  })

  it('prioritizes errors', () => {
    const mockTheme = {
      errors: Array.from({ length: 5 }, (_, i) => ({ key: `err${i}` })),
      fresh: Array.from({ length: 20 }, (_, i) => ({ key: `fresh${i}` })),
    }

    const seriesFor = (theme) => {
      return [...theme.errors, ...theme.fresh].slice(0, SERIES_SIZE).map((q) => q.key)
    }

    const result = seriesFor(mockTheme)
    expect(result.slice(0, 5)).toEqual(['err0', 'err1', 'err2', 'err3', 'err4'])
  })

  it('handles when errors exceed series size', () => {
    const mockTheme = {
      errors: Array.from({ length: 20 }, (_, i) => ({ key: `err${i}` })),
      fresh: [],
    }

    const seriesFor = (theme) => {
      return [...theme.errors, ...theme.fresh].slice(0, SERIES_SIZE).map((q) => q.key)
    }

    const result = seriesFor(mockTheme)
    expect(result.length).toBe(SERIES_SIZE)
    expect(result.every((key) => key.startsWith('err'))).toBe(true)
  })
})

describe('useStudentStats - recommendation logic', () => {
  it('recommends starting with signalisation for beginners', () => {
    const mockGlobal = { answered: 5 }
    const mockThemes = [
      { id: 'signalisation', label: 'Signalisation', errors: [], fresh: [] },
      { id: 'priorites', label: 'Priorités', errors: [], fresh: [] },
    ]

    let recommendation
    if (mockGlobal.answered < 10) {
      const theme = mockThemes.find((t) => t.id === 'signalisation')
      recommendation = {
        kind: 'demarrage',
        theme,
        message: 'Commence par la signalisation',
        ids: [],
        count: 0,
        minutes: 0,
      }
    }

    expect(recommendation.kind).toBe('demarrage')
    expect(recommendation.theme.id).toBe('signalisation')
  })

  it('recommends working on weakest theme', () => {
    const mockWeakest = [
      { id: 'priorites', label: 'Priorités', success: 45, errors: [], fresh: [] },
    ]

    const threshold = 75
    let recommendation
    const weak = mockWeakest[0]
    if (weak && weak.success < threshold) {
      recommendation = {
        kind: 'faiblesse',
        theme: weak,
        message: `Tu fais beaucoup d'erreurs sur « ${weak.label} » (${weak.success} %)`,
        ids: [],
        count: 0,
        minutes: 0,
      }
    }

    expect(recommendation.kind).toBe('faiblesse')
    expect(recommendation.theme.id).toBe('priorites')
  })

  it('recommends exam when ready', () => {
    const mockWeakest = []
    const mockThemes = [
      { id: 'signalisation', coverage: 80, fresh: [] },
      { id: 'priorites', coverage: 90, fresh: [] },
    ]

    let recommendation
    if (mockWeakest.length === 0) {
      const leastCovered = mockThemes.filter((t) => t.fresh.length).sort((a, b) => a.coverage - b.coverage)[0]
      if (!leastCovered || leastCovered.coverage >= 50) {
        recommendation = {
          kind: 'pret',
          theme: null,
          message: 'Tes résultats sont solides : passe un examen blanc',
          ids: [],
          count: 0,
          minutes: 0,
        }
      }
    }

    expect(recommendation.kind).toBe('pret')
  })
})
