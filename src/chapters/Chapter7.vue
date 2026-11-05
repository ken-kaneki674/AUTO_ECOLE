<script setup>
import MemoBox from '../components/MemoBox.vue'
import AttentionBox from '../components/AttentionBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import questions from '../data/questions/ch7.json'
</script>

<template>
<section class="chap" id="ch7">
<div class="chap-head">
  <span class="borne">07</span>
  <div><span class="fil">Chapitre 7</span><h2>L'équipement d'une voiture</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Connaître les organes de sécurité active et passive, savoir quel feu allumer et quand, contrôler pneus et freins, et savoir ce qui doit obligatoirement se trouver à bord.</p>

<h3>7.1 Sécurité active et sécurité passive</h3>
<div class="table-scroll"><table>
<thead><tr><th>Sécurité ACTIVE — éviter l'accident</th><th>Sécurité PASSIVE — en limiter les conséquences</th></tr></thead>
<tbody>
<tr><td>Freins et ABS, direction, suspension, pneumatiques, éclairage et signalisation, essuie-glaces, ESP/antipatinage, klaxon, rétroviseurs</td><td>Ceintures de sécurité et prétensionneurs, airbags, appuie-têtes, structure à déformation programmée, sièges enfants, vitrage feuilleté</td></tr>
</tbody>
</table></div>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 280 150" aria-hidden="true"><rect width="280" height="150" fill="#E9F5EF"/><rect y="116" width="280" height="34" fill="#3A3F46"/><use href="#car-side" x="20" y="72" width="110" height="48" color="#0B5FA5"/><use href="#p-person" x="222" y="62" width="24" height="56" color="#D2202F"/><path d="M134 102h76" stroke="#1B7F5A" stroke-width="3" stroke-dasharray="6 5"/><use href="#o-ok" x="156" y="60" width="32" height="32"/><text x="140" y="30" font-size="16" font-weight="bold" fill="#1B7F5A" text-anchor="middle">freins, pneus, direction, feux</text></svg><b>Sécurité active</b><span>Elle permet d'éviter l'accident</span></div>
 <div class="scene"><svg viewBox="0 0 280 150" aria-hidden="true"><rect width="280" height="150" fill="#FFF4D6"/><path d="M92 136V70q0-6 6-6h6q6 0 6 6v44h52q6 0 6 6v16z" fill="#5C636D"/><rect x="90" y="36" width="18" height="24" rx="6" fill="#5C636D"/><circle cx="124" cy="38" r="13" fill="#8D5A3B"/><path d="M114 56h18q6 0 8 6l6 40h34l4 16h-54q-6 0-8-6l-14-46q-2-10 6-10z" fill="#0B5FA5"/><path d="M112 54 158 112" stroke="#171A1F" stroke-width="6"/><circle cx="190" cy="46" r="26" fill="#fff" stroke="#C9CDD4" stroke-width="3"/><path d="M216 50q14 2 22 14" fill="none" stroke="#5C636D" stroke-width="10" stroke-linecap="round"/><text x="60" y="26" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">appuie-tête</text><text x="230" y="24" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">airbag</text><text x="214" y="128" font-size="15" font-weight="bold" fill="#171A1F">ceinture</text></svg><b>Sécurité passive</b><span>Elle limite les blessures si l'accident arrive</span></div>
</div>
<figcaption>Figure 7.1 — Éviter l'accident, ou en limiter les conséquences</figcaption>
</figure>

<h3>7.2 L'équipement obligatoire</h3>
<p>Tout véhicule automobile léger doit être équipé de :</p>
<ul>
<li><strong>cinq (05) roues</strong> : quatre (04) sous le véhicule et une <strong>roue de secours</strong> ;</li>
<li><strong>deux (02) rétroviseurs</strong> obligatoires : un à l'<strong>intérieur</strong> du véhicule et un à l'<strong>extérieur gauche</strong> ;</li>
<li><strong>quatre (04) feux obligatoires à l'avant</strong> et <strong>cinq (05) feux obligatoires à l'arrière</strong>, plus des feux facultatifs.</li>
</ul>
<figure>
<svg class="fig-large" viewBox="0 0 460 300" role="img" aria-label="Voiture vue du dessus : quatre roues, une roue de secours, un rétroviseur intérieur et un rétroviseur extérieur gauche">
 <rect width="460" height="300" fill="#EDEFF2"/>
 <g fill="#171A1F"><rect x="128" y="62" width="16" height="44" rx="4"/><rect x="256" y="62" width="16" height="44" rx="4"/><rect x="128" y="196" width="16" height="44" rx="4"/><rect x="256" y="196" width="16" height="44" rx="4"/></g>
 <use href="#car-n" x="136" y="14" width="128" height="272" color="#0B5FA5"/>
 <circle cx="392" cy="150" r="40" fill="#171A1F"/><circle cx="392" cy="150" r="18" fill="#C9CDD4"/>
 <rect x="184" y="118" width="32" height="9" rx="3" fill="#171A1F"/>
 <circle cx="136" cy="118" r="8" fill="none" stroke="#F5B301" stroke-width="3"/>
 <g font-size="15" fill="#171A1F" font-weight="bold"><text x="392" y="210" text-anchor="middle">5e roue :</text><text x="392" y="228" text-anchor="middle">roue de secours</text><text x="10" y="58">4 roues</text><text x="8" y="114">rétroviseur</text><text x="8" y="132">extérieur gauche</text></g>
 <path d="M64 54h62" stroke="#171A1F" stroke-width="1.5"/>
 <text x="284" y="62" font-size="15" font-weight="bold" fill="#171A1F">rétroviseur intérieur</text><path d="M282 66l-68 52" stroke="#F5B301" stroke-width="2"/>
</svg>
<figcaption>Figure 7.2 — Cinq roues, deux rétroviseurs obligatoires</figcaption>
</figure>

<h3>7.3 L'éclairage et la signalisation</h3>
<figure>
<svg class="fig-large" viewBox="0 0 600 230" role="img" aria-label="De nuit, les feux de route éclairent à 100 mètres au moins, les feux de croisement à 30 mètres au moins ; les feux de position se voient à 150 mètres">
 <rect width="600" height="230" fill="#10141F"/><rect y="190" width="600" height="40" fill="#23272D"/>
 <use href="#car-side" x="6" y="38" width="96" height="42" color="#0B5FA5"/><path d="M100 62 510 26v50z" fill="#FFF3B0" opacity=".35"/>
 <use href="#car-side" x="6" y="148" width="96" height="42" color="#0B5FA5"/><path d="M100 172 240 150v40z" fill="#FFF3B0" opacity=".45"/>
 <g font-size="17" font-weight="bold" fill="#fff"><text x="250" y="60">Feux de route : 100 m au moins</text><text x="250" y="172">Feux de croisement : 30 m au moins</text></g>
 <text x="110" y="110" font-size="15" fill="#FFF3B0">À couper dès que je croise ou que je suis un usager</text>
 <text x="250" y="210" font-size="15" fill="#FFF3B0">Ils éclairent sans éblouir</text>
</svg>
<figcaption>Figure 7.3 — La portée des feux</figcaption>
</figure>
<h4>À l'avant — obligatoires</h4>
<div class="table-scroll"><table>
<thead><tr><th>Feu</th><th>Nombre, couleur, portée</th><th>Quand l'utiliser</th></tr></thead>
<tbody>
<tr><td><strong>Feux de route</strong> (phares)</td><td>2, lumière jaune (ou blanche), éclairent à <strong>100 m au moins</strong></td><td>La nuit, hors agglomération, quand on circule <strong>seul</strong> sur la route. À couper dès qu'on croise ou qu'on suit un usager</td></tr>
<tr><td><strong>Feux de croisement</strong> (codes)</td><td>2, lumière jaune ou blanche, éclairent à <strong>30 m au moins</strong> sans éblouir</td><td>La nuit pour <strong>croiser</strong> ou <strong>suivre</strong> un autre usager à faible distance ; même le jour pour se rendre visible par mauvais temps (pluie, brouillard, neige)</td></tr>
<tr><td><strong>Feux de position</strong> (veilleuses)</td><td>2, jaunes ou blancs, visibles à <strong>150 m</strong></td><td>Pour <strong>stationner</strong> sur une chaussée non éclairée ; pour circuler en <strong>agglomération bien éclairée</strong></td></tr>
<tr><td><strong>Clignotants</strong> (indicateurs de changement de direction)</td><td>2, <strong>orange</strong>, non éblouissants</td><td>Pour annoncer tout changement de direction et toute manœuvre</td></tr>
</tbody>
</table></div>
<h4>À l'avant — facultatifs</h4>
<p><strong>Feux de brouillard</strong> : 2, jaunes ou blancs. Ils <strong>complètent ou remplacent les feux de croisement</strong> par temps de brouillard, de forte pluie ou de neige, et peuvent compléter les feux de route hors agglomération ; on les <strong>éteint quand on s'apprête à croiser</strong> un usager.</p>
<figure>
<svg class="fig-large" viewBox="0 0 520 240" role="img" aria-label="Avant de la voiture : feux de route, de croisement, de position, clignotants, feux de brouillard">
 <rect width="520" height="240" fill="#EDEFF2"/>
 <path d="M150 170V116q0-14 14-20l26-44q6-10 18-10h104q12 0 18 10l26 44q14 6 14 20v54z" fill="#0B5FA5"/>
 <path d="M196 94l18-36q2-4 6-4h80q4 0 6 4l18 36z" fill="#DCEBF7"/>
 <rect x="150" y="170" width="220" height="20" rx="6" fill="#171A1F"/><rect x="156" y="190" width="34" height="18" rx="3" fill="#171A1F"/><rect x="330" y="190" width="34" height="18" rx="3" fill="#171A1F"/>
 <rect x="224" y="124" width="72" height="24" rx="3" fill="#171A1F"/>
 <circle cx="186" cy="130" r="17" fill="#FFF3B0" stroke="#171A1F" stroke-width="3"/><circle cx="334" cy="130" r="17" fill="#FFF3B0" stroke="#171A1F" stroke-width="3"/>
 <circle cx="186" cy="130" r="5" fill="#fff"/><circle cx="334" cy="130" r="5" fill="#fff"/>
 <rect x="156" y="146" width="20" height="10" rx="3" fill="#E87722"/><rect x="344" y="146" width="20" height="10" rx="3" fill="#E87722"/>
 <circle cx="184" cy="180" r="7" fill="#FFF3B0"/><circle cx="336" cy="180" r="7" fill="#FFF3B0"/>
 <g font-size="15" fill="#171A1F"><text x="8" y="94" font-weight="bold">Feux de route</text><text x="8" y="112" font-weight="bold">et de croisement</text><text x="8" y="154" font-weight="bold">Clignotant (orange)</text><text x="8" y="206" font-weight="bold">Feu de brouillard</text><text x="8" y="224">facultatif</text><text x="396" y="94" font-weight="bold">Feu de position</text><text x="396" y="112">(veilleuse) visible</text><text x="396" y="130">à 150 m</text></g>
 <path d="M120 104h48M132 150h24M112 202l66-18M392 92 340 126" stroke="#171A1F" stroke-width="1.5"/>
</svg>
<figcaption>Figure 7.4 — Les feux à l'avant</figcaption>
</figure>
<h4>À l'arrière — obligatoires</h4>
<div class="table-scroll"><table>
<thead><tr><th>Feu</th><th>Nombre, couleur, portée</th><th>Quand il s'allume</th></tr></thead>
<tbody>
<tr><td><strong>Feux rouges</strong> (veilleuses arrière)</td><td>Rouges, visibles à <strong>150 m</strong></td><td>Pour circuler ou stationner sur la chaussée la nuit ou par mauvaise visibilité ; ils s'allument en même temps que les feux de position, de croisement ou de route</td></tr>
<tr><td><strong>Clignotants</strong></td><td>2, orangés, non éblouissants</td><td>En même temps que ceux de l'avant</td></tr>
<tr><td><strong>Feux stop</strong> (signaux de freinage)</td><td>Rouges, plus puissants que les feux rouges sans être éblouissants</td><td>Dès qu'on touche la pédale de frein, pour avertir l'usager qui suit de tout ralentissement</td></tr>
<tr><td><strong>Catadioptres</strong> (cataphotes, dispositifs réfléchissants)</td><td>2, rouges, visibles à <strong>100 m</strong> quand ils sont éclairés par les feux de route d'un autre usager</td><td>Toujours (ils renvoient la lumière)</td></tr>
<tr><td><strong>Éclairage de la plaque d'immatriculation</strong></td><td>Rend le numéro <strong>lisible à 20 m au moins</strong> la nuit (Q822)</td><td>En même temps que les feux rouges</td></tr>
</tbody>
</table></div>
<h4>À l'arrière — facultatifs</h4>
<ul>
<li><strong>Feux de recul</strong> : un ou deux, de couleur <strong>blanche</strong> rabattue vers le sol ; ils s'allument automatiquement quand on passe la marche arrière.</li>
<li><strong>Feu de brouillard arrière</strong> : très puissant ; par brouillard ou chute de neige, jamais sous une simple pluie (il éblouit le conducteur qui suit).</li>
</ul>
<p><strong>NB — Les feux de détresse</strong> (obligatoires à l'avant et à l'arrière) : c'est le <strong>fonctionnement simultané des clignotants gauches et droits</strong>. Ils signalent un véhicule en panne sur la chaussée, immobilisé ou roulant à une allure anormalement réduite.</p>
<figure>
<svg class="fig-large" viewBox="0 0 520 240" role="img" aria-label="Arrière de la voiture : feux rouges, feux stop, clignotants, catadioptres, éclairage de plaque, feux de recul">
 <rect width="520" height="240" fill="#EDEFF2"/>
 <path d="M150 170V116q0-14 14-20l26-44q6-10 18-10h104q12 0 18 10l26 44q14 6 14 20v54z" fill="#5C636D"/>
 <path d="M196 94l18-36q2-4 6-4h80q4 0 6 4l18 36z" fill="#DCEBF7"/>
 <rect x="150" y="170" width="220" height="20" rx="6" fill="#171A1F"/><rect x="156" y="190" width="34" height="18" rx="3" fill="#171A1F"/><rect x="330" y="190" width="34" height="18" rx="3" fill="#171A1F"/>
 <rect x="154" y="112" width="48" height="30" rx="4" fill="#D2202F"/><rect x="318" y="112" width="48" height="30" rx="4" fill="#D2202F"/>
 <rect x="154" y="100" width="48" height="12" rx="3" fill="#E87722"/><rect x="318" y="100" width="48" height="12" rx="3" fill="#E87722"/>
 <rect x="154" y="142" width="24" height="12" rx="3" fill="#fff"/><rect x="342" y="142" width="24" height="12" rx="3" fill="#fff"/>
 <circle cx="164" cy="178" r="6" fill="#A5121F"/><circle cx="356" cy="178" r="6" fill="#A5121F"/>
 <rect x="218" y="126" width="84" height="30" rx="2" fill="#fff" stroke="#171A1F" stroke-width="2"/><text x="260" y="147" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">AB 1234</text><circle cx="260" cy="118" r="3.5" fill="#FFF3B0" stroke="#171A1F"/>
 <g font-size="15" fill="#171A1F"><text x="8" y="90" font-weight="bold">Clignotant (orange)</text><text x="8" y="126" font-weight="bold">Feu rouge et feu stop</text><text x="8" y="160" font-weight="bold">Feu de recul (blanc)</text><text x="8" y="196" font-weight="bold">Catadioptre (rouge)</text><text x="400" y="118" font-weight="bold">Plaque lisible</text><text x="400" y="136">à 20 m au moins</text></g>
 <path d="M140 92l18 12M150 124h8M144 156l14-6M140 192l18-10M396 124l-96 12" stroke="#171A1F" stroke-width="1.5"/>
</svg>
<figcaption>Figure 7.5 — Les feux à l'arrière</figcaption>
</figure>
<MemoBox label="À retenir">
Les feux servent à <strong>voir</strong> et à <strong>être vu</strong>. Sous la pluie, on allume les <strong>feux de croisement</strong>, jamais le feu de brouillard arrière, qui éblouit le conducteur suivant.
</MemoBox>

<h3>7.4 Les pneumatiques</h3>
<ul>
<li>Seuls points de contact avec la route : <strong>quatre surfaces de la taille d'une carte postale</strong> chacune.</li>
<li><strong>Profondeur minimale des rainures principales : 1,6 mm</strong> (<strong>1 mm</strong> pour un poids lourd), selon le manuel de la DGTT (Q871, Q786). Des témoins d'usure moulés dans les rainures l'indiquent.</li>
<li><strong>Pression</strong> à contrôler à froid, au moins une fois par mois. Sous-gonflé : usure des épaules, échauffement, surconsommation, risque d'éclatement. Sur-gonflé : usure centrale, tenue de route dégradée.</li>
<li>Surveiller les <strong>hernies, coupures, corps étrangers</strong> et l'usure irrégulière (signe de mauvais parallélisme).</li>
</ul>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#E9F5EF"/><rect y="104" width="220" height="26" fill="#3A3F46"/><path d="M40 104V50q0-22 22-22h96q22 0 22 22v54z" fill="#171A1F"/><path d="M40 104h140" stroke="#1B7F5A" stroke-width="5"/><text x="110" y="76" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">bonne pression</text></svg><b>Bien gonflé</b><span>Toute la bande de roulement porte</span></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#FFF4D6"/><rect y="104" width="220" height="26" fill="#3A3F46"/><path d="M34 104q-12-34 8-58 8-18 22-18h92q14 0 22 18 20 24 8 58z" fill="#171A1F"/><path d="M36 104h28M156 104h28" stroke="#D2202F" stroke-width="6"/><text x="110" y="76" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">sous-gonflé</text></svg><b>Sous-gonflé</b><span>Usure des épaules, échauffement, risque d'éclatement</span></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#FFF4D6"/><rect y="104" width="220" height="26" fill="#3A3F46"/><path d="M84 104q-44-6-44-36V50q0-22 22-22h96q22 0 22 22v18q0 30-44 36z" fill="#171A1F"/><path d="M84 104h52" stroke="#D2202F" stroke-width="6"/><text x="110" y="70" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">sur-gonflé</text></svg><b>Sur-gonflé</b><span>Usure au centre, tenue de route dégradée</span></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#EDEFF2"/><path d="M10 30h200v60H10z" fill="#171A1F"/><path d="M60 30h20v34H60zM140 30h20v34h-20z" fill="#EDEFF2"/><rect x="60" y="56" width="20" height="8" fill="#F5B301"/><path d="M92 30v34M86 30h12M86 64h12" stroke="#D2202F" stroke-width="2.5"/><text x="110" y="118" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">rainure : 1,6 mm au moins</text><text x="110" y="20" font-size="14" fill="#171A1F" text-anchor="middle">témoin d'usure en jaune</text></svg><b>Profondeur des rainures</b><span>1,6 mm minimum (1 mm pour un poids lourd)</span></div>
</div>
<figcaption>Figure 7.6 — Lire l'état d'un pneu</figcaption>
</figure>
<AttentionBox label="En cas d'éclatement">
Tenir fermement le volant, <strong>ne pas freiner brutalement</strong>, lever le pied progressivement, se déporter doucement vers la droite et s'arrêter hors de la chaussée.
</AttentionBox>

<h3>7.5 Le freinage et la direction</h3>
<ul>
<li>Un véhicule de tourisme possède <strong>trois (03) freins</strong> : le <strong>frein à main</strong>, le <strong>frein à pied</strong> et le <strong>frein moteur</strong>.</li>
<li><strong>Frein principal</strong> (à pied) : agit sur les quatre roues, assisté par le servo-frein.</li>
<li><strong>Frein de stationnement</strong> (à main ou électrique) : agit en général sur les roues arrière ; il sert aussi de frein de secours.</li>
<li><strong>ABS</strong> : empêche le blocage des roues, donc conserve la <strong>directivité</strong> du véhicule. Il ne raccourcit pas systématiquement la distance de freinage. En freinage d'urgence avec ABS : appuyer <strong>fort et sans relâcher</strong>, et braquer pour éviter l'obstacle.</li>
<li><strong>Frein moteur</strong> : ralentissement obtenu en levant le pied et en rétrogradant ; indispensable en longue descente pour éviter le fading.</li>
<li><strong>Direction</strong> : jeu excessif, vibrations ou tirage d'un côté imposent une vérification immédiate.</li>
</ul>

<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 220 140" aria-hidden="true"><rect width="220" height="140" fill="#EDEFF2"/><rect x="88" y="30" width="44" height="84" rx="8" fill="#5C636D"/><path d="M92 40h36M92 54h36M92 68h36M92 82h36M92 96h36" stroke="#171A1F" stroke-width="3"/><path d="M110 6v18" stroke="#171A1F" stroke-width="3" marker-end="url(#m-k)"/><text x="110" y="132" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">pédale</text></svg><b>Frein à pied</b><span>Agit sur les quatre roues</span></div>
 <div class="scene"><svg viewBox="0 0 220 140" aria-hidden="true"><rect width="220" height="140" fill="#EDEFF2"/><rect x="40" y="100" width="140" height="24" rx="4" fill="#5C636D"/><path d="M80 104l76-58" stroke="#171A1F" stroke-width="12" stroke-linecap="round"/><circle cx="160" cy="42" r="9" fill="#D2202F"/><path d="M186 58q6-22-14-36" fill="none" stroke="#0B5FA5" stroke-width="3" marker-end="url(#m-b)"/></svg><b>Frein à main</b><span>Stationnement et secours, sur les roues arrière</span></div>
 <div class="scene"><svg viewBox="0 0 220 140" aria-hidden="true"><rect width="220" height="140" fill="#DCEBF7"/><path d="M0 30 220 110v30H0z" fill="#3A3F46"/><use href="#car-side" x="-40" y="-36" width="80" height="36" transform="translate(110 70) rotate(20)" color="#0B5FA5"/><text x="150" y="24" font-size="15" font-weight="bold" fill="#0B5FA5" text-anchor="middle">je rétrograde</text></svg><b>Frein moteur</b><span>Pied levé et rétrogradage, en longue descente</span></div>
</div>
<figcaption>Figure 7.7 — Les trois freins d'un véhicule de tourisme</figcaption>
</figure>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 280 130" aria-hidden="true"><rect width="280" height="130" fill="#3A3F46"/><path d="M0 12h280M0 118h280" stroke="#fff" stroke-width="2"/><use href="#car-e" x="16" y="52" width="56" height="28" color="#0B5FA5"/><path d="M78 60h124M78 72h124" stroke="#171A1F" stroke-width="5"/><rect x="226" y="36" width="24" height="60" fill="#F5B301"/><use href="#o-no" x="200" y="48" width="34" height="34"/><text x="140" y="38" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">roues bloquées</text></svg><b>Sans ABS</b><span>Les roues se bloquent : la voiture ne se dirige plus</span></div>
 <div class="scene"><svg viewBox="0 0 280 130" aria-hidden="true"><rect width="280" height="130" fill="#3A3F46"/><path d="M0 12h280M0 118h280" stroke="#fff" stroke-width="2"/><use href="#car-e" x="16" y="52" width="56" height="28" color="#0B5FA5"/><path d="M78 66q60 0 90-24t60-8" fill="none" stroke="#2BB673" stroke-width="4" marker-end="url(#m-g)"/><rect x="226" y="60" width="24" height="46" fill="#F5B301"/><text x="110" y="100" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">fort, sans relâcher</text></svg><b>Avec ABS</b><span>J'appuie fort et je garde la direction pour éviter l'obstacle</span></div>
</div>
<figcaption>Figure 7.8 — À quoi sert l'ABS</figcaption>
</figure>

<h3>7.6 Ce qui doit se trouver à bord</h3>
<div class="table-scroll"><table>
<thead><tr><th>Équipements de sécurité</th><th>Documents</th></tr></thead>
<tbody>
<tr><td>
Triangle de présignalisation · Gilet rétroréfléchissant (à portée de main, dans l'habitacle) · Extincteur en état de marche ⚠ · Trousse de premiers secours ⚠ · Roue de secours, cric et manivelle · Ampoules et fusibles de rechange
</td><td>
Permis de conduire valide · Carte grise · Attestation d'assurance en cours de validité · Visite technique à jour · Vignette de l'année en cours
</td></tr>
</tbody>
</table></div>

<figure>
<div class="panneaux">
 <div class="pan"><svg width="80" height="80" viewBox="0 0 40 40" aria-hidden="true"><use href="#o-triangle" y="4" width="40" height="36"/></svg>Triangle</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><path d="M24 8l10 8h12l10-8 16 12-8 14-6-3v41H22V31l-6 3-8-14z" fill="#F5D000"/><path d="M22 44h36M22 54h36" stroke="#C9CDD4" stroke-width="5"/><path d="M40 16v58" stroke="#E87722" stroke-width="2"/></svg>Gilet rétroréfléchissant</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><rect x="26" y="20" width="28" height="56" rx="8" fill="#D2202F"/><path d="M34 20V10h12v10M46 12h16l-4 8" fill="none" stroke="#171A1F" stroke-width="5"/><rect x="26" y="38" width="28" height="18" fill="#fff"/></svg>Extincteur ⚠</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><rect x="10" y="24" width="60" height="46" rx="6" fill="#fff" stroke="#D2202F" stroke-width="4"/><path d="M30 24v-8q0-4 4-4h12q4 0 4 4v8" fill="none" stroke="#D2202F" stroke-width="4"/><path d="M40 34v26M27 47h26" stroke="#D2202F" stroke-width="9"/></svg>Trousse de secours ⚠</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="36" fill="#171A1F"/><circle cx="40" cy="40" r="16" fill="#C9CDD4"/><circle cx="40" cy="40" r="4" fill="#5C636D"/></svg>Roue de secours</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><path d="M12 68h56v8H12zM26 68l14-24 14 24M40 44l-14-20 14-10 14 10z" fill="none" stroke="#5C636D" stroke-width="5"/><path d="M6 44h60" stroke="#E87722" stroke-width="4"/></svg>Cric et manivelle</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><rect x="6" y="18" width="68" height="46" rx="4" fill="#F7C5CC" stroke="#D2202F" stroke-width="2"/><rect x="12" y="26" width="20" height="26" fill="#fff"/><circle cx="22" cy="35" r="5" fill="#8D5A3B"/><path d="M14 52q8-14 16 0z" fill="#1F3A5F"/><path d="M38 30h30M38 40h30M38 50h20" stroke="#5C636D" stroke-width="3"/></svg>Permis</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><rect x="14" y="8" width="52" height="64" rx="3" fill="#D3D7DD" stroke="#5C636D" stroke-width="2"/><path d="M22 20h36M22 32h36M22 44h36M22 56h22" stroke="#5C636D" stroke-width="3"/></svg>Carte grise</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><rect x="14" y="8" width="52" height="64" rx="3" fill="#fff" stroke="#5C636D" stroke-width="2"/><path d="M40 20l14 6v12q0 12-14 18-14-6-14-18V26z" fill="#1B7F5A"/><path d="M34 37l5 5 8-10" fill="none" stroke="#fff" stroke-width="3"/></svg>Assurance</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><rect x="14" y="8" width="52" height="64" rx="3" fill="#fff" stroke="#5C636D" stroke-width="2"/><circle cx="34" cy="40" r="13" fill="none" stroke="#0B5FA5" stroke-width="5"/><path d="M44 50l12 12" stroke="#0B5FA5" stroke-width="6"/></svg>Visite technique</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><rect x="10" y="16" width="60" height="48" rx="8" fill="#F5B301"/><text x="40" y="46" font-size="13" font-weight="bold" fill="#171A1F" text-anchor="middle">VIGNETTE</text></svg>Vignette de l'année</div>
</div>
<figcaption>Figure 7.9 — La sécurité et les papiers du bord</figcaption>
</figure>

<h4>Les pièces administratives</h4>
<ul>
<li><strong>La carte grise</strong> : c'est sur elle qu'on reconnaît le <strong>nom du propriétaire</strong> du véhicule.</li>
<li><strong>La visite technique</strong> : renouvelable <strong>tous les ans</strong>.</li>
<li><strong>L'attestation d'assurance</strong> : renouvelable <strong>tous les ans</strong>, valable avec la visite technique. L'<strong>assurance au tiers</strong>, qui couvre les dégâts causés à autrui, est <strong>obligatoire</strong>.</li>
<li><strong>La vignette de l'année en cours</strong> : obligatoire pour les véhicules privés et pour ceux de transport (marchandises, transport en commun de personnes).</li>
</ul>
<p>Lors d'un <strong>contrôle routier</strong>, on doit présenter les pièces administratives et le <strong>permis de conduire</strong>.</p>

<h3>7.7 Le contrôle avant départ : la méthode des 5 minutes</h3>
<ol>
<li><strong>Tour du véhicule</strong> : pneus (aspect, pression), carrosserie, feux (faire vérifier par une autre personne), plaques propres et lisibles, absence d'obstacle derrière.</li>
<li><strong>Niveaux</strong> : huile moteur, liquide de refroidissement, liquide de frein, liquide lave-glace, carburant.</li>
<li><strong>Pédales</strong> : de gauche à droite, <strong>embrayage – frein – accélérateur</strong>.</li>
<li><strong>Poste de conduite</strong> : réglage du siège (jambes légèrement fléchies, poignets sur le haut du volant), appuie-tête au niveau du sommet du crâne, rétroviseurs, ceinture, verrouillage des portes.</li>
<li><strong>Tableau de bord</strong> : contact mis, vérifier l'extinction des témoins rouges après le démarrage.</li>
</ol>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 280 150" aria-hidden="true"><rect width="280" height="150" fill="#EDEFF2"/><rect x="36" y="16" width="44" height="88" rx="6" fill="#5C636D"/><rect x="118" y="16" width="44" height="88" rx="6" fill="#D2202F"/><rect x="214" y="10" width="30" height="100" rx="6" fill="#1B7F5A"/><g font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle"><text x="58" y="128">embrayage</text><text x="140" y="128">frein</text><text x="229" y="128">accélérateur</text></g><text x="140" y="146" font-size="13" fill="#5C636D" text-anchor="middle">de gauche à droite</text></svg><b>Les pédales</b><span>Embrayage, frein, accélérateur</span></div>
 <div class="scene"><svg viewBox="0 0 280 150" aria-hidden="true"><rect width="280" height="150" fill="#EDEFF2"/><path d="M70 136V62q0-8 8-8h8q8 0 8 8v50h62q6 0 6 6v18z" fill="#5C636D"/><rect x="68" y="24" width="22" height="26" rx="7" fill="#5C636D"/><circle cx="110" cy="30" r="14" fill="#8D5A3B"/><path d="M98 50h22q8 0 10 8l6 44h44l6 14-58 2q-8 0-10-6L104 66q-4-16-6-16z" fill="#0B5FA5"/><path d="M122 62l62-6" stroke="#0B5FA5" stroke-width="10" stroke-linecap="round"/><path d="M190 80q-14-22 2-52" fill="none" stroke="#171A1F" stroke-width="8" stroke-linecap="round"/><path d="M178 112l22 22" stroke="#0B5FA5" stroke-width="10" stroke-linecap="round"/><text x="28" y="26" font-size="13" font-weight="bold" fill="#171A1F" text-anchor="middle">appuie-</text><text x="28" y="42" font-size="13" font-weight="bold" fill="#171A1F" text-anchor="middle">tête</text><text x="240" y="60" font-size="13" font-weight="bold" fill="#171A1F" text-anchor="middle">bras fléchis</text><text x="246" y="116" font-size="13" font-weight="bold" fill="#171A1F" text-anchor="middle">jambes</text><text x="246" y="132" font-size="13" font-weight="bold" fill="#171A1F" text-anchor="middle">fléchies</text></svg><b>Le poste de conduite</b><span>Siège, appuie-tête au sommet du crâne, rétroviseurs, ceinture</span></div>
</div>
<figcaption>Figure 7.10 — S'installer avant de démarrer</figcaption>
</figure>
<figure>
<img class="fig-large" style="max-width:300px" src="/benin/signs/760904cde9f9.webp" alt="Quatre témoins rouges du tableau de bord : batterie, température, pression d'huile, frein" loading="lazy">
<figcaption>Figure 7.11 — Témoins rouges du manuel DGTT : batterie, température, huile, frein</figcaption>
</figure>
<MemoBox label="Code couleur du tableau de bord">
<strong>Rouge</strong> = danger immédiat, je m'arrête dès que possible (pression d'huile, température, frein, batterie de charge). <strong>Orange</strong> = anomalie à faire contrôler rapidement (moteur, ABS, airbag). <strong>Vert / bleu</strong> = simple information de fonctionnement (feux, clignotants).
</MemoBox>

<QcmBlock title="QCM — Chapitre 7" :questions="questions" />
</section>
</template>
