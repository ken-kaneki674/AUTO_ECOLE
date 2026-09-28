<script setup>
import AttentionBox from '../components/AttentionBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import ValeurBenin from '../components/ValeurBenin.vue'
import questions from '../data/questions/ch9.json'
</script>

<template>
<section class="chap" id="ch9">
<div class="chap-head">
  <span class="borne">09</span>
  <div><span class="fil">Chapitre 9</span><h2>Secourisme élémentaire</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Appliquer la chaîne PAS (Protéger, Alerter, Secourir), donner une alerte utile, réaliser les gestes de première urgence et connaître les erreurs à ne jamais commettre.</p>
<AttentionBox label="Avertissement">
Ce chapitre est un rappel théorique destiné à l'examen du code. Il ne remplace <strong>pas</strong> une formation pratique aux premiers secours, que tout conducteur devrait suivre auprès de la Croix-Rouge, de la protection civile ou des sapeurs-pompiers.
</AttentionBox>

<h3>9.1 La chaîne de survie : P · A · S</h3>
<figure>
<svg viewBox="0 0 660 130" role="img" aria-label="Protéger Alerter Secourir">
 <g font-family="Arial Narrow, Arial, sans-serif" text-anchor="middle">
  <rect x="10" y="24" width="190" height="72" rx="4" fill="#F5B301"/>
  <text x="105" y="58" font-size="20" font-weight="bold" fill="#171A1F">1. PROTÉGER</text>
  <text x="105" y="80" font-size="12.5" fill="#171A1F">éviter le suraccident</text>
  <path d="M206 60h20" stroke="#171A1F" stroke-width="3"/><path d="M228 60l-9-6v12z" fill="#171A1F"/>
  <rect x="234" y="24" width="190" height="72" rx="4" fill="#0B5FA5"/>
  <text x="329" y="58" font-size="20" font-weight="bold" fill="#fff">2. ALERTER</text>
  <text x="329" y="80" font-size="12.5" fill="#BBD8F1">donner un message précis</text>
  <path d="M430 60h20" stroke="#171A1F" stroke-width="3"/><path d="M452 60l-9-6v12z" fill="#171A1F"/>
  <rect x="458" y="24" width="190" height="72" rx="4" fill="#D2202F"/>
  <text x="553" y="58" font-size="20" font-weight="bold" fill="#fff">3. SECOURIR</text>
  <text x="553" y="80" font-size="12.5" fill="#FCEBEC">gestes d'urgence</text>
 </g>
</svg>
<figcaption>Figure 9.1 — L'ordre à ne jamais inverser</figcaption>
</figure>

<h4>1. Protéger</h4>
<ul>
<li>Se garer <strong>après</strong> l'accident, feux de détresse allumés, gilet enfilé.</li>
<li>Baliser en amont : triangle à 30 m au moins (150 m sur voie rapide si c'est possible sans danger), faire ralentir le trafic.</li>
<li>Couper le contact des véhicules accidentés, serrer le frein de stationnement, ne pas fumer.</li>
<li>Écarter les curieux, éloigner les personnes valides hors de la chaussée.</li>
<li><strong>Ne jamais se mettre soi-même en danger</strong> : un sauveteur blessé devient une victime de plus.</li>
</ul>

<h4>2. Alerter</h4>
<div class="table-scroll"><table>
<thead><tr><th>Qui appeler</th><th>Que dire</th></tr></thead>
<tbody>
<tr><td>
<strong>Police secours : <ValeurBenin k="numero_police" /></strong><br>
<strong>Sapeurs-pompiers : <ValeurBenin k="numero_pompiers" /></strong><br>
<strong>Secours médicaux : <ValeurBenin k="numero_samu" /></strong><br>
<em>⚠ Vérifie ces numéros auprès de ton auto-école et note-les dans ton téléphone.</em>
</td><td>
1. <strong>Qui</strong> je suis et d'où j'appelle (numéro de rappel).<br>
2. <strong>Où</strong> exactement : route, sens, point kilométrique, repère visible.<br>
3. <strong>Quoi</strong> : type d'accident, véhicules impliqués, incendie, produit dangereux.<br>
4. <strong>Combien</strong> de victimes et leur état apparent (conscientes ? qui saigne ? bloquées ?).<br>
5. <strong>Ne jamais raccrocher le premier</strong> : le régulateur peut donner des consignes.
</td></tr>
</tbody>
</table></div>

<h4>3. Secourir</h4>
<div class="table-scroll"><table>
<thead><tr><th>Situation</th><th>Geste à faire</th></tr></thead>
<tbody>
<tr><td><strong>Hémorragie</strong> (saignement abondant)</td><td>Comprimer directement la plaie avec la main protégée ou un tissu propre, sans relâcher, et allonger la victime</td></tr>
<tr><td><strong>Victime inconsciente qui respire</strong></td><td>Libérer les voies aériennes (desserrer col et ceinture, basculer doucement la tête en arrière), puis placer en <strong>position latérale de sécurité (PLS)</strong> et surveiller la respiration</td></tr>
<tr><td><strong>Victime inconsciente qui ne respire pas</strong></td><td>Alerter immédiatement, débuter la réanimation cardio-pulmonaire : <strong>30 compressions thoraciques puis 2 insufflations</strong>, rythme d'environ 100 à 120 compressions par minute, jusqu'à l'arrivée des secours ou d'un défibrillateur</td></tr>
<tr><td><strong>Brûlure</strong></td><td>Refroidir à l'eau tempérée qui ruisselle pendant plusieurs minutes ; ne pas percer les cloques, ne rien appliquer (ni huile, ni beurre, ni dentifrice)</td></tr>
<tr><td><strong>Fracture suspectée</strong></td><td>Ne pas mobiliser le membre, immobiliser la victime telle qu'elle est, la couvrir, la rassurer</td></tr>
<tr><td><strong>Traumatisme du dos ou du cou</strong></td><td><strong>Ne pas déplacer</strong> la victime, sauf danger immédiat (incendie, risque d'explosion, immersion)</td></tr>
<tr><td><strong>Toutes victimes</strong></td><td>Couvrir pour lutter contre l'hypothermie, parler, rassurer, surveiller jusqu'à l'arrivée des secours</td></tr>
</tbody>
</table></div>
<AttentionBox label="Les cinq erreurs à ne jamais commettre">
<strong>1.</strong> Déplacer un blessé sans danger immédiat. <strong>2.</strong> Retirer le casque d'un motocycliste (sauf s'il ne respire pas et qu'on ne peut faire autrement, en le faisant à deux). <strong>3.</strong> Donner à boire, à manger ou un médicament. <strong>4.</strong> Retirer un corps étranger planté dans une plaie. <strong>5.</strong> Se précipiter sur la chaussée sans avoir protégé la zone.
</AttentionBox>

<QcmBlock title="QCM — Chapitre 9" :questions="questions" />
</section>
</template>
