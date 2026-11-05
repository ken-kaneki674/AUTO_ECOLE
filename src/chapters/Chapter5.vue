<script setup>
import MemoBox from '../components/MemoBox.vue'
import AttentionBox from '../components/AttentionBox.vue'
import AstuceBox from '../components/AstuceBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import ValeurBenin from '../components/ValeurBenin.vue'
import questions from '../data/questions/ch5.json'
</script>

<template>
<section class="chap" id="ch5">
<div class="chap-head">
  <span class="borne">05</span>
  <div><span class="fil">Chapitre 5</span><h2>La vitesse</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Comprendre le lien vitesse / distance d'arrêt / gravité du choc, connaître les limitations, calculer une distance de sécurité, adapter sa vitesse aux circonstances.</p>

<h3>5.1 La règle d'or : la vitesse adaptée</h3>
<p>La voiture permet de se déplacer rapidement ; mais si la vitesse offre des avantages incontestables, elle présente aussi des risques qu'il vaut mieux connaître.</p>
<p><strong>La vitesse</strong> est la <strong>distance parcourue en un temps donné</strong>. On l'exprime habituellement en <strong>kilomètres à l'heure (km/h)</strong>, mais, pour mieux mesurer la rapidité du déplacement, on l'exprime aussi en <strong>mètres par seconde (m/s)</strong> : en conduite, tout est affaire de mètres et de secondes.</p>
<MemoBox label="La distance parcourue en une seconde">
On la calcule approximativement en multipliant <strong>le chiffre des dizaines de la vitesse par 3</strong> : à 60 km/h, la voiture parcourt 6 × 3 = <strong>18 m par seconde</strong> environ ; à 90 km/h, 9 × 3 = <strong>27 m</strong>. C'est la base de la <strong>distance de sécurité</strong> (voir 5.5).
</MemoBox>
<figure>
<svg class="fig-large" viewBox="0 0 560 170" role="img" aria-label="En une seconde, une voiture parcourt environ 18 mètres à 60 km/h et 27 mètres à 90 km/h">
 <rect width="560" height="170" fill="#EDEFF2"/>
 <g font-size="17" font-weight="bold" fill="#171A1F"><text x="12" y="30">60 km/h</text><text x="12" y="112">90 km/h</text></g>
 <rect x="100" y="34" width="288" height="26" fill="#3A3F46"/><rect x="100" y="116" width="432" height="26" fill="#3A3F46"/>
 <use href="#car-e" x="100" y="36" width="42" height="22" color="#0B5FA5"/><use href="#car-e" x="346" y="36" width="42" height="22" color="#0B5FA5" opacity=".45"/>
 <use href="#car-e" x="100" y="118" width="42" height="22" color="#D2202F"/><use href="#car-e" x="490" y="118" width="42" height="22" color="#D2202F" opacity=".45"/>
 <path d="M146 47h194" stroke="#F5B301" stroke-width="3" marker-end="url(#m-a)"/><path d="M146 129h338" stroke="#F5B301" stroke-width="3" marker-end="url(#m-a)"/>
 <g font-size="17" fill="#171A1F" text-anchor="middle"><text x="244" y="26">6 × 3 = <tspan font-weight="bold">18 m en 1 seconde</tspan></text><text x="316" y="108">9 × 3 = <tspan font-weight="bold">27 m en 1 seconde</tspan></text></g>
</svg>
<figcaption>Figure 5.1 — Une seule seconde, déjà tant de mètres</figcaption>
</figure>
<p>La limitation affichée est un <strong>maximum</strong>, jamais une obligation. Le conducteur doit <strong>rester constamment maître de son véhicule</strong> et adapter sa vitesse à l'état de la route, au trafic, à la météo, à la visibilité, à la charge du véhicule et à sa propre forme.</p>

<h3>5.2 Les limitations de vitesse</h3>
<figure>
<div class="panneaux">
 <div class="pan"><svg width="80" height="80" viewBox="0 0 100 100" aria-hidden="true"><use href="#s-interdit" width="100" height="100"/><text x="50" y="64" font-size="38" font-weight="bold" text-anchor="middle">50</text></svg>Agglomération</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 100 100" aria-hidden="true"><use href="#s-interdit" width="100" height="100"/><text x="50" y="64" font-size="38" font-weight="bold" text-anchor="middle">90</text></svg>Route à double sens ⚠<br>Permis de moins d'un an</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 100 100" aria-hidden="true"><use href="#s-interdit" width="100" height="100"/><text x="50" y="63" font-size="32" font-weight="bold" text-anchor="middle">110</text></svg>Route pour automobiles</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 100 100" aria-hidden="true"><use href="#s-interdit" width="100" height="100"/><text x="50" y="63" font-size="32" font-weight="bold" text-anchor="middle">130</text></svg>Autoroute</div>
</div>
<figcaption>Figure 5.2 — Les quatre chiffres à connaître</figcaption>
</figure>
<div class="table-scroll"><table>
<thead><tr><th>Type de voie</th><th>Vitesse maximale</th></tr></thead>
<tbody>
<tr><td>Agglomération</td><td><ValeurBenin k="vitesse_agglomeration" /></td></tr>
<tr><td>Route à double sens</td><td><ValeurBenin k="vitesse_hors_agglomeration" /></td></tr>
<tr><td>Route pour automobiles (voie express)</td><td><ValeurBenin k="vitesse_voie_express" /></td></tr>
<tr><td>Autoroute</td><td><ValeurBenin k="vitesse_autoroute" /></td></tr>
<tr><td>Conducteur dont le permis a moins d'un an</td><td><ValeurBenin k="vitesse_novice" /> sur route</td></tr>
</tbody>
</table></div>
<p>Le manuel de la DGTT fixe aussi des limitations en rase campagne pour les <strong>véhicules de transport en commun</strong> selon leur poids :</p>
<div class="table-scroll"><table>
<thead><tr><th>Poids du véhicule de transport en commun</th><th>Vitesse maximale en rase campagne</th></tr></thead>
<tbody>
<tr><td>de 10 à 15 t</td><td>90 km/h</td></tr>
<tr><td>de 15 à 19 t</td><td>75 km/h</td></tr>
<tr><td>de 19 à 26 t</td><td>65 km/h</td></tr>
<tr><td>plus de 26 t</td><td>60 km/h</td></tr>
</tbody>
</table></div>
<AttentionBox label="⚠ À vérifier">
Sur autoroute et sur route pour automobiles, la vitesse maximale dépend de la législation en vigueur dans le pays : au Bénin, <strong>130 km/h sur autoroute</strong> et <strong>110 km/h sur route pour automobiles</strong>. Les vitesses marquées ⚠ ne sont pas précisées par le manuel de la DGTT. Des limitations locales plus basses s'appliquent souvent à proximité des écoles et des marchés. Retiens le <strong>raisonnement</strong> et confirme les <strong>chiffres</strong> auprès de ton auto-école.
</AttentionBox>
<p>D'autres limitations s'appliquent en permanence : véhicules lourds, véhicules tractant une remorque, conducteurs novices, transports en commun. Par temps de pluie ou de faible visibilité, la vitesse doit être réduite.</p>

<h3>5.3 La distance d'arrêt</h3>
<p>La distance d'arrêt est la somme de deux distances :</p>
<p style="text-align:center;font-family:var(--font-tech);background:var(--surface);border:1px solid var(--ligne);padding:12px"><strong>DISTANCE D'ARRÊT = distance de réaction + distance de freinage</strong></p>
<ul>
<li><strong>Temps de réaction</strong> : laps de temps qui s'écoule entre la <strong>perception de l'information</strong> (obstacle aperçu) et l'<strong>action musculaire</strong> (le pied commence à appuyer sur le frein). Sa durée moyenne est estimée à <strong>1 seconde</strong> environ. La <strong>fatigue</strong> et l'<strong>état d'ivresse</strong> (comme le téléphone ou certains médicaments) l'augmentent.</li>
<li><strong>Distance de réaction</strong> : distance parcourue pendant le temps de réaction.</li>
<li><strong>Distance de freinage</strong> : distance parcourue entre le moment où le conducteur <strong>commence à freiner</strong> et celui où la voiture <strong>s'arrête</strong>. Elle dépend du <strong>type de revêtement</strong>, de la <strong>vitesse</strong>, de l'<strong>état des pneumatiques</strong> et de l'<strong>état des amortisseurs</strong>.</li>
<li><strong>Distance d'arrêt</strong> : distance totale parcourue entre le moment où le conducteur <strong>voit l'obstacle</strong> et celui où sa voiture <strong>s'arrête</strong>.</li>
</ul>
<figure>
<svg class="fig-large" viewBox="0 0 600 230" role="img" aria-label="Le conducteur voit l'obstacle, roule pendant le temps de réaction, puis freine jusqu'à l'arrêt : la distance d'arrêt est la somme des deux">
 <rect width="600" height="230" fill="#EDEFF2"/><rect y="98" width="600" height="46" fill="#3A3F46"/>
 <use href="#car-side" x="12" y="58" width="96" height="42" color="#0B5FA5"/>
 <use href="#p-person" x="540" y="50" width="22" height="52" color="#D2202F"/>
 <path d="M84 68 530 60" stroke="#0B5FA5" stroke-width="2" stroke-dasharray="6 6"/>
 <text x="300" y="50" font-size="16" font-weight="bold" fill="#0B5FA5" text-anchor="middle">je vois l'obstacle</text>
 <rect x="60" y="152" width="190" height="22" fill="#F5B301"/><rect x="250" y="152" width="270" height="22" fill="#D2202F"/>
 <path d="M60 144v36M250 144v36M520 144v36" stroke="#171A1F" stroke-width="2"/>
 <text x="155" y="168" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">réaction (environ 1 s)</text><text x="385" y="168" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">freinage</text>
 <path d="M60 196h460" stroke="#171A1F" stroke-width="2"/><path d="M60 190v12M520 190v12" stroke="#171A1F" stroke-width="2"/>
 <text x="290" y="220" font-size="17" font-weight="bold" fill="#171A1F" text-anchor="middle">DISTANCE D'ARRÊT</text>
 <g font-size="14" fill="#171A1F"><text x="60" y="118" fill="#fff">je vois</text><text x="256" y="118" fill="#fff">je freine</text><text x="516" y="118" fill="#fff" text-anchor="end">arrêt</text></g>
</svg>
<figcaption>Figure 5.3 — La distance d'arrêt s'additionne en deux temps</figcaption>
</figure>
<MemoBox label="La formule du manuel DGTT">
<strong>Distance d'arrêt (m, sur sol sec)</strong> ≈ (V ÷ 10) × (V ÷ 10) &nbsp;→ à 50 km/h : 5 × 5 = <strong>25 m</strong> ; à 90 km/h : 9 × 9 = <strong>81 m</strong>.<br>
Doubler la vitesse <strong>quadruple</strong> la distance. <strong>Sur sol humide</strong>, cette distance est beaucoup plus grande : elle <strong>augmente de moitié</strong> (à 90 km/h, environ 81 + 40 = 120 m).
</MemoBox>
<p>C'est la valeur qu'attendent les questions officielles : « à 90 km/h, ma distance d'arrêt est d'environ 81 mètres » (Q392), et inversement « je m'arrête après 81 m : je roulais à 90 km/h » (Q446).</p>
<figure>
<svg viewBox="0 0 680 230" role="img" aria-label="Distances d'arrêt selon la vitesse, d'après le manuel DGTT">
 <g font-family="Arial Narrow, Arial, sans-serif" font-size="13">
  <text x="10" y="20" font-weight="bold" font-size="14" letter-spacing="1">DISTANCE D'ARRÊT SUR CHAUSSÉE SÈCHE : (V ÷ 10)²</text>
  <g>
   <text x="10" y="56" font-weight="bold">50 km/h</text>
   <rect x="86" y="42" width="100" height="20" fill="#D2202F"/>
   <text x="196" y="57" fill="#171A1F">5 × 5 = <tspan font-weight="bold">25 m</tspan></text>
  </g>
  <g>
   <text x="10" y="96" font-weight="bold">70 km/h</text>
   <rect x="86" y="82" width="196" height="20" fill="#D2202F"/>
   <text x="292" y="97" fill="#171A1F">7 × 7 = <tspan font-weight="bold">49 m</tspan></text>
  </g>
  <g>
   <text x="10" y="136" font-weight="bold">90 km/h</text>
   <rect x="86" y="122" width="324" height="20" fill="#D2202F"/>
   <text x="420" y="137" fill="#171A1F">9 × 9 = <tspan font-weight="bold">81 m</tspan></text>
  </g>
  <g>
   <text x="10" y="176" font-weight="bold">110 km/h</text>
   <rect x="86" y="162" width="484" height="20" fill="#D2202F"/>
   <text x="580" y="177" fill="#171A1F">11 × 11 = <tspan font-weight="bold">121 m</tspan></text>
  </g>
  <text x="10" y="216" font-size="12" fill="#5C636D">Sur sol humide, la distance d'arrêt augmente de moitié : environ 120 m à 90 km/h.</text>
 </g>
</svg>
<figcaption>Figure 5.4 — Ce que coûte réellement chaque tranche de vitesse</figcaption>
</figure>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 300 130" aria-hidden="true"><rect width="300" height="130" fill="#EDEFF2"/><g font-size="15" font-weight="bold" fill="#171A1F"><text x="8" y="36">50 km/h</text><text x="8" y="92">100 km/h</text></g><rect x="74" y="20" width="56" height="22" fill="#F5B301"/><rect x="74" y="76" width="216" height="22" fill="#D2202F"/><text x="140" y="37" font-size="15" font-weight="bold" fill="#171A1F">25 m</text><text x="182" y="93" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">100 m : 4 fois plus</text><path d="M60 50v18" stroke="#171A1F" stroke-width="2" marker-end="url(#m-k)"/><text x="48" y="64" font-size="13" text-anchor="end" fill="#5C636D">× 2</text></svg><b>Deux fois plus vite</b><span>Quatre fois plus de distance</span></div>
 <div class="scene"><svg viewBox="0 0 300 130" aria-hidden="true"><rect width="300" height="130" fill="#EDEFF2"/><g font-size="15" font-weight="bold" fill="#171A1F"><text x="8" y="36">sec</text><text x="8" y="92">humide</text></g><rect x="74" y="20" width="146" height="22" fill="#F5B301"/><rect x="74" y="76" width="216" height="22" fill="#0B5FA5"/><text x="228" y="37" font-size="15" font-weight="bold" fill="#171A1F">81 m</text><text x="182" y="93" font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">environ 120 m</text><path d="M120 110l-4 8M160 110l-4 8M200 110l-4 8M240 110l-4 8" stroke="#0B5FA5" stroke-width="3" stroke-linecap="round"/></svg><b>À 90 km/h, sur sol humide</b><span>La distance augmente de moitié</span></div>
</div>
<figcaption>Figure 5.5 — Vitesse et pluie allongent la distance d'arrêt</figcaption>
</figure>

<h3>5.4 L'énergie du choc</h3>
<p>L'énergie cinétique d'un véhicule est proportionnelle au <strong>carré de la vitesse</strong> : <em>E = ½ m V²</em>. À 100 km/h, un choc frontal contre un obstacle fixe équivaut à une chute d'un immeuble d'environ <strong>12 étages</strong>. C'est pourquoi quelques kilomètres/heure de moins changent radicalement les conséquences d'un accident, notamment pour un piéton :</p>
<ul>
<li>Renversé à <strong>30 km/h</strong> : le piéton survit dans la très grande majorité des cas.</li>
<li>Renversé à <strong>50 km/h</strong> : environ un piéton sur deux est tué.</li>
<li>Renversé à <strong>60 km/h</strong> et au-delà : le décès est la règle.</li>
</ul>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 220 170" aria-hidden="true"><rect width="220" height="170" fill="#DCEBF7"/><rect y="154" width="220" height="16" fill="#3A3F46"/><rect x="26" y="10" width="82" height="144" fill="#A8AEB6"/><g fill="#DCEBF7"><path d="M34 16h14v8H34zM54 16h14v8H54zM74 16h14v8H74zM34 36h14v8H34zM54 36h14v8H54zM74 36h14v8H74zM34 56h14v8H34zM54 56h14v8H54zM74 56h14v8H74zM34 76h14v8H34zM54 76h14v8H54zM74 76h14v8H74zM34 96h14v8H34zM54 96h14v8H54zM74 96h14v8H74zM34 116h14v8H34zM54 116h14v8H54zM74 116h14v8H74z"/></g><use href="#car-side" x="-26" y="-12" width="52" height="24" transform="translate(150 54) rotate(70)" color="#D2202F"/><text x="168" y="118" font-size="16" font-weight="bold" fill="#171A1F" text-anchor="middle">12 étages</text></svg><b>Choc à 100 km/h</b><span>Comme une chute du 12e étage</span></div>
 <div class="scene"><svg viewBox="0 0 220 170" aria-hidden="true"><rect width="220" height="170" fill="#E9F5EF"/><text x="110" y="40" font-size="30" font-weight="bold" fill="#1B7F5A" text-anchor="middle">30 km/h</text><g color="#1B7F5A"><use href="#p-person" x="16" y="62" width="30" height="72"/><use href="#p-person" x="56" y="62" width="30" height="72"/><use href="#p-person" x="96" y="62" width="30" height="72"/><use href="#p-person" x="136" y="62" width="30" height="72"/></g><use href="#p-person" x="176" y="62" width="30" height="72" color="#C9CDD4"/></svg><b>Piéton renversé à 30 km/h</b><span>Il survit dans la très grande majorité des cas</span></div>
 <div class="scene"><svg viewBox="0 0 220 170" aria-hidden="true"><rect width="220" height="170" fill="#FFF4D6"/><text x="110" y="40" font-size="30" font-weight="bold" fill="#B37A00" text-anchor="middle">50 km/h</text><g color="#1B7F5A"><use href="#p-person" x="56" y="62" width="30" height="72"/></g><use href="#p-person" x="136" y="62" width="30" height="72" color="#C9CDD4"/></svg><b>Piéton renversé à 50 km/h</b><span>Environ un sur deux est tué</span></div>
 <div class="scene"><svg viewBox="0 0 220 170" aria-hidden="true"><rect width="220" height="170" fill="#FCEBEC"/><text x="110" y="40" font-size="30" font-weight="bold" fill="#D2202F" text-anchor="middle">60 km/h</text><g color="#C9CDD4"><use href="#p-person" x="16" y="62" width="30" height="72"/><use href="#p-person" x="56" y="62" width="30" height="72"/><use href="#p-person" x="96" y="62" width="30" height="72"/><use href="#p-person" x="136" y="62" width="30" height="72"/><use href="#p-person" x="176" y="62" width="30" height="72"/></g></svg><b>Piéton renversé à 60 km/h et plus</b><span>Le décès est la règle</span></div>
</div>
<figcaption>Figure 5.6 — Quelques km/h changent tout (en gris : piétons tués)</figcaption>
</figure>

<h3>5.5 Les distances de sécurité</h3>
<p>La distance de sécurité correspond au moins à la <strong>distance parcourue en une seconde</strong> (chiffre des dizaines × 3). On retrouve ainsi les <strong>intervalles minimaux</strong> du manuel de la DGTT :</p>
<div class="table-scroll"><table>
<thead><tr><th>Situation</th><th>Intervalle minimal</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Deux véhicules qui se suivent à <strong>50 km/h</strong></td><td><strong>15 m</strong> environ</td><td>Q516</td></tr>
<tr><td>Derrière un véhicule qui roule à <strong>90 km/h</strong></td><td><strong>25 m</strong> environ</td><td>Q460</td></tr>
<tr><td>Deux <strong>poids lourds</strong> (plus de 3,5 t de PTAC et plus de 7 m de long) qui se suivent en rase campagne</td><td><strong>50 m</strong> environ</td><td>Q720, Q774</td></tr>
</tbody>
</table></div>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 90" aria-hidden="true"><rect width="240" height="90" fill="#3A3F46"/><path d="M0 12h240M0 78h240" stroke="#fff" stroke-width="2"/><use href="#car-e" x="186" y="32" width="46" height="24" color="#5C636D"/><use href="#car-e" x="84" y="32" width="46" height="24" color="#0B5FA5"/><path d="M134 44h48" stroke="#F5B301" stroke-width="3" marker-end="url(#m-a)"/><text x="158" y="28" font-size="17" font-weight="bold" fill="#F5B301" text-anchor="middle">15 m</text></svg><b>À 50 km/h</b></div>
 <div class="scene"><svg viewBox="0 0 240 90" aria-hidden="true"><rect width="240" height="90" fill="#3A3F46"/><path d="M0 12h240M0 78h240" stroke="#fff" stroke-width="2"/><use href="#car-e" x="186" y="32" width="46" height="24" color="#5C636D"/><use href="#car-e" x="22" y="32" width="46" height="24" color="#0B5FA5"/><path d="M72 44h110" stroke="#F5B301" stroke-width="3" marker-end="url(#m-a)"/><text x="126" y="28" font-size="17" font-weight="bold" fill="#F5B301" text-anchor="middle">25 m</text></svg><b>À 90 km/h</b></div>
 <div class="scene"><svg viewBox="0 0 240 90" aria-hidden="true"><rect width="240" height="90" fill="#3A3F46"/><path d="M0 12h240M0 78h240" stroke="#fff" stroke-width="2"/><use href="#truck-e" x="172" y="32" width="64" height="24" color="#5C636D"/><use href="#truck-e" x="4" y="32" width="64" height="24" color="#0B5FA5"/><path d="M72 44h96" stroke="#F5B301" stroke-width="3" marker-end="url(#m-a)"/><text x="120" y="28" font-size="17" font-weight="bold" fill="#F5B301" text-anchor="middle">50 m</text></svg><b>Deux poids lourds</b></div>
</div>
<figcaption>Figure 5.7 — Les intervalles minimaux (schémas sans échelle)</figcaption>
</figure>
<p>L'intervalle entre poids lourds sert à éviter le choc en cas de freinage brusque et à <strong>faciliter le dépassement</strong> par les véhicules légers. Par temps de pluie, on augmente toujours l'intervalle.</p>
<AstuceBox label="Conseil pratique : les deux secondes">
Ce ne sont que des minimums. En conduite, laisse au moins <strong>2 secondes</strong> (3 sous la pluie) : repère un point fixe (panneau, arbre) ; quand le véhicule de devant le dépasse, compte « <em>mille un, mille deux</em> ». Si tu atteins le point avant la fin du décompte, tu es trop près.
</AstuceBox>
<figure>
<svg class="fig-large" viewBox="0 0 560 190" role="img" aria-label="Quand le véhicule de devant passe un arbre, je compte mille un, mille deux avant d'y arriver à mon tour">
 <rect width="560" height="190" fill="#EDEFF2"/><rect y="104" width="560" height="50" fill="#3A3F46"/>
 <use href="#o-tree" x="290" y="40" width="44" height="66"/>
 <path d="M312 104v50" stroke="#F5B301" stroke-width="3" stroke-dasharray="6 5"/>
 <use href="#car-e" x="350" y="114" width="60" height="30" color="#5C636D"/>
 <use href="#car-e" x="60" y="114" width="60" height="30" color="#0B5FA5"/>
 <path d="M126 129h174" stroke="#fff" stroke-width="3" marker-end="url(#m-w)"/>
 <g font-size="18" font-weight="bold" fill="#0B5FA5" text-anchor="middle"><text x="130" y="60">« mille un…</text><text x="130" y="84">mille deux »</text></g>
 <text x="280" y="178" font-size="16" fill="#171A1F" text-anchor="middle">J'arrive au point fixe avant la fin du décompte ? Je suis trop près.</text>
 <text x="440" y="84" font-size="16" fill="#5C636D" text-anchor="middle">il vient de passer l'arbre</text>
</svg>
<figcaption>Figure 5.8 — La méthode des deux secondes</figcaption>
</figure>

<h3>5.6 Quand réduire sa vitesse ?</h3>
<p>La route n'est pas toujours libre : la réglementation fixe une vitesse maximale à ne jamais dépasser, et la <strong>réduction de vitesse</strong> s'impose dans les cas suivants :</p>
<ul>
<li>devant les <strong>panneaux de limitation de vitesse</strong> ;</li>
<li><strong>en agglomération</strong> (à l'entrée d'une ville).</li>
</ul>
<p><strong>Visibilité réduite = vitesse réduite</strong> :</p>
<ul>
<li>dans les <strong>virages</strong> et au <strong>sommet d'une côte</strong> ;</li>
<li>à l'approche des <strong>intersections</strong> et des <strong>passages à niveau</strong> ;</li>
<li>la nuit, quand on est <strong>ébloui</strong> par les feux de route d'un autre usager ;</li>
<li>par temps de <strong>pluie</strong>, de <strong>brouillard</strong> ou de neige.</li>
</ul>
<p><strong>Route encombrée = vitesse réduite</strong> :</p>
<ul>
<li>endroits fréquentés par les <strong>enfants</strong> ; <strong>passage d'animaux</strong> ;</li>
<li>approche de <strong>véhicules prioritaires</strong> ;</li>
<li>présence d'un <strong>triangle de présignalisation</strong> sur la chaussée ;</li>
<li><strong>zone de travaux</strong>, etc.</li>
</ul>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#C4CDD6"/><path d="M0 40h220M0 62h220" stroke="#fff" stroke-width="12" opacity=".65"/><path d="M0 92h220v38H0z" fill="#5C636D"/><path d="M0 84h220" stroke="#fff" stroke-width="10" opacity=".55"/><use href="#car-side" x="50" y="44" width="110" height="48" color="#0B5FA5" opacity=".75"/></svg><b>Brouillard</b><span>Visibilité réduite, vitesse réduite</span></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#7D8995"/><rect y="94" width="220" height="36" fill="#3A3F46"/><use href="#car-side" x="50" y="50" width="110" height="48" color="#0B5FA5"/><path d="M20 10l-6 20M60 4l-6 20M100 14l-6 20M140 4l-6 20M180 12l-6 20M204 40l-6 20M36 44l-6 20" stroke="#DCEBF7" stroke-width="3" stroke-linecap="round"/><path d="M0 112h60M90 120h50M160 108h60" stroke="#DCEBF7" stroke-width="3"/></svg><b>Pluie</b><span>Moins d'adhérence, je ralentis</span></div>
 <div class="scene"><svg viewBox="0 0 220 130" aria-hidden="true"><rect width="220" height="130" fill="#10141F"/><path d="M110 28 220 130H0z" fill="#3A3F46"/><circle cx="96" cy="38" r="5" fill="#FFF3B0"/><circle cx="110" cy="38" r="5" fill="#FFF3B0"/><path d="M103 38 8 130h120z" fill="#FFF3B0" opacity=".35"/></svg><b>Éblouissement</b><span>La nuit, je ralentis dès que je suis ébloui</span></div>
</div>
<div class="panneaux" style="margin-top:16px">
 <div class="pan"><img src="/benin/signs/667d35acd1b0.webp" alt="" loading="lazy">Enfants</div>
 <div class="pan"><img src="/benin/signs/8a7ccb41ba29.webp" alt="" loading="lazy">Animaux</div>
 <div class="pan"><img src="/benin/signs/0762c56fbe03.webp" alt="" loading="lazy">Travaux</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 40 36" aria-hidden="true"><use href="#o-triangle" width="40" height="36"/></svg>Triangle sur la chaussée</div>
 <div class="pan"><img src="/benin/signs/f605fc0f2bea.webp" alt="" loading="lazy">Passage à niveau</div>
</div>
<figcaption>Figure 5.9 — Quand la vue ou la route m'imposent de ralentir</figcaption>
</figure>

<h3>5.7 Vitesse excessive, vitesse insuffisante, phénomènes physiques</h3>
<ul>
<li><strong>Vitesse trop faible</strong> : elle est aussi une infraction lorsqu'elle gêne la circulation sans motif ; l'autoroute est interdite aux véhicules qui ne peuvent pas atteindre <strong>60 km/h</strong> (Q419), et certaines autoroutes imposent une vitesse minimale par panneau.</li>
<li><strong>Aquaplanage</strong> : au-delà d'une certaine vitesse sur film d'eau, les pneus ne chassent plus l'eau et le véhicule « flotte ». Réaction : lever le pied <strong>sans freiner ni braquer</strong>, tenir le volant droit.</li>
<li><strong>Force centrifuge</strong> : en virage, elle déporte le véhicule vers l'extérieur ; elle croît avec le carré de la vitesse. On freine <strong>avant</strong> le virage, on accélère progressivement à la sortie.</li>
<li><strong>Fading</strong> : échauffement des freins en longue descente ; utiliser le frein moteur en rétrogradant.</li>
</ul>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect y="118" width="240" height="32" fill="#3A3F46"/><path d="M0 110h240v8H0z" fill="#5C9BD5"/><circle cx="120" cy="66" r="42" fill="#171A1F"/><circle cx="120" cy="66" r="18" fill="#C9CDD4"/><path d="M60 112q20-14 34-4M180 112q-20-14-34-4" fill="none" stroke="#5C9BD5" stroke-width="4"/><text x="120" y="20" font-size="15" font-weight="bold" fill="#0B5FA5" text-anchor="middle">le pneu flotte sur l'eau</text></svg><b>Aquaplanage</b><span>Je lève le pied, sans freiner ni braquer, volant droit</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#E4EADF"/><path d="M30 160Q30 30 180 30h60" fill="none" stroke="#3A3F46" stroke-width="56"/><use href="#car-n" x="-10" y="-19" width="20" height="38" transform="translate(70 66) rotate(40)" color="#0B5FA5"/><path d="M58 56 16 18" stroke="#D2202F" stroke-width="4" marker-end="url(#m-r)"/><text x="130" y="96" font-size="15" font-weight="bold" fill="#D2202F">vers</text><text x="130" y="114" font-size="15" font-weight="bold" fill="#D2202F">l'extérieur</text></svg><b>Force centrifuge</b><span>Elle me déporte : je freine avant le virage</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#DCEBF7"/><path d="M0 40 240 124v26H0z" fill="#3A3F46"/><use href="#car-side" x="-40" y="-36" width="80" height="36" transform="translate(120 80) rotate(19)" color="#0B5FA5"/><circle cx="147" cy="76" r="9" fill="#E87722"/><path d="M147 62q-5-7 0-12M158 66q-2-8 4-12" fill="none" stroke="#E87722" stroke-width="3"/><text x="62" y="26" font-size="15" font-weight="bold" fill="#E87722" text-anchor="middle">frein brûlant</text></svg><b>Fading</b><span>Longue descente : j'utilise le frein moteur en rétrogradant</span></div>
</div>
<figcaption>Figure 5.10 — Trois phénomènes physiques à connaître</figcaption>
</figure>

<QcmBlock title="QCM — Chapitre 5" :questions="questions" />
</section>
</template>
