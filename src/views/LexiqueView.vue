<script setup>
import ValeurBenin from '../components/ValeurBenin.vue'
</script>

<template>
  <div class="wrap">
    <section class="chap" id="lexique">
      <div class="chap-head" style="background:var(--asphalte-2)">
        <span class="borne" style="color:var(--asphalte-2)">AN</span>
        <div><span class="fil" style="color:var(--ambre)">Annexes</span><h2>Fiches de révision &amp; lexique</h2></div>
      </div>

      <h3>A. Les chiffres à connaître par cœur</h3>
      <div class="table-scroll"><table>
      <thead><tr><th>Notion</th><th>Valeur de référence</th></tr></thead>
      <tbody>
      <tr><td>Temps de réaction</td><td>1 seconde</td></tr>
      <tr><td>Distance de réaction</td><td>(V ÷ 10) × 3 mètres</td></tr>
      <tr><td>Distance de freinage sur sol sec</td><td>(V ÷ 10)² mètres — doublée sur sol mouillé</td></tr>
      <tr><td>Distance de sécurité</td><td>2 secondes (3 s sous la pluie)</td></tr>
      <tr><td>Visibilité inférieure à 50 m</td><td>Vitesse maximale : 50 km/h partout</td></tr>
      <tr><td>Écart latéral au dépassement</td><td>1 m en agglomération · 1,50 m hors agglomération</td></tr>
      <tr><td>Clignotant</td><td><ValeurBenin k="distance_clignotant_agglomeration" /> en agglomération · <ValeurBenin k="distance_clignotant_hors_agglomeration" /> hors agglomération</td></tr>
      <tr><td>Usure minimale des pneus</td><td>1,6 mm</td></tr>
      <tr><td>Alcoolémie maximale</td><td><ValeurBenin k="alcoolemie_generale" /> (novices : <ValeurBenin k="alcoolemie_novice" />)</td></tr>
      <tr><td>Élimination de l'alcool</td><td>0,10 à 0,15 g/l par heure</td></tr>
      <tr><td>Pause sur long trajet</td><td>20 minutes toutes les 2 heures</td></tr>
      <tr><td>Permis B</td><td>3 500 kg · 9 places · remorque <ValeurBenin k="remorque_ptac_sans_extension" /></td></tr>
      <tr><td>Triangle de présignalisation</td><td><ValeurBenin k="distance_triangle_agglomeration" /> en agglomération · <ValeurBenin k="distance_triangle_hors_agglomeration" /> hors agglomération</td></tr>
      <tr><td>Réanimation cardio-pulmonaire</td><td>30 compressions / 2 insufflations</td></tr>
      </tbody>
      </table></div>

      <h3>B. Les formules mnémotechniques du manuel</h3>
      <ul>
      <li><strong>A.F.P.M.</strong> — Agent, Feux, Panneaux, Marquage : la hiérarchie de la signalisation.</li>
      <li><strong>P.A.S.</strong> — Protéger, Alerter, Secourir : l'ordre du secourisme.</li>
      <li><strong>C.A.P.R.T.</strong> — Contrôler, Avertir, se Placer, Ralentir, Tourner : tout changement de direction.</li>
      <li><strong>A.C.E.É.</strong> — Admission, Compression, Explosion, Échappement : le cycle à quatre temps.</li>
      <li><strong>Les six temps du dépassement</strong> — Observer, Avertir, Déboîter, Doubler, Contrôler, se Rabattre.</li>
      </ul>

      <h3>C. Petit lexique</h3>
      <div class="table-scroll"><table>
      <thead><tr><th>Terme</th><th>Définition</th></tr></thead>
      <tbody>
      <tr><td><strong>Agglomération</strong></td><td>Espace sur lequel sont groupés des immeubles bâtis, délimité par les panneaux d'entrée et de sortie portant le nom de la localité</td></tr>
      <tr><td><strong>Angle mort</strong></td><td>Zone autour du véhicule qu'aucun rétroviseur ne couvre ; se contrôle par un coup d'œil par-dessus l'épaule</td></tr>
      <tr><td><strong>BAU</strong></td><td>Bande d'arrêt d'urgence</td></tr>
      <tr><td><strong>Chaussée</strong></td><td>Partie de la route affectée à la circulation des véhicules</td></tr>
      <tr><td><strong>Croisement</strong></td><td>Rencontre de deux véhicules circulant en sens inverse</td></tr>
      <tr><td><strong>Dépassement</strong></td><td>Fait de doubler un véhicule circulant dans le même sens</td></tr>
      <tr><td><strong>Force centrifuge</strong></td><td>Force qui déporte le véhicule vers l'extérieur d'un virage, proportionnelle au carré de la vitesse</td></tr>
      <tr><td><strong>Frein moteur</strong></td><td>Ralentissement obtenu en levant le pied et en rétrogradant</td></tr>
      <tr><td><strong>PTAC</strong></td><td>Poids total autorisé en charge : masse maximale du véhicule chargé</td></tr>
      <tr><td><strong>PLS</strong></td><td>Position latérale de sécurité</td></tr>
      <tr><td><strong>Suraccident</strong></td><td>Nouvel accident survenant sur les lieux d'un accident déjà produit</td></tr>
      <tr><td><strong>Zone de rencontre</strong></td><td>Zone où le piéton est prioritaire sur la chaussée et où la vitesse est limitée à 20 km/h</td></tr>
      </tbody>
      </table></div>

      <h3>D. Plan de révision en 3 semaines</h3>
      <div class="table-scroll"><table>
      <thead><tr><th>Semaine</th><th>Chapitres</th><th>Travail</th></tr></thead>
      <tbody>
      <tr><td><strong>Semaine 1 — les règles</strong></td><td>1, 2, 14</td><td>Apprendre les familles de panneaux et la hiérarchie ; refaire les QCM jusqu'à 100 %</td></tr>
      <tr><td><strong>Semaine 2 — la conduite</strong></td><td>3, 4, 5, 6, 13</td><td>Mémoriser les distances et les manœuvres ; s'auto-interroger à l'oral</td></tr>
      <tr><td><strong>Semaine 3 — le véhicule et l'humain</strong></td><td>7, 8, 9, 10, 11, 12</td><td>Fiches sur la mécanique et le secourisme ; passer l'examen blanc en conditions réelles</td></tr>
      </tbody>
      </table></div>

      <div class="fin">
        <p><b>Comment utiliser ce manuel.</b> Lis un chapitre, ferme le document, écris de mémoire les points clés, puis fais le QCM sans regarder. Une réponse fausse n'est pas un échec : c'est exactement l'endroit où relire. Refais l'examen blanc à trois jours d'intervalle — la mémoire se construit par la répétition espacée, pas par la relecture.</p>
        <p><b>Rappel.</b> Les valeurs marquées ⚠ ne sont pas précisées par le manuel officiel de la DGTT. Vérifie-les auprès de ton auto-école ou du service des permis de conduire avant l'examen. Le code de la route béninois en vigueur reste la seule référence officielle.</p>
      </div>
    </section>
  </div>
</template>
