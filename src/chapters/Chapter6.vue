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
<li><strong>La chaussée</strong> : partie de la route affectée à la circulation des véhicules.</li>
<li><strong>La voie</strong> : subdivision de la chaussée, de largeur suffisante pour une file de véhicules.</li>
<li><strong>L'accotement</strong> : bordure située entre la chaussée et le fossé ou le talus ; il peut être stabilisé ou meuble.</li>
<li><strong>Le terre-plein central</strong> : séparateur entre les deux sens de circulation sur une chaussée séparée.</li>
<li><strong>La bande d'arrêt d'urgence (BAU)</strong> : bande revêtue à droite des autoroutes et voies express, réservée aux arrêts d'urgence et aux véhicules de secours.</li>
<li><strong>Le trottoir</strong> : partie réservée aux piétons en agglomération.</li>
</ul>

<h3>6.2 Les trois types de voies</h3>
<div class="table-scroll"><table>
<thead><tr><th></th><th>Route ordinaire</th><th>Route pour automobiles</th><th>Autoroute</th></tr></thead>
<tbody>
<tr><td><strong>Panneau d'entrée</strong></td><td>Aucun</td><td>Carré bleu à voiture blanche</td><td>Carré bleu à autoroute (deux chaussées et un pont)</td></tr>
<tr><td><strong>Sens de circulation</strong></td><td>Souvent double sens sur une même chaussée</td><td>Chaussées le plus souvent séparées</td><td>Chaussées <strong>toujours</strong> séparées par un terre-plein</td></tr>
<tr><td><strong>Croisements</strong></td><td>Carrefours à niveau, entrées riveraines</td><td>Carrefours dénivelés ou giratoires</td><td><strong>Aucun croisement à niveau</strong> : uniquement des échangeurs</td></tr>
<tr><td><strong>Accès</strong></td><td>Tous usagers autorisés</td><td>Véhicules à moteur pouvant dépasser une vitesse minimale</td><td>Réservée aux véhicules à moteur capables d'atteindre 80 km/h en palier</td></tr>
<tr><td><strong>Vitesse maximale</strong></td><td><ValeurBenin k="vitesse_hors_agglomeration" /></td><td><ValeurBenin k="vitesse_voie_express" /></td><td><ValeurBenin k="vitesse_autoroute" /></td></tr>
<tr><td><strong>Signalisation directionnelle</strong></td><td>Panneaux blancs (routes locales) ou verts (grandes liaisons)</td><td>Panneaux bleus ou verts</td><td>Panneaux <strong>bleus</strong></td></tr>
<tr><td><strong>BAU</strong></td><td>Non</td><td>Parfois</td><td>Oui</td></tr>
</tbody>
</table></div>

<h3>6.3 L'autoroute : entrer, circuler, sortir</h3>
<h4>L'insertion</h4>
<ol>
<li>Sur la <strong>bretelle d'accès</strong>, j'observe le trafic à ma gauche.</li>
<li>Sur la <strong>voie d'accélération</strong>, j'accélère pour atteindre une vitesse proche de celle du flux.</li>
<li>Je mets le <strong>clignotant gauche</strong>, je contrôle le rétroviseur puis l'<strong>angle mort</strong>.</li>
<li>Je m'insère dans un espace suffisant. <strong>Je n'ai pas la priorité</strong> : ce sont les véhicules déjà sur l'autoroute qui l'ont. Ceux-ci doivent toutefois faciliter mon insertion en se déportant si possible sur la voie de gauche.</li>
<li>Ne jamais s'arrêter en bout de voie d'accélération, sauf impossibilité absolue de s'insérer.</li>
</ol>
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

<h3>6.4 Ce qui est interdit sur autoroute</h3>
<ul>
<li>La <strong>marche arrière</strong> et le <strong>demi-tour</strong>, y compris sur le terre-plein.</li>
<li>L'<strong>arrêt et le stationnement</strong> sur la chaussée et sur la BAU (sauf urgence).</li>
<li>La circulation des <strong>piétons</strong>, des animaux, des cyclistes, des cyclomoteurs et des engins agricoles.</li>
<li>L'<strong>auto-stop</strong>, y compris sur les bretelles.</li>
<li>Le franchissement du <strong>terre-plein central</strong>.</li>
<li>Le dépassement par la droite.</li>
</ul>

<h3>6.5 En cas de panne ou d'accident</h3>
<AttentionBox label="Procédure vitale">
<strong>1.</strong> Je me range le plus à droite possible sur la BAU, roues braquées à droite. <strong>2.</strong> J'allume les <strong>feux de détresse</strong>. <strong>3.</strong> J'enfile le <strong>gilet rétroréfléchissant</strong> <em>avant</em> de sortir. <strong>4.</strong> Je fais sortir tous les passagers <strong>par le côté droit</strong>. <strong>5.</strong> Nous nous mettons <strong>derrière la glissière de sécurité</strong>, jamais devant ni dans le véhicule. <strong>6.</strong> Je place le <strong>triangle de présignalisation</strong> à au moins 30 m (si cela est possible sans danger — jamais sur autoroute à fort trafic). <strong>7.</strong> J'appelle les secours ou j'utilise la borne d'appel d'urgence orange, située tous les 2 km.
</AttentionBox>

<QcmBlock title="QCM — Chapitre 6" :questions="questions" />
</section>
</template>
