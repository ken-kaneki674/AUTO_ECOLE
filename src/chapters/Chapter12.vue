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
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect y="124" width="240" height="26" fill="#3A3F46"/><use href="#truck-side" x="30" y="50" width="180" height="76" color="#0B5FA5"/><text x="90" y="88" font-size="18" font-weight="bold" fill="#171A1F" text-anchor="middle">3 500 kg</text><text x="120" y="30" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">PTAC maximal</text></svg><b>Marchandises</b><span>Poids total autorisé en charge de 3 500 kg au plus</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect x="40" y="10" width="160" height="130" rx="18" fill="#0B5FA5"/><rect x="50" y="20" width="140" height="110" rx="8" fill="#DCEBF7"/><g fill="#5C636D"><rect x="58" y="28" width="30" height="26" rx="4"/></g><g fill="#D2202F"><rect x="108" y="28" width="30" height="26" rx="4"/><rect x="152" y="28" width="30" height="26" rx="4"/><rect x="58" y="62" width="30" height="26" rx="4"/><rect x="104" y="62" width="30" height="26" rx="4"/><rect x="150" y="62" width="30" height="26" rx="4"/><rect x="58" y="96" width="30" height="26" rx="4"/><rect x="104" y="96" width="30" height="26" rx="4"/><rect x="150" y="96" width="30" height="26" rx="4"/></g><circle cx="73" cy="41" r="8" fill="#171A1F"/></svg><b>Personnes</b><span>9 places au plus, conducteur compris</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect y="118" width="240" height="32" fill="#3A3F46"/><rect x="8" y="66" width="74" height="42" rx="3" fill="#C9CDD4" stroke="#5C636D" stroke-width="2"/><circle cx="46" cy="110" r="9" fill="#171A1F"/><path d="M82 100h16" stroke="#171A1F" stroke-width="4"/><use href="#car-side" x="96" y="66" width="136" height="56" color="#0B5FA5"/><path d="M8 54h224M8 48v12M232 48v12" stroke="#171A1F" stroke-width="2"/><text x="120" y="36" font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle">ensemble : 3 500 kg au plus</text></svg><b>Avec une remorque</b><span>3 500 kg au plus à eux deux. Remorque de plus de 500 kg : sa propre carte grise</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><use href="#p-person" x="26" y="24" width="44" height="102" color="#0B5FA5"/><text x="102" y="86" font-size="30" font-weight="bold" fill="#171A1F" text-anchor="middle">=</text><use href="#p-person" x="130" y="62" width="27" height="64" color="#E87722"/><use href="#p-person" x="176" y="62" width="27" height="64" color="#E87722"/><text x="166" y="144" font-size="13" font-weight="bold" fill="#171A1F" text-anchor="middle">moins de 10 ans</text></svg><b>Enfants de moins de 10 ans</b><span>Un enfant = ½ personne, tant qu'ils sont 10 au plus</span></div>
</div>
<figcaption>Figure 12.1 — Ce que le permis B autorise</figcaption>
</figure>
<MemoBox label="Les chiffres du permis B">
<strong>3 500 kg</strong> de PTAC (véhicule + remorque) · <strong>9 places</strong> conducteur compris · remorque de plus de <strong>500 kg</strong> = carte grise propre · enfant de moins de 10 ans = <strong>½ personne</strong> · âge minimal <strong>18 ans</strong>.
</MemoBox>
<p>Le manuel de la DGTT (édition 2011) parle d'une remorque de <strong>750 kg</strong> au plus : c'est cette valeur qu'attendent certaines questions officielles.</p>

<h3>12.2 Les catégories de permis</h3>
<figure>
<div class="panneaux">
 <div class="pan"><svg width="80" height="60" viewBox="0 0 110 66" aria-hidden="true"><use href="#moto-side" width="110" height="66" color="#D2202F"/></svg><b>A1 · A2 · A3</b><br>Deux-roues</div>
 <div class="pan"><svg width="80" height="60" viewBox="0 0 120 70" aria-hidden="true"><path d="M30 18h60q10 0 14 12l6 16H24l-4-18q0-10 10-10z" fill="#F5B301"/><path d="M36 24h22v18H30zM64 24h24l6 18H64z" fill="#DCEBF7"/><circle cx="30" cy="54" r="11" fill="#171A1F"/><circle cx="96" cy="54" r="11" fill="#171A1F"/><path d="M20 46h86v8H20z" fill="#F5B301"/></svg><b>B1</b><br>Tricycles, quadricycles</div>
 <div class="pan"><svg width="80" height="60" viewBox="0 0 130 70" aria-hidden="true"><use href="#car-side" y="8" width="130" height="56" color="#0B5FA5"/></svg><b>B</b><br>Jusqu'à 3,5 t, 9 places</div>
 <div class="pan"><svg width="80" height="60" viewBox="0 0 130 70" aria-hidden="true"><use href="#car-side" y="8" width="130" height="56" color="#1B7F5A"/><text x="66" y="42" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">A</text></svg><b>BEA</b><br>Boîte automatique</div>
 <div class="pan"><svg width="80" height="60" viewBox="0 0 190 80" aria-hidden="true"><use href="#truck-side" width="190" height="80" color="#D2202F"/></svg><b>C · C1</b><br>Marchandises</div>
 <div class="pan"><svg width="80" height="60" viewBox="0 0 180 72" aria-hidden="true"><use href="#bus-side" width="180" height="72" color="#0B5FA5"/></svg><b>Dr · D</b><br>Transport en commun</div>
 <div class="pan"><svg width="80" height="60" viewBox="0 0 220 70" aria-hidden="true"><rect x="4" y="16" width="70" height="36" fill="#C9CDD4" stroke="#5C636D" stroke-width="3"/><circle cx="40" cy="54" r="9" fill="#171A1F"/><path d="M74 46h18" stroke="#171A1F" stroke-width="4"/><use href="#car-side" x="90" y="10" width="130" height="56" color="#0B5FA5"/></svg><b>E</b><br>Avec remorque</div>
</div>
<figcaption>Figure 12.2 — À chaque catégorie, ses véhicules</figcaption>
</figure>
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

<figure>
<div class="panneaux">
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="34" fill="#0B5FA5"/><text x="40" y="48" font-size="24" font-weight="bold" fill="#fff" text-anchor="middle">18</text></svg>1. L'âge</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><circle cx="34" cy="34" r="24" fill="#fff" stroke="#0B5FA5" stroke-width="7"/><circle cx="34" cy="34" r="8" fill="#171A1F"/><path d="M52 52l18 18" stroke="#0B5FA5" stroke-width="9" stroke-linecap="round"/></svg>2. La visite médicale</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><path d="M40 12 4 30l36 18 36-18z" fill="#171A1F"/><path d="M18 40v18q22 14 44 0V40L40 52z" fill="#5C636D"/></svg>3. L'auto-école</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><rect x="16" y="6" width="48" height="68" rx="3" fill="#fff" stroke="#5C636D" stroke-width="3"/><path d="M24 22l5 5 8-10M24 42l5 5 8-10M24 62l5 5 8-10" fill="none" stroke="#1B7F5A" stroke-width="4"/><path d="M42 24h14M42 44h14M42 64h14" stroke="#5C636D" stroke-width="3"/></svg>4. Le code</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="32" fill="none" stroke="#171A1F" stroke-width="9"/><circle cx="40" cy="40" r="8" fill="#171A1F"/><path d="M40 40V10M40 40 14 56M40 40l26 16" stroke="#171A1F" stroke-width="7"/></svg>5. La conduite</div>
 <div class="pan"><svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true"><path d="M16 4h34l14 14v58H16z" fill="#fff" stroke="#5C636D" stroke-width="3"/><path d="M50 4v14h14" fill="none" stroke="#5C636D" stroke-width="3"/><circle cx="32" cy="32" r="8" fill="#8D5A3B"/><path d="M22 50q10-16 20 0z" fill="#0B5FA5"/><path d="M24 60h32M24 68h22" stroke="#5C636D" stroke-width="3"/></svg>6. Le dossier</div>
</div>
<figcaption>Figure 12.3 — Les six conditions d'obtention</figcaption>
</figure>

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
<figure>
<svg class="fig-large" viewBox="0 0 640 170" role="img" aria-label="Parcours de la réforme de 2026 : formation de 60 heures de code et 30 heures de pratique, examen théorique à 14 sur 20, attestation, formation pratique de 6 mois ou 120 heures, examen pratique à 14 sur 20">
 <rect width="640" height="170" fill="#EDEFF2"/>
 <g text-anchor="middle" font-size="15" fill="#fff" font-weight="bold">
  <rect x="8" y="30" width="112" height="86" rx="5" fill="#0B5FA5"/><text x="64" y="58">Formation</text><text x="64" y="80">60 h de code</text><text x="64" y="100">30 h de pratique</text>
  <rect x="140" y="30" width="100" height="86" rx="5" fill="#D2202F"/><text x="190" y="66">Examen</text><text x="190" y="84">théorique</text><text x="190" y="106" font-size="18">14/20</text>
  <rect x="260" y="30" width="100" height="86" rx="5" fill="#1B7F5A"/><text x="310" y="72">Attestation</text><text x="310" y="92">provisoire</text>
  <rect x="380" y="30" width="118" height="86" rx="5" fill="#0B5FA5"/><text x="439" y="58">Conduite</text><text x="439" y="80">6 mois</text><text x="439" y="100">ou 120 h</text>
  <rect x="518" y="30" width="114" height="86" rx="5" fill="#D2202F"/><text x="575" y="66">Examen</text><text x="575" y="84">pratique</text><text x="575" y="106" font-size="18">14/20</text>
 </g>
 <g stroke="#171A1F" stroke-width="3"><path d="M120 73h12" marker-end="url(#m-k)"/><path d="M240 73h12" marker-end="url(#m-k)"/><path d="M360 73h12" marker-end="url(#m-k)"/><path d="M498 73h12" marker-end="url(#m-k)"/></g>
 <text x="320" y="150" font-size="15" fill="#5C636D" text-anchor="middle">Demande à ton auto-école à partir de quelle session ce parcours s'applique à toi.</text>
</svg>
<figcaption>Figure 12.4 — Le parcours du candidat selon la réforme</figcaption>
</figure>
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
<figure>
<svg class="fig-large" viewBox="0 0 620 200" role="img" aria-label="De la mesure la plus légère à la plus lourde : amende, suspension, immobilisation et fourrière, annulation, prison">
 <rect width="620" height="200" fill="#EDEFF2"/>
 <g text-anchor="middle" font-size="15" font-weight="bold" fill="#fff">
  <rect x="10" y="130" width="112" height="46" fill="#F5B301"/><text x="66" y="158" fill="#171A1F">Amende</text>
  <rect x="130" y="104" width="112" height="72" fill="#E87722"/><text x="186" y="144">Suspension</text><text x="186" y="164" font-size="13">temporaire</text>
  <rect x="250" y="78" width="118" height="98" fill="#D2202F"/><text x="309" y="120">Immobilisation</text><text x="309" y="142">fourrière</text>
  <rect x="376" y="52" width="112" height="124" fill="#A5121F"/><text x="432" y="104">Annulation</text><text x="432" y="126" font-size="13">le permis est détruit</text><text x="432" y="144" font-size="13">à repasser</text>
  <rect x="496" y="26" width="112" height="150" fill="#171A1F"/><text x="552" y="88">Prison</text><text x="552" y="110" font-size="13">faits les plus</text><text x="552" y="128" font-size="13">graves</text>
 </g>
 <path d="M10 176h598" stroke="#171A1F" stroke-width="3"/>
 <text x="150" y="60" font-size="15" fill="#5C636D" text-anchor="middle">Plus l'infraction est grave,</text><text x="150" y="80" font-size="15" fill="#5C636D" text-anchor="middle">plus la mesure est lourde.</text>
</svg>
<figcaption>Figure 12.5 — Les mesures possibles en cas d'infraction</figcaption>
</figure>

<QcmBlock title="QCM — Chapitre 12" :questions="questions" />
</section>
</template>
