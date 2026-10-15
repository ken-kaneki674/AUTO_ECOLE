<script setup>
import MemoBox from '../components/MemoBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import ValeurBenin from '../components/ValeurBenin.vue'
import questions from '../data/questions/ch14.json'
</script>

<template>
<section class="chap" id="ch14">
<div class="chap-head">
  <span class="borne">14</span>
  <div><span class="fil">Chapitre 14</span><h2>Les panneaux : catalogue</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Décoder n'importe quel panneau à partir de sa forme et de sa couleur, mémoriser les panneaux les plus fréquents et comprendre le rôle des panonceaux.</p>

<h3>14.1 Lire un panneau sans le connaître</h3>
<p>La <strong>forme</strong> et la <strong>couleur</strong> donnent la nature du message ; le <strong>pictogramme</strong> donne le détail. Un candidat qui maîtrise ce tableau peut interpréter un panneau qu'il n'a jamais vu.</p>
<div class="table-scroll"><table>
<thead><tr><th>Forme et couleur</th><th>Famille</th><th>Message</th><th>Implantation</th></tr></thead>
<tbody>
<tr><td>Triangle à bord rouge, pointe en haut</td><td>Danger</td><td>« Attention, voici ce qui arrive »</td><td><ValeurBenin k="distance_panneau_danger_hors_agglomeration" /> hors agglomération, <ValeurBenin k="distance_panneau_danger_agglomeration" /> en agglomération</td></tr>
<tr><td>Cercle à bord rouge</td><td>Prescription absolue : interdiction</td><td>« C'est interdit »</td><td>Au début de la zone concernée</td></tr>
<tr><td>Cercle bleu plein</td><td>Prescription absolue : obligation</td><td>« Tu dois faire ceci »</td><td>Au début de la zone concernée</td></tr>
<tr><td>Carré ou rectangle bleu</td><td>Indication / service</td><td>« Voici une information utile »</td><td>Sur place</td></tr>
<tr><td>Cercle blanc barré de gris</td><td>Fin de prescription</td><td>« L'interdiction précédente cesse »</td><td>Fin de zone</td></tr>
<tr><td>Triangle pointe en bas, octogone, losange jaune, triangle à flèche barrée</td><td>Intersections et régimes de priorité</td><td>Cédez le passage, STOP, route prioritaire (AB6), prioritaire à la prochaine intersection (AB2)</td><td>AB1 et AB2 : 150 m avant l'intersection en rase campagne, à proximité en agglomération (Q139 à Q141)</td></tr>
<tr><td>Fond jaune</td><td>Temporaire</td><td>Chantier, déviation</td><td>Zone de travaux</td></tr>
<tr><td>Rectangle blanc sous le panneau</td><td>Panonceau</td><td>Précise la portée, la distance, la catégorie visée</td><td>Sous le panneau principal</td></tr>
</tbody>
</table></div>
<p>On retrouve les <strong>quatre catégories</strong> du <router-link :to="{ name: 'chapitre', params: { id: '1' } }">chapitre 1</router-link> : danger, prescription absolue (interdiction et obligation, tous ronds), indication, intersections et régimes de priorité.</p>

<h3>14.2 Panneaux de danger (triangle rouge)</h3>
<div class="panneaux">
 <div class="pan"><svg width="82" height="74" viewBox="0 0 100 90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-danger" xlink:href="#s-danger" width="100" height="90"/><path d="M44 76V60q0-10 12-10" fill="none" stroke="#000" stroke-width="7"/><path d="M53 40l14 10-14 10z" fill="#000"/></svg>A1a · Virage à droite</div>
 <div class="pan"><svg width="82" height="74" viewBox="0 0 100 90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-danger" xlink:href="#s-danger" width="100" height="90"/><path d="M24 72q26-32 52 0" fill="none" stroke="#000" stroke-width="7"/></svg>A2a / A2b · Cassis ou dos d'âne</div>
 <div class="pan"><svg width="82" height="74" viewBox="0 0 100 90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-danger" xlink:href="#s-danger" width="100" height="90"/><rect x="34" y="46" width="32" height="14" rx="3" fill="#000"/><circle cx="41" cy="63" r="4" fill="#000"/><circle cx="59" cy="63" r="4" fill="#000"/><path d="M28 70q4-6 8 0t8 0M56 70q4-6 8 0t8 0" fill="none" stroke="#000" stroke-width="3"/></svg>A4 · Chaussée glissante</div>
 <div class="pan"><svg width="82" height="74" viewBox="0 0 100 90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-danger" xlink:href="#s-danger" width="100" height="90"/><circle cx="48" cy="42" r="5" fill="#000"/><path d="M48 48v14M48 62l-6 12M48 62l6 12M40 54h16" stroke="#000" stroke-width="4" stroke-linecap="round"/><path d="M62 74h12M66 68h12M70 62h12" stroke="#000" stroke-width="3"/></svg>A13b · Passage pour piétons</div>
 <div class="pan"><svg width="82" height="74" viewBox="0 0 100 90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-danger" xlink:href="#s-danger" width="100" height="90"/><circle cx="40" cy="44" r="5" fill="#000"/><path d="M40 50v12M40 62l-6 12M40 62l6 12M33 55h14" stroke="#000" stroke-width="4" stroke-linecap="round"/><circle cx="62" cy="48" r="4" fill="#000"/><path d="M62 53v10M62 63l-5 11M62 63l5 11M56 57h12" stroke="#000" stroke-width="3.5" stroke-linecap="round"/></svg>A13a · Enfants · sortie d'école</div>
 <div class="pan"><svg width="82" height="74" viewBox="0 0 100 90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-danger" xlink:href="#s-danger" width="100" height="90"/><circle cx="45" cy="42" r="5" fill="#000"/><path d="M45 48v13M45 61l-5 13M45 61l6 13M45 52l14-8" stroke="#000" stroke-width="4" stroke-linecap="round"/><path d="M58 40l10 6-16 22" stroke="#000" stroke-width="4" fill="none"/></svg>AK5 · Travaux</div>
 <div class="pan"><svg width="82" height="74" viewBox="0 0 100 90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-danger" xlink:href="#s-danger" width="100" height="90"/><rect x="40" y="34" width="20" height="42" rx="4" fill="none" stroke="#000" stroke-width="3"/><circle cx="50" cy="43" r="4.5" fill="#D2202F"/><circle cx="50" cy="55" r="4.5" fill="#F5B301"/><circle cx="50" cy="67" r="4.5" fill="#1B7F5A"/></svg>A17 · Feux tricolores</div>
 <div class="pan"><svg width="82" height="74" viewBox="0 0 100 90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-danger" xlink:href="#s-danger" width="100" height="90"/><path d="M26 74V48h6v20h42V48h6v26z" fill="#000"/><rect x="30" y="52" width="44" height="6" fill="#000"/></svg>A7 · Passage à niveau à barrières</div>
 <div class="pan"><svg width="82" height="74" viewBox="0 0 100 90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-danger" xlink:href="#s-danger" width="100" height="90"/><path d="M30 58h32v10H30z" fill="#000"/><path d="M62 58l9-5v15h-9z" fill="#000"/><path d="M64 53v-6M70 53v-6" stroke="#000" stroke-width="3"/><path d="M33 68v9M42 68v9M52 68v9M60 68v9" stroke="#000" stroke-width="4"/><path d="M30 59l-7-7" stroke="#000" stroke-width="3"/></svg>A15 · Traversée d'animaux</div>
 <div class="pan"><svg width="82" height="74" viewBox="0 0 100 90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-danger" xlink:href="#s-danger" width="100" height="90"/><path d="M32 40l10 34M68 40l-10 34" stroke="#000" stroke-width="5"/><path d="M42 74h16" stroke="#000" stroke-width="5"/></svg>A3 · Rétrécissement de chaussée</div>
 <div class="pan"><svg width="82" height="74" viewBox="0 0 100 90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-danger" xlink:href="#s-danger" width="100" height="90"/><path d="M50 38v24" stroke="#000" stroke-width="7" stroke-linecap="round"/><circle cx="50" cy="72" r="4.5" fill="#000"/></svg>A14 · Autres dangers</div>
 <div class="pan"><svg width="82" height="74" viewBox="0 0 100 90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-danger" xlink:href="#s-danger" width="100" height="90"/><path d="M26 52l48 22H26z" fill="#000"/><text x="50" y="46" font-size="15" font-family="Arial Narrow, Arial" font-weight="bold" text-anchor="middle" fill="#000">10%</text></svg>A16 · Descente dangereuse</div>
</div>

<h3>14.3 Panneaux d'interdiction (cercle rouge)</h3>
<div class="panneaux">
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="50" cy="50" r="47" fill="#D2202F"/><rect x="18" y="42" width="64" height="16" fill="#fff"/></svg>B1 · Sens interdit</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-interdit" xlink:href="#s-interdit" width="100" height="100"/></svg>B0 · Circulation interdite dans les deux sens</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-interdit" xlink:href="#s-interdit" width="100" height="100"/><text x="50" y="64" font-size="40" font-family="Arial Narrow, Arial" font-weight="bold" text-anchor="middle" fill="#000">50</text></svg>B14 · Vitesse limitée à 50</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-interdit" xlink:href="#s-interdit" width="100" height="100"/><rect x="24" y="52" width="26" height="14" rx="3" fill="#000"/><rect x="52" y="40" width="26" height="14" rx="3" fill="#D2202F"/></svg>B3 · Dépassement interdit</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="50" cy="50" r="47" fill="#D2202F"/><circle cx="50" cy="50" r="40" fill="#0B5FA5"/><path d="M24 76 76 24" stroke="#D2202F" stroke-width="9"/></svg>B6a1 · Stationnement interdit</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="50" cy="50" r="47" fill="#D2202F"/><circle cx="50" cy="50" r="40" fill="#0B5FA5"/><path d="M24 76 76 24M24 24l52 52" stroke="#D2202F" stroke-width="8"/></svg>B6d · Arrêt et stationnement interdits</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-interdit" xlink:href="#s-interdit" width="100" height="100"/><path d="M22 60V46h30v-8h16l10 14v8z" fill="#000"/><circle cx="33" cy="64" r="5" fill="#000"/><circle cx="66" cy="64" r="5" fill="#000"/></svg>B8 · Accès interdit aux poids lourds</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-interdit" xlink:href="#s-interdit" width="100" height="100"/><circle cx="46" cy="34" r="5" fill="#000"/><path d="M46 40v16M46 56l-7 14M46 56l7 14M38 45h16" stroke="#000" stroke-width="4" stroke-linecap="round"/><path d="M22 78 78 22" stroke="#D2202F" stroke-width="8"/></svg>B9a · Accès interdit aux piétons</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-interdit" xlink:href="#s-interdit" width="100" height="100"/><path d="M30 44h14l16-12v36L44 56H30z" fill="#000"/><path d="M66 40q8 10 0 20" fill="none" stroke="#000" stroke-width="4"/><path d="M22 78 78 22" stroke="#D2202F" stroke-width="8"/></svg>B16 · Avertisseur sonore interdit</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="50" cy="50" r="47" fill="#9AA0A8"/><circle cx="50" cy="50" r="41" fill="#fff"/><path d="M26 74 74 26" stroke="#5C636D" stroke-width="7"/></svg>B31 · Fin d'interdiction</div>
</div>

<h3>14.4 Panneaux d'obligation (cercle bleu)</h3>
<div class="panneaux">
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-oblig" xlink:href="#s-oblig" width="100" height="100"/><path d="M50 74V38" stroke="#fff" stroke-width="9"/><path d="M50 22l16 22H34z" fill="#fff"/></svg>B21b · Direction obligatoire : tout droit</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-oblig" xlink:href="#s-oblig" width="100" height="100"/><path d="M40 78V56q0-10 12-10h10" fill="none" stroke="#fff" stroke-width="9"/><path d="M58 32l22 16-22 16z" fill="#fff"/></svg>B21c1 · Direction obligatoire : à droite</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-oblig" xlink:href="#s-oblig" width="100" height="100"/><g transform="translate(100,0) scale(-1,1)"><path d="M64 22v34q0 18-18 18H30" fill="none" stroke="#fff" stroke-width="9"/><path d="M34 58L14 74l20 16z" fill="#fff"/></g></svg>B21a1 · Contournement obligatoire par la droite</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-oblig" xlink:href="#s-oblig" width="100" height="100"/><circle cx="30" cy="64" r="13" fill="none" stroke="#fff" stroke-width="5"/><circle cx="70" cy="64" r="13" fill="none" stroke="#fff" stroke-width="5"/><path d="M30 64l12-18h12M42 46l14 18" stroke="#fff" stroke-width="4" fill="none"/><circle cx="58" cy="30" r="5" fill="#fff"/></svg>B22a · Piste cyclable obligatoire</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-oblig" xlink:href="#s-oblig" width="100" height="100"/><text x="50" y="64" font-size="38" font-family="Arial Narrow, Arial" font-weight="bold" text-anchor="middle" fill="#fff">30</text></svg>B25 · Vitesse minimale obligatoire</div>
</div>

<h3>14.5 Panneaux d'indication et de service (carré bleu)</h3>
<div class="panneaux">
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-indic" xlink:href="#s-indic" width="100" height="100"/><path d="M50 16 84 50 50 84 16 50Z" fill="#fff"/><circle cx="46" cy="40" r="4" fill="#0B5FA5"/><path d="M46 45v11M46 56l-5 12M46 56l6 12M39 49h14" stroke="#0B5FA5" stroke-width="3.5" stroke-linecap="round"/><path d="M56 70h10M60 64h10" stroke="#0B5FA5" stroke-width="3"/></svg>C20a · Passage pour piétons</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-indic" xlink:href="#s-indic" width="100" height="100"/><text x="50" y="72" font-size="56" font-family="Arial" font-weight="bold" text-anchor="middle" fill="#fff">P</text></svg>C1a · Parc de stationnement</div>
 <div class="pan"><svg width="112" height="52" viewBox="0 0 200 90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="3" y="3" width="194" height="84" rx="4" fill="#0B5FA5" stroke="#fff" stroke-width="5"/><path d="M40 45h100" stroke="#fff" stroke-width="12"/><path d="M140 27l30 18-30 18z" fill="#fff"/></svg>C12 · Sens unique</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-indic" xlink:href="#s-indic" width="100" height="100"/><path d="M50 84V40" stroke="#fff" stroke-width="9"/><path d="M30 40h40" stroke="#D2202F" stroke-width="9"/></svg>C13 · Voie sans issue (impasse)</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-indic" xlink:href="#s-indic" width="100" height="100"/><rect x="26" y="30" width="30" height="46" fill="#fff"/><rect x="33" y="37" width="16" height="12" fill="#0B5FA5"/><path d="M60 76V44l10-8v34" fill="#fff"/><rect x="62" y="30" width="6" height="8" fill="#fff"/></svg>Station-service</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-indic" xlink:href="#s-indic" width="100" height="100"/><rect x="42" y="24" width="16" height="52" fill="#fff"/><rect x="24" y="42" width="52" height="16" fill="#fff"/></svg>Poste de secours · hôpital</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-indic" xlink:href="#s-indic" width="100" height="100"/><path d="M20 84c14-40 46-40 60 0" fill="none" stroke="#fff" stroke-width="8"/><path d="M14 52h72" stroke="#fff" stroke-width="7"/></svg>C207 · Autoroute</div>
 <div class="pan"><svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use href="#s-indic" xlink:href="#s-indic" width="100" height="100"/><path d="M18 64V52h12l10-12h22l9 12h9v12z" fill="#fff"/><circle cx="34" cy="66" r="7" fill="#fff"/><circle cx="68" cy="66" r="7" fill="#fff"/><circle cx="34" cy="66" r="3" fill="#0B5FA5"/><circle cx="68" cy="66" r="3" fill="#0B5FA5"/></svg>C107 · Route pour automobiles</div>
</div>

<h3>14.6 Les panonceaux</h3>
<p>Placés <strong>sous</strong> un panneau, ils en précisent le sens. Sans le panonceau, le panneau reste valable ; sans le panneau, le panonceau ne veut rien dire.</p>
<div class="panneaux">
 <div class="pan"><svg width="112" height="46" viewBox="0 0 200 80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="3" y="3" width="194" height="74" fill="#fff" stroke="#171A1F" stroke-width="5"/><text x="100" y="55" font-size="34" font-family="Arial Narrow, Arial" text-anchor="middle" fill="#171A1F">300 m</text></svg>Distance : le danger ou la prescription commence dans 300 m</div>
 <div class="pan"><svg width="112" height="46" viewBox="0 0 200 80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="3" y="3" width="194" height="74" fill="#fff" stroke="#171A1F" stroke-width="5"/><text x="100" y="55" font-size="30" font-family="Arial Narrow, Arial" text-anchor="middle" fill="#171A1F">sur 5 km</text></svg>Étendue : la prescription s'applique sur 5 km</div>
 <div class="pan"><svg width="112" height="46" viewBox="0 0 200 80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="3" y="3" width="194" height="74" fill="#fff" stroke="#171A1F" stroke-width="5"/><path d="M40 55h80v-16h-80z" fill="#171A1F"/><circle cx="58" cy="60" r="7" fill="#171A1F"/><circle cx="104" cy="60" r="7" fill="#171A1F"/></svg>Catégorie visée : concerne les poids lourds</div>
 <div class="pan"><svg width="112" height="46" viewBox="0 0 200 80" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="3" y="3" width="194" height="74" fill="#fff" stroke="#171A1F" stroke-width="5"/><path d="M30 40h120" stroke="#171A1F" stroke-width="9"/><path d="M150 24l24 16-24 16z" fill="#171A1F"/></svg>Direction : indique le côté concerné</div>
</div>
<MemoBox label="Règle de portée">
Un panneau d'interdiction s'applique <strong>à partir du panneau</strong> (Q158) et <strong>jusqu'à la prochaine intersection</strong>, sauf mention contraire d'un panonceau ou d'un panneau de fin. Le panneau <strong>B31</strong> met fin à toutes les interdictions, <strong>sauf</strong> celles d'arrêt et de stationnement (Q78). Les panneaux d'entrée et de sortie d'agglomération valent aussi début et fin des règles de l'agglomération (vitesse, usage de l'avertisseur, stationnement).
</MemoBox>

<h3>14.7 Les codes cités dans les questions officielles</h3>
<p>Le manuel de la DGTT désigne souvent les panneaux par leur <strong>code</strong>. Voici ce que ses corrigés en disent. Toutes les illustrations sont dans le <router-link :to="{ name: 'benin-panneaux' }">catalogue des panneaux du manuel</router-link>.</p>
<h4>Danger (A) et danger temporaire (AK)</h4>
<div class="table-scroll"><table>
<thead><tr><th>Code</th><th>Signification</th><th>Questions</th></tr></thead>
<tbody>
<tr><td><strong>A1c, A1d</strong></td><td>Succession de virages (A1d1 : sur 5 km, le premier à gauche) ; ralentir avant chaque virage</td><td>Q23, Q51, Q156</td></tr>
<tr><td><strong>A3, A3a</strong></td><td>Chaussée rétrécie (A3a1 : par la droite, à 200 m) ; si un véhicule arrive en face, serrer à droite, s'arrêter et le laisser passer</td><td>Q24, Q70</td></tr>
<tr><td><strong>A6</strong></td><td>Débouché sur un pont mobile</td><td>Q33</td></tr>
<tr><td><strong>A7</strong></td><td>Passage à niveau muni de barrières : ralentir, serrer à droite, passer avec prudence</td><td>Q65, Q66, Q135</td></tr>
<tr><td><strong>A8</strong></td><td>Passage à niveau sans barrière : ralentir, regarder à gauche et à droite avant de traverser</td><td>Q67, Q68</td></tr>
<tr><td><strong>A13a</strong></td><td>Endroit fréquenté par des enfants : ralentir, s'arrêter au besoin</td><td>Q69</td></tr>
<tr><td><strong>A13b</strong></td><td>Passage pour piétons : passer derrière le piéton en laissant au moins 1 m</td><td>Q147, Q193</td></tr>
<tr><td><strong>A15a, A15c</strong></td><td>Animaux domestiques (A15a), passage de cavaliers (A15c)</td><td>Q17, Q150</td></tr>
<tr><td><strong>A16</strong></td><td>Descente dangereuse</td><td>Q32</td></tr>
<tr><td><strong>A18</strong></td><td>Circulation dans les deux sens (prend effet à partir du panneau)</td><td>Q45, Q127, Q191</td></tr>
<tr><td><strong>A19</strong></td><td>Risque de chute de pierres</td><td>Q18</td></tr>
<tr><td><strong>A20</strong></td><td>Débouché sur un quai ou une berge</td><td>Q31</td></tr>
<tr><td><strong>A21a, A21b</strong></td><td>Débouché de cyclistes : des deux côtés (A21a), de gauche seulement (A21b)</td><td>Q19, Q30</td></tr>
<tr><td><strong>A25</strong></td><td>Carrefour à sens giratoire : céder le passage aux usagers venant de gauche</td><td>Q43</td></tr>
<tr><td><strong>AK4, AK5</strong></td><td>Danger temporaire (fond jaune) : chaussée glissante (AK4), travaux (AK5) ; ralentir</td><td>Q155, Q159, Q182</td></tr>
</tbody>
</table></div>
<h4>Intersections et priorité (AB)</h4>
<div class="table-scroll"><table>
<thead><tr><th>Code</th><th>Signification</th><th>Questions</th></tr></thead>
<tbody>
<tr><td><strong>AB1</strong></td><td>Intersection où s'applique la priorité à droite</td><td>Q139</td></tr>
<tr><td><strong>AB2</strong></td><td>Je suis prioritaire à la prochaine intersection : les usagers de gauche et de droite perdent la priorité</td><td>Q103, Q137</td></tr>
<tr><td><strong>AB3a</strong></td><td>Cédez le passage à droite et à gauche</td><td>Q107</td></tr>
<tr><td><strong>AB4</strong></td><td>STOP : marquer l'arrêt et céder le passage à droite et à gauche</td><td>Q104, Q106</td></tr>
<tr><td><strong>AB6</strong></td><td>Route à caractère prioritaire : je passe</td><td>Q22</td></tr>
<tr><td><strong>AB7</strong></td><td>Fin de route prioritaire : on peut ensuite rencontrer un cédez le passage, un STOP ou une intersection de routes de même nature</td><td>Q138</td></tr>
</tbody>
</table></div>
<h4>Interdiction et fin d'interdiction (B)</h4>
<div class="table-scroll"><table>
<thead><tr><th>Code</th><th>Signification</th><th>Questions</th></tr></thead>
<tbody>
<tr><td><strong>B0</strong></td><td>Circulation interdite dans les deux sens : faire demi-tour si possible</td><td>Q37</td></tr>
<tr><td><strong>B1</strong></td><td>Sens interdit : la rue est à sens unique dans l'autre sens (l'usager d'en face voit un panneau C12)</td><td>Q48, Q71, Q146</td></tr>
<tr><td><strong>B2a, B2b, B2c</strong></td><td>Interdit de tourner à gauche (B2a), à droite (B2b), de faire demi-tour (B2c) à la prochaine intersection</td><td>Q114, Q200, Q201</td></tr>
<tr><td><strong>B3</strong></td><td>Dépassement interdit (sauf deux-roues sans side-car et véhicules à traction animale)</td><td>Q72, Q272</td></tr>
<tr><td><strong>B5c</strong></td><td>Arrêt au poste de péage</td><td>Q144</td></tr>
<tr><td><strong>B6a1</strong></td><td>Stationnement interdit à partir du panneau ; on peut stationner avant, et s'arrêter avant ou après</td><td>Q34, Q35, Q115</td></tr>
<tr><td><strong>B6d</strong></td><td>Arrêt et stationnement interdits</td><td>Q109</td></tr>
<tr><td><strong>B7a, B7b</strong></td><td>Accès interdit aux véhicules à moteur sauf cyclomoteurs (B7a), à tous les véhicules à moteur (B7b)</td><td>Q108, Q195</td></tr>
<tr><td><strong>B8</strong></td><td>Accès interdit aux véhicules de transport de marchandises</td><td>Q49, Q61</td></tr>
<tr><td><strong>B9c, B9g</strong></td><td>Accès interdit aux véhicules à traction animale (B9c), aux cyclomoteurs (B9g)</td><td>Q57, Q110</td></tr>
<tr><td><strong>B10a, B12, B13</strong></td><td>Accès interdit au-delà d'une longueur (B10a : 10 m), d'une hauteur (B12 : 3,5 m) ou d'un poids (B13 : 5,5 t ; B13a : 2,5 t par essieu)</td><td>Q53, Q58, Q62, Q725</td></tr>
<tr><td><strong>B14</strong></td><td>Limitation de vitesse, à partir du panneau ; avec panonceau, elle peut ne viser qu'une catégorie (motos, marchandises)</td><td>Q59, Q120, Q149</td></tr>
<tr><td><strong>B15</strong></td><td>Céder le passage aux usagers venant en sens inverse : s'arrêter pour les laisser passer</td><td>Q44, Q75</td></tr>
<tr><td><strong>B18a, B18b</strong></td><td>Accès interdit aux véhicules transportant des explosifs ou produits inflammables (B18a), des produits polluants (B18b)</td><td>Q50, Q727</td></tr>
<tr><td><strong>B31</strong></td><td>Fin de toutes les interdictions, sauf arrêt et stationnement</td><td>Q78, Q131</td></tr>
<tr><td><strong>B33</strong></td><td>Interdiction aux poids lourds de dépasser</td><td>Q73</td></tr>
<tr><td><strong>B34, B34a</strong></td><td>Fin d'interdiction de dépasser, pour tous (B34) ou pour les poids lourds (B34a)</td><td>Q54, Q80</td></tr>
</tbody>
</table></div>
<h4>Obligation (B), indication (C) et balises (J)</h4>
<div class="table-scroll"><table>
<thead><tr><th>Code</th><th>Signification</th><th>Questions</th></tr></thead>
<tbody>
<tr><td><strong>B21-1</strong></td><td>Obligation de tourner à droite avant le panneau</td><td>Q40</td></tr>
<tr><td><strong>B21b</strong></td><td>Aller tout droit à la prochaine intersection</td><td>Q116</td></tr>
<tr><td><strong>B21c1, B21c2</strong></td><td>Tourner à droite (B21c1) ou à gauche (B21c2) à la prochaine intersection</td><td>Q76, Q157</td></tr>
<tr><td><strong>B25</strong></td><td>Vitesse minimale obligatoire (B43 : fin de vitesse minimale)</td><td>Q39, Q77, Q457</td></tr>
<tr><td><strong>B26</strong></td><td>Chaînes à neige obligatoires</td><td>Q148</td></tr>
<tr><td><strong>B27, B45</strong></td><td>Voie réservée aux autobus (B27) ; fin de cette voie (B45)</td><td>Q55, Q56</td></tr>
<tr><td><strong>B29</strong></td><td>Voie réservée aux véhicules lents</td><td>Q60, Q726</td></tr>
<tr><td><strong>C12</strong></td><td>Circulation à sens unique (l'usager d'en face voit un sens interdit)</td><td>Q118, Q194</td></tr>
<tr><td><strong>C13</strong></td><td>Impasse : chemin sans issue</td><td>Q15</td></tr>
<tr><td><strong>J3</strong></td><td>Balise à anneau rouge : position d'une intersection</td><td>Q129</td></tr>
<tr><td><strong>J4</strong></td><td>Balise de virage très dangereux ou de rétrécissement</td><td>Q41</td></tr>
</tbody>
</table></div>

<QcmBlock title="QCM — Chapitre 14" :questions="questions" />
</section>
</template>
