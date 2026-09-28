// Contenu de la page Lexique : chiffres clés, moyens mnémotechniques, lexique et
// plan de révision.
//
// Chaque chiffre porte sa source : `dgtt` = question du manuel officiel de la DGTT
// (édition 2011), `cours` = règle générale enseignée dans le cours. `k` renvoie à une
// valeur de src/data/valeursBenin.js, affichée par <ValeurBenin>.
import { beninGeneralites } from './benin/meta.js'

export const chiffres = [
  {
    theme: 'Vitesses',
    items: [
      { notion: 'Vitesse maximale en agglomération', k: 'vitesse_agglomeration' },
      { notion: 'Permis de moins d’un an, sur route', k: 'vitesse_novice' },
      { notion: 'Visibilité réduite à 50 m', valeur: '50 km/h au maximum', source: 'dgtt', ref: 'Q399' },
      { notion: 'Écart de vitesse recommandé pour dépasser', valeur: '20 km/h', source: 'dgtt', ref: 'Q310' },
    ],
  },
  {
    theme: 'Distances',
    items: [
      { notion: 'Temps de réaction', valeur: '1 seconde environ', source: 'cours' },
      { notion: 'Distance de réaction', valeur: '(V ÷ 10) × 3 mètres', source: 'cours' },
      { notion: 'Distance de freinage sur sol sec', valeur: '(V ÷ 10)² mètres — plus longue sur sol mouillé', source: 'cours' },
      { notion: 'Distance d’arrêt à 90 km/h', valeur: '81 m environ', source: 'dgtt', ref: 'Q392' },
      { notion: 'Intervalle de sécurité à 50 km/h', valeur: '15 m environ', source: 'dgtt', ref: 'Q516' },
      { notion: 'Intervalle de sécurité à 90 km/h', valeur: '25 m environ', source: 'dgtt', ref: 'Q460' },
      { notion: 'Intervalle entre poids lourds (> 3,5 t, > 7 m) en rase campagne', valeur: '50 m environ', source: 'dgtt', ref: 'Q720' },
      { notion: 'Écart latéral pour dépasser une automobile', valeur: '0,50 m environ', source: 'dgtt', ref: 'Q269' },
      { notion: 'Écart pour dépasser un piéton ou un cycliste en agglomération', valeur: '1 m environ', source: 'dgtt', ref: 'Q270' },
    ],
  },
  {
    theme: 'Signalisation',
    items: [
      { notion: 'Panneaux de danger en agglomération', k: 'distance_panneau_danger_agglomeration' },
      { notion: 'Panneaux de danger en rase campagne', k: 'distance_panneau_danger_hors_agglomeration' },
      { notion: 'Panneaux AB1 / AB2 en rase campagne', valeur: '150 m avant l’intersection', source: 'dgtt', ref: 'Q139, Q140' },
      { notion: 'Ligne discontinue hors agglomération', valeur: 'traits de 3 m, espacés de 10 m', source: 'dgtt', ref: 'Q5, Q8' },
      { notion: 'Triangle de présignalisation', k: 'distance_triangle_agglomeration' },
      { notion: 'Portée des feux de route', valeur: '100 m environ', source: 'dgtt', ref: 'Q853' },
      { notion: 'Plaque d’immatriculation éclairée', valeur: 'lisible à 20 m', source: 'dgtt', ref: 'Q822' },
    ],
  },
  {
    theme: 'Véhicule et chargement',
    items: [
      { notion: 'Profondeur minimale des rainures d’un pneu', valeur: '1,6 mm (1 mm pour un poids lourd)', source: 'dgtt', ref: 'Q871, Q786' },
      { notion: 'Visite technique d’un véhicule léger privé', valeur: 'tous les ans', source: 'dgtt', ref: 'Q864' },
      { notion: 'Remorque attelée à un véhicule B', k: 'remorque_ptac_sans_extension' },
      { notion: 'Carte grise propre à la remorque', valeur: 'au-delà de 500 kg de PTAC', source: 'dgtt', ref: 'Q688' },
      { notion: 'Chargement dépassant à l’arrière', valeur: '3 m au maximum ; signalé au-delà de 1 m', source: 'dgtt', ref: 'Q781, Q768' },
      { notion: 'Chargement dépassant à l’avant', valeur: 'interdit (0 m)', source: 'dgtt', ref: 'Q780' },
    ],
  },
  {
    theme: 'Alcool, fatigue, secours',
    items: [
      { notion: 'Alcoolémie maximale', k: 'alcoolemie_generale' },
      { notion: 'Alcoolémie maximale — conducteur novice', k: 'alcoolemie_novice' },
      { notion: 'Élimination de l’alcool', valeur: '0,10 à 0,15 g/l par heure', source: 'cours' },
      { notion: 'Pause sur un long trajet', valeur: 'au moins 10 minutes toutes les 2 heures', source: 'dgtt', ref: 'Q593' },
      { notion: 'Repos d’un conducteur de plus de 3,5 t', valeur: '45 min après 4 h 30 de conduite', source: 'dgtt', ref: 'Q719' },
      { notion: 'Réanimation cardio-pulmonaire', valeur: '30 compressions / 2 insufflations', source: 'cours' },
      { notion: 'Police secours', k: 'numero_police' },
      { notion: 'Sapeurs-pompiers', k: 'numero_pompiers' },
    ],
  },
]

export const mnemos = [
  { sigle: 'A.F.P.M.', sens: 'Agent, Feux, Panneaux, Marquage', role: 'la hiérarchie de la signalisation' },
  { sigle: 'P.A.S.', sens: 'Protéger, Alerter, Secourir', role: 'l’ordre des gestes de secours' },
  { sigle: 'C.A.P.R.T.', sens: 'Contrôler, Avertir, se Placer, Ralentir, Tourner', role: 'tout changement de direction' },
  { sigle: 'A.C.E.É.', sens: 'Admission, Compression, Explosion, Échappement', role: 'le cycle du moteur à quatre temps' },
  { sigle: 'O.A.D.D.C.R.', sens: 'Observer, Avertir, Déboîter, Doubler, Contrôler, se Rabattre', role: 'les six temps du dépassement' },
]

// Termes propres au cours, complétés par les définitions et abréviations du
// chapitre I du manuel DGTT (marquées `dgtt`).
const termesCours = [
  ['Accotement', 'Partie de la route située au bord de la chaussée, non destinée à la circulation des véhicules.'],
  ['Adhérence', 'Capacité des pneus à « accrocher » la route ; elle diminue sur chaussée mouillée, avec des pneus usés ou à grande vitesse.'],
  ['Alcootest / éthylotest', 'Appareil de dépistage de l’alcoolémie ; le dosage exact se fait par analyse de sang ou à l’éthylomètre (Q567, Q568).'],
  ['Angle mort', 'Zone autour du véhicule qu’aucun rétroviseur ne couvre ; se contrôle par un coup d’œil par-dessus l’épaule.'],
  ['Aquaplaning', 'Perte d’adhérence quand une pellicule d’eau s’interpose entre le pneu et la chaussée.'],
  ['Assurance au tiers', 'Assurance minimale obligatoire : elle couvre les dommages causés à autrui (Q603, Q865).'],
  ['Balise', 'Dispositif implanté le long de la route pour signaler un virage, une intersection, un obstacle ou un passage à niveau.'],
  ['BAU', 'Bande d’arrêt d’urgence, sur autoroute : réservée aux arrêts en cas de panne ou de malaise et aux véhicules d’intervention.'],
  ['Carte grise', 'Certificat d’immatriculation du véhicule, à présenter avec le permis et l’attestation d’assurance.'],
  ['Céder le passage', 'Laisser passer les usagers prioritaires, en s’arrêtant si nécessaire.'],
  ['Croisement', 'Rencontre de deux véhicules circulant en sens inverse ; chacun serre sa droite.'],
  ['Délinéateur', 'Balise à bande réfléchissante qui souligne le bord de la chaussée la nuit.'],
  ['Dépassement', 'Fait de doubler un véhicule circulant dans le même sens.'],
  ['Distance d’arrêt', 'Distance de réaction + distance de freinage.'],
  ['Distance de freinage', 'Distance parcourue entre le début du freinage et l’arrêt ; elle dépend de la vitesse, des pneus et de la chaussée.'],
  ['Distance de réaction', 'Distance parcourue pendant le temps de réaction, avant que le conducteur ne commence à freiner.'],
  ['Feux de croisement', '« Codes » : éclairent sans éblouir ; obligatoires quand on croise ou suit un autre usager de près.'],
  ['Feux de route', '« Phares » : éclairent loin (environ 100 m) ; à éteindre quand on croise ou suit un usager.'],
  ['Flèche de rabattement', 'Flèche peinte sur la chaussée annonçant la fin d’une ligne discontinue : il faut se rabattre à droite.'],
  ['Force centrifuge', 'Force qui déporte le véhicule vers l’extérieur d’un virage ; elle croît avec le carré de la vitesse.'],
  ['Frein moteur', 'Ralentissement obtenu en levant le pied de l’accélérateur et en rétrogradant.'],
  ['Ligne continue', 'Marquage qu’il est interdit de franchir ou de chevaucher.'],
  ['Ligne discontinue', 'Marquage qu’on peut franchir, notamment pour dépasser, si la manœuvre est sans danger.'],
  ['Ligne mixte', 'Ligne continue doublée d’une discontinue : on obéit à celle qui est de son côté.'],
  ['Panonceau', 'Petit panneau placé sous un panneau pour en préciser la portée (distance, longueur, catégorie de véhicules…).'],
  ['Période probatoire', 'Première année de permis, pendant laquelle la vitesse est limitée (90 km/h sur route, 110 km/h sur autoroute).'],
  ['PLS', 'Position latérale de sécurité : victime couchée sur le côté pour dégager ses voies respiratoires.'],
  ['Priorité à droite', 'Règle par défaut aux intersections sans signalisation : on cède le passage aux véhicules venant de droite.'],
  ['Rétrograder', 'Passer au rapport de vitesse inférieur.'],
  ['SAMU / SMUR', 'Service d’aide médicale urgente / Service mobile d’urgence et de réanimation.'],
  ['Signalisation horizontale', 'Ensemble des marques peintes sur la chaussée (Q2).'],
  ['Signalisation verticale', 'Ensemble des panneaux et balises.'],
  ['Suraccident', 'Nouvel accident survenant sur les lieux d’un accident déjà produit ; on l’évite en protégeant la zone.'],
  ['Terre-plein central', 'Séparation physique entre les deux chaussées d’une route pour automobiles ou d’une autoroute.'],
  ['Visite technique', 'Contrôle obligatoire de l’état du véhicule ; tous les ans pour un véhicule léger privé (Q864).'],
  ['Zébras', 'Lignes hachurées sur lesquelles on ne peut ni circuler, ni s’arrêter, ni stationner (Q14).'],
]

function clean(term) {
  // « Le code de la route » → « Code de la route », pour le classement alphabétique.
  return term.replace(/^(Le |La |Les |L’)/, '').replace(/^./, (c) => c.toUpperCase())
}

export const lexique = [
  ...termesCours.map(([terme, definition]) => ({ terme, definition, source: 'cours' })),
  ...beninGeneralites.definitions.map(([terme, definition]) => ({ terme: clean(terme), definition, source: 'dgtt' })),
  ...beninGeneralites.abreviations.map(([terme, definition]) => ({ terme, definition, source: 'dgtt' })),
]
  // Un terme défini par le manuel DGTT remplace celui du cours.
  .filter((t, i, all) => t.source === 'dgtt' || !all.some((o) => o.source === 'dgtt' && o.terme.toLowerCase() === t.terme.toLowerCase()))
  .sort((a, b) => a.terme.localeCompare(b.terme, 'fr', { sensitivity: 'base' }))

// Plan de révision : chapitres du cours et chapitres du manuel DGTT par semaine.
export const planRevision = [
  {
    titre: 'Semaine 1 — les règles',
    cours: [1, 2, 14],
    dgtt: [2],
    travail: 'Apprendre les familles de panneaux et la hiérarchie ; refaire les QCM jusqu’à 100 %.',
  },
  {
    titre: 'Semaine 2 — la conduite',
    cours: [3, 4, 5, 6, 13],
    dgtt: [3, 4, 5],
    travail: 'Mémoriser les distances et les manœuvres ; s’auto-interroger avec les fiches ci-dessus.',
  },
  {
    titre: 'Semaine 3 — le véhicule et l’humain',
    cours: [7, 8, 9, 10, 11, 12],
    dgtt: [6, 7, 8, 9, 10, 11],
    travail: 'Mécanique, secourisme et permis ; passer l’examen blanc en conditions réelles.',
  },
]
