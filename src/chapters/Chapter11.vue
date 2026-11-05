<script setup>
import MemoBox from '../components/MemoBox.vue'
import AttentionBox from '../components/AttentionBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import ValeurBenin from '../components/ValeurBenin.vue'
import questions from '../data/questions/ch11.json'
</script>

<template>
<section class="chap" id="ch11">
<div class="chap-head">
  <span class="borne">11</span>
  <div><span class="fil">Chapitre 11</span><h2>Les cas d'abstinence à la conduite</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Identifier tous les états dans lesquels il ne faut pas prendre le volant : alcool, stupéfiants, médicaments, fatigue, maladie, distraction, émotion.</p>

<p>Pour conduire, il faut être en <strong>bonne condition physique et mentale</strong>. Le conducteur doit donc <strong>s'abstenir de conduire</strong> lorsqu'il est :</p>
<ul>
<li><strong>soucieux</strong> ou <strong>nerveux</strong> ;</li>
<li><strong>ivre</strong> (sous l'effet de l'alcool) ;</li>
<li>sous l'effet de certains <strong>médicaments</strong> comme les <strong>somnifères</strong>, les <strong>tranquillisants</strong> ou les <strong>excitants</strong> ;</li>
<li><strong>malade</strong> ;</li>
<li><strong>fatigué</strong> ou <strong>somnolent</strong>.</li>
</ul>

<figure>
<div class="panneaux">
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="42" r="30" fill="#8D5A3B"/><path d="M26 34l10 4M54 34l-10 4" stroke="#171A1F" stroke-width="4" stroke-linecap="round"/><circle cx="30" cy="42" r="3.5" fill="#171A1F"/><circle cx="50" cy="42" r="3.5" fill="#171A1F"/><path d="M28 60q12-10 24 0" fill="none" stroke="#171A1F" stroke-width="4" stroke-linecap="round"/><path d="M18 12q4 4 0 8t0 8M62 6q4 4 0 8t0 8" fill="none" stroke="#D2202F" stroke-width="3"/></svg>Soucieux, nerveux</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="42" r="30" fill="#8D5A3B"/><path d="M25 36l10 10M35 36 25 46M45 36l10 10M55 36 45 46" stroke="#171A1F" stroke-width="3.5"/><path d="M28 58q6 6 12 0t12 0" fill="none" stroke="#171A1F" stroke-width="4"/><rect x="60" y="6" width="16" height="26" rx="3" fill="#7A8A4A"/><rect x="64" y="0" width="8" height="8" fill="#7A8A4A"/></svg>Ivre</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><g transform="rotate(-40 40 40)"><rect x="8" y="24" width="64" height="32" rx="16" fill="#fff" stroke="#0B5FA5" stroke-width="3"/><path d="M40 24h16a16 16 0 0 1 0 32H40z" fill="#0B5FA5"/></g></svg>Médicaments</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="42" r="30" fill="#8D5A3B"/><path d="M26 40h8M46 40h8" stroke="#171A1F" stroke-width="4" stroke-linecap="round"/><path d="M30 58q10-8 20 0" fill="none" stroke="#171A1F" stroke-width="4"/><rect x="52" y="14" width="24" height="7" rx="3" fill="#fff" stroke="#5C636D" stroke-width="2" transform="rotate(-40 64 17)"/><path d="M50 24l-10 8" stroke="#D2202F" stroke-width="4"/></svg>Malade</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="42" r="30" fill="#8D5A3B"/><path d="M24 42q6 4 12 0M44 42q6 4 12 0" fill="none" stroke="#171A1F" stroke-width="4" stroke-linecap="round"/><ellipse cx="40" cy="58" rx="7" ry="5" fill="#171A1F"/><text x="66" y="24" font-size="18" font-weight="bold" fill="#0B5FA5">z</text><text x="56" y="12" font-size="13" font-weight="bold" fill="#0B5FA5">z</text></svg>Fatigué, somnolent</div>
</div>
<figcaption>Figure 11.1 — Cinq états où je ne prends pas le volant</figcaption>
</figure>

<h3>11.1 L'alcool</h3>
<p>L'alcool est impliqué dans une très large part des accidents mortels. Il agit <strong>même à faible dose</strong>, et le conducteur est le plus mauvais juge de son propre état — l'alcool supprime d'abord l'autocritique.</p>
<h4>Ses effets</h4>
<ul>
<li>Allongement du <strong>temps de réaction</strong> (il peut doubler).</li>
<li>Rétrécissement du <strong>champ visuel</strong> (« vision tunnel ») et mauvaise évaluation des distances.</li>
<li>Perte de coordination, somnolence, sensibilité accrue à l'éblouissement.</li>
<li><strong>Fausse assurance</strong> : le conducteur se croit plus performant alors qu'il l'est beaucoup moins.</li>
</ul>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#10141F"/><path d="M120 44 240 150H0z" fill="#3A3F46"/><path d="M120 44v106" stroke="#fff" stroke-width="2" stroke-dasharray="10 12"/><rect y="0" width="240" height="44" fill="#7DA6CC"/><use href="#o-tree" x="20" y="10" width="30" height="46"/><use href="#o-tree" x="190" y="10" width="30" height="46"/><use href="#p-person" x="30" y="84" width="20" height="46" color="#F5B301"/><use href="#car-s" x="124" y="60" width="18" height="34" color="#D2202F"/></svg><b>Sans alcool</b><span>Je vois la route et ses abords, le piéton compris</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#10141F"/><defs><clipPath id="tunnel"><ellipse cx="120" cy="72" rx="56" ry="46"/></clipPath></defs><g clip-path="url(#tunnel)"><path d="M120 44 240 150H0z" fill="#3A3F46"/><path d="M120 44v106" stroke="#fff" stroke-width="2" stroke-dasharray="10 12"/><rect y="0" width="240" height="44" fill="#7DA6CC"/><use href="#car-s" x="124" y="60" width="18" height="34" color="#D2202F"/></g></svg><b>Avec alcool</b><span>« Vision tunnel » : le champ visuel rétrécit, le piéton disparaît</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><g font-size="15" font-weight="bold" fill="#171A1F"><text x="10" y="40">Sobre</text><text x="10" y="100">Avec alcool</text></g><rect x="10" y="48" width="100" height="22" fill="#1B7F5A"/><rect x="10" y="108" width="200" height="22" fill="#D2202F"/><text x="60" y="65" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">réaction</text><text x="110" y="125" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">réaction : elle peut doubler</text></svg><b>Temps de réaction</b><span>Il peut doubler, sans que je m'en rende compte</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><path d="M26 32h44l-5 90H31z" fill="#F5D88A" stroke="#5C636D" stroke-width="2"/><path d="M26 32h44l-1 12H27z" fill="#fff" stroke="#5C636D" stroke-width="2"/><path d="M100 30h40q2 34-20 42-22-8-20-42z" fill="#8A1621" stroke="#5C636D" stroke-width="2"/><path d="M120 72v44M104 118h32" stroke="#5C636D" stroke-width="3"/><path d="M172 74h44l-6 48h-32z" fill="#D9A04A" stroke="#5C636D" stroke-width="2"/><g font-size="26" font-weight="bold" fill="#171A1F" text-anchor="middle"><text x="84" y="76">=</text><text x="156" y="84">=</text></g></svg><b>Un verre standard</b><span>Bière, vin ou alcool fort : à peu près la même dose d'alcool</span></div>
</div>
<figcaption>Figure 11.2 — Ce que l'alcool change au volant</figcaption>
</figure>
<MemoBox label="Chiffres clés ⚠">
Taux maximal autorisé couramment retenu : <strong><ValeurBenin k="alcoolemie_generale" /></strong>, abaissé à <strong><ValeurBenin k="alcoolemie_novice" /></strong> pour les conducteurs novices et les transports en commun.<br>
Un « verre standard » (un demi de bière, un ballon de vin, une dose d'alcool fort) fait monter le taux d'environ <strong>0,20 à 0,25 g/l</strong>.<br>
L'élimination est lente : environ <strong>0,10 à 0,15 g/l par heure</strong>. Rien ne l'accélère : ni le café, ni la douche froide, ni le sport, ni le fait de manger.
</MemoBox>
<figure>
<div class="panneaux">
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><path d="M18 30h38v8h6q10 0 10 10v8q0 10-10 10h-6v6H18z" fill="#fff" stroke="#5C636D" stroke-width="3"/><path d="M56 44h6q4 0 4 4v8q0 4-4 4h-6" fill="none" stroke="#5C636D" stroke-width="3"/><path d="M22 34q2-16 16-14 14-10 18 8" fill="#fff" stroke="#C9CDD4" stroke-width="3"/><path d="M26 30h26v42H26z" fill="#6B3E1E"/></svg>Le café</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><path d="M16 10h34q6 0 6 6v8" fill="none" stroke="#5C636D" stroke-width="5"/><path d="M46 24h20v6H46z" fill="#5C636D"/><path d="M50 36l-3 10M60 36v12M70 36l3 10M44 52l-3 10M56 54v12M68 54l3 10" stroke="#5B8FD0" stroke-width="4" stroke-linecap="round"/><path d="M16 10v60" stroke="#5C636D" stroke-width="5"/></svg>La douche froide</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><circle cx="50" cy="12" r="8" fill="#8D5A3B"/><path d="M46 22 34 44l18 10-8 22M34 44 18 72M40 30l16 10 12-6M42 30 26 34 18 46" fill="none" stroke="#0B5FA5" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>Le sport</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="44" r="30" fill="#fff" stroke="#5C636D" stroke-width="3"/><circle cx="40" cy="44" r="20" fill="#E9D9A8"/><path d="M4 10v24M4 22h6M74 10q6 10 0 22v30" fill="none" stroke="#5C636D" stroke-width="3"/></svg>Manger</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="34" fill="#1B7F5A"/><circle cx="40" cy="40" r="26" fill="#fff"/><path d="M40 20v20l14 8" fill="none" stroke="#171A1F" stroke-width="5" stroke-linecap="round"/></svg><b>Seul le temps</b> : 0,10 à 0,15 g/l par heure</div>
</div>
<figcaption>Figure 11.3 — Rien n'accélère l'élimination de l'alcool, sauf le temps</figcaption>
</figure>
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
<figure>
<svg class="fig-large" viewBox="0 0 560 150" role="img" aria-label="Un endormissement d'une seconde à 110 km/h : 30 mètres parcourus les yeux fermés">
 <rect width="560" height="150" fill="#10141F"/><rect y="70" width="560" height="56" fill="#23272D"/><path d="M0 98h560" stroke="#8A9099" stroke-width="2.5" stroke-dasharray="14 11"/>
 <use href="#car-e" x="24" y="102" width="58" height="22" color="#0B5FA5"/><use href="#car-e" x="478" y="102" width="58" height="22" color="#0B5FA5" opacity=".5"/>
 <path d="M90 113h382" stroke="#F5B301" stroke-width="3" stroke-dasharray="8 6" marker-end="url(#m-a)"/>
 <path d="M250 40q24 16 48 0" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M256 45l-5 8M274 50v9M292 45l5 8" stroke="#fff" stroke-width="3"/>
 <text x="274" y="24" font-size="17" font-weight="bold" fill="#fff" text-anchor="middle">1 seconde d'endormissement à 110 km/h</text>
 <text x="280" y="146" font-size="17" font-weight="bold" fill="#F5B301" text-anchor="middle">30 mètres les yeux fermés</text>
</svg>
<figcaption>Figure 11.4 — Une seconde suffit</figcaption>
</figure>
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

<figure>
<svg class="fig-large" viewBox="0 0 600 170" role="img" aria-label="Sur un long trajet : une pause d'au moins 20 minutes toutes les 2 heures">
 <rect width="600" height="170" fill="#EDEFF2"/>
 <rect x="20" y="70" width="220" height="30" fill="#0B5FA5"/><rect x="240" y="70" width="40" height="30" fill="#1B7F5A"/><rect x="280" y="70" width="220" height="30" fill="#0B5FA5"/><rect x="500" y="70" width="40" height="30" fill="#1B7F5A"/>
 <g font-size="16" font-weight="bold" fill="#fff" text-anchor="middle"><text x="130" y="91">2 heures de route</text><text x="390" y="91">2 heures de route</text></g>
 <g font-size="16" font-weight="bold" fill="#1B7F5A" text-anchor="middle"><text x="260" y="58">pause</text><text x="520" y="58">pause</text><text x="260" y="124">20 min</text><text x="520" y="124">20 min</text></g>
 <use href="#car-e" x="30" y="24" width="60" height="30" color="#0B5FA5"/>
 <text x="300" y="156" font-size="15" fill="#171A1F" text-anchor="middle">Somnolent ? Je m'arrête dans un lieu sûr et je dors 15 à 20 minutes.</text>
</svg>
<figcaption>Figure 11.5 — Le bon rythme de conduite</figcaption>
</figure>

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
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 280 150" aria-hidden="true"><rect width="280" height="150" fill="#FCEBEC"/><circle cx="104" cy="60" r="40" fill="none" stroke="#171A1F" stroke-width="10"/><rect x="186" y="26" width="42" height="78" rx="6" fill="#171A1F"/><rect x="191" y="34" width="32" height="56" fill="#DCEBF7"/><path d="M196 44h22M196 54h22M196 64h14" stroke="#5C636D" stroke-width="3"/><path d="M144 72l42 4" stroke="#8D5A3B" stroke-width="12" stroke-linecap="round"/><use href="#o-no" x="4" y="4" width="36" height="36"/><text x="140" y="136" font-size="15" font-weight="bold" fill="#D2202F" text-anchor="middle">risque d'accident × 3 à 5</text></svg><b>Téléphone en main</b><span>Interdit. Le kit mains libres ne supprime pas la distraction</span></div>
 <div class="scene"><svg viewBox="0 0 280 150" aria-hidden="true"><rect width="280" height="150" fill="#E9F5EF"/><path d="M60 110V60q0-10 10-10h140q10 0 10 10v50" fill="#3A3F46"/><rect x="90" y="60" width="100" height="56" rx="5" fill="#171A1F"/><rect x="96" y="66" width="88" height="44" fill="#BBD8F1"/><path d="M104 102q30-30 46-8t26-22" fill="none" stroke="#0B5FA5" stroke-width="4"/><circle cx="176" cy="72" r="5" fill="#D2202F"/><use href="#o-ok" x="4" y="4" width="36" height="36"/><text x="140" y="138" font-size="15" font-weight="bold" fill="#1B7F5A" text-anchor="middle">réglé avant de démarrer</text></svg><b>GPS et musique</b><span>Je les règle avant de partir, téléphone hors de portée</span></div>
</div>
<figcaption>Figure 11.6 — Garder les yeux et l'esprit sur la route</figcaption>
</figure>

<QcmBlock title="QCM — Chapitre 11" :questions="questions" />
</section>
</template>
