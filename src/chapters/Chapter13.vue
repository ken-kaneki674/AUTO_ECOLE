<script setup>
import MemoBox from '../components/MemoBox.vue'
import AttentionBox from '../components/AttentionBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import ValeurBenin from '../components/ValeurBenin.vue'
import questions from '../data/questions/ch13.json'
</script>

<template>
<section class="chap" id="ch13">
<div class="chap-head">
  <span class="borne">13</span>
  <div><span class="fil">Chapitre 13</span><h2>Le changement de direction</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Exécuter proprement un changement de direction à droite, à gauche, un changement de file, un demi-tour et une marche arrière, en appliquant toujours la même méthode.</p>

<h3>13.1 La méthode universelle en cinq temps</h3>
<p>Quelle que soit la manœuvre, l'ordre est <strong>toujours</strong> le même. Retiens-le comme une check-list :</p>
<ol>
<li><strong>Contrôler</strong> : rétroviseur intérieur, rétroviseur extérieur du côté de la manœuvre, puis <strong>angle mort</strong>.</li>
<li><strong>Avertir</strong> : clignotant, suffisamment tôt (au moins <strong><ValeurBenin k="distance_clignotant_agglomeration" /> en agglomération, <ValeurBenin k="distance_clignotant_hors_agglomeration" /> hors agglomération</strong>) mais pas trop tôt, pour ne pas induire les autres en erreur.</li>
<li><strong>Se placer</strong> : à droite pour tourner à droite, près de l'axe pour tourner à gauche.</li>
<li><strong>Ralentir</strong> : freiner <em>avant</em> le virage, adapter le rapport de boîte.</li>
<li><strong>Tourner et contrôler</strong> : regarder où l'on va, surveiller piétons et deux-roues, puis éteindre le clignotant.</li>
</ol>
<MemoBox label="Formule mnémotechnique">
« <strong>C.A.P.R.T.</strong> » : <strong>C</strong>ontrôler, <strong>A</strong>vertir, se <strong>P</strong>lacer, <strong>R</strong>alentir, <strong>T</strong>ourner. Aucune de ces étapes ne peut être sautée, et l'ordre ne s'inverse pas : on regarde <em>avant</em> de mettre le clignotant, et on met le clignotant <em>avant</em> de se déporter.
</MemoBox>

<h3>13.2 Tourner à droite</h3>
<figure>
<svg viewBox="0 0 660 280" role="img" aria-label="Tourner à droite et à gauche">
 <rect width="660" height="280" fill="#EDEFF2"/>
 <!-- gauche : tourner à droite -->
 <g>
  <rect x="20" y="0" width="110" height="280" fill="#3A3F46"/>
  <rect x="20" y="110" width="280" height="90" fill="#3A3F46"/>
  <path d="M75 0v110M75 200v80" stroke="#fff" stroke-width="3" stroke-dasharray="14 12"/>
  <path d="M130 155h170" stroke="#fff" stroke-width="3" stroke-dasharray="14 12"/>
  <path d="M100 260 V190 Q100 175 120 175 H285" fill="none" stroke="#F5B301" stroke-width="4"/>
  <path d="M285 175l-14-7v14z" fill="#F5B301"/>
  <rect x="86" y="240" width="28" height="42" rx="4" fill="#0B5FA5"/>
  <text x="30" y="24" font-family="Arial Narrow, Arial" font-size="14" font-weight="bold" fill="#fff">À DROITE</text>
  <text x="150" y="238" font-family="Arial Narrow, Arial" font-size="12.5" fill="#171A1F">Je serre à droite,</text>
  <text x="150" y="254" font-family="Arial Narrow, Arial" font-size="12.5" fill="#171A1F">virage court et serré.</text>
 </g>
 <!-- droite : tourner à gauche -->
 <g transform="translate(340,0)">
  <rect x="180" y="0" width="110" height="280" fill="#3A3F46"/>
  <rect x="10" y="110" width="280" height="90" fill="#3A3F46"/>
  <path d="M235 0v110M235 200v80" stroke="#fff" stroke-width="3" stroke-dasharray="14 12"/>
  <path d="M10 155h170" stroke="#fff" stroke-width="3" stroke-dasharray="14 12"/>
  <path d="M212 280 V180 Q212 133 175 133 H14" fill="none" stroke="#F5B301" stroke-width="4"/>
  <path d="M14 133l14-7v14z" fill="#F5B301"/>
  <rect x="198" y="240" width="28" height="42" rx="4" fill="#D2202F"/>
  <text x="190" y="24" font-family="Arial Narrow, Arial" font-size="14" font-weight="bold" fill="#fff">À GAUCHE</text>
  <text x="20" y="238" font-family="Arial Narrow, Arial" font-size="12.5" fill="#171A1F">Je me place près de l'axe,</text>
  <text x="20" y="254" font-family="Arial Narrow, Arial" font-size="12.5" fill="#171A1F">je laisse passer ceux d'en face,</text>
  <text x="20" y="270" font-family="Arial Narrow, Arial" font-size="12.5" fill="#171A1F">virage long.</text>
 </g>
</svg>
<figcaption>Figure 13.1 — Placement et trajectoire selon la direction prise</figcaption>
</figure>
<ul>
<li>Je me <strong>serre à droite</strong> bien avant l'intersection, ce qui empêche un deux-roues de se glisser à ma droite.</li>
<li>Je contrôle <strong>impérativement l'angle mort droit</strong> : cyclistes et motocyclistes y disparaissent.</li>
<li>Je ralentis franchement : le virage est <strong>court et serré</strong>.</li>
<li>Je cède le passage aux <strong>piétons</strong> qui traversent la voie où je m'engage.</li>
</ul>

<h3>13.3 Tourner à gauche</h3>
<ul>
<li><strong>Hors agglomération et sur route à double sens</strong> : je me place près de l'axe médian, sans le franchir, en laissant si possible passer les véhicules qui me suivent.</li>
<li>Je <strong>cède le passage aux véhicules venant en sens inverse</strong> : ils sont prioritaires, y compris les deux-roues, souvent sous-estimés en vitesse.</li>
<li>Je m'arrête <strong>roues droites</strong> pendant l'attente : si je suis percuté par l'arrière avec les roues braquées, je pars dans la voie d'en face.</li>
<li>Le virage est <strong>long</strong> : je ne coupe pas la trajectoire, je m'engage dans la voie de droite de la route abordée.</li>
<li>En sens unique, je me place le long du bord gauche.</li>
</ul>

<h3>13.4 Changer de file</h3>
<p>Sur une chaussée à plusieurs voies : contrôle du rétroviseur, clignotant, contrôle de l'angle mort, puis déport souple sans imposer de freinage aux autres. Le changement de file est interdit dans un carrefour, sur un passage piétons et en franchissant une ligne continue.</p>

<h3>13.5 Le demi-tour</h3>
<p>Le demi-tour est autorisé lorsqu'il n'est pas expressément interdit et que la visibilité est suffisante des deux côtés. Il est <strong>interdit</strong> : sur autoroute et route pour automobiles, sur les ponts et dans les tunnels, aux passages à niveau, au sommet d'une côte, dans un virage sans visibilité, en franchissant une ligne continue.</p>
<h4>Procédure</h4>
<ol>
<li>Choisir un endroit dégagé et bien visible ; ne jamais le faire sur une intersection encombrée.</li>
<li>Clignotant, contrôles complets (avant, arrière, angles morts, piétons).</li>
<li>Manœuvre lente, en une ou trois fois selon la largeur de la chaussée.</li>
<li>Céder le passage à tous : durant le demi-tour, <strong>je ne suis prioritaire sur personne</strong>.</li>
</ol>

<h3>13.6 La marche arrière</h3>
<ul>
<li>Manœuvre exceptionnelle et lente, sur une <strong>courte distance</strong>.</li>
<li><strong>Interdite</strong> sur autoroute, sur route pour automobiles et dans les carrefours.</li>
<li>Regarder <strong>par la lunette arrière</strong>, en tournant le buste — les rétroviseurs et la caméra ne montrent pas tout, en particulier les enfants de petite taille.</li>
<li>Faire le tour du véhicule avant de reculer dans une zone où des enfants peuvent jouer.</li>
</ul>
<AttentionBox label="Erreurs fréquentes à l'examen">
Clignotant oublié ou laissé allumé après la manœuvre · Angle mort non contrôlé · Coupure du virage à gauche · Roues braquées pendant l'attente · Freinage <em>dans</em> le virage au lieu d'avant · Vitesse d'approche trop élevée.
</AttentionBox>

<QcmBlock title="QCM — Chapitre 13" :questions="questions" />
</section>
</template>
