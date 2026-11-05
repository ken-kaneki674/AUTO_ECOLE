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
<p>Avant de changer de direction, le conducteur doit :</p>
<ul>
<li>s'assurer que la manœuvre <strong>n'est pas interdite par une signalisation</strong> ;</li>
<li><strong>surveiller la route</strong> vers l'avant et vers l'arrière ;</li>
<li><strong>signaler son intention</strong> à l'aide du clignotant ;</li>
<li><strong>ralentir sans freiner brusquement</strong>, pour ne pas surprendre les usagers qui suivent ;</li>
<li><strong>respecter les règles de priorité</strong>, puis se placer convenablement sur la chaussée pour tourner.</li>
</ul>
<p>Quelle que soit la manœuvre, l'ordre est <strong>toujours</strong> le même. Retiens-le comme une check-list :</p>
<ol>
<li><strong>Contrôler</strong> : rétroviseur intérieur, rétroviseur extérieur du côté de la manœuvre, puis <strong>angle mort</strong>.</li>
<li><strong>Avertir</strong> : clignotant, suffisamment tôt (au moins <strong><ValeurBenin k="distance_clignotant_agglomeration" /> en agglomération, <ValeurBenin k="distance_clignotant_hors_agglomeration" /> hors agglomération</strong>) mais pas trop tôt, pour ne pas induire les autres en erreur.</li>
<li><strong>Se placer</strong> : à droite pour tourner à droite, près de l'axe pour tourner à gauche.</li>
<li><strong>Ralentir</strong> : freiner <em>avant</em> le virage, sans à-coup, et adapter le rapport de boîte.</li>
<li><strong>Tourner et contrôler</strong> : regarder où l'on va, surveiller piétons et deux-roues, puis éteindre le clignotant.</li>
</ol>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 170 120" aria-hidden="true"><rect width="170" height="120" fill="#EDEFF2"/><rect x="30" y="30" width="110" height="60" rx="12" fill="#171A1F"/><rect x="38" y="38" width="94" height="44" rx="7" fill="#DCEBF7"/><use href="#car-side" x="56" y="50" width="58" height="26" color="#D2202F"/><text x="85" y="20" font-size="22" font-weight="bold" fill="#0B5FA5" text-anchor="middle">C</text></svg><b>Contrôler</b><span>Rétroviseurs, puis angle mort</span></div>
 <div class="scene"><svg viewBox="0 0 170 120" aria-hidden="true"><rect width="170" height="120" fill="#EDEFF2"/><path d="M110 60 70 36v14H30v20h40v14z" fill="#E87722"/><path d="M122 42l14-10M126 60h18M122 78l14 10" stroke="#E87722" stroke-width="4" stroke-linecap="round"/><text x="85" y="20" font-size="22" font-weight="bold" fill="#0B5FA5" text-anchor="middle">A</text></svg><b>Avertir</b><span>Clignotant, assez tôt</span></div>
 <div class="scene"><svg viewBox="0 0 170 120" aria-hidden="true"><rect width="170" height="120" fill="#3A3F46"/><path d="M85 0v120" stroke="#fff" stroke-width="2.5" stroke-dasharray="10 9"/><use href="#car-n" x="120" y="44" width="24" height="46" color="#0B5FA5"/><text x="30" y="26" font-size="22" font-weight="bold" fill="#F5B301" text-anchor="middle">P</text></svg><b>Se placer</b><span>À droite, ou près de l'axe pour tourner à gauche</span></div>
 <div class="scene"><svg viewBox="0 0 170 120" aria-hidden="true"><rect width="170" height="120" fill="#EDEFF2"/><rect x="62" y="30" width="46" height="74" rx="8" fill="#D2202F"/><path d="M68 42h34M68 56h34M68 70h34M68 84h34" stroke="#8A1621" stroke-width="3"/><path d="M85 6v16" stroke="#171A1F" stroke-width="4" marker-end="url(#m-k)"/><text x="30" y="26" font-size="22" font-weight="bold" fill="#0B5FA5" text-anchor="middle">R</text></svg><b>Ralentir</b><span>Avant le virage, sans à-coup</span></div>
 <div class="scene"><svg viewBox="0 0 170 120" aria-hidden="true"><rect width="170" height="120" fill="#EDEFF2"/><circle cx="85" cy="66" r="42" fill="none" stroke="#171A1F" stroke-width="10"/><circle cx="85" cy="66" r="9" fill="#171A1F"/><path d="M85 66V26M85 66 50 84M85 66l35 18" stroke="#171A1F" stroke-width="6"/><path d="M36 28q24-24 54-14" fill="none" stroke="#1B7F5A" stroke-width="4" marker-end="url(#m-g)"/><text x="150" y="26" font-size="22" font-weight="bold" fill="#0B5FA5" text-anchor="middle">T</text></svg><b>Tourner</b><span>Je regarde où je vais, puis j'éteins le clignotant</span></div>
</div>
<figcaption>Figure 13.1 — C.A.P.R.T. : cinq temps, toujours dans cet ordre</figcaption>
</figure>
<figure>
<svg class="fig-large" style="max-width:480px" viewBox="0 0 480 340" role="img" aria-label="Voiture vue du dessus : les rétroviseurs couvrent l'arrière, mais deux zones sur les côtés restent invisibles : les angles morts. Une moto peut s'y cacher.">
 <rect width="480" height="340" fill="#3A3F46"/>
 <path d="M240 150 150 340h180z" fill="#2BB673" opacity=".35"/>
 <path d="M222 112 40 300l100 40z" fill="#2BB673" opacity=".2"/><path d="M258 112l182 188-100 40z" fill="#2BB673" opacity=".2"/>
 <path d="M216 118 0 130v120l130-30zM264 118l216 12v120l-130-30z" fill="#D2202F" opacity=".5"/>
 <use href="#car-n" x="208" y="60" width="64" height="122" color="#0B5FA5"/>
 <use href="#moto-n" x="384" y="146" width="24" height="60" color="#F5B301"/>
 <g font-size="17" font-weight="bold" text-anchor="middle" fill="#fff"><text x="82" y="170">ANGLE MORT</text><text x="82" y="192">gauche</text><text x="398" y="130">ANGLE MORT droit</text><text x="240" y="300">vu dans les rétroviseurs</text></g>
 <text x="240" y="34" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">Seul un coup d'œil sur le côté montre ces zones</text>
</svg>
<figcaption>Figure 13.2 — Les angles morts, là où une moto disparaît</figcaption>
</figure>
<MemoBox label="Formule mnémotechnique">
« <strong>C.A.P.R.T.</strong> » : <strong>C</strong>ontrôler, <strong>A</strong>vertir, se <strong>P</strong>lacer, <strong>R</strong>alentir, <strong>T</strong>ourner. Aucune de ces étapes ne peut être sautée, et l'ordre ne s'inverse pas : on regarde <em>avant</em> de mettre le clignotant, et on met le clignotant <em>avant</em> de se déporter.
</MemoBox>

<h3>13.2 Tourner à droite</h3>
<p>La place à occuper sur la chaussée dépend de la <strong>catégorie du véhicule</strong> que l'on conduit et du fait que l'on tourne <strong>à droite ou à gauche</strong>. Pour tourner à droite, le conducteur d'un <strong>véhicule léger</strong> se place à droite : il <strong>serre le plus possible le bord droit</strong> de la chaussée.</p>
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
  <path d="M250 280 V180 Q250 133 213 133 H14" fill="none" stroke="#F5B301" stroke-width="4"/>
  <path d="M14 133l14-7v14z" fill="#F5B301"/>
  <rect x="240" y="240" width="28" height="42" rx="4" fill="#D2202F"/>
  <text x="190" y="24" font-family="Arial Narrow, Arial" font-size="14" font-weight="bold" fill="#fff">À GAUCHE</text>
  <text x="20" y="238" font-family="Arial Narrow, Arial" font-size="12.5" fill="#171A1F">Je me place près de l'axe,</text>
  <text x="20" y="254" font-family="Arial Narrow, Arial" font-size="12.5" fill="#171A1F">je laisse passer ceux d'en face,</text>
  <text x="20" y="270" font-family="Arial Narrow, Arial" font-size="12.5" fill="#171A1F">virage long.</text>
 </g>
</svg>
<figcaption>Figure 13.3 — Placement et trajectoire selon la direction prise</figcaption>
</figure>
<ul>
<li>Je me <strong>serre à droite</strong> bien avant l'intersection, ce qui empêche un deux-roues de se glisser à ma droite.</li>
<li>Je contrôle <strong>impérativement l'angle mort droit</strong> : cyclistes et motocyclistes y disparaissent.</li>
<li>Je ralentis franchement : le virage est <strong>court et serré</strong>.</li>
<li>Je cède le passage aux <strong>piétons</strong> qui traversent la voie où je m'engage.</li>
</ul>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><use href="#bg-carrefour" width="240" height="170"/><use href="#car-n" x="128" y="122" width="20" height="38" color="#0B5FA5"/><path d="M152 122v-6q0-12 12-12h26" fill="none" stroke="#F5B301" stroke-width="3" marker-end="url(#m-a)"/><use href="#o-ok" x="4" y="4" width="30" height="30"/><text x="196" y="150" font-size="14" font-weight="bold" fill="#171A1F" text-anchor="middle">aucune place</text><text x="196" y="166" font-size="14" font-weight="bold" fill="#171A1F" text-anchor="middle">à ma droite</text></svg><b>Je serre à droite</b><span>Un deux-roues ne peut pas se glisser à ma droite</span></div>
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><use href="#bg-carrefour" width="240" height="170"/><path d="M160 62v46M172 62v46M184 62v46M196 62v46" stroke="#fff" stroke-width="7"/><use href="#car-n" x="128" y="118" width="20" height="38" color="#0B5FA5"/><path d="M138 116q2-16 14-16" fill="none" stroke="#F5B301" stroke-width="3"/><use href="#p-person" x="170" y="64" width="18" height="42" color="#F5B301"/><text x="196" y="150" font-size="14" font-weight="bold" fill="#171A1F" text-anchor="middle">je cède</text><text x="196" y="166" font-size="14" font-weight="bold" fill="#171A1F" text-anchor="middle">au piéton</text></svg><b>Le piéton d'abord</b><span>Il traverse la voie où je m'engage : je le laisse passer</span></div>
</div>
<figcaption>Figure 13.4 — Tourner à droite sans danger</figcaption>
</figure>

<h3>13.3 Tourner à gauche</h3>
<p>Pour tourner à gauche, la place à occuper dépend aussi du <strong>nombre de sens</strong> de la chaussée :</p>
<ul>
<li><strong>Chaussée à double sens</strong> : le conducteur d'un véhicule léger se déporte <strong>au milieu, sans dépasser l'axe médian</strong>, puis il <strong>contourne le centre de l'intersection</strong>.</li>
<li><strong>Chaussée à sens unique</strong> : il <strong>serre complètement la gauche</strong>, car aucun véhicule ne peut venir en sens inverse.</li>
</ul>
<ul>
<li><strong>Hors agglomération et sur route à double sens</strong> : je me place près de l'axe médian, sans le franchir, en laissant si possible passer les véhicules qui me suivent.</li>
<li>Je <strong>cède le passage aux véhicules venant en sens inverse</strong> : ils sont prioritaires, y compris les deux-roues, souvent sous-estimés en vitesse.</li>
<li>Je m'arrête <strong>roues droites</strong> pendant l'attente : si je suis percuté par l'arrière avec les roues braquées, je pars dans la voie d'en face.</li>
<li>Le virage est <strong>long</strong> : je ne coupe pas la trajectoire, je m'engage dans la voie de droite de la route abordée.</li>
</ul>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><use href="#bg-carrefour" width="240" height="170"/><use href="#car-n" x="122" y="124" width="20" height="38" color="#0B5FA5"/><path d="M132 122V90q0-10-10-14H60" fill="none" stroke="#F5B301" stroke-width="3" marker-end="url(#m-a)"/><use href="#car-s" x="95" y="6" width="20" height="38" color="#D2202F"/><path d="M105 46v18" stroke="#D2202F" stroke-width="3" marker-end="url(#m-r)"/></svg><b>Chaussée à double sens</b><span>Près de l'axe sans le dépasser ; je contourne le centre et je cède à ceux d'en face</span></div>
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><rect width="240" height="170" fill="#EDEFF2"/><rect x="90" width="60" height="170" fill="#3A3F46"/><rect y="55" width="240" height="60" fill="#3A3F46"/><path d="M0 85h90M150 85h90" stroke="#fff" stroke-width="2.5" stroke-dasharray="12 10"/><use href="#car-n" x="93" y="124" width="20" height="38" color="#0B5FA5"/><path d="M103 122V84q0-8-8-8H52" fill="none" stroke="#F5B301" stroke-width="3" marker-end="url(#m-a)"/><path d="M130 160v-30M130 40V10" stroke="#fff" stroke-width="4" marker-end="url(#m-w)"/></svg><b>Chaussée à sens unique</b><span>Je serre complètement à gauche</span></div>
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><rect width="240" height="170" fill="#EDEFF2"/><rect x="60" width="120" height="170" fill="#3A3F46"/><path d="M120 0v170" stroke="#fff" stroke-width="2.5" stroke-dasharray="12 10"/><rect x="130" y="50" width="40" height="86" rx="10" fill="#0B5FA5"/><rect x="124" y="60" width="10" height="24" rx="3" fill="#171A1F"/><rect x="166" y="60" width="10" height="24" rx="3" fill="#171A1F"/><rect x="124" y="104" width="10" height="24" rx="3" fill="#171A1F"/><rect x="166" y="104" width="10" height="24" rx="3" fill="#171A1F"/><use href="#o-ok" x="6" y="6" width="34" height="34"/></svg><b>Roues droites pendant l'attente</b><span>Si on me percute, je reste dans ma voie</span></div>
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><rect width="240" height="170" fill="#EDEFF2"/><rect x="60" width="120" height="170" fill="#3A3F46"/><path d="M120 0v170" stroke="#fff" stroke-width="2.5" stroke-dasharray="12 10"/><rect x="130" y="50" width="40" height="86" rx="10" fill="#0B5FA5"/><rect x="124" y="60" width="10" height="24" rx="3" fill="#171A1F" transform="rotate(-25 129 72)"/><rect x="166" y="60" width="10" height="24" rx="3" fill="#171A1F" transform="rotate(-25 171 72)"/><rect x="124" y="104" width="10" height="24" rx="3" fill="#171A1F"/><rect x="166" y="104" width="10" height="24" rx="3" fill="#171A1F"/><path d="M130 46Q110 30 84 16" fill="none" stroke="#D2202F" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#m-r)"/><use href="#o-no" x="6" y="6" width="34" height="34"/></svg><b>Roues déjà braquées</b><span>Si on me percute, je pars dans la voie d'en face</span></div>
</div>
<figcaption>Figure 13.5 — Tourner à gauche : se placer et attendre</figcaption>
</figure>

<h3>13.4 Changer de file</h3>
<p>Sur une chaussée à plusieurs voies : contrôle du rétroviseur, clignotant, contrôle de l'angle mort, puis déport souple sans imposer de freinage aux autres. Le changement de file est interdit dans un carrefour, sur un passage piétons et en franchissant une ligne continue.</p>
<figure>
<svg class="fig-large" viewBox="0 0 560 150" role="img" aria-label="Changement de file : déport souple vers la voie voisine, avec assez de place derrière pour ne pas faire freiner l'autre véhicule">
 <rect width="560" height="150" fill="#3A3F46"/><path d="M0 75h560" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/><path d="M0 8h560M0 142h560" stroke="#fff" stroke-width="3"/>
 <use href="#car-e" x="70" y="96" width="64" height="30" color="#0B5FA5"/><circle cx="130" cy="99" r="3.5" fill="#F5B301"/>
 <path d="M140 110q90 0 160-64" fill="none" stroke="#F5B301" stroke-width="3.5" marker-end="url(#m-a)"/>
 <use href="#car-e" x="10" y="26" width="64" height="30" color="#5C636D"/><use href="#car-e" x="440" y="26" width="64" height="30" color="#5C636D"/>
 <g font-size="16" font-weight="bold" fill="#fff"><text x="170" y="126">déport souple, sans faire freiner les autres</text></g>
</svg>
<figcaption>Figure 13.6 — Changer de file dans un espace suffisant</figcaption>
</figure>

<h3>13.5 Le demi-tour</h3>
<p>Le demi-tour est autorisé lorsqu'il n'est pas expressément interdit et que la visibilité est suffisante des deux côtés. Il est <strong>interdit</strong> : sur autoroute et route pour automobiles, sur les ponts et dans les tunnels, aux passages à niveau, au sommet d'une côte, dans un virage sans visibilité, en franchissant une ligne continue.</p>
<h4>Procédure</h4>
<ol>
<li>Choisir un endroit dégagé et bien visible ; ne jamais le faire sur une intersection encombrée.</li>
<li>Clignotant, contrôles complets (avant, arrière, angles morts, piétons).</li>
<li>Manœuvre lente, en une ou trois fois selon la largeur de la chaussée.</li>
<li>Céder le passage à tous : durant le demi-tour, <strong>je ne suis prioritaire sur personne</strong>.</li>
</ol>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 280 170" aria-hidden="true"><rect width="280" height="170" fill="#EDEFF2"/><rect y="20" width="280" height="130" fill="#3A3F46"/><path d="M0 85h280" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/><use href="#car-e" x="30" y="108" width="50" height="26" color="#0B5FA5" opacity=".5"/><path d="M84 120q80-4 90-74" fill="none" stroke="#F5B301" stroke-width="3.5" marker-end="url(#m-a)"/><path d="M170 36q-10 50 40 60" fill="none" stroke="#D2202F" stroke-width="3.5" stroke-dasharray="6 5" marker-end="url(#m-r)"/><path d="M214 92q-44-14-100-50" fill="none" stroke="#1B7F5A" stroke-width="3.5" marker-end="url(#m-g)"/><use href="#car-w" x="50" y="28" width="50" height="26" color="#0B5FA5"/><g font-size="15" font-weight="bold" text-anchor="middle" fill="#fff"><text x="186" y="52">1</text><text x="228" y="86">2</text><text x="126" y="72">3</text></g></svg><b>Demi-tour en trois fois</b><span>Marche avant, marche arrière, marche avant : lentement, en cédant à tous</span></div>
 <div class="scene"><svg viewBox="0 0 280 170" aria-hidden="true"><rect width="280" height="170" fill="#E4EADF"/><path d="M0 170V126Q140 40 280 126v44z" fill="#3A3F46"/><use href="#car-side" x="-32" y="-28" width="64" height="28" transform="translate(140 84)" color="#0B5FA5"/><use href="#o-no" x="6" y="6" width="34" height="34"/><text x="170" y="30" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">sommet de côte, virage,</text><text x="170" y="48" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">pont, tunnel, ligne continue</text></svg><b>Là où il est interdit</b><span>Autoroute et route pour automobiles aussi</span></div>
</div>
<figcaption>Figure 13.7 — Le demi-tour : comment et où</figcaption>
</figure>

<h3>13.6 La marche arrière</h3>
<ul>
<li>Manœuvre exceptionnelle et lente, sur une <strong>courte distance</strong>.</li>
<li><strong>Interdite</strong> sur autoroute, sur route pour automobiles et dans les carrefours.</li>
<li>Regarder <strong>par la lunette arrière</strong>, en tournant le buste — les rétroviseurs et la caméra ne montrent pas tout, en particulier les enfants de petite taille.</li>
<li>Faire le tour du véhicule avant de reculer dans une zone où des enfants peuvent jouer.</li>
</ul>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 280 170" aria-hidden="true"><rect width="280" height="170" fill="#EDEFF2"/><rect y="138" width="280" height="32" fill="#3A3F46"/><use href="#car-side" x="110" y="74" width="154" height="66" color="#0B5FA5"/><path d="M106 104H62" stroke="#D2202F" stroke-width="4" marker-end="url(#m-r)"/><use href="#p-person" x="30" y="94" width="20" height="46" color="#F5B301"/><path d="M180 92 54 112" stroke="#1B7F5A" stroke-width="2.5" stroke-dasharray="6 5"/><text x="140" y="36" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">un enfant peut se cacher derrière</text><text x="140" y="56" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">je fais le tour du véhicule</text></svg><b>Ce que l'on ne voit pas</b><span>Les rétroviseurs et la caméra ne montrent pas tout</span></div>
 <div class="scene"><svg viewBox="0 0 280 170" aria-hidden="true"><rect width="280" height="170" fill="#EDEFF2"/><path d="M40 20h200v130H40z" fill="#DCE0E5"/><rect x="104" y="66" width="72" height="72" rx="8" fill="#5C636D"/><ellipse cx="140" cy="88" rx="34" ry="15" fill="#0B5FA5" transform="rotate(35 140 88)"/><circle cx="140" cy="88" r="12" fill="#8D5A3B"/><path d="M144 98q6 40 8 46" stroke="#1B7F5A" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#m-g)"/><rect x="60" y="150" width="160" height="10" fill="#7DA6CC"/><text x="140" y="44" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">je tourne le buste</text><text x="206" y="130" font-size="14" font-weight="bold" fill="#1B7F5A" text-anchor="middle">regard vers</text><text x="214" y="146" font-size="14" font-weight="bold" fill="#1B7F5A" text-anchor="middle">la lunette</text></svg><b>Regarder par la lunette arrière</b><span>Vu du dessus : le buste tourné, sur une courte distance</span></div>
</div>
<figcaption>Figure 13.8 — Reculer, c'est d'abord regarder</figcaption>
</figure>
<AttentionBox label="Erreurs fréquentes à l'examen">
Clignotant oublié ou laissé allumé après la manœuvre · Angle mort non contrôlé · Coupure du virage à gauche · Roues braquées pendant l'attente · Freinage <em>dans</em> le virage au lieu d'avant · Vitesse d'approche trop élevée.
</AttentionBox>

<QcmBlock title="QCM — Chapitre 13" :questions="questions" />
</section>
</template>
