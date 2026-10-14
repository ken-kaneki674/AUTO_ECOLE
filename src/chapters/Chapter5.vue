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
<p>La limitation affichée est un <strong>maximum</strong>, jamais une obligation. Le conducteur doit <strong>rester constamment maître de son véhicule</strong> et adapter sa vitesse à l'état de la route, au trafic, à la météo, à la visibilité, à la charge du véhicule et à sa propre forme.</p>

<h3>5.2 Les limitations de vitesse</h3>
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
Les vitesses marquées ⚠ ne sont pas précisées par le manuel de la DGTT : pour l'autoroute et la route pour automobiles, il renvoie à la réglementation en vigueur. Des limitations locales plus basses s'appliquent souvent à proximité des écoles et des marchés. Retiens le <strong>raisonnement</strong> et confirme les <strong>chiffres</strong> auprès de ton auto-école.
</AttentionBox>
<p>D'autres limitations s'appliquent en permanence : véhicules lourds, véhicules tractant une remorque, conducteurs novices, transports en commun. Par temps de pluie ou de faible visibilité, la vitesse doit être réduite.</p>

<h3>5.3 La distance d'arrêt</h3>
<p>La distance d'arrêt est la somme de deux distances :</p>
<p style="text-align:center;font-family:var(--font-tech);background:var(--surface);border:1px solid var(--ligne);padding:12px"><strong>DISTANCE D'ARRÊT = distance de réaction + distance de freinage</strong></p>
<ul>
<li><strong>Distance de réaction</strong> : distance parcourue pendant le temps de réaction (percevoir puis réagir), environ <strong>1 seconde</strong> chez un conducteur en forme. Elle augmente avec la fatigue, l'alcool, le téléphone, les médicaments.</li>
<li><strong>Distance de freinage</strong> : distance parcourue une fois le frein actionné. Elle dépend de la <strong>vitesse</strong>, de l'<strong>adhérence</strong> (revêtement, chaussée mouillée) et de l'<strong>état des pneumatiques</strong>.</li>
</ul>
<MemoBox label="La formule du manuel DGTT">
<strong>Distance d'arrêt (m, sur sol sec)</strong> ≈ (V ÷ 10) × (V ÷ 10) &nbsp;→ à 50 km/h : 5 × 5 = <strong>25 m</strong> ; à 90 km/h : 9 × 9 = <strong>81 m</strong>.<br>
Doubler la vitesse <strong>quadruple</strong> la distance. Sur chaussée mouillée ou avec des pneus usés, elle augmente fortement (environ le double).
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
  <text x="10" y="216" font-size="12" fill="#5C636D">Sur chaussée mouillée ou avec des pneus usés, la distance augmente (environ le double).</text>
 </g>
</svg>
<figcaption>Figure 5.1 — Ce que coûte réellement chaque tranche de vitesse</figcaption>
</figure>

<h3>5.4 L'énergie du choc</h3>
<p>L'énergie cinétique d'un véhicule est proportionnelle au <strong>carré de la vitesse</strong> : <em>E = ½ m V²</em>. À 100 km/h, un choc frontal contre un obstacle fixe équivaut à une chute d'un immeuble d'environ <strong>12 étages</strong>. C'est pourquoi quelques kilomètres/heure de moins changent radicalement les conséquences d'un accident, notamment pour un piéton :</p>
<ul>
<li>Renversé à <strong>30 km/h</strong> : le piéton survit dans la très grande majorité des cas.</li>
<li>Renversé à <strong>50 km/h</strong> : environ un piéton sur deux est tué.</li>
<li>Renversé à <strong>60 km/h</strong> et au-delà : le décès est la règle.</li>
</ul>

<h3>5.5 Les distances de sécurité</h3>
<p>Le manuel de la DGTT fixe les <strong>intervalles minimaux de sécurité</strong> à garder derrière le véhicule qui précède :</p>
<div class="table-scroll"><table>
<thead><tr><th>Situation</th><th>Intervalle minimal</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Deux véhicules qui se suivent à <strong>50 km/h</strong></td><td><strong>15 m</strong> environ</td><td>Q516</td></tr>
<tr><td>Derrière un véhicule qui roule à <strong>90 km/h</strong></td><td><strong>25 m</strong> environ</td><td>Q460</td></tr>
<tr><td>Deux <strong>poids lourds</strong> (plus de 3,5 t de PTAC et plus de 7 m de long) qui se suivent en rase campagne</td><td><strong>50 m</strong> environ</td><td>Q720, Q774</td></tr>
</tbody>
</table></div>
<p>L'intervalle entre poids lourds sert à éviter le choc en cas de freinage brusque et à <strong>faciliter le dépassement</strong> par les véhicules légers. Par temps de pluie, on augmente toujours l'intervalle.</p>
<AstuceBox label="Conseil pratique : les deux secondes">
Ce ne sont que des minimums. En conduite, laisse au moins <strong>2 secondes</strong> (3 sous la pluie) : repère un point fixe (panneau, arbre) ; quand le véhicule de devant le dépasse, compte « <em>mille un, mille deux</em> ». Si tu atteins le point avant la fin du décompte, tu es trop près.
</AstuceBox>

<h3>5.6 Vitesse excessive, vitesse insuffisante, phénomènes physiques</h3>
<ul>
<li><strong>Vitesse trop faible</strong> : elle est aussi une infraction lorsqu'elle gêne la circulation sans motif ; l'autoroute est interdite aux véhicules qui ne peuvent pas atteindre <strong>60 km/h</strong> (Q419), et certaines autoroutes imposent une vitesse minimale par panneau.</li>
<li><strong>Aquaplanage</strong> : au-delà d'une certaine vitesse sur film d'eau, les pneus ne chassent plus l'eau et le véhicule « flotte ». Réaction : lever le pied <strong>sans freiner ni braquer</strong>, tenir le volant droit.</li>
<li><strong>Force centrifuge</strong> : en virage, elle déporte le véhicule vers l'extérieur ; elle croît avec le carré de la vitesse. On freine <strong>avant</strong> le virage, on accélère progressivement à la sortie.</li>
<li><strong>Fading</strong> : échauffement des freins en longue descente ; utiliser le frein moteur en rétrogradant.</li>
</ul>

<QcmBlock title="QCM — Chapitre 5" :questions="questions" />
</section>
</template>
