<script setup>
import ExempleBox from '../components/ExempleBox.vue'
import AttentionBox from '../components/AttentionBox.vue'
import QcmBlock from '../components/QcmBlock.vue'
import questions from '../data/questions/ch3.json'
</script>

<template>
<section class="chap" id="ch3">
<div class="chap-head">
  <span class="borne">03</span>
  <div><span class="fil">Chapitre 3</span><h2>Croisements et dépassements</h2></div>
</div>
<p class="obj"><b>Objectifs du chapitre</b> Croiser en sécurité dans toutes les configurations, connaître les trois étapes du dépassement (avant, pendant, après), savoir où le dépassement est interdit et quand il peut se faire par la droite.</p>

<h3>3.1 Le croisement</h3>
<p>Croiser, c'est rencontrer un véhicule circulant <strong>en sens inverse</strong>. Au Bénin, où l'on circule à droite, <strong>on croise par la droite</strong> : chaque conducteur serre son côté droit.</p>
<h4>Les règles du croisement</h4>
<ol>
<li><strong>Se déporter à droite</strong> sans mordre sur l'accotement meuble ni sur le trottoir.</li>
<li><strong>Ralentir</strong> si la chaussée est étroite, si le véhicule croisé est large, ou si un obstacle est présent.</li>
<li><strong>Passer en feux de croisement</strong> la nuit, dès que l'on aperçoit un véhicule en sens inverse (et aussi lorsqu'on suit un véhicule).</li>
<li><strong>Céder le passage</strong> lorsque l'obstacle (véhicule en stationnement, travaux, îlot) se trouve <strong>de mon côté</strong> : c'est moi qui dois attendre.</li>
</ol>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-route" width="240" height="150"/><use href="#car-e" x="30" y="81" width="46" height="22" color="#0B5FA5"/><use href="#car-w" x="164" y="47" width="46" height="22" color="#D2202F"/><path d="M80 92h32" stroke="#fff" stroke-width="3" marker-end="url(#m-w)"/><path d="M160 58h-32" stroke="#fff" stroke-width="3" marker-end="url(#m-w)"/><text x="120" y="130" font-size="15" text-anchor="middle" font-weight="bold" fill="#171A1F">chacun serre sa droite</text></svg><b>Le croisement normal</b><span>Je me déporte à droite et je ralentis si c'est étroit</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-route" width="240" height="150"/><use href="#car-e" x="110" y="81" width="46" height="22" color="#5C636D"/><use href="#car-e" x="32" y="81" width="46" height="22" color="#0B5FA5"/><path d="M84 79v26" stroke="#F5B301" stroke-width="4"/><use href="#truck-w" x="128" y="49" width="100" height="22" color="#D2202F"/><text x="120" y="130" font-size="15" text-anchor="middle" font-weight="bold" fill="#171A1F">l'obstacle est de mon côté : j'attends</text></svg><b>L'obstacle de mon côté</b><span>Je m'arrête avant lui et je laisse passer le camion</span></div>
</div>
<figcaption>Figure 3.1 — Qui passe lors d'un croisement</figcaption>
</figure>
<ExempleBox label="Exemple concret">
Une voiture est garée sur ta voie et un camion arrive en face. L'obstacle est de ton côté : tu ralentis et tu t'arrêtes avant l'obstacle pour laisser passer le camion. Forcer le passage serait une faute grave — et, en cas d'accident, ta responsabilité serait engagée.
</ExempleBox>
<h4>Cas particuliers de croisement</h4>
<ul>
<li><strong>Croisement d'un deux-roues, d'un piéton ou d'un animal</strong> : prévoir une marge latérale d'au moins <strong>1 m</strong>.</li>
<li><strong>Croisement d'un convoi ou d'un véhicule large</strong> : ralentir fortement, voire s'arrêter, à cause de l'effet de souffle.</li>
<li><strong>Croisement de nuit</strong> : ne jamais rester en feux de route ; en cas d'éblouissement, ralentir, fixer le bord droit de la chaussée, ne jamais fermer les yeux.</li>
</ul>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#EDEFF2"/><rect y="30" width="240" height="90" fill="#3A3F46"/><path d="M0 120h240" stroke="#9C8B6E" stroke-width="10"/><use href="#car-e" x="84" y="74" width="74" height="36" color="#0B5FA5"/><use href="#moto-w" x="84" y="42" width="74" height="26" color="#D2202F"/><path d="M178 66v44" stroke="#F5B301" stroke-width="3"/><path d="M178 66h-20M178 110h-20" stroke="#F5B301" stroke-width="3"/><text x="186" y="94" font-size="18" font-weight="bold" fill="#F5B301">1 m</text></svg><b>Deux-roues, piéton, animal</b><span>Je garde au moins 1 m de marge sur le côté</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#10141F"/><path d="M120 44 240 150H0z" fill="#3A3F46"/><path d="M120 44v106" stroke="#fff" stroke-width="2" stroke-dasharray="10 12"/><path d="M226 139 122 46" stroke="#F5F7FA" stroke-width="3"/><circle cx="100" cy="54" r="5" fill="#FFF3B0"/><circle cx="112" cy="54" r="5" fill="#FFF3B0"/><path d="M106 54 8 150h70z" fill="#FFF3B0" opacity=".3"/><circle cx="190" cy="118" r="14" fill="none" stroke="#2BB673" stroke-width="4"/><text x="120" y="24" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">je fixe le bord droit</text></svg><b>Ébloui la nuit</b><span>Je ralentis et je regarde le bord droit, sans fermer les yeux</span></div>
</div>
<figcaption>Figure 3.2 — La marge latérale et l'éblouissement</figcaption>
</figure>

<h4>Les croisements difficiles</h4>
<p>L'état, le profil et l'insuffisance de largeur de la chaussée peuvent rendre le croisement difficile. La réglementation précise alors <strong>qui doit s'arrêter à temps</strong> et <strong>qui doit reculer</strong>.</p>
<p><strong>1) L'un des véhicules doit s'arrêter</strong></p>
<ul>
<li><strong>En agglomération</strong>, tous les autres véhicules doivent s'arrêter pour faciliter le passage des <strong>transports en commun (autobus)</strong>.</li>
<li><strong>Sur un terrain plat</strong>, les <strong>véhicules encombrants</strong> doivent s'arrêter à temps pour céder le passage aux véhicules légers.</li>
<li><strong>Sur une pente</strong>, le véhicule <strong>descendant</strong> doit s'arrêter à temps, <strong>quelle que soit sa catégorie</strong>.</li>
</ul>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 130" aria-hidden="true"><rect width="240" height="130" fill="#EDEFF2"/><rect y="86" width="240" height="44" fill="#3A3F46"/><use href="#bus-side" x="4" y="42" width="110" height="46" color="#0B5FA5"/><g transform="translate(236 0) scale(-1 1)"><use href="#car-side" x="4" y="52" width="82" height="36" color="#5C636D"/></g><text x="192" y="38" font-size="15" font-weight="bold" fill="#D2202F" text-anchor="middle">je m'arrête</text></svg><b>En agglomération</b><span>Tous s'arrêtent pour l'autobus</span></div>
 <div class="scene"><svg viewBox="0 0 240 130" aria-hidden="true"><rect width="240" height="130" fill="#EDEFF2"/><rect y="86" width="240" height="44" fill="#3A3F46"/><use href="#car-side" x="4" y="52" width="82" height="36" color="#0B5FA5"/><g transform="translate(236 0) scale(-1 1)"><use href="#truck-side" x="4" y="38" width="120" height="50" color="#5C636D"/></g><text x="176" y="30" font-size="15" font-weight="bold" fill="#D2202F" text-anchor="middle">je m'arrête</text></svg><b>Sur terrain plat</b><span>Le véhicule encombrant s'arrête pour le léger</span></div>
 <div class="scene"><svg viewBox="0 0 240 130" aria-hidden="true"><rect width="240" height="130" fill="#EDEFF2"/><path d="M0 120 240 50v80H0z" fill="#3A3F46"/><use href="#truck-side" x="-46" y="-40" width="92" height="40" transform="translate(58 100) rotate(-16)" color="#0B5FA5"/><g transform="translate(184 62) rotate(-16) scale(-1 1)"><use href="#car-side" x="-36" y="-32" width="72" height="32" color="#D2202F"/></g><text x="70" y="24" font-size="15" font-weight="bold" fill="#D2202F" text-anchor="middle">je descends :</text><text x="70" y="42" font-size="15" font-weight="bold" fill="#D2202F" text-anchor="middle">je m'arrête</text></svg><b>Sur une pente</b><span>Le descendant s'arrête, quelle que soit sa catégorie</span></div>
</div>
<figcaption>Figure 3.3 — Qui doit s'arrêter à temps</figcaption>
</figure>
<p><strong>2) L'un des véhicules doit reculer</strong> : sur une pente ou une route de montagne, lors d'un croisement difficile, la marche arrière s'impose :</p>
<ul>
<li>au véhicule <strong>descendant</strong>, si les véhicules sont de <strong>la même catégorie</strong> ;</li>
<li>aux <strong>véhicules légers</strong> par rapport aux <strong>véhicules lourds</strong> ;</li>
<li>aux <strong>camions</strong> par rapport aux <strong>autobus</strong> ;</li>
<li>aux <strong>véhicules uniques</strong> par rapport aux <strong>ensembles de véhicules</strong> (véhicule + remorque).</li>
</ul>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 280 110" aria-hidden="true"><rect width="280" height="110" fill="#EDEFF2"/><path d="M0 104 280 60v50H0z" fill="#3A3F46"/><use href="#car-side" x="-37" y="-32" width="74" height="32" transform="translate(70 92) rotate(-9)" color="#5C636D"/><g transform="translate(210 70) rotate(-9) scale(-1 1)"><use href="#car-side" x="-37" y="-32" width="74" height="32" color="#D2202F"/></g><path d="M224 26h36" stroke="#D2202F" stroke-width="4" marker-end="url(#m-r)"/><text x="210" y="16" font-size="15" font-weight="bold" fill="#D2202F" text-anchor="middle">je recule</text></svg><b>Même catégorie</b><span>Le descendant recule</span></div>
 <div class="scene"><svg viewBox="0 0 280 110" aria-hidden="true"><rect width="280" height="110" fill="#EDEFF2"/><rect y="88" width="280" height="22" fill="#3A3F46"/><use href="#truck-side" x="6" y="34" width="134" height="56" color="#5C636D"/><g transform="translate(280 0) scale(-1 1)"><use href="#car-side" x="24" y="56" width="78" height="34" color="#D2202F"/></g><path d="M224 44h36" stroke="#D2202F" stroke-width="4" marker-end="url(#m-r)"/><text x="218" y="32" font-size="15" font-weight="bold" fill="#D2202F" text-anchor="middle">je recule</text></svg><b>Léger contre lourd</b><span>Le véhicule léger recule</span></div>
 <div class="scene"><svg viewBox="0 0 280 110" aria-hidden="true"><rect width="280" height="110" fill="#EDEFF2"/><rect y="88" width="280" height="22" fill="#3A3F46"/><use href="#bus-side" x="6" y="36" width="124" height="52" color="#0B5FA5"/><g transform="translate(280 0) scale(-1 1)"><use href="#truck-side" x="6" y="36" width="124" height="54" color="#D2202F"/></g><path d="M224 24h36" stroke="#D2202F" stroke-width="4" marker-end="url(#m-r)"/><text x="210" y="16" font-size="15" font-weight="bold" fill="#D2202F" text-anchor="middle">je recule</text></svg><b>Camion contre autobus</b><span>Le camion recule toujours devant l'autobus</span></div>
 <div class="scene"><svg viewBox="0 0 280 110" aria-hidden="true"><rect width="280" height="110" fill="#EDEFF2"/><rect y="88" width="280" height="22" fill="#3A3F46"/><rect x="4" y="50" width="56" height="30" rx="2" fill="#C9CDD4" stroke="#5C636D" stroke-width="2"/><circle cx="32" cy="82" r="7" fill="#171A1F"/><path d="M60 72h12" stroke="#171A1F" stroke-width="3"/><use href="#car-side" x="70" y="56" width="78" height="34" color="#5C636D"/><g transform="translate(280 0) scale(-1 1)"><use href="#car-side" x="24" y="56" width="78" height="34" color="#D2202F"/></g><path d="M224 44h36" stroke="#D2202F" stroke-width="4" marker-end="url(#m-r)"/><text x="218" y="32" font-size="15" font-weight="bold" fill="#D2202F" text-anchor="middle">je recule</text></svg><b>Seul contre attelage</b><span>Le véhicule seul recule devant véhicule + remorque</span></div>
</div>
<figcaption>Figure 3.4 — Qui doit faire marche arrière</figcaption>
</figure>
<p><strong>NB</strong> : dans un croisement, la conduite à tenir peut aussi être dictée par des panneaux, des feux ou des agents de la circulation.</p>

<h3>3.2 Le dépassement</h3>
<p>Dépasser, c'est <strong>rattraper et doubler un véhicule circulant dans le même sens</strong>. C'est la manœuvre la plus accidentogène : elle mobilise la voie de sens inverse et allonge fortement la distance parcourue.</p>
<figure>
<svg viewBox="0 0 700 220" role="img" aria-label="Les trois étapes du dépassement">
 <rect width="700" height="220" fill="#EDEFF2"/>
 <rect x="0" y="60" width="700" height="110" fill="#3A3F46"/>
 <g stroke="#fff" stroke-width="3" stroke-dasharray="18 16"><path d="M0 115h700"/></g>
 <path d="M60 148 C 150 148, 170 85, 250 85 L 430 85 C 510 85, 530 148, 620 148" fill="none" stroke="#F5B301" stroke-width="4" stroke-dasharray="9 7"/>
 <path d="M620 148l-16-7v14z" fill="#F5B301"/>
 <g font-family="Arial Narrow, Arial, sans-serif">
  <rect x="40" y="134" width="46" height="28" rx="4" fill="#0B5FA5"/>
  <text x="63" y="153" fill="#fff" font-size="12" text-anchor="middle" font-weight="bold">MOI</text>
  <rect x="330" y="134" width="52" height="28" rx="4" fill="#5C636D"/>
  <text x="356" y="153" fill="#fff" font-size="11" text-anchor="middle" font-weight="bold">DÉPASSÉ</text>
  <g font-size="12.5" fill="#171A1F" text-anchor="middle">
   <text x="130" y="196">AVANT : s'assurer, prévenir</text><text x="350" y="196">PENDANT : déboîter, doubler</text>
   <text x="590" y="196">APRÈS : se rabattre, éteindre</text>
  </g>
  <text x="350" y="34" font-size="14" text-anchor="middle" font-weight="bold" fill="#171A1F" letter-spacing="1.5">LES TROIS ÉTAPES DU DÉPASSEMENT</text>
 </g>
</svg>
<figcaption>Figure 3.5 — La trajectoire et la chronologie du dépassement</figcaption>
</figure>
<p>Le dépassement est l'une des manœuvres <strong>les plus meurtrières</strong> de la route : une erreur entraîne des accidents très graves, voire mortels. Il s'effectue en <strong>trois étapes : avant, pendant et après</strong>.</p>
<h4>Avant le dépassement : les précautions</h4>
<ol>
<li>S'assurer que le dépassement <strong>n'est pas interdit</strong> (1<sup>re</sup> précaution).</li>
<li>S'assurer, à l'aide du <strong>rétroviseur intérieur</strong>, que personne ne s'apprête aussi à dépasser.</li>
<li>S'assurer que la circulation est <strong>libre en sens inverse</strong>.</li>
<li>S'assurer qu'on pourra <strong>se rabattre rapidement</strong> devant celui qu'on dépasse.</li>
<li>S'assurer que la <strong>réserve d'accélération</strong> est suffisante pour dépasser vite : rouler <strong>au moins 20 km/h de plus</strong> que le véhicule dépassé.</li>
<li><strong>Prévenir</strong> l'usager à dépasser : <strong>le jour avec l'avertisseur sonore</strong>, <strong>la nuit avec les appels lumineux</strong>.</li>
<li>S'assurer <strong>une dernière fois</strong>, à l'aide du rétroviseur, que personne ne dépasse.</li>
</ol>
<h4>Pendant le dépassement</h4>
<ol start="8">
<li>Mettre le <strong>clignotant à gauche</strong> et se déporter à gauche en observant un <strong>écart latéral</strong> de :
<ul>
<li><strong>0,5 m</strong> entre deux véhicules automobiles ;</li>
<li><strong>1 m</strong> entre une automobile et un piéton, un animal, un cycliste ou un motocycliste.</li>
</ul></li>
<li><strong>Accélérer franchement</strong> pour dépasser vite. La nuit, on peut repasser en <strong>feux de route en arrivant à la hauteur du conducteur</strong> dépassé, quand on ne risque plus de l'éblouir (Q278).</li>
<li>Le dépassement est <strong>effectif</strong> lorsque l'usager dépassé <strong>apparaît dans le rétroviseur intérieur</strong> : on attend ce moment pour mettre le clignotant à droite et se rabattre à droite.</li>
</ol>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-route" width="240" height="150"/><use href="#car-e" x="96" y="81" width="46" height="22" color="#5C636D"/><use href="#car-e" x="96" y="47" width="46" height="22" color="#0B5FA5"/><path d="M160 69v12" stroke="#F5B301" stroke-width="3"/><text x="170" y="66" font-size="17" font-weight="bold" fill="#F5B301">0,5 m</text><text x="120" y="130" font-size="14" fill="#171A1F" text-anchor="middle" font-weight="bold">entre deux automobiles</text></svg><b>Écart de 0,5 m</b><span>Entre deux véhicules automobiles</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-route" width="240" height="150"/><use href="#moto-e" x="96" y="84" width="46" height="18" color="#5C636D"/><use href="#car-e" x="96" y="47" width="46" height="22" color="#0B5FA5"/><path d="M160 69v15" stroke="#F5B301" stroke-width="3"/><text x="170" y="66" font-size="17" font-weight="bold" fill="#F5B301">1 m</text><text x="120" y="130" font-size="14" fill="#171A1F" text-anchor="middle" font-weight="bold">piéton, animal, cycliste, moto</text></svg><b>Écart de 1 m</b><span>Avec un usager vulnérable</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#DCEBF7"/><path d="M0 150 100 70h40l100 80z" fill="#3A3F46"/><path d="M120 76v74" stroke="#fff" stroke-width="2" stroke-dasharray="10 10"/><rect x="66" y="10" width="108" height="42" rx="8" fill="#171A1F"/><rect x="72" y="16" width="96" height="30" rx="5" fill="#EDEFF2"/><use href="#car-side" x="-22" y="-20" width="44" height="20" transform="translate(120 42)" color="#5C636D"/><path d="M120 52v8" stroke="#171A1F" stroke-width="6"/></svg><b>Dans le rétroviseur intérieur</b><span>Le dépassé y apparaît : je peux me rabattre</span></div>
</div>
<figcaption>Figure 3.6 — L'écart latéral et le moment de se rabattre</figcaption>
</figure>
<h4>Après le dépassement</h4>
<ol start="11">
<li><strong>Éteindre le clignotant</strong> pour continuer la marche normale.</li>
</ol>

<h3>3.3 Où et quand le dépassement est interdit</h3>
<figure>
<div class="scenes">
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#E4EADF"/><path d="M0 150V90Q0 20 80 20h160" fill="none" stroke="#3A3F46" stroke-width="56" transform="translate(30 10)"/><path d="M30 160V100Q30 30 110 30h130" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="10 10"/><use href="#o-tree" x="88" y="56" width="44" height="66"/><use href="#o-tree" x="140" y="70" width="36" height="54"/><use href="#car-n" x="44" y="104" width="20" height="38" color="#0B5FA5"/><use href="#o-no" x="4" y="4" width="30" height="30"/></svg><b>Dans un virage</b><span>Je ne vois pas celui qui arrive en face</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><rect width="240" height="150" fill="#DCEBF7"/><path d="M0 150V110Q120 30 240 110v40z" fill="#3A3F46"/><use href="#car-side" x="-28" y="-24" width="56" height="24" transform="translate(66 92) rotate(-20)" color="#0B5FA5"/><g transform="translate(180 92) rotate(20) scale(-1 1)"><use href="#car-side" x="-28" y="-24" width="56" height="24" color="#D2202F"/></g><use href="#o-no" x="4" y="4" width="30" height="30"/></svg><b>Au sommet d'une côte</b><span>Celui d'en face reste caché derrière la bosse</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-route-c" width="240" height="150"/><use href="#car-e" x="118" y="81" width="46" height="22" color="#5C636D"/><use href="#car-e" x="40" y="81" width="46" height="22" color="#0B5FA5"/><path d="M88 88q24-34 60-30" fill="none" stroke="#D2202F" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#m-r)"/><use href="#o-no" x="4" y="4" width="30" height="30"/></svg><b>Sur une ligne continue</b><span>La franchir est déjà interdit</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-route" width="240" height="150"/><path d="M150 48v54M164 48v54M178 48v54M192 48v54M206 48v54" stroke="#fff" stroke-width="8" transform="translate(0 0)"/><use href="#truck-e" x="48" y="79" width="94" height="24" color="#5C636D"/><use href="#car-e" x="6" y="47" width="46" height="22" color="#0B5FA5"/><use href="#p-person" x="170" y="60" width="18" height="40" color="#F5B301"/><use href="#o-no" x="4" y="4" width="30" height="30"/></svg><b>Au passage pour piétons</b><span>Le véhicule dépassé peut cacher un piéton</span></div>
 <div class="scene"><svg viewBox="0 0 240 150" aria-hidden="true"><use href="#bg-route" width="240" height="150"/><path d="M178 0v150M198 0v150" stroke="#2A2E33" stroke-width="5"/><path d="M170 14h36M170 30h36M170 120h36M170 136h36" stroke="#7A5A3A" stroke-width="5"/><use href="#car-e" x="84" y="81" width="46" height="22" color="#5C636D"/><use href="#car-e" x="20" y="47" width="46" height="22" color="#0B5FA5"/><use href="#o-no" x="4" y="4" width="30" height="30"/></svg><b>Au passage à niveau</b><span>Aucune manœuvre possible à cet endroit</span></div>
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><use href="#bg-carrefour" width="240" height="170"/><use href="#car-e" x="44" y="90" width="42" height="20" color="#5C636D"/><circle cx="84" cy="93" r="4" fill="#F5B301"/><path d="M90 92q14-2 20-30" fill="none" stroke="#F5B301" stroke-width="3" marker-end="url(#m-a)"/><use href="#car-e" x="4" y="60" width="42" height="20" color="#0B5FA5"/><path d="M48 70h28" stroke="#D2202F" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#m-r)"/><use href="#o-no" x="4" y="4" width="30" height="30"/></svg><b>Clignotant à gauche</b><span>Le véhicule de devant va me couper la route</span></div>
</div>
<figcaption>Figure 3.7 — Six situations où je ne dépasse pas</figcaption>
</figure>
<figure>
<div class="panneaux">
 <div class="pan"><img src="/benin/signs/68a760170cb2.webp" alt="" loading="lazy">Dépassement interdit</div>
 <div class="pan"><img src="/benin/signs/3b59610cb2f7.webp" alt="" loading="lazy">Fin de l'interdiction</div>
 <div class="pan"><img src="/benin/signs/4783481d12a1.webp" alt="" loading="lazy">Interdit aux poids lourds</div>
</div>
<figcaption>Figure 3.8 — Les panneaux qui règlent le dépassement</figcaption>
</figure>
<div class="table-scroll"><table>
<thead><tr><th>Interdiction</th><th>Pourquoi</th></tr></thead>
<tbody>
<tr><td colspan="2"><strong>Par manque de visibilité</strong></td></tr>
<tr><td>Dans un virage, au sommet d'une côte, par temps de brouillard ou de forte pluie</td><td>On ne voit pas le véhicule arrivant en face</td></tr>
<tr><td>Aux intersections de routes où le conducteur doit céder le passage</td><td>Risque de collision avec un véhicule débouchant ou tournant</td></tr>
<tr><td colspan="2"><strong>À cause des marquages au sol</strong></td></tr>
<tr><td>Sur une ligne continue</td><td>Le franchissement est lui-même interdit</td></tr>
<tr><td>Sur une ligne mixte dont la ligne continue est du côté du conducteur</td><td>On obéit à la ligne la plus proche</td></tr>
<tr><td>Sur les flèches de rabattement</td><td>La voie se termine ou une ligne continue arrive</td></tr>
<tr><td>Sur les lignes d'avertissement, lorsque la manœuvre risque de ne pas être terminée avant la ligne continue</td><td>On se retrouverait à franchir la ligne continue</td></tr>
<tr><td colspan="2"><strong>En raison des autres usagers</strong></td></tr>
<tr><td>Sur et aux abords d'un passage pour piétons</td><td>Le véhicule dépassé peut masquer un piéton engagé</td></tr>
<tr><td>Aux passages à niveau et à leurs abords</td><td>Zone de manœuvre impossible</td></tr>
<tr><td>Lorsqu'un autre usager veut dépasser ou me dépasse déjà</td><td>Double dépassement = collision quasi certaine</td></tr>
<tr><td>S'il n'y a pas de place pour se rabattre sans gêner</td><td>On couperait la route du véhicule dépassé</td></tr>
<tr><td>Sur une chaussée rétrécie, si la largeur ne permet pas de laisser un intervalle latéral correct</td><td>On frôlerait le véhicule dépassé</td></tr>
<tr><td>Sur la voie la plus à gauche d'une chaussée à double sens comportant plus de deux voies</td><td>Cette voie est réservée à la circulation venant en sens inverse</td></tr>
<tr><td>Quand le véhicule précédent a mis son clignotant gauche pour tourner</td><td>Il coupera ma trajectoire</td></tr>
<tr><td>Panneau « dépassement interdit » (voiture rouge/voiture noire)</td><td>Interdiction réglementaire jusqu'au panneau de fin</td></tr>
</tbody>
</table></div>
<AttentionBox label="Danger">
Le dépassement d'un <strong>véhicule long</strong> (camion, semi-remorque) demande une distance et un temps considérables : à 90 km/h, doubler un camion peut mobiliser <strong>plus de 400 m</strong> de route. Si tu doutes de la place disponible, n'engage pas la manœuvre.
</AttentionBox>

<h3>3.4 Le dépassement par la droite</h3>
<p>La règle est de dépasser par la gauche. <strong>Il est interdit de dépasser par la droite, sauf si l'usager à dépasser tourne à gauche</strong> : il a signalé son intention et s'est déporté vers l'axe.</p>
<p>Sur une chaussée à <strong>circulation en files ininterrompues</strong>, progresser plus vite dans sa file de droite n'est pas un dépassement.</p>
<figure>
<div class="scenes grandes">
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><rect width="240" height="170" fill="#EDEFF2"/><rect x="90" width="60" height="170" fill="#3A3F46"/><rect y="40" width="240" height="90" fill="#3A3F46"/><path d="M0 70h90M150 70h90M120 0v40M120 130v40" stroke="#fff" stroke-width="2.5" stroke-dasharray="12 10"/><use href="#car-e" x="62" y="72" width="40" height="20" color="#5C636D"/><circle cx="100" cy="75" r="3.5" fill="#F5B301"/><path d="M106 76q12-2 16-26" fill="none" stroke="#F5B301" stroke-width="3" marker-end="url(#m-a)"/><use href="#car-e" x="30" y="102" width="40" height="20" color="#0B5FA5"/><path d="M74 112h70" stroke="#1B7F5A" stroke-width="3" marker-end="url(#m-g)"/><use href="#o-ok" x="4" y="4" width="30" height="30"/></svg><b>Il tourne à gauche : c'est permis</b><span>Il a signalé et s'est déporté vers l'axe, je passe à sa droite</span></div>
 <div class="scene"><svg viewBox="0 0 240 170" aria-hidden="true"><rect width="240" height="170" fill="#EDEFF2"/><rect y="40" width="240" height="90" fill="#3A3F46"/><path d="M0 70h240" stroke="#fff" stroke-width="2.5" stroke-dasharray="12 10"/><use href="#truck-e" x="96" y="72" width="110" height="24" color="#5C636D"/><use href="#car-e" x="30" y="102" width="40" height="20" color="#0B5FA5"/><path d="M74 112h90" stroke="#D2202F" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#m-r)"/><use href="#o-no" x="4" y="4" width="30" height="30"/></svg><b>Sinon, jamais par la droite</b><span>Le dépassement se fait par la gauche</span></div>
</div>
<figcaption>Figure 3.9 — Le seul dépassement par la droite autorisé</figcaption>
</figure>

<h3>3.5 Obligations de celui qui est dépassé</h3>
<p>Celui qu'on dépasse doit :</p>
<ul>
<li><strong>maintenir son allure</strong> : ne pas accélérer, ne pas ralentir ;</li>
<li><strong>serrer sa droite</strong> ;</li>
<li>la nuit, <strong>passer en feux de croisement dès qu'il est dépassé</strong>.</li>
</ul>
<p>Accélérer pendant qu'on est dépassé est à la fois dangereux et sanctionné.</p>
<figure>
<svg class="fig-large" viewBox="0 0 520 170" role="img" aria-label="Une voiture en dépasse une autre : celle qui est dépassée garde son allure et serre à droite">
 <rect width="520" height="170" fill="#EDEFF2"/><rect y="34" width="520" height="84" fill="#3A3F46"/>
 <path d="M0 76h520" stroke="#fff" stroke-width="2.5" stroke-dasharray="14 11"/>
 <use href="#car-e" x="210" y="42" width="58" height="26" color="#D2202F"/>
 <use href="#car-e" x="130" y="88" width="58" height="26" color="#0B5FA5"/>
 <path d="M192 101h46" stroke="#fff" stroke-width="3" marker-end="url(#m-w)"/>
 <path d="M272 55h46" stroke="#fff" stroke-width="3" marker-end="url(#m-w)"/>
 <text x="210" y="24" font-size="16" font-weight="bold" fill="#D2202F">il me dépasse</text>
 <text x="260" y="146" font-size="16" font-weight="bold" fill="#0B5FA5" text-anchor="middle">moi, le dépassé : même allure, je serre à droite</text>
</svg>
<figcaption>Figure 3.10 — Se laisser dépasser, c'est aussi une manœuvre</figcaption>
</figure>

<QcmBlock title="QCM — Chapitre 3" :questions="questions" />
</section>
</template>
