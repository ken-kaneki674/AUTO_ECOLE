<script setup>
import ProgressBadge from '../components/ProgressBadge.vue'
import AttentionBox from '../components/AttentionBox.vue'
import {
  beninSource,
  beninChapters,
  beninQuestionIds,
  beninQuestionCount,
  beninGeneralites,
} from '../data/benin/meta.js'
</script>

<template>
  <div class="wrap">
    <section class="chap" id="benin">
      <div class="chap-head" style="background:var(--vert)">
        <span class="borne" style="color:var(--vert)">BJ</span>
        <div>
          <span class="fil" style="color:#CDEBDD">République du Bénin · DGTT · {{ beninSource.edition }}</span>
          <h2>Questions officielles de l’examen</h2>
        </div>
      </div>
      <p class="obj">
        <b>Source</b>
        « {{ beninSource.title }} » — {{ beninSource.publisher }}, {{ beninSource.edition }}.
        {{ beninQuestionCount() }} questions réparties en {{ beninChapters.length }} chapitres, avec le corrigé du manuel.
        Beaucoup de questions ont <strong>plusieurs bonnes réponses</strong> : coche-les toutes puis valide.
      </p>

      <AttentionBox label="À savoir" style="margin-top:20px">
        Les questions et corrigés sont repris tels quels du manuel de 2011. Quelques corrigés y sont incohérents
        (réponse qui ne correspond à aucun choix) et certaines illustrations n’ont pas pu être récupérées :
        ces questions sont marquées « ⚠ à vérifier ». En cas de doute, fie-toi à ton moniteur d’auto-école.
      </AttentionBox>

      <nav class="toc" aria-labelledby="bj-toc-title">
        <h2 id="bj-toc-title">Chapitres du manuel</h2>
        <ol>
          <li v-for="chapter in beninChapters" :key="chapter.num">
            <router-link :to="{ name: 'benin-chapitre', params: { id: String(chapter.num) } }">
              <span class="n">{{ chapter.roman }}</span>
              {{ chapter.title }} ({{ beninQuestionIds(chapter.num).length }})
              <ProgressBadge :question-ids="beninQuestionIds(chapter.num)" />
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'benin-examen' }">
              <span class="n">EX</span> Examen blanc Bénin : 40 questions tirées au hasard
            </router-link>
          </li>
        </ol>
      </nav>

      <h3 style="margin-top:2.4rem">Chapitre I — Généralités</h3>

      <h4>Catégories de permis</h4>
      <div class="table-scroll">
        <table>
          <thead><tr><th>Permis</th><th>Véhicules autorisés</th><th>Âge minimal</th></tr></thead>
          <tbody>
            <tr v-for="[cat, desc, age] in beninGeneralites.permis" :key="cat">
              <td><strong>{{ cat }}</strong></td><td>{{ desc }}</td><td>{{ age }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>Définitions et rappels</h4>
      <dl class="bj-defs">
        <template v-for="[term, def] in beninGeneralites.definitions" :key="term">
          <dt>{{ term }}</dt>
          <dd>{{ def }}</dd>
        </template>
      </dl>

      <h4>Abréviations</h4>
      <dl class="bj-defs">
        <template v-for="[abbr, meaning] in beninGeneralites.abreviations" :key="abbr">
          <dt>{{ abbr }}</dt>
          <dd>{{ meaning }}</dd>
        </template>
      </dl>
    </section>
  </div>
</template>
