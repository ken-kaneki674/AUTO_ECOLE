<script setup>
import MemoBox from '../components/MemoBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import RegionValue from '../components/RegionValue.vue'
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
<li>l'attelage d'une <strong>remorque dont le PTAC ne dépasse pas <RegionValue k="remorque_ptac_sans_extension" /></strong> est autorisé ; au-delà, une extension est nécessaire.</li>
</ul>
<MemoBox label="Les trois chiffres du permis B">
<strong>3 500 kg</strong> de PTAC · <strong>9 places</strong> conducteur compris · <strong>750 kg</strong> de remorque.
</MemoBox>

<h3>12.2 Les catégories de permis</h3>
<div class="table-scroll"><table>
<thead><tr><th>Catégorie</th><th>Véhicules autorisés ⚠</th></tr></thead>
<tbody>
<tr><td><strong>A1 / A2 / A3</strong></td><td>Deux-roues et tricycles à moteur, par tranches de cylindrée (voir chapitre 10)</td></tr>
<tr><td><strong>B</strong></td><td>Véhicules ≤ 3 500 kg, ≤ 9 places, remorque ≤ 750 kg</td></tr>
<tr><td><strong>C</strong></td><td>Véhicules de transport de marchandises de plus de 3 500 kg</td></tr>
<tr><td><strong>D</strong></td><td>Véhicules de transport en commun de plus de 9 places</td></tr>
<tr><td><strong>E</strong></td><td>Extension « remorque lourde » associée à B, C ou D (B+E, C+E, D+E)</td></tr>
<tr><td><strong>F</strong></td><td>Catégorie particulière : véhicules aménagés pour personnes handicapées, engins spéciaux ou agricoles selon les pays</td></tr>
</tbody>
</table></div>

<h3>12.3 Conditions d'obtention</h3>
<ol>
<li><strong>Âge minimal</strong> : <RegionValue k="age_minimum_permis_b" /> pour la catégorie B.</li>
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
<li><strong>Période probatoire</strong> : dans de nombreux pays, le conducteur novice est soumis pendant 1 à 3 ans à des règles renforcées (vitesse réduite, alcoolémie abaissée, signe distinctif à l'arrière) ⚠.</li>
<li><strong>Mesures possibles en cas d'infraction</strong> : amende, retrait de points (là où le permis à points existe), <strong>suspension</strong> (temporaire), <strong>annulation</strong> (le permis est détruit ; il faut le repasser), <strong>immobilisation</strong> du véhicule, mise en fourrière, peines de prison pour les faits les plus graves (conduite en état d'ivresse avec blessures, délit de fuite, homicide involontaire).</li>
<li>La <strong>conduite sans permis</strong> et la <strong>conduite sans assurance</strong> sont des délits distincts, tous deux lourdement sanctionnés.</li>
</ul>

<QcmBlock title="QCM — Chapitre 12" :questions="questions" />
</section>
</template>
