<script setup>
import MemoBox from '../components/MemoBox.vue'
import AttentionBox from '../components/AttentionBox.vue'
import AstuceBox from '../components/AstuceBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import questions from '../data/questions/ch2.json'
</script>

<template>
<section class="chap" id="ch2">
<div class="chap-head">
  <span class="borne">02</span>
  <div><span class="fil">Chapitre 2</span><h2>Les règles de priorité</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Savoir qui passe en premier dans toutes les configurations : priorité à droite, carrefours signalés, giratoires, véhicules prioritaires, cas particuliers.</p>

<h3>2.1 Le principe de base : la priorité à droite</h3>
<p>En l'absence de toute signalisation, <strong>tout conducteur doit céder le passage au véhicule qui arrive à sa droite</strong>. C'est la règle de secours du code de la route : elle s'applique dès qu'aucun panneau, feu ou marquage ne règle le carrefour.</p>
<figure>
<svg viewBox="0 0 420 300" role="img" aria-label="Priorité à droite">
 <rect x="0" y="0" width="420" height="300" fill="#EDEFF2"/>
 <rect x="150" y="0" width="120" height="300" fill="#3A3F46"/>
 <rect x="0" y="90" width="420" height="120" fill="#3A3F46"/>
 <g stroke="#fff" stroke-width="3" stroke-dasharray="16 14"><path d="M210 0v90M210 210v90M0 150h150M270 150h150"/></g>
 <g font-family="Arial Narrow, Arial, sans-serif">
  <rect x="188" y="220" width="44" height="62" rx="6" fill="#0B5FA5"/>
  <text x="210" y="258" fill="#fff" font-size="15" text-anchor="middle" font-weight="bold">MOI</text>
  <path d="M210 216v-10" stroke="#0B5FA5" stroke-width="3"/><path d="M210 198l-7 12h14z" fill="#0B5FA5"/>
  <rect x="300" y="128" width="62" height="44" rx="6" fill="#D2202F"/>
  <text x="331" y="156" fill="#fff" font-size="14" text-anchor="middle" font-weight="bold">LUI</text>
  <path d="M296 150h-12" stroke="#D2202F" stroke-width="3"/><path d="M276 150l12-7v14z" fill="#D2202F"/>
  <text x="331" y="196" font-size="13" text-anchor="middle" fill="#D2202F" font-weight="bold">arrive à ma droite</text>
  <text x="120" y="256" font-size="13" text-anchor="middle" fill="#0B5FA5" font-weight="bold">je cède</text>
  <text x="120" y="272" font-size="13" text-anchor="middle" fill="#0B5FA5" font-weight="bold">le passage</text>
 </g>
</svg>
<figcaption>Figure 2.1 — Carrefour non signalé : le véhicule rouge passe en premier</figcaption>
</figure>
<MemoBox label="À retenir">
La priorité à droite s'applique aussi <strong>dans les parkings, les zones de rencontre et sur les places</strong>, dès lors qu'aucune signalisation ne l'écarte. Elle ne s'applique <strong>jamais</strong> si l'on sort d'un chemin de terre, d'une propriété privée, d'une station-service ou d'un parking vers une chaussée : dans ce cas, on cède toujours le passage.
</MemoBox>

<h3>2.2 Les carrefours réglés par des panneaux</h3>
<div class="panneaux">
 <div class="pan"><svg width="86" height="78" aria-hidden="true"><use href="#s-danger" xlink:href="#s-danger" width="86" height="78"/><path d="M28 46l30 22M58 46l-30 22" stroke="#000" stroke-width="5"/></svg>AB1 · Croix de Saint-André<br>Priorité à droite au prochain carrefour</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><path d="M50 4 96 50 50 96 4 50Z" fill="#F5B301" stroke="#fff" stroke-width="6"/><path d="M50 16 84 50 50 84 16 50Z" fill="none" stroke="#171A1F" stroke-width="3"/></svg>AB2 · Route prioritaire<br>Je suis prioritaire</div>
 <div class="pan"><svg width="86" height="78" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><path d="M4 4h92L50 86Z" fill="#D2202F"/><path d="M18 15h64L50 72Z" fill="#fff"/></svg>AB3a · Cédez le passage<br>Ralentir, céder sans s'arrêter forcément</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><path d="M30 3h40l27 27v40l-27 27H30L3 70V30Z" fill="#D2202F" stroke="#fff" stroke-width="4"/><text x="50" y="60" fill="#fff" font-size="30" font-family="Arial Narrow, Arial" font-weight="bold" text-anchor="middle">STOP</text></svg>AB4 · STOP<br>Arrêt absolu obligatoire</div>
</div>
<div class="table-scroll"><table>
<thead><tr><th>Panneau</th><th>Ce que je dois faire</th><th>Erreur à éviter</th></tr></thead>
<tbody>
<tr><td><strong>Cédez le passage</strong> (triangle pointe en bas)</td><td>Ralentir fortement, s'assurer que la voie est libre, s'arrêter seulement si nécessaire</td><td>S'engager « au feeling » sans avoir vraiment regardé à gauche et à droite</td></tr>
<tr><td><strong>STOP</strong> (octogone rouge)</td><td><strong>Immobilisation complète</strong> du véhicule à la ligne, roues arrêtées, puis observation, puis engagement</td><td>Le « stop américain » : ralentir sans s'arrêter = infraction</td></tr>
<tr><td><strong>Route prioritaire</strong> (losange jaune)</td><td>Je conserve la priorité aux carrefours suivants jusqu'au panneau de fin</td><td>Croire que l'on est prioritaire sur les piétons ou les véhicules de secours</td></tr>
<tr><td><strong>Croix de Saint-André</strong> (triangle avec croix)</td><td>Le carrefour est à priorité à droite : je ralentis et je regarde à droite</td><td>Confondre avec un panneau de priorité</td></tr>
</tbody>
</table></div>
<AttentionBox label="Attention">
Au STOP, la ligne d'arrêt est parfois placée en retrait pour la visibilité. On s'immobilise <strong>d'abord</strong> à la ligne, puis on peut avancer lentement (« deuxième arrêt ») jusqu'à voir la route.
</AttentionBox>

<h3>2.3 Le carrefour à sens giratoire</h3>
<figure>
<svg viewBox="0 0 380 300" role="img" aria-label="Carrefour à sens giratoire">
 <rect width="380" height="300" fill="#EDEFF2"/>
 <circle cx="190" cy="150" r="105" fill="#3A3F46"/>
 <circle cx="190" cy="150" r="48" fill="#8FA98C" stroke="#fff" stroke-width="4"/>
 <rect x="160" y="0" width="60" height="45" fill="#3A3F46"/><rect x="160" y="255" width="60" height="45" fill="#3A3F46"/>
 <rect x="0" y="120" width="85" height="60" fill="#3A3F46"/><rect x="295" y="120" width="85" height="60" fill="#3A3F46"/>
 <path d="M255 90a92 92 0 0 1 20 55" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="10 8"/>
 <path d="M279 158l-8-16 16 2z" fill="#fff"/>
 <g font-family="Arial Narrow, Arial, sans-serif" text-anchor="middle">
  <rect x="172" y="258" width="36" height="50" rx="5" fill="#0B5FA5"/>
  <text x="190" y="290" fill="#fff" font-size="13" font-weight="bold">MOI</text>
  <rect x="96" y="132" width="50" height="34" rx="5" fill="#D2202F"/>
  <text x="121" y="155" fill="#fff" font-size="12" font-weight="bold">DÉJÀ</text>
  <text x="190" y="155" fill="#fff" font-size="13" font-weight="bold">ÎLOT</text>
  <text x="190" y="285" fill="#0B5FA5" font-size="0"> </text>
 </g>
 <g font-family="Arial Narrow, Arial, sans-serif" font-size="12.5" fill="#171A1F">
  <text x="6" y="215">Je cède le passage aux véhicules déjà</text>
  <text x="6" y="231">engagés dans l'anneau (qui viennent de ma gauche).</text>
 </g>
</svg>
<figcaption>Figure 2.2 — Sens giratoire : la priorité est à l'anneau</figcaption>
</figure>
<p>Il faut distinguer deux objets qui se ressemblent :</p>
<ul>
<li><strong>Le carrefour à sens giratoire</strong> : signalé par le panneau « Cédez le passage » + le panneau bleu à trois flèches. Les véhicules <strong>déjà engagés dans l'anneau sont prioritaires</strong>. On cède donc à sa gauche.</li>
<li><strong>Le rond-point simple</strong> (sans panneau de cession) : c'est la <strong>priorité à droite</strong> qui s'applique — les véhicules qui entrent sont prioritaires sur ceux qui tournent. Configuration rare mais piège classique d'examen.</li>
</ul>
<h4>Technique de franchissement d'un giratoire</h4>
<ol>
<li>Je ralentis et j'observe l'anneau à gauche.</li>
<li>Je sors à droite (1<sup>re</sup> sortie) : voie de droite, clignotant droit dès l'entrée.</li>
<li>Je vais tout droit : voie de droite en principe, pas de clignotant à l'entrée, clignotant droit juste après la sortie qui précède la mienne.</li>
<li>Je tourne à gauche ou je fais demi-tour : voie de gauche, clignotant gauche à l'entrée, puis clignotant droit avant de sortir, en surveillant l'angle mort.</li>
</ol>

<h3>2.4 Les véhicules prioritaires</h3>
<div class="table-scroll"><table>
<thead><tr><th>Catégorie</th><th>Exemples</th><th>Mon obligation</th></tr></thead>
<tbody>
<tr><td><strong>Véhicules d'intérêt général prioritaires</strong> (avertisseurs sonores + gyrophare bleu en mission)</td><td>Pompiers, SAMU/ambulances de secours, police, gendarmerie</td><td>Céder le passage <strong>en toutes circonstances</strong>, se ranger, s'arrêter si nécessaire, même au feu vert</td></tr>
<tr><td><strong>Véhicules d'intérêt général bénéficiant de facilités</strong> (gyrophare orange)</td><td>Convois exceptionnels, dépanneuses, engins de service hivernal, bennes à ordures</td><td>Faciliter leur progression sans leur céder de priorité de droit</td></tr>
<tr><td><strong>Transports en commun</strong></td><td>Bus quittant un arrêt en agglomération</td><td>Ralentir et leur laisser la possibilité de se réinsérer</td></tr>
<tr><td><strong>Trains et tramways</strong></td><td>Passage à niveau, plateforme de tram</td><td>Priorité absolue : ils ne peuvent pas s'écarter ni s'arrêter court</td></tr>
<tr><td><strong>Piétons</strong></td><td>Sur ou aux abords d'un passage protégé, dans une zone de rencontre</td><td>Céder le passage, s'arrêter ; ne jamais dépasser un véhicule arrêté devant un passage piétons</td></tr>
</tbody>
</table></div>

<h3>2.5 Cas particuliers à connaître</h3>
<ul>
<li><strong>Rétrécissement de chaussée</strong> : le panneau à flèches (rouge/noire) désigne qui passe. La flèche rouge indique le sens qui doit céder.</li>
<li><strong>Route de montagne étroite</strong> : le véhicule qui <strong>descend</strong> cède le passage à celui qui monte (démarrage en côte plus délicat) ; à défaut de place, c'est le véhicule le plus facile à manœuvrer qui recule.</li>
<li><strong>Sortie de parking, station-service, chemin de terre, propriété privée</strong> : je cède toujours le passage.</li>
<li><strong>Passage à niveau</strong> : ne jamais s'engager si l'on ne peut pas le dégager immédiatement ; l'arrêt sur les rails est interdit.</li>
<li><strong>Cortège officiel ou funéraire</strong> : on ne le coupe pas.</li>
<li><strong>Véhicule en panne dans un rétrécissement</strong> : la courtoisie prime, mais la règle de la flèche reste applicable.</li>
</ul>
<AstuceBox label="Méthode d'examen">
Devant une question de priorité, pose-toi les questions <strong>dans cet ordre</strong> : 1) y a-t-il un agent ? 2) un feu ? 3) un panneau ? 4) un marquage ? 5) sinon → priorité à droite. Puis vérifie s'il y a un piéton ou un véhicule prioritaire dans l'image.
</AstuceBox>

<QcmBlock title="QCM — Chapitre 2" :questions="questions" />
</section>
</template>
