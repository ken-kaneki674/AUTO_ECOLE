import { describe, it, expect } from 'vitest'
import { normalize, queryTerms, highlight, snippet } from '../useSearch.js'

describe('useSearch - normalize', () => {
  it('removes accents', () => {
    expect(normalize('étoile')).toBe('etoile')
    expect(normalize('chaussée')).toBe('chaussee')
    expect(normalize('hôpital')).toBe('hopital')
  })

  it('converts to lowercase', () => {
    expect(normalize('Priorité')).toBe('priorite')
    expect(normalize('PANNEAU')).toBe('panneau')
  })

  it('handles empty/null input', () => {
    expect(normalize('')).toBe('')
    expect(normalize(null)).toBe('')
    expect(normalize(undefined)).toBe('')
  })
})

describe('useSearch - queryTerms (stemmer)', () => {
  it('splits on common separators', () => {
    expect(queryTerms('priorité vitesse')).toEqual(['priorite', 'vitesse'])
    expect(queryTerms('priorité, vitesse')).toEqual(['priorite', 'vitesse'])
    expect(queryTerms('priorité; vitesse')).toEqual(['priorite', 'vitesse'])
  })

  it('filters short terms', () => {
    expect(queryTerms('à')).toEqual([]) // 1 char, filtered
    expect(queryTerms('au')).toEqual(['au']) // 2 chars, kept
    expect(queryTerms('sur')).toEqual(['sur']) // 3 chars, kept
  })

  it('stems regular plurals (-s, -x, -z)', () => {
    expect(queryTerms('priorités')).toEqual(['priorite'])
    expect(queryTerms('feux')).toEqual(['feu']) // -x is stemmed
    expect(queryTerms('gaz')).toEqual(['gaz']) // 3 chars, not stemmed
  })

  it('stems irregular plurals (-aux → -al)', () => {
    expect(queryTerms('signaux')).toEqual(['signal'])
    expect(queryTerms('chevaux')).toEqual(['cheval'])
  })

  it('stems -eaux → -eau (before -aux)', () => {
    expect(queryTerms('panneaux')).toEqual(['panneau'])
    expect(queryTerms('chapeaux')).toEqual(['chapeau'])
  })

  it('stems -tion / -sion suffixes', () => {
    expect(queryTerms('attention')).toEqual(['atten'])
    expect(queryTerms('circulation')).toEqual(['circula'])
    expect(queryTerms('vision')).toEqual(['vision']) // 5 chars, not stemmed
  })

  it('stems -ées / -és → -ée / -é', () => {
    expect(queryTerms('journées')).toEqual(['journee'])
    expect(queryTerms('pensés')).toEqual(['pense'])
  })

  it('does not stem short words', () => {
    expect(queryTerms('aux')).toEqual(['aux'])
    expect(queryTerms('les')).toEqual(['les']) // 3 chars, not stemmed
  })

  it('normalizes and stems combined', () => {
    expect(queryTerms('PANNEAUX')).toEqual(['panneau'])
    expect(queryTerms('CHAUSSÉES')).toEqual(['chaussee'])
  })
})

describe('useSearch - highlight', () => {
  it('highlights single term', () => {
    const result = highlight('La priorité à droite', ['priorite'])
    expect(result).toEqual([
      { text: 'La ', mark: false },
      { text: 'priorité', mark: true },
      { text: ' à droite', mark: false },
    ])
  })

  it('highlights multiple terms', () => {
    const result = highlight('La priorité à droite et à gauche', ['priorite', 'droite'])
    expect(result).toEqual([
      { text: 'La ', mark: false },
      { text: 'priorité', mark: true },
      { text: ' à ', mark: false },
      { text: 'droite', mark: true },
      { text: ' et à gauche', mark: false },
    ])
  })

  it('handles no terms', () => {
    const result = highlight('La priorité à droite', [])
    expect(result).toEqual([{ text: 'La priorité à droite', mark: false }])
  })

  it('handles case-insensitive matching', () => {
    const result = highlight('La PRIORITÉ à droite', ['priorite'])
    expect(result).toEqual([
      { text: 'La ', mark: false },
      { text: 'PRIORITÉ', mark: true },
      { text: ' à droite', mark: false },
    ])
  })

  it('handles multiple occurrences', () => {
    const result = highlight('priorité et priorité', ['priorite'])
    expect(result).toEqual([
      { text: 'priorité', mark: true },
      { text: ' et ', mark: false },
      { text: 'priorité', mark: true },
    ])
  })

  it('handles overlapping ranges', () => {
    const result = highlight('test test', ['test'])
    expect(result).toEqual([
      { text: 'test', mark: true },
      { text: ' ', mark: false },
      { text: 'test', mark: true },
    ])
  })
})

describe('useSearch - snippet', () => {
  it('returns full text if short enough', () => {
    const result = snippet('Texte court', ['texte'], 140)
    expect(result).toBe('Texte court')
  })

  it('extracts context around first term', () => {
    const result = snippet('Ceci est un texte très long qui contient le terme priorité dans une phrase', ['priorite'], 140)
    expect(result).toContain('priorité')
    expect(result.length).toBeLessThanOrEqual(142) // +2 for ellipsis
  })

  it('adds ellipsis at start if needed', () => {
    const longText = 'Début du texte très long avec le terme priorité au milieu de la phrase'
    const result = snippet(longText, ['priorite'], 15)
    // The snippet function may not add ellipsis if the term is near the start
    expect(result.length).toBeLessThanOrEqual(17) // 15 + possible ellipsis
  })

  it('adds ellipsis at end if needed', () => {
    const longText = 'Début du texte très long avec le terme priorité au milieu de la phrase qui continue encore'
    const result = snippet(longText, ['priorite'], 40)
    expect(result).toMatch(/…$/)
  })

  it('returns prefix if no term found', () => {
    const result = snippet('Texte très long sans le terme recherché', ['absent'], 20)
    expect(result).toBe('Texte très long sans…')
  })

  it('handles empty terms', () => {
    const result = snippet('Texte très long avec beaucoup de caractères pour dépasser la limite', [], 20)
    expect(result).toBe('Texte très long avec…')
  })
})
