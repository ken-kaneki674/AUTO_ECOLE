<script setup>
import MemoBox from '../components/MemoBox.vue'
import AttentionBox from '../components/AttentionBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import RegionValue from '../components/RegionValue.vue'
import questions from '../data/questions/ch11.json'
</script>

<template>
<section class="chap" id="ch11">
<div class="chap-head">
  <span class="borne">11</span>
  <div><span class="fil">Chapitre 11</span><h2>Les cas d'abstinence à la conduite</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Identifier tous les états dans lesquels il ne faut pas prendre le volant : alcool, stupéfiants, médicaments, fatigue, maladie, distraction, émotion.</p>

<h3>11.1 L'alcool</h3>
<p>L'alcool est impliqué dans une très large part des accidents mortels. Il agit <strong>même à faible dose</strong>, et le conducteur est le plus mauvais juge de son propre état — l'alcool supprime d'abord l'autocritique.</p>
<h4>Ses effets</h4>
<ul>
<li>Allongement du <strong>temps de réaction</strong> (il peut doubler).</li>
<li>Rétrécissement du <strong>champ visuel</strong> (« vision tunnel ») et mauvaise évaluation des distances.</li>
<li>Perte de coordination, somnolence, sensibilité accrue à l'éblouissement.</li>
<li><strong>Fausse assurance</strong> : le conducteur se croit plus performant alors qu'il l'est beaucoup moins.</li>
</ul>
<MemoBox label="Chiffres clés ⚠">
Taux maximal autorisé couramment retenu : <strong><RegionValue k="alcoolemie_generale" /></strong> (soit 0,25 mg/l d'air expiré), abaissé à <strong><RegionValue k="alcoolemie_novice" /></strong> pour les conducteurs novices et les transports en commun dans plusieurs pays.<br>
Un « verre standard » (un demi de bière, un ballon de vin, une dose d'alcool fort) fait monter le taux d'environ <strong>0,20 à 0,25 g/l</strong>.<br>
L'élimination est lente : environ <strong>0,10 à 0,15 g/l par heure</strong>. Rien ne l'accélère : ni le café, ni la douche froide, ni le sport, ni le fait de manger.
</MemoBox>
<p>Le contrôle se fait par <strong>éthylotest</strong> (dépistage) puis <strong>éthylomètre</strong> ou prise de sang (mesure). Le refus de se soumettre au contrôle est sanctionné aussi lourdement que l'infraction elle-même. Les sanctions vont de l'amende à la suspension ou à l'annulation du permis, voire à l'emprisonnement en cas d'accident corporel. L'assurance peut refuser sa garantie.</p>

<h3>11.2 Les stupéfiants</h3>
<p>La conduite après usage de stupéfiants est <strong>interdite quelle que soit la quantité</strong> : il n'existe pas de seuil toléré. Les effets (troubles de la perception, temps de réaction, somnolence, prise de risque) durent bien après la sensation d'effet, et la combinaison <strong>alcool + cannabis</strong> multiplie très fortement le risque d'accident mortel.</p>

<h3>11.3 Les médicaments</h3>
<p>De nombreux traitements altèrent la vigilance : somnifères, anxiolytiques, antidépresseurs, antihistaminiques, antitussifs, certains antidouleurs, collyres dilatant la pupille. Les boîtes portent un <strong>pictogramme triangulaire</strong> à trois niveaux :</p>
<div class="panneaux">
 <div class="pan"><svg width="80" height="72" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><path d="M50 4 96 86H4Z" fill="#F5B301"/><path d="M50 18 84 78H16Z" fill="#fff"/><text x="50" y="70" font-size="30" font-family="Arial" font-weight="bold" text-anchor="middle" fill="#171A1F">1</text></svg>Niveau 1<br>Soyez prudent</div>
 <div class="pan"><svg width="80" height="72" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><path d="M50 4 96 86H4Z" fill="#E87722"/><path d="M50 18 84 78H16Z" fill="#fff"/><text x="50" y="70" font-size="30" font-family="Arial" font-weight="bold" text-anchor="middle" fill="#171A1F">2</text></svg>Niveau 2<br>Soyez très prudent, demandez l'avis d'un professionnel</div>
 <div class="pan"><svg width="80" height="72" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><path d="M50 4 96 86H4Z" fill="#D2202F"/><path d="M50 18 84 78H16Z" fill="#fff"/><text x="50" y="70" font-size="30" font-family="Arial" font-weight="bold" text-anchor="middle" fill="#171A1F">3</text></svg>Niveau 3<br>Ne conduisez pas</div>
</div>
<p>En cas de doute, la règle est simple : <strong>demander au médecin ou au pharmacien</strong>, et ne jamais associer un médicament à l'alcool.</p>

<h3>11.4 La fatigue et la somnolence</h3>
<p>La somnolence est l'une des premières causes d'accident mortel sur autoroute. Un endormissement d'<strong>une seconde</strong> à 110 km/h, c'est 30 mètres parcourus les yeux fermés.</p>
<h4>Les signaux d'alerte</h4>
<ul>
<li>Bâillements répétés, paupières lourdes, picotements des yeux.</li>
<li>Difficulté à garder une trajectoire, à maintenir une vitesse constante.</li>
<li>Raideur de la nuque, besoin de changer sans cesse de position.</li>
<li>Perte de mémoire des derniers kilomètres parcourus.</li>
</ul>
<AttentionBox label="La seule réponse efficace">
S'arrêter dans un lieu sûr et <strong>dormir 15 à 20 minutes</strong>. Ouvrir la fenêtre, monter le son de la radio ou boire un café <em>seul</em> ne réveille pas durablement. Règle de base : une pause d'au moins <strong>20 minutes toutes les 2 heures</strong>, et prudence renforcée entre 2 h et 5 h du matin puis entre 13 h et 15 h, périodes de creux physiologique.
</AttentionBox>

<h3>11.5 La maladie, le handicap et les états passagers</h3>
<ul>
<li><strong>Affections incompatibles ou soumises à avis médical</strong> : épilepsie non stabilisée, troubles graves du rythme cardiaque, diabète mal équilibré, apnée du sommeil non traitée, troubles psychiatriques aigus, vision ou audition très dégradées.</li>
<li><strong>Correction visuelle</strong> : si elle est mentionnée sur le permis, les lunettes ou lentilles sont obligatoires ; prévoir une paire de secours.</li>
<li><strong>États passagers</strong> : fièvre élevée, migraine, forte douleur, crise d'allergie, suites d'anesthésie ou de dilatation pupillaire chez l'ophtalmologiste.</li>
<li><strong>Émotion forte</strong> : colère, deuil, dispute, choc. Le conducteur bouleversé perd sa capacité d'anticipation.</li>
</ul>

<h3>11.6 Les distractions</h3>
<ul>
<li><strong>Téléphone tenu en main</strong> : interdit. Il multiplie le risque d'accident par 3 à 5 ; écrire un message revient à parcourir plusieurs dizaines de mètres à l'aveugle. Le kit mains libres ne supprime pas la <strong>distraction cognitive</strong>.</li>
<li>Réglages, GPS, musique, repas au volant, cigarette, discussion animée, enfants ou animaux non attachés.</li>
<li>Bonne pratique : régler le GPS et la musique <strong>avant</strong> de démarrer, mettre le téléphone en mode conduite ou hors de portée.</li>
</ul>

<QcmBlock title="QCM — Chapitre 11" :questions="questions" />
</section>
</template>
