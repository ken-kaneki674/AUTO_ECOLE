import { ref } from 'vue'

// Catégories de permis. Le manuel DGTT et le cours ont un tronc commun (signalisation,
// priorités, mécanique…) et des chapitres propres à chaque permis : un candidat ne
// travaille que le tronc commun et le chapitre de son permis. Les permis C et D
// exigent le permis B : leurs candidats révisent aussi le chapitre du permis B.
export const PERMIS = [
  { id: 'A', label: 'A1 · A2 · A3', name: 'Deux-roues', dgtt: [7], cours: [10] },
  { id: 'B', label: 'B', name: 'Voiture', dgtt: [8], cours: [12] },
  { id: 'C', label: 'C · C1', name: 'Poids lourds', dgtt: [9, 8], cours: [12] },
  { id: 'D', label: 'D', name: 'Transport en commun', dgtt: [10, 8], cours: [12] },
]
export const ALL_PERMIS = 'tous'

const SPECIFIC = {
  dgtt: PERMIS.flatMap((p) => p.dgtt),
  cours: PERMIS.flatMap((p) => p.cours),
}

export function findPermis(id) {
  return PERMIS.find((p) => p.id === id) ?? null
}

// Permis auquel appartient un chapitre (le premier qui le cite : B pour le
// chapitre VIII), ou null pour le tronc commun.
export function permisOfChapter(source, chapterNum) {
  return PERMIS.find((p) => p[source].includes(chapterNum)) ?? null
}

// Un chapitre ('dgtt' ou 'cours') fait-il partie du programme de ce permis ?
export function permisIncludes(permisId, source, chapterNum) {
  if (permisId === ALL_PERMIS || !SPECIFIC[source].includes(chapterNum)) return true
  return findPermis(permisId)?.[source].includes(chapterNum) ?? true
}

export function permisLabel(id) {
  const p = findPermis(id)
  return p ? `permis ${p.label}` : 'tous les permis'
}

const STORAGE_KEY = 'code-route-permis'

function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === ALL_PERMIS || findPermis(value) ? value : null
  } catch {
    return null
  }
}

// Permis préparé, partagé par toutes les pages ; le permis B par défaut.
const permis = ref(readStored() ?? 'B')

export function usePermis() {
  function setPermis(value) {
    permis.value = value
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // stockage indisponible : le choix vaut pour la session
    }
  }

  return { permis, setPermis }
}
