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

<h4>3. Secourir</h4>
<p>En attendant l'arrivée des secours, il faut <strong>assister les blessés sans risquer d'aggraver leur état</strong>.</p>
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

<h4>Les autres blessures fréquentes</h4>
<ul>
<li><strong>Fracture</strong> : l'os se casse. <strong>Fracture fermée</strong> : l'os cassé ne prend pas contact avec l'extérieur. <strong>Fracture ouverte</strong> : l'os cassé prend contact avec l'extérieur (il y a donc saignement).</li>
<li><strong>Entorse</strong> : les ligaments s'étirent ou se déchirent, mais l'os ne se casse pas et l'articulation ne se déboîte pas.</li>
<li><strong>Luxation</strong> : les ligaments se déchirent, l'articulation est déboîtée et les surfaces articulaires ne sont plus en contact.</li>
</ul>

<h4>Quelques notions techniques</h4>
<ul>
<li><strong>On ne déplace pas un blessé.</strong> S'il est absolument nécessaire de le faire à cause d'un danger imminent (incendie, immersion), il faut le faire avec précaution en maintenant le bloc <strong>tête-cou-tronc</strong> rigide.</li>
<li>La <strong>position latérale de sécurité (PLS)</strong> consiste à placer le blessé <strong>couché sur le côté, le genou supérieur fléchi</strong>. Elle évite la <strong>chute de la langue en arrière</strong>, l'<strong>encombrement des voies respiratoires</strong> par le sang, les vomissements et les mucosités.</li>
<li><strong>Acide de batterie dans l'œil</strong> : rincer l'œil pendant <strong>au moins 10 minutes</strong> à l'eau courante, mettre une compresse sur l'œil et évacuer vers un ophtalmologiste.</li>
<li><strong>Brûlure par le feu</strong> : empêcher la victime de <strong>courir</strong>, la <strong>couvrir</strong> et l'évacuer vers un centre médical.</li>
<li><strong>Brûlure par un liquide brûlant ou par la vapeur</strong> : <strong>déshabiller</strong> la victime, la <strong>doucher</strong> et l'évacuer vers un centre médical.</li>
</ul>

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
