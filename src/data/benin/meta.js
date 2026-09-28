// Banque de questions officielle du Bénin : « Le manuel du candidat à l'examen du
// permis de conduire », Ministère des Travaux Publics et des Transports — DGTT,
// édition 2011. Les fichiers chN.json sont générés par scripts/import-benin.mjs ;
// le chapitre I du manuel (généralités) ne contient pas de questions.
export const beninSource = {
  title: 'Le manuel du candidat à l’examen du permis de conduire',
  publisher: 'Ministère des Travaux Publics et des Transports — Direction Générale des Transports Terrestres (DGTT)',
  edition: 'Édition 2011',
}

export const beninChapters = [
  { num: 2, roman: 'II', title: 'Signalisations' },
  { num: 3, roman: 'III', title: 'Règles de priorité, dépassement, croisement' },
  { num: 4, roman: 'IV', title: 'Arrêt, stationnement, changement de direction, vitesse et manœuvres' },
  { num: 5, roman: 'V', title: 'Route pour automobiles, autoroute' },
  { num: 6, roman: 'VI', title: 'Infractions, incivisme, secourisme' },
  { num: 7, roman: 'VII', title: 'Permis de conduire A1 · A2 · A3' },
  { num: 8, roman: 'VIII', title: 'Permis de conduire catégorie B' },
  { num: 9, roman: 'IX', title: 'Permis de conduire catégories C et C1' },
  { num: 10, roman: 'X', title: 'Permis de conduire catégorie D' },
  { num: 11, roman: 'XI', title: 'Mécanique, équipement, entretien, documents administratifs' },
]

// Numéros des questions par chapitre (index léger généré avec les JSON), pour le
// sommaire et la progression sans charger les ~900 questions.
import index from './index.json'

export function beninQuestionIds(num) {
  return (index[num] ?? []).map((n) => `bj-q${n}`)
}

export function beninQuestionCount() {
  return Object.values(index).reduce((total, nums) => total + nums.length, 0)
}

const loaders = import.meta.glob('./ch*.json', { import: 'default' })
export async function loadBeninChapter(num) {
  const loader = loaders[`./ch${num}.json`]
  return loader ? loader() : []
}

// Une question n'est jouable que si le manuel fournit au moins deux choix et un
// corrigé qui pointe vers l'un d'eux.
export function isPlayable(question) {
  return question.choices.length >= 2 && question.correct.length > 0
}

// Chapitre I du manuel : généralités.
export const beninGeneralites = {
  abreviations: [
    ['TIR', 'Transit International Routier'],
    ['TCR', 'Transport en Commun Restrictif'],
    ['Dr', 'Catégorie « D » restrictif'],
    ['PTAC', 'Poids Total Autorisé en Charge'],
    ['PTRA', 'Poids Total Roulant Autorisé'],
  ],
  definitions: [
    ['Le code de la route', 'Ensemble des conventions et protocoles d’accord destinés à faciliter une circulation routière sûre et rapide ; il indique ou rappelle les prescriptions aux usagers de la route.'],
    ['La route', 'Passage spécialement aménagé et ouvert à la circulation publique, revêtu ou non. À la traversée d’une ville, la route devient une rue.'],
    ['La route pour automobiles', 'Passage ouvert aux véhicules à moteur (sauf cyclomoteurs), composé de deux chaussées séparées par des glissières ou un terre-plein central, pouvant comporter des intersections.'],
    ['L’intersection', 'Lieu de jonction ou de croisement de deux ou plusieurs chaussées, quels que soient les angles de leurs axes.'],
    ['L’autoroute', 'Route à deux chaussées séparées par un terre-plein central, réservée à la circulation rapide des véhicules à moteur, sans intersection et accessible seulement en des points aménagés.'],
    ['La chaussée', 'Partie de la route réservée à la circulation des véhicules.'],
    ['La voie', 'Subdivision de la chaussée assez large pour la circulation d’une file de véhicules.'],
    ['L’agglomération', 'Espace où sont groupés des immeubles bâtis rapprochés ; entrée et sortie signalées par des panneaux.'],
    ['La piste cyclable', 'Passage, longeant ou non une chaussée, exclusivement réservé aux cycles et cyclomoteurs.'],
    ['La bande cyclable', 'Voie d’une chaussée à plusieurs voies exclusivement réservée aux cycles et cyclomoteurs.'],
    ['Le permis de conduire', 'Autorisation officielle de conduire les véhicules à moteur d’une catégorie donnée.'],
    ['Les panneaux de danger', 'Triangulaires à listel rouge, placés à 50 m du danger en agglomération et à 150 m en rase campagne.'],
    ['Les véhicules prioritaires', 'Police, gendarmerie, sapeurs-pompiers, SAMU / SMUR — prioritaires lorsqu’ils sont en mission et font usage de leurs avertisseurs sonores et/ou lumineux.'],
  ],
  permis: [
    ['A1', 'Vélomoteur ou cyclomoteur de 75 cm³ au plus', '16 ans'],
    ['A2', 'Motocyclette ou quadricycle de 75 à 400 cm³', '18 ans'],
    ['A3', 'Motocycle, tricycle ou quadricycle de plus de 400 cm³', '21 ans'],
    ['B', 'Transport de personnes ou de marchandises, PTAC ≤ 3,5 t ou 8 places hors conducteur ; remorque ≤ 750 kg', '18 ans'],
    ['C', 'Transport de marchandises ou de matériel, PTAC ≤ 18 t', '—'],
    ['C1', 'Transport de marchandises ou de matériel, PTAC > 18 t', '21 ans'],
    ['Dr (TCR)', 'Transport en commun de 18 places au plus, PTAC ≤ 3,5 t', '21 ans'],
    ['D', 'Transport en commun de plus de 18 places, PTAC > 3,5 t', '21 ans'],
    ['F', 'Réservé aux personnes en situation de handicap physique', '—'],
  ],
}
