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
  <rect x="218" y="220" width="44" height="62" rx="6" fill="#0B5FA5"/>
  <text x="240" y="258" fill="#fff" font-size="15" text-anchor="middle" font-weight="bold">MOI</text>
  <path d="M240 216v-10" stroke="#0B5FA5" stroke-width="3"/><path d="M240 198l-7 12h14z" fill="#0B5FA5"/>
  <rect x="300" y="98" width="62" height="44" rx="6" fill="#D2202F"/>
  <text x="331" y="126" fill="#fff" font-size="14" text-anchor="middle" font-weight="bold">LUI</text>
  <path d="M296 120h-12" stroke="#D2202F" stroke-width="3"/><path d="M276 120l12-7v14z" fill="#D2202F"/>
  <text x="345" y="228" font-size="13" text-anchor="middle" fill="#D2202F" font-weight="bold">LUI arrive à ma droite</text>
  <text x="120" y="256" font-size="13" text-anchor="middle" fill="#0B5FA5" font-weight="bold">je cède</text>
  <text x="120" y="272" font-size="13" text-anchor="middle" fill="#0B5FA5" font-weight="bold">le passage</text>
 </g>
</svg>
<figcaption>Figure 2.1 — Carrefour non signalé : le véhicule rouge passe en premier</figcaption>
</figure>
<MemoBox label="À retenir">
La priorité à droite s'applique aussi <strong>dans les parkings, les zones de rencontre et sur les places</strong>, dès lors qu'aucune signalisation ne l'écarte. Elle ne s'applique <strong>jamais</strong> si l'on sort d'une propriété privée, d'une station-service ou d'un parking vers une chaussée : dans ce cas, on cède toujours le passage. Pour les routes en terre, voir la règle de la route revêtue plus bas.
</MemoBox>

<h3>2.2 Les trois règles de priorité</h3>
<p>En abordant une <strong>intersection</strong> (l'endroit où des routes se rejoignent ou se coupent), il faut savoir quel conducteur doit céder le passage à l'autre. Trois (3) règles de priorité définissent l'ordre de passage des véhicules aux intersections : la <strong>priorité à droite</strong>, la <strong>priorité de passage</strong> et la <strong>perte de priorité</strong>.</p>

<h4>A. La priorité à droite</h4>
<p><strong>Principe</strong> : laisser passer l'usager dont la droite est libre, ou passer quand on a la droite libre, aux intersections de <strong>routes de même valeur</strong>.</p>
<p><strong>Elle s'applique dans 3 cas :</strong></p>
<ol>
<li>à une intersection <strong>sans signalisation</strong> (ni feu, ni panneau, ni agent) ;</li>
<li>à une intersection de <strong>deux routes secondaires</strong> signalée par le panneau <strong>AB1</strong> (croix de Saint-André) ;</li>
<li>à une intersection munie de <strong>feux tricolores dont le jaune seul clignote</strong>.</li>
</ol>
<p><strong>NB</strong> : l'intersection étant formée de routes de même valeur, la signalisation est <strong>la même dans tous les angles</strong> de l'intersection.</p>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><use href="#bg-carrefour" width="240" height="170"/><use href="#car-n" x="125" y="124" width="20" height="38" color="#0B5FA5"/><use href="#car-w" x="158" y="60" width="38" height="20" color="#D2202F"/><path d="M155 70h-30" stroke="#D2202F" stroke-width="3" marker-end="url(#m-r)"/></svg><b>Aucune signalisation</b><span>Le véhicule rouge arrive à ma droite : il passe</span></div>
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><use href="#bg-carrefour" width="240" height="170"/><use href="#car-n" x="125" y="124" width="20" height="38" color="#0B5FA5"/><use href="#car-w" x="158" y="60" width="38" height="20" color="#D2202F"/><path d="M155 70h-30" stroke="#D2202F" stroke-width="3" marker-end="url(#m-r)"/><image href="/benin/signs/78f31937bff7.webp" x="154" y="120" width="52" height="46"/></svg><b>Croix de Saint-André (AB1)</b><span>Même règle, même panneau à tous les angles</span></div>
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><use href="#bg-carrefour" width="240" height="170"/><use href="#car-n" x="125" y="124" width="20" height="38" color="#0B5FA5"/><use href="#car-w" x="158" y="60" width="38" height="20" color="#D2202F"/><path d="M155 70h-30" stroke="#D2202F" stroke-width="3" marker-end="url(#m-r)"/><rect x="170" y="122" width="24" height="40" rx="4" fill="#171A1F"/><circle cx="182" cy="142" r="8" fill="#F5B301"/><path d="M182 126v-6M200 142h6M164 142h-6" stroke="#F5B301" stroke-width="3"/></svg><b>Feu jaune clignotant</b><span>Le carrefour n'est plus régulé</span></div>
</div>
<figcaption>Figure 2.2 — Les trois cas de priorité à droite</figcaption>
</figure>

<h4>B. La priorité de passage</h4>
<p><strong>Définition</strong> : passer <strong>sans céder le passage</strong> à l'intersection.</p>
<p><strong>Elle s'applique :</strong></p>
<ol>
<li>à la rencontre du panneau <strong>losange à fond jaune (AB6)</strong>, qui indique le caractère prioritaire d'une route ;</li>
<li>à la rencontre du panneau <strong>triangulaire portant une flèche barrée (AB2)</strong>, qui annonce l'intersection d'une route à grande circulation et d'une route secondaire ;</li>
<li>à la rencontre du <strong>feu vert allumé</strong> ;</li>
<li>à la vue du <strong>profil d'un agent</strong> réglementant la circulation.</li>
</ol>
<figure>
<div class="panneaux">
 <div class="pan"><img src="/benin/signs/1398a9b56631.webp" alt="" loading="lazy">Losange jaune (AB6)</div>
 <div class="pan"><img src="/benin/signs/f3e82cdee5e5.webp" alt="" loading="lazy">Flèche barrée (AB2)</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><rect x="22" y="2" width="36" height="76" rx="6" fill="#171A1F"/><circle cx="40" cy="16" r="9" fill="#3A3F46"/><circle cx="40" cy="40" r="9" fill="#3A3F46"/><circle cx="40" cy="64" r="9" fill="#2BB673"/></svg>Feu vert</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 120 150" aria-hidden="true"><use href="#a-side" width="120" height="150"/></svg>Agent de profil</div>
</div>
<figcaption>Figure 2.3 — Ces signaux me donnent la priorité de passage</figcaption>
</figure>

<h4>C. La perte de priorité</h4>
<p><strong>Principe</strong> : céder le passage aux usagers venant de <strong>la droite et de la gauche</strong>, à l'intersection de routes <strong>n'ayant pas la même valeur</strong>.</p>
<p><strong>Elle s'applique :</strong></p>
<ol>
<li>à la rencontre du panneau <strong>STOP</strong> : on marque l'arrêt à la ligne qui suit le panneau et on cède le passage à droite et à gauche ;</li>
<li>à la rencontre du panneau <strong>triangulaire pointe en bas</strong> (« cédez le passage ») ;</li>
<li>à la rencontre des feux tricolores dont le <strong>rouge est allumé</strong> ;</li>
<li>à la rencontre <strong>de face ou de dos</strong> d'un agent réglementant la circulation ;</li>
<li>à la rencontre d'un <strong>véhicule prioritaire</strong> annonçant son approche par l'un au moins de ses avertisseurs spéciaux (sonore ou lumineux). Les véhicules prioritaires sont ceux de la <strong>police</strong>, de la <strong>gendarmerie</strong>, des <strong>sapeurs-pompiers</strong> et du <strong>S.A.M.U.</strong>, en mission.</li>
</ol>

<figure>
<div class="panneaux">
 <div class="pan"><img src="/benin/signs/6335291276c4.webp" alt="" loading="lazy">STOP</div>
 <div class="pan"><img src="/benin/signs/acc9c77a4847.webp" alt="" loading="lazy">Cédez le passage</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><rect x="22" y="2" width="36" height="76" rx="6" fill="#171A1F"/><circle cx="40" cy="16" r="9" fill="#D2202F"/><circle cx="40" cy="40" r="9" fill="#3A3F46"/><circle cx="40" cy="64" r="9" fill="#3A3F46"/></svg>Feu rouge</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 120 150" aria-hidden="true"><use href="#a-front" width="120" height="150"/><path d="M47 44H10M73 44h37" stroke="#2B4D7A" stroke-width="8" stroke-linecap="round"/></svg>Agent de face ou de dos</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 130 80" aria-hidden="true"><use href="#car-side" y="20" width="130" height="56" color="#fff"/><path d="M4 58q0-10 10-11h102q5 1 5 7v8q0 3-3 3H7q-3 0-3-3z" fill="#D2202F" opacity=".85"/><rect x="62" y="16" width="16" height="9" rx="2" fill="#0B5FA5"/><path d="M58 8l6 6M82 8l-6 6M70 2v9" stroke="#0B5FA5" stroke-width="3"/></svg>Véhicule prioritaire en mission</div>
</div>
<figcaption>Figure 2.4 — Ces signaux me font perdre la priorité</figcaption>
</figure>

<h4>Route revêtue et route en terre</h4>
<ul>
<li><strong>Hors agglomération (en campagne)</strong>, à l'intersection d'une route revêtue (bitumée) et d'une route en terre : le conducteur qui circule sur la <strong>route en terre</strong> doit céder le passage <strong>à droite et à gauche</strong>.</li>
<li><strong>En agglomération</strong>, à l'intersection d'une route revêtue et d'une route en terre : <strong>tous les véhicules appliquent la priorité à droite</strong>.</li>
</ul>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><rect width="240" height="170" fill="#E4EADF"/><rect y="55" width="240" height="60" fill="#3A3F46"/><path d="M0 85h240" stroke="#fff" stroke-width="2.5" stroke-dasharray="12 10"/><rect x="90" y="115" width="60" height="55" fill="#A8926B"/><use href="#o-tree" x="8" y="2" width="30" height="46"/><use href="#o-tree" x="196" y="118" width="30" height="46"/><use href="#car-n" x="125" y="124" width="20" height="38" color="#0B5FA5"/><use href="#car-e" x="20" y="90" width="38" height="20" color="#D2202F"/><use href="#car-w" x="182" y="60" width="38" height="20" color="#D2202F"/><path d="M60 100h30" stroke="#D2202F" stroke-width="3" marker-end="url(#m-r)"/><path d="M180 70h-30" stroke="#D2202F" stroke-width="3" marker-end="url(#m-r)"/></svg><b>Hors agglomération</b><span>Sur la terre, je cède à droite et à gauche</span></div>
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><rect width="240" height="170" fill="#E9E5DC"/><rect y="55" width="240" height="60" fill="#3A3F46"/><path d="M0 85h240" stroke="#fff" stroke-width="2.5" stroke-dasharray="12 10"/><rect x="90" y="115" width="60" height="55" fill="#A8926B"/><path d="M6 10h34v38H6zM46 22h30v26H46zM164 8h30v40h-30zM200 20h34v28h-34zM6 124h70v46H6zM164 124h70v46h-70z" fill="#C9B79C"/><use href="#car-n" x="125" y="124" width="20" height="38" color="#0B5FA5"/><use href="#car-e" x="20" y="90" width="38" height="20" color="#1B7F5A"/><use href="#car-w" x="182" y="60" width="38" height="20" color="#D2202F"/><path d="M180 70h-30" stroke="#D2202F" stroke-width="3" marker-end="url(#m-r)"/></svg><b>En agglomération</b><span>Priorité à droite pour tous : le rouge passe avant moi, le vert m'attend</span></div>
</div>
<figcaption>Figure 2.5 — Route revêtue et route en terre : tout dépend du lieu</figcaption>
</figure>
<MemoBox label="Les trois règles en un coup d'œil">
<strong>Priorité à droite</strong> : pas de signalisation, croix de Saint-André, jaune clignotant. <strong>Priorité de passage</strong> : losange jaune, triangle à flèche barrée, feu vert, agent de profil. <strong>Perte de priorité</strong> : STOP, cédez le passage, feu rouge, agent de face ou de dos, véhicule prioritaire en mission.
</MemoBox>

<h3>2.3 Les carrefours réglés par des panneaux</h3>
<div class="panneaux">
 <div class="pan"><svg width="86" height="78" aria-hidden="true"><use href="#s-danger" xlink:href="#s-danger" width="86" height="78"/><path d="M28 46l30 22M58 46l-30 22" stroke="#000" stroke-width="5"/></svg>AB1 · Croix de Saint-André<br>Priorité à droite au prochain carrefour</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><path d="M50 4 96 50 50 96 4 50Z" fill="#F5B301" stroke="#fff" stroke-width="6"/><path d="M50 16 84 50 50 84 16 50Z" fill="none" stroke="#171A1F" stroke-width="3"/></svg>AB6 · Route prioritaire<br>Je suis prioritaire</div>
 <div class="pan"><svg width="86" height="78" aria-hidden="true"><use href="#s-danger" xlink:href="#s-danger" width="86" height="78"/><path d="M43 70V36" stroke="#000" stroke-width="7"/><path d="M43 26l9 13H34z" fill="#000"/><path d="M29 52h28" stroke="#000" stroke-width="3"/></svg>AB2 · Flèche barrée<br>Prioritaire à la prochaine intersection</div>
 <div class="pan"><svg width="86" height="78" viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><path d="M4 4h92L50 86Z" fill="#D2202F"/><path d="M18 15h64L50 72Z" fill="#fff"/></svg>AB3a · Cédez le passage<br>Ralentir, céder sans s'arrêter forcément</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"><path d="M30 3h40l27 27v40l-27 27H30L3 70V30Z" fill="#D2202F" stroke="#fff" stroke-width="4"/><text x="50" y="60" fill="#fff" font-size="30" font-family="Arial Narrow, Arial" font-weight="bold" text-anchor="middle">STOP</text></svg>AB4 · STOP<br>Arrêt absolu obligatoire</div>
</div>
<div class="table-scroll"><table>
<thead><tr><th>Panneau</th><th>Ce que je dois faire</th><th>Erreur à éviter</th></tr></thead>
<tbody>
<tr><td><strong>Cédez le passage</strong> (triangle pointe en bas)</td><td>Ralentir fortement, s'assurer que la voie est libre, s'arrêter seulement si nécessaire</td><td>S'engager « au feeling » sans avoir vraiment regardé à gauche et à droite</td></tr>
<tr><td><strong>STOP</strong> (octogone rouge)</td><td><strong>Immobilisation complète</strong> du véhicule à la ligne, roues arrêtées, puis observation, puis engagement</td><td>Le « stop américain » : ralentir sans s'arrêter = infraction</td></tr>
<tr><td><strong>Intersection où je suis prioritaire</strong> (triangle à flèche barrée, AB2)</td><td>Je passe sans céder le passage à la <strong>prochaine</strong> intersection uniquement</td><td>Croire que la priorité vaut pour toutes les intersections suivantes</td></tr>
<tr><td><strong>Route prioritaire</strong> (losange jaune, AB6)</td><td>Je conserve la priorité aux carrefours suivants jusqu'au panneau de fin</td><td>Croire que l'on est prioritaire sur les piétons ou les véhicules de secours</td></tr>
<tr><td><strong>Croix de Saint-André</strong> (triangle avec croix)</td><td>Le carrefour est à priorité à droite : je ralentis et je regarde à droite</td><td>Confondre avec un panneau de priorité</td></tr>
</tbody>
</table></div>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><use href="#bg-carrefour" width="240" height="170"/><path d="M122 117h28" stroke="#fff" stroke-width="5"/><use href="#car-n" x="125" y="124" width="20" height="38" color="#0B5FA5"/><image href="/benin/signs/6335291276c4.webp" x="156" y="124" width="36" height="36"/><use href="#car-e" x="20" y="90" width="38" height="20" color="#D2202F"/><use href="#car-w" x="182" y="60" width="38" height="20" color="#D2202F"/><text x="196" y="150" font-size="13" font-weight="bold" fill="#171A1F">arrêt</text></svg><b>STOP : immobilisation complète</b><span>À la ligne, roues arrêtées, puis je regarde à gauche et à droite</span></div>
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><use href="#bg-carrefour" width="240" height="170"/><path d="M122 117h28" stroke="#fff" stroke-width="5" stroke-dasharray="7 5"/><use href="#car-n" x="125" y="124" width="20" height="38" color="#0B5FA5"/><image href="/benin/signs/acc9c77a4847.webp" x="156" y="124" width="36" height="36"/><use href="#car-e" x="20" y="90" width="38" height="20" color="#D2202F"/><text x="196" y="150" font-size="13" font-weight="bold" fill="#171A1F">ralentir</text></svg><b>Cédez le passage</b><span>Je ralentis ; je m'arrête seulement si quelqu'un arrive</span></div>
</div>
<figcaption>Figure 2.6 — STOP et Cédez le passage</figcaption>
</figure>
<figure>
<svg class="fig-large" viewBox="0 0 560 240" role="img" aria-label="Le triangle à flèche barrée ne vaut que pour la prochaine intersection ; le losange jaune vaut pour toutes les intersections jusqu'au panneau de fin">
 <rect width="560" height="240" fill="#EDEFF2"/>
 <rect y="24" width="560" height="44" fill="#3A3F46"/><rect x="230" width="36" height="110" fill="#3A3F46"/><rect x="430" width="36" height="110" fill="#3A3F46"/>
 <rect y="148" width="560" height="44" fill="#3A3F46"/><rect x="230" y="124" width="36" height="110" fill="#3A3F46"/><rect x="430" y="124" width="36" height="110" fill="#3A3F46"/>
 <use href="#car-e" x="74" y="48" width="44" height="18" color="#0B5FA5"/><use href="#car-e" x="74" y="172" width="44" height="18" color="#0B5FA5"/>
 <image href="/benin/signs/f3e82cdee5e5.webp" x="136" y="72" width="44" height="40"/><image href="/benin/signs/1398a9b56631.webp" x="136" y="196" width="42" height="42"/><image href="/benin/signs/ddf32959ef83.webp" x="498" y="196" width="42" height="42"/>
 <use href="#o-ok" x="236" y="28" width="24" height="24"/><use href="#o-no" x="436" y="28" width="24" height="24"/><use href="#o-ok" x="236" y="152" width="24" height="24"/><use href="#o-ok" x="436" y="152" width="24" height="24"/>
 <g font-size="14" fill="#171A1F" font-weight="bold"><text x="282" y="92">prioritaire ici seulement</text><text x="472" y="92">plus ensuite</text><text x="282" y="216">prioritaire ici</text><text x="384" y="216">et ici</text></g>
</svg>
<figcaption>Figure 2.7 — Flèche barrée : une seule intersection. Losange : jusqu'au panneau de fin</figcaption>
</figure>
<AttentionBox label="Attention">
Au STOP, la ligne d'arrêt est parfois placée en retrait pour la visibilité. On s'immobilise <strong>d'abord</strong> à la ligne, puis on peut avancer lentement (« deuxième arrêt ») jusqu'à voir la route.
</AttentionBox>

<h3>2.4 Le carrefour à sens giratoire</h3>
<figure>
<svg viewBox="0 0 380 350" role="img" aria-label="Carrefour à sens giratoire">
 <rect width="380" height="350" fill="#EDEFF2"/>
 <circle cx="190" cy="150" r="105" fill="#3A3F46"/>
 <circle cx="190" cy="150" r="48" fill="#8FA98C" stroke="#fff" stroke-width="4"/>
 <rect x="160" y="0" width="60" height="45" fill="#3A3F46"/><rect x="160" y="255" width="60" height="45" fill="#3A3F46"/>
 <rect x="0" y="120" width="85" height="60" fill="#3A3F46"/><rect x="295" y="120" width="85" height="60" fill="#3A3F46"/>
 <path d="M275 145a92 92 0 0 0-20-55" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="10 8"/>
 <path d="M245 78l16 7-11 11z" fill="#fff"/>
 <g font-family="Arial Narrow, Arial, sans-serif" text-anchor="middle">
  <rect x="192" y="252" width="27" height="46" rx="5" fill="#0B5FA5"/>
  <text x="205.5" y="279" fill="#fff" font-size="10.5" font-weight="bold">MOI</text>
  <rect x="96" y="132" width="50" height="34" rx="5" fill="#D2202F"/>
  <text x="121" y="155" fill="#fff" font-size="12" font-weight="bold">DÉJÀ</text>
  <text x="190" y="155" fill="#fff" font-size="13" font-weight="bold">ÎLOT</text>
 </g>
 <g font-family="Arial Narrow, Arial, sans-serif" font-size="15" fill="#171A1F" text-anchor="middle">
  <text x="190" y="322">Je cède le passage aux véhicules déjà engagés</text>
  <text x="190" y="340">dans l'anneau (ils viennent de ma gauche).</text>
 </g>
</svg>
<figcaption>Figure 2.8 — Sens giratoire : la priorité est à l'anneau</figcaption>
</figure>
<p>Il faut distinguer deux objets qui se ressemblent :</p>
<ul>
<li><strong>Le carrefour à sens giratoire</strong> : signalé par le panneau « Cédez le passage » + le panneau bleu à trois flèches. Les véhicules <strong>déjà engagés dans l'anneau sont prioritaires</strong>. On cède donc à sa gauche.</li>
<li><strong>Le rond-point simple</strong> (sans panneau de cession) : c'est la <strong>priorité à droite</strong> qui s'applique — les véhicules qui entrent sont prioritaires sur ceux qui tournent. Configuration rare mais piège classique d'examen.</li>
</ul>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 200 200" aria-hidden="true"><use href="#bg-giratoire" width="200" height="200"/><use href="#car-n" x="104" y="162" width="16" height="30" color="#0B5FA5"/><use href="#car-n" x="-8" y="-15" width="16" height="30" transform="translate(62 138) rotate(135)" color="#D2202F"/><path d="M78 158q22 14 44 2" fill="none" stroke="#D2202F" stroke-width="3" marker-end="url(#m-r)"/><image href="/benin/signs/acc9c77a4847.webp" x="130" y="164" width="34" height="34"/></svg><b>Sens giratoire (panneau « cédez »)</b><span>Je cède à celui qui est déjà dans l'anneau, à ma gauche</span></div>
 <div class="scene"><svg viewBox="0 0 200 200" aria-hidden="true"><use href="#bg-giratoire" width="200" height="200"/><use href="#car-n" x="104" y="162" width="16" height="30" color="#1B7F5A"/><use href="#car-n" x="-8" y="-15" width="16" height="30" transform="translate(62 138) rotate(135)" color="#5C636D"/><path d="M112 158v-14" stroke="#1B7F5A" stroke-width="3" marker-end="url(#m-g)"/></svg><b>Rond-point simple (sans panneau)</b><span>Priorité à droite : celui qui entre passe, celui de l'anneau attend</span></div>
</div>
<figcaption>Figure 2.9 — Deux carrefours qui se ressemblent, deux règles opposées</figcaption>
</figure>
<h4>Technique de franchissement d'un giratoire</h4>
<ol>
<li>Je ralentis et j'observe l'anneau à gauche.</li>
<li>Je sors à droite (1<sup>re</sup> sortie) : voie de droite, clignotant droit dès l'entrée.</li>
<li>Je vais tout droit : voie de droite en principe, pas de clignotant à l'entrée, clignotant droit juste après la sortie qui précède la mienne.</li>
<li>Je tourne à gauche ou je fais demi-tour : voie de gauche, clignotant gauche à l'entrée, puis clignotant droit avant de sortir, en surveillant l'angle mort.</li>
</ol>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 200 200" aria-hidden="true"><use href="#bg-giratoire" width="200" height="200"/><path d="M112 196v-47.5A50 50 0 0 0 148.5 112H196" fill="none" stroke="#F5B301" stroke-width="4" marker-end="url(#m-a)"/></svg><b>Je sors à droite</b><span>Clignotant droit dès l'entrée</span></div>
 <div class="scene"><svg viewBox="0 0 200 200" aria-hidden="true"><use href="#bg-giratoire" width="200" height="200"/><path d="M112 196v-47.5A50 50 0 0 0 112 51.5V4" fill="none" stroke="#F5B301" stroke-width="4" marker-end="url(#m-a)"/></svg><b>Je vais tout droit</b><span>Clignotant droit après la sortie précédente</span></div>
 <div class="scene"><svg viewBox="0 0 200 200" aria-hidden="true"><use href="#bg-giratoire" width="200" height="200"/><path d="M108 196v-54.8A42 42 0 1 0 59.8 88H4" fill="none" stroke="#F5B301" stroke-width="4" marker-end="url(#m-a)"/></svg><b>Je tourne à gauche</b><span>Clignotant gauche à l'entrée, puis droit avant de sortir</span></div>
</div>
<figcaption>Figure 2.10 — Les trajectoires dans le giratoire (sens inverse des aiguilles d'une montre)</figcaption>
</figure>

<h3>2.5 Les véhicules prioritaires</h3>
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

<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-route" width="240" height="150"/><use href="#car-e" x="10" y="52" width="66" height="34" color="#fff"/><path d="M14 69h56" stroke="#D2202F" stroke-width="5"/><rect x="36" y="63" width="12" height="12" rx="2" fill="#0B5FA5"/><path d="M42 58V46M30 56l5 6M54 56l-5 6" stroke="#7CB9EE" stroke-width="3"/><path d="M84 66h34" stroke="#fff" stroke-width="3" marker-end="url(#m-w)"/><use href="#car-e" x="150" y="84" width="56" height="20" color="#0B5FA5"/><text x="120" y="130" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">je me range, je laisse passer</text><text x="120" y="28" font-size="15" fill="#171A1F" text-anchor="middle">gyrophare et sirène en mission</text></svg><b>Gyrophare bleu</b><span>Police, gendarmerie, pompiers, SAMU : je cède en toutes circonstances, même au feu vert</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><use href="#truck-side" x="22" y="42" width="196" height="82" color="#F5B301"/><rect x="146" y="46" width="22" height="10" rx="2" fill="#E87722"/><path d="M157 42v-10M144 38l5 5M170 38l-5 5" stroke="#E87722" stroke-width="3"/><path d="M0 124h240v26H0z" fill="#3A3F46"/></svg><b>Gyrophare orange</b><span>Convoi, dépanneuse, benne : je facilite, sans priorité de droit</span></div>
</div>
<figcaption>Figure 2.11 — Deux couleurs de gyrophare, deux obligations</figcaption>
</figure>

<h3>2.6 Cas particuliers à connaître</h3>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><path d="M0 45h70l34 18h36l34-18h66v60h-66l-34-18h-36l-34 18H0z" fill="#3A3F46"/><use href="#car-e" x="20" y="79" width="44" height="22" color="#D2202F"/><use href="#car-w" x="104" y="64" width="44" height="22" color="#0B5FA5"/><image href="/benin/signs/053d4a601c59.webp" x="4" y="2" width="40" height="40"/></svg><b>Rétrécissement</b><span>La flèche rouge du panneau : c'est mon sens qui cède</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-route" width="240" height="150"/><rect x="106" y="45" width="40" height="60" fill="#5A5F66"/><path d="M116 0v150M136 0v150" stroke="#2A2E33" stroke-width="5"/><path d="M106 12h40M106 28h40M106 122h40M106 138h40" stroke="#7A5A3A" stroke-width="5"/><use href="#car-e" x="108" y="79" width="44" height="22" color="#5C636D"/><use href="#o-no" x="118" y="78" width="24" height="24"/><use href="#car-e" x="40" y="79" width="44" height="22" color="#0B5FA5"/></svg><b>Passage à niveau</b><span>Jamais d'arrêt sur les rails : je m'engage si je peux dégager</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect y="20" width="240" height="60" fill="#3A3F46"/><path d="M0 50h240" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/><rect x="96" y="80" width="48" height="24" fill="#6A6F76"/><rect x="60" y="104" width="120" height="46" fill="#B8BCC2"/><use href="#car-n" x="110" y="96" width="20" height="38" color="#0B5FA5"/><use href="#car-e" x="20" y="54" width="44" height="22" color="#D2202F"/><use href="#car-w" x="176" y="24" width="44" height="22" color="#D2202F"/><text x="120" y="146" font-size="13" text-anchor="middle" fill="#171A1F" font-weight="bold">station, parking</text></svg><b>Sortie de parking</b><span>Je cède toujours le passage, à droite et à gauche</span></div>
</div>
<figcaption>Figure 2.12 — Trois cas particuliers</figcaption>
</figure>
<ul>
<li><strong>Rétrécissement de chaussée</strong> : le panneau à flèches (rouge/noire) désigne qui passe. La flèche rouge indique le sens qui doit céder.</li>
<li><strong>Route de montagne étroite ou pente</strong> : le véhicule qui <strong>descend</strong> doit s'arrêter à temps, quelle que soit sa catégorie ; si l'un des deux doit reculer, voir l'ordre de la marche arrière au <router-link :to="{ name: 'chapitre', params: { id: '3' } }">chapitre 3</router-link>.</li>
<li><strong>Sortie de parking, station-service, propriété privée</strong> : je cède toujours le passage.</li>
<li><strong>Route en terre</strong> : hors agglomération, je cède à droite et à gauche en arrivant sur la route revêtue ; en agglomération, priorité à droite pour tous.</li>
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
