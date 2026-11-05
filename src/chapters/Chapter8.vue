<script setup>
import MemoBox from '../components/MemoBox.vue'
import AstuceBox from '../components/AstuceBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import questions from '../data/questions/ch8.json'
</script>

<template>
<section class="chap" id="ch8">
<div class="chap-head">
  <span class="borne">08</span>
  <div><span class="fil">Chapitre 8</span><h2>Mécanique élémentaire d'un moteur à essence</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Nommer les organes du moteur, expliquer le cycle à quatre temps, décrire les cinq circuits vitaux, entretenir son véhicule et diagnostiquer les pannes les plus courantes.</p>

<h3>8.1 Le principe : transformer une explosion en mouvement</h3>
<p>Le moteur à essence est un <strong>moteur à combustion interne</strong> : un mélange d'air et d'essence est comprimé dans un cylindre puis enflammé par une <strong>étincelle de bougie</strong>. L'explosion pousse le piston ; la bielle transforme ce mouvement de va-et-vient en <strong>mouvement rotatif</strong> au niveau du vilebrequin, qui entraîne ensuite la transmission et les roues.</p>
<p>Pour fonctionner, le moteur a besoin d'un <strong>mélange gazeux (essence + air)</strong> et d'<strong>électricité</strong> : il tire donc sa force de <strong>trois (03) éléments : essence, air, électricité</strong>.</p>
<h4>Les organes principaux</h4>
<div class="table-scroll"><table>
<thead><tr><th>Organe</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td>Bloc-cylindres</td><td>Corps du moteur, contient les cylindres dans lesquels coulissent les pistons</td></tr>
<tr><td>Culasse</td><td>Ferme le haut des cylindres ; reçoit les soupapes et les bougies</td></tr>
<tr><td>Piston et segments</td><td>Reçoit la poussée de l'explosion ; les segments assurent l'étanchéité</td></tr>
<tr><td>Bielle</td><td>Relie le piston au vilebrequin</td></tr>
<tr><td>Vilebrequin</td><td>Transforme le mouvement alternatif en rotation</td></tr>
<tr><td>Soupapes (admission / échappement)</td><td>Ouvrent et ferment les passages de gaz</td></tr>
<tr><td>Arbre à cames et courroie/chaîne de distribution</td><td>Commande l'ouverture des soupapes en synchronisation avec le vilebrequin</td></tr>
<tr><td>Volant moteur</td><td>Régularise la rotation grâce à son inertie</td></tr>
<tr><td>Bougie d'allumage</td><td>Produit l'étincelle qui enflamme le mélange</td></tr>
</tbody>
</table></div>

<figure>
<svg class="fig-large" style="max-width:480px" viewBox="0 0 480 400" role="img" aria-label="Coupe d'un moteur : culasse, soupapes, bougie, cylindre, piston et segments, bielle, vilebrequin, volant moteur, carter d'huile">
 <rect width="480" height="400" fill="#EDEFF2"/>
 <rect x="140" y="34" width="200" height="54" rx="5" fill="#8A9099"/>
 <rect x="140" y="88" width="200" height="190" fill="#A8AEB6"/><rect x="176" y="88" width="128" height="190" fill="#DCEBF7"/>
 <rect x="176" y="150" width="128" height="62" rx="3" fill="#5C636D"/><path d="M176 162h128M176 172h128" stroke="#171A1F" stroke-width="3"/>
 <path d="M240 190 216 306" stroke="#3A3F46" stroke-width="20" stroke-linecap="round"/><circle cx="240" cy="186" r="8" fill="#171A1F"/>
 <circle cx="240" cy="310" r="38" fill="none" stroke="#3A3F46" stroke-width="14"/><circle cx="240" cy="310" r="8" fill="#171A1F"/><circle cx="214" cy="306" r="8" fill="#171A1F"/>
 <path d="M140 278h200v56q0 40-40 40h-120q-40 0-40-40z" fill="none" stroke="#5C636D" stroke-width="5"/><path d="M144 348h192v12q-4 12-36 12H180q-32 0-36-12z" fill="#C79A3A"/>
 <circle cx="378" cy="310" r="38" fill="#5C636D"/><circle cx="378" cy="310" r="12" fill="#C9CDD4"/><path d="M278 310h62" stroke="#3A3F46" stroke-width="10"/>
 <g fill="#171A1F"><path d="M197 24h6v62h-6zM277 24h6v62h-6z"/><path d="M184 84h32v7h-32zM264 84h32v7h-32z"/></g>
 <path d="M240 34v62" stroke="#D2202F" stroke-width="7"/><path d="M232 100l8 10 8-10" fill="none" stroke="#F5B301" stroke-width="3"/>
 <g font-size="16" fill="#171A1F" font-weight="bold"><text x="350" y="56">Culasse</text><text x="350" y="118">Bloc-cylindres</text><text x="350" y="180">Piston, segments</text><text x="350" y="246">Bielle</text><text x="350" y="375">Volant moteur</text><text x="10" y="26">Soupapes</text><text x="250" y="18">Bougie</text><text x="10" y="300">Vilebrequin</text><text x="10" y="376">Carter (huile)</text></g>
 <path d="M72 30 194 46M250 22 243 34M348 174H304M348 240 232 240M96 296l106 12M100 372h44M402 362v-16M348 112H320" stroke="#171A1F" stroke-width="1.5"/>
</svg>
<figcaption>Figure 8.1 — Les organes principaux en coupe</figcaption>
</figure>

<h3>8.2 Le cycle à quatre temps</h3>
<p>Le moteur tourne parce qu'un mélange gazeux (essence + air) <strong>explose dans un cylindre</strong> en poussant un piston. Les <strong>soupapes</strong> sont des sortes de bouchons qui s'ouvrent et se ferment ; il y en a deux par cylindre : la <strong>soupape d'admission</strong> et la <strong>soupape d'échappement</strong>.</p>
<ol>
<li><strong>L'admission</strong> : le piston <strong>descend</strong> en aspirant le mélange gazeux ; la soupape d'admission est ouverte pour laisser passer le mélange dans le cylindre.</li>
<li><strong>La compression</strong> : le piston <strong>monte</strong> en comprimant le mélange ; les deux (02) soupapes, d'admission et d'échappement, sont fermées.</li>
<li><strong>L'explosion</strong>, ou <strong>temps moteur</strong>, ou <strong>temps utile</strong> : le mélange, enflammé par l'étincelle de la bougie, explose et chasse violemment le piston vers le bas ; les deux soupapes sont fermées.</li>
<li><strong>L'échappement</strong> : le piston <strong>remonte</strong> en chassant les gaz brûlés vers l'extérieur ; la soupape d'échappement est ouverte (elle était fermée pendant les trois autres temps).</li>
</ol>
<figure>
<svg viewBox="0 0 700 260" role="img" aria-label="Cycle à quatre temps">
 <g font-family="Arial Narrow, Arial, sans-serif">
  <!-- 1 admission -->
  <g transform="translate(20,30)">
   <rect x="0" y="0" width="120" height="150" rx="6" fill="#DCE0E5" stroke="#5C636D" stroke-width="2"/>
   <rect x="16" y="95" width="88" height="40" fill="#5C636D"/>
   <rect x="16" y="22" width="88" height="70" fill="#BBD8F1"/>
   <path d="M30 4v22M90 4v22" stroke="#171A1F" stroke-width="5"/>
   <path d="M22 26h16M82 26h16" stroke="#1B7F5A" stroke-width="6"/>
   <path d="M60 40v34" stroke="#0B5FA5" stroke-width="3"/><path d="M60 84l-7-14h14z" fill="#0B5FA5"/>
   <text x="60" y="170" font-size="13.5" text-anchor="middle" font-weight="bold">1. ADMISSION</text>
   <text x="60" y="188" font-size="11.5" text-anchor="middle" fill="#5C636D">soupape d'admission</text>
   <text x="60" y="202" font-size="11.5" text-anchor="middle" fill="#5C636D">ouverte, piston descend</text>
  </g>
  <!-- 2 compression -->
  <g transform="translate(190,30)">
   <rect x="0" y="0" width="120" height="150" rx="6" fill="#DCE0E5" stroke="#5C636D" stroke-width="2"/>
   <rect x="16" y="40" width="88" height="40" fill="#5C636D"/>
   <rect x="16" y="22" width="88" height="16" fill="#8FA8C8"/>
   <path d="M30 4v22M90 4v22" stroke="#171A1F" stroke-width="5"/>
   <path d="M60 96V60" stroke="#0B5FA5" stroke-width="3"/><path d="M60 50l-7 14h14z" fill="#0B5FA5"/>
   <text x="60" y="170" font-size="13.5" text-anchor="middle" font-weight="bold">2. COMPRESSION</text>
   <text x="60" y="188" font-size="11.5" text-anchor="middle" fill="#5C636D">soupapes fermées,</text>
   <text x="60" y="202" font-size="11.5" text-anchor="middle" fill="#5C636D">piston remonte</text>
  </g>
  <!-- 3 explosion -->
  <g transform="translate(360,30)">
   <rect x="0" y="0" width="120" height="150" rx="6" fill="#DCE0E5" stroke="#5C636D" stroke-width="2"/>
   <rect x="16" y="90" width="88" height="40" fill="#5C636D"/>
   <rect x="16" y="22" width="88" height="66" fill="#F5B301"/>
   <path d="M60 4v18" stroke="#D2202F" stroke-width="5"/>
   <path d="M50 30l10 14 10-14-6 20h-8z" fill="#D2202F"/>
   <path d="M60 60v22" stroke="#D2202F" stroke-width="3"/><path d="M60 92l-7-14h14z" fill="#D2202F"/>
   <text x="60" y="170" font-size="13.5" text-anchor="middle" font-weight="bold">3. EXPLOSION</text>
   <text x="60" y="188" font-size="11.5" text-anchor="middle" fill="#5C636D">étincelle, le piston est</text>
   <text x="60" y="202" font-size="11.5" text-anchor="middle" fill="#5C636D">chassé vers le bas (moteur)</text>
  </g>
  <!-- 4 echappement -->
  <g transform="translate(530,30)">
   <rect x="0" y="0" width="120" height="150" rx="6" fill="#DCE0E5" stroke="#5C636D" stroke-width="2"/>
   <rect x="16" y="40" width="88" height="40" fill="#5C636D"/>
   <rect x="16" y="22" width="88" height="16" fill="#9AA0A8"/>
   <path d="M30 4v22M90 4v22" stroke="#171A1F" stroke-width="5"/>
   <path d="M82 26h16" stroke="#D2202F" stroke-width="6"/>
   <path d="M60 96V60" stroke="#0B5FA5" stroke-width="3"/><path d="M60 50l-7 14h14z" fill="#0B5FA5"/>
   <text x="60" y="170" font-size="13.5" text-anchor="middle" font-weight="bold">4. ÉCHAPPEMENT</text>
   <text x="60" y="188" font-size="11.5" text-anchor="middle" fill="#5C636D">soupape d'échappement</text>
   <text x="60" y="202" font-size="11.5" text-anchor="middle" fill="#5C636D">ouverte, gaz évacués</text>
  </g>
  <text x="350" y="18" font-size="14" text-anchor="middle" font-weight="bold" letter-spacing="1.5">LE CYCLE À QUATRE TEMPS</text>
  <text x="350" y="248" font-size="12" text-anchor="middle" fill="#5C636D">Deux tours de vilebrequin pour un cycle complet — un seul temps sur quatre produit de l'énergie.</text>
 </g>
</svg>
<figcaption>Figure 8.2 — Admission, compression, explosion, échappement</figcaption>
</figure>
<AstuceBox label="Moyen mnémotechnique">
« <strong>A</strong>dmission, <strong>C</strong>ompression, <strong>E</strong>xplosion, <strong>É</strong>chappement » → <strong>A C E É</strong> : « <em>l'As Compte Et Économise</em> ». Le temps moteur, celui qui fournit la force, est le <strong>troisième</strong>.
</AstuceBox>

<h3>8.3 Les cinq circuits vitaux du moteur</h3>
<div class="table-scroll"><table>
<thead><tr><th>Circuit</th><th>Organes</th><th>Rôle</th><th>Panne typique</th></tr></thead>
<tbody>
<tr><td><strong>Alimentation</strong></td><td>Réservoir, pompe, filtre à carburant, carburateur ou injecteurs, filtre à air</td><td>Doser le mélange air/essence</td><td>Panne sèche, filtre encrassé, moteur qui broute</td></tr>
<tr><td><strong>Allumage</strong></td><td>Batterie, bobine, allumeur ou module, bougies, câbles</td><td>Produire l'étincelle au bon moment</td><td>Bougies encrassées, moteur qui ne démarre pas</td></tr>
<tr><td><strong>Graissage</strong></td><td>Carter d'huile, pompe à huile, filtre, canalisations</td><td>Réduire les frottements, refroidir, nettoyer</td><td>Témoin de pression d'huile → <strong>arrêt immédiat</strong></td></tr>
<tr><td><strong>Refroidissement</strong></td><td>Radiateur, pompe à eau, thermostat, ventilateur, durites, vase d'expansion</td><td>Maintenir le moteur autour de 90 °C</td><td>Surchauffe, durite percée, courroie cassée</td></tr>
<tr><td><strong>Démarrage / charge</strong></td><td>Batterie, démarreur, alternateur, régulateur</td><td>Lancer le moteur et recharger la batterie</td><td>Batterie déchargée, alternateur HS (témoin rouge)</td></tr>
</tbody>
</table></div>

<h4>Le circuit d'alimentation en carburant</h4>
<p><strong>Réservoir → pompe à essence → carburateur</strong> (ou, sur un moteur à injection : <strong>réservoir → pompe à essence → pompe à injection → injecteurs</strong>).</p>
<p>L'essence stockée dans le réservoir est aspirée par la <strong>pompe à essence</strong>, traverse un <strong>filtre à essence</strong> et va dans le <strong>carburateur</strong>. L'air, épuré par le <strong>filtre à air</strong>, va directement dans le carburateur pour se mélanger à l'essence. Le mélange gazeux obtenu est distribué dans chaque cylindre.</p>
<figure>
<svg class="fig-large" viewBox="0 0 620 230" role="img" aria-label="Circuit d'alimentation : réservoir, pompe à essence, filtre à essence, carburateur où arrive aussi l'air du filtre à air, puis les cylindres">
 <rect width="620" height="230" fill="#EDEFF2"/>
 <g font-size="15" font-weight="bold" text-anchor="middle" fill="#fff">
  <rect x="12" y="110" width="106" height="60" rx="5" fill="#E87722"/><text x="65" y="145">Réservoir</text>
  <rect x="140" y="110" width="96" height="60" rx="5" fill="#0B5FA5"/><text x="188" y="136">Pompe</text><text x="188" y="154">à essence</text>
  <rect x="258" y="110" width="84" height="60" rx="5" fill="#5C636D"/><text x="300" y="136">Filtre</text><text x="300" y="154">à essence</text>
  <rect x="364" y="110" width="110" height="60" rx="5" fill="#171A1F"/><text x="419" y="145">Carburateur</text>
  <rect x="498" y="110" width="110" height="60" rx="5" fill="#D2202F"/><text x="553" y="136">Cylindres</text><text x="553" y="154">(mélange)</text>
  <rect x="364" y="20" width="110" height="50" rx="5" fill="#1B7F5A"/><text x="419" y="51">Filtre à air</text>
 </g>
 <g stroke="#171A1F" stroke-width="3"><path d="M118 140h14" marker-end="url(#m-k)"/><path d="M236 140h14" marker-end="url(#m-k)"/><path d="M342 140h14" marker-end="url(#m-k)"/><path d="M474 140h16" marker-end="url(#m-k)"/></g>
 <path d="M419 70v32" stroke="#1B7F5A" stroke-width="3" marker-end="url(#m-g)"/><text x="300" y="50" font-size="16" font-weight="bold" fill="#1B7F5A">air</text><path d="M326 45h30" stroke="#1B7F5A" stroke-width="3" marker-end="url(#m-g)"/>
 <text x="65" y="100" font-size="16" font-weight="bold" fill="#E87722" text-anchor="middle">essence</text>
 <text x="310" y="208" font-size="15" fill="#171A1F" text-anchor="middle">Moteur à injection : réservoir → pompe à essence → pompe à injection → injecteurs</text>
</svg>
<figcaption>Figure 8.3 — Le trajet de l'essence et de l'air</figcaption>
</figure>
<h4>Le circuit électrique</h4>
<p><strong>Alternateur → régulateur → batterie</strong>, puis <strong>batterie → bobine → allumeur → bougies</strong>.</p>
<p>L'électricité fournie par l'alternateur passe par le régulateur et va s'emmagasiner dans la batterie. Quand on tourne la clé de contact dans une <strong>première position</strong>, le courant passe de la batterie à la bobine pour alimenter l'allumeur, qui le distribue à chaque bougie. En tournant la clé <strong>à fond</strong>, on met en marche un petit moteur électrique, le <strong>démarreur</strong>, qui lance le moteur de la voiture.</p>
<figure>
<svg class="fig-large" viewBox="0 0 620 230" role="img" aria-label="Circuit électrique : l'alternateur charge la batterie par le régulateur ; la batterie alimente la bobine, l'allumeur et les bougies, et le démarreur quand on tourne la clé à fond">
 <rect width="620" height="230" fill="#EDEFF2"/>
 <g font-size="15" font-weight="bold" text-anchor="middle" fill="#fff">
  <rect x="12" y="24" width="110" height="52" rx="5" fill="#5C636D"/><text x="67" y="55">Alternateur</text>
  <rect x="150" y="24" width="110" height="52" rx="5" fill="#5C636D"/><text x="205" y="55">Régulateur</text>
  <rect x="288" y="24" width="96" height="52" rx="5" fill="#D2202F"/><text x="336" y="55">Batterie</text>
  <rect x="288" y="128" width="96" height="52" rx="5" fill="#0B5FA5"/><text x="336" y="159">Bobine</text>
  <rect x="412" y="128" width="86" height="52" rx="5" fill="#0B5FA5"/><text x="455" y="159">Allumeur</text>
  <rect x="526" y="128" width="82" height="52" rx="5" fill="#F5B301"/><text x="567" y="159" fill="#171A1F">Bougies</text>
  <rect x="440" y="24" width="110" height="52" rx="5" fill="#171A1F"/><text x="495" y="55">Démarreur</text>
 </g>
 <g stroke="#171A1F" stroke-width="3"><path d="M122 50h20" marker-end="url(#m-k)"/><path d="M260 50h20" marker-end="url(#m-k)"/><path d="M336 76v44" marker-end="url(#m-k)"/><path d="M384 154h20" marker-end="url(#m-k)"/><path d="M498 154h20" marker-end="url(#m-k)"/><path d="M384 50h48" marker-end="url(#m-k)"/></g>
 <g font-size="14" fill="#171A1F"><text x="50" y="108" font-weight="bold">La charge</text><text x="50" y="128">la batterie se remplit</text><text x="150" y="178" font-weight="bold">L'allumage</text><text x="150" y="198">clé : 1re position</text><text x="400" y="102" font-weight="bold">clé à fond</text><text x="526" y="208">l'étincelle</text></g>
</svg>
<figcaption>Figure 8.4 — Charger, allumer, démarrer</figcaption>
</figure>
<h4>Le refroidissement</h4>
<p>Dans les cylindres, pendant l'explosion, la température peut atteindre <strong>2 000 °C</strong> : le moteur s'échauffe beaucoup. Pour abaisser cet échauffement, on fait appel à l'<strong>air</strong> et à l'<strong>eau</strong>.</p>
<ul>
<li><strong>Air</strong> : un <strong>ventilateur</strong> entraîné par une courroie, placé derrière le radiateur, aspire l'air à travers le radiateur et l'envoie vers le moteur.</li>
<li><strong>Eau</strong> : le <strong>radiateur</strong> est la réserve d'eau ; c'est à son niveau que l'eau chaude se refroidit. Des <strong>chemises d'eau</strong> enveloppent les cylindres et la culasse ; elles sont reliées au radiateur par des tubes en caoutchouc, les <strong>durites</strong>. La <strong>pompe à eau</strong> accélère la circulation : l'eau moins chaude quitte le radiateur par une durite, prend la chaleur autour des cylindres et revient très chaude par l'autre durite.</li>
</ul>
<p><strong>NB</strong> : si une durite éclate, l'eau coule, le circuit de refroidissement est coupé et le moteur s'échauffe. L'échauffement du moteur fait <strong>brûler le joint de culasse</strong> et fait <strong>bomber la culasse</strong>.</p>
<figure>
<svg class="fig-large" viewBox="0 0 600 240" role="img" aria-label="Circuit de refroidissement : le ventilateur aspire l'air à travers le radiateur ; la pompe à eau envoie l'eau autour des cylindres, et l'eau chaude revient au radiateur par la durite">
 <rect width="600" height="240" fill="#EDEFF2"/>
 <rect x="30" y="40" width="96" height="160" rx="5" fill="#8A9099"/><path d="M42 54h72M42 70h72M42 86h72M42 102h72M42 118h72M42 134h72M42 150h72M42 166h72M42 182h72" stroke="#EDEFF2" stroke-width="3"/>
 <path d="M160 88l22 32-22 32zM182 120l22-32v64z" fill="#5C636D"/><circle cx="182" cy="120" r="6" fill="#171A1F"/>
 <rect x="330" y="50" width="176" height="140" rx="8" fill="#BBD8F1"/><rect x="356" y="72" width="124" height="96" rx="5" fill="#8A9099"/><text x="418" y="125" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">Cylindres</text>
 <path d="M126 66h204" fill="none" stroke="#D2202F" stroke-width="10" transform="translate(0 4)"/><path d="M180 70h-40" stroke="#D2202F" stroke-width="3" marker-end="url(#m-r)"/>
 <path d="M126 176h204" fill="none" stroke="#0B5FA5" stroke-width="10"/>
 <circle cx="262" cy="176" r="20" fill="#0B5FA5"/><path d="M254 176h14" stroke="#fff" stroke-width="3" marker-end="url(#m-w)"/>
 
 <g font-size="15" font-weight="bold" fill="#171A1F"><text x="78" y="28" text-anchor="middle">Radiateur</text><text x="182" y="166" text-anchor="middle">Ventilateur</text><text x="262" y="216" text-anchor="middle">Pompe à eau</text><text x="418" y="36" text-anchor="middle">Chemises d'eau</text><text x="240" y="56" fill="#D2202F" text-anchor="middle">durite : eau très chaude</text><text x="430" y="216" fill="#0B5FA5" text-anchor="middle">durite : eau refroidie</text></g>
 <path d="M372 176v18" stroke="#0B5FA5" stroke-width="1.5"/>
</svg>
<figcaption>Figure 8.5 — L'eau emporte la chaleur, l'air la dissipe</figcaption>
</figure>
<h4>Le graissage</h4>
<p>Le graissage a pour but d'<strong>éviter le grippage</strong> des pièces qui frottent l'une contre l'autre. Il se fait soit par <strong>barbotage</strong>, soit <strong>sous pression</strong> : une <strong>pompe à huile</strong> puise l'huile dans le <strong>carter</strong> et l'envoie dans les conduits pour lubrifier les pièces.</p>
<ul>
<li><strong>Chaque matin</strong>, il faut contrôler le niveau de l'huile moteur à l'aide de la <strong>jauge</strong>.</li>
<li>L'huile doit être changée de temps en temps : c'est la <strong>vidange</strong>, qui se fait en tenant compte du <strong>kilométrage parcouru</strong>.</li>
<li><strong>NB</strong> : le manque d'huile moteur entraîne la <strong>bielle coulée</strong> et le <strong>blocage total du moteur</strong>.</li>
</ul>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 280 170" aria-hidden="true"><rect width="280" height="170" fill="#EDEFF2"/><path d="M60 110h160v30q0 20-20 20H80q-20 0-20-20z" fill="#C79A3A" stroke="#5C636D" stroke-width="4"/><rect x="60" y="20" width="160" height="90" fill="#A8AEB6"/><circle cx="120" cy="136" r="15" fill="#0B5FA5"/><path d="M120 120V56h60" fill="none" stroke="#C79A3A" stroke-width="7" marker-end="url(#m-a)"/><text x="176" y="44" font-size="14" font-weight="bold" fill="#171A1F" text-anchor="middle">pièces lubrifiées</text><text x="10" y="156" font-size="13" font-weight="bold" fill="#171A1F">carter</text><text x="228" y="140" font-size="13" font-weight="bold" fill="#171A1F">pompe</text><path d="M226 136h-92" stroke="#171A1F" stroke-width="1.5"/></svg><b>La pompe puise l'huile</b><span>Elle l'envoie du carter vers les pièces qui frottent</span></div>
 <div class="scene"><svg viewBox="0 0 280 170" aria-hidden="true"><rect width="280" height="170" fill="#EDEFF2"/><rect x="128" y="8" width="24" height="16" rx="4" fill="#F5B301"/><rect x="134" y="24" width="12" height="136" rx="2" fill="#C9CDD4" stroke="#5C636D"/><rect x="134" y="94" width="12" height="66" fill="#C79A3A"/><path d="M122 80h36M122 116h36" stroke="#171A1F" stroke-width="3"/><text x="166" y="86" font-size="16" font-weight="bold" fill="#1B7F5A">MAX</text><text x="166" y="122" font-size="16" font-weight="bold" fill="#D2202F">MIN</text><text x="62" y="102" font-size="14" font-weight="bold" fill="#1B7F5A" text-anchor="middle">niveau</text><text x="62" y="120" font-size="14" font-weight="bold" fill="#1B7F5A" text-anchor="middle">correct</text></svg><b>La jauge d'huile</b><span>Je contrôle le niveau chaque matin</span></div>
</div>
<figcaption>Figure 8.6 — Le graissage et son contrôle</figcaption>
</figure>
<MemoBox label="Les trois pompes">
Pour que les circuits de refroidissement (eau), de graissage (huile moteur) et de carburant (essence) fonctionnent normalement, il faut <strong>trois (03) pompes</strong> : la <strong>pompe à eau</strong>, la <strong>pompe à huile</strong> et la <strong>pompe à essence</strong>.
</MemoBox>
<h4>Le rôle de quelques organes</h4>
<div class="table-scroll"><table>
<thead><tr><th>Organe</th><th>Rôle</th></tr></thead>
<tbody>
<tr><td><strong>Carburateur</strong></td><td>Produit le mélange gazeux (essence + air) et le distribue dans chaque cylindre</td></tr>
<tr><td><strong>Pompe à essence</strong></td><td>Située entre le réservoir et le carburateur, elle aspire l'essence pour l'envoyer au carburateur</td></tr>
<tr><td><strong>Alternateur</strong></td><td>Entraîné par une courroie quand le moteur tourne, il fournit du courant et <strong>charge la batterie</strong>. La rupture de sa courroie coupe le circuit de charge</td></tr>
<tr><td><strong>Batterie</strong></td><td>Emmagasine (accumule) l'électricité fournie par l'alternateur et fournit l'énergie nécessaire au <strong>démarrage</strong></td></tr>
<tr><td><strong>Bobine</strong></td><td>Transformateur : elle change le courant à <strong>faible tension</strong> (primaire) en courant à <strong>haute tension</strong> (secondaire)</td></tr>
<tr><td><strong>Allumeur</strong></td><td>Distribue le courant aux bougies ; il est muni d'un rupteur appelé <strong>vis platinées</strong></td></tr>
<tr><td><strong>Bougie</strong></td><td>Placée au bout de la chambre de combustion, elle produit l'étincelle qui enflamme les gaz comprimés : c'est l'explosion</td></tr>
</tbody>
</table></div>

<h3>8.4 La transmission</h3>
<p>La chaîne va du moteur aux roues : <strong>embrayage</strong> (accouple ou désaccouple le moteur) → <strong>boîte de vitesses</strong> (adapte couple et vitesse) → <strong>arbre de transmission</strong> → <strong>différentiel</strong> (permet aux roues de tourner à des vitesses différentes en virage) → <strong>roues</strong>.</p>
<figure>
<svg class="fig-large" viewBox="0 0 620 230" role="img" aria-label="Chaîne de transmission vue du dessus : moteur, embrayage, boîte de vitesses, arbre de transmission, différentiel, roues">
 <rect width="620" height="230" fill="#EDEFF2"/>
 <rect x="48" y="30" width="16" height="46" rx="4" fill="#171A1F"/><rect x="48" y="154" width="16" height="46" rx="4" fill="#171A1F"/><path d="M56 76v78" stroke="#8A9099" stroke-width="5"/>
 <rect x="552" y="30" width="16" height="46" rx="4" fill="#171A1F"/><rect x="552" y="154" width="16" height="46" rx="4" fill="#171A1F"/><path d="M560 76v78" stroke="#171A1F" stroke-width="7"/>
 <g font-size="14" font-weight="bold" text-anchor="middle" fill="#fff">
  <rect x="82" y="84" width="96" height="62" rx="5" fill="#D2202F"/><text x="130" y="120">Moteur</text>
  <rect x="184" y="92" width="26" height="46" fill="#F5B301"/>
  <rect x="216" y="88" width="88" height="54" rx="5" fill="#0B5FA5"/><text x="260" y="112">Boîte de</text><text x="260" y="130">vitesses</text>
  <rect x="304" y="108" width="214" height="14" fill="#5C636D"/>
  <circle cx="532" cy="115" r="26" fill="#1B7F5A"/>
 </g>
 <path d="M340 115h130" stroke="#fff" stroke-width="3" marker-end="url(#m-w)"/>
 <g font-size="15" font-weight="bold" fill="#171A1F" text-anchor="middle"><text x="197" y="72">Embrayage</text><text x="410" y="98">Arbre de transmission</text><text x="510" y="166">Différentiel</text><text x="56" y="20">Roues</text><text x="560" y="20">Roues</text></g>
 <path d="M197 76v16" stroke="#171A1F" stroke-width="1.5"/><path d="M522 152l4-10" stroke="#171A1F" stroke-width="1.5"/>
 <text x="310" y="200" font-size="15" fill="#171A1F" text-anchor="middle">L'embrayage accouple ou sépare le moteur et la boîte.</text><text x="310" y="220" font-size="15" fill="#171A1F" text-anchor="middle">Le différentiel laisse les roues tourner différemment en virage.</text>
</svg>
<figcaption>Figure 8.7 — Du moteur jusqu'aux roues</figcaption>
</figure>
<ul>
<li><strong>1<sup>re</sup> vitesse</strong> : force maximale, vitesse minimale — pour démarrer.</li>
<li><strong>Vitesses supérieures</strong> : moins de force, plus de vitesse — pour rouler économiquement.</li>
<li>Un embrayage qui « patine » (le régime monte sans que la voiture accélère) doit être remplacé.</li>
</ul>

<h3>8.5 Entretien courant et pannes fréquentes</h3>
<div class="table-scroll"><table>
<thead><tr><th>Symptôme</th><th>Cause probable</th><th>Que faire</th></tr></thead>
<tbody>
<tr><td>Le démarreur ne tourne pas, aucun bruit</td><td>Batterie déchargée ou cosses oxydées</td><td>Nettoyer les cosses, recharger, démarrer avec des câbles</td></tr>
<tr><td>Après une charge correcte, la batterie ne démarre pas le véhicule</td><td><strong>Cosses mal serrées</strong> sur la batterie</td><td>Resserrer les cosses</td></tr>
<tr><td>À régime élevé, le moteur a des ratés (à-coups)</td><td><strong>Bougie défectueuse</strong>, <strong>allumeur déréglé</strong> ou <strong>vis platinées déréglées</strong></td><td>Faire contrôler l'allumage</td></tr>
<tr><td>Le véhicule s'éteint en circulation</td><td><strong>Manque de carburant</strong></td><td>Faire le plein, vérifier l'alimentation</td></tr>
<tr><td>Le moteur tourne mais ne démarre pas</td><td>Allumage (bougies humides) ou panne sèche</td><td>Vérifier le carburant, sécher/nettoyer les bougies</td></tr>
<tr><td>Aiguille de température dans le rouge, vapeur</td><td>Manque de liquide, durite percée, ventilateur HS</td><td>S'arrêter, laisser refroidir, <strong>ne jamais ouvrir le bouchon à chaud</strong></td></tr>
<tr><td>Témoin de pression d'huile allumé</td><td>Manque d'huile ou pompe défaillante</td><td>Couper le moteur immédiatement : risque de casse</td></tr>
<tr><td>Témoin de charge (batterie) allumé en roulant</td><td>Courroie d'alternateur cassée</td><td>S'arrêter : le refroidissement peut aussi être coupé</td></tr>
<tr><td>Pédale de frein molle ou qui s'enfonce</td><td>Manque de liquide, air dans le circuit</td><td>Arrêt et dépannage ; utiliser le frein moteur</td></tr>
<tr><td>Fumée noire à l'échappement</td><td>Mélange trop riche, filtre à air colmaté</td><td>Faire régler l'alimentation</td></tr>
<tr><td>Fumée bleue</td><td>Le moteur consomme de l'huile (segments, joints)</td><td>Diagnostic en atelier</td></tr>
</tbody>
</table></div>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 220 120" aria-hidden="true"><rect width="220" height="120" fill="#EDEFF2"/><rect y="96" width="220" height="24" fill="#3A3F46"/><use href="#car-side" x="100" y="54" width="104" height="44" color="#5C636D"/><g fill="#171A1F"><circle cx="86" cy="78" r="10"/><circle cx="64" cy="66" r="14"/><circle cx="36" cy="54" r="18"/></g></svg><b>Fumée noire</b><span>Mélange trop riche, filtre à air colmaté</span></div>
 <div class="scene"><svg viewBox="0 0 220 120" aria-hidden="true"><rect width="220" height="120" fill="#EDEFF2"/><rect y="96" width="220" height="24" fill="#3A3F46"/><use href="#car-side" x="100" y="54" width="104" height="44" color="#5C636D"/><g fill="#5B8FD0"><circle cx="86" cy="78" r="10"/><circle cx="64" cy="66" r="14"/><circle cx="36" cy="54" r="18"/></g></svg><b>Fumée bleue</b><span>Le moteur consomme de l'huile</span></div>
 <div class="scene"><svg viewBox="0 0 220 120" aria-hidden="true"><rect width="220" height="120" fill="#EDEFF2"/><path d="M36 92a74 74 0 0 1 148 0" fill="none" stroke="#3A3F46" stroke-width="14"/><path d="M160 46a74 74 0 0 1 24 46" fill="none" stroke="#D2202F" stroke-width="14"/><path d="M110 92l52-40" stroke="#171A1F" stroke-width="5" stroke-linecap="round"/><circle cx="110" cy="92" r="8" fill="#171A1F"/><text x="44" y="112" font-size="16" font-weight="bold" fill="#0B5FA5">froid</text><text x="184" y="112" font-size="16" font-weight="bold" fill="#D2202F" text-anchor="end">chaud</text></svg><b>Aiguille dans le rouge</b><span>Je m'arrête, jamais le bouchon à chaud</span></div>
</div>
<figcaption>Figure 8.8 — Trois signes de panne à reconnaître</figcaption>
</figure>
<MemoBox label="Le calendrier de l'entretien">
Vidange huile + filtre selon le <strong>kilométrage parcouru</strong> (souvent 5 000 à 10 000 km) · Filtres à air et à carburant · Bougies · Courroie de distribution (pièce vitale : sa rupture détruit le moteur) · Liquide de frein tous les 2 ans · Contrôle du niveau d'huile <strong>chaque matin</strong> et avant tout long trajet.
</MemoBox>

<QcmBlock title="QCM — Chapitre 8" :questions="questions" />
</section>
</template>
