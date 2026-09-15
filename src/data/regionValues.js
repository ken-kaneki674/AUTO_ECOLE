// Valeurs réglementaires qui varient d'un pays à l'autre (Bénin/UEMOA vs France).
// Chaque entrée est affichée par <RegionValue k="..."> selon la région active.
//
// `verified: false` signifie que la valeur reste à confirmer auprès d'une source
// officielle (code de la route national, auto-école) avant de faire foi à l'examen —
// c'est l'état de départ pour toutes les entrées, fidèle aux avertissements « ⚠ à
// vérifier » du manuel d'origine. Passer une entrée à `verified: true` seulement
// après vérification effective de la valeur.
export const regionValues = {
  vitesse_agglomeration: {
    label: 'Vitesse maximale en agglomération',
    benin: '60 km/h en ville (variable selon localité, souvent 50 à 60 km/h)',
    france: '50 km/h',
    verified: false,
  },
  vitesse_hors_agglomeration: {
    label: 'Vitesse maximale sur route à double sens',
    benin: '90 km/h hors agglomération (variable selon axe)',
    france: '80 km/h (90 km/h sur certains axes)',
    verified: false,
  },
  vitesse_voie_express: {
    label: 'Vitesse maximale sur route pour automobiles',
    benin: 'à vérifier localement',
    france: '110 km/h',
    verified: false,
  },
  vitesse_autoroute: {
    label: 'Vitesse maximale sur autoroute',
    benin: 'à vérifier localement',
    france: '120 à 130 km/h (110 km/h sur chaussée mouillée)',
    verified: false,
  },
  alcoolemie_generale: {
    label: 'Taux d’alcoolémie maximal autorisé',
    benin: '0,5 g/l de sang (à confirmer)',
    france: '0,5 g/l de sang (0,25 mg/l d’air expiré)',
    verified: false,
  },
  alcoolemie_novice: {
    label: 'Taux d’alcoolémie maximal — conducteur novice',
    benin: '0,2 g/l de sang (à confirmer)',
    france: '0,2 g/l de sang',
    verified: false,
  },
  numero_police: {
    label: 'Numéro d’urgence — Police secours',
    benin: '117',
    france: '17',
    verified: false,
  },
  numero_pompiers: {
    label: 'Numéro d’urgence — Sapeurs-pompiers',
    benin: '118',
    france: '18',
    verified: false,
  },
  numero_samu: {
    label: 'Numéro d’urgence — Secours médicaux',
    benin: '112 (numéro d’urgence utilisable)',
    france: '15 (SAMU) ou 112',
    verified: false,
  },
  distance_triangle_agglomeration: {
    label: 'Distance de pose du triangle — en agglomération',
    benin: 'à vérifier',
    france: '50 m avant',
    verified: false,
  },
  distance_triangle_hors_agglomeration: {
    label: 'Distance de pose du triangle — hors agglomération',
    benin: 'à vérifier',
    france: '150 m avant',
    verified: false,
  },
  distance_clignotant_agglomeration: {
    label: 'Enclenchement du clignotant — en agglomération',
    benin: 'à vérifier',
    france: '30 m avant',
    verified: false,
  },
  distance_clignotant_hors_agglomeration: {
    label: 'Enclenchement du clignotant — hors agglomération',
    benin: 'à vérifier',
    france: '100 m avant',
    verified: false,
  },
  age_minimum_permis_b: {
    label: 'Âge minimal — permis catégorie B',
    benin: '18 ans (à confirmer)',
    france: '18 ans (17 ans en conduite accompagnée)',
    verified: false,
  },
  remorque_ptac_sans_extension: {
    label: 'PTAC maximal d’une remorque sans extension de permis',
    benin: 'à vérifier',
    france: '750 kg',
    verified: false,
  },
}
