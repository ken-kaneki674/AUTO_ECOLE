# Code de la route de A à Z

Manuel interactif de préparation à l'examen théorique du permis de conduire **au Bénin** (catégorie B et deux-roues A1 / A2 / A3), avec la banque de questions officielle de la DGTT.

Application web en **Vue 3 + Vite**, sans backend : tout tourne dans le navigateur et la progression est enregistrée localement (`localStorage`).

## Fonctionnalités

- **14 chapitres de cours** illustrés : signalisation, priorités, croisements et dépassements, arrêt et stationnement, vitesse, autoroute, équipement, mécanique, secourisme, deux-roues, permis B, catalogue des panneaux…
- **QCM corrigés** à la fin de chaque chapitre, avec suivi de la progression.
- **Examen blanc** de 20 ou 40 questions tirées au hasard (≈ 3/4 du manuel DGTT, 1/4 du cours) : une question à la fois, chronomètre, correction à la fin, résultats par thème et historique des scores.
- **Lexique** et fiches de révision.
- **Recherche** dans les chapitres et les questions.
- **Valeurs réglementaires béninoises** (vitesses, alcoolémie, numéros d'urgence…) centralisées dans `src/data/valeursBenin.js`. Celles qui viennent du manuel de la DGTT citent leur source ; les autres sont marquées « ⚠ à vérifier ».

### Questions officielles de l'examen

La section « Questions officielles » donne accès à la banque de questions du *Manuel du candidat à l'examen du permis de conduire* (Ministère des Travaux Publics et des Transports, DGTT, édition 2011) :

- **919 questions** avec le corrigé du manuel, réparties dans les chapitres II à XI ;
- **340 questions à réponses multiples** : on coche toutes les bonnes réponses, puis on valide ;
- **220 questions illustrées** par les panneaux et schémas du manuel ;
- les généralités du chapitre I (définitions, catégories de permis, abréviations) ;

Les questions dont le corrigé est incohérent dans le manuel, ou dont l'illustration n'a pas pu être récupérée, sont marquées **« ⚠ à vérifier »**.

## Démarrage

Prérequis : Node.js 20.19+ ou 22.12+ (exigence de Vite).

```bash
npm install
npm run dev       # serveur de développement sur http://localhost:5173
npm run build     # build de production dans dist/
npm run preview   # prévisualisation du build
```

## Structure

```
src/
├── chapters/            Chapter1.vue … Chapter14.vue — contenu des cours
├── components/          QcmBlock, ValeurBenin, SearchBar, encadrés (Astuce, Attention, Mémo…)
├── composables/         useQuizProgress (progression), useSearch
├── data/
│   ├── questions/       QCM des chapitres (ch1.json … ch14.json) et examen.json
│   ├── benin/           banque officielle du Bénin (générée, voir ci-dessous) et meta.js
│   ├── chapters/        métadonnées des chapitres
│   └── valeursBenin.js  valeurs réglementaires béninoises
├── router/              routes (/, /chapitre/:id, /examen, /lexique, /benin…)
└── views/               pages
public/benin/signs/      illustrations extraites du manuel DGTT
scripts/                 import de la banque de questions du Bénin
```

### Format d'une question

```json
{
  "id": "ch1-q3",
  "question": "La ligne mixte : je peux la franchir…",
  "choices": ["jamais", "toujours", "si la ligne discontinue est de mon côté", "uniquement la nuit"],
  "correct": 2,
  "explanation": "On obéit toujours à la ligne située du côté du véhicule."
}
```

`correct` est l'indice de la bonne réponse, ou un tableau d'indices quand il y en a plusieurs (`"correct": [0, 2]`). Les questions du Bénin peuvent aussi avoir les champs `num`, `images` et `needsReview`.

## Régénérer la banque du Bénin

Les fichiers `src/data/benin/ch*.json` sont générés à partir du texte des PDF du manuel. Il ne faut pas les modifier à la main.

```bash
# 1. Texte du PDF avec corrigés (pdftotext est fourni avec Git pour Windows / poppler)
pdftotext -enc UTF-8 -layout "Code de route questions benin-2.pdf" scripts/benin-source/manuel-reponses.txt

# 2. Illustrations, depuis le PDF sans corrigés (étape ponctuelle, nécessite PyMuPDF et Pillow)
pip install pymupdf pillow
python scripts/extract-benin-images.py "Code de route questions benin.pdf"

# 3. Génération des JSON et rapport des questions à relire
npm run import:benin
```

Pour corriger un corrigé erroné du manuel, ajoute une entrée à `CORRECTIONS` dans `scripts/import-benin.mjs`, puis relance `npm run import:benin`.

## Déploiement

Le site est déployé sur **Vercel**. `vercel.json` redirige toutes les routes vers `index.html` pour que le routage de l'application fonctionne quand on recharge une page.

## Avertissement

Ce manuel est un outil de révision. Les valeurs réglementaires et les corrigés doivent toujours être confrontés au code de la route en vigueur et aux consignes de l'auto-école, qui seuls font foi le jour de l'examen.
