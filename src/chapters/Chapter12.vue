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
<li>s'ils transportent des <strong>marchandises</strong>, leur <strong>poids total autorisé en charge (PTAC) n'excède pas 3 500 kg</strong> : ce sont des véhicules de <strong>poids léger</strong> ;</li>
<li>s'ils transportent des <strong>personnes</strong>, leur nombre de places assises <strong>ne dépasse pas neuf (9), conducteur compris</strong> (8 places outre celle du conducteur).</li>
</ul>
<p><strong>Remorque.</strong> On peut atteler une remorque à condition que le <strong>PTAC du véhicule et celui de la remorque réunis n'excèdent pas <ValeurBenin k="remorque_ptac_ensemble" /></strong>. Si le PTAC de la remorque dépasse <ValeurBenin k="remorque_carte_grise" />, la remorque doit avoir <strong>sa propre carte grise</strong> et un <strong>numéro d'immatriculation différent</strong> de celui du véhicule tracteur.</p>
<p><strong>Transport d'enfants.</strong> Les enfants de <strong>moins de dix (10) ans</strong> comptent pour <strong>une demi-personne</strong>, à condition que leur nombre ne dépasse pas dix (10).</p>
<MemoBox label="Les chiffres du permis B">
<strong>3 500 kg</strong> de PTAC (véhicule + remorque) · <strong>9 places</strong> conducteur compris · remorque de plus de <strong>500 kg</strong> = carte grise propre · enfant de moins de 10 ans = <strong>½ personne</strong> · âge minimal <strong>18 ans</strong>.
</MemoBox>
<p>Le manuel de la DGTT (édition 2011) parle d'une remorque de <strong>750 kg</strong> au plus : c'est cette valeur qu'attendent certaines questions officielles.</p>

<h3>12.2 Les catégories de permis</h3>
<div class="table-scroll"><table>
<thead><tr><th>Catégorie</th><th>Véhicules autorisés</th><th>Âge minimal</th></tr></thead>
<tbody>
<tr><td><strong>A1 / A2 / A3</strong></td><td>Deux-roues, tricycles et quadricycles à moteur, par tranches de cylindrée (voir chapitre 10)</td><td>16 / 18 / 21 ans</td></tr>
<tr><td><strong>B1</strong> <span class="lx-src dgtt">2026</span></td><td>Tricycles et quadricycles à moteur, dont les tricycles de transport de passagers (« cloboto »)</td><td>—</td></tr>
<tr><td><strong>B</strong></td><td>Transport de personnes ou de marchandises, PTAC ≤ 3,5 t ou 9 places conducteur compris ; véhicule + remorque ≤ 3,5 t</td><td>18 ans</td></tr>
<tr><td><strong>BEA</strong> <span class="lx-src dgtt">2026</span></td><td>Véhicules à boîte de vitesses automatique, PTAC ≤ 4,25 t</td><td>—</td></tr>
<tr><td><strong>C</strong></td><td>Transport de marchandises ou de matériel, PTAC ≤ 18 t</td><td>21 ans</td></tr>
<tr><td><strong>C1</strong></td><td>Transport de marchandises ou de matériel, PTAC &gt; 18 t</td><td>21 ans</td></tr>
<tr><td><strong>Dr (TCR)</strong></td><td>Transport en commun de 18 places au plus, PTAC ≤ 3,5 t</td><td>21 ans</td></tr>
<tr><td><strong>D</strong></td><td>Transport en commun de plus de 18 places, PTAC &gt; 3,5 t</td><td>21 ans</td></tr>
<tr><td><strong>E</strong></td><td>Remorque attelée à un véhicule de catégorie B au-delà de la limite du permis B (E(B))</td><td>—</td></tr>
<tr><td><strong>F</strong></td><td>Réservé aux personnes en situation de handicap physique</td><td>—</td></tr>
</tbody>
</table></div>
<p>Source : notes de cours de l'auto-école ; manuel du candidat de la DGTT (édition 2011), chapitre I, et questions Q681, Q689 et Q694. Les catégories marquées <span class="lx-src dgtt">2026</span> sont créées par l'arrêté de l'ANaTT n° 2026/0196, qui porte le nombre de catégories à douze (A1, A2, A3, B1, B, BEA, C, CE, D1, D, E et F). Les catégories C1 et Dr du tableau viennent du manuel de 2011 ; la définition exacte des catégories CE et D1 de la liste de 2026 sera donnée par le manuel de référence annoncé par l'ANaTT.</p>

<h3>12.3 Conditions d'obtention</h3>
<ol>
<li><strong>Âge minimal</strong> : <ValeurBenin k="age_minimum_permis_b" /> pour la catégorie B.</li>
<li><strong>Aptitude physique</strong> : visite médicale (vision, audition, absence d'affection incompatible).</li>
<li><strong>Formation</strong> dans une auto-école agréée : cours théoriques (code) et leçons de conduite.</li>
<li><strong>Épreuve théorique</strong> : QCM portant sur le code de la route, la sécurité, la mécanique et le secourisme.</li>
<li><strong>Épreuve pratique</strong> : manœuvres (créneau, marche arrière, demi-tour, démarrage en côte) et conduite en circulation.</li>
<li><strong>Dossier</strong> : pièce d'identité, photos, certificat médical, justificatifs et frais.</li>
</ol>

<h3>12.4 La réforme du permis de 2026</h3>
<p>L'arrêté de l'Agence nationale des transports terrestres (<strong>ANaTT</strong>) n° 2026/0196, publié en juillet 2026, remplace l'arrêté de novembre 2015. Il change le parcours du candidat :</p>
<ul>
<li><strong>Formation avant le code</strong> : au moins <strong>60 heures</strong> de cours théoriques et <strong>30 heures</strong> de pratique de base dans une auto-école agréée.</li>
<li><strong>Examen théorique séparé</strong>, passé sur support numérique (smartphone). Il faut au moins <strong>14/20</strong> pour être admis.</li>
<li><strong>Attestation de succès</strong> : la réussite au code donne une attestation provisoire qui permet de poursuivre la formation pratique.</li>
<li><strong>Formation pratique</strong> : au moins <strong>six mois</strong> (parcours standard) ou <strong>120 heures</strong> de conduite effective (parcours accéléré), attestées par le livret d'apprentissage et la fiche de suivi de l'auto-école.</li>
<li><strong>Examen pratique</strong> : note minimale de <strong>14/20</strong> (au lieu de 12/20), avec une épreuve de circulation en dehors du circuit habituel : en ville et sur les routes nationales autour de la commune d'examen.</li>
<li><strong>Dérogation d'âge</strong> : un candidat de <strong>17 ans</strong> révolus peut se présenter avec l'autorisation de ses parents ou tuteurs pour certaines catégories (dont A2, A3 et BEA ; les sources diffèrent sur B et B1).</li>
</ul>
<MemoBox label="À retenir — réforme 2026">
<strong>60 h</strong> de code + <strong>30 h</strong> de pratique avant l'examen théorique · code et conduite : <strong>14/20</strong> minimum · <strong>6 mois</strong> ou <strong>120 h</strong> de conduite avant l'examen pratique · nouvelles catégories <strong>B1</strong> (tricycles) et <strong>BEA</strong> (boîte automatique).
</MemoBox>
<p class="exam-legend">⚠ Selon la Fédération des auto-écoles (communiqué du 16 juillet 2026), ces dispositions n'étaient pas encore appliquées à cette date. Demande à ton auto-école à partir de quelle session elles s'appliquent à toi.</p>

<h3>12.5 Validité, perte et sanctions</h3>
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
