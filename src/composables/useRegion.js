import { ref, watch } from 'vue'

const STORAGE_KEY = 'code-route-region'

function loadRegion() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'france' || saved === 'benin' ? saved : 'benin'
  } catch {
    return 'benin'
  }
}

const region = ref(loadRegion())

watch(region, (value) => {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // stockage indisponible (navigation privée, quota) : on continue sans persister
  }
})

export function useRegion() {
  function setRegion(value) {
    if (value === 'benin' || value === 'france') region.value = value
  }
  function toggleRegion() {
    region.value = region.value === 'benin' ? 'france' : 'benin'
  }
  return { region, setRegion, toggleRegion }
}
