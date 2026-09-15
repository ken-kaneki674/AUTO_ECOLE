<script setup>
import MemoBox from '../components/MemoBox.vue'
import AttentionBox from '../components/AttentionBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import questions from '../data/questions/ch7.json'
</script>

<template>
<section class="chap" id="ch7">
<div class="chap-head">
  <span class="borne">07</span>
  <div><span class="fil">Chapitre 7</span><h2>L'équipement d'une voiture</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Connaître les organes de sécurité active et passive, savoir quel feu allumer et quand, contrôler pneus et freins, et savoir ce qui doit obligatoirement se trouver à bord.</p>

<h3>7.1 Sécurité active et sécurité passive</h3>
<div class="table-scroll"><table>
<thead><tr><th>Sécurité ACTIVE — éviter l'accident</th><th>Sécurité PASSIVE — en limiter les conséquences</th></tr></thead>
<tbody>
<tr><td>Freins et ABS, direction, suspension, pneumatiques, éclairage et signalisation, essuie-glaces, ESP/antipatinage, klaxon, rétroviseurs</td><td>Ceintures de sécurité et prétensionneurs, airbags, appuie-têtes, structure à déformation programmée, sièges enfants, vitrage feuilleté</td></tr>
</tbody>
</table></div>

<h3>7.2 L'éclairage et la signalisation</h3>
<div class="table-scroll"><table>
<thead><tr><th>Feu</th><th>Portée / usage</th><th>Quand l'utiliser</th></tr></thead>
<tbody>
<tr><td><strong>Feux de position</strong> (veilleuses)</td><td>Environ 150 m de visibilité, faible éclairage</td><td>Pour être vu : crépuscule, véhicule à l'arrêt de nuit hors agglomération</td></tr>
<tr><td><strong>Feux de croisement</strong> (codes)</td><td>Éclairent environ 30 m</td><td>La nuit, en ville, en croisant ou en suivant un véhicule, par pluie et brouillard, dans les tunnels</td></tr>
<tr><td><strong>Feux de route</strong> (phares)</td><td>Éclairent environ 100 m</td><td>Nuit, hors agglomération, route dégagée. À couper dès qu'on croise ou qu'on suit un véhicule</td></tr>
<tr><td><strong>Feux de brouillard avant</strong></td><td>Faisceau large et bas</td><td>Brouillard, pluie forte, chute de neige</td></tr>
<tr><td><strong>Feu de brouillard arrière</strong></td><td>Très puissant, éblouissant</td><td><strong>Uniquement</strong> par brouillard ou chute de neige. Interdit sous la pluie</td></tr>
<tr><td><strong>Feux stop</strong></td><td>S'allument au freinage</td><td>Automatique</td></tr>
<tr><td><strong>Clignotants (indicateurs de direction)</strong></td><td>Annoncent un changement de direction ou de file</td><td>Toujours, avant toute manœuvre</td></tr>
<tr><td><strong>Feux de détresse (warnings)</strong></td><td>Les quatre clignotants ensemble</td><td>Véhicule immobilisé, ralentissement brutal, danger pour les suiveurs</td></tr>
<tr><td><strong>Feu de recul, éclairage de plaque</strong></td><td>Signalent la marche arrière, permettent l'identification</td><td>Automatique</td></tr>
</tbody>
</table></div>
<MemoBox label="À retenir">
Les feux servent à <strong>voir</strong> et à <strong>être vu</strong>. Sous la pluie, on allume les <strong>feux de croisement</strong>, jamais le feu de brouillard arrière, qui éblouit le conducteur suivant.
</MemoBox>

<h3>7.3 Les pneumatiques</h3>
<ul>
<li>Seuls points de contact avec la route : <strong>quatre surfaces de la taille d'une carte postale</strong> chacune.</li>
<li><strong>Profondeur minimale des sculptures : 1,6 mm</strong> sur toute la bande de roulement ⚠. Des témoins d'usure moulés dans les rainures l'indiquent.</li>
<li><strong>Pression</strong> à contrôler à froid, au moins une fois par mois. Sous-gonflé : usure des épaules, échauffement, surconsommation, risque d'éclatement. Sur-gonflé : usure centrale, tenue de route dégradée.</li>
<li>Surveiller les <strong>hernies, coupures, corps étrangers</strong> et l'usure irrégulière (signe de mauvais parallélisme).</li>
</ul>
<AttentionBox label="En cas d'éclatement">
Tenir fermement le volant, <strong>ne pas freiner brutalement</strong>, lever le pied progressivement, se déporter doucement vers la droite et s'arrêter hors de la chaussée.
</AttentionBox>

<h3>7.4 Le freinage et la direction</h3>
<ul>
<li><strong>Frein principal</strong> (à pied) : agit sur les quatre roues, assisté par le servo-frein.</li>
<li><strong>Frein de stationnement</strong> (à main ou électrique) : agit en général sur les roues arrière ; il sert aussi de frein de secours.</li>
<li><strong>ABS</strong> : empêche le blocage des roues, donc conserve la <strong>directivité</strong> du véhicule. Il ne raccourcit pas systématiquement la distance de freinage. En freinage d'urgence avec ABS : appuyer <strong>fort et sans relâcher</strong>, et braquer pour éviter l'obstacle.</li>
<li><strong>Frein moteur</strong> : ralentissement obtenu en levant le pied et en rétrogradant ; indispensable en longue descente pour éviter le fading.</li>
<li><strong>Direction</strong> : jeu excessif, vibrations ou tirage d'un côté imposent une vérification immédiate.</li>
</ul>

<h3>7.5 Ce qui doit se trouver à bord</h3>
<div class="table-scroll"><table>
<thead><tr><th>Équipements de sécurité</th><th>Documents</th></tr></thead>
<tbody>
<tr><td>
Triangle de présignalisation · Gilet rétroréfléchissant (à portée de main, dans l'habitacle) · Extincteur en état de marche ⚠ · Trousse de premiers secours ⚠ · Roue de secours, cric et manivelle · Ampoules et fusibles de rechange
</td><td>
Permis de conduire valide · Certificat d'immatriculation (carte grise) · Attestation d'assurance en cours de validité · Visite technique à jour · Vignette / taxe le cas échéant ⚠
</td></tr>
</tbody>
</table></div>

<h3>7.6 Le contrôle avant départ : la méthode des 5 minutes</h3>
<ol>
<li><strong>Tour du véhicule</strong> : pneus (aspect, pression), carrosserie, feux (faire vérifier par une autre personne), plaques propres et lisibles, absence d'obstacle derrière.</li>
<li><strong>Niveaux</strong> : huile moteur, liquide de refroidissement, liquide de frein, liquide lave-glace, carburant.</li>
<li><strong>Poste de conduite</strong> : réglage du siège (jambes légèrement fléchies, poignets sur le haut du volant), appuie-tête au niveau du sommet du crâne, rétroviseurs, ceinture, verrouillage des portes.</li>
<li><strong>Tableau de bord</strong> : contact mis, vérifier l'extinction des témoins rouges après le démarrage.</li>
</ol>
<MemoBox label="Code couleur du tableau de bord">
<strong>Rouge</strong> = danger immédiat, je m'arrête dès que possible (pression d'huile, température, frein, batterie de charge). <strong>Orange</strong> = anomalie à faire contrôler rapidement (moteur, ABS, airbag). <strong>Vert / bleu</strong> = simple information de fonctionnement (feux, clignotants).
</MemoBox>

<QcmBlock title="QCM — Chapitre 7" :questions="questions" />
</section>
</template>
