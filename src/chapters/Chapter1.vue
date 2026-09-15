<script setup>
import MemoBox from '../components/MemoBox.vue'
import AttentionBox from '../components/AttentionBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import questions from '../data/questions/ch1.json'
</script>

<template>
<section class="chap" id="ch1">
<div class="chap-head">
  <span class="borne">01</span>
  <div><span class="fil">Chapitre 1</span><h2>Les signalisations routières</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Identifier les quatre familles de signalisation, connaître l'ordre de priorité entre elles, lire les feux et les marquages au sol, comprendre les gestes de l'agent et la signalisation temporaire.</p>

<h3>1.1 Définition et rôle</h3>
<p>La <strong>signalisation routière</strong> est l'ensemble des signaux (panneaux, marques, feux, gestes) placés sur la route ou à ses abords pour <strong>informer</strong>, <strong>guider</strong>, <strong>avertir</strong> et <strong>ordonner</strong> aux usagers un comportement précis. Elle est le langage commun de la route : tous les usagers, quelle que soit leur langue, doivent la comprendre de la même manière.</p>
<p>Elle poursuit trois buts : la <strong>sécurité</strong> (éviter les accidents), la <strong>fluidité</strong> (organiser la circulation) et le <strong>confort</strong> (informer sur les distances, les services, les directions).</p>

<h3>1.2 Les quatre familles de signalisation</h3>
<div class="table-scroll"><table>
<thead><tr><th>Famille</th><th>Support</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td><strong>Signalisation par agent</strong></td><td>Gestes d'un agent de la circulation (police, gendarmerie)</td><td>Bras levé verticalement, bras tendu horizontalement</td></tr>
<tr><td><strong>Signalisation lumineuse</strong></td><td>Feux tricolores, feux clignotants, flèches lumineuses</td><td>Feu rouge, jaune, vert, feu jaune clignotant</td></tr>
<tr><td><strong>Signalisation verticale</strong></td><td>Panneaux fixés sur poteaux, portiques ou murs</td><td>STOP, Cédez le passage, sens interdit</td></tr>
<tr><td><strong>Signalisation horizontale</strong></td><td>Marquages peints sur la chaussée</td><td>Ligne continue, passage piétons, flèches de rabattement</td></tr>
</tbody>
</table></div>

<h4>La hiérarchie : qui commande à qui ?</h4>
<p>Quand deux signalisations se contredisent, il faut savoir laquelle obéir. L'ordre est <strong>toujours</strong> le même :</p>

<figure>
<svg viewBox="0 0 720 150" role="img" aria-label="Hiérarchie de la signalisation">
  <g font-family="Arial Narrow, Arial, sans-serif" text-anchor="middle">
    <rect x="6" y="40" width="126" height="62" rx="3" fill="#171A1F"/>
    <text x="69" y="66" fill="#F5B301" font-size="15" font-weight="bold">1. AGENT</text>
    <text x="69" y="87" fill="#fff" font-size="12">ses gestes</text>
    <path d="M138 71h26" stroke="#171A1F" stroke-width="3"/><path d="M164 71l-9-6v12z" fill="#171A1F"/>
    <rect x="170" y="40" width="126" height="62" rx="3" fill="#2C3138"/>
    <text x="233" y="66" fill="#fff" font-size="15" font-weight="bold">2. FEUX</text>
    <text x="233" y="87" fill="#C9CDD4" font-size="12">tricolores</text>
    <path d="M302 71h26" stroke="#171A1F" stroke-width="3"/><path d="M328 71l-9-6v12z" fill="#171A1F"/>
    <rect x="334" y="40" width="126" height="62" rx="3" fill="#0B5FA5"/>
    <text x="397" y="66" fill="#fff" font-size="15" font-weight="bold">3. PANNEAUX</text>
    <text x="397" y="87" fill="#BBD8F1" font-size="12">verticaux</text>
    <path d="M466 71h26" stroke="#171A1F" stroke-width="3"/><path d="M492 71l-9-6v12z" fill="#171A1F"/>
    <rect x="498" y="40" width="126" height="62" rx="3" fill="#5C636D"/>
    <text x="561" y="66" fill="#fff" font-size="15" font-weight="bold">4. MARQUAGE</text>
    <text x="561" y="87" fill="#E6E8EB" font-size="12">au sol</text>
    <path d="M630 71h26" stroke="#171A1F" stroke-width="3"/><path d="M656 71l-9-6v12z" fill="#171A1F"/>
    <rect x="662" y="40" width="52" height="62" rx="3" fill="#fff" stroke="#171A1F" stroke-width="2"/>
    <text x="688" y="66" fill="#171A1F" font-size="13" font-weight="bold">5. RÈGLE</text>
    <text x="688" y="86" fill="#171A1F" font-size="11">générale</text>
    <text x="360" y="22" font-size="14" fill="#171A1F" font-weight="bold" letter-spacing="2">ORDRE DE PRIORITÉ DES SIGNALISATIONS</text>
    <text x="360" y="130" font-size="12.5" fill="#5C636D">Le signal de gauche annule toujours celui de droite.</text>
  </g>
</svg>
<figcaption>Figure 1.1 — La chaîne de commandement de la signalisation</figcaption>
</figure>

<div class="exemple"><span class="lab">Exemple concret</span>
Tu arrives à un carrefour : le feu est <strong>vert</strong>, mais un agent de police, face à toi, lève le bras verticalement. Que fais-tu ? <strong>Tu t'arrêtes.</strong> L'agent est au-dessus du feu dans la hiérarchie. Passer au vert serait ici une infraction.</div>

<h3>1.3 Les gestes de l'agent de la circulation</h3>
<div class="table-scroll"><table>
<thead><tr><th>Geste</th><th>Signification</th><th>Qui est concerné</th></tr></thead>
<tbody>
<tr><td>Bras levé verticalement</td><td>Arrêt imminent pour tous — équivaut au feu jaune fixe</td><td>Tous les usagers, de toutes les directions</td></tr>
<tr><td>Bras tendu horizontalement (un ou deux)</td><td>Arrêt obligatoire</td><td>Les usagers vers qui la poitrine ou le dos de l'agent est tourné</td></tr>
<tr><td>Agent vu de profil (bras baissés)</td><td>Voie libre : tu peux passer</td><td>Les usagers qui voient l'agent de côté</td></tr>
<tr><td>Balancement d'un bras d'avant en arrière</td><td>Ordre d'avancer, de dégager le carrefour</td><td>L'usager désigné</td></tr>
<tr><td>Bras qui s'agite de haut en bas</td><td>Ordre de ralentir</td><td>L'usager désigné</td></tr>
</tbody>
</table></div>
<MemoBox label="À retenir">
Face ou dos de l'agent = <strong>je m'arrête</strong>. Profil de l'agent = <strong>je passe</strong>. La nuit, l'agent utilise un bâton lumineux ou un sifflet : le sifflet à coups brefs et répétés annonce toujours un ordre d'arrêt.
</MemoBox>

<h3>1.4 La signalisation lumineuse</h3>
<figure>
<svg viewBox="0 0 620 200" role="img" aria-label="Les feux tricolores">
 <g font-family="Arial Narrow, Arial, sans-serif" text-anchor="middle">
  <rect x="20" y="16" width="60" height="150" rx="8" fill="#171A1F"/>
  <circle cx="50" cy="46" r="19" fill="#D2202F"/><circle cx="50" cy="91" r="19" fill="#3A3F46"/><circle cx="50" cy="136" r="19" fill="#3A3F46"/>
  <text x="50" y="186" font-size="13" fill="#171A1F" font-weight="bold">ROUGE</text>
  <rect x="170" y="16" width="60" height="150" rx="8" fill="#171A1F"/>
  <circle cx="200" cy="46" r="19" fill="#3A3F46"/><circle cx="200" cy="91" r="19" fill="#F5B301"/><circle cx="200" cy="136" r="19" fill="#3A3F46"/>
  <text x="200" y="186" font-size="13" fill="#171A1F" font-weight="bold">JAUNE</text>
  <rect x="320" y="16" width="60" height="150" rx="8" fill="#171A1F"/>
  <circle cx="350" cy="46" r="19" fill="#3A3F46"/><circle cx="350" cy="91" r="19" fill="#3A3F46"/><circle cx="350" cy="136" r="19" fill="#1B7F5A"/>
  <text x="350" y="186" font-size="13" fill="#171A1F" font-weight="bold">VERT</text>
  <rect x="470" y="46" width="60" height="60" rx="8" fill="#171A1F"/>
  <circle cx="500" cy="76" r="19" fill="#F5B301" stroke="#fff" stroke-width="2" stroke-dasharray="5 5"/>
  <text x="500" y="126" font-size="13" fill="#171A1F" font-weight="bold">JAUNE</text>
  <text x="500" y="142" font-size="13" fill="#171A1F" font-weight="bold">CLIGNOTANT</text>
  <text x="500" y="176" font-size="11.5" fill="#5C636D">prudence,</text>
  <text x="500" y="190" font-size="11.5" fill="#5C636D">priorité à droite</text>
 </g>
</svg>
<figcaption>Figure 1.2 — Le cycle des feux tricolores</figcaption>
</figure>
<ul>
<li><strong>Feu vert</strong> : le passage est autorisé, à condition que le carrefour soit dégagé. Le vert ne donne <em>jamais</em> le droit de bloquer une intersection.</li>
<li><strong>Feu jaune fixe</strong> : arrêt obligatoire, sauf si le véhicule est trop engagé pour s'arrêter sans danger (risque de choc arrière).</li>
<li><strong>Feu rouge fixe</strong> : arrêt absolu à la hauteur de la ligne d'effet du feu ou avant le passage piétons. Le franchissement d'un feu rouge est l'une des infractions les plus lourdement sanctionnées.</li>
<li><strong>Feu jaune clignotant</strong> : le carrefour n'est plus régulé ; on applique la signalisation en place, à défaut la priorité à droite.</li>
<li><strong>Feu rouge clignotant</strong> : arrêt absolu — il signale un passage à niveau, un pont mobile ou une sortie de véhicules de secours.</li>
<li><strong>Flèches lumineuses</strong> : un feu vert en forme de flèche n'autorise que la direction indiquée, et impose de céder le passage aux piétons.</li>
<li><strong>Feux piétons</strong> : silhouette rouge = interdiction de traverser ; silhouette verte = traversée autorisée.</li>
</ul>
<AttentionBox label="Erreur classique">
Le feu vert n'est <strong>pas</strong> une priorité absolue : il faut toujours laisser dégager les véhicules encore engagés, les piétons attardés et céder le passage aux véhicules prioritaires en mission (ambulance, pompiers, police) même quand ils arrivent au rouge.
</AttentionBox>

<h3>1.5 La signalisation horizontale (marquage au sol)</h3>
<p>Le marquage est <strong>blanc</strong> pour la circulation permanente et <strong>jaune</strong> pour la signalisation temporaire ou les interdictions d'arrêt.</p>
<figure>
<svg viewBox="0 0 660 230" role="img" aria-label="Types de lignes au sol">
 <g font-family="Arial Narrow, Arial, sans-serif">
  <rect x="10" y="16" width="640" height="40" fill="#3A3F46"/>
  <rect x="10" y="34" width="640" height="4" fill="#fff"/>
  <text x="10" y="72" font-size="13.5" fill="#171A1F" font-weight="bold">LIGNE CONTINUE — franchissement et chevauchement interdits</text>
  <rect x="10" y="86" width="640" height="40" fill="#3A3F46"/>
  <g fill="#fff"><rect x="20" y="104" width="40" height="4"/><rect x="90" y="104" width="40" height="4"/><rect x="160" y="104" width="40" height="4"/><rect x="230" y="104" width="40" height="4"/><rect x="300" y="104" width="40" height="4"/><rect x="370" y="104" width="40" height="4"/><rect x="440" y="104" width="40" height="4"/><rect x="510" y="104" width="40" height="4"/><rect x="580" y="104" width="40" height="4"/></g>
  <text x="10" y="142" font-size="13.5" fill="#171A1F" font-weight="bold">LIGNE DISCONTINUE — franchissement autorisé pour dépasser ou tourner</text>
  <rect x="10" y="156" width="640" height="42" fill="#3A3F46"/>
  <rect x="10" y="172" width="640" height="4" fill="#fff"/>
  <g fill="#fff"><rect x="20" y="180" width="40" height="4"/><rect x="90" y="180" width="40" height="4"/><rect x="160" y="180" width="40" height="4"/><rect x="230" y="180" width="40" height="4"/><rect x="300" y="180" width="40" height="4"/><rect x="370" y="180" width="40" height="4"/><rect x="440" y="180" width="40" height="4"/><rect x="510" y="180" width="40" height="4"/><rect x="580" y="180" width="40" height="4"/></g>
  <text x="10" y="216" font-size="13.5" fill="#171A1F" font-weight="bold">LIGNE MIXTE — j'obéis à la ligne située de mon côté</text>
 </g>
</svg>
<figcaption>Figure 1.3 — Les trois lignes axiales fondamentales</figcaption>
</figure>
<ul>
<li><strong>Ligne continue</strong> : interdiction absolue de la franchir ou de la chevaucher, dans les deux sens. Elle protège une zone dangereuse (virage, sommet de côte, visibilité réduite).</li>
<li><strong>Ligne discontinue axiale</strong> : franchissable pour dépasser, tourner ou contourner un obstacle.</li>
<li><strong>Ligne mixte</strong> (une continue + une discontinue) : tu obéis à la ligne la plus proche de ton véhicule. Si la discontinue est de ton côté, tu peux dépasser, à condition de te rabattre avant la fin.</li>
<li><strong>Ligne de rive</strong> (bord de chaussée) : elle délimite la chaussée de l'accotement ; discontinue à traits longs, elle signale la présence d'un accès ou d'une intersection.</li>
<li><strong>Ligne d'effet des feux ou du STOP</strong> : ligne transversale où le véhicule doit s'immobiliser.</li>
<li><strong>Zébras (hachures)</strong> : zone interdite à la circulation et au stationnement ; on ne s'y engage pas.</li>
<li><strong>Passage pour piétons</strong> : bandes blanches larges ; on ne s'y arrête jamais et on ne stationne pas dessus.</li>
<li><strong>Flèches de rabattement</strong> : elles annoncent la fin prochaine de la voie ; il faut se rabattre.</li>
</ul>

<h3>1.6 La signalisation temporaire</h3>
<p>Elle est de couleur <strong>jaune</strong> (marquage) ou à fond jaune (panneaux de chantier) et <strong>prime sur la signalisation permanente</strong>. Elle comprend : panneaux de chantier, cônes, balises, barrières, feux mobiles, et parfois un signaleur muni d'un panneau K10 (disque rouge/vert).</p>
<MemoBox label="À retenir">
Dans une zone de travaux, si le marquage jaune contredit le marquage blanc, <strong>on suit le jaune</strong>. Un panneau à fond jaune annonce toujours un danger temporaire : ralentis et augmente les distances de sécurité.
</MemoBox>

<h3>1.7 Les quatre formes de panneaux (rappel visuel)</h3>
<div class="panneaux">
 <div class="pan"><svg width="86" height="78" aria-hidden="true"><use href="#s-danger" xlink:href="#s-danger" width="86" height="78"/><path d="M43 26v26M43 58v6" stroke="#000" stroke-width="5" stroke-linecap="round" transform="translate(0,4)"/></svg>Triangle rouge<br>DANGER — avertit</div>
 <div class="pan"><svg width="80" height="80" aria-hidden="true"><use href="#s-interdit" xlink:href="#s-interdit" width="80" height="80"/><path d="M20 60 60 20" stroke="#D2202F" stroke-width="8"/></svg>Rond rouge<br>INTERDICTION</div>
 <div class="pan"><svg width="80" height="80" aria-hidden="true"><use href="#s-oblig" xlink:href="#s-oblig" width="80" height="80"/><path d="M40 60V30" stroke="#fff" stroke-width="7"/><path d="M40 20l12 16H28z" fill="#fff"/></svg>Rond bleu<br>OBLIGATION</div>
 <div class="pan"><svg width="80" height="80" aria-hidden="true"><use href="#s-indic" xlink:href="#s-indic" width="80" height="80"/><rect x="26" y="34" width="28" height="22" fill="#fff"/><rect x="34" y="40" width="12" height="16" fill="#0B5FA5"/></svg>Carré bleu<br>INDICATION</div>
</div>
<p>Ces quatre formes se retrouvent en détail au <router-link :to="{ name: 'chapitre', params: { id: '14' } }">chapitre 14</router-link>, avec le catalogue complet des panneaux.</p>

<QcmBlock title="QCM — Chapitre 1" :questions="questions" />
</section>
</template>
