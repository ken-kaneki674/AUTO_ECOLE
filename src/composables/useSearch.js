import { computed, ref, shallowRef, watch } from 'vue'
import { loadSearchIndex, getLightIndex, SEARCH_TYPES } from '../data/searchIndex.js'

export function normalize(str) {
  return String(str ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

// Stemmer français léger adapté au domaine du code de la route.
// Règles suffixales : supprime les terminaisons courantes pour trouver la racine.
function stem(term) {
  if (term.length <= 3) return term

  // -eaux → -eau (panneaux → panneau) - doit être avant -aux
  if (term.endsWith('eaux') && term.length > 5) {
    return term.slice(0, -1)
  }

  // Pluriels irréguliers : -aux → -al (signaux → signal)
  if (term.endsWith('aux') && term.length > 5) {
    const stem = term.slice(0, -3) + 'al'
    // Ne pas appliquer si le résultat est trop court
    if (stem.length >= 3) return stem
  }

  // -tion / -sion (suffixes nominaux) : attention → atten, circulation → circul
  if (term.endsWith('tion') && term.length > 6) {
    return term.slice(0, -4)
  }
  if (term.endsWith('sion') && term.length > 6) {
    return term.slice(0, -4)
  }

  // Pluriels réguliers : -s / -x / -z
  if (/[sxz]$/.test(term)) {
    return term.slice(0, -1)
  }

  // -ées / -és → -ée / -é (accord féminin/masculin pluriel)
  if (term.endsWith('ees') && term.length > 4) {
    return term.slice(0, -2)
  }
  if (term.endsWith('es') && term.length > 4) {
    return term.slice(0, -1)
  }

  return term
}

// Termes de la requête, sans accents ; le pluriel est ramené au singulier pour
// que « priorités » trouve « priorité » et inversement.
export function queryTerms(query) {
  return normalize(query)
    .split(/[\s,;:!?'’()«»"]+/)
    .filter((t) => t.length >= 2)
    .map(stem)
}

// Découpe un texte en morceaux { text, mark } pour surligner les termes trouvés,
// sans passer par du HTML.
export function highlight(text, terms) {
  const source = String(text ?? '')
  if (!terms.length) return [{ text: source, mark: false }]
  const plain = normalize(source)
  const ranges = []
  for (const term of terms) {
    let from = 0
    let at
    while ((at = plain.indexOf(term, from)) !== -1) {
      ranges.push([at, at + term.length])
      from = at + term.length
    }
  }
  ranges.sort((a, b) => a[0] - b[0])
  const parts = []
  let cursor = 0
  for (const [start, end] of ranges) {
    if (start < cursor) continue
    if (start > cursor) parts.push({ text: source.slice(cursor, start), mark: false })
    parts.push({ text: source.slice(start, end), mark: true })
    cursor = end
  }
  if (cursor < source.length) parts.push({ text: source.slice(cursor), mark: false })
  return parts
}

// Extrait du texte autour du premier terme trouvé.
export function snippet(text, terms, length = 140) {
  const source = String(text ?? '')
  if (source.length <= length) return source
  const at = terms.length ? normalize(source).indexOf(terms[0]) : -1
  if (at < 0) return `${source.slice(0, length)}…`
  const start = Math.max(0, at - 40)
  return `${start ? '…' : ''}${source.slice(start, start + length)}${start + length < source.length ? '…' : ''}`
}

const index = shallowRef(null)
let loading = null
export function ensureSearchIndex() {
  // Phase 1 : utiliser l'index léger immédiatement
  if (!index.value) {
    index.value = getLightIndex().map((e) => ({ ...e, _title: normalize(e.title), _text: normalize(`${e.title} ${e.text ?? ''}`) }))
  }
  // Phase 2 : charger l'index complet en arrière-plan
  loading ??= loadSearchIndex().then((entries) => {
    index.value = entries.map((e) => ({ ...e, _title: normalize(e.title), _text: normalize(`${e.title} ${e.text ?? ''}`) }))
  })
  return loading
}

function score(entry, terms, rawQuery) {
  let total = 0
  for (const term of terms) {
    if (!entry._text.includes(term)) return 0
    if (entry._title.includes(term)) {
      total += 10
      if (entry._title.startsWith(term)) total += 6
      if (new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(entry._title)) total += 4
    } else {
      // Terme présent seulement dans le texte : plus il revient, plus c'est pertinent.
      total += 2 + Math.min(4, entry._text.split(term).length - 2)
    }
  }
  if (entry._title === rawQuery) total += 40
  if (entry.kind === 'Page' || entry.kind?.startsWith('Chapitre')) total += 6
  // Les titres courts (terme de lexique, panneau, section) sont plus pertinents.
  total += Math.max(0, 6 - entry._title.length / 25)
  return total
}

// Recherche : renvoie { groups: [{ type, label, icon, total, items }] , total }.
export function search(query, { type = null, perGroup = Infinity } = {}) {
  const terms = queryTerms(query)
  if (!terms.length || !index.value) return { groups: [], total: 0, terms }
  const raw = normalize(query.trim())
  const scored = []
  for (const entry of index.value) {
    if (type && entry.type !== type) continue
    const s = score(entry, terms, raw)
    if (s > 0) scored.push({ entry, s })
  }
  scored.sort((a, b) => b.s - a.s)
  const groups = SEARCH_TYPES.map((t) => {
    const all = scored.filter((r) => r.entry.type === t.id).map((r) => r.entry)
    return { ...t, total: all.length, items: all.slice(0, perGroup) }
  }).filter((g) => g.total)
  return { groups, total: scored.length, terms }
}

export function useSearch(options = {}) {
  const query = ref('')
  const ready = computed(() => Boolean(index.value))
  // Charger l'index léger immédiatement, puis l'index complet en arrière-plan
  ensureSearchIndex()
  watch(query, (value) => {
    if (value.trim().length >= 2) ensureSearchIndex()
  })
  const results = computed(() => (index.value ? search(query.value, options) : { groups: [], total: 0, terms: [] }))
  return { query, results, ready }
}
