<script setup>
import ExempleBox from '../components/ExempleBox.vue'
import AttentionBox from '../components/AttentionBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import questions from '../data/questions/ch3.json'
</script>

<template>
<section class="chap" id="ch3">
<div class="chap-head">
  <span class="borne">03</span>
  <div><span class="fil">Chapitre 3</span><h2>Croisements et dépassements</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Croiser en sécurité dans toutes les configurations, connaître les trois étapes du dépassement (avant, pendant, après), savoir où le dépassement est interdit et quand il peut se faire par la droite.</p>

<h3>3.1 Le croisement</h3>
<p>Croiser, c'est rencontrer un véhicule circulant <strong>en sens inverse</strong>. Au Bénin, où l'on circule à droite, <strong>on croise par la droite</strong> : chaque conducteur serre son côté droit.</p>
<h4>Les règles du croisement</h4>
<ol>
<li><strong>Se déporter à droite</strong> sans mordre sur l'accotement meuble ni sur le trottoir.</li>
<li><strong>Ralentir</strong> si la chaussée est étroite, si le véhicule croisé est large, ou si un obstacle est présent.</li>
<li><strong>Passer en feux de croisement</strong> la nuit, dès que l'on aperçoit un véhicule en sens inverse (et aussi lorsqu'on suit un véhicule).</li>
<li><strong>Céder le passage</strong> lorsque l'obstacle (véhicule en stationnement, travaux, îlot) se trouve <strong>de mon côté</strong> : c'est moi qui dois attendre.</li>
</ol>
<ExempleBox label="Exemple concret">
Une voiture est garée sur ta voie et un camion arrive en face. L'obstacle est de ton côté : tu ralentis et tu t'arrêtes avant l'obstacle pour laisser passer le camion. Forcer le passage serait une faute grave — et, en cas d'accident, ta responsabilité serait engagée.
</ExempleBox>
<h4>Cas particuliers de croisement</h4>
<ul>
<li><strong>Croisement d'un deux-roues, d'un piéton ou d'un animal</strong> : prévoir une marge latérale d'au moins <strong>1 m</strong>.</li>
<li><strong>Croisement d'un convoi ou d'un véhicule large</strong> : ralentir fortement, voire s'arrêter, à cause de l'effet de souffle.</li>
<li><strong>Croisement de nuit</strong> : ne jamais rester en feux de route ; en cas d'éblouissement, ralentir, fixer le bord droit de la chaussée, ne jamais fermer les yeux.</li>
</ul>

<h4>Les croisements difficiles</h4>
<p>L'état, le profil et l'insuffisance de largeur de la chaussée peuvent rendre le croisement difficile. La réglementation précise alors <strong>qui doit s'arrêter à temps</strong> et <strong>qui doit reculer</strong>.</p>
<p><strong>1) L'un des véhicules doit s'arrêter</strong></p>
<ul>
<li><strong>En agglomération</strong>, tous les autres véhicules doivent s'arrêter pour faciliter le passage des <strong>transports en commun (autobus)</strong>.</li>
<li><strong>Sur un terrain plat</strong>, les <strong>véhicules encombrants</strong> doivent s'arrêter à temps pour céder le passage aux véhicules légers.</li>
<li><strong>Sur une pente</strong>, le véhicule <strong>descendant</strong> doit s'arrêter à temps, <strong>quelle que soit sa catégorie</strong>.</li>
</ul>
<p><strong>2) L'un des véhicules doit reculer</strong> : sur une pente ou une route de montagne, lors d'un croisement difficile, la marche arrière s'impose :</p>
<ul>
<li>au véhicule <strong>descendant</strong>, si les véhicules sont de <strong>la même catégorie</strong> ;</li>
<li>aux <strong>véhicules légers</strong> par rapport aux <strong>véhicules lourds</strong> ;</li>
<li>aux <strong>camions</strong> par rapport aux <strong>autobus</strong> ;</li>
<li>aux <strong>véhicules uniques</strong> par rapport aux <strong>ensembles de véhicules</strong> (véhicule + remorque).</li>
</ul>
<p><strong>NB</strong> : dans un croisement, la conduite à tenir peut aussi être dictée par des panneaux, des feux ou des agents de la circulation.</p>

<h3>3.2 Le dépassement</h3>
<p>Dépasser, c'est <strong>rattraper et doubler un véhicule circulant dans le même sens</strong>. C'est la manœuvre la plus accidentogène : elle mobilise la voie de sens inverse et allonge fortement la distance parcourue.</p>
<figure>
<svg viewBox="0 0 700 220" role="img" aria-label="Les trois étapes du dépassement">
 <rect width="700" height="220" fill="#EDEFF2"/>
 <rect x="0" y="60" width="700" height="110" fill="#3A3F46"/>
 <g stroke="#fff" stroke-width="3" stroke-dasharray="18 16"><path d="M0 115h700"/></g>
 <path d="M60 148 C 150 148, 170 85, 250 85 L 430 85 C 510 85, 530 148, 620 148" fill="none" stroke="#F5B301" stroke-width="4" stroke-dasharray="9 7"/>
 <path d="M620 148l-16-7v14z" fill="#F5B301"/>
 <g font-family="Arial Narrow, Arial, sans-serif">
  <rect x="40" y="134" width="46" height="28" rx="4" fill="#0B5FA5"/>
  <text x="63" y="153" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">MOI</text>
  <rect x="330" y="134" width="52" height="28" rx="4" fill="#5C636D"/>
  <text x="356" y="153" fill="#fff" font-size="11" text-anchor="middle" font-weight="bold">DÉPASSÉ</text>
  <g font-size="12.5" fill="#171A1F" text-anchor="middle">
   <text x="130" y="196">AVANT : s'assurer, prévenir</text><text x="350" y="196">PENDANT : déboîter, doubler</text>
   <text x="590" y="196">APRÈS : se rabattre, éteindre</text>
  </g>
  <text x="350" y="34" font-size="14" text-anchor="middle" font-weight="bold" fill="#171A1F" letter-spacing="1.5">LES TROIS ÉTAPES DU DÉPASSEMENT</text>
 </g>
</svg>
<figcaption>Figure 3.1 — La trajectoire et la chronologie du dépassement</figcaption>
</figure>
<p>Le dépassement est l'une des manœuvres <strong>les plus meurtrières</strong> de la route : une erreur entraîne des accidents très graves, voire mortels. Il s'effectue en <strong>trois étapes : avant, pendant et après</strong>.</p>
<h4>Avant le dépassement : les précautions</h4>
<ol>
<li>S'assurer que le dépassement <strong>n'est pas interdit</strong> (1<sup>re</sup> précaution).</li>
<li>S'assurer, à l'aide du <strong>rétroviseur intérieur</strong>, que personne ne s'apprête aussi à dépasser.</li>
<li>S'assurer que la circulation est <strong>libre en sens inverse</strong>.</li>
<li>S'assurer qu'on pourra <strong>se rabattre rapidement</strong> devant celui qu'on dépasse.</li>
<li>S'assurer que la <strong>réserve d'accélération</strong> est suffisante pour dépasser vite : rouler <strong>au moins 20 km/h de plus</strong> que le véhicule dépassé.</li>
<li><strong>Prévenir</strong> l'usager à dépasser : <strong>le jour avec l'avertisseur sonore</strong>, <strong>la nuit avec les appels lumineux</strong>.</li>
<li>S'assurer <strong>une dernière fois</strong>, à l'aide du rétroviseur, que personne ne dépasse.</li>
</ol>
<h4>Pendant le dépassement</h4>
<ol start="8">
<li>Mettre le <strong>clignotant à gauche</strong> et se déporter à gauche en observant un <strong>écart latéral</strong> de :
<ul>
<li><strong>0,5 m</strong> entre deux véhicules automobiles ;</li>
<li><strong>1 m</strong> entre une automobile et un piéton, un animal, un cycliste ou un motocycliste.</li>
</ul></li>
<li><strong>Accélérer franchement</strong> pour dépasser vite. La nuit, on peut repasser en <strong>feux de route en arrivant à la hauteur du conducteur</strong> dépassé, quand on ne risque plus de l'éblouir (Q278).</li>
<li>Le dépassement est <strong>effectif</strong> lorsque l'usager dépassé <strong>apparaît dans le rétroviseur intérieur</strong> : on attend ce moment pour mettre le clignotant à droite et se rabattre à droite.</li>
</ol>
<h4>Après le dépassement</h4>
<ol start="11">
<li><strong>Éteindre le clignotant</strong> pour continuer la marche normale.</li>
</ol>

<h3>3.3 Où et quand le dépassement est interdit</h3>
<div class="table-scroll"><table>
<thead><tr><th>Interdiction</th><th>Pourquoi</th></tr></thead>
<tbody>
<tr><td colspan="2"><strong>Par manque de visibilité</strong></td></tr>
<tr><td>Dans un virage, au sommet d'une côte, par temps de brouillard ou de forte pluie</td><td>On ne voit pas le véhicule arrivant en face</td></tr>
<tr><td>Aux intersections de routes où le conducteur doit céder le passage</td><td>Risque de collision avec un véhicule débouchant ou tournant</td></tr>
<tr><td colspan="2"><strong>À cause des marquages au sol</strong></td></tr>
<tr><td>Sur une ligne continue</td><td>Le franchissement est lui-même interdit</td></tr>
<tr><td>Sur une ligne mixte dont la ligne continue est du côté du conducteur</td><td>On obéit à la ligne la plus proche</td></tr>
<tr><td>Sur les flèches de rabattement</td><td>La voie se termine ou une ligne continue arrive</td></tr>
<tr><td>Sur les lignes d'avertissement, lorsque la manœuvre risque de ne pas être terminée avant la ligne continue</td><td>On se retrouverait à franchir la ligne continue</td></tr>
<tr><td colspan="2"><strong>En raison des autres usagers</strong></td></tr>
<tr><td>Sur et aux abords d'un passage pour piétons</td><td>Le véhicule dépassé peut masquer un piéton engagé</td></tr>
<tr><td>Aux passages à niveau et à leurs abords</td><td>Zone de manœuvre impossible</td></tr>
<tr><td>Lorsqu'un autre usager veut dépasser ou me dépasse déjà</td><td>Double dépassement = collision quasi certaine</td></tr>
<tr><td>S'il n'y a pas de place pour se rabattre sans gêner</td><td>On couperait la route du véhicule dépassé</td></tr>
<tr><td>Sur une chaussée rétrécie, si la largeur ne permet pas de laisser un intervalle latéral correct</td><td>On frôlerait le véhicule dépassé</td></tr>
<tr><td>Sur la voie la plus à gauche d'une chaussée à double sens comportant plus de deux voies</td><td>Cette voie est réservée à la circulation venant en sens inverse</td></tr>
<tr><td>Quand le véhicule précédent a mis son clignotant gauche pour tourner</td><td>Il coupera ma trajectoire</td></tr>
<tr><td>Panneau « dépassement interdit » (voiture rouge/voiture noire)</td><td>Interdiction réglementaire jusqu'au panneau de fin</td></tr>
</tbody>
</table></div>
<AttentionBox label="Danger">
Le dépassement d'un <strong>véhicule long</strong> (camion, semi-remorque) demande une distance et un temps considérables : à 90 km/h, doubler un camion peut mobiliser <strong>plus de 400 m</strong> de route. Si tu doutes de la place disponible, n'engage pas la manœuvre.
</AttentionBox>

<h3>3.4 Le dépassement par la droite</h3>
<p>La règle est de dépasser par la gauche. <strong>Il est interdit de dépasser par la droite, sauf si l'usager à dépasser tourne à gauche</strong> : il a signalé son intention et s'est déporté vers l'axe.</p>
<p>Sur une chaussée à <strong>circulation en files ininterrompues</strong>, progresser plus vite dans sa file de droite n'est pas un dépassement.</p>

<h3>3.5 Obligations de celui qui est dépassé</h3>
<p>Celui qu'on dépasse doit :</p>
<ul>
<li><strong>maintenir son allure</strong> : ne pas accélérer, ne pas ralentir ;</li>
<li><strong>serrer sa droite</strong> ;</li>
<li>la nuit, <strong>passer en feux de croisement dès qu'il est dépassé</strong>.</li>
</ul>
<p>Accélérer pendant qu'on est dépassé est à la fois dangereux et sanctionné.</p>

<QcmBlock title="QCM — Chapitre 3" :questions="questions" />
</section>
</template>
