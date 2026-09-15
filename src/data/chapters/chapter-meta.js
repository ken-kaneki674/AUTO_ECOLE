// Métadonnées des 14 chapitres du manuel : identifiant, numéro affiché, titre,
// et route associée. Sert à générer le sommaire, la navigation et l'index de recherche.
export const chapters = [
  { id: 'ch1', num: 1, title: 'Les signalisations routières' },
  { id: 'ch2', num: 2, title: 'Les règles de priorité' },
  { id: 'ch3', num: 3, title: 'Croisements et dépassements' },
  { id: 'ch4', num: 4, title: 'Arrêt et stationnement' },
  { id: 'ch5', num: 5, title: 'La vitesse' },
  { id: 'ch6', num: 6, title: 'Route, route pour automobiles, autoroute' },
  { id: 'ch7', num: 7, title: "Équipement d'une voiture" },
  { id: 'ch8', num: 8, title: 'Mécanique élémentaire du moteur à essence' },
  { id: 'ch9', num: 9, title: 'Secourisme élémentaire' },
  { id: 'ch10', num: 10, title: 'Les deux-roues (A1 · A2 · A3)' },
  { id: 'ch11', num: 11, title: "Les cas d'abstinence à la conduite" },
  { id: 'ch12', num: 12, title: 'Le permis de conduire catégorie B' },
  { id: 'ch13', num: 13, title: 'Le changement de direction' },
  { id: 'ch14', num: 14, title: 'Les panneaux : catalogue' },
]

export function chapterRoute(id) {
  const chapter = chapters.find((c) => c.id === id)
  return chapter ? { name: 'chapitre', params: { id: String(chapter.num) } } : null
}
