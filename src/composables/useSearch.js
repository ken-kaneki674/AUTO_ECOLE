import { computed, ref, shallowRef } from 'vue'
import { searchIndex } from '../data/searchIndex.js'
import { beninChapters, loadBeninChapter, isPlayable } from '../data/benin/meta.js'

function normalize(str) {
  return str
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

// Les ~900 questions officielles de la DGTT ne sont chargées qu'à la première
// recherche, pour ne pas alourdir le chargement initial.
const beninIndex = shallowRef([])
let beninLoading = null

function loadBeninIndex() {
  beninLoading ??= (async () => {
    const entries = []
    for (const chapter of beninChapters) {
      for (const question of await loadBeninChapter(chapter.num)) {
        if (!isPlayable(question)) continue
        entries.push({
          type: 'question-benin',
          title: `Manuel DGTT · chapitre ${chapter.roman} · Q${question.num}`,
          text: question.question,
          to: { name: 'benin-chapitre', params: { id: String(chapter.num) } },
        })
      }
    }
    beninIndex.value = entries
  })()
  return beninLoading
}

export function useSearch() {
  const query = ref('')

  const results = computed(() => {
    const q = normalize(query.value.trim())
    if (q.length < 2) return []
    loadBeninIndex()
    return searchIndex
      .concat(beninIndex.value)
      .filter((entry) => normalize(entry.text).includes(q) || normalize(entry.title).includes(q))
      .slice(0, 20)
  })

  return { query, results }
}
