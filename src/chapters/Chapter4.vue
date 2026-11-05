<script setup>
import MemoBox from '../components/MemoBox.vue'
import AstuceBox from '../components/AstuceBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import questions from '../data/questions/ch4.json'
</script>

<template>
<section class="chap" id="ch4">
<div class="chap-head">
  <span class="borne">04</span>
  <div><span class="fil">Chapitre 4</span><h2>Arrêt et stationnement</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Distinguer arrêt et stationnement, connaître les stationnements interdits, gênants, dangereux et abusifs, maîtriser les différents modes de rangement et les règles de sortie de véhicule.</p>

<h3>4.1 Deux notions à ne jamais confondre</h3>
<div class="table-scroll"><table>
<thead><tr><th></th><th>L'arrêt</th><th>Le stationnement</th></tr></thead>
<tbody>
<tr><td><strong>Définition</strong></td><td>Immobilisation <em>momentanée</em> du véhicule, le conducteur restant au volant ou à proximité immédiate, pour laisser monter/descendre des personnes ou charger/décharger</td><td>Immobilisation du véhicule en dehors des circonstances de l'arrêt : le conducteur quitte son véhicule ou l'immobilise durablement</td></tr>
<tr><td><strong>Conducteur</strong></td><td>Présent, prêt à repartir</td><td>Peut être absent</td></tr>
<tr><td><strong>Durée</strong></td><td>Brève, liée à l'opération en cours</td><td>Indéterminée</td></tr>
<tr><td><strong>Règle</strong></td><td>Tout stationnement interdit est aussi un arrêt interdit ? <strong>Non</strong> : tout <em>arrêt</em> interdit entraîne l'interdiction de stationner, l'inverse n'est pas vrai</td><td>Là où le stationnement est interdit, l'arrêt peut rester possible</td></tr>
</tbody>
</table></div>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 280 150" aria-hidden="true"><rect width="280" height="150" fill="#EDEFF2"/><rect y="116" width="280" height="34" fill="#3A3F46"/><rect y="106" width="118" height="10" fill="#C9CDD4" transform="translate(0 0)"/><use href="#car-side" x="104" y="52" width="150" height="66" color="#0B5FA5"/><circle cx="190" cy="74" r="7" fill="#171A1F"/><use href="#p-person" x="62" y="50" width="26" height="60" color="#D2202F"/><path d="M92 82h16" stroke="#D2202F" stroke-width="3" transform="rotate(180 100 82)" marker-end="url(#m-r)"/><text x="196" y="36" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">conducteur à bord</text></svg><b>L'arrêt</b><span>Quelques instants, le temps de faire descendre un passager ; je suis prêt à repartir</span></div>
 <div class="scene"><svg viewBox="0 0 280 150" aria-hidden="true"><rect width="280" height="150" fill="#EDEFF2"/><rect y="116" width="280" height="34" fill="#3A3F46"/><use href="#car-side" x="104" y="52" width="150" height="66" color="#5C636D"/><use href="#p-person" x="26" y="50" width="26" height="60" color="#0B5FA5"/><path d="M58 96H22" stroke="#0B5FA5" stroke-width="3" transform="translate(-8 26)" marker-end="url(#m-b)"/><text x="196" y="36" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">voiture sans conducteur</text></svg><b>Le stationnement</b><span>Je m'éloigne ou je reste longtemps : la durée est indéterminée</span></div>
</div>
<figcaption>Figure 4.1 — Arrêt et stationnement : la différence en image</figcaption>
</figure>
<p>Une immobilisation, <strong>même de courte durée</strong>, est considérée comme un <strong>stationnement</strong> si elle n'est pas liée à la montée ou à la descente de passagers, ni au chargement ou au déchargement du véhicule.</p>
<MemoBox label="À retenir">
Le panneau rond bleu barré d'un <strong>seul trait rouge</strong> = <em>stationnement interdit</em>. Barré de <strong>deux traits croisés</strong> = <em>arrêt et stationnement interdits</em>. Un trait, une interdiction ; deux traits, deux interdictions.
</MemoBox>
<figure>
<div class="panneaux">
 <div class="pan"><img src="/benin/signs/1a8f370194ab.webp" alt="" loading="lazy">Un trait :<br>stationnement interdit</div>
 <div class="pan"><img src="/benin/signs/be400c5ff657.webp" alt="" loading="lazy">Deux traits :<br>arrêt et stationnement interdits</div>
</div>
<figcaption>Figure 4.2 — Un trait, une interdiction ; deux traits, deux interdictions</figcaption>
</figure>

<h3>4.2 Où stationner ?</h3>
<ul>
<li><strong>Hors agglomération</strong> : les véhicules peuvent stationner sur l'<strong>accotement droit</strong> ; ils peuvent aussi stationner du <strong>côté gauche</strong> si l'accotement droit n'est pas praticable. Hors agglomération, on peut donc stationner à droite ou à gauche.</li>
<li><strong>En agglomération</strong> : les véhicules doivent stationner sur le <strong>bord droit</strong> de la chaussée, le long du trottoir. <strong>Dans les rues à sens unique</strong>, on peut stationner à droite ou à gauche.</li>
</ul>

<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#E4EADF"/><rect y="42" width="240" height="66" fill="#3A3F46"/><rect y="108" width="240" height="24" fill="#9C8B6E"/><rect y="18" width="240" height="24" fill="#9C8B6E"/><path d="M0 75h240" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/><use href="#car-e" x="96" y="109" width="44" height="22" color="#1B7F5A"/><use href="#car-w" x="96" y="19" width="44" height="22" color="#F5B301"/><use href="#o-ok" x="146" y="108" width="24" height="24"/></svg><b>Hors agglomération</b><span>Sur l'accotement droit ; à gauche s'il n'est pas praticable</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-rue" width="240" height="150"/><use href="#car-e" x="96" y="94" width="44" height="22" color="#1B7F5A"/><use href="#o-ok" x="146" y="93" width="24" height="24"/><use href="#car-e" x="96" y="34" width="44" height="22" color="#5C636D"/><use href="#o-no" x="146" y="33" width="24" height="24"/></svg><b>En agglomération</b><span>Sur le bord droit, le long du trottoir</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#C9CDD4"/><rect y="30" width="240" height="90" fill="#3A3F46"/><path d="M90 75h60" stroke="#fff" stroke-width="5" marker-end="url(#m-w)"/><use href="#car-e" x="96" y="94" width="44" height="22" color="#1B7F5A"/><use href="#car-e" x="96" y="34" width="44" height="22" color="#1B7F5A"/><use href="#o-ok" x="146" y="93" width="24" height="24"/><use href="#o-ok" x="146" y="33" width="24" height="24"/></svg><b>Rue à sens unique</b><span>À droite ou à gauche</span></div>
</div>
<figcaption>Figure 4.3 — Où ranger son véhicule</figcaption>
</figure>

<h3>4.3 Les interdictions signalées</h3>
<p>La signalisation peut interdire l'arrêt ou le stationnement :</p>
<ul>
<li>Le panneau <strong>B6a1 « stationnement interdit »</strong> : le stationnement est interdit <strong>à partir du panneau</strong> et l'interdiction <strong>finit à la prochaine intersection</strong>.</li>
<li>Il en est de même pour le panneau <strong>« arrêt et stationnement interdits »</strong>.</li>
<li>Le <strong>marquage jaune discontinu</strong> le long du trottoir signifie <strong>stationnement interdit</strong> à tous les véhicules le long de ce trottoir.</li>
<li>Le <strong>marquage jaune continu</strong> le long du trottoir interdit <strong>l'arrêt et le stationnement</strong> le long de ce trottoir.</li>
</ul>
<figure>
<svg class="fig-large" viewBox="0 0 560 170" role="img" aria-label="L'interdiction de stationner commence au panneau et finit à la prochaine intersection">
 <rect width="560" height="170" fill="#C9CDD4"/><rect y="30" width="560" height="90" fill="#3A3F46"/><rect x="420" width="80" height="170" fill="#3A3F46"/>
 <path d="M0 75h420M500 75h60" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/>
 <rect x="110" y="92" width="310" height="28" fill="#D2202F" opacity=".35"/>
 <use href="#car-e" x="40" y="94" width="50" height="24" color="#1B7F5A"/><use href="#car-e" x="240" y="94" width="50" height="24" color="#5C636D"/><use href="#o-no" x="252" y="93" width="26" height="26"/><use href="#car-e" x="510" y="94" width="50" height="24" color="#1B7F5A"/>
 <rect x="108" y="122" width="4" height="10" fill="#5C636D"/><image href="/benin/signs/1a8f370194ab.webp" x="90" y="124" width="40" height="40"/>
 <g font-size="15" font-weight="bold" fill="#171A1F"><text x="136" y="150">à partir du panneau…</text><text x="414" y="150" text-anchor="end">… jusqu'à l'intersection</text></g>
</svg>
<figcaption>Figure 4.4 — La portée du panneau de stationnement interdit</figcaption>
</figure>

<h3>4.4 Où l'arrêt et le stationnement sont interdits</h3>
<ul>
<li>Sur les <strong>passages pour piétons</strong> et, en amont, sur les 5 mètres qui les précèdent (zone de visibilité).</li>
<li>Sur les <strong>trottoirs</strong>, les pistes et bandes cyclables, les voies réservées aux bus.</li>
<li>Sur les <strong>ponts, dans les tunnels, les passages souterrains</strong> et sur les passages à niveau.</li>
<li>Dans les <strong>virages, les sommets de côte</strong> et à proximité des intersections lorsque la visibilité est réduite.</li>
<li>Sur les <strong>zébras</strong>, les emplacements réservés (handicapés, taxis, livraisons, secours), devant les bouches d'incendie.</li>
<li>En <strong>double file</strong>, ou, en agglomération, du côté gauche d'une chaussée à double sens.</li>
<li>Sur la <strong>bande d'arrêt d'urgence</strong> d'une autoroute, sauf urgence réelle.</li>
</ul>

<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-rue" width="240" height="150"/><path d="M130 30v90M144 30v90M158 30v90M172 30v90M186 30v90" stroke="#fff" stroke-width="8"/><path d="M92 96h30" stroke="#F5B301" stroke-width="3"/><text x="107" y="90" font-size="15" font-weight="bold" fill="#F5B301" text-anchor="middle">5 m</text><use href="#car-e" x="44" y="94" width="44" height="22" color="#5C636D"/><use href="#o-no" x="54" y="93" width="24" height="24"/></svg><b>Passage piétons</b><span>Dessus et sur les 5 m qui le précèdent</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-rue" width="240" height="150"/><use href="#car-e" x="96" y="112" width="52" height="26" color="#5C636D"/><use href="#o-no" x="110" y="113" width="24" height="24"/></svg><b>Trottoir, piste cyclable</b><span>Et les voies réservées aux bus</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#DCEBF7"/><path d="M0 120h240v30H0z" fill="#5C9BD5"/><path d="M0 62h240v14H0z" fill="#3A3F46"/><path d="M0 76h240v8H0z" fill="#8A9099"/><path d="M40 84h16v66H40zM184 84h16v66h-16z" fill="#8A9099"/><use href="#car-side" x="88" y="32" width="70" height="30" color="#5C636D"/><use href="#o-no" x="110" y="32" width="26" height="26"/></svg><b>Pont, tunnel</b><span>Aussi les passages souterrains et les passages à niveau</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#E4EADF"/><path d="M30 160V100Q30 30 110 30h140" fill="none" stroke="#3A3F46" stroke-width="56"/><path d="M30 160V100Q30 30 110 30h130" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="10 10"/><use href="#car-n" x="-10" y="-19" width="20" height="38" transform="translate(70 60) rotate(60)" color="#5C636D"/><use href="#o-no" x="58" y="48" width="24" height="24"/></svg><b>Virage, sommet de côte</b><span>Là où la visibilité est réduite</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-rue" width="240" height="150"/><use href="#car-e" x="96" y="94" width="44" height="22" color="#1B7F5A"/><use href="#car-e" x="96" y="66" width="44" height="22" color="#5C636D"/><use href="#o-no" x="106" y="65" width="24" height="24"/></svg><b>En double file</b><span>Ni à gauche d'une rue à double sens en ville</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-rue" width="240" height="150"/><rect x="44" y="92" width="110" height="26" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="6 4"/><text x="99" y="110" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">TAXI</text><rect x="176" y="124" width="14" height="22" rx="4" fill="#D2202F"/><circle cx="183" cy="122" r="5" fill="#D2202F"/><text x="196" y="142" font-size="12" fill="#171A1F">incendie</text></svg><b>Emplacements réservés</b><span>Taxis, livraisons, secours, bouches d'incendie</span></div>
</div>
<figcaption>Figure 4.5 — Les endroits où l'on ne s'arrête jamais</figcaption>
</figure>

<h3>4.5 Sans signalisation : dangereux, gênant, abusif</h3>
<p>En l'absence de signalisation, il existe <strong>trois (03) catégories</strong> d'arrêt et de stationnement interdits : le stationnement <strong>dangereux</strong>, <strong>gênant</strong> et <strong>abusif</strong>.</p>
<h4>a) Arrêt et stationnement dangereux</h4>
<p>Ils sont dangereux chaque fois que le véhicule garé <strong>peut surprendre les autres usagers</strong> :</p>
<ul>
<li>à proximité des <strong>intersections</strong> ;</li>
<li>à proximité des <strong>sommets de côte</strong> (et dans les virages) ;</li>
<li>à proximité des <strong>passages à niveau</strong> ;</li>
<li>sur la chaussée, <strong>la nuit</strong>, quand le véhicule <strong>n'est pas signalé</strong>.</li>
</ul>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><use href="#bg-carrefour" width="240" height="170"/><use href="#car-e" x="44" y="92" width="42" height="20" color="#5C636D"/><use href="#o-no" x="54" y="91" width="22" height="22"/><use href="#car-n" x="125" y="124" width="20" height="38" color="#0B5FA5"/></svg><b>Près d'une intersection</b><span>Il cache les autres usagers</span></div>
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><rect width="240" height="170" fill="#DCEBF7"/><path d="M0 170V130Q120 40 240 130v40z" fill="#3A3F46"/><use href="#car-side" x="-30" y="-26" width="60" height="26" transform="translate(150 90) rotate(13)" color="#5C636D"/><use href="#car-side" x="-26" y="-22" width="52" height="22" transform="translate(40 124) rotate(-30)" color="#0B5FA5"/></svg><b>Près d'un sommet de côte</b><span>Celui qui arrive le découvre trop tard</span></div>
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><rect width="240" height="170" fill="#10141F"/><rect y="55" width="240" height="60" fill="#23272D"/><path d="M0 85h240" stroke="#8A9099" stroke-width="2.5" stroke-dasharray="12 10"/><use href="#car-e" x="150" y="90" width="42" height="20" color="#2E3238"/><use href="#car-e" x="20" y="90" width="42" height="20" color="#0B5FA5"/><path d="M62 94 136 80v30L62 106z" fill="#FFF3B0" opacity=".25"/><text x="120" y="30" font-size="15" fill="#fff" text-anchor="middle" font-weight="bold">non signalé, invisible</text></svg><b>La nuit, sans signalisation</b><span>Personne ne le voit sur la chaussée</span></div>
</div>
<figcaption>Figure 4.6 — Le stationnement dangereux surprend les autres</figcaption>
</figure>
<h4>b) Arrêt et stationnement gênants</h4>
<p>Ils sont gênants quand le véhicule <strong>gêne les autres usagers</strong> :</p>
<ul>
<li>à la hauteur d'une <strong>ligne blanche continue</strong>, quand le véhicule oblige les autres à chevaucher la ligne ;</li>
<li>à côté des <strong>panneaux ou des signaux lumineux</strong>, si le véhicule risque de les cacher aux autres ;</li>
<li><strong>derrière les véhicules en stationnement</strong>, quand le véhicule peut les empêcher de sortir ;</li>
<li>aux <strong>emplacements réservés</strong> à certaines catégories de véhicules (bus, ambulances, etc.) ;</li>
<li>sur les <strong>trottoirs</strong>, les <strong>passages pour piétons</strong>, les <strong>pistes ou bandes cyclables</strong> ;</li>
<li>dans les <strong>passages souterrains</strong>.</li>
</ul>
<p><strong>Le stationnement est gênant mais l'arrêt toléré :</strong></p>
<ul>
<li>devant les <strong>garages</strong> ou les <strong>portes cochères</strong> ;</li>
<li>au-delà d'un panneau <strong>B6a1</strong> « stationnement interdit » ;</li>
<li>le long de la <strong>ligne jaune discontinue</strong>.</li>
</ul>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-route-c" width="240" height="150"/><use href="#car-e" x="96" y="79" width="48" height="24" color="#5C636D"/><use href="#car-e" x="32" y="79" width="48" height="24" color="#0B5FA5"/><path d="M84 88q30-22 66-14" fill="none" stroke="#D2202F" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#m-r)"/></svg><b>À hauteur d'une ligne continue</b><span>Il oblige les autres à la chevaucher</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-rue" width="240" height="150"/><use href="#truck-e" x="70" y="88" width="104" height="30" color="#5C636D"/><rect x="186" y="122" width="4" height="26" fill="#5C636D"/><image href="/benin/signs/e8bdfd38f445.webp" x="174" y="102" width="28" height="26"/><use href="#car-e" x="10" y="94" width="44" height="22" color="#0B5FA5"/></svg><b>Devant un panneau ou un feu</b><span>Il risque de le cacher aux autres</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-rue" width="240" height="150"/><use href="#car-s" x="60" y="86" width="20" height="34" color="#1B7F5A"/><use href="#car-s" x="90" y="86" width="20" height="34" color="#1B7F5A"/><use href="#car-s" x="120" y="86" width="20" height="34" color="#1B7F5A"/><use href="#car-e" x="64" y="58" width="52" height="26" color="#5C636D"/><use href="#o-no" x="78" y="59" width="24" height="24"/></svg><b>Derrière des voitures garées</b><span>Il les empêche de sortir</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect y="118" width="240" height="32" fill="#3A3F46"/><rect x="30" y="34" width="84" height="84" fill="#C9B79C"/><rect x="44" y="60" width="56" height="58" fill="#7A5A3A"/><path d="M30 34 72 12l42 22" fill="#A8926B"/><g transform="translate(120 0)"><use href="#car-side" x="-8" y="86" width="84" height="36" color="#5C636D"/></g></svg><b>Devant un garage</b><span>Stationnement gênant, mais arrêt toléré</span></div>
</div>
<figcaption>Figure 4.7 — Le stationnement gênant bloque ou trompe les autres</figcaption>
</figure>
<h4>c) Stationnement abusif</h4>
<p>On appelle stationnement abusif l'immobilisation d'un véhicule sur un lieu public pendant <strong>plus de sept (07) jours consécutifs</strong>. <strong>NB</strong> : cette durée peut être réduite par la réglementation locale.</p>
<MemoBox label="Contrôle du stationnement">
Stationnement <strong>gratuit à durée limitée</strong> : contrôlé par le <strong>disque de stationnement</strong>. Stationnement <strong>payant</strong> : contrôlé par l'<strong>horodateur</strong> ou le <strong>parcmètre</strong>.
</MemoBox>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect x="20" y="16" width="200" height="118" rx="6" fill="#fff" stroke="#5C636D" stroke-width="2"/><rect x="20" y="16" width="200" height="26" rx="6" fill="#D2202F"/><text x="120" y="35" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">7 jours, puis abusif</text><g font-size="17" font-weight="bold" fill="#171A1F" text-anchor="middle"><text x="42" y="76">1</text><text x="68" y="76">2</text><text x="94" y="76">3</text><text x="120" y="76">4</text><text x="146" y="76">5</text><text x="172" y="76">6</text><text x="198" y="76">7</text><text x="42" y="114" fill="#D2202F">8</text></g><path d="M34 106l16 12M50 106l-16 12" stroke="#D2202F" stroke-width="3"/><use href="#car-side" x="74" y="92" width="74" height="32" color="#5C636D"/></svg><b>Abusif</b><span>Plus de 7 jours consécutifs au même endroit</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><circle cx="120" cy="62" r="50" fill="#0B5FA5"/><circle cx="120" cy="62" r="36" fill="#fff"/><path d="M120 36v26l18 10" fill="none" stroke="#171A1F" stroke-width="4" stroke-linecap="round"/><text x="120" y="140" font-size="14" font-weight="bold" fill="#171A1F" text-anchor="middle">heure d'arrivée</text></svg><b>Disque de stationnement</b><span>Gratuit à durée limitée</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect x="112" y="92" width="16" height="58" fill="#5C636D"/><rect x="84" y="10" width="72" height="90" rx="8" fill="#0B5FA5"/><rect x="94" y="20" width="52" height="26" fill="#DCEBF7"/><text x="120" y="39" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">12:00</text><circle cx="104" cy="62" r="5" fill="#F5B301"/><rect x="116" y="58" width="30" height="8" fill="#171A1F"/><rect x="100" y="78" width="40" height="10" fill="#fff"/></svg><b>Horodateur, parcmètre</b><span>Payant : ticket visible</span></div>
</div>
<figcaption>Figure 4.8 — Stationnement abusif et contrôle de la durée</figcaption>
</figure>
<p>Ces stationnements exposent à une amende, à l'<strong>immobilisation</strong> et à la <strong>mise en fourrière</strong> aux frais du propriétaire.</p>

<h3>4.6 Les trois façons de stationner</h3>
<figure>
<svg viewBox="0 0 660 200" role="img" aria-label="Modes de stationnement">
 <rect width="660" height="200" fill="#EDEFF2"/>
 <g font-family="Arial Narrow, Arial, sans-serif" text-anchor="middle">
  <rect x="20" y="30" width="180" height="90" fill="#3A3F46"/>
  <g fill="#0B5FA5"><rect x="30" y="46" width="48" height="24" rx="3"/><rect x="88" y="46" width="48" height="24" rx="3"/><rect x="146" y="46" width="48" height="24" rx="3"/></g>
  <text x="110" y="140" font-size="13.5" font-weight="bold" fill="#171A1F">EN CRÉNEAU</text>
  <text x="110" y="158" font-size="12" fill="#5C636D">parallèle au trottoir</text>
  <rect x="240" y="30" width="180" height="90" fill="#3A3F46"/>
  <g fill="#D2202F"><rect x="252" y="42" width="24" height="46" rx="3" transform="rotate(30 264 65)"/><rect x="300" y="42" width="24" height="46" rx="3" transform="rotate(30 312 65)"/><rect x="348" y="42" width="24" height="46" rx="3" transform="rotate(30 360 65)"/></g>
  <text x="330" y="140" font-size="13.5" font-weight="bold" fill="#171A1F">EN ÉPI</text>
  <text x="330" y="158" font-size="12" fill="#5C636D">en oblique, entrée facile</text>
  <rect x="460" y="30" width="180" height="90" fill="#3A3F46"/>
  <g fill="#1B7F5A"><rect x="476" y="42" width="26" height="48" rx="3"/><rect x="522" y="42" width="26" height="48" rx="3"/><rect x="568" y="42" width="26" height="48" rx="3"/></g>
  <text x="550" y="140" font-size="13.5" font-weight="bold" fill="#171A1F">EN BATAILLE</text>
  <text x="550" y="158" font-size="12" fill="#5C636D">perpendiculaire</text>
 </g>
</svg>
<figcaption>Figure 4.9 — Les trois modes de stationnement</figcaption>
</figure>
<ul>
<li><strong>En bataille</strong> : le véhicule est rangé <strong>perpendiculairement</strong> au trottoir.</li>
<li><strong>En épi</strong> : le véhicule est rangé <strong>de biais</strong> par rapport au trottoir (comme l'épi de maïs). Entrée facile, sortie délicate (visibilité réduite).</li>
<li><strong>En créneau</strong> : le véhicule est rangé <strong>parallèlement</strong> au trottoir, dans le sens de la circulation. C'est la manœuvre exigée à l'examen pratique.</li>
</ul>
<p><strong>NB</strong> : chaque fois que l'on peut, il est conseillé de ranger le véhicule <strong>en marche arrière</strong> : cela donne une meilleure visibilité à la sortie.</p>
<h4>Réglementations particulières</h4>
<ul>
<li><strong>Stationnement alterné semi-mensuel</strong> : du 1<sup>er</sup> au 15 du mois, côté impair ; du 16 à la fin du mois, côté pair. Le changement s'effectue le dernier jour de chaque période, entre 20 h 30 et 21 h.</li>
<li><strong>Zone bleue</strong> : durée limitée, disque de stationnement obligatoire derrière le pare-brise.</li>
<li><strong>Stationnement payant</strong> : horodateur ou parcmètre ; le ticket doit être visible.</li>
<li><strong>Hors agglomération, de nuit</strong> : si le véhicule doit rester sur la chaussée, il faut allumer les <strong>feux de position</strong> et, en cas de panne, poser le triangle de présignalisation à <strong>30 m</strong> au moins.</li>
</ul>

<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 260 150" aria-hidden="true"><use href="#bg-rue" width="260" height="162"/><use href="#car-e" x="14" y="100" width="54" height="26" color="#1B7F5A"/><use href="#car-e" x="14" y="36" width="54" height="26" color="#1B7F5A"/><g font-size="16" font-weight="bold" fill="#fff"><text x="78" y="55">du 16 à la fin : côté pair</text><text x="78" y="119">du 1er au 15 : côté impair</text></g></svg><b>Alternance semi-mensuelle</b><span>Du 1er au 15 : côté impair. Du 16 à la fin du mois : côté pair</span></div>
 <div class="scene"><svg viewBox="0 0 260 150" aria-hidden="true"><rect width="260" height="150" fill="#10141F"/><rect y="50" width="260" height="62" fill="#23272D"/><path d="M0 81h260" stroke="#8A9099" stroke-width="2.5" stroke-dasharray="14 11"/><use href="#car-e" x="186" y="84" width="52" height="26" color="#5C636D"/><circle cx="238" cy="90" r="3" fill="#FFF3B0"/><circle cx="238" cy="104" r="3" fill="#FFF3B0"/><circle cx="187" cy="90" r="3" fill="#D2202F"/><circle cx="187" cy="104" r="3" fill="#D2202F"/><use href="#o-triangle" x="44" y="84" width="30" height="26"/><path d="M60 124h126M60 118v12M186 118v12" stroke="#F5B301" stroke-width="2.5"/><text x="123" y="142" font-size="17" font-weight="bold" fill="#F5B301" text-anchor="middle">30 m au moins</text></svg><b>Panne de nuit hors agglomération</b><span>Feux de position allumés, triangle à 30 m au moins</span></div>
</div>
<figcaption>Figure 4.10 — Deux réglementations particulières</figcaption>
</figure>

<h3>4.7 Quitter le stationnement, sortir d'un garage</h3>
<p><strong>a) En quittant le stationnement</strong> en marche normale pour intégrer la circulation, je dois :</p>
<ul>
<li>mettre le <strong>clignotant gauche</strong> ;</li>
<li>vérifier, à l'aide du <strong>rétroviseur gauche</strong>, que la circulation est libre à l'arrière ;</li>
<li>m'engager <strong>doucement</strong>, sans gêner la circulation.</li>
</ul>
<p><strong>b) En sortant d'un garage</strong> pour intégrer la circulation, je dois :</p>
<ul>
<li>jeter tout d'abord un coup d'œil <strong>à gauche puis à droite</strong> ;</li>
<li><strong>céder le passage</strong> aux usagers circulant à droite et à gauche ;</li>
<li>m'engager <strong>progressivement</strong>.</li>
</ul>

<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-rue" width="240" height="150"/><use href="#car-e" x="84" y="94" width="48" height="24" color="#0B5FA5"/><circle cx="134" cy="99" r="3.5" fill="#F5B301"/><path d="M134 106q14-2 22-26" fill="none" stroke="#F5B301" stroke-width="3" marker-end="url(#m-a)"/><use href="#car-e" x="4" y="50" width="48" height="24" color="#D2202F" transform="translate(0 40)"/><path d="M58 102h20" stroke="#D2202F" stroke-width="3" marker-end="url(#m-r)"/></svg><b>Quitter le stationnement</b><span>Clignotant gauche, rétroviseur gauche, puis je m'engage doucement</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect y="14" width="240" height="60" fill="#3A3F46"/><path d="M0 44h240" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/><rect x="70" y="92" width="100" height="58" fill="#C9B79C"/><rect x="96" y="74" width="48" height="24" fill="#6A6F76"/><use href="#car-n" x="110" y="84" width="20" height="38" color="#0B5FA5"/><use href="#car-e" x="20" y="48" width="44" height="22" color="#D2202F"/><use href="#car-w" x="176" y="18" width="44" height="22" color="#D2202F"/><path d="M120 76V62M116 80 94 64M124 80l22-16" stroke="#F5B301" stroke-width="2.5" stroke-dasharray="5 4"/></svg><b>Sortir d'un garage</b><span>Je regarde à gauche puis à droite et je cède aux deux côtés</span></div>
</div>
<figcaption>Figure 4.11 — Reprendre la circulation sans gêner</figcaption>
</figure>

<h3>4.8 Quitter et reprendre son véhicule</h3>
<ol>
<li>Serrer le <strong>frein de stationnement</strong>, engager une vitesse (1<sup>re</sup> en montée, marche arrière en descente), braquer les roues vers le trottoir en pente.</li>
<li>Contrôler le rétroviseur et l'angle mort <strong>avant d'ouvrir la portière</strong> : l'ouverture dangereuse est une cause fréquente d'accident mortel de cycliste ou de motocycliste.</li>
<li>Descendre côté trottoir chaque fois que c'est possible ; ne pas laisser d'enfant ni d'animal seul dans un véhicule fermé, surtout au soleil.</li>
<li>Avant de repartir : faire le tour du véhicule si nécessaire, clignotant, contrôle du rétroviseur et de l'angle mort, puis insertion en cédant le passage.</li>
</ol>
<AstuceBox label="Astuce sécurité">
La « <strong>prise hollandaise</strong> » : ouvrir sa portière avec la main la plus éloignée (main droite pour le conducteur). Le buste pivote naturellement et le regard part vers l'arrière — le contrôle de l'angle mort devient automatique.
</AstuceBox>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 160" aria-hidden="true"><rect width="240" height="160" fill="#3A3F46"/><rect x="176" width="64" height="160" fill="#C9CDD4"/><path d="M176 0v160" stroke="#8A9099" stroke-width="3"/><rect x="78" y="34" width="76" height="110" rx="14" fill="#0B5FA5"/><rect x="72" y="46" width="10" height="26" rx="3" fill="#171A1F" transform="rotate(25 77 59)"/><rect x="150" y="46" width="10" height="26" rx="3" fill="#171A1F" transform="rotate(25 155 59)"/><rect x="72" y="112" width="10" height="26" rx="3" fill="#171A1F"/><rect x="150" y="112" width="10" height="26" rx="3" fill="#171A1F"/><text x="208" y="86" font-size="14" font-weight="bold" fill="#171A1F" text-anchor="middle">trottoir</text></svg><b>En pente</b><span>Frein serré, vitesse engagée, roues braquées vers le trottoir</span></div>
 <div class="scene"><svg viewBox="0 0 240 160" aria-hidden="true"><rect width="240" height="160" fill="#3A3F46"/><rect y="124" width="240" height="36" fill="#C9CDD4"/><use href="#car-e" x="30" y="72" width="100" height="50" color="#5C636D"/><path d="M92 74l-12-30" stroke="#5C636D" stroke-width="7" stroke-linecap="round"/><use href="#moto-e" x="14" y="30" width="58" height="22" color="#D2202F"/><path d="M74 42h6" stroke="#F5B301" stroke-width="3"/><path d="M78 26l6 16M90 28l-6 14M98 40H86" stroke="#F5B301" stroke-width="3"/></svg><b>La portière qui s'ouvre</b><span>Cause fréquente d'accident mortel : je regarde avant d'ouvrir</span></div>
 <div class="scene"><svg viewBox="0 0 240 160" aria-hidden="true"><rect width="240" height="160" fill="#EDEFF2"/><path d="M30 10h180v140H30z" fill="#DCE0E5"/><path d="M36 150V16" stroke="#171A1F" stroke-width="7"/><rect x="88" y="66" width="56" height="76" rx="8" fill="#5C636D"/><ellipse cx="116" cy="92" rx="28" ry="15" fill="#0B5FA5" transform="rotate(-24 116 92)"/><circle cx="116" cy="92" r="11" fill="#8D5A3B"/><path d="M140 82q-8-34-90-22" fill="none" stroke="#8D5A3B" stroke-width="8" stroke-linecap="round"/><circle cx="46" cy="60" r="6" fill="#8D5A3B"/><path d="M106 86 56 110" stroke="#1B7F5A" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#m-g)"/><text x="170" y="42" font-size="14" font-weight="bold" fill="#171A1F" text-anchor="middle">main droite</text><text x="44" y="136" font-size="14" font-weight="bold" fill="#1B7F5A">regard</text></svg><b>La prise hollandaise</b><span>Vu du dessus : la main droite ouvre, le buste pivote, le regard part vers l'arrière</span></div>
</div>
<figcaption>Figure 4.12 — Quitter son véhicule en sécurité</figcaption>
</figure>

<QcmBlock title="QCM — Chapitre 4" :questions="questions" />
</section>
</template>
