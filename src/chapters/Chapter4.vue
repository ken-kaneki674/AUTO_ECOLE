<script setup>
import MemoBox from '../components/MemoBox.vue'
import AstuceBox from '../components/AstuceBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import questions from '../data/questions/ch4.json'
</script>

<template>
<section class="chap" id="ch4">
<div class="chap-head">
  <span class="borne">04</span>
  <div><span class="fil">Chapitre 4</span><h2>Arrêt et stationnement</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Distinguer arrêt et stationnement, connaître les stationnements interdits, gênants, dangereux et abusifs, maîtriser les différents modes de rangement et les règles de sortie de véhicule.</p>

<h3>4.1 Deux notions à ne jamais confondre</h3>
<div class="table-scroll"><table>
<thead><tr><th></th><th>L'arrêt</th><th>Le stationnement</th></tr></thead>
<tbody>
<tr><td><strong>Définition</strong></td><td>Immobilisation <em>momentanée</em> du véhicule, le conducteur restant au volant ou à proximité immédiate, pour laisser monter/descendre des personnes ou charger/décharger</td><td>Immobilisation du véhicule en dehors des circonstances de l'arrêt : le conducteur quitte son véhicule ou l'immobilise durablement</td></tr>
<tr><td><strong>Conducteur</strong></td><td>Présent, prêt à repartir</td><td>Peut être absent</td></tr>
<tr><td><strong>Durée</strong></td><td>Brève, liée à l'opération en cours</td><td>Indéterminée</td></tr>
<tr><td><strong>Règle</strong></td><td>Tout stationnement interdit est aussi un arrêt interdit ? <strong>Non</strong> : tout <em>arrêt</em> interdit entraîne l'interdiction de stationner, l'inverse n'est pas vrai</td><td>Là où le stationnement est interdit, l'arrêt peut rester possible</td></tr>
</tbody>
</table></div>
<MemoBox label="À retenir">
Le panneau rond bleu barré d'un <strong>seul trait rouge</strong> = <em>stationnement interdit</em>. Barré de <strong>deux traits croisés</strong> = <em>arrêt et stationnement interdits</em>. Un trait, une interdiction ; deux traits, deux interdictions.
</MemoBox>

<h3>4.2 Où l'arrêt et le stationnement sont interdits</h3>
<ul>
<li>Sur les <strong>passages pour piétons</strong> et, en amont, sur les 5 mètres qui les précèdent (zone de visibilité).</li>
<li>Sur les <strong>trottoirs</strong>, les pistes et bandes cyclables, les voies réservées aux bus.</li>
<li>Sur les <strong>ponts, dans les tunnels, les passages souterrains</strong> et sur les passages à niveau.</li>
<li>Dans les <strong>virages, les sommets de côte</strong> et à proximité des intersections lorsque la visibilité est réduite.</li>
<li>Devant les <strong>entrées carrossables</strong> (portails, garages) d'autrui.</li>
<li>Sur les <strong>zébras</strong>, les emplacements réservés (handicapés, taxis, livraisons, secours), devant les bouches d'incendie.</li>
<li>En <strong>double file</strong>, ou du côté opposé au sens de circulation sur une chaussée à double sens.</li>
<li>Sur la <strong>bande d'arrêt d'urgence</strong> d'une autoroute, sauf urgence réelle.</li>
</ul>

<h3>4.3 Les trois qualifications sanctionnées</h3>
<div class="table-scroll"><table>
<thead><tr><th>Type</th><th>Définition</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td><strong>Gênant</strong></td><td>Entrave la circulation des autres usagers</td><td>Trottoir, piste cyclable, double file, arrêt de bus, place réservée</td></tr>
<tr><td><strong>Dangereux</strong></td><td>Crée un risque d'accident par manque de visibilité</td><td>Virage, sommet de côte, intersection, passage à niveau, tunnel</td></tr>
<tr><td><strong>Abusif</strong></td><td>Véhicule laissé au même endroit au-delà d'une durée fixée (souvent <strong>7 jours</strong> ⚠ à vérifier), ou véhicule épave</td><td>Voiture immobilisée des semaines sur la voie publique</td></tr>
</tbody>
</table></div>
<p>Ces stationnements exposent à une amende, à l'<strong>immobilisation</strong> et à la <strong>mise en fourrière</strong> aux frais du propriétaire.</p>

<h3>4.4 Les modes de rangement</h3>
<figure>
<svg viewBox="0 0 660 200" role="img" aria-label="Modes de stationnement">
 <rect width="660" height="200" fill="#EDEFF2"/>
 <g font-family="Arial Narrow, Arial, sans-serif" text-anchor="middle">
  <rect x="20" y="30" width="180" height="90" fill="#3A3F46"/>
  <g fill="#0B5FA5"><rect x="30" y="46" width="48" height="24" rx="3"/><rect x="88" y="46" width="48" height="24" rx="3"/><rect x="146" y="46" width="48" height="24" rx="3"/></g>
  <text x="110" y="140" font-size="13.5" font-weight="bold" fill="#171A1F">LONGITUDINAL</text>
  <text x="110" y="158" font-size="12" fill="#5C636D">le long du trottoir</text>
  <rect x="240" y="30" width="180" height="90" fill="#3A3F46"/>
  <g fill="#D2202F"><rect x="252" y="42" width="24" height="46" rx="3" transform="rotate(30 264 65)"/><rect x="300" y="42" width="24" height="46" rx="3" transform="rotate(30 312 65)"/><rect x="348" y="42" width="24" height="46" rx="3" transform="rotate(30 360 65)"/></g>
  <text x="330" y="140" font-size="13.5" font-weight="bold" fill="#171A1F">EN ÉPI</text>
  <text x="330" y="158" font-size="12" fill="#5C636D">en oblique, entrée facile</text>
  <rect x="460" y="30" width="180" height="90" fill="#3A3F46"/>
  <g fill="#1B7F5A"><rect x="476" y="42" width="26" height="48" rx="3"/><rect x="522" y="42" width="26" height="48" rx="3"/><rect x="568" y="42" width="26" height="48" rx="3"/></g>
  <text x="550" y="140" font-size="13.5" font-weight="bold" fill="#171A1F">EN BATAILLE</text>
  <text x="550" y="158" font-size="12" fill="#5C636D">perpendiculaire</text>
 </g>
</svg>
<figcaption>Figure 4.1 — Les trois modes de stationnement</figcaption>
</figure>
<ul>
<li><strong>Longitudinal (en créneau)</strong> : parallèle au trottoir, dans le sens de la circulation. C'est la manœuvre du créneau, exigée à l'examen pratique.</li>
<li><strong>En épi</strong> : véhicules en oblique. Entrée facile, sortie délicate (visibilité réduite) : privilégier la <strong>marche arrière à l'entrée</strong> quand c'est possible.</li>
<li><strong>En bataille</strong> : perpendiculaire au trottoir. Se ranger en marche arrière permet de repartir en marche avant, ce qui est nettement plus sûr.</li>
</ul>
<h4>Réglementations particulières</h4>
<ul>
<li><strong>Stationnement alterné semi-mensuel</strong> : du 1<sup>er</sup> au 15 du mois, côté impair ; du 16 à la fin du mois, côté pair. Le changement s'effectue le dernier jour de chaque période, entre 20 h 30 et 21 h.</li>
<li><strong>Zone bleue</strong> : durée limitée, disque de stationnement obligatoire derrière le pare-brise.</li>
<li><strong>Stationnement payant</strong> : horodateur ; le ticket doit être visible.</li>
<li><strong>Hors agglomération, de nuit</strong> : si le véhicule doit rester sur la chaussée, il faut allumer les <strong>feux de position</strong> et, en cas de panne, poser le triangle de présignalisation à <strong>30 m</strong> au moins.</li>
</ul>

<h3>4.5 Quitter et reprendre son véhicule</h3>
<ol>
<li>Serrer le <strong>frein de stationnement</strong>, engager une vitesse (1<sup>re</sup> en montée, marche arrière en descente), braquer les roues vers le trottoir en pente.</li>
<li>Contrôler le rétroviseur et l'angle mort <strong>avant d'ouvrir la portière</strong> : l'ouverture dangereuse est une cause fréquente d'accident mortel de cycliste ou de motocycliste.</li>
<li>Descendre côté trottoir chaque fois que c'est possible ; ne pas laisser d'enfant ni d'animal seul dans un véhicule fermé, surtout au soleil.</li>
<li>Avant de repartir : faire le tour du véhicule si nécessaire, clignotant, contrôle du rétroviseur et de l'angle mort, puis insertion en cédant le passage.</li>
</ol>
<AstuceBox label="Astuce sécurité">
La « <strong>prise hollandaise</strong> » : ouvrir sa portière avec la main la plus éloignée (main droite pour le conducteur). Le buste pivote naturellement et le regard part vers l'arrière — le contrôle de l'angle mort devient automatique.
</AstuceBox>

<QcmBlock title="QCM — Chapitre 4" :questions="questions" />
</section>
</template>
