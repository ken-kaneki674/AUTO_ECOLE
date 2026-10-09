import { ref } from 'vue'

// Thème clair / sombre. Sans choix enregistré, on suit le réglage du système
// (et ses changements en direct) ; un clic sur le bouton fixe le choix.
const STORAGE_KEY = 'theme'
const media = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null

function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

const stored = ref(readStored())
const theme = ref(stored.value ?? (media?.matches ? 'dark' : 'light'))

function apply(value) {
  theme.value = value
  document.documentElement.dataset.theme = value
}

media?.addEventListener('change', (event) => {
  if (!stored.value) apply(event.matches ? 'dark' : 'light')
})

export function useTheme() {
  function toggleTheme() {
    const next = theme.value === 'dark' ? 'light' : 'dark'
    stored.value = next
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // stockage indisponible (navigation privée) : le choix vaut pour la session
    }
    apply(next)
  }

  return { theme, toggleTheme }
}
