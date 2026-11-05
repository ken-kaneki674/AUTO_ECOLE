<script setup>
import AttentionBox from '../components/AttentionBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import ValeurBenin from '../components/ValeurBenin.vue'
import questions from '../data/questions/ch6.json'
</script>

<template>
<section class="chap" id="ch6">
<div class="chap-head">
  <span class="borne">06</span>
  <div><span class="fil">Chapitre 6</span><h2>Route · Route pour automobiles · Autoroute</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Reconnaître les trois types de voies, nommer les parties de la route, maîtriser l'insertion et la sortie, connaître les interdictions propres à l'autoroute et la conduite à tenir en cas de panne.</p>

<h3>6.1 Les parties de la route</h3>
<p><strong>La route</strong> est tout passage spécialement aménagé et ouvert à la circulation publique ; elle peut être <strong>revêtue ou non</strong>. Elle comprend deux grandes parties : <strong>la chaussée</strong> et <strong>les accotements</strong> (les trottoirs en ville).</p>
<figure>
<svg viewBox="0 0 700 230" role="img" aria-label="Coupe d'une route">
 <rect width="700" height="230" fill="#EDEFF2"/>
 <rect x="0" y="60" width="700" height="110" fill="#3A3F46"/>
 <rect x="0" y="60" width="70" height="110" fill="#9C8B6E"/>
 <rect x="630" y="60" width="70" height="110" fill="#9C8B6E"/>
 <rect x="70" y="62" width="5" height="106" fill="#fff"/><rect x="625" y="62" width="5" height="106" fill="#fff"/>
 <g stroke="#fff" stroke-width="4" stroke-dasharray="20 18"><path d="M75 115h550"/></g>
 <g font-family="Arial Narrow, Arial, sans-serif" font-size="12.5" fill="#171A1F">
  <text x="8" y="52">ACCOTEMENT</text><text x="8" y="192">bas-côté / trottoir</text>
  <text x="300" y="52" font-weight="bold">CHAUSSÉE</text>
  <text x="120" y="192">ligne de rive</text>
  <text x="330" y="192">ligne axiale</text>
  <text x="596" y="52">ACCOTEMENT</text>
  <text x="250" y="216" fill="#5C636D">Chaussée = partie réservée à la circulation des véhicules · Voie = subdivision de la chaussée</text>
 </g>
</svg>
<figcaption>Figure 6.1 — Vocabulaire de la route</figcaption>
</figure>
<ul>
<li><strong>La chaussée</strong> : partie de la route recouverte d'un revêtement spécial et <strong>réservée à la circulation des véhicules</strong>. Elle peut être subdivisée en voies par des lignes blanches continues ou discontinues.</li>
<li><strong>La voie</strong> : subdivision de la chaussée, assez large pour une file de véhicules circulant dans un même sens.</li>
<li><strong>Les accotements</strong> : situés de chaque côté de la chaussée, ils sont moins aménagés qu'elle. Ils <strong>permettent le stationnement</strong> des véhicules mais sont <strong>interdits à la circulation</strong>.</li>
<li><strong>Le terre-plein central</strong> : séparateur entre les deux sens de circulation sur une chaussée séparée.</li>
<li><strong>La bande d'arrêt d'urgence (BAU)</strong> : bande revêtue à droite des autoroutes et voies express, réservée aux arrêts d'urgence et aux véhicules de secours.</li>
<li><strong>Le trottoir</strong> : en ville, les accotements sont aménagés pour la circulation des piétons : ce sont les trottoirs.</li>
</ul>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 320 190" aria-hidden="true"><rect width="320" height="190" fill="#EDEFF2"/><rect x="0" y="0" width="56" height="150" fill="#C9CDD4"/><rect x="264" y="0" width="56" height="150" fill="#C9CDD4"/><rect x="56" width="88" height="150" fill="#3A3F46"/><rect x="176" width="88" height="150" fill="#3A3F46"/><rect x="144" width="32" height="150" fill="#8FA98C"/><path d="M100 0v150M220 0v150" stroke="#fff" stroke-width="2.5" stroke-dasharray="12 10"/><use href="#car-s" x="68" y="36" width="24" height="46" color="#D2202F"/><use href="#car-n" x="228" y="60" width="24" height="46" color="#0B5FA5"/><use href="#p-person" x="18" y="60" width="20" height="46" color="#5C636D"/><g font-size="14" fill="#171A1F" text-anchor="middle" font-weight="bold"><text x="28" y="172">trottoir</text><text x="100" y="172">chaussée</text><text x="160" y="172">terre-plein</text><text x="220" y="172">chaussée</text><text x="292" y="172">trottoir</text></g></svg><b>En ville</b><span>Chaussée et trottoirs, parfois avec un terre-plein central</span></div>
 <div class="scene"><svg viewBox="0 0 320 190" aria-hidden="true"><rect width="320" height="190" fill="#EDEFF2"/><rect width="320" height="150" fill="#3A3F46"/><rect x="146" width="28" height="150" fill="#8FA98C"/><path d="M28 0v150M292 0v150" stroke="#fff" stroke-width="3"/><path d="M87 0v150M233 0v150" stroke="#fff" stroke-width="2.5" stroke-dasharray="12 10"/><path d="M146 0v150M174 0v150" stroke="#C9CDD4" stroke-width="4"/><use href="#car-s" x="96" y="20" width="24" height="46" color="#D2202F"/><use href="#car-n" x="244" y="70" width="24" height="46" color="#0B5FA5"/><use href="#car-n" x="296" y="96" width="20" height="38" color="#5C636D"/><g font-size="14" fill="#171A1F" text-anchor="middle" font-weight="bold"><text x="16" y="172">BAU</text><text x="87" y="172">2 voies</text><text x="160" y="172">terre-plein</text><text x="233" y="172">2 voies</text><text x="304" y="172">BAU</text></g></svg><b>Sur autoroute</b><span>Deux chaussées séparées, bandes d'arrêt d'urgence à droite</span></div>
</div>
<figcaption>Figure 6.2 — Les parties de la route, vues du dessus</figcaption>
</figure>
<p>Ainsi, en ville, la route comprend soit <strong>la chaussée et les trottoirs</strong>, soit <strong>la chaussée, un terre-plein central et les trottoirs</strong>.</p>
<ul>
<li><strong>La route pour automobiles</strong> : passage spécialement aménagé et ouvert à la circulation des <strong>véhicules à moteur, à l'exception des cyclomoteurs</strong>. Elle est composée de <strong>deux chaussées séparées</strong> par des glissières de sécurité ou un terre-plein central et <strong>peut avoir des intersections</strong>.</li>
<li><strong>L'autoroute</strong> : route à deux chaussées séparées par un terre-plein central, réservée à la <strong>circulation rapide des véhicules à moteur</strong>. Elle <strong>ne comporte pas d'intersections</strong>. La vitesse y est réglementée par l'administration.</li>
</ul>

<h3>6.2 Les trois types de voies</h3>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><use href="#bg-carrefour" width="240" height="170"/><use href="#car-e" x="30" y="90" width="42" height="22" color="#0B5FA5"/><use href="#car-w" x="170" y="58" width="42" height="22" color="#D2202F"/><use href="#p-person" x="170" y="118" width="18" height="42" color="#5C636D"/></svg><b>Route ordinaire</b><span>Double sens, carrefours à niveau, tous usagers</span></div>
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><rect width="240" height="170" fill="#EDEFF2"/><rect x="100" y="0" width="40" height="170" fill="#3A3F46"/><rect y="28" width="240" height="46" fill="#3A3F46"/><rect y="96" width="240" height="46" fill="#3A3F46"/><path d="M0 85h100M140 85h100" stroke="#C9CDD4" stroke-width="10"/><use href="#car-w" x="176" y="40" width="42" height="22" color="#D2202F"/><use href="#car-e" x="22" y="108" width="42" height="22" color="#0B5FA5"/></svg><b>Route pour automobiles</b><span>Deux chaussées séparées, mais elle peut avoir des intersections</span></div>
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><rect width="240" height="170" fill="#EDEFF2"/><rect y="28" width="240" height="46" fill="#3A3F46"/><rect y="96" width="240" height="46" fill="#3A3F46"/><rect y="74" width="240" height="22" fill="#8FA98C"/><rect x="100" width="40" height="170" fill="#6A6F76" stroke="#EDEFF2" stroke-width="3"/><use href="#car-s" x="110" y="10" width="20" height="38" color="#5C636D"/><use href="#car-w" x="176" y="40" width="42" height="22" color="#D2202F"/><use href="#car-e" x="22" y="108" width="42" height="22" color="#0B5FA5"/></svg><b>Autoroute</b><span>Aucun croisement à niveau : un pont passe au-dessus</span></div>
</div>
<figcaption>Figure 6.3 — Trois routes, trois profils</figcaption>
</figure>
<div class="table-scroll"><table>
<thead><tr><th></th><th>Route ordinaire</th><th>Route pour automobiles</th><th>Autoroute</th></tr></thead>
<tbody>
<tr><td><strong>Panneau d'entrée</strong></td><td>Aucun</td><td>Carré bleu à voiture blanche</td><td>Carré bleu à autoroute (deux chaussées et un pont)</td></tr>
<tr><td><strong>Sens de circulation</strong></td><td>Souvent double sens sur une même chaussée</td><td>Deux chaussées séparées par des glissières ou un terre-plein</td><td>Chaussées <strong>toujours</strong> séparées par un terre-plein</td></tr>
<tr><td><strong>Croisements</strong></td><td>Carrefours à niveau, entrées riveraines</td><td>Peut comporter des intersections</td><td><strong>Aucun croisement à niveau</strong> : uniquement des échangeurs</td></tr>
<tr><td><strong>Accès</strong></td><td>Tous usagers autorisés</td><td>Véhicules à moteur, sauf les cyclomoteurs</td><td>Interdite aux véhicules qui ne peuvent pas atteindre 60 km/h (manuel DGTT, Q419), aux piétons, cyclistes, cyclomoteurs, cavaliers et véhicules agricoles</td></tr>
<tr><td><strong>Vitesse maximale</strong></td><td><ValeurBenin k="vitesse_hors_agglomeration" /></td><td><ValeurBenin k="vitesse_voie_express" /></td><td><ValeurBenin k="vitesse_autoroute" /></td></tr>
<tr><td><strong>Signalisation directionnelle</strong></td><td>Panneaux <strong>bleus</strong> pour les itinéraires reliant des villes importantes (Q162), blancs pour les routes locales ; fond jaune = direction provisoire (Q189)</td><td>Panneaux bleus ou verts</td><td>Panneaux <strong>bleus</strong></td></tr>
<tr><td><strong>BAU</strong></td><td>Non</td><td>Parfois</td><td>Oui</td></tr>
</tbody>
</table></div>

<h3>6.3 L'autoroute : entrer, circuler, sortir</h3>
<h4>L'insertion</h4>
<ol>
<li>Sur la <strong>bretelle d'accès</strong>, j'observe le trafic à ma gauche.</li>
<li>On accède à l'autoroute par la <strong>voie d'accès</strong> puis la <strong>voie d'accélération</strong>, qui permet d'atteindre la vitesse autorisée sur autoroute : j'y accélère pour atteindre la vitesse du flux.</li>
<li>Je mets le <strong>clignotant gauche</strong>, je contrôle le rétroviseur puis l'<strong>angle mort</strong>.</li>
<li>Je m'insère dans un espace suffisant. <strong>Je n'ai pas la priorité</strong> : ce sont les véhicules déjà sur l'autoroute qui l'ont. Ceux-ci doivent toutefois faciliter mon insertion en se déportant si possible sur la voie de gauche.</li>
<li>Ne jamais s'arrêter en bout de voie d'accélération, sauf impossibilité absolue de s'insérer.</li>
</ol>
<figure>
<svg class="fig-large" viewBox="0 0 600 240" role="img" aria-label="Insertion sur autoroute : bretelle d'accès, voie d'accélération, clignotant gauche et contrôle, puis insertion dans un espace libre">
 <rect width="600" height="240" fill="#EDEFF2"/>
 <rect y="30" width="600" height="84" fill="#3A3F46"/><path d="M0 72h600" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/>
 <path d="M0 114h600" stroke="#fff" stroke-width="3" stroke-dasharray="26 8"/>
 <path d="M40 240Q50 134 180 134H390L470 112" fill="none" stroke="#3A3F46" stroke-width="36"/>
 <use href="#car-e" x="160" y="122" width="52" height="24" color="#0B5FA5" opacity=".55"/>
 <use href="#car-e" x="290" y="122" width="52" height="24" color="#0B5FA5"/><circle cx="294" cy="125" r="3.5" fill="#F5B301"/>
 <use href="#car-e" x="430" y="80" width="52" height="24" color="#0B5FA5"/>
 <path d="M346 132q40-2 80-24" fill="none" stroke="#F5B301" stroke-width="3" marker-end="url(#m-a)"/>
 <use href="#car-e" x="120" y="80" width="52" height="24" color="#D2202F"/><use href="#car-e" x="530" y="80" width="52" height="24" color="#D2202F"/>
 <g font-weight="bold" font-size="14" fill="#fff" text-anchor="middle"><circle cx="38" cy="196" r="12" fill="#0B5FA5"/><text x="38" y="201">1</text><circle cx="186" cy="168" r="12" fill="#0B5FA5"/><text x="186" y="173">2</text><circle cx="316" cy="168" r="12" fill="#0B5FA5"/><text x="316" y="173">3</text><circle cx="456" cy="68" r="12" fill="#0B5FA5"/><text x="456" y="73">4</text></g>
 <g font-size="15" fill="#171A1F"><text x="82" y="222">1 Bretelle : j'observe à gauche</text><text x="340" y="176">2 Voie d'accélération : je prends la vitesse</text><text x="340" y="198">3 Clignotant gauche, rétroviseur, angle mort</text><text x="340" y="220">4 Je m'insère dans un espace suffisant</text></g>
 <text x="300" y="20" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">Je n'ai pas la priorité : ceux qui sont déjà sur l'autoroute l'ont</text>
</svg>
<figcaption>Figure 6.4 — L'insertion, étape par étape</figcaption>
</figure>
<h4>La circulation</h4>
<ul>
<li>Je circule <strong>sur la voie la plus à droite</strong> disponible ; les voies de gauche servent uniquement au dépassement.</li>
<li>Je respecte les distances de sécurité (repères d'espacement en losanges sur certaines autoroutes).</li>
<li>Je surveille ma fatigue : <strong>une pause toutes les deux heures</strong>, sur une aire de repos ou de service.</li>
</ul>
<h4>La sortie</h4>
<ol>
<li>Panneaux de présignalisation à 1000 m puis 500 m.</li>
<li>Clignotant droit, puis passage sur la <strong>voie de décélération</strong> : c'est là — et pas avant — que je ralentis.</li>
<li>Attention au « choc des vitesses » : après une heure à 120 km/h, 60 km/h paraissent lents. Regarde le compteur en sortie.</li>
</ol>

<figure>
<svg class="fig-large" viewBox="0 0 600 190" role="img" aria-label="Sortie d'autoroute : panneaux à 1000 m puis 500 m, clignotant droit, on ne ralentit que sur la voie de décélération">
 <rect width="600" height="190" fill="#EDEFF2"/>
 <rect y="20" width="600" height="84" fill="#3A3F46"/><path d="M0 62h600" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/><path d="M0 104h600" stroke="#fff" stroke-width="3" stroke-dasharray="26 8"/>
 <path d="M300 104h130q90 4 130 86h-50q-30-50-90-52H380z" fill="#3A3F46"/>
 <use href="#car-e" x="60" y="70" width="52" height="24" color="#0B5FA5"/><path d="M116 82h170q50 0 90 28" fill="none" stroke="#F5B301" stroke-width="3" marker-end="url(#m-a)"/>
 <use href="#car-e" x="396" y="110" width="44" height="22" color="#0B5FA5"/>
 <rect x="90" y="112" width="58" height="26" fill="#0B5FA5"/><text x="119" y="130" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">1000 m</text>
 <rect x="210" y="112" width="52" height="26" fill="#0B5FA5"/><text x="236" y="130" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">500 m</text>
 <g font-size="15" fill="#171A1F"><text x="20" y="162">Clignotant droit, puis voie de décélération :</text><text x="20" y="182" font-weight="bold">c'est là, et pas avant, que je ralentis.</text></g>
</svg>
<figcaption>Figure 6.5 — Sortir de l'autoroute</figcaption>
</figure>

<h3>6.4 Ce qui est interdit sur autoroute</h3>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#3A3F46"/><path d="M0 65h220" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/><use href="#car-e" x="96" y="74" width="60" height="30" color="#5C636D"/><path d="M90 89H36" stroke="#D2202F" stroke-width="4" marker-end="url(#m-r)"/><use href="#o-no" x="6" y="6" width="30" height="30"/></svg><b>Marche arrière</b></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#3A3F46"/><rect y="52" width="220" height="26" fill="#8FA98C"/><path d="M60 104h60q30 0 30-40 0-38-30-38H70" fill="none" stroke="#D2202F" stroke-width="4" marker-end="url(#m-r)"/><use href="#car-e" x="8" y="90" width="52" height="26" color="#5C636D"/><use href="#o-no" x="6" y="6" width="30" height="30"/></svg><b>Demi-tour, traversée du terre-plein</b></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#3A3F46"/><path d="M0 65h220" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/><use href="#p-person" x="70" y="30" width="30" height="70" color="#F5B301"/><use href="#moto-e" x="120" y="74" width="66" height="24" color="#D2202F"/><use href="#o-no" x="6" y="6" width="30" height="30"/></svg><b>Piétons, cyclomoteurs, animaux</b></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#EDEFF2"/><rect y="84" width="220" height="46" fill="#3A3F46"/><use href="#p-person" x="60" y="26" width="28" height="64" color="#0B5FA5"/><path d="M88 48l28-12" stroke="#0B5FA5" stroke-width="6" stroke-linecap="round"/><path d="M116 36v-10" stroke="#8D5A3B" stroke-width="6" stroke-linecap="round"/><use href="#o-no" x="6" y="6" width="30" height="30"/></svg><b>Auto-stop</b></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#3A3F46"/><path d="M0 92h220" stroke="#fff" stroke-width="3" stroke-dasharray="26 8"/><path d="M0 40h220" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/><use href="#car-e" x="80" y="98" width="52" height="26" color="#5C636D"/><path d="M136 111h44" stroke="#D2202F" stroke-width="4" marker-end="url(#m-r)"/><use href="#o-no" x="6" y="6" width="30" height="30"/></svg><b>Rouler sur la bande d'arrêt d'urgence</b></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#3A3F46"/><path d="M0 65h220" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/><use href="#car-e" x="118" y="72" width="60" height="30" color="#5C636D"/><use href="#car-e" x="20" y="72" width="60" height="30" color="#0B5FA5"/><path d="M84 98q30 24 90 12" fill="none" stroke="#D2202F" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#m-r)"/><use href="#o-no" x="6" y="6" width="30" height="30"/></svg><b>Dépasser par la droite</b></div>
</div>
<figcaption>Figure 6.6 — Les interdictions propres à l'autoroute</figcaption>
</figure>
<ul>
<li>La <strong>marche arrière</strong> et le <strong>demi-tour</strong>, y compris sur le terre-plein.</li>
<li>L'<strong>arrêt et le stationnement</strong> sur la chaussée et sur la BAU (sauf urgence).</li>
<li>La circulation des <strong>piétons</strong>, des animaux, des cyclistes, des cyclomoteurs et des engins agricoles.</li>
<li>L'<strong>auto-stop</strong>, y compris sur les bretelles.</li>
<li>La traversée du <strong>terre-plein central</strong>.</li>
<li>La <strong>circulation sur la bande d'arrêt d'urgence</strong>.</li>
<li>Le dépassement par la droite.</li>
</ul>
<p><strong>La bande d'arrêt d'urgence</strong> s'utilise en cas de <strong>panne</strong> ou de <strong>malaise</strong> du conducteur ou d'un passager, en faisant usage des <strong>feux de détresse</strong>. La circulation y est toutefois autorisée à certains véhicules : les <strong>véhicules prioritaires</strong>, les <strong>ambulances</strong> transportant un blessé en urgence et les véhicules des <strong>services d'entretien</strong>.</p>
<h4>Où se garer sur l'autoroute ?</h4>
<p>L'<strong>arrêt et le stationnement sont interdits</strong> sur l'autoroute. En cas d'<strong>ennui mécanique</strong> ou de <strong>panne de carburant</strong>, on se gare sur la <strong>bande d'arrêt d'urgence</strong>, puis on va <strong>à pied jusqu'au prochain poste téléphonique</strong> (borne d'appel) pour appeler les services d'entretien de l'autoroute. On peut aussi se garer sur une <strong>aire de repos</strong>.</p>

<h3>6.5 En cas de panne ou d'accident</h3>
<AttentionBox label="Procédure vitale">
<strong>1.</strong> Je me range le plus à droite possible sur la BAU, roues braquées à droite. <strong>2.</strong> J'allume les <strong>feux de détresse</strong>. <strong>3.</strong> J'enfile le <strong>gilet rétroréfléchissant</strong> <em>avant</em> de sortir. <strong>4.</strong> Je fais sortir tous les passagers <strong>par le côté droit</strong>. <strong>5.</strong> Nous nous mettons <strong>derrière la glissière de sécurité</strong>, jamais devant ni dans le véhicule. <strong>6.</strong> Je place le <strong>triangle de présignalisation</strong> à au moins 30 m (si cela est possible sans danger — jamais sur autoroute à fort trafic). <strong>7.</strong> J'appelle les secours ou j'utilise la borne d'appel d'urgence orange, située tous les 2 km.
</AttentionBox>
<figure>
<svg class="fig-large" viewBox="0 0 600 240" role="img" aria-label="Panne sur autoroute : la voiture sur la bande d'arrêt d'urgence, feux de détresse allumés, les passagers derrière la glissière, le triangle à 30 mètres en amont, la borne d'appel plus loin">
 <rect width="600" height="240" fill="#E4EADF"/>
 <rect y="10" width="600" height="88" fill="#3A3F46"/><path d="M0 54h600" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/><path d="M0 98h600" stroke="#fff" stroke-width="3"/>
 <rect y="98" width="600" height="42" fill="#5A5F66"/>
 <path d="M0 148h600" stroke="#8A9099" stroke-width="6"/><path d="M30 142v12M90 142v12M150 142v12M210 142v12M270 142v12M330 142v12M390 142v12M450 142v12M510 142v12M570 142v12" stroke="#5C636D" stroke-width="3"/>
 <use href="#car-e" x="350" y="104" width="62" height="30" color="#0B5FA5"/>
 <circle cx="352" cy="108" r="4" fill="#F5B301"/><circle cx="352" cy="130" r="4" fill="#F5B301"/><circle cx="410" cy="108" r="4" fill="#F5B301"/><circle cx="410" cy="130" r="4" fill="#F5B301"/>
 <use href="#o-triangle" x="150" y="106" width="30" height="27"/>
 <path d="M165 88v8M165 92h213M378 88v8" stroke="#F5B301" stroke-width="2.5"/><text x="270" y="84" font-size="16" font-weight="bold" fill="#F5B301" text-anchor="middle">30 m au moins, si c'est sans danger</text>
 <use href="#p-person" x="344" y="158" width="18" height="42" color="#0B5FA5"/><use href="#p-person" x="366" y="158" width="18" height="42" color="#D2202F"/><use href="#p-person" x="388" y="158" width="18" height="42" color="#1B7F5A"/>
 <path d="M384 136v14" stroke="#0B5FA5" stroke-width="3" marker-end="url(#m-b)"/>
 <rect x="510" y="160" width="22" height="42" rx="3" fill="#E87722"/><rect x="514" y="165" width="14" height="10" fill="#fff"/>
 <use href="#car-e" x="40" y="60" width="62" height="30" color="#5C636D"/><path d="M106 75h34" stroke="#fff" stroke-width="3" marker-end="url(#m-w)"/>
 <g font-size="15" fill="#171A1F"><text x="20" y="175" font-weight="bold">Bande d'arrêt d'urgence :</text><text x="20" y="195">feux de détresse, gilet, sortie à droite</text><text x="330" y="222" font-weight="bold">Tout le monde derrière la glissière</text></g>
 <text x="540" y="182" font-size="15" font-weight="bold" fill="#171A1F">borne</text>
</svg>
<figcaption>Figure 6.7 — La bonne position en cas de panne</figcaption>
</figure>

<QcmBlock title="QCM — Chapitre 6" :questions="questions" />
</section>
</template>
