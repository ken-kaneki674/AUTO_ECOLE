<script setup>
import AttentionBox from '../components/AttentionBox.vue'
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
<thead><tr><th>Catégorie</th><th>Véhicules concernés</th><th>Âge minimal ⚠</th></tr></thead>
<tbody>
<tr><td><strong>A1</strong></td><td>Cyclomoteurs et vélomoteurs dont la cylindrée n'excède pas <strong>50 cm³</strong></td><td>Souvent 16 ans</td></tr>
<tr><td><strong>A2</strong></td><td>Motocyclettes de cylindrée moyenne, généralement <strong>jusqu'à 125 cm³</strong></td><td>Souvent 18 ans</td></tr>
<tr><td><strong>A3</strong></td><td>Motocyclettes de <strong>plus de 125 cm³</strong>, avec ou sans side-car, et tricycles à moteur</td><td>Souvent 18 ans</td></tr>
</tbody>
</table></div>
<AttentionBox label="⚠ À vérifier">
Les seuils de cylindrée, de puissance et d'âge varient selon les législations nationales (Bénin, Togo, Côte d'Ivoire, France…). Le découpage A1 / A2 / A3 présenté ici correspond au modèle en vigueur dans plusieurs pays d'Afrique de l'Ouest francophone. Confirme les valeurs exactes auprès de ton auto-école ou du service des permis.
</AttentionBox>

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
<tr><td><strong>Transport d'un passager</strong></td><td>Casque obligatoire, repose-pieds, tenue plus longue au freinage, comportement différent en virage</td></tr>
</tbody>
</table></div>

<h3>10.4 Les contrôles avant de partir</h3>
<ol>
<li>Pneus : pression, usure, absence de corps étranger.</li>
<li>Freins : garde des leviers, niveau de liquide, plaquettes.</li>
<li>Éclairage et clignotants, rétroviseurs propres et réglés.</li>
<li>Chaîne : tension et graissage.</li>
<li>Niveaux : huile, carburant, liquide de refroidissement.</li>
<li>Équipement : casque attaché, gants, vêtements adaptés.</li>
</ol>
<AstuceBox label="La règle des trois regards en ville">
Devant (trajectoire), autour (portières, piétons, véhicules qui débouchent), derrière (rétroviseurs). En ville, le danger n°1 du deux-roues est le véhicule qui tourne à gauche devant lui ou la portière qui s'ouvre.
</AstuceBox>

<h3>10.5 Interdictions et règles spécifiques</h3>
<ul>
<li>Les cyclomoteurs (moins de 50 cm³) sont <strong>interdits sur autoroute</strong> et sur les routes pour automobiles.</li>
<li>La remontée de files entre les véhicules est <strong>interdite ou strictement encadrée</strong> selon les pays ⚠ : elle reste dans tous les cas très dangereuse.</li>
<li>Le transport de plus d'un passager, le transport d'un enfant sans dispositif adapté et le transport de charges instables sont interdits.</li>
<li>Circuler sur le trottoir, entre deux files à vive allure ou sans casque expose à des sanctions lourdes et à l'immobilisation du véhicule.</li>
</ul>

<QcmBlock title="QCM — Chapitre 10" :questions="questions" />
</section>
</template>
