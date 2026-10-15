<script setup>
import MemoBox from '../components/MemoBox.vue'
import AstuceBox from '../components/AstuceBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import questions from '../data/questions/ch10.json'
</script>

<template>
<section class="chap" id="ch10">
<div class="chap-head">
  <span class="borne">10</span>
  <div><span class="fil">Chapitre 10</span><h2>Les deux-roues (permis A1 · A2 · A3)</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Distinguer les catégories A1, A2 et A3, connaître l'équipement obligatoire, comprendre les spécificités de conduite d'un deux-roues et les dangers qui lui sont propres.</p>

<h3>10.1 Les catégories de permis deux-roues</h3>
<div class="table-scroll"><table>
<thead><tr><th>Catégorie</th><th>Véhicules concernés</th><th>Âge minimal</th></tr></thead>
<tbody>
<tr><td><strong>A1</strong></td><td>Vélomoteurs ou cyclomoteurs de <strong>75 cm³ au plus</strong></td><td>16 ans</td></tr>
<tr><td><strong>A2</strong></td><td>Motocyclettes ou quadricycles de <strong>75 à 400 cm³</strong></td><td>18 ans</td></tr>
<tr><td><strong>A3</strong></td><td>Motocycles, tricycles ou quadricycles de <strong>plus de 400 cm³</strong></td><td>21 ans</td></tr>
</tbody>
</table></div>
<p>Source : manuel du candidat de la DGTT (édition 2011), chapitre I, et questions Q661, Q667 et Q669.</p>

<ul>
<li><strong>Cyclomoteur</strong> : deux-roues dont la cylindrée <strong>ne dépasse pas 50 cm³</strong> (Q677).</li>
<li><strong>Motocyclette</strong> : deux-roues pourvu d'un <strong>moteur thermique</strong> dont la cylindrée <strong>dépasse 50 cm³</strong> (Q676).</li>
</ul>

<h3>10.2 L'équipement du motocycliste</h3>
<ul>
<li><strong>Le casque homologué et attaché</strong> : obligatoire pour le conducteur <em>et</em> le passager. Un casque non attaché est un casque inutile : il s'envole au premier choc. C'est le seul équipement qui protège la tête, siège des lésions mortelles.</li>
<li><strong>Gants</strong> : protègent les mains, réflexe naturel lors d'une chute.</li>
<li><strong>Blouson résistant, pantalon long, chaussures montantes</strong> : la peau ne résiste pas à un glissement sur le bitume.</li>
<li><strong>Vêtements clairs ou rétroréfléchissants, gilet la nuit</strong> : le deux-roues est un véhicule <em>étroit</em>, donc difficile à repérer et à évaluer en distance.</li>
<li><strong>Feu de croisement allumé de jour</strong> : rend la moto beaucoup plus visible.</li>
</ul>
<MemoBox label="La physique du casque">
À 50 km/h, une chute sans casque équivaut à un plongeon tête la première depuis un <strong>troisième étage</strong>. Le casque n'empêche pas la chute : il divise l'énergie transmise au crâne.
</MemoBox>

<p><strong>Le casque</strong> est obligatoire pour <strong>tous les occupants</strong>, même si l'on roule seul (Q665) ; il protège contre le <strong>traumatisme crânien</strong> (Q666). Il existe deux types de casques : le <strong>casque intégral</strong> et le <strong>casque enveloppant</strong> (Q659).</p>
<h4>L'équipement obligatoire de la motocyclette</h4>
<p>Le <strong>clignotant</strong>, le <strong>feu stop</strong>, l'<strong>avertisseur</strong>, le <strong>rétroviseur gauche</strong> et le <strong>frein avant</strong> sont obligatoires sur les motocyclettes (Q650, Q662, Q663, Q678).</p>

<h3>10.3 Ce qui change quand on conduit à deux roues</h3>
<div class="table-scroll"><table>
<thead><tr><th>Spécificité</th><th>Conséquence pratique</th></tr></thead>
<tbody>
<tr><td><strong>Équilibre</strong> : le deux-roues tient debout grâce à sa vitesse et à l'effet gyroscopique</td><td>À très basse vitesse, l'équilibre devient précaire : regarder loin, jamais la roue avant</td></tr>
<tr><td><strong>Deux freins distincts</strong> (avant et arrière)</td><td>Freinage combiné : l'avant fournit environ 70 % de l'efficacité, mais bloquer la roue avant fait chuter. On freine progressivement, roue droite</td></tr>
<tr><td><strong>Adhérence limitée à deux petites empreintes</strong></td><td>Gravillons, sable, plaques d'égout, marquages mouillés, gasoil répandu : autant de pièges. Éviter de freiner ou de braquer dessus</td></tr>
<tr><td><strong>Absence de carrosserie</strong></td><td>Aucune protection en cas de choc : la seule stratégie est l'anticipation</td></tr>
<tr><td><strong>Faible visibilité par les autres</strong></td><td>Rester hors des angles morts, ne pas se coller derrière un camion, se placer là où l'on est vu dans le rétroviseur du véhicule qui précède</td></tr>
<tr><td><strong>Prise au vent</strong></td><td>Au dépassement d'un poids lourd ou à la sortie d'un pont : anticiper la rafale, serrer les genoux, garder les bras souples</td></tr>
<tr><td><strong>Transport d'un passager</strong></td><td><strong>Un seul passager</strong> (Q664), assis sur le <strong>siège arrière</strong>, qui doit <strong>faire corps</strong> avec la moto et son conducteur (Q646). Casque obligatoire, repose-pieds, freinage plus long. Un enfant de <strong>moins de 5 ans</strong> doit avoir un <strong>siège muni d'une courroie d'attache</strong> (Q668)</td></tr>
<tr><td><strong>Bonne position de conduite</strong></td><td>Bien assis sur la selle, <strong>bras légèrement fléchis</strong>, <strong>genoux contre le réservoir</strong> (Q660). Avec une nouvelle moto : s'habituer progressivement et augmenter la distance de sécurité (Q657)</td></tr>
</tbody>
</table></div>

<h3>10.4 Les contrôles avant de partir</h3>
<ol>
<li>Position des <strong>béquilles</strong>, bon <strong>ajustement du casque</strong> (conducteur et passager), réglage des <strong>rétroviseurs</strong> (Q658).</li>
<li>Pneus : pression, usure, absence de corps étranger.</li>
<li>Freins : garde des leviers, niveau de liquide, plaquettes.</li>
<li>Éclairage et clignotants, rétroviseurs propres et réglés.</li>
<li>Chaîne : tension et graissage.</li>
<li>Niveaux : <strong>huile moteur</strong>, <strong>eau du radiateur</strong>, <strong>essence</strong> ; on les contrôle la moto posée sur la <strong>béquille centrale</strong> (Q654, Q655).</li>
<li>Équipement : casque attaché, gants, vêtements adaptés.</li>
</ol>
<AstuceBox label="La règle des trois regards en ville">
Devant (trajectoire), autour (portières, piétons, véhicules qui débouchent), derrière (rétroviseurs). En ville, le danger n°1 du deux-roues est le véhicule qui tourne à gauche devant lui ou la portière qui s'ouvre.
</AstuceBox>

<h3>10.5 Interdictions et règles spécifiques</h3>
<ul>
<li>Les cyclomoteurs (moins de 50 cm³) sont <strong>interdits sur autoroute</strong> et sur les routes pour automobiles.</li>
<li>Dans une circulation en <strong>files ininterrompues</strong>, je reste dans ma file, sauf pour préparer un changement de direction (Q648) : la remontée de files est très dangereuse.</li>
<li>La circulation <strong>à deux de front</strong> n'est pas autorisée (Q674).</li>
<li>En longeant des véhicules en stationnement, attention aux <strong>piétons</strong> qui surgissent, aux <strong>portières</strong> qui s'ouvrent et aux véhicules qui démarrent (Q656).</li>
<li>Une <strong>voie ferrée</strong> ne se traverse qu'après le <strong>relèvement de la barrière</strong> (Q649).</li>
<li><strong>En panne</strong>, on peut pousser sa moto sur le trottoir, <strong>moteur arrêté</strong> (Q647).</li>
<li>Le panneau <strong>B14</strong> avec panonceau « motos » (B14-3) ne concerne que les motocyclistes (Q59, Q672).</li>
<li>Le transport de plus d'un passager, le transport d'un enfant sans dispositif adapté et le transport de charges instables sont interdits.</li>
<li>Circuler sur le trottoir, entre deux files à vive allure ou sans casque expose à des sanctions lourdes et à l'immobilisation du véhicule.</li>
</ul>

<QcmBlock title="QCM — Chapitre 10" :questions="questions" />
</section>
</template>
