import { computed, ref, shallowRef } from 'vue'
import { searchIndex } from '../data/searchIndex.js'
import { useRegion } from './useRegion.js'
import { beninChapters, loadBeninChapter, isPlayable } from '../data/benin/meta.js'

function normalize(str) {
  return str
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

// Les ~900 questions officielles du Bénin ne sont chargées qu'à la première
// recherche faite en région Bénin, pour ne pas alourdir le chargement initial.
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
          title: `Bénin · chapitre ${chapter.roman} · Q${question.num}`,
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
  const { region } = useRegion()

  const results = computed(() => {
    const q = normalize(query.value.trim())
    if (q.length < 2) return []
    let entries = searchIndex
    if (region.value === 'benin') {
      loadBeninIndex()
      entries = entries.concat(beninIndex.value)
    }
    return entries
      .filter((entry) => normalize(entry.text).includes(q) || normalize(entry.title).includes(q))
      .slice(0, 20)
  })

  return { query, results }
}
