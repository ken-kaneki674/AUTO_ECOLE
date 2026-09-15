import { computed, ref } from 'vue'
import { searchIndex } from '../data/searchIndex.js'

function normalize(str) {
  return str
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

export function useSearch() {
  const query = ref('')

  const results = computed(() => {
    const q = normalize(query.value.trim())
    if (q.length < 2) return []
    return searchIndex
      .filter((entry) => normalize(entry.text).includes(q) || normalize(entry.title).includes(q))
      .slice(0, 20)
  })

  return { query, results }
}
