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
<p class="obj"><b>Objectifs du chapitre</b> Croiser en sécurité dans toutes les configurations, connaître les six temps du dépassement, savoir où le dépassement est interdit et quand il peut se faire par la droite.</p>

<h3>3.1 Le croisement</h3>
<p>Croiser, c'est rencontrer un véhicule circulant <strong>en sens inverse</strong>. Dans les pays à conduite à droite (Bénin, France, la plupart des pays d'Afrique de l'Ouest francophone), <strong>on croise par la droite</strong> : chaque conducteur serre son côté droit.</p>
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
<li><strong>Croisement d'un deux-roues ou d'un piéton</strong> : prévoir une marge latérale d'au moins <strong>1 m en agglomération</strong> et <strong>1,50 m hors agglomération</strong>.</li>
<li><strong>Croisement d'un convoi ou d'un véhicule large</strong> : ralentir fortement, voire s'arrêter, à cause de l'effet de souffle.</li>
<li><strong>Croisement de nuit</strong> : ne jamais rester en feux de route ; en cas d'éblouissement, ralentir, fixer le bord droit de la chaussée, ne jamais fermer les yeux.</li>
<li><strong>Croisement en montagne</strong> : celui qui descend s'arrête ou recule.</li>
</ul>

<h3>3.2 Le dépassement</h3>
<p>Dépasser, c'est <strong>rattraper et doubler un véhicule circulant dans le même sens</strong>. C'est la manœuvre la plus accidentogène : elle mobilise la voie de sens inverse et allonge fortement la distance parcourue.</p>
<figure>
<svg viewBox="0 0 700 220" role="img" aria-label="Les six temps du dépassement">
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
   <text x="70" y="196">1. Observer</text><text x="185" y="196">2. Avertir</text><text x="300" y="196">3. Déboîter</text>
   <text x="415" y="196">4. Doubler</text><text x="530" y="196">5. Contrôler</text><text x="645" y="196">6. Se rabattre</text>
  </g>
  <text x="350" y="34" font-size="14" text-anchor="middle" font-weight="bold" fill="#171A1F" letter-spacing="1.5">LES SIX TEMPS DU DÉPASSEMENT</text>
 </g>
</svg>
<figcaption>Figure 3.1 — La trajectoire et la chronologie du dépassement</figcaption>
</figure>
<h4>La méthode en six temps</h4>
<ol>
<li><strong>Observer</strong> : rétroviseur intérieur, rétroviseur gauche, angle mort. Vérifier que personne ne me dépasse déjà, que la visibilité est suffisante (au moins le double de la distance nécessaire) et que le véhicule devant ne s'apprête pas à tourner à gauche.</li>
<li><strong>Avertir</strong> : clignotant gauche ; de jour hors agglomération, un appel de phares est possible ; en agglomération, l'avertisseur sonore est réservé au danger immédiat.</li>
<li><strong>Déboîter</strong> franchement, sans brusquerie, en gardant l'écart latéral.</li>
<li><strong>Doubler</strong> : accélérer pour réduire le temps passé sur la voie de gauche, garder au moins <strong>1 m (agglomération) ou 1,50 m (hors agglomération)</strong> d'écart latéral.</li>
<li><strong>Contrôler</strong> : voir le véhicule dépassé <strong>entièrement dans le rétroviseur intérieur</strong> avant de revenir.</li>
<li><strong>Se rabattre</strong> souplement, clignotant droit, sans obliger le dépassé à freiner.</li>
</ol>

<h3>3.3 Où et quand le dépassement est interdit</h3>
<div class="table-scroll"><table>
<thead><tr><th>Interdiction</th><th>Pourquoi</th></tr></thead>
<tbody>
<tr><td>Visibilité insuffisante : virage, sommet de côte, brouillard, nuit sans visibilité</td><td>On ne voit pas le véhicule arrivant en face</td></tr>
<tr><td>Ligne continue axiale</td><td>Le franchissement est lui-même interdit</td></tr>
<tr><td>Aux intersections, sauf si l'on circule sur une route prioritaire</td><td>Risque de collision avec un véhicule débouchant ou tournant</td></tr>
<tr><td>Sur et aux abords d'un passage pour piétons</td><td>Le véhicule dépassé peut masquer un piéton engagé</td></tr>
<tr><td>Aux passages à niveau et à leurs abords</td><td>Zone de manœuvre impossible</td></tr>
<tr><td>Lorsqu'un véhicule me dépasse déjà</td><td>Double dépassement = collision quasi certaine</td></tr>
<tr><td>Quand le véhicule précédent a mis son clignotant gauche pour tourner</td><td>Il coupera ma trajectoire</td></tr>
<tr><td>Panneau « dépassement interdit » (voiture rouge/voiture noire)</td><td>Interdiction réglementaire jusqu'au panneau de fin</td></tr>
</tbody>
</table></div>
<AttentionBox label="Danger">
Le dépassement d'un <strong>véhicule long</strong> (camion, semi-remorque) demande une distance et un temps considérables : à 90 km/h, doubler un camion peut mobiliser <strong>plus de 400 m</strong> de route. Si tu doutes de la place disponible, n'engage pas la manœuvre.
</AttentionBox>

<h3>3.4 Le dépassement par la droite</h3>
<p>La règle est de dépasser par la gauche. Le dépassement par la droite n'est autorisé que dans quatre cas :</p>
<ul>
<li>Le véhicule précédent a signalé son intention de <strong>tourner à gauche</strong> et s'est déporté vers l'axe.</li>
<li>Sur une chaussée à <strong>circulation en files ininterrompues</strong>, où l'on progresse plus vite dans sa file (ce n'est alors pas un dépassement).</li>
<li>Sur une chaussée à sens unique à plusieurs voies, dans une circulation dense.</li>
<li>Pour dépasser un <strong>tramway</strong> circulant sur une plateforme centrale.</li>
</ul>

<h3>3.5 Obligations de celui qui est dépassé</h3>
<p>Le conducteur dépassé doit <strong>serrer à droite</strong> et <strong>ne pas accélérer</strong>. Accélérer pendant qu'on est dépassé est à la fois dangereux et sanctionné.</p>

<QcmBlock title="QCM — Chapitre 3" :questions="questions" />
</section>
</template>
