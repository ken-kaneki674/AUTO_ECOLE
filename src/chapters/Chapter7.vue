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

<h3>7.2 L'équipement obligatoire</h3>
<p>Tout véhicule automobile léger doit être équipé de :</p>
<ul>
<li><strong>cinq (05) roues</strong> : quatre (04) sous le véhicule et une <strong>roue de secours</strong> ;</li>
<li><strong>deux (02) rétroviseurs</strong> obligatoires : un à l'<strong>intérieur</strong> du véhicule et un à l'<strong>extérieur gauche</strong> ;</li>
<li><strong>quatre (04) feux obligatoires à l'avant</strong> et <strong>cinq (05) feux obligatoires à l'arrière</strong>, plus des feux facultatifs.</li>
</ul>

<h3>7.3 L'éclairage et la signalisation</h3>
<h4>À l'avant — obligatoires</h4>
<div class="table-scroll"><table>
<thead><tr><th>Feu</th><th>Nombre, couleur, portée</th><th>Quand l'utiliser</th></tr></thead>
<tbody>
<tr><td><strong>Feux de route</strong> (phares)</td><td>2, lumière jaune (ou blanche), éclairent à <strong>100 m au moins</strong></td><td>La nuit, hors agglomération, quand on circule <strong>seul</strong> sur la route. À couper dès qu'on croise ou qu'on suit un usager</td></tr>
<tr><td><strong>Feux de croisement</strong> (codes)</td><td>2, lumière jaune ou blanche, éclairent à <strong>30 m au moins</strong> sans éblouir</td><td>La nuit pour <strong>croiser</strong> ou <strong>suivre</strong> un autre usager à faible distance ; même le jour pour se rendre visible par mauvais temps (pluie, brouillard, neige)</td></tr>
<tr><td><strong>Feux de position</strong> (veilleuses)</td><td>2, jaunes ou blancs, visibles à <strong>150 m</strong></td><td>Pour <strong>stationner</strong> sur une chaussée non éclairée ; pour circuler en <strong>agglomération bien éclairée</strong></td></tr>
<tr><td><strong>Clignotants</strong> (indicateurs de changement de direction)</td><td>2, <strong>orange</strong>, non éblouissants</td><td>Pour annoncer tout changement de direction et toute manœuvre</td></tr>
</tbody>
</table></div>
<h4>À l'avant — facultatifs</h4>
<p><strong>Feux de brouillard</strong> : 2, jaunes ou blancs. Ils <strong>complètent ou remplacent les feux de croisement</strong> par temps de brouillard, de forte pluie ou de neige, et peuvent compléter les feux de route hors agglomération ; on les <strong>éteint quand on s'apprête à croiser</strong> un usager.</p>
<h4>À l'arrière — obligatoires</h4>
<div class="table-scroll"><table>
<thead><tr><th>Feu</th><th>Nombre, couleur, portée</th><th>Quand il s'allume</th></tr></thead>
<tbody>
<tr><td><strong>Feux rouges</strong> (veilleuses arrière)</td><td>Rouges, visibles à <strong>150 m</strong></td><td>Pour circuler ou stationner sur la chaussée la nuit ou par mauvaise visibilité ; ils s'allument en même temps que les feux de position, de croisement ou de route</td></tr>
<tr><td><strong>Clignotants</strong></td><td>2, orangés, non éblouissants</td><td>En même temps que ceux de l'avant</td></tr>
<tr><td><strong>Feux stop</strong> (signaux de freinage)</td><td>Rouges, plus puissants que les feux rouges sans être éblouissants</td><td>Dès qu'on touche la pédale de frein, pour avertir l'usager qui suit de tout ralentissement</td></tr>
<tr><td><strong>Catadioptres</strong> (cataphotes, dispositifs réfléchissants)</td><td>2, rouges, visibles à <strong>100 m</strong> quand ils sont éclairés par les feux de route d'un autre usager</td><td>Toujours (ils renvoient la lumière)</td></tr>
<tr><td><strong>Éclairage de la plaque d'immatriculation</strong></td><td>Rend le numéro <strong>lisible à 20 m au moins</strong> la nuit (Q822)</td><td>En même temps que les feux rouges</td></tr>
</tbody>
</table></div>
<h4>À l'arrière — facultatifs</h4>
<ul>
<li><strong>Feux de recul</strong> : un ou deux, de couleur <strong>blanche</strong> rabattue vers le sol ; ils s'allument automatiquement quand on passe la marche arrière.</li>
<li><strong>Feu de brouillard arrière</strong> : très puissant ; par brouillard ou chute de neige, jamais sous une simple pluie (il éblouit le conducteur qui suit).</li>
</ul>
<p><strong>NB — Les feux de détresse</strong> (obligatoires à l'avant et à l'arrière) : c'est le <strong>fonctionnement simultané des clignotants gauches et droits</strong>. Ils signalent un véhicule en panne sur la chaussée, immobilisé ou roulant à une allure anormalement réduite.</p>
<MemoBox label="À retenir">
Les feux servent à <strong>voir</strong> et à <strong>être vu</strong>. Sous la pluie, on allume les <strong>feux de croisement</strong>, jamais le feu de brouillard arrière, qui éblouit le conducteur suivant.
</MemoBox>

<h3>7.4 Les pneumatiques</h3>
<ul>
<li>Seuls points de contact avec la route : <strong>quatre surfaces de la taille d'une carte postale</strong> chacune.</li>
<li><strong>Profondeur minimale des rainures principales : 1,6 mm</strong> (<strong>1 mm</strong> pour un poids lourd), selon le manuel de la DGTT (Q871, Q786). Des témoins d'usure moulés dans les rainures l'indiquent.</li>
<li><strong>Pression</strong> à contrôler à froid, au moins une fois par mois. Sous-gonflé : usure des épaules, échauffement, surconsommation, risque d'éclatement. Sur-gonflé : usure centrale, tenue de route dégradée.</li>
<li>Surveiller les <strong>hernies, coupures, corps étrangers</strong> et l'usure irrégulière (signe de mauvais parallélisme).</li>
</ul>
<AttentionBox label="En cas d'éclatement">
Tenir fermement le volant, <strong>ne pas freiner brutalement</strong>, lever le pied progressivement, se déporter doucement vers la droite et s'arrêter hors de la chaussée.
</AttentionBox>

<h3>7.5 Le freinage et la direction</h3>
<ul>
<li>Un véhicule de tourisme possède <strong>trois (03) freins</strong> : le <strong>frein à main</strong>, le <strong>frein à pied</strong> et le <strong>frein moteur</strong>.</li>
<li><strong>Frein principal</strong> (à pied) : agit sur les quatre roues, assisté par le servo-frein.</li>
<li><strong>Frein de stationnement</strong> (à main ou électrique) : agit en général sur les roues arrière ; il sert aussi de frein de secours.</li>
<li><strong>ABS</strong> : empêche le blocage des roues, donc conserve la <strong>directivité</strong> du véhicule. Il ne raccourcit pas systématiquement la distance de freinage. En freinage d'urgence avec ABS : appuyer <strong>fort et sans relâcher</strong>, et braquer pour éviter l'obstacle.</li>
<li><strong>Frein moteur</strong> : ralentissement obtenu en levant le pied et en rétrogradant ; indispensable en longue descente pour éviter le fading.</li>
<li><strong>Direction</strong> : jeu excessif, vibrations ou tirage d'un côté imposent une vérification immédiate.</li>
</ul>

<h3>7.6 Ce qui doit se trouver à bord</h3>
<div class="table-scroll"><table>
<thead><tr><th>Équipements de sécurité</th><th>Documents</th></tr></thead>
<tbody>
<tr><td>
Triangle de présignalisation · Gilet rétroréfléchissant (à portée de main, dans l'habitacle) · Extincteur en état de marche ⚠ · Trousse de premiers secours ⚠ · Roue de secours, cric et manivelle · Ampoules et fusibles de rechange
</td><td>
Permis de conduire valide · Carte grise · Attestation d'assurance en cours de validité · Visite technique à jour · Vignette de l'année en cours
</td></tr>
</tbody>
</table></div>

<h4>Les pièces administratives</h4>
<ul>
<li><strong>La carte grise</strong> : c'est sur elle qu'on reconnaît le <strong>nom du propriétaire</strong> du véhicule.</li>
<li><strong>La visite technique</strong> : renouvelable <strong>tous les ans</strong>.</li>
<li><strong>L'attestation d'assurance</strong> : renouvelable <strong>tous les ans</strong>, valable avec la visite technique. L'<strong>assurance au tiers</strong>, qui couvre les dégâts causés à autrui, est <strong>obligatoire</strong>.</li>
<li><strong>La vignette de l'année en cours</strong> : obligatoire pour les véhicules privés et pour ceux de transport (marchandises, transport en commun de personnes).</li>
</ul>
<p>Lors d'un <strong>contrôle routier</strong>, on doit présenter les pièces administratives et le <strong>permis de conduire</strong>.</p>

<h3>7.7 Le contrôle avant départ : la méthode des 5 minutes</h3>
<ol>
<li><strong>Tour du véhicule</strong> : pneus (aspect, pression), carrosserie, feux (faire vérifier par une autre personne), plaques propres et lisibles, absence d'obstacle derrière.</li>
<li><strong>Niveaux</strong> : huile moteur, liquide de refroidissement, liquide de frein, liquide lave-glace, carburant.</li>
<li><strong>Pédales</strong> : de gauche à droite, <strong>embrayage – frein – accélérateur</strong>.</li>
<li><strong>Poste de conduite</strong> : réglage du siège (jambes légèrement fléchies, poignets sur le haut du volant), appuie-tête au niveau du sommet du crâne, rétroviseurs, ceinture, verrouillage des portes.</li>
<li><strong>Tableau de bord</strong> : contact mis, vérifier l'extinction des témoins rouges après le démarrage.</li>
</ol>
<MemoBox label="Code couleur du tableau de bord">
<strong>Rouge</strong> = danger immédiat, je m'arrête dès que possible (pression d'huile, température, frein, batterie de charge). <strong>Orange</strong> = anomalie à faire contrôler rapidement (moteur, ABS, airbag). <strong>Vert / bleu</strong> = simple information de fonctionnement (feux, clignotants).
</MemoBox>

<QcmBlock title="QCM — Chapitre 7" :questions="questions" />
</section>
</template>
