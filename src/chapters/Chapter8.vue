<script setup>
import MemoBox from '../components/MemoBox.vue'
import AstuceBox from '../components/AstuceBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import questions from '../data/questions/ch8.json'
</script>

<template>
<section class="chap" id="ch8">
<div class="chap-head">
  <span class="borne">08</span>
  <div><span class="fil">Chapitre 8</span><h2>Mécanique élémentaire d'un moteur à essence</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Nommer les organes du moteur, expliquer le cycle à quatre temps, décrire les cinq circuits vitaux, entretenir son véhicule et diagnostiquer les pannes les plus courantes.</p>

<h3>8.1 Le principe : transformer une explosion en mouvement</h3>
<p>Le moteur à essence est un <strong>moteur à combustion interne</strong> : un mélange d'air et d'essence est comprimé dans un cylindre puis enflammé par une <strong>étincelle de bougie</strong>. L'explosion pousse le piston ; la bielle transforme ce mouvement de va-et-vient en <strong>mouvement rotatif</strong> au niveau du vilebrequin, qui entraîne ensuite la transmission et les roues.</p>
<h4>Les organes principaux</h4>
<div class="table-scroll"><table>
<thead><tr><th>Organe</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td>Bloc-cylindres</td><td>Corps du moteur, contient les cylindres dans lesquels coulissent les pistons</td></tr>
<tr><td>Culasse</td><td>Ferme le haut des cylindres ; reçoit les soupapes et les bougies</td></tr>
<tr><td>Piston et segments</td><td>Reçoit la poussée de l'explosion ; les segments assurent l'étanchéité</td></tr>
<tr><td>Bielle</td><td>Relie le piston au vilebrequin</td></tr>
<tr><td>Vilebrequin</td><td>Transforme le mouvement alternatif en rotation</td></tr>
<tr><td>Soupapes (admission / échappement)</td><td>Ouvrent et ferment les passages de gaz</td></tr>
<tr><td>Arbre à cames et courroie/chaîne de distribution</td><td>Commande l'ouverture des soupapes en synchronisation avec le vilebrequin</td></tr>
<tr><td>Volant moteur</td><td>Régularise la rotation grâce à son inertie</td></tr>
<tr><td>Bougie d'allumage</td><td>Produit l'étincelle qui enflamme le mélange</td></tr>
</tbody>
</table></div>

<h3>8.2 Le cycle à quatre temps</h3>
<figure>
<svg viewBox="0 0 700 260" role="img" aria-label="Cycle à quatre temps">
 <g font-family="Arial Narrow, Arial, sans-serif">
  <!-- 1 admission -->
  <g transform="translate(20,30)">
   <rect x="0" y="0" width="120" height="150" rx="6" fill="#DCE0E5" stroke="#5C636D" stroke-width="2"/>
   <rect x="16" y="95" width="88" height="40" fill="#5C636D"/>
   <rect x="16" y="22" width="88" height="70" fill="#BBD8F1"/>
   <path d="M30 4v22M90 4v22" stroke="#171A1F" stroke-width="5"/>
   <path d="M22 26h16M82 26h16" stroke="#1B7F5A" stroke-width="6"/>
   <path d="M60 40v34" stroke="#0B5FA5" stroke-width="3"/><path d="M60 84l-7-14h14z" fill="#0B5FA5"/>
   <text x="60" y="170" font-size="13.5" text-anchor="middle" font-weight="bold">1. ADMISSION</text>
   <text x="60" y="188" font-size="11.5" text-anchor="middle" fill="#5C636D">soupape d'admission</text>
   <text x="60" y="202" font-size="11.5" text-anchor="middle" fill="#5C636D">ouverte, piston descend</text>
  </g>
  <!-- 2 compression -->
  <g transform="translate(190,30)">
   <rect x="0" y="0" width="120" height="150" rx="6" fill="#DCE0E5" stroke="#5C636D" stroke-width="2"/>
   <rect x="16" y="40" width="88" height="40" fill="#5C636D"/>
   <rect x="16" y="22" width="88" height="16" fill="#8FA8C8"/>
   <path d="M30 4v22M90 4v22" stroke="#171A1F" stroke-width="5"/>
   <path d="M60 96V60" stroke="#0B5FA5" stroke-width="3"/><path d="M60 50l-7 14h14z" fill="#0B5FA5"/>
   <text x="60" y="170" font-size="13.5" text-anchor="middle" font-weight="bold">2. COMPRESSION</text>
   <text x="60" y="188" font-size="11.5" text-anchor="middle" fill="#5C636D">soupapes fermées,</text>
   <text x="60" y="202" font-size="11.5" text-anchor="middle" fill="#5C636D">piston remonte</text>
  </g>
  <!-- 3 explosion -->
  <g transform="translate(360,30)">
   <rect x="0" y="0" width="120" height="150" rx="6" fill="#DCE0E5" stroke="#5C636D" stroke-width="2"/>
   <rect x="16" y="90" width="88" height="40" fill="#5C636D"/>
   <rect x="16" y="22" width="88" height="66" fill="#F5B301"/>
   <path d="M60 4v18" stroke="#D2202F" stroke-width="5"/>
   <path d="M50 30l10 14 10-14-6 20h-8z" fill="#D2202F"/>
   <path d="M60 60v22" stroke="#D2202F" stroke-width="3"/><path d="M60 92l-7-14h14z" fill="#D2202F"/>
   <text x="60" y="170" font-size="13.5" text-anchor="middle" font-weight="bold">3. EXPLOSION</text>
   <text x="60" y="188" font-size="11.5" text-anchor="middle" fill="#5C636D">étincelle, le piston est</text>
   <text x="60" y="202" font-size="11.5" text-anchor="middle" fill="#5C636D">chassé vers le bas (moteur)</text>
  </g>
  <!-- 4 echappement -->
  <g transform="translate(530,30)">
   <rect x="0" y="0" width="120" height="150" rx="6" fill="#DCE0E5" stroke="#5C636D" stroke-width="2"/>
   <rect x="16" y="40" width="88" height="40" fill="#5C636D"/>
   <rect x="16" y="22" width="88" height="16" fill="#9AA0A8"/>
   <path d="M30 4v22M90 4v22" stroke="#171A1F" stroke-width="5"/>
   <path d="M82 26h16" stroke="#D2202F" stroke-width="6"/>
   <path d="M60 96V60" stroke="#0B5FA5" stroke-width="3"/><path d="M60 50l-7 14h14z" fill="#0B5FA5"/>
   <text x="60" y="170" font-size="13.5" text-anchor="middle" font-weight="bold">4. ÉCHAPPEMENT</text>
   <text x="60" y="188" font-size="11.5" text-anchor="middle" fill="#5C636D">soupape d'échappement</text>
   <text x="60" y="202" font-size="11.5" text-anchor="middle" fill="#5C636D">ouverte, gaz évacués</text>
  </g>
  <text x="350" y="18" font-size="14" text-anchor="middle" font-weight="bold" letter-spacing="1.5">LE CYCLE À QUATRE TEMPS</text>
  <text x="350" y="248" font-size="12" text-anchor="middle" fill="#5C636D">Deux tours de vilebrequin pour un cycle complet — un seul temps sur quatre produit de l'énergie.</text>
 </g>
</svg>
<figcaption>Figure 8.1 — Admission, compression, explosion, échappement</figcaption>
</figure>
<AstuceBox label="Moyen mnémotechnique">
« <strong>A</strong>dmission, <strong>C</strong>ompression, <strong>E</strong>xplosion, <strong>É</strong>chappement » → <strong>A C E É</strong> : « <em>l'As Compte Et Économise</em> ». Le temps moteur, celui qui fournit la force, est le <strong>troisième</strong>.
</AstuceBox>

<h3>8.3 Les cinq circuits vitaux du moteur</h3>
<div class="table-scroll"><table>
<thead><tr><th>Circuit</th><th>Organes</th><th>Rôle</th><th>Panne typique</th></tr></thead>
<tbody>
<tr><td><strong>Alimentation</strong></td><td>Réservoir, pompe, filtre à carburant, carburateur ou injecteurs, filtre à air</td><td>Doser le mélange air/essence</td><td>Panne sèche, filtre encrassé, moteur qui broute</td></tr>
<tr><td><strong>Allumage</strong></td><td>Batterie, bobine, allumeur ou module, bougies, câbles</td><td>Produire l'étincelle au bon moment</td><td>Bougies encrassées, moteur qui ne démarre pas</td></tr>
<tr><td><strong>Graissage</strong></td><td>Carter d'huile, pompe à huile, filtre, canalisations</td><td>Réduire les frottements, refroidir, nettoyer</td><td>Témoin de pression d'huile → <strong>arrêt immédiat</strong></td></tr>
<tr><td><strong>Refroidissement</strong></td><td>Radiateur, pompe à eau, thermostat, ventilateur, durites, vase d'expansion</td><td>Maintenir le moteur autour de 90 °C</td><td>Surchauffe, durite percée, courroie cassée</td></tr>
<tr><td><strong>Démarrage / charge</strong></td><td>Batterie, démarreur, alternateur, régulateur</td><td>Lancer le moteur et recharger la batterie</td><td>Batterie déchargée, alternateur HS (témoin rouge)</td></tr>
</tbody>
</table></div>

<h3>8.4 La transmission</h3>
<p>La chaîne va du moteur aux roues : <strong>embrayage</strong> (accouple ou désaccouple le moteur) → <strong>boîte de vitesses</strong> (adapte couple et vitesse) → <strong>arbre de transmission</strong> → <strong>différentiel</strong> (permet aux roues de tourner à des vitesses différentes en virage) → <strong>roues</strong>.</p>
<ul>
<li><strong>1<sup>re</sup> vitesse</strong> : force maximale, vitesse minimale — pour démarrer.</li>
<li><strong>Vitesses supérieures</strong> : moins de force, plus de vitesse — pour rouler économiquement.</li>
<li>Un embrayage qui « patine » (le régime monte sans que la voiture accélère) doit être remplacé.</li>
</ul>

<h3>8.5 Entretien courant et pannes fréquentes</h3>
<div class="table-scroll"><table>
<thead><tr><th>Symptôme</th><th>Cause probable</th><th>Que faire</th></tr></thead>
<tbody>
<tr><td>Le démarreur ne tourne pas, aucun bruit</td><td>Batterie déchargée ou cosses oxydées</td><td>Nettoyer les cosses, recharger, démarrer avec des câbles</td></tr>
<tr><td>Le moteur tourne mais ne démarre pas</td><td>Allumage (bougies humides) ou panne sèche</td><td>Vérifier le carburant, sécher/nettoyer les bougies</td></tr>
<tr><td>Aiguille de température dans le rouge, vapeur</td><td>Manque de liquide, durite percée, ventilateur HS</td><td>S'arrêter, laisser refroidir, <strong>ne jamais ouvrir le bouchon à chaud</strong></td></tr>
<tr><td>Témoin de pression d'huile allumé</td><td>Manque d'huile ou pompe défaillante</td><td>Couper le moteur immédiatement : risque de casse</td></tr>
<tr><td>Témoin de charge (batterie) allumé en roulant</td><td>Courroie d'alternateur cassée</td><td>S'arrêter : le refroidissement peut aussi être coupé</td></tr>
<tr><td>Pédale de frein molle ou qui s'enfonce</td><td>Manque de liquide, air dans le circuit</td><td>Arrêt et dépannage ; utiliser le frein moteur</td></tr>
<tr><td>Fumée noire à l'échappement</td><td>Mélange trop riche, filtre à air colmaté</td><td>Faire régler l'alimentation</td></tr>
<tr><td>Fumée bleue</td><td>Le moteur consomme de l'huile (segments, joints)</td><td>Diagnostic en atelier</td></tr>
</tbody>
</table></div>
<MemoBox label="Le calendrier de l'entretien">
Vidange huile + filtre selon le constructeur (souvent 5 000 à 10 000 km) · Filtres à air et à carburant · Bougies · Courroie de distribution (pièce vitale : sa rupture détruit le moteur) · Liquide de frein tous les 2 ans · Contrôle des niveaux <strong>chaque semaine</strong> et avant tout long trajet.
</MemoBox>

<QcmBlock title="QCM — Chapitre 8" :questions="questions" />
</section>
</template>
