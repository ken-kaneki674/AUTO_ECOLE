// Questions de révision du groupe WhatsApp RÉVISION EXAMEN OCTOBRE
// Moniteur : Kévin DJOSSOU
// Énoncés repris du chat (sujet 1) et des PDF « Sujet de révision N°2 à 5 » ;
// réponses des corrigés-types publiés par le moniteur. Figures : scripts/extract-revision-figures.py

export const REVISION_QUESTIONS = {
  sujet1: {
    id: 'revision-sujet-1',
    title: 'Sujet de révision N°1',
    date: '2026-10-08',
    questions: [
      {
        id: 'rev-1-1',
        question: 'Sur une chaussée à double sens comportant plus de deux voies, il est interdit d\'emprunter :',
        choices: [
          'la voie la plus à droite',
          'la voie du milieu',
          'la voie la plus à gauche'
        ],
        correct: [2], // c
        explanation: 'Sur une chaussée à double sens de plus de deux voies, la voie la plus à gauche sert à la circulation en sens inverse : il est interdit de l\'emprunter.',
        theme: 'routes'
      },
      {
        id: 'rev-1-2',
        question: 'En quoi consiste l\'arrêt ?',
        choices: [
          'À l\'immobilisation momentanée d\'un véhicule, conducteur à bord',
          'À l\'immobilisation de longue durée d\'un véhicule, conducteur éloigné',
          'À l\'immobilisation momentanée d\'un véhicule, conducteur éloigné'
        ],
        correct: [0], // a
        explanation: 'L\'arrêt est une immobilisation momentanée, le conducteur restant à bord (ou tout près) pour pouvoir repartir aussitôt : montée ou descente de passagers, chargement ou déchargement.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-1-3',
        question: 'En quoi consiste le stationnement ?',
        choices: [
          'À l\'immobilisation momentanée d\'un véhicule, conducteur à bord',
          'À l\'immobilisation momentanée d\'un véhicule, conducteur à côté',
          'À l\'immobilisation momentanée d\'un véhicule, conducteur éloigné',
          'À l\'immobilisation de longue durée d\'un véhicule'
        ],
        correct: [2, 3], // c, d
        explanation: 'On parle de stationnement dès que le conducteur s\'éloigne du véhicule, même pour un court moment, et aussi pour toute immobilisation de longue durée.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-1-4',
        question: 'En présence du panneau « Stationnement interdit », je suis autorisé à :',
        choices: [
          'Stationner avant le panneau',
          'Stationner après le panneau',
          'Stationner avant la prochaine intersection'
        ],
        correct: [0], // a
        explanation: 'L\'interdiction commence au droit du panneau et va jusqu\'à la prochaine intersection : on peut stationner avant le panneau, pas après.',
        theme: 'signalisation'
      },
      {
        id: 'rev-1-5',
        question: 'La distance de freinage augmente :',
        choices: [
          'quand la chaussée est mouillée',
          'quand les pneus sont usés',
          'quand les rotules sont usées',
          'quand la chaussée est rétrécie'
        ],
        correct: [0, 1], // a, b
        explanation: 'La distance de freinage dépend de l\'adhérence : une chaussée mouillée et des pneus usés l\'allongent. Les rotules (direction) et la largeur de la chaussée n\'y changent rien.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-1-6',
        question: 'À la vue d\'un usager qui veut s\'insérer dans la circulation :',
        choices: [
          'je klaxonne',
          'je ralentis',
          'je fais un appel de feux',
          'je change de voie'
        ],
        correct: [1], // b
        explanation: 'Je ralentis pour faciliter son insertion, sans le surprendre par un coup de klaxon, un appel de feux ou un changement de voie brusque.',
        theme: 'conducteur'
      },
      {
        id: 'rev-1-7',
        question: 'La distance d\'arrêt augmente :',
        choices: [
          'si le conducteur est fatigué',
          'si la chaussée est légèrement mouillée',
          'si les pneus sont usés',
          'rien de tout ce qui précède'
        ],
        correct: [0, 1, 2], // a, b, c
        explanation: 'Distance d\'arrêt = distance parcourue pendant le temps de réaction + distance de freinage. La fatigue allonge la réaction ; une chaussée mouillée et des pneus usés allongent le freinage.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-1-8',
        question: 'En cas de pluie, je risque :',
        choices: [
          'l\'aquaplaning',
          'la glissade',
          'le blocage des roues'
        ],
        correct: [0, 1], // a, b
        explanation: 'La pluie réduit l\'adhérence : risque de glissade et, sur une couche d\'eau, d\'aquaplaning (les pneus ne touchent plus la route).',
        theme: 'conducteur'
      },
      {
        id: 'rev-1-9',
        question: 'Quand les pneus sont neufs :',
        choices: [
          'le risque d\'aquaplaning est écarté',
          'l\'adhérence est bonne',
          'le risque d\'aquaplaning n\'est pas écarté'
        ],
        correct: [1, 2], // b, c
        explanation: 'Des pneus neufs adhèrent bien et évacuent mieux l\'eau, mais ils ne suppriment pas le risque d\'aquaplaning : il faut toujours adapter sa vitesse par temps de pluie.',
        theme: 'vehicule'
      },
      {
        id: 'rev-1-10',
        question: 'Un conducteur ayant l\'intention de changer de direction doit :',
        choices: [
          'ralentir',
          'signaler son intention',
          'klaxonner pour faire dégager les piétons engagés sur leur passage'
        ],
        correct: [0, 1], // a, b
        explanation: 'Il ralentit et signale son intention. Les piétons déjà engagés sont prioritaires : on les laisse passer, on ne les klaxonne pas.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-1-11',
        question: 'Un conducteur ayant l\'intention de changer de direction doit :',
        choices: [
          's\'assurer que la route qu\'il veut emprunter n\'est pas en sens interdit',
          'surveiller la route vers l\'avant et vers l\'arrière',
          'signaler son intention à l\'aide du clignotant',
          'ralentir sans freiner brusquement pour ne pas surprendre les usagers qui le suivent',
          'respecter les règles de priorité, notamment les piétons qui traversent'
        ],
        correct: [0, 1, 2, 3, 4], // a, b, c, d, e
        explanation: 'Toutes ces précautions font partie du changement de direction : vérifier le sens de la route, observer, signaler, ralentir progressivement et céder le passage à qui de droit.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-1-12',
        question: 'Quel doit être votre comportement à l\'approche d\'un lieu-dit ?',
        choices: [
          'rouler vite',
          'ralentir',
          'klaxonner'
        ],
        correct: [1, 2], // b, c
        explanation: 'Un lieu-dit est un endroit habité : piétons et animaux peuvent surgir. On ralentit et, hors agglomération, on peut avertir de sa présence à l\'avertisseur sonore.',
        theme: 'conducteur'
      },
      {
        id: 'rev-1-13',
        question: 'Plus le rayon du virage est faible :',
        choices: [
          'plus le virage est serré',
          'plus le virage est large',
          'plus la force centrifuge est importante',
          'plus la force centrifuge est faible'
        ],
        correct: [0, 2], // a, c
        explanation: 'Un petit rayon correspond à un virage serré, où la force centrifuge qui pousse le véhicule vers l\'extérieur est plus forte : il faut ralentir avant d\'y entrer.',
        theme: 'conducteur'
      },
      {
        id: 'rev-1-14',
        question: 'De nuit, seul sur autoroute avec des feux de route éclairant à 100 mètres, je peux rouler à :',
        choices: [
          '130 km/h',
          '110 km/h',
          '100 km/h'
        ],
        correct: [2], // c
        explanation: 'On ne roule pas plus vite que ce que l\'on voit : avec un éclairage portant à 100 mètres, la vitesse est limitée à 100 km/h pour pouvoir s\'arrêter dans la zone éclairée.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-1-15',
        question: 'Sur une voie d\'insertion :',
        choices: [
          'j\'accélère, je mets le clignotant, je me place dans ma voie',
          'j\'accélère en contrôlant, je mets le clignotant dès que je peux m\'insérer',
          'j\'accélère jusqu\'au bout de la voie, je contrôle, je m\'insère si je peux'
        ],
        correct: [1], // b
        explanation: 'On prend de la vitesse en observant le trafic (rétroviseurs, angle mort) et on met le clignotant dès qu\'un créneau permet de s\'insérer, sans attendre le bout de la voie.',
        theme: 'routes'
      },
      {
        id: 'rev-1-16',
        question: 'Sur route, lorsque l\'accotement de droite n\'est pas praticable, je peux stationner :',
        choices: [
          'sur l\'accotement de gauche',
          'sur l\'accotement de gauche en agglomération',
          'sur la voie de droite'
        ],
        correct: [0], // a
        explanation: 'Sur route, on stationne hors de la chaussée. Si l\'accotement de droite n\'est pas praticable, on peut utiliser celui de gauche ; on ne stationne pas sur une voie de circulation.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-1-17',
        question: 'Le contrôle de la durée d\'un stationnement payant peut se faire :',
        choices: [
          'par parcmètre',
          'par disque de stationnement',
          'par horodateur'
        ],
        correct: [0, 2], // a, c
        explanation: 'Le stationnement payant se contrôle au parcmètre ou à l\'horodateur. Le disque sert aux zones à durée limitée gratuites (zones bleues).',
        theme: 'signalisation'
      },
      {
        id: 'rev-1-18',
        question: 'On appelle stationnement gênant le fait de stationner :',
        choices: [
          'sur un pont',
          'à proximité d\'une voie ferrée',
          'dans une voie réservée aux bus',
          'devant une sortie de propriété'
        ],
        correct: [2, 3], // c, d
        explanation: 'D\'après le corrigé, stationner dans une voie réservée aux bus ou devant une sortie de propriété est un stationnement gênant. Écoutez l\'explication du moniteur pour le raisonnement complet.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-1-19',
        question: 'Le temps de réaction a une durée d\'environ :',
        choices: [
          'dix secondes',
          'un dixième de seconde',
          'une seconde'
        ],
        correct: [2], // c
        explanation: 'Il faut environ une seconde entre le moment où l\'on perçoit un danger et celui où l\'on commence à freiner. La fatigue, l\'alcool ou les médicaments l\'allongent.',
        theme: 'conducteur'
      },
      {
        id: 'rev-1-20',
        question: 'Ajuster sa vitesse aux circonstances, c\'est ralentir suffisamment :',
        choices: [
          'pour ne jamais dépasser la vitesse maximum autorisée',
          'chaque fois que l\'adhérence est réduite',
          'chaque fois que la visibilité est réduite'
        ],
        correct: [1, 2], // b, c
        explanation: 'Ajuster sa vitesse, c\'est rouler moins vite quand l\'adhérence ou la visibilité diminue. Respecter la limitation est une obligation permanente, pas un ajustement.',
        theme: 'manoeuvres'
      }
    ]
  },
  sujet2: {
    id: 'revision-sujet-2',
    title: 'Sujet de révision N°2',
    date: '2026-10-08',
    questions: [
      {
        id: 'rev-2-1',
        question: 'Sur une batterie dite sans entretien (blindée), je vérifie :',
        choices: [
          'le niveau d\'eau par transparence',
          'l\'état des cosses',
          'rien puisqu\'elle est sans entretien'
        ],
        correct: [1], // b
        explanation: 'Une batterie sans entretien ne se remplit pas, mais ses cosses peuvent s\'oxyder ou se desserrer : on vérifie leur état.',
        theme: 'vehicule'
      },
      {
        id: 'rev-2-2',
        question: 'Les indices inquiétants relatifs à mon véhicule peuvent se caractériser :',
        choices: [
          'par une odeur',
          'par un bruit',
          'par un voyant bleu sur le tableau de bord'
        ],
        correct: [0, 1], // a, b
        explanation: 'Une odeur ou un bruit inhabituels signalent une anomalie. Le voyant bleu indique seulement que les feux de route sont allumés.',
        theme: 'vehicule'
      },
      {
        id: 'rev-2-3',
        question: 'Par temps de pluie, pour voir et être vu, j\'allume :',
        choices: [
          'mes feux de route',
          'mes feux de croisement',
          'mes feux de position'
        ],
        correct: [1, 2], // b, c
        explanation: 'Sous la pluie, on allume les feux de croisement, avec les feux de position. Les feux de route éblouissent et se reflètent dans l\'eau.',
        theme: 'vehicule'
      },
      {
        id: 'rev-2-4',
        question: 'Les flèches de rabattement m\'obligent :',
        choices: [
          'à serrer à gauche',
          'à serrer à droite',
          'à quitter la chaussée',
          'à réduire ma vitesse'
        ],
        correct: [1], // b
        explanation: 'Les flèches de rabattement annoncent une ligne continue ou une réduction du nombre de voies : je dois me rabattre à droite.',
        theme: 'signalisation'
      },
      {
        id: 'rev-2-5',
        question: 'En présence du panneau de stationnement interdit, je suis autorisé à :',
        choices: [
          'stationner avant le panneau',
          'stationner après le panneau',
          'stationner avant la prochaine intersection'
        ],
        correct: [0], // a
        explanation: 'L\'interdiction commence au panneau et court jusqu\'à la prochaine intersection : on peut stationner avant le panneau.',
        theme: 'signalisation'
      },
      {
        id: 'rev-2-6',
        question: 'À la rencontre du panneau B6d, l\'interdiction commence :',
        choices: [
          'avant le panneau',
          'à partir du panneau',
          '15 m après le panneau'
        ],
        correct: [1], // b
        explanation: 'Le B6d (arrêt et stationnement interdits) s\'applique à partir du panneau, jusqu\'à la prochaine intersection incluse.',
        theme: 'signalisation'
      },
      {
        id: 'rev-2-7',
        question: 'Je suis en infraction si je suis en stationnement :',
        choices: [
          'dangereux',
          'abusif',
          'gênant'
        ],
        correct: [0, 1, 2], // a, b, c
        explanation: 'Les trois sont des infractions : stationnement dangereux (risque d\'accident), abusif (trop longtemps au même endroit) et gênant (il entrave les autres usagers).',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-2-8',
        question: 'Pour adapter sa vitesse, le conducteur doit tenir compte :',
        choices: [
          'de l\'importance du trafic',
          'des risques prévisibles',
          'de l\'adhérence',
          'de la visibilité',
          'de sa propre vigilance'
        ],
        correct: [0, 1, 2, 3, 4], // a, b, c, d, e
        explanation: 'Tous ces éléments comptent : la vitesse s\'adapte à la circulation, aux dangers possibles, à l\'état de la route, à ce que l\'on voit et à son propre état.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-2-9',
        question: 'La bifurcation, c\'est la division d\'une autoroute en :',
        choices: [
          'quatre autoroutes',
          'deux autoroutes',
          'cinq autoroutes'
        ],
        correct: [1], // b
        explanation: 'Une bifurcation sépare une autoroute en deux autoroutes.',
        theme: 'routes'
      },
      {
        id: 'rev-2-10',
        question: 'Lorsque l\'arrêt est interdit :',
        choices: [
          'le stationnement est interdit',
          'le stationnement n\'est pas interdit',
          'le stationnement temporaire est interdit',
          'seul le stationnement temporaire est autorisé'
        ],
        correct: [0, 2], // a, c
        explanation: 'Qui ne peut pas s\'arrêter ne peut pas stationner : là où l\'arrêt est interdit, tout stationnement, même temporaire, l\'est aussi.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-2-11',
        question: 'Pour évaluer l\'allure d\'un autre usager venant en face, je prends en compte :',
        choices: [
          'le type de véhicule',
          'la vitesse de rapprochement',
          'l\'état du conducteur'
        ],
        correct: [0, 1], // a, b
        explanation: 'On juge l\'allure d\'un usager qui arrive en face d\'après son type de véhicule et la vitesse à laquelle il se rapproche. L\'état de son conducteur ne se voit pas.',
        theme: 'conducteur'
      },
      {
        id: 'rev-2-12',
        question: 'La réglementation du stationnement a pour objet :',
        choices: [
          'la sécurité',
          'la fluidité de la circulation',
          'le contrôle des vitesses'
        ],
        correct: [0, 1], // a, b
        explanation: 'Elle vise la sécurité de tous et la fluidité du trafic ; elle ne sert pas à contrôler les vitesses.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-2-13',
        question: 'En général, se ranger en bataille se fait :',
        choices: [
          'en marche avant',
          'en marche arrière'
        ],
        correct: [1], // b
        explanation: 'Il existe trois façons de stationner : en bataille, en épi et en créneau. En général, le rangement en bataille se fait en marche arrière.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-2-14',
        question: 'Dans quel cas faut-il réduire sa vitesse ?',
        choices: [
          'lorsqu\'il n\'y a pas de panneau de signalisation',
          'lorsque la route n\'apparaît pas libre',
          'dans les descentes rapides',
          'lorsqu\'on aborde une intersection',
          'à l\'approche des montées'
        ],
        correct: [1, 2, 3], // b, c, d
        explanation: 'On ralentit quand la route n\'est pas dégagée, dans les fortes descentes et à l\'approche d\'une intersection.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-2-15',
        question: 'Lorsque je fais remorquer mon véhicule par un autre usager :',
        choices: [
          'je ne dois pas dépasser la vitesse de 25 km/h',
          'je dois signaler mon véhicule à l\'aide des feux de détresse',
          'je reste vigilant'
        ],
        correct: [1, 2], // b, c
        explanation: 'Le véhicule remorqué est signalé par ses feux de détresse, et son conducteur reste attentif pour diriger et freiner.',
        theme: 'vehicule'
      },
      {
        id: 'rev-2-16',
        question: 'Après avoir heurté un cycliste, je freine franchement et je m\'arrête après 81 m. Je roulais donc à quelle vitesse ?',
        choices: [
          '60 km/h',
          '90 km/h',
          '70 km/h',
          'rien de tout ce qui précède'
        ],
        correct: [1], // b
        explanation: 'Sur route sèche, la distance de freinage vaut à peu près le carré des dizaines de km/h : 9 × 9 = 81 m, donc 90 km/h.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-2-17',
        question: 'Les zébras sont réservés :',
        choices: [
          'pour le stationnement d\'urgence',
          'pour l\'arrêt d\'urgence',
          'pour un changement de direction',
          'rien de tout ce qui précède'
        ],
        correct: [3], // d
        explanation: 'Les zébras (lignes hachurées) ne sont réservés à rien : on ne peut ni y circuler, ni s\'y arrêter, ni y stationner.',
        theme: 'signalisation'
      },
      {
        id: 'rev-2-18',
        question: 'Qu\'est-ce qui peut causer un incendie sur un véhicule automobile ?',
        choices: [
          'la chaleur ambiante',
          'un court-circuit',
          'une fuite d\'essence',
          'les flammes de la tuyauterie d\'échappement',
          'l\'eau du radiateur'
        ],
        correct: [1, 2, 3], // b, c, d
        explanation: 'Un court-circuit, une fuite de carburant ou des flammes à l\'échappement peuvent mettre le feu au véhicule.',
        theme: 'vehicule'
      },
      {
        id: 'rev-2-19',
        question: 'Sur une route de montagne, je stationne de préférence :',
        choices: [
          'en côte, sur la chaussée',
          'en descente, sur la chaussée',
          'sur une place d\'évitement'
        ],
        correct: [2], // c
        explanation: 'En montagne, on ne stationne pas sur la chaussée : on utilise les places d\'évitement aménagées sur le bord de la route.',
        theme: 'routes'
      },
      {
        id: 'rev-2-20',
        question: 'En cas de défaillance du frein principal :',
        choices: [
          'je rétrograde pour utiliser le frein moteur',
          'je coupe le moteur pour arrêter le véhicule',
          'je serre immédiatement le frein à main pour bloquer les roues',
          'je dose mon freinage à l\'aide du frein à main déverrouillé'
        ],
        correct: [0, 3], // a, d
        explanation: 'On rétrograde pour profiter du frein moteur et on freine progressivement au frein à main, bouton enfoncé. Couper le moteur ou bloquer les roues ferait perdre le contrôle.',
        theme: 'vehicule'
      }
    ]
  },
  sujet3: {
    id: 'revision-sujet-3',
    title: 'Sujet de révision N°3',
    date: '2026-10-09',
    questions: [
      {
        id: 'rev-3-1',
        question: 'Mon permis de conduire a 8 mois d\'âge, je ne peux rouler à plus de :',
        choices: [
          '100 km/h',
          '120 km/h',
          '90 km/h',
          '60 km/h'
        ],
        correct: [2], // c
        explanation: 'Avec un permis récent, la vitesse est limitée : d\'après le corrigé, 90 km/h au maximum.',
        theme: 'permis'
      },
      {
        id: 'rev-3-2',
        question: 'Avec mon permis de conduire catégorie B :',
        choices: [
          'je peux conduire un véhicule dont le PTAC est inférieur ou égal à 3,5 t',
          'je peux conduire tous les véhicules',
          'je ne peux conduire que les véhicules dont le PTAC est compris entre 3,5 t et 18 t',
          'je peux conduire une camionnette dont le PTAC est égal ou inférieur à 3,5 t'
        ],
        correct: [0, 3], // a, d
        explanation: 'Le permis B autorise les véhicules dont le PTAC ne dépasse pas 3,5 t, camionnettes comprises.',
        theme: 'permis'
      },
      {
        id: 'rev-3-3',
        question: 'Avec le permis de conduire catégorie B, je peux conduire un véhicule :',
        choices: [
          'poids lourd',
          'autobus',
          'poids léger'
        ],
        correct: [2], // c
        explanation: 'Le permis B est celui des véhicules légers. Poids lourds et autobus demandent d\'autres catégories.',
        theme: 'permis'
      },
      {
        id: 'rev-3-4',
        question: 'La remorque doit avoir sa propre carte grise si son PTAC est supérieur à :',
        choices: [
          '450 kg',
          '500 kg',
          '400 kg'
        ],
        correct: [1], // b
        explanation: 'Au-delà de 500 kg de PTAC, une remorque doit avoir sa propre carte grise.',
        theme: 'permis'
      },
      {
        id: 'rev-3-5',
        question: 'Pour tourner à droite, je dois :',
        choices: [
          'accélérer',
          'mettre le clignotant',
          'ralentir'
        ],
        correct: [1, 2], // b, c
        explanation: 'On signale son intention au clignotant et on ralentit avant de tourner.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-3-6',
        question: 'Pour tourner à gauche sur une chaussée à double sens, je dois :',
        choices: [
          'serrer ma droite',
          'me déporter au milieu',
          'serrer ma gauche'
        ],
        correct: [1], // b
        explanation: 'Sur une chaussée à double sens, on se rapproche du milieu de la chaussée, sans empiéter sur la voie d\'en face, avant de tourner à gauche.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-3-7',
        question: 'À la vue du panneau B14 (limitation de vitesse à 50 km/h) :',
        choices: [
          'je peux rouler à plus de 50 km/h',
          'je ne peux pas rouler à moins de 50 km/h',
          'je peux rouler à 50 km/h strictement',
          'je ne suis pas concerné par cette signalisation',
          'je peux rouler à moins de 50 km/h'
        ],
        correct: [2, 4], // c, e
        explanation: 'Le B14 fixe une vitesse maximale : on peut rouler à 50 km/h, ou moins, mais pas plus.',
        theme: 'signalisation'
      },
      {
        id: 'rev-3-8',
        question: 'Le PTAC de ma remorque est de 800 kg ; le poids à vide de ma voiture est de 700 kg :',
        choices: [
          'pour tracter ma remorque je dois détenir le permis E (B)',
          'je dois mettre à l\'arrière de ma remorque une plaque d\'immatriculation identique à celle de ma voiture',
          'pour tracter ma remorque je dois détenir le permis C',
          'ma remorque doit porter sa propre plaque d\'immatriculation'
        ],
        correct: [0, 3], // a, d
        explanation: 'La remorque est plus lourde que la voiture qui la tire et dépasse 750 kg : il faut le permis E (B). Avec plus de 500 kg de PTAC, elle a sa propre carte grise, donc sa propre plaque.',
        theme: 'permis'
      },
      {
        id: 'rev-3-9',
        question: 'Ma voiture mesure 4 m de long. Comment transporter, de jour, une échelle de 5 m ?',
        choices: [
          'je fais dépasser l\'échelle de 0,5 m à l\'avant et de 0,5 m à l\'arrière',
          'je fais dépasser l\'échelle de 1 m à l\'avant',
          'je fais dépasser l\'échelle de 1 m à l\'arrière'
        ],
        correct: [2], // c
        explanation: 'Un chargement ne doit pas dépasser à l\'avant du véhicule : l\'échelle dépasse de 1 m à l\'arrière.',
        theme: 'vehicule'
      },
      {
        id: 'rev-3-10',
        question: 'À une intersection munie de feux tricolores fonctionnant normalement et aussi munie de panneaux :',
        choices: [
          'je respecte le panneau',
          'je me conforme aux feux',
          'j\'applique la règle de la priorité à droite'
        ],
        correct: [1], // b
        explanation: 'Quand les feux fonctionnent, ils priment sur les panneaux.',
        theme: 'priorites'
      },
      {
        id: 'rev-3-11',
        question: 'Une bonne conduite :',
        choices: [
          'nécessite une attention soutenue de ma part',
          'm\'oblige à rouler tantôt à gauche tantôt à droite',
          'me permet de tout regarder sur la route',
          'm\'oblige à éviter tous les trous'
        ],
        correct: [0], // a
        explanation: 'Bien conduire demande avant tout une attention constante.',
        theme: 'conducteur'
      },
      {
        id: 'rev-3-12',
        question: 'Je dois m\'abstenir de conduire :',
        choices: [
          'sous l\'effet de boissons alcoolisées',
          'sous l\'effet de la fatigue',
          'en cas de visibilité gravement insuffisante',
          'en cas de chaussée rétrécie',
          'en cas de défaillance du câble compteur'
        ],
        correct: [0, 1, 2], // a, b, c
        explanation: 'L\'alcool, la fatigue et une visibilité gravement réduite rendent la conduite dangereuse. Une chaussée rétrécie demande seulement de la prudence.',
        theme: 'conducteur'
      },
      {
        id: 'rev-3-13',
        question: 'Dans un véhicule à cinq places, il y a infraction avec :',
        choices: [
          '6 passagers adultes à bord',
          '5 passagers adultes à bord',
          '4 passagers adultes à bord',
          '10 enfants de moins de dix ans à bord',
          '8 enfants de moins de dix ans à bord'
        ],
        correct: [0, 1, 3], // a, b, d
        explanation: 'Une des cinq places est celle du conducteur : il reste 4 places de passagers. Deux enfants de moins de dix ans comptant pour une place, on peut en transporter 8, pas 10.',
        theme: 'conducteur'
      },
      {
        id: 'rev-3-14',
        question: 'Sur les lignes hachurées appelées zébras :',
        choices: [
          'je peux stationner',
          'je peux circuler',
          'je ne peux ni circuler, ni stationner'
        ],
        correct: [2], // c
        explanation: 'Les zébras sont interdits à la circulation comme au stationnement.',
        theme: 'signalisation'
      },
      {
        id: 'rev-3-15',
        question: 'Dans quel cas utiliser l\'avertisseur sonore ?',
        choices: [
          'pour avertir les autres usagers',
          'pour rechercher les passagers',
          'pour saluer les autres usagers'
        ],
        correct: [0], // a
        explanation: 'L\'avertisseur sonore sert uniquement à avertir d\'un danger, jamais à appeler ou à saluer.',
        theme: 'conducteur'
      },
      {
        id: 'rev-3-16',
        question: 'On doit s\'abstenir de conduire :',
        choices: [
          'si on est sous l\'effet des boissons alcoolisées ou des médicaments',
          'si on vient de manger sans prendre d\'alcool',
          'si on est fatigué et somnolent',
          'si on se sent nerveux',
          'après un long sommeil'
        ],
        correct: [0, 2, 3], // a, c, d
        explanation: 'Alcool, médicaments, fatigue et nervosité altèrent les réflexes et le jugement.',
        theme: 'conducteur'
      },
      {
        id: 'rev-3-17',
        question: 'À toute réquisition des forces de sécurité concernant mon véhicule, je dois présenter :',
        choices: [
          'la carte grise',
          'les papiers de dédouanement',
          'le papier d\'achat',
          'l\'attestation d\'assurance',
          'la visite technique'
        ],
        correct: [0, 3, 4], // a, d, e
        explanation: 'Les papiers du véhicule à présenter sont la carte grise, l\'attestation d\'assurance et le certificat de visite technique.',
        theme: 'permis'
      },
      {
        id: 'rev-3-18',
        question: 'Quand je suis sur le point d\'être dépassé, je dois :',
        choices: [
          'accélérer',
          'serrer ma droite sans accélérer',
          'm\'arrêter',
          'ne ni accélérer ni ralentir'
        ],
        correct: [1, 3], // b, d
        explanation: 'On facilite le dépassement : on serre à droite et on garde son allure, sans accélérer ni freiner.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-3-19',
        question: 'Les règles de circulation doivent être respectées par :',
        choices: [
          'les motocyclistes',
          'les piétons',
          'les automobilistes seulement',
          'les automobilistes'
        ],
        correct: [0, 1, 3], // a, b, d
        explanation: 'Le code de la route s\'applique à tous les usagers : motocyclistes, piétons et automobilistes.',
        theme: 'conducteur'
      },
      {
        id: 'rev-3-20',
        question: 'Quel est l\'intervalle minimum de sécurité entre deux véhicules qui se suivent à 50 km/h ?',
        choices: [
          '10 m environ',
          '30 m environ',
          '20 m environ'
        ],
        correct: [1], // b
        explanation: 'On garde au moins deux secondes d\'écart : à 50 km/h, cela fait environ 30 m.',
        theme: 'manoeuvres'
      }
    ]
  },
  sujet4: {
    id: 'revision-sujet-4',
    title: 'Sujet de révision N°4',
    date: '2026-10-09',
    questions: [
      {
        id: 'rev-4-1',
        question: 'Je peux être poursuivi pour refus d\'obtempérer si je ne m\'arrête pas après avoir :',
        choices: [
          'occasionné un accident matériel',
          'occasionné un accident corporel',
          'ignoré l\'injonction d\'un agent réglementant la circulation'
        ],
        correct: [2], // c
        explanation: 'Le refus d\'obtempérer, c\'est ne pas s\'arrêter quand un agent l\'ordonne. Quitter les lieux d\'un accident est un délit de fuite.',
        theme: 'conducteur'
      },
      {
        id: 'rev-4-2',
        question: 'Dans une agglomération éclairée, je peux circuler :',
        choices: [
          'sans feux',
          'en feux de position',
          'en feux de croisement',
          'en feux de route'
        ],
        correct: [1, 2], // b, c
        explanation: 'En agglomération éclairée, les feux de position suffisent ; les feux de croisement sont aussi permis. Jamais sans feux, ni en feux de route.',
        theme: 'vehicule'
      },
      {
        id: 'rev-4-3',
        question: 'La consommation de drogue peut provoquer :',
        choices: [
          'des effets d\'ivresse',
          'une diminution du champ visuel',
          'l\'euphorie'
        ],
        correct: [0, 1, 2], // a, b, c
        explanation: 'Les drogues peuvent provoquer ivresse, euphorie et rétrécissement du champ visuel : la conduite devient dangereuse.',
        theme: 'conducteur'
      },
      {
        id: 'rev-4-4',
        question: 'Comment limiter la fatigue ?',
        choices: [
          'conduire sur une longue durée sans repos',
          'se reposer régulièrement pendant le trajet',
          'pratiquer l\'alternance au volant'
        ],
        correct: [1, 2], // b, c
        explanation: 'On fait des pauses régulières et, si possible, on se relaie au volant.',
        theme: 'conducteur'
      },
      {
        id: 'rev-4-5',
        question: 'Quel doit être le comportement d\'un conducteur impliqué dans un accident de la circulation ?',
        choices: [
          's\'arrêter après marquage',
          'dégager la chaussée pour ne pas gêner la circulation',
          'avertir sa compagnie d\'assurance',
          'communiquer son identité et son adresse à toute personne impliquée dans l\'accident',
          'conduire le véhicule au poste de police le plus proche'
        ],
        correct: [0, 1, 2, 3], // a, b, c, d
        explanation: 'On s\'arrête, on marque la position des véhicules, on dégage la chaussée, on échange son identité avec les personnes impliquées et on prévient son assureur.',
        theme: 'conducteur'
      },
      {
        id: 'rev-4-6',
        question: 'J\'ai plus de risques de rencontrer du verglas si je circule :',
        choices: [
          'en lisière d\'une forêt',
          'le long d\'un cours d\'eau',
          'à allure soutenue'
        ],
        correct: [0, 1], // a, b
        explanation: 'Le verglas se forme surtout dans les zones humides et ombragées : lisières de forêt, bords de cours d\'eau.',
        theme: 'routes'
      },
      {
        id: 'rev-4-7',
        question: 'Si je suis témoin d\'un accident, je dois :',
        choices: [
          'exposer ce que j\'ai vu aux forces de l\'ordre',
          'remplir le constat amiable',
          'déterminer les responsabilités',
          'laisser mes coordonnées pour un témoignage ultérieur'
        ],
        correct: [0, 3], // a, d
        explanation: 'Le témoin raconte ce qu\'il a vu et laisse ses coordonnées. Le constat se remplit entre les conducteurs, et ce n\'est pas au témoin de fixer les responsabilités.',
        theme: 'conducteur'
      },
      {
        id: 'rev-4-8',
        question: 'L\'assurance minimum obligatoire :',
        choices: [
          'couvre les dommages occasionnés aux autres',
          'couvre les dégâts occasionnés aux véhicules seulement',
          'est aussi appelée assurance au tiers'
        ],
        correct: [0, 2], // a, c
        explanation: 'L\'assurance obligatoire (au tiers) couvre les dommages causés aux autres.',
        theme: 'permis'
      },
      {
        id: 'rev-4-9',
        question: 'En présence de blessés après un accident, il faut :',
        choices: [
          'les couvrir',
          'pratiquer les gestes qui sauvent',
          'les faire boire pour éviter qu\'ils ne se déshydratent',
          'les transporter sur l\'accotement'
        ],
        correct: [0, 1], // a, b
        explanation: 'On couvre les blessés et on pratique les gestes qui sauvent. On ne les fait pas boire et on ne les déplace pas, sauf danger immédiat.',
        theme: 'conducteur'
      },
      {
        id: 'rev-4-10',
        question: 'Lors de l\'alerte des secours, j\'indique :',
        choices: [
          'le lieu précis de l\'accident',
          'le numéro d\'immatriculation des véhicules impliqués',
          'le nombre et le type de véhicules impliqués',
          'le nombre et l\'état des blessés'
        ],
        correct: [0, 2, 3], // a, c, d
        explanation: 'Les secours ont besoin du lieu exact, du nombre et du type de véhicules, et du nombre et de l\'état des blessés. Les immatriculations ne leur servent pas.',
        theme: 'conducteur'
      },
      {
        id: 'rev-4-11',
        question: 'Le réglage de la hauteur des faisceaux lumineux du véhicule :',
        choices: [
          'dépend de la charge du véhicule',
          'nécessite toujours l\'intervention d\'un spécialiste',
          'est effectué une fois pour toutes lors de la mise en circulation',
          'dépend du type de véhicule'
        ],
        correct: [0, 3], // a, d
        explanation: 'La hauteur des feux dépend du type de véhicule et de sa charge : un véhicule chargé à l\'arrière éclaire plus haut et peut éblouir.',
        theme: 'vehicule'
      },
      {
        id: 'rev-4-12',
        question: 'Les feux tricolores s\'allument dans quel sens ?',
        choices: [
          'vert - rouge - jaune',
          'rouge - vert - jaune',
          'jaune - vert - rouge',
          'vert - jaune - rouge'
        ],
        correct: [1, 3], // b, d
        explanation: 'Le cycle est vert, puis jaune, puis rouge, puis de nouveau vert : « rouge - vert - jaune » et « vert - jaune - rouge » décrivent le même cycle.',
        theme: 'signalisation'
      },
      {
        id: 'rev-4-13',
        question: 'Pour remplir le réservoir de mon lave-glace, j\'utilise de préférence :',
        choices: [
          'de l\'eau uniquement',
          'un produit détergent spécial',
          'un détergent ménager'
        ],
        correct: [1], // b
        explanation: 'On utilise un produit lave-glace spécial : il nettoie sans laisser de traces et sans abîmer les joints.',
        theme: 'vehicule'
      },
      {
        id: 'rev-4-14',
        question: 'Je dois faire vérifier le parallélisme des roues de mon véhicule :',
        choices: [
          'après un choc violent',
          'en cas d\'usure anormale de mes pneus',
          'si je ressens des vibrations au niveau du volant',
          'si mon véhicule se déporte'
        ],
        correct: [0, 1, 3], // a, b, d
        explanation: 'Parallélisme : après un choc violent contre le trottoir, en cas d\'usure anormale des pneus et si le véhicule se déporte. Les vibrations au volant relèvent de l\'équilibrage.',
        theme: 'vehicule'
      },
      {
        id: 'rev-4-15',
        question: 'Il est indispensable de regarder dans ses rétroviseurs avant de :',
        choices: [
          'modifier sa trajectoire',
          'activer ses clignotants',
          'modifier son allure'
        ],
        correct: [0, 1, 2], // a, b, c
        explanation: 'Avant tout changement de trajectoire ou d\'allure, et avant de clignoter, on contrôle dans les rétroviseurs.',
        theme: 'manoeuvres'
      },
      {
        id: 'rev-4-16',
        question: 'Les appels lumineux servent à signaler :',
        choices: [
          'une intention de dépasser',
          'la présence de gendarmes',
          'l\'approche d\'une intersection la nuit'
        ],
        correct: [0, 2], // a, c
        explanation: 'Les appels de phares avertissent d\'un dépassement ou de son arrivée à une intersection la nuit, jamais de la présence des forces de l\'ordre.',
        theme: 'vehicule'
      },
      {
        id: 'rev-4-17',
        question: 'L\'usage de l\'avertisseur sonore est interdit :',
        choices: [
          'la nuit, uniquement en agglomération',
          'la nuit, en agglomération et hors agglomération',
          'le jour en agglomération, sauf danger immédiat'
        ],
        correct: [1, 2], // b, c
        explanation: 'La nuit, on remplace l\'avertisseur sonore par les appels lumineux, partout. Le jour en agglomération, il est réservé au danger immédiat.',
        theme: 'conducteur'
      },
      {
        id: 'rev-4-18',
        question: 'Les mains sur le volant sont placées correctement sur le dessin :',
        image: '/revision/sujet4-q18.webp',
        choices: [
          'Dessin a',
          'Dessin b',
          'Dessin c',
          'Dessin d'
        ],
        correct: [1, 3], // b, d
        explanation: 'Les mains se tiennent de part et d\'autre du volant, à « 10 h 10 » ou « 9 h 15 », comme sur les dessins b et d.',
        theme: 'conducteur'
      },
      {
        id: 'rev-4-19',
        question: 'Au volant de mon véhicule, je peux utiliser mon téléphone portable :',
        choices: [
          'lorsque je me retrouve seul sur la chaussée',
          'lorsque je ne suis pas sur une route à grande circulation',
          'lorsque je suis équipé d\'un kit oreillette en cas d\'urgence',
          'si mon téléphone sonne, pour vérifier rapidement mon correspondant',
          'rien de tout ce qui précède'
        ],
        correct: [4], // e
        explanation: 'Le téléphone tenu en main est interdit en conduisant, quelle que soit la situation.',
        theme: 'conducteur'
      },
      {
        id: 'rev-4-20',
        question: 'Pendant l\'arrêt au feu rouge :',
        choices: [
          'je peux rapidement prendre un appel téléphonique',
          'je peux rapidement passer un appel téléphonique avant le feu vert',
          'je ne dois pas toucher au téléphone'
        ],
        correct: [2], // c
        explanation: 'Arrêté au feu, on est toujours en circulation : on ne touche pas au téléphone.',
        theme: 'conducteur'
      }
    ]
  },
  sujet5: {
    id: 'revision-sujet-5',
    title: 'Sujet de révision N°5',
    date: '2026-10-10',
    questions: [
      {
        id: 'rev-5-1',
        question: 'Sur cette image, choisissez le panneau manquant parmi les panneaux proposés :',
        image: '/revision/sujet5-q1.webp',
        choices: [
          'Panneau a',
          'Panneau b',
          'Panneau c',
          'Panneau d',
          'Panneau e'
        ],
        correct: [0], // a
        explanation: 'Une branche du carrefour porte déjà le panneau « intersection avec priorité à droite » : l\'autre branche reçoit le même panneau (a).',
        theme: 'signalisation'
      },
      {
        id: 'rev-5-2',
        question: 'Sur cette image, choisissez le panneau manquant parmi les panneaux proposés :',
        image: '/revision/sujet5-q2.webp',
        choices: [
          'Panneau a',
          'Panneau b',
          'Panneau c',
          'Panneau d',
          'Panneau e'
        ],
        correct: [1, 4], // b, e
        explanation: 'Les autres branches doivent céder le passage : la route du point d\'interrogation est prioritaire. On y place le panneau d\'intersection où l\'on est prioritaire (b) ou celui de route à caractère prioritaire (e).',
        theme: 'signalisation'
      },
      {
        id: 'rev-5-3',
        question: 'Sur cette image, choisissez le panneau manquant parmi les panneaux proposés :',
        image: '/revision/sujet5-q3.webp',
        choices: [
          'Panneau a',
          'Panneau b',
          'Panneau c',
          'Panneau d',
          'Panneau e'
        ],
        correct: [4], // e
        explanation: 'Corrigé du moniteur : le panneau e, fin de route à caractère prioritaire. Écoutez l\'explication du moniteur pour le raisonnement complet.',
        theme: 'signalisation'
      },
      {
        id: 'rev-5-4',
        question: 'Sur cette image, choisissez le panneau manquant parmi les panneaux proposés :',
        image: '/revision/sujet5-q4.webp',
        choices: [
          'Panneau a',
          'Panneau b',
          'Panneau c',
          'Panneau d',
          'Panneau e'
        ],
        correct: [4], // e
        explanation: 'Corrigé du moniteur : le panneau e, cédez le passage annoncé à 150 m. Écoutez l\'explication du moniteur pour le raisonnement complet.',
        theme: 'signalisation'
      },
      {
        id: 'rev-5-5',
        question: 'Sur cette image, choisissez le panneau manquant parmi les panneaux proposés :',
        image: '/revision/sujet5-q5.webp',
        choices: [
          'Panneau a',
          'Panneau b',
          'Panneau c',
          'Panneau d',
          'Panneau e'
        ],
        correct: [2], // c
        explanation: 'Le STOP du carrefour s\'annonce à l\'avance : cédez le passage avec le panonceau « STOP 150 m » (c).',
        theme: 'signalisation'
      },
      {
        id: 'rev-5-6',
        question: 'Sur cette image, choisissez le panneau manquant parmi les panneaux proposés :',
        image: '/revision/sujet5-q6.webp',
        choices: [
          'Panneau a',
          'Panneau b',
          'Panneau c',
          'Panneau d',
          'Panneau e'
        ],
        correct: [1], // b
        explanation: 'La route croisée est prioritaire (losange) et une ligne d\'arrêt est tracée au sol : il manque le panneau STOP (b).',
        theme: 'signalisation'
      },
      {
        id: 'rev-5-7',
        question: 'Sur cette image, choisissez le panneau manquant parmi les panneaux proposés :',
        image: '/revision/sujet5-q7.webp',
        choices: [
          'Panneau a',
          'Panneau b',
          'Panneau c',
          'Panneau d',
          'Panneau e'
        ],
        correct: [0, 2], // a, c
        explanation: 'La route croisée porte le STOP et sa présignalisation : la route du point d\'interrogation est prioritaire, avec le panneau d\'intersection où l\'on est prioritaire (a) ou celui de route à caractère prioritaire (c).',
        theme: 'signalisation'
      },
      {
        id: 'rev-5-8',
        question: 'Sur cette image, donnez les règles à appliquer et l\'ordre de passage des véhicules :',
        image: '/revision/sujet5-q8.webp',
        choices: [
          'perte de priorité',
          'priorité de passage',
          'la priorité à droite',
          'bleu, jaune, rouge',
          'bleu et rouge simultanément, puis jaune après'
        ],
        correct: [0, 1, 4], // a, b, e
        explanation: 'Le véhicule jaune a un STOP : perte de priorité pour lui, priorité de passage pour les autres. Le bleu et le rouge passent ensemble, puis le jaune.',
        theme: 'priorites'
      },
      {
        id: 'rev-5-9',
        question: 'À cette intersection, quel doit être l\'ordre de passage des véhicules ?',
        image: '/revision/sujet5-q9.webp',
        choices: [
          'Jaune - vert - bleu',
          'Bleu - vert - jaune',
          'Rien de tout ce qui précède'
        ],
        correct: [2], // c
        explanation: 'Corrigé du moniteur : aucun de ces deux ordres. Écoutez l\'explication du moniteur pour le raisonnement complet.',
        theme: 'priorites'
      },
      {
        id: 'rev-5-10',
        question: 'À cette intersection, quel doit être l\'ordre de passage des véhicules ?',
        image: '/revision/sujet5-q10.webp',
        choices: [
          'Le bleu démarre, fait ¼ de tour et s\'arrête ; le rouge passe ensuite ; le jaune passe ; le bleu après',
          'Le bleu démarre, fait ¼ de tour et s\'arrête ; le jaune passe ; le rouge passe ensuite ; le bleu passe après'
        ],
        correct: [1], // b
        explanation: 'Corrigé du moniteur : b. Le bleu s\'engage et s\'arrête au milieu du carrefour, le jaune passe, puis le rouge, et le bleu termine son virage. Écoutez l\'explication du moniteur pour le raisonnement complet.',
        theme: 'priorites'
      },
      {
        id: 'rev-5-11',
        question: 'À cette intersection :',
        image: '/revision/sujet5-q11.webp',
        choices: [
          'il faut appliquer la règle de la priorité à droite',
          'il faut appliquer la règle de courtoisie',
          'la voiture jaune doit céder le passage à la rouge',
          'la voiture rouge doit céder le passage à la jaune'
        ],
        correct: [0, 3], // a, d
        explanation: 'Sans signalisation, c\'est la priorité à droite : la voiture rouge cède le passage à la jaune, qui arrive sur sa droite.',
        theme: 'priorites'
      },
      {
        id: 'rev-5-12',
        question: 'Quel doit être l\'ordre de passage des véhicules à cette intersection ?',
        image: '/revision/sujet5-q12.webp',
        choices: [
          'Le véhicule rouge, le véhicule jaune et le véhicule bleu',
          'Le véhicule bleu, le véhicule jaune et le véhicule rouge',
          'Les véhicules jaune, rouge et bleu'
        ],
        correct: [1], // b
        explanation: 'Corrigé du moniteur : le bleu, puis le jaune, puis le rouge. Écoutez l\'explication du moniteur pour le raisonnement complet.',
        theme: 'priorites'
      },
      {
        id: 'rev-5-13',
        question: 'À cette intersection :',
        image: '/revision/sujet5-q13.webp',
        choices: [
          'Le véhicule jaune peut tourner immédiatement à droite',
          'Le véhicule jaune peut tourner immédiatement à gauche',
          'Le véhicule jaune peut aller immédiatement tout droit'
        ],
        correct: [0], // a
        explanation: 'Corrigé du moniteur : le véhicule jaune peut tourner immédiatement à droite. Écoutez l\'explication du moniteur pour le raisonnement complet.',
        theme: 'priorites'
      },
      {
        id: 'rev-5-14',
        question: 'À cette intersection, en agglomération, le véhicule rouge est sur la chaussée revêtue et le véhicule jaune sur la chaussée en terre. Quelle est la règle de priorité à observer ?',
        image: '/revision/sujet5-q14.webp',
        choices: [
          'La règle de courtoisie',
          'La règle de la priorité à droite',
          'La règle de la perte de priorité',
          'La règle de la priorité de passage'
        ],
        correct: [1], // b
        explanation: 'En agglomération, le revêtement ne change rien : sans signalisation, c\'est la priorité à droite.',
        theme: 'priorites'
      },
      {
        id: 'rev-5-15',
        question: 'À cette intersection, hors agglomération, le véhicule rouge est sur la chaussée revêtue et le véhicule jaune sur la chaussée en terre. Quelle est la règle de priorité à appliquer ?',
        image: '/revision/sujet5-q15.webp',
        choices: [
          'La priorité de passage par le véhicule rouge',
          'La perte de priorité par le véhicule jaune',
          'La priorité à droite par les deux véhicules',
          'La règle de courtoisie par les deux véhicules'
        ],
        correct: [0, 1], // a, b
        explanation: 'Hors agglomération, la route revêtue est prioritaire sur le chemin de terre : priorité de passage pour le rouge, perte de priorité pour le jaune.',
        theme: 'priorites'
      },
      {
        id: 'rev-5-16',
        question: 'À cette intersection, quel doit être l\'ordre de passage des véhicules ?',
        image: '/revision/sujet5-q16.webp',
        choices: [
          'Les véhicules jaune, bleu et la moto passent simultanément ; le véhicule rouge passe après',
          'Les véhicules jaune et bleu passent ; le véhicule rouge passe ; la moto passe après'
        ],
        correct: [1], // b
        explanation: 'Corrigé du moniteur : le jaune et le bleu, puis le rouge, puis la moto. Écoutez l\'explication du moniteur pour le raisonnement complet.',
        theme: 'priorites'
      },
      {
        id: 'rev-5-17',
        question: 'À cette intersection, qui passera définitivement le premier ?',
        image: '/revision/sujet5-q17.webp',
        choices: [
          'la moto',
          'le véhicule rouge',
          'le véhicule vert',
          'le véhicule jaune'
        ],
        correct: [2], // c
        explanation: 'Corrigé du moniteur : le véhicule vert passe le premier. Écoutez l\'explication du moniteur pour le raisonnement complet.',
        theme: 'priorites'
      },
      {
        id: 'rev-5-18',
        question: 'À cette intersection, quel doit être l\'ordre de passage des véhicules ?',
        image: '/revision/sujet5-q18.webp',
        choices: [
          'le véhicule bleu, le véhicule rouge et le véhicule vert',
          'le véhicule vert démarre, fait ¼ de tour et s\'arrête ; le véhicule bleu tourne ; le véhicule rouge passe et le vert continue',
          'le véhicule rouge avance en suivant le véhicule bleu qui tourne, puis le véhicule vert tourne après'
        ],
        correct: [1], // b
        explanation: 'Corrigé du moniteur : b. Le vert s\'engage et attend au centre, le bleu tourne, le rouge passe, puis le vert termine. Écoutez l\'explication du moniteur pour le raisonnement complet.',
        theme: 'priorites'
      },
      {
        id: 'rev-5-19',
        question: 'Sur cette image, le véhicule bleu doit :',
        image: '/revision/sujet5-q19.webp',
        choices: [
          's\'arrêter devant la demi-barrière et attendre le passage du train',
          'attendre que la demi-barrière se lève et que le feu rouge s\'éteigne avant de démarrer',
          'se faufiler entre les demi-barrières pour partir après le passage du train'
        ],
        correct: [1], // b
        explanation: 'Au passage à niveau, on ne repart que lorsque les demi-barrières sont relevées et que le feu rouge clignotant s\'est éteint : un second train peut arriver.',
        theme: 'signalisation'
      },
      {
        id: 'rev-5-20',
        question: 'À cette intersection, quel doit être l\'ordre de passage des véhicules ?',
        image: '/revision/sujet5-q20.webp',
        choices: [
          'Le véhicule orange marque un arrêt ; les véhicules jaune, rouge et vert passent simultanément ; le véhicule orange laisse passer les piétons et passera au feu vert',
          'Les véhicules jaune, rouge et vert passent simultanément ; le véhicule orange, qui a vu la flèche verte, tourne à droite',
          'Le véhicule orange tourne immédiatement ; les véhicules jaune, rouge et vert passent simultanément'
        ],
        correct: [0], // a
        explanation: 'Corrigé du moniteur : a. L\'orange s\'arrête, les autres passent, puis il laisse traverser les piétons et passe au vert. Écoutez l\'explication du moniteur pour le raisonnement complet.',
        theme: 'priorites'
      }
    ]
  }
}

export const REVISION_THEMES = [
  { id: 'signalisation', label: 'Signalisation' },
  { id: 'priorites', label: 'Priorités' },
  { id: 'manoeuvres', label: 'Arrêt, stationnement, vitesse' },
  { id: 'routes', label: 'Routes et autoroutes' },
  { id: 'conducteur', label: 'Conducteur et sécurité' },
  { id: 'vehicule', label: 'Véhicule et mécanique' },
  { id: 'permis', label: 'Permis et papiers' }
]

export function getRevisionQuestions(sujetId) {
  return REVISION_QUESTIONS[sujetId]?.questions || []
}

export function getAllRevisionQuestions() {
  return Object.values(REVISION_QUESTIONS).flatMap(sujet => sujet.questions)
}

export function getRevisionSujets() {
  // La clé (sujet1…) sert d'identifiant partout : elle doit l'emporter sur le champ id interne
  return Object.keys(REVISION_QUESTIONS).map(key => ({
    ...REVISION_QUESTIONS[key],
    id: key
  }))
}