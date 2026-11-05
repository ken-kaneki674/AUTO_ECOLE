<template>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <symbol id="s-danger" viewBox="0 0 100 90"><path d="M50 4 96 86H4Z" fill="#D2202F"/><path d="M50 16 85 79H15Z" fill="#fff"/></symbol>
      <symbol id="s-interdit" viewBox="0 0 100 100"><circle cx="50" cy="50" r="47" fill="#D2202F"/><circle cx="50" cy="50" r="37" fill="#fff"/></symbol>
      <symbol id="s-oblig" viewBox="0 0 100 100"><circle cx="50" cy="50" r="47" fill="#fff"/><circle cx="50" cy="50" r="44" fill="#0B5FA5"/></symbol>
      <symbol id="s-indic" viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="4" fill="#0B5FA5" stroke="#fff" stroke-width="4"/></symbol>

      <!-- Pointes de trajectoire : marker-end="url(#m-a)" (a ambre, b bleu, r rouge, g vert, w blanc, k noir) -->
      <marker id="m-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 10 5 0 10z" fill="#F5B301"/></marker>
      <marker id="m-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 10 5 0 10z" fill="#0B5FA5"/></marker>
      <marker id="m-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 10 5 0 10z" fill="#D2202F"/></marker>
      <marker id="m-g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 10 5 0 10z" fill="#1B7F5A"/></marker>
      <marker id="m-w" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 10 5 0 10z" fill="#fff"/></marker>
      <marker id="m-k" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 10 5 0 10z" fill="#171A1F"/></marker>

      <!-- Véhicules vus du dessus. n/e/s/w = sens de marche ; la carrosserie prend l'attribut color. -->
      <symbol id="car-n" viewBox="0 0 40 76">
        <path d="M10 2h20q8 0 8 8v56q0 8-8 8H10q-8 0-8-8V10q0-8 8-8z" fill="currentColor"/>
        <path d="M8 26q12-6 24 0l-3 11H11zM11 56h18l3 8q-12 5-24 0z" fill="#DCEBF7"/>
        <path d="M0 28h3v6H0zM37 28h3v6h-3z" fill="currentColor"/>
        <path d="M8 4h6v4H6q0-3 2-4zM26 4h6q2 1 2 4h-8z" fill="#FFF3B0"/>
      </symbol>
      <symbol id="car-e" viewBox="0 0 76 40"><use href="#car-n" width="40" height="76" transform="translate(76 0) rotate(90)"/></symbol>
      <symbol id="car-s" viewBox="0 0 40 76"><use href="#car-n" width="40" height="76" transform="translate(40 76) rotate(180)"/></symbol>
      <symbol id="car-w" viewBox="0 0 76 40"><use href="#car-n" width="40" height="76" transform="translate(0 40) rotate(-90)"/></symbol>

      <symbol id="truck-n" viewBox="0 0 44 130">
        <rect x="2" y="34" width="40" height="94" rx="2" fill="#C9CDD4" stroke="#5C636D" stroke-width="2"/>
        <rect x="5" y="2" width="34" height="30" rx="6" fill="currentColor"/>
        <path d="M9 12q13-5 26 0l-2 7H11z" fill="#DCEBF7"/>
      </symbol>
      <symbol id="truck-e" viewBox="0 0 130 44"><use href="#truck-n" width="44" height="130" transform="translate(130 0) rotate(90)"/></symbol>
      <symbol id="truck-w" viewBox="0 0 130 44"><use href="#truck-n" width="44" height="130" transform="translate(0 44) rotate(-90)"/></symbol>

      <symbol id="bus-n" viewBox="0 0 44 120">
        <rect x="2" y="2" width="40" height="116" rx="8" fill="currentColor"/>
        <path d="M7 16q15-6 30 0l-2 8H9z" fill="#DCEBF7"/>
        <path d="M12 44h20v12H12zM12 76h20v12H12z" fill="#fff" opacity=".55"/>
      </symbol>
      <symbol id="bus-e" viewBox="0 0 120 44"><use href="#bus-n" width="44" height="120" transform="translate(120 0) rotate(90)"/></symbol>
      <symbol id="bus-w" viewBox="0 0 120 44"><use href="#bus-n" width="44" height="120" transform="translate(0 44) rotate(-90)"/></symbol>

      <symbol id="moto-n" viewBox="0 0 20 52">
        <rect x="8" y="0" width="4" height="14" rx="2" fill="#171A1F"/><rect x="8" y="38" width="4" height="14" rx="2" fill="#171A1F"/>
        <rect x="5" y="12" width="10" height="28" rx="5" fill="currentColor"/>
        <path d="M1 15h18" stroke="#171A1F" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="10" cy="26" r="6" fill="#171A1F"/>
      </symbol>
      <symbol id="moto-e" viewBox="0 0 52 20"><use href="#moto-n" width="20" height="52" transform="translate(52 0) rotate(90)"/></symbol>
      <symbol id="moto-w" viewBox="0 0 52 20"><use href="#moto-n" width="20" height="52" transform="translate(0 20) rotate(-90)"/></symbol>

      <!-- Véhicules vus de profil, l'avant à droite. -->
      <symbol id="car-side" viewBox="0 0 130 56">
        <path d="M4 38q0-10 10-11l22-2 16-15q3-3 8-3h26q5 0 9 4l14 14 12 3q5 1 5 7v8q0 3-3 3H7q-3 0-3-3z" fill="currentColor"/>
        <path d="M44 25 57 12h18v13zM80 12h7q3 0 5 2l10 11H80z" fill="#DCEBF7"/>
        <circle cx="32" cy="44" r="10" fill="#171A1F"/><circle cx="32" cy="44" r="4" fill="#C9CDD4"/>
        <circle cx="100" cy="44" r="10" fill="#171A1F"/><circle cx="100" cy="44" r="4" fill="#C9CDD4"/>
      </symbol>
      <symbol id="truck-side" viewBox="0 0 190 80">
        <rect x="2" y="6" width="124" height="54" rx="2" fill="#C9CDD4" stroke="#5C636D" stroke-width="2"/>
        <path d="M130 18h30q6 0 9 5l15 21q3 4 3 8v10h-57z" fill="currentColor"/>
        <path d="M140 25h19q3 0 5 3l11 16h-35z" fill="#DCEBF7"/>
        <path d="M2 60h186v6H2z" fill="#3A3F46"/>
        <circle cx="30" cy="66" r="12" fill="#171A1F"/><circle cx="30" cy="66" r="5" fill="#C9CDD4"/>
        <circle cx="96" cy="66" r="12" fill="#171A1F"/><circle cx="96" cy="66" r="5" fill="#C9CDD4"/>
        <circle cx="158" cy="66" r="12" fill="#171A1F"/><circle cx="158" cy="66" r="5" fill="#C9CDD4"/>
      </symbol>
      <symbol id="bus-side" viewBox="0 0 180 72">
        <rect x="2" y="4" width="176" height="52" rx="8" fill="currentColor"/>
        <path d="M12 12h26v18H12zM44 12h26v18H44zM76 12h26v18H76zM108 12h26v18h-26zM140 12h30v22h-30z" fill="#DCEBF7"/>
        <circle cx="38" cy="58" r="11" fill="#171A1F"/><circle cx="38" cy="58" r="4.5" fill="#C9CDD4"/>
        <circle cx="142" cy="58" r="11" fill="#171A1F"/><circle cx="142" cy="58" r="4.5" fill="#C9CDD4"/>
      </symbol>
      <symbol id="moto-side" viewBox="0 0 110 66">
        <circle cx="20" cy="46" r="16" fill="#171A1F"/><circle cx="20" cy="46" r="7" fill="#C9CDD4"/>
        <circle cx="90" cy="46" r="16" fill="#171A1F"/><circle cx="90" cy="46" r="7" fill="#C9CDD4"/>
        <path d="M20 46 42 30h28l20 16" fill="none" stroke="#5C636D" stroke-width="5"/>
        <path d="M44 16q16-8 30 2l-4 14H46z" fill="currentColor"/>
        <path d="M18 22h28l-2 10H24z" fill="#171A1F"/>
        <path d="M74 18l16 28M74 18l-8-8h-8" fill="none" stroke="#171A1F" stroke-width="4" stroke-linecap="round"/>
      </symbol>

      <!-- Personnages -->
      <symbol id="p-person" viewBox="0 0 24 56">
        <circle cx="12" cy="7" r="6" fill="currentColor"/>
        <path d="M12 15c-6 0-9 3-9 8v12h4v19h4V38h2v16h4V35h4V23c0-5-3-8-9-8z" fill="currentColor"/>
      </symbol>
      <symbol id="a-front" viewBox="0 0 120 150">
        <circle cx="60" cy="24" r="10" fill="#8D5A3B"/>
        <path d="M47 19q13-13 26 0l3 3H44z" fill="#1F3A5F"/>
        <rect x="47" y="36" width="26" height="54" rx="6" fill="#1F3A5F"/>
        <rect x="47" y="72" width="26" height="5" fill="#fff"/>
        <rect x="48" y="88" width="11" height="54" rx="3" fill="#16283F"/><rect x="61" y="88" width="11" height="54" rx="3" fill="#16283F"/>
      </symbol>
      <symbol id="a-side" viewBox="0 0 120 150">
        <circle cx="60" cy="24" r="10" fill="#8D5A3B"/>
        <path d="M50 19q9-11 20 0l9 3H48z" fill="#1F3A5F"/>
        <rect x="51" y="36" width="18" height="54" rx="6" fill="#1F3A5F"/>
        <rect x="51" y="72" width="18" height="5" fill="#fff"/>
        <rect x="53" y="88" width="14" height="54" rx="3" fill="#16283F"/>
        <path d="M60 42v42" stroke="#2B4D7A" stroke-width="8" stroke-linecap="round"/>
        <circle cx="60" cy="88" r="4.5" fill="#8D5A3B"/>
      </symbol>

      <!-- Objets -->
      <symbol id="o-triangle" viewBox="0 0 40 36"><path d="M20 3 37 33H3Z" fill="#fff" stroke="#D2202F" stroke-width="4.5" stroke-linejoin="round"/></symbol>
      <symbol id="o-cone" viewBox="0 0 24 34"><path d="M12 1 20 28H4Z" fill="#E87722"/><path d="M8.6 13h6.8l1.7 6H6.900z" fill="#fff"/><rect x="1" y="28" width="22" height="5" rx="1" fill="#E87722"/></symbol>
      <symbol id="o-tree" viewBox="0 0 40 60"><rect x="17" y="36" width="6" height="24" fill="#7A5A3A"/><circle cx="20" cy="20" r="18" fill="#3F8A5A"/></symbol>
      <symbol id="o-no" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#D2202F" stroke="#fff" stroke-width="2"/><path d="M12 12 28 28M28 12 12 28" stroke="#fff" stroke-width="5" stroke-linecap="round"/></symbol>
      <symbol id="o-ok" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#1B7F5A" stroke="#fff" stroke-width="2"/><path d="M11 21l6 7 12-15" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></symbol>

      <!-- Décors. bg-route : voie basse vers la droite, voie haute vers la gauche (circulation à droite). -->
      <symbol id="bg-route" viewBox="0 0 240 150">
        <rect width="240" height="150" fill="#EDEFF2"/><rect y="45" width="240" height="60" fill="#3A3F46"/>
        <path d="M0 75h240" stroke="#fff" stroke-width="2.500" stroke-dasharray="14 11"/>
      </symbol>
      <symbol id="bg-route-c" viewBox="0 0 240 150">
        <rect width="240" height="150" fill="#EDEFF2"/><rect y="45" width="240" height="60" fill="#3A3F46"/>
        <path d="M0 75h240" stroke="#fff" stroke-width="2.500"/>
      </symbol>
      <symbol id="bg-rue" viewBox="0 0 240 150">
        <rect width="240" height="150" fill="#C9CDD4"/><rect y="30" width="240" height="90" fill="#3A3F46"/>
        <path d="M0 30h240M0 120h240" stroke="#8A9099" stroke-width="3"/>
        <path d="M0 75h240" stroke="#fff" stroke-width="2.500" stroke-dasharray="14 11"/>
      </symbol>
      <symbol id="bg-carrefour" viewBox="0 0 240 170">
        <rect width="240" height="170" fill="#EDEFF2"/>
        <rect x="90" width="60" height="170" fill="#3A3F46"/><rect y="55" width="240" height="60" fill="#3A3F46"/>
        <path d="M120 0v55M120 115v55M0 85h90M150 85h90" stroke="#fff" stroke-width="2.500" stroke-dasharray="12 10"/>
      </symbol>
      <symbol id="bg-giratoire" viewBox="0 0 200 200">
        <rect width="200" height="200" fill="#EDEFF2"/>
        <rect x="76" width="48" height="200" fill="#3A3F46"/><rect y="76" width="200" height="48" fill="#3A3F46"/>
        <circle cx="100" cy="100" r="68" fill="#3A3F46"/><circle cx="100" cy="100" r="28" fill="#8FA98C" stroke="#fff" stroke-width="3"/>
      </symbol>
    </defs>
  </svg>
</template>
