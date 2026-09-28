// Valeurs réglementaires béninoises, affichées dans le cours par <ValeurBenin k="...">.
//
// `verified: true` : la valeur est donnée par le manuel officiel de la DGTT
// (« Le manuel du candidat à l'examen du permis de conduire », édition 2011) ;
// `source` indique où. `verified: false` : valeur usuelle à confirmer auprès du code
// de la route en vigueur ou de l'auto-école, signalée par « ⚠ » dans le cours.
export const valeursBenin = {
  vitesse_agglomeration: {
    label: 'Vitesse maximale en agglomération',
    value: '50 km/h',
    verified: true,
    source: 'Manuel DGTT, Q486 et Q771',
  },
  vitesse_hors_agglomeration: {
    label: 'Vitesse maximale sur route à double sens',
    value: '90 km/h (variable selon l’axe)',
    verified: false,
  },
  vitesse_voie_express: {
    label: 'Vitesse maximale sur route pour automobiles',
    value: 'fixée par la réglementation nationale',
    verified: false,
    source: 'Manuel DGTT, Q485',
  },
  vitesse_autoroute: {
    label: 'Vitesse maximale sur autoroute',
    value: 'fixée par la réglementation nationale (110 km/h en période probatoire)',
    verified: false,
    source: 'Manuel DGTT, Q398 et Q484',
  },
  vitesse_novice: {
    label: 'Vitesse maximale d’un conducteur dont le permis a moins d’un an',
    value: '90 km/h',
    verified: true,
    source: 'Manuel DGTT, Q473 et Q686',
  },
  alcoolemie_generale: {
    label: 'Taux d’alcoolémie maximal autorisé',
    value: '0,5 g/l de sang',
    verified: false,
  },
  alcoolemie_novice: {
    label: 'Taux d’alcoolémie maximal — conducteur novice',
    value: '0,2 g/l de sang',
    verified: false,
  },
  numero_police: {
    label: 'Numéro d’urgence — Police secours',
    value: '117',
    verified: false,
  },
  numero_pompiers: {
    label: 'Numéro d’urgence — Sapeurs-pompiers',
    value: '118',
    verified: false,
  },
  numero_samu: {
    label: 'Numéro d’urgence — Secours médicaux',
    value: '112',
    verified: false,
  },
  distance_triangle_agglomeration: {
    label: 'Distance de pose du triangle de présignalisation',
    value: '30 m au moins',
    verified: true,
    source: 'Manuel DGTT, Q535',
  },
  distance_triangle_hors_agglomeration: {
    label: 'Distance de pose du triangle de présignalisation',
    value: '30 m au moins',
    verified: true,
    source: 'Manuel DGTT, Q535',
  },
  distance_panneau_danger_agglomeration: {
    label: 'Distance d’implantation des panneaux de danger — en agglomération',
    value: '50 m',
    verified: true,
    source: 'Manuel DGTT, chapitre I et Q26',
  },
  distance_panneau_danger_hors_agglomeration: {
    label: 'Distance d’implantation des panneaux de danger — en rase campagne',
    value: '150 m',
    verified: true,
    source: 'Manuel DGTT, chapitre I et Q27',
  },
  distance_clignotant_agglomeration: {
    label: 'Enclenchement du clignotant — en agglomération',
    value: 'à vérifier',
    verified: false,
  },
  distance_clignotant_hors_agglomeration: {
    label: 'Enclenchement du clignotant — hors agglomération',
    value: 'à vérifier',
    verified: false,
  },
  age_minimum_permis_b: {
    label: 'Âge minimal — permis catégorie B',
    value: '18 ans',
    verified: true,
    source: 'Manuel DGTT, chapitre I',
  },
  remorque_ptac_sans_extension: {
    label: 'PTAC maximal d’une remorque attelée à un véhicule de catégorie B',
    value: '750 kg',
    verified: true,
    source: 'Manuel DGTT, chapitre I',
  },
}
