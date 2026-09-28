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
<p style="text-align:center;font-family:var(--font-tech);background:#fff;border:1px solid var(--ligne);padding:12px"><strong>DISTANCE D'ARRÊT = distance de réaction + distance de freinage</strong></p>
<ul>
<li><strong>Distance de réaction</strong> : distance parcourue pendant le temps de réaction, environ <strong>1 seconde</strong> chez un conducteur en forme. Elle augmente avec la fatigue, l'alcool, le téléphone, les médicaments.</li>
<li><strong>Distance de freinage</strong> : distance parcourue une fois le frein actionné. Elle dépend du <strong>carré de la vitesse</strong> : doubler la vitesse <strong>quadruple</strong> la distance de freinage.</li>
</ul>
<MemoBox label="Les deux formules à connaître par cœur">
<strong>Distance de réaction (m)</strong> = (V ÷ 10) × 3 &nbsp;→ à 90 km/h : 9 × 3 = <strong>27 m</strong><br>
<strong>Distance de freinage (m, sur sol sec)</strong> = (V ÷ 10) × (V ÷ 10) &nbsp;→ à 90 km/h : 9 × 9 = <strong>81 m</strong><br>
Sur chaussée mouillée, la distance de freinage est <strong>multipliée par 2</strong>.
</MemoBox>
<figure>
<svg viewBox="0 0 680 250" role="img" aria-label="Distances d'arrêt selon la vitesse">
 <g font-family="Arial Narrow, Arial, sans-serif" font-size="13">
  <text x="10" y="20" font-weight="bold" font-size="14" letter-spacing="1">DISTANCE D'ARRÊT SUR CHAUSSÉE SÈCHE</text>
  <g>
   <text x="10" y="56" font-weight="bold">50 km/h</text>
   <rect x="86" y="42" width="60" height="20" fill="#F5B301"/><rect x="146" y="42" width="100" height="20" fill="#D2202F"/>
   <text x="256" y="57" fill="#171A1F">15 + 25 = <tspan font-weight="bold">40 m</tspan></text>
  </g>
  <g>
   <text x="10" y="96" font-weight="bold">70 km/h</text>
   <rect x="86" y="82" width="84" height="20" fill="#F5B301"/><rect x="170" y="82" width="196" height="20" fill="#D2202F"/>
   <text x="376" y="97" fill="#171A1F">21 + 49 = <tspan font-weight="bold">70 m</tspan></text>
  </g>
  <g>
   <text x="10" y="136" font-weight="bold">90 km/h</text>
   <rect x="86" y="122" width="108" height="20" fill="#F5B301"/><rect x="194" y="122" width="324" height="20" fill="#D2202F"/>
   <text x="528" y="137" fill="#171A1F">27 + 81 = <tspan font-weight="bold">108 m</tspan></text>
  </g>
  <g>
   <text x="10" y="176" font-weight="bold">110 km/h</text>
   <rect x="86" y="162" width="132" height="20" fill="#F5B301"/><rect x="218" y="162" width="380" height="20" fill="#D2202F"/>
   <text x="606" y="177" fill="#171A1F" font-size="12">33+121</text>
  </g>
  <rect x="86" y="208" width="18" height="14" fill="#F5B301"/><text x="110" y="220">distance de réaction (1 s)</text>
  <rect x="270" y="208" width="18" height="14" fill="#D2202F"/><text x="294" y="220">distance de freinage (sol sec)</text>
  <text x="10" y="243" font-size="12" fill="#5C636D">Sur chaussée mouillée, la partie rouge double : à 90 km/h, l'arrêt demande environ 190 m.</text>
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
<p>La distance à respecter avec le véhicule qui précède correspond à la distance parcourue pendant <strong>2 secondes</strong>. Sur route mouillée ou avec une remorque, on passe à <strong>3 secondes</strong>.</p>
<AstuceBox label="Technique des deux secondes">
Repère un point fixe (panneau, arbre). Quand le véhicule de devant le dépasse, compte « <em>mille un, mille deux</em> ». Si tu atteins le point avant la fin du décompte, tu es trop près : lève le pied.
</AstuceBox>

<h3>5.6 Vitesse excessive, vitesse insuffisante, phénomènes physiques</h3>
<ul>
<li><strong>Vitesse trop faible</strong> : elle est aussi une infraction lorsqu'elle gêne la circulation sans motif ; sur autoroute, la voie de gauche impose de pouvoir tenir au moins 80 km/h.</li>
<li><strong>Aquaplanage</strong> : au-delà d'une certaine vitesse sur film d'eau, les pneus ne chassent plus l'eau et le véhicule « flotte ». Réaction : lever le pied <strong>sans freiner ni braquer</strong>, tenir le volant droit.</li>
<li><strong>Force centrifuge</strong> : en virage, elle déporte le véhicule vers l'extérieur ; elle croît avec le carré de la vitesse. On freine <strong>avant</strong> le virage, on accélère progressivement à la sortie.</li>
<li><strong>Fading</strong> : échauffement des freins en longue descente ; utiliser le frein moteur en rétrogradant.</li>
</ul>

<QcmBlock title="QCM — Chapitre 5" :questions="questions" />
</section>
</template>
