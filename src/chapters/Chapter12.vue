<script setup>
import MemoBox from '../components/MemoBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import ValeurBenin from '../components/ValeurBenin.vue'
import questions from '../data/questions/ch12.json'
</script>

<template>
<section class="chap" id="ch12">
<div class="chap-head">
  <span class="borne">12</span>
  <div><span class="fil">Chapitre 12</span><h2>Le permis de conduire catégorie B</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Définir le permis B, savoir quels véhicules il autorise, connaître les conditions d'obtention, les autres catégories et les mesures qui frappent le permis en cas d'infraction.</p>

<h3>12.1 Définition</h3>
<p>Le permis de conduire est un <strong>titre administratif officiel et personnel</strong>, délivré par l'autorité compétente, qui atteste que son titulaire possède les connaissances théoriques, les aptitudes pratiques et les conditions médicales requises pour conduire une catégorie donnée de véhicules sur la voie publique.</p>
<p>Le <strong>permis catégorie B</strong> autorise la conduite des <strong>véhicules automobiles affectés au transport de personnes ou de marchandises</strong> dont :</p>
<ul>
<li>le <strong>poids total autorisé en charge (PTAC) n'excède pas 3 500 kg</strong> ;</li>
<li>le nombre de places assises, <strong>outre celle du conducteur, n'excède pas huit</strong> (soit 9 places au total) ;</li>
<li>l'attelage d'une <strong>remorque dont le PTAC ne dépasse pas <ValeurBenin k="remorque_ptac_sans_extension" /></strong> est autorisé ; au-delà, une extension est nécessaire.</li>
</ul>
<MemoBox label="Les trois chiffres du permis B">
<strong>3 500 kg</strong> de PTAC · <strong>9 places</strong> conducteur compris · <strong>750 kg</strong> de remorque.
</MemoBox>

<h3>12.2 Les catégories de permis</h3>
<div class="table-scroll"><table>
<thead><tr><th>Catégorie</th><th>Véhicules autorisés</th><th>Âge minimal</th></tr></thead>
<tbody>
<tr><td><strong>A1 / A2 / A3</strong></td><td>Deux-roues, tricycles et quadricycles à moteur, par tranches de cylindrée (voir chapitre 10)</td><td>16 / 18 / 21 ans</td></tr>
<tr><td><strong>B</strong></td><td>Transport de personnes ou de marchandises, PTAC ≤ 3,5 t ou 8 places hors conducteur ; remorque ≤ 750 kg</td><td>18 ans</td></tr>
<tr><td><strong>C</strong></td><td>Transport de marchandises ou de matériel, PTAC ≤ 18 t</td><td>21 ans</td></tr>
<tr><td><strong>C1</strong></td><td>Transport de marchandises ou de matériel, PTAC &gt; 18 t</td><td>21 ans</td></tr>
<tr><td><strong>Dr (TCR)</strong></td><td>Transport en commun de 18 places au plus, PTAC ≤ 3,5 t</td><td>21 ans</td></tr>
<tr><td><strong>D</strong></td><td>Transport en commun de plus de 18 places, PTAC &gt; 3,5 t</td><td>21 ans</td></tr>
<tr><td><strong>E</strong></td><td>Remorque de plus de 750 kg attelée à un véhicule de catégorie B (E(B))</td><td>—</td></tr>
<tr><td><strong>F</strong></td><td>Réservé aux personnes en situation de handicap physique</td><td>—</td></tr>
</tbody>
</table></div>
<p>Source : manuel du candidat de la DGTT (édition 2011), chapitre I, et questions Q681, Q689 et Q694.</p>

<h3>12.3 Conditions d'obtention</h3>
<ol>
<li><strong>Âge minimal</strong> : <ValeurBenin k="age_minimum_permis_b" /> pour la catégorie B.</li>
<li><strong>Aptitude physique</strong> : visite médicale (vision, audition, absence d'affection incompatible).</li>
<li><strong>Formation</strong> dans une auto-école agréée : cours théoriques (code) et leçons de conduite.</li>
<li><strong>Épreuve théorique</strong> : QCM portant sur le code de la route, la sécurité, la mécanique et le secourisme.</li>
<li><strong>Épreuve pratique</strong> : manœuvres (créneau, marche arrière, demi-tour, démarrage en côte) et conduite en circulation.</li>
<li><strong>Dossier</strong> : pièce d'identité, photos, certificat médical, justificatifs et frais.</li>
</ol>

<h3>12.4 Validité, perte et sanctions</h3>
<ul>
<li>Le permis doit être <strong>présenté à toute réquisition</strong> des forces de l'ordre, avec la carte grise et l'attestation d'assurance.</li>
<li><strong>Perte ou vol</strong> : déclaration aux autorités et demande de duplicata.</li>
<li><strong>Période probatoire</strong> : pendant sa première année de permis, le conducteur novice ne doit pas dépasser <ValeurBenin k="vitesse_novice" /> sur route (110 km/h sur autoroute), selon le manuel de la DGTT.</li>
<li><strong>Mesures possibles en cas d'infraction</strong> : amende, retrait de points (là où le permis à points existe), <strong>suspension</strong> (temporaire), <strong>annulation</strong> (le permis est détruit ; il faut le repasser), <strong>immobilisation</strong> du véhicule, mise en fourrière, peines de prison pour les faits les plus graves (conduite en état d'ivresse avec blessures, délit de fuite, homicide involontaire).</li>
<li>La <strong>conduite sans permis</strong> et la <strong>conduite sans assurance</strong> sont des délits distincts, tous deux lourdement sanctionnés.</li>
</ul>

<QcmBlock title="QCM — Chapitre 12" :questions="questions" />
</section>
</template>
