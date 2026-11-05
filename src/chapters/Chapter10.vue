<script setup>
import MemoBox from '../components/MemoBox.vue'
import AstuceBox from '../components/AstuceBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import questions from '../data/questions/ch10.json'
</script>

<template>
<section class="chap" id="ch10">
<div class="chap-head">
  <span class="borne">10</span>
  <div><span class="fil">Chapitre 10</span><h2>Les deux-roues (permis A1 · A2 · A3)</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Distinguer les catégories A1, A2 et A3, connaître l'équipement obligatoire, comprendre les spécificités de conduite d'un deux-roues et les dangers qui lui sont propres.</p>

<h3>10.1 Les catégories de permis deux-roues</h3>
<div class="table-scroll"><table>
<thead><tr><th>Catégorie</th><th>Véhicules concernés</th><th>Âge minimal</th></tr></thead>
<tbody>
<tr><td><strong>A1</strong></td><td>Vélomoteurs ou cyclomoteurs de <strong>75 cm³ au plus</strong></td><td>16 ans</td></tr>
<tr><td><strong>A2</strong></td><td>Motocyclettes ou quadricycles de <strong>75 à 400 cm³</strong></td><td>18 ans</td></tr>
<tr><td><strong>A3</strong></td><td>Motocycles, tricycles ou quadricycles de <strong>plus de 400 cm³</strong></td><td>21 ans</td></tr>
</tbody>
</table></div>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 200 110" aria-hidden="true"><rect width="200" height="110" fill="#EDEFF2"/><rect y="92" width="200" height="18" fill="#3A3F46"/><use href="#moto-side" x="58" y="50" width="84" height="44" color="#1B7F5A"/></svg><b>A1 : 75 cm³ au plus</b><span>Vélomoteurs, cyclomoteurs. 16 ans</span></div>
 <div class="scene"><svg viewBox="0 0 200 110" aria-hidden="true"><rect width="200" height="110" fill="#EDEFF2"/><rect y="92" width="200" height="18" fill="#3A3F46"/><use href="#moto-side" x="42" y="30" width="116" height="66" color="#0B5FA5"/></svg><b>A2 : de 75 à 400 cm³</b><span>Motocyclettes, quadricycles. 18 ans</span></div>
 <div class="scene"><svg viewBox="0 0 200 110" aria-hidden="true"><rect width="200" height="110" fill="#EDEFF2"/><rect y="92" width="200" height="18" fill="#3A3F46"/><use href="#moto-side" x="20" y="6" width="160" height="90" color="#D2202F"/></svg><b>A3 : plus de 400 cm³</b><span>Motocycles, tricycles, quadricycles. 21 ans</span></div>
</div>
<figcaption>Figure 10.1 — Trois catégories selon la cylindrée</figcaption>
</figure>
<p>Source : manuel du candidat de la DGTT (édition 2011), chapitre I, et questions Q661, Q667 et Q669.</p>

<ul>
<li><strong>Cyclomoteur</strong> : deux-roues dont la cylindrée <strong>ne dépasse pas 50 cm³</strong> (Q677).</li>
<li><strong>Motocyclette</strong> : deux-roues pourvu d'un <strong>moteur thermique</strong> dont la cylindrée <strong>dépasse 50 cm³</strong> (Q676).</li>
</ul>

<h3>10.2 L'équipement du motocycliste</h3>
<ul>
<li><strong>Le casque homologué et attaché</strong> : obligatoire pour le conducteur <em>et</em> le passager. Un casque non attaché est un casque inutile : il s'envole au premier choc. C'est le seul équipement qui protège la tête, siège des lésions mortelles.</li>
<li><strong>Gants</strong> : protègent les mains, réflexe naturel lors d'une chute.</li>
<li><strong>Blouson résistant, pantalon long, chaussures montantes</strong> : la peau ne résiste pas à un glissement sur le bitume.</li>
<li><strong>Vêtements clairs ou rétroréfléchissants, gilet la nuit</strong> : le deux-roues est un véhicule <em>étroit</em>, donc difficile à repérer et à évaluer en distance.</li>
<li><strong>Feu de croisement allumé de jour</strong> : rend la moto beaucoup plus visible.</li>
</ul>
<figure>
<svg class="fig-large" style="max-width:460px" viewBox="0 0 460 340" role="img" aria-label="Motocycliste bien équipé : casque attaché, gilet rétroréfléchissant, blouson, gants, pantalon long, chaussures montantes">
 <rect width="460" height="340" fill="#EDEFF2"/>
 <circle cx="230" cy="44" r="28" fill="#D2202F"/><path d="M204 44h52v14q-26 8-52 0z" fill="#171A1F"/><path d="M214 66q16 8 32 0" fill="none" stroke="#F5D000" stroke-width="4"/>
 <path d="M196 80h68q12 0 14 12l6 84h-108l6-84q2-12 14-12z" fill="#1F3A5F"/>
 <path d="M202 80h56l4 96h-64z" fill="#F5D000" opacity=".85"/><path d="M200 118h60M198 146h64" stroke="#C9CDD4" stroke-width="7"/><path d="M230 80v96" stroke="#E87722" stroke-width="2"/>
 <path d="M194 90l-26 86M266 90l26 86" stroke="#1F3A5F" stroke-width="17" stroke-linecap="round"/>
 <circle cx="166" cy="184" r="11" fill="#171A1F"/><circle cx="294" cy="184" r="11" fill="#171A1F"/>
 <path d="M178 176h104l-8 112h-34l-10-82-10 82h-34z" fill="#3A3F46"/>
 <path d="M186 288h34v28h-40q-6 0-4-8zM240 288h34l10 20q2 8-4 8h-40z" fill="#171A1F"/>
 <g font-size="16" fill="#171A1F" font-weight="bold"><text x="300" y="36">Casque homologué</text><text x="300" y="54" font-weight="normal">et bien attaché</text><text x="312" y="126">Gilet, vêtements clairs</text><text x="312" y="144" font-weight="normal">pour être vu</text><text x="10" y="112">Blouson résistant</text><text x="10" y="188">Gants</text><text x="10" y="252">Pantalon long</text><text x="10" y="310">Chaussures montantes</text></g>
 <path d="M296 40h-38M308 122l-50 6M142 108l52 6M58 184h96M120 248h64M178 304l6-4" stroke="#171A1F" stroke-width="1.5"/>
</svg>
<figcaption>Figure 10.2 — L'équipement du motocycliste</figcaption>
</figure>
<MemoBox label="La physique du casque">
À 50 km/h, une chute sans casque équivaut à un plongeon tête la première depuis un <strong>troisième étage</strong>. Le casque n'empêche pas la chute : il divise l'énergie transmise au crâne.
</MemoBox>

<p><strong>Le casque</strong> est obligatoire pour <strong>tous les occupants</strong>, même si l'on roule seul (Q665) ; il protège contre le <strong>traumatisme crânien</strong> (Q666). Il existe deux types de casques : le <strong>casque intégral</strong> et le <strong>casque enveloppant</strong> (Q659).</p>
<h4>L'équipement obligatoire de la motocyclette</h4>
<p>Le <strong>clignotant</strong>, le <strong>feu stop</strong>, l'<strong>avertisseur</strong>, le <strong>rétroviseur gauche</strong> et le <strong>frein avant</strong> sont obligatoires sur les motocyclettes (Q650, Q662, Q663, Q678).</p>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 300 170" aria-hidden="true"><rect width="300" height="170" fill="#EDEFF2"/><path d="M70 150V84q0-64 70-64 62 0 70 62l6 46q2 22-20 22z" fill="#0B5FA5"/><path d="M134 62h78l6 36h-84q-8-18 0-36z" fill="#171A1F"/><path d="M70 136h138q4 8 0 14H70z" fill="#07406F"/></svg><b>Casque intégral</b><span>Il protège aussi le menton</span></div>
 <div class="scene"><svg viewBox="0 0 300 170" aria-hidden="true"><rect width="300" height="170" fill="#EDEFF2"/><path d="M70 150V84q0-64 70-64 62 0 70 62v14h-78v54z" fill="#D2202F"/><path d="M132 96h72q-2 44-34 44-38 0-38-44z" fill="#8D5A3B"/><path d="M134 62h76v18h-76z" fill="#171A1F" opacity=".3"/><path d="M132 136q22 16 38 4" fill="none" stroke="#171A1F" stroke-width="5"/></svg><b>Casque enveloppant</b><span>Le visage reste découvert. Dans les deux cas : attaché</span></div>
</div>
<figcaption>Figure 10.3 — Les deux types de casques</figcaption>
</figure>
<figure>
<svg class="fig-large" viewBox="0 0 560 260" role="img" aria-label="Motocyclette : rétroviseur gauche, avertisseur, frein avant, clignotants, feu stop">
 <rect width="560" height="260" fill="#EDEFF2"/><rect y="226" width="560" height="34" fill="#3A3F46"/>
 <use href="#moto-side" x="110" y="66" width="330" height="198" color="#0B5FA5"/>
 <circle cx="134" cy="108" r="8" fill="#D2202F"/><rect x="116" y="122" width="22" height="9" rx="2" fill="#E87722"/><rect x="348" y="96" width="22" height="9" rx="2" fill="#E87722"/>
 <path d="M322 94 340 60" stroke="#171A1F" stroke-width="3"/><ellipse cx="344" cy="54" rx="11" ry="8" fill="#DCEBF7" stroke="#171A1F" stroke-width="2"/>
 <circle cx="382" cy="194" r="20" fill="none" stroke="#D2202F" stroke-width="5"/>
 <path d="M372 122q12 0 16 8" stroke="#F5B301" stroke-width="5" fill="none"/>
 <g font-size="16" font-weight="bold" fill="#171A1F"><text x="8" y="94">Feu stop</text><text x="8" y="142">Clignotant</text><text x="366" y="36">Rétroviseur gauche</text><text x="440" y="86">Clignotant</text><text x="440" y="140">Avertisseur</text><text x="440" y="192">Frein avant</text></g>
 <path d="M76 90l50 16M84 136l30-8M348 42l-2 6M436 82l-66 16M436 136l-46-6M436 188l-34 4" stroke="#171A1F" stroke-width="1.5"/>
</svg>
<figcaption>Figure 10.4 — L'équipement obligatoire de la motocyclette</figcaption>
</figure>

<h3>10.3 Ce qui change quand on conduit à deux roues</h3>
<div class="table-scroll"><table>
<thead><tr><th>Spécificité</th><th>Conséquence pratique</th></tr></thead>
<tbody>
<tr><td><strong>Équilibre</strong> : le deux-roues tient debout grâce à sa vitesse et à l'effet gyroscopique</td><td>À très basse vitesse, l'équilibre devient précaire : regarder loin, jamais la roue avant</td></tr>
<tr><td><strong>Deux freins distincts</strong> (avant et arrière)</td><td>Freinage combiné : l'avant fournit environ 70 % de l'efficacité, mais bloquer la roue avant fait chuter. On freine progressivement, roue droite</td></tr>
<tr><td><strong>Adhérence limitée à deux petites empreintes</strong></td><td>Gravillons, sable, plaques d'égout, marquages mouillés, gasoil répandu : autant de pièges. Éviter de freiner ou de braquer dessus</td></tr>
<tr><td><strong>Absence de carrosserie</strong></td><td>Aucune protection en cas de choc : la seule stratégie est l'anticipation</td></tr>
<tr><td><strong>Faible visibilité par les autres</strong></td><td>Rester hors des angles morts, ne pas se coller derrière un camion, se placer là où l'on est vu dans le rétroviseur du véhicule qui précède</td></tr>
<tr><td><strong>Prise au vent</strong></td><td>Au dépassement d'un poids lourd ou à la sortie d'un pont : anticiper la rafale, serrer les genoux, garder les bras souples</td></tr>
<tr><td><strong>Transport d'un passager</strong></td><td><strong>Un seul passager</strong> (Q664), assis sur le <strong>siège arrière</strong>, qui doit <strong>faire corps</strong> avec la moto et son conducteur (Q646). Casque obligatoire, repose-pieds, freinage plus long. Un enfant de <strong>moins de 5 ans</strong> doit avoir un <strong>siège muni d'une courroie d'attache</strong> (Q668)</td></tr>
<tr><td><strong>Bonne position de conduite</strong></td><td>Bien assis sur la selle, <strong>bras légèrement fléchis</strong>, <strong>genoux contre le réservoir</strong> (Q660). Avec une nouvelle moto : s'habituer progressivement et augmenter la distance de sécurité (Q657)</td></tr>
</tbody>
</table></div>

<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect y="118" width="240" height="32" fill="#3A3F46"/><use href="#moto-side" x="44" y="30" width="152" height="92" color="#0B5FA5"/><rect x="148" y="8" width="54" height="22" fill="#D2202F"/><text x="175" y="25" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">70 %</text><rect x="38" y="8" width="54" height="22" fill="#F5B301"/><text x="65" y="25" font-size="16" font-weight="bold" fill="#171A1F" text-anchor="middle">30 %</text><path d="M172 34v48M68 34v48" stroke="#171A1F" stroke-width="2" stroke-dasharray="4 4"/></svg><b>Deux freins</b><span>L'avant fournit environ 70 % de l'efficacité : je freine progressivement, roue droite</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#3A3F46"/><use href="#moto-e" x="12" y="62" width="62" height="24" color="#0B5FA5"/><g fill="#C9CDD4"><circle cx="110" cy="40" r="3"/><circle cx="122" cy="52" r="3"/><circle cx="102" cy="58" r="3"/><circle cx="130" cy="36" r="3"/><circle cx="116" cy="30" r="3"/></g><circle cx="176" cy="46" r="20" fill="#5C636D" stroke="#171A1F" stroke-width="3"/><path d="M162 46h28M176 32v28" stroke="#171A1F" stroke-width="2"/><path d="M92 112q24-12 54-4t52-4q10 8 2 18-40 12-72 6-30-2-36-16z" fill="#171A1F" opacity=".65"/><text x="116" y="22" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">gravillons</text><text x="176" y="84" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">plaque d'égout</text><text x="152" y="118" font-size="13" font-weight="bold" fill="#fff" text-anchor="middle">gasoil</text></svg><b>Pièges du sol</b><span>Je ne freine pas et je ne braque pas dessus</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#3A3F46"/><path d="M0 75h240" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/><path d="M62 80 8 60v86h54z" fill="#D2202F" opacity=".5"/><use href="#truck-e" x="62" y="86" width="150" height="40" color="#5C636D"/><use href="#moto-e" x="14" y="96" width="44" height="18" color="#0B5FA5"/><text x="120" y="40" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">zone invisible pour le camion</text></svg><b>Faible visibilité</b><span>Je reste hors des angles morts, jamais collé à un camion</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect y="124" width="240" height="26" fill="#3A3F46"/><use href="#moto-side" x="44" y="60" width="152" height="68" color="#0B5FA5"/><path d="M116 60l10-34" stroke="#1F3A5F" stroke-width="20" stroke-linecap="round"/><circle cx="132" cy="14" r="11" fill="#D2202F"/><path d="M128 36l34 18" stroke="#1F3A5F" stroke-width="7" stroke-linecap="round"/><path d="M122 66l24 14-6 18" fill="none" stroke="#16283F" stroke-width="10" stroke-linecap="round"/><text x="50" y="30" font-size="14" font-weight="bold" fill="#171A1F" text-anchor="middle">bras fléchis</text><text x="50" y="96" font-size="14" font-weight="bold" fill="#171A1F" text-anchor="middle">genoux</text><text x="50" y="112" font-size="14" font-weight="bold" fill="#171A1F" text-anchor="middle">au réservoir</text></svg><b>Position de conduite</b><span>Bien assis, bras légèrement fléchis, genoux contre le réservoir</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect y="124" width="240" height="26" fill="#3A3F46"/><use href="#moto-side" x="44" y="60" width="152" height="68" color="#0B5FA5"/><path d="M124 60l6-34" stroke="#1F3A5F" stroke-width="18" stroke-linecap="round"/><circle cx="134" cy="14" r="11" fill="#D2202F"/><path d="M92 60l4-30" stroke="#E87722" stroke-width="18" stroke-linecap="round"/><circle cx="98" cy="14" r="11" fill="#171A1F"/><path d="M100 36l24 8" stroke="#E87722" stroke-width="7" stroke-linecap="round"/></svg><b>Un seul passager</b><span>Casqué, assis derrière, il fait corps avec la moto</span></div>
</div>
<figcaption>Figure 10.5 — Ce qui change sur deux roues</figcaption>
</figure>

<h3>10.4 Les contrôles avant de partir</h3>
<ol>
<li>Position des <strong>béquilles</strong>, bon <strong>ajustement du casque</strong> (conducteur et passager), réglage des <strong>rétroviseurs</strong> (Q658).</li>
<li>Pneus : pression, usure, absence de corps étranger.</li>
<li>Freins : garde des leviers, niveau de liquide, plaquettes.</li>
<li>Éclairage et clignotants, rétroviseurs propres et réglés.</li>
<li>Chaîne : tension et graissage.</li>
<li>Niveaux : <strong>huile moteur</strong>, <strong>eau du radiateur</strong>, <strong>essence</strong> ; on les contrôle la moto posée sur la <strong>béquille centrale</strong> (Q654, Q655).</li>
<li>Équipement : casque attaché, gants, vêtements adaptés.</li>
</ol>
<figure>
<svg class="fig-large" viewBox="0 0 560 240" role="img" aria-label="Moto sur sa béquille centrale avec les points à contrôler : huile, eau, essence, pneus, freins, feux, chaîne">
 <rect width="560" height="240" fill="#EDEFF2"/><rect y="208" width="560" height="32" fill="#3A3F46"/>
 <use href="#moto-side" x="140" y="44" width="280" height="168" color="#0B5FA5"/>
 <path d="M268 164l-16 44M292 164l16 44M246 208h68" stroke="#F5B301" stroke-width="7" fill="none"/>
 <g font-size="15" font-weight="bold" fill="#171A1F"><text x="8" y="56">Feu et clignotants</text><text x="8" y="112">Pneu arrière</text><text x="8" y="168">Chaîne</text><text x="420" y="40">Rétroviseurs</text><text x="430" y="86">Freins, leviers</text><text x="430" y="136">Pneu avant</text><text x="316" y="24">Huile, eau</text><text x="210" y="28">Essence</text><text x="316" y="232" fill="#fff">Béquille centrale</text></g>
 <path d="M138 60l50 38M100 110l62 26M60 164l162-20M416 36 298 68M426 82l-94 6M426 132l-22 14M262 32l28 52M340 30 306 116" stroke="#171A1F" stroke-width="1.5"/>
</svg>
<figcaption>Figure 10.6 — Le tour de la moto avant de partir</figcaption>
</figure>
<AstuceBox label="La règle des trois regards en ville">
Devant (trajectoire), autour (portières, piétons, véhicules qui débouchent), derrière (rétroviseurs). En ville, le danger n°1 du deux-roues est le véhicule qui tourne à gauche devant lui ou la portière qui s'ouvre.
</AstuceBox>

<h3>10.5 Interdictions et règles spécifiques</h3>
<ul>
<li>Les cyclomoteurs (moins de 50 cm³) sont <strong>interdits sur autoroute</strong> et sur les routes pour automobiles.</li>
<li>Dans une circulation en <strong>files ininterrompues</strong>, je reste dans ma file, sauf pour préparer un changement de direction (Q648) : la remontée de files est très dangereuse.</li>
<li>La circulation <strong>à deux de front</strong> n'est pas autorisée (Q674).</li>
<li>En longeant des véhicules en stationnement, attention aux <strong>piétons</strong> qui surgissent, aux <strong>portières</strong> qui s'ouvrent et aux véhicules qui démarrent (Q656).</li>
<li>Une <strong>voie ferrée</strong> ne se traverse qu'après le <strong>relèvement de la barrière</strong> (Q649).</li>
<li><strong>En panne</strong>, on peut pousser sa moto sur le trottoir, <strong>moteur arrêté</strong> (Q647).</li>
<li>Le panneau <strong>B14</strong> avec panonceau « motos » (B14-3) ne concerne que les motocyclistes (Q59, Q672).</li>
<li>Le transport de plus d'un passager, le transport d'un enfant sans dispositif adapté et le transport de charges instables sont interdits.</li>
<li>Circuler sur le trottoir, entre deux files à vive allure ou sans casque expose à des sanctions lourdes et à l'immobilisation du véhicule.</li>
</ul>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-route" width="240" height="150"/><use href="#moto-e" x="90" y="78" width="56" height="20" color="#D2202F"/><use href="#moto-e" x="90" y="52" width="56" height="20" color="#0B5FA5" transform="translate(0 2)"/><use href="#o-no" x="4" y="4" width="30" height="30"/></svg><b>À deux de front</b><span>Non autorisé</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-rue" width="240" height="150"/><use href="#car-e" x="126" y="88" width="56" height="28" color="#5C636D"/><path d="M162 88l-16-20" stroke="#5C636D" stroke-width="6" stroke-linecap="round"/><use href="#moto-e" x="46" y="60" width="56" height="20" color="#0B5FA5"/><use href="#p-person" x="196" y="52" width="18" height="42" color="#F5B301"/><path d="M104 70h22" stroke="#fff" stroke-width="3" marker-end="url(#m-w)"/></svg><b>Le long des voitures garées</b><span>Portières, piétons qui surgissent, véhicules qui démarrent</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#3A3F46"/><path d="M0 30h240M0 120h240" stroke="#fff" stroke-width="2"/><path d="M0 75h240" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/><g color="#5C636D"><use href="#car-e" x="4" y="38" width="52" height="26"/><use href="#car-e" x="64" y="38" width="52" height="26"/><use href="#car-e" x="124" y="38" width="52" height="26"/><use href="#car-e" x="184" y="38" width="52" height="26"/><use href="#car-e" x="4" y="86" width="52" height="26"/><use href="#car-e" x="64" y="86" width="52" height="26"/><use href="#car-e" x="124" y="86" width="52" height="26"/><use href="#car-e" x="184" y="86" width="52" height="26"/></g><use href="#moto-e" x="62" y="66" width="50" height="18" color="#D2202F"/><path d="M116 75h44" stroke="#D2202F" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#m-r)"/><use href="#o-no" x="4" y="2" width="28" height="28"/></svg><b>Remonter les files</b><span>Je reste dans ma file, c'est très dangereux</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#3A3F46"/><rect y="104" width="240" height="46" fill="#C9CDD4"/><use href="#moto-side" x="96" y="58" width="104" height="60" color="#5C636D"/><use href="#p-person" x="56" y="42" width="30" height="72" color="#0B5FA5"/><path d="M84 66h34" stroke="#0B5FA5" stroke-width="6" stroke-linecap="round"/><text x="120" y="30" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">moteur arrêté</text></svg><b>En panne</b><span>Je peux pousser ma moto sur le trottoir, moteur arrêté</span></div>
</div>
<figcaption>Figure 10.7 — Règles propres aux deux-roues</figcaption>
</figure>

<QcmBlock title="QCM — Chapitre 10" :questions="questions" />
</section>
</template>
