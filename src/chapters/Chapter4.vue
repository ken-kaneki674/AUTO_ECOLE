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
<p>Une immobilisation, <strong>même de courte durée</strong>, est considérée comme un <strong>stationnement</strong> si elle n'est pas liée à la montée ou à la descente de passagers, ni au chargement ou au déchargement du véhicule.</p>
<MemoBox label="À retenir">
Le panneau rond bleu barré d'un <strong>seul trait rouge</strong> = <em>stationnement interdit</em>. Barré de <strong>deux traits croisés</strong> = <em>arrêt et stationnement interdits</em>. Un trait, une interdiction ; deux traits, deux interdictions.
</MemoBox>

<h3>4.2 Où stationner ?</h3>
<ul>
<li><strong>Hors agglomération</strong> : les véhicules peuvent stationner sur l'<strong>accotement droit</strong> ; ils peuvent aussi stationner du <strong>côté gauche</strong> si l'accotement droit n'est pas praticable. Hors agglomération, on peut donc stationner à droite ou à gauche.</li>
<li><strong>En agglomération</strong> : les véhicules doivent stationner sur le <strong>bord droit</strong> de la chaussée, le long du trottoir. <strong>Dans les rues à sens unique</strong>, on peut stationner à droite ou à gauche.</li>
</ul>

<h3>4.3 Les interdictions signalées</h3>
<p>La signalisation peut interdire l'arrêt ou le stationnement :</p>
<ul>
<li>Le panneau <strong>B6a1 « stationnement interdit »</strong> : le stationnement est interdit <strong>à partir du panneau</strong> et l'interdiction <strong>finit à la prochaine intersection</strong>.</li>
<li>Il en est de même pour le panneau <strong>« arrêt et stationnement interdits »</strong>.</li>
<li>Le <strong>marquage jaune discontinu</strong> le long du trottoir signifie <strong>stationnement interdit</strong> à tous les véhicules le long de ce trottoir.</li>
<li>Le <strong>marquage jaune continu</strong> le long du trottoir interdit <strong>l'arrêt et le stationnement</strong> le long de ce trottoir.</li>
</ul>

<h3>4.4 Où l'arrêt et le stationnement sont interdits</h3>
<ul>
<li>Sur les <strong>passages pour piétons</strong> et, en amont, sur les 5 mètres qui les précèdent (zone de visibilité).</li>
<li>Sur les <strong>trottoirs</strong>, les pistes et bandes cyclables, les voies réservées aux bus.</li>
<li>Sur les <strong>ponts, dans les tunnels, les passages souterrains</strong> et sur les passages à niveau.</li>
<li>Dans les <strong>virages, les sommets de côte</strong> et à proximité des intersections lorsque la visibilité est réduite.</li>
<li>Sur les <strong>zébras</strong>, les emplacements réservés (handicapés, taxis, livraisons, secours), devant les bouches d'incendie.</li>
<li>En <strong>double file</strong>, ou, en agglomération, du côté gauche d'une chaussée à double sens.</li>
<li>Sur la <strong>bande d'arrêt d'urgence</strong> d'une autoroute, sauf urgence réelle.</li>
</ul>

<h3>4.5 Sans signalisation : dangereux, gênant, abusif</h3>
<p>En l'absence de signalisation, il existe <strong>trois (03) catégories</strong> d'arrêt et de stationnement interdits : le stationnement <strong>dangereux</strong>, <strong>gênant</strong> et <strong>abusif</strong>.</p>
<h4>a) Arrêt et stationnement dangereux</h4>
<p>Ils sont dangereux chaque fois que le véhicule garé <strong>peut surprendre les autres usagers</strong> :</p>
<ul>
<li>à proximité des <strong>intersections</strong> ;</li>
<li>à proximité des <strong>sommets de côte</strong> (et dans les virages) ;</li>
<li>à proximité des <strong>passages à niveau</strong> ;</li>
<li>sur la chaussée, <strong>la nuit</strong>, quand le véhicule <strong>n'est pas signalé</strong>.</li>
</ul>
<h4>b) Arrêt et stationnement gênants</h4>
<p>Ils sont gênants quand le véhicule <strong>gêne les autres usagers</strong> :</p>
<ul>
<li>à la hauteur d'une <strong>ligne blanche continue</strong>, quand le véhicule oblige les autres à chevaucher la ligne ;</li>
<li>à côté des <strong>panneaux ou des signaux lumineux</strong>, si le véhicule risque de les cacher aux autres ;</li>
<li><strong>derrière les véhicules en stationnement</strong>, quand le véhicule peut les empêcher de sortir ;</li>
<li>aux <strong>emplacements réservés</strong> à certaines catégories de véhicules (bus, ambulances, etc.) ;</li>
<li>sur les <strong>trottoirs</strong>, les <strong>passages pour piétons</strong>, les <strong>pistes ou bandes cyclables</strong> ;</li>
<li>dans les <strong>passages souterrains</strong>.</li>
</ul>
<p><strong>Le stationnement est gênant mais l'arrêt toléré :</strong></p>
<ul>
<li>devant les <strong>garages</strong> ou les <strong>portes cochères</strong> ;</li>
<li>au-delà d'un panneau <strong>B6a1</strong> « stationnement interdit » ;</li>
<li>le long de la <strong>ligne jaune discontinue</strong>.</li>
</ul>
<h4>c) Stationnement abusif</h4>
<p>On appelle stationnement abusif l'immobilisation d'un véhicule sur un lieu public pendant <strong>plus de sept (07) jours consécutifs</strong>. <strong>NB</strong> : cette durée peut être réduite par la réglementation locale.</p>
<MemoBox label="Contrôle du stationnement">
Stationnement <strong>gratuit à durée limitée</strong> : contrôlé par le <strong>disque de stationnement</strong>. Stationnement <strong>payant</strong> : contrôlé par l'<strong>horodateur</strong> ou le <strong>parcmètre</strong>.
</MemoBox>
<p>Ces stationnements exposent à une amende, à l'<strong>immobilisation</strong> et à la <strong>mise en fourrière</strong> aux frais du propriétaire.</p>

<h3>4.6 Les trois façons de stationner</h3>
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
<li><strong>En bataille</strong> : le véhicule est rangé <strong>perpendiculairement</strong> au trottoir.</li>
<li><strong>En épi</strong> : le véhicule est rangé <strong>de biais</strong> par rapport au trottoir (comme l'épi de maïs). Entrée facile, sortie délicate (visibilité réduite).</li>
<li><strong>En créneau</strong> : le véhicule est rangé <strong>parallèlement</strong> au trottoir, dans le sens de la circulation. C'est la manœuvre exigée à l'examen pratique.</li>
</ul>
<p><strong>NB</strong> : chaque fois que l'on peut, il est conseillé de ranger le véhicule <strong>en marche arrière</strong> : cela donne une meilleure visibilité à la sortie.</p>
<h4>Réglementations particulières</h4>
<ul>
<li><strong>Stationnement alterné semi-mensuel</strong> : du 1<sup>er</sup> au 15 du mois, côté impair ; du 16 à la fin du mois, côté pair. Le changement s'effectue le dernier jour de chaque période, entre 20 h 30 et 21 h.</li>
<li><strong>Zone bleue</strong> : durée limitée, disque de stationnement obligatoire derrière le pare-brise.</li>
<li><strong>Stationnement payant</strong> : horodateur ou parcmètre ; le ticket doit être visible.</li>
<li><strong>Hors agglomération, de nuit</strong> : si le véhicule doit rester sur la chaussée, il faut allumer les <strong>feux de position</strong> et, en cas de panne, poser le triangle de présignalisation à <strong>30 m</strong> au moins.</li>
</ul>

<h3>4.7 Quitter le stationnement, sortir d'un garage</h3>
<p><strong>a) En quittant le stationnement</strong> en marche normale pour intégrer la circulation, je dois :</p>
<ul>
<li>mettre le <strong>clignotant gauche</strong> ;</li>
<li>vérifier, à l'aide du <strong>rétroviseur gauche</strong>, que la circulation est libre à l'arrière ;</li>
<li>m'engager <strong>doucement</strong>, sans gêner la circulation.</li>
</ul>
<p><strong>b) En sortant d'un garage</strong> pour intégrer la circulation, je dois :</p>
<ul>
<li>jeter tout d'abord un coup d'œil <strong>à gauche puis à droite</strong> ;</li>
<li><strong>céder le passage</strong> aux usagers circulant à droite et à gauche ;</li>
<li>m'engager <strong>progressivement</strong>.</li>
</ul>

<h3>4.8 Quitter et reprendre son véhicule</h3>
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
