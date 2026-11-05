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

<p>Lorsqu'un conducteur arrive sur les lieux d'un accident et que <strong>les secours sont déjà en place</strong>, il doit <strong>éviter de s'arrêter</strong> pour ne pas encombrer les lieux. Mais si <strong>les secours ne sont pas encore là</strong> et que l'accident vient de se produire, il doit <strong>absolument s'arrêter</strong> pour porter assistance aux victimes. Son comportement se résume en trois (03) mots : <strong>PROTÉGER – ALERTER – SECOURIR (P.A.S.)</strong>.</p>

<h4>1. Protéger</h4>
<p>Protéger, c'est prendre les mesures nécessaires pour <strong>éviter l'aggravation de l'accident</strong> (un sur-accident).</p>
<ul>
<li>Se garer <strong>après</strong> l'accident, feux de détresse allumés, gilet enfilé.</li>
<li><strong>Baliser les lieux de l'accident dans les deux directions</strong> avec les <strong>feux de détresse</strong> et les <strong>triangles de présignalisation</strong>, placés à <strong>200 m au moins</strong> pour un accident (à <strong>30 m</strong> en cas de simple panne). Faire ralentir le trafic.</li>
<li><strong>Couper le contact</strong> et, si possible, <strong>débrancher la batterie</strong> des véhicules accidentés ; serrer le frein de stationnement.</li>
<li><strong>Interdire à tout le monde de fumer</strong>.</li>
<li>Pour éteindre un <strong>début d'incendie</strong>, utiliser l'<strong>extincteur</strong> et du <strong>sable</strong>. <strong>Attention : jamais d'eau !</strong></li>
<li>Écarter les curieux, éloigner les personnes valides hors de la chaussée.</li>
<li><strong>Ne jamais se mettre soi-même en danger</strong> : un sauveteur blessé devient une victime de plus.</li>
</ul>
<figure>
<svg class="fig-large" viewBox="0 0 620 190" role="img" aria-label="Accident au milieu de la route : un triangle de présignalisation à 200 mètres de chaque côté et la voiture du témoin garée après l'accident, feux de détresse allumés">
 <rect width="620" height="190" fill="#EDEFF2"/><rect y="50" width="620" height="84" fill="#3A3F46"/><path d="M0 92h620" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/>
 <g transform="rotate(14 300 92)"><use href="#car-e" x="262" y="72" width="58" height="28" color="#D2202F"/></g><use href="#car-n" x="-14" y="-28" width="28" height="56" transform="translate(344 86) rotate(50)" color="#5C636D"/>
 <path d="M296 56l6 10M324 50l-3 12M352 58l-6 8" stroke="#F5B301" stroke-width="3"/>
 <use href="#o-triangle" x="50" y="100" width="30" height="27"/><use href="#o-triangle" x="540" y="56" width="30" height="27"/>
 <use href="#car-e" x="430" y="104" width="58" height="26" color="#0B5FA5"/><circle cx="432" cy="108" r="3.5" fill="#F5B301"/><circle cx="486" cy="108" r="3.5" fill="#F5B301"/><circle cx="432" cy="126" r="3.5" fill="#F5B301"/><circle cx="486" cy="126" r="3.5" fill="#F5B301"/>
 <path d="M65 146h220M65 140v12M285 140v12" stroke="#D2202F" stroke-width="2.5"/><path d="M340 38h215M340 32v12M555 32v12" stroke="#D2202F" stroke-width="2.5"/>
 <g font-size="16" font-weight="bold"><text x="175" y="170" fill="#D2202F" text-anchor="middle">200 m au moins</text><text x="448" y="24" fill="#D2202F" text-anchor="middle">200 m au moins</text><text x="460" y="170" fill="#0B5FA5" text-anchor="middle">je me gare après, feux de détresse</text></g>
</svg>
<figcaption>Figure 9.2 — Baliser dans les deux directions (30 m seulement pour une simple panne)</figcaption>
</figure>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 200 130" aria-hidden="true"><rect width="200" height="130" fill="#EDEFF2"/><circle cx="100" cy="74" r="46" fill="#3A3F46"/><circle cx="100" cy="74" r="24" fill="#C9CDD4"/><rect x="94" y="46" width="12" height="56" rx="4" fill="#171A1F"/><rect x="82" y="60" width="36" height="28" rx="6" fill="#171A1F"/><text x="100" y="20" font-size="18" font-weight="bold" fill="#1B7F5A" text-anchor="middle">0</text><text x="164" y="80" font-size="16" font-weight="bold" fill="#5C636D">I</text><path d="M150 44q-16-16-36-20" fill="none" stroke="#1B7F5A" stroke-width="3" marker-end="url(#m-g)"/></svg><b>Couper le contact</b><span>Débrancher la batterie si possible</span></div>
 <div class="scene"><svg viewBox="0 0 200 130" aria-hidden="true"><rect width="200" height="130" fill="#EDEFF2"/><rect x="46" y="66" width="86" height="16" fill="#fff" stroke="#5C636D" stroke-width="2"/><rect x="132" y="66" width="22" height="16" fill="#E87722"/><path d="M60 58q-6-14 6-22 8-8 2-18" fill="none" stroke="#8A9099" stroke-width="4"/><circle cx="100" cy="74" r="50" fill="none" stroke="#D2202F" stroke-width="9"/><path d="M64 38l72 72" stroke="#D2202F" stroke-width="9"/></svg><b>Personne ne fume</b><span>L'essence et les vapeurs s'enflamment</span></div>
 <div class="scene"><svg viewBox="0 0 200 130" aria-hidden="true"><rect width="200" height="130" fill="#EDEFF2"/><path d="M116 118q-30-8-24-44 8 10 14 8-2-30 22-48 0 22 14 34 14 16 4 36-8 14-30 14z" fill="#E87722"/><path d="M126 118q-14-8-8-24 6 6 10 2 2-10 8-14 4 10 6 18 2 12-16 18z" fill="#F5B301"/><rect x="20" y="52" width="30" height="62" rx="7" fill="#D2202F"/><path d="M26 52V40h16M42 42h22l-6 8" fill="none" stroke="#171A1F" stroke-width="5"/><text x="36" y="28" font-size="14" font-weight="bold" fill="#1B7F5A" text-anchor="middle">extincteur</text></svg><b>Début d'incendie</b><span>Extincteur et sable. Jamais d'eau !</span></div>
</div>
<figcaption>Figure 9.3 — Protéger : éviter le sur-accident</figcaption>
</figure>
<p><strong>À l'examen</strong> : le manuel de la DGTT attend « à 30 m au moins » pour la distance ordinaire des triangles sur un lieu d'accident (Q535).</p>

<h4>2. Alerter</h4>
<p>Il faut avertir les <strong>services compétents</strong>, par le <strong>moyen le plus rapide</strong> : téléphoner (téléphone public ou privé), ou faire donner l'alerte par un autre usager, par exemple un automobiliste de passage.</p>
<ul>
<li><strong>En ville</strong> : avertir la <strong>police</strong> ou les <strong>pompiers</strong>.</li>
<li><strong>En campagne</strong> : avertir la <strong>gendarmerie</strong> et les <strong>sapeurs-pompiers</strong>.</li>
</ul>
<p><strong>Les renseignements à donner</strong> : le <strong>lieu exact</strong> de l'accident (repère de panneau, borne kilométrique), le <strong>nombre et l'état des blessés</strong>, le <strong>nombre et le type de véhicules</strong> accidentés, les <strong>circonstances particulières</strong> (incendie, immersion, matières dangereuses…). Grâce à ces précisions, les services d'intervention peuvent venir rapidement avec le matériel approprié.</p>
<div class="table-scroll"><table>
<thead><tr><th>Qui appeler</th><th>Que dire</th></tr></thead>
<tbody>
<tr><td>
<strong>Police secours : <ValeurBenin k="numero_police" /></strong><br>
<strong>Sapeurs-pompiers : <ValeurBenin k="numero_pompiers" /></strong><br>
<strong>Secours médicaux : <ValeurBenin k="numero_samu" /></strong><br>
<em>Note-les dans ton téléphone.</em>
</td><td>
1. <strong>Qui</strong> je suis et d'où j'appelle (numéro de rappel).<br>
2. <strong>Où</strong> exactement : route, sens, point kilométrique, repère visible.<br>
3. <strong>Quoi</strong> : type d'accident, véhicules impliqués, incendie, produit dangereux.<br>
4. <strong>Combien</strong> de victimes et leur état apparent (conscientes ? qui saigne ? bloquées ?).<br>
5. <strong>Ne jamais raccrocher le premier</strong> : le régulateur peut donner des consignes.
</td></tr>
</tbody>
</table></div>

<figure>
<div class="panneaux">
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><rect x="22" y="4" width="36" height="72" rx="7" fill="#171A1F"/><rect x="26" y="12" width="28" height="50" fill="#DCEBF7"/><circle cx="40" cy="69" r="3.5" fill="#fff"/><circle cx="40" cy="30" r="8" fill="#8D5A3B"/><path d="M28 54q12-22 24 0z" fill="#0B5FA5"/></svg><b>Qui</b> : je suis, d'où j'appelle</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><path d="M40 4C24 4 14 16 14 30c0 18 26 46 26 46s26-28 26-46C66 16 56 4 40 4z" fill="#D2202F"/><circle cx="40" cy="30" r="10" fill="#fff"/></svg><b>Où</b> : route, sens, point kilométrique</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 130 80" aria-hidden="true"><use href="#car-side" y="14" width="130" height="56" color="#5C636D"/><path d="M60 14l6-10M84 12l8-8M36 18l-8-8" stroke="#E87722" stroke-width="5"/></svg><b>Quoi</b> : véhicules, incendie, produit dangereux</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><use href="#p-person" x="4" y="12" width="24" height="56" color="#D2202F"/><use href="#p-person" x="28" y="12" width="24" height="56" color="#D2202F"/><use href="#p-person" x="52" y="12" width="24" height="56" color="#D2202F"/></svg><b>Combien</b> de victimes, dans quel état</div>
</div>
<figcaption>Figure 9.4 — Un message d'alerte utile, et je ne raccroche jamais le premier</figcaption>
</figure>

<h4>3. Secourir</h4>
<p>En attendant l'arrivée des secours, il faut <strong>assister les blessés sans risquer d'aggraver leur état</strong>.</p>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 200 130" aria-hidden="true"><rect width="200" height="130" fill="#FCEBEC"/><path d="M72 30h56l-8 88H80z" fill="#DCEBF7" stroke="#5C636D" stroke-width="3"/><path d="M76 60h48l-5 56H81z" fill="#5B8FD0"/><use href="#o-no" x="150" y="6" width="44" height="44"/></svg><b>Ne pas donner à boire</b><span>Ni eau, ni alcool</span></div>
 <div class="scene"><svg viewBox="0 0 200 130" aria-hidden="true"><rect width="200" height="130" fill="#FCEBEC"/><rect y="104" width="200" height="26" fill="#3A3F46"/><circle cx="44" cy="92" r="12" fill="#8D5A3B"/><rect x="58" y="82" width="70" height="22" rx="10" fill="#0B5FA5"/><rect x="128" y="88" width="50" height="14" rx="7" fill="#16283F"/><path d="M90 66V34" stroke="#D2202F" stroke-width="5" marker-end="url(#m-r)"/><use href="#o-no" x="150" y="6" width="44" height="44"/></svg><b>Ne pas déplacer</b><span>Sauf danger immédiat : incendie, noyade</span></div>
 <div class="scene"><svg viewBox="0 0 200 130" aria-hidden="true"><rect width="200" height="130" fill="#FCEBEC"/><path d="M50 84V60q0-36 42-36 44 0 44 40v20z" fill="#D2202F"/><path d="M92 60h44v24H92z" fill="#171A1F"/><path d="M50 84h86v12H50z" fill="#8A1621"/><path d="M92 22V6" stroke="#D2202F" stroke-width="5" marker-end="url(#m-r)"/><use href="#o-no" x="150" y="6" width="44" height="44"/></svg><b>Ne pas retirer le casque</b><span>D'un motocycliste blessé</span></div>
 <div class="scene"><svg viewBox="0 0 200 130" aria-hidden="true"><rect width="200" height="130" fill="#E9F5EF"/><rect y="104" width="200" height="26" fill="#3A3F46"/><circle cx="36" cy="88" r="13" fill="#8D5A3B"/><path d="M52 104q0-26 24-26h76q20 0 24 26z" fill="#E87722"/><path d="M64 84l12 20M92 78l10 26M124 78l8 26" stroke="#fff" stroke-width="2"/><use href="#o-ok" x="150" y="6" width="44" height="44"/></svg><b>Couvrir et parler</b><span>Une couverture, des mots rassurants</span></div>
</div>
<figcaption>Figure 9.5 — Secourir sans aggraver</figcaption>
</figure>
<div class="table-scroll"><table>
<thead><tr><th>Ce qu'il faut éviter</th><th>Ce qu'il faut faire pour réconforter le blessé</th></tr></thead>
<tbody>
<tr><td>
Ne pas <strong>donner à boire</strong> à un blessé (ni eau, ni alcool).<br>
Ne pas <strong>déplacer</strong> un blessé ni l'extraire du véhicule, sauf pour le protéger d'un danger imminent (incendie, noyade).<br>
Ne pas <strong>retirer le casque</strong> d'un motocycliste.<br>
Ne pas laisser le blessé exposé au <strong>froid</strong> ou aux intempéries.
</td><td>
Lui adresser des <strong>paroles amicales et rassurantes</strong>.<br>
Le <strong>couvrir</strong> avec un vêtement ou une couverture pour le réchauffer.
</td></tr>
</tbody>
</table></div>

<h4>Les dangers qui peuvent tuer un blessé avant l'arrivée des secours</h4>
<p>Ce sont <strong>l'hémorragie</strong>, <strong>l'asphyxie</strong> et <strong>l'état de choc</strong>.</p>
<p><strong>L'hémorragie</strong> est la sortie du sang hors des vaisseaux sanguins. Il en existe deux sortes :</p>
<ul>
<li><strong>l'hémorragie interne</strong> : le sang s'écoule à l'intérieur du corps, mais on ne le voit pas couler ;</li>
<li><strong>l'hémorragie externe</strong> : le sang s'écoule à l'extérieur du corps et on le voit couler, par un orifice naturel, par une plaie, ou les deux à la fois.</li>
</ul>
<p><strong>Pour arrêter une hémorragie externe</strong> : appuyer sur les <strong>points de compression</strong> ; faire une <strong>pression directe sur la plaie</strong> avec un linge propre ; faire un <strong>pansement compressif</strong> (pas un pansement alcoolisé).</p>
<p><strong>L'asphyxie</strong> : une personne est asphyxiée lorsqu'elle <strong>ne respire plus ou respire très mal</strong> ; on la reconnaît à l'<strong>arrêt du mouvement de la poitrine ou du ventre</strong>. Pour la réanimer :</p>
<ul>
<li>lui <strong>desserrer les vêtements</strong> (col, ceinture) ;</li>
<li><strong>débarrasser sa bouche</strong> des corps étrangers et pratiquer la <strong>respiration bouche-à-bouche</strong> ou <strong>bouche-à-nez</strong> ;</li>
<li>la mettre en <strong>position latérale de sécurité (PLS)</strong> dès qu'elle respire.</li>
</ul>
<p>Le <strong>massage cardiaque</strong> permet de réanimer une victime qui présente un <strong>arrêt circulatoire</strong>.</p>

<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect x="20" y="86" width="200" height="30" rx="14" fill="#8D5A3B"/><path d="M104 86h44v30h-44z" fill="#fff"/><path d="M108 116q10 16 8 26M126 116q4 12 2 26M144 116q2 8-2 18" stroke="#D2202F" stroke-width="4" fill="none"/><path d="M124 12v44" stroke="#0B5FA5" stroke-width="24" stroke-linecap="round"/><path d="M104 62q20-16 40 0v18h-40z" fill="#8D5A3B"/><path d="M178 34v32" stroke="#D2202F" stroke-width="4" marker-end="url(#m-r)"/></svg><b>Hémorragie</b><span>Je comprime la plaie avec un linge propre, sans relâcher</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect y="118" width="240" height="32" fill="#C9CDD4"/><path d="M60 118q0-22 26-22h100q24 0 24 22z" fill="#0B5FA5"/><circle cx="44" cy="98" r="19" fill="#8D5A3B"/><path d="M54 60l-8 16M30 58l6 18" stroke="#1B7F5A" stroke-width="3" marker-end="url(#m-g)"/><path d="M70 100l24 0" stroke="#fff" stroke-width="5"/><text x="150" y="60" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">col et ceinture</text><text x="150" y="78" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">desserrés</text></svg><b>Asphyxie</b><span>Je libère les voies respiratoires : bouche dégagée, vêtements desserrés</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect y="118" width="240" height="32" fill="#C9CDD4"/><circle cx="36" cy="94" r="16" fill="#8D5A3B"/><path d="M52 84q10-10 22-8l60 6q12 2 12 14v22H66q-16-8-14-34z" fill="#0B5FA5"/><path d="M146 104l44-22 16 36h-18l-8-16-34 16z" fill="#16283F"/><path d="M140 112l70 6" stroke="#16283F" stroke-width="14" stroke-linecap="round"/><path d="M60 100q-6 12-22 18" stroke="#8D5A3B" stroke-width="9" fill="none" stroke-linecap="round"/><text x="176" y="62" font-size="14" font-weight="bold" fill="#171A1F" text-anchor="middle">genou supérieur</text><text x="176" y="78" font-size="14" font-weight="bold" fill="#171A1F" text-anchor="middle">fléchi</text></svg><b>Position latérale de sécurité</b><span>Sur le côté : la langue ne bloque pas la respiration</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect y="118" width="240" height="32" fill="#C9CDD4"/><circle cx="34" cy="106" r="13" fill="#8D5A3B"/><rect x="48" y="98" width="110" height="22" rx="10" fill="#0B5FA5"/><rect x="156" y="102" width="70" height="16" rx="7" fill="#16283F"/><circle cx="110" cy="26" r="13" fill="#5C3A22"/><path d="M110 40q22 0 26 26l6 52h-22l-6-44z" fill="#D2202F"/><path d="M112 46 92 96" stroke="#5C3A22" stroke-width="9" stroke-linecap="round"/><path d="M70 62v22" stroke="#D2202F" stroke-width="3" marker-end="url(#m-r)"/><text x="186" y="52" font-size="26" font-weight="bold" fill="#D2202F" text-anchor="middle">30 : 2</text><text x="186" y="74" font-size="13" fill="#171A1F" text-anchor="middle">compressions :</text><text x="186" y="90" font-size="13" fill="#171A1F" text-anchor="middle">insufflations</text></svg><b>Réanimation</b><span>Inconscient et ne respire pas : 30 compressions, 2 insufflations</span></div>
</div>
<figcaption>Figure 9.6 — Les gestes face aux trois dangers vitaux</figcaption>
</figure>

<h4>Les autres blessures fréquentes</h4>
<ul>
<li><strong>Fracture</strong> : l'os se casse. <strong>Fracture fermée</strong> : l'os cassé ne prend pas contact avec l'extérieur. <strong>Fracture ouverte</strong> : l'os cassé prend contact avec l'extérieur (il y a donc saignement).</li>
<li><strong>Entorse</strong> : les ligaments s'étirent ou se déchirent, mais l'os ne se casse pas et l'articulation ne se déboîte pas.</li>
<li><strong>Luxation</strong> : les ligaments se déchirent, l'articulation est déboîtée et les surfaces articulaires ne sont plus en contact.</li>
</ul>

<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#EDEFF2"/><rect x="12" y="34" width="196" height="62" rx="28" fill="#D9A981"/><path d="M28 62h72l6-8 6 14 6-6h74" fill="none" stroke="#fff" stroke-width="12" stroke-linejoin="round"/></svg><b>Fracture fermée</b><span>L'os est cassé, la peau reste intacte</span></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#EDEFF2"/><rect x="12" y="34" width="196" height="62" rx="28" fill="#D9A981"/><path d="M28 66h76l20-36" fill="none" stroke="#fff" stroke-width="12"/><path d="M126 66h66" stroke="#fff" stroke-width="12"/><path d="M108 40h30" stroke="#D2202F" stroke-width="8" stroke-linecap="round"/><path d="M116 96v18M132 96v12" stroke="#D2202F" stroke-width="4"/></svg><b>Fracture ouverte</b><span>L'os cassé touche l'extérieur : ça saigne</span></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#EDEFF2"/><rect x="16" y="52" width="82" height="26" rx="13" fill="#fff" stroke="#8A9099" stroke-width="2"/><rect x="122" y="52" width="82" height="26" rx="13" fill="#fff" stroke="#8A9099" stroke-width="2"/><path d="M88 58q22-10 44 0M88 72q22 10 44 0" fill="none" stroke="#D2202F" stroke-width="5"/></svg><b>Entorse</b><span>Ligaments étirés ou déchirés, l'os ne casse pas</span></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#EDEFF2"/><rect x="16" y="52" width="82" height="26" rx="13" fill="#fff" stroke="#8A9099" stroke-width="2"/><rect x="120" y="28" width="82" height="26" rx="13" fill="#fff" stroke="#8A9099" stroke-width="2" transform="rotate(24 120 28)"/><path d="M92 58q8-6 20-14M92 74q10 8 24-10" fill="none" stroke="#D2202F" stroke-width="3" stroke-dasharray="4 4"/></svg><b>Luxation</b><span>L'articulation est déboîtée</span></div>
</div>
<figcaption>Figure 9.7 — Quatre blessures à ne pas confondre</figcaption>
</figure>

<h4>Quelques notions techniques</h4>
<ul>
<li><strong>On ne déplace pas un blessé.</strong> S'il est absolument nécessaire de le faire à cause d'un danger imminent (incendie, immersion), il faut le faire avec précaution en maintenant le bloc <strong>tête-cou-tronc</strong> rigide.</li>
<li>La <strong>position latérale de sécurité (PLS)</strong> consiste à placer le blessé <strong>couché sur le côté, le genou supérieur fléchi</strong>. Elle évite la <strong>chute de la langue en arrière</strong>, l'<strong>encombrement des voies respiratoires</strong> par le sang, les vomissements et les mucosités.</li>
<li><strong>Acide de batterie dans l'œil</strong> : rincer l'œil pendant <strong>au moins 10 minutes</strong> à l'eau courante, mettre une compresse sur l'œil et évacuer vers un ophtalmologiste.</li>
<li><strong>Brûlure par le feu</strong> : empêcher la victime de <strong>courir</strong>, la <strong>couvrir</strong> et l'évacuer vers un centre médical.</li>
<li><strong>Brûlure par un liquide brûlant ou par la vapeur</strong> : <strong>déshabiller</strong> la victime, la <strong>doucher</strong> et l'évacuer vers un centre médical.</li>
</ul>

<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#EDEFF2"/><rect y="100" width="220" height="30" fill="#C9CDD4"/><circle cx="34" cy="84" r="13" fill="#8D5A3B"/><rect x="46" y="74" width="96" height="24" rx="10" fill="#0B5FA5"/><rect x="140" y="80" width="66" height="16" rx="7" fill="#16283F"/><path d="M18 62h124" stroke="#F5B301" stroke-width="5"/><path d="M18 62v10M142 62v10" stroke="#F5B301" stroke-width="5"/><text x="80" y="48" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">tête, cou, tronc alignés</text></svg><b>Déplacer en cas de danger</b><span>Le bloc tête-cou-tronc reste rigide</span></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#EDEFF2"/><ellipse cx="110" cy="84" rx="58" ry="28" fill="#fff" stroke="#5C636D" stroke-width="3"/><circle cx="110" cy="84" r="18" fill="#7A5A3A"/><circle cx="110" cy="84" r="8" fill="#171A1F"/><path d="M92 8v28" stroke="#5B8FD0" stroke-width="10" stroke-linecap="round"/><path d="M92 38q-2 8 0 16M104 38q6 8 4 16M80 38q-8 8-6 14" fill="none" stroke="#5B8FD0" stroke-width="3"/><text x="170" y="30" font-size="16" font-weight="bold" fill="#0B5FA5" text-anchor="middle">10 minutes</text></svg><b>Acide dans l'œil</b><span>Rincer 10 minutes au moins, puis ophtalmologiste</span></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#EDEFF2"/><use href="#p-person" x="84" y="26" width="42" height="96" color="#8D5A3B"/><path d="M60 36q44-22 92 0l10 80H52z" fill="#E87722"/><circle cx="105" cy="34" r="13" fill="#8D5A3B"/><use href="#o-no" x="168" y="8" width="36" height="36"/><text x="186" y="66" font-size="13" font-weight="bold" fill="#D2202F" text-anchor="middle">ne pas</text><text x="186" y="82" font-size="13" font-weight="bold" fill="#D2202F" text-anchor="middle">courir</text></svg><b>Brûlure par le feu</b><span>Empêcher de courir, couvrir, évacuer</span></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#EDEFF2"/><use href="#p-person" x="86" y="36" width="38" height="88" color="#8D5A3B"/><path d="M60 12h52v10H60z" fill="#5C636D"/><path d="M72 28l-6 20M88 28l-2 26M104 28l4 24M60 30l-14 22M116 28l14 26" stroke="#5B8FD0" stroke-width="4" stroke-linecap="round"/></svg><b>Brûlure par liquide ou vapeur</b><span>Déshabiller, doucher, évacuer</span></div>
</div>
<figcaption>Figure 9.8 — Quelques gestes techniques</figcaption>
</figure>

<h4>Les gestes selon la situation</h4>
<div class="table-scroll"><table>
<thead><tr><th>Situation</th><th>Geste à faire</th></tr></thead>
<tbody>
<tr><td><strong>Hémorragie</strong> (saignement abondant)</td><td>Comprimer directement la plaie avec la main protégée ou un tissu propre, sans relâcher, et allonger la victime</td></tr>
<tr><td><strong>Victime inconsciente qui respire</strong></td><td>Libérer les voies aériennes (desserrer col et ceinture, basculer doucement la tête en arrière), puis placer en <strong>position latérale de sécurité (PLS)</strong> et surveiller la respiration</td></tr>
<tr><td><strong>Victime inconsciente qui ne respire pas</strong></td><td>Alerter immédiatement, débuter la réanimation cardio-pulmonaire : <strong>30 compressions thoraciques puis 2 insufflations</strong>, rythme d'environ 100 à 120 compressions par minute, jusqu'à l'arrivée des secours ou d'un défibrillateur</td></tr>
<tr><td><strong>Brûlure</strong></td><td>Par le feu : empêcher de courir, couvrir. Par un liquide ou la vapeur : déshabiller, doucher (eau tempérée qui ruisselle). Ne pas percer les cloques, ne rien appliquer (ni huile, ni beurre, ni dentifrice) ; évacuer vers un centre médical</td></tr>
<tr><td><strong>Fracture suspectée</strong></td><td>Ne pas mobiliser le membre, immobiliser la victime telle qu'elle est, la couvrir, la rassurer</td></tr>
<tr><td><strong>Traumatisme du dos ou du cou</strong></td><td><strong>Ne pas déplacer</strong> la victime, sauf danger immédiat (incendie, risque d'explosion, immersion)</td></tr>
<tr><td><strong>Toutes victimes</strong></td><td>Couvrir pour lutter contre l'hypothermie, parler, rassurer, surveiller jusqu'à l'arrivée des secours</td></tr>
</tbody>
</table></div>
<AttentionBox label="Les cinq erreurs à ne jamais commettre">
<strong>1.</strong> Déplacer un blessé sans danger immédiat. <strong>2.</strong> Retirer le casque d'un motocycliste. <strong>3.</strong> Donner à boire, à manger ou un médicament. <strong>4.</strong> Retirer un corps étranger planté dans une plaie. <strong>5.</strong> Se précipiter sur la chaussée sans avoir protégé la zone.
</AttentionBox>

<QcmBlock title="QCM — Chapitre 9" :questions="questions" />
</section>
</template>
