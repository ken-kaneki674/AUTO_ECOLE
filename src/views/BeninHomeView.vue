<script setup>
import { computed, ref } from 'vue'
import AttentionBox from '../components/AttentionBox.vue'
import BeninSearch from '../components/BeninSearch.vue'
import { useQuizProgress } from '../composables/useQuizProgress.js'
import {
  beninSource,
  beninChapters,
  beninQuestionIds,
  beninAllQuestionIds,
  beninGeneralites,
  loadResume,
} from '../data/benin/meta.js'

const { stats } = useQuizProgress()

const global = computed(() => {
  const s = stats(beninAllQuestionIds())
  return {
    ...s,
    errors: s.answered - s.correct,
    success: s.answered ? Math.round((s.correct / s.answered) * 100) : 0,
  }
})

const chapterCards = computed(() =>
  beninChapters.map((chapter) => {
    const s = stats(beninQuestionIds(chapter.num))
    return {
      ...chapter,
      ...s,
      success: s.answered ? Math.round((s.correct / s.answered) * 100) : null,
    }
  })
)

// Chapitres où le taux de réussite est le plus bas (au moins 5 réponses).
const weakest = computed(() =>
  chapterCards.value
    .filter((c) => c.answered >= 5 && c.success < 100)
    .sort((a, b) => a.success - b.success)
    .slice(0, 3)
)

const resume = ref(loadResume())
const resumeChapter = computed(() => beninChapters.find((c) => c.num === resume.value?.chapter))
const resumeLink = computed(() => {
  const r = resume.value
  const query = {}
  if (r.filter && r.filter !== 'toutes') query.filtre = r.filter
  if (r.mode === 'cartes') query.mode = 'cartes'
  if (r.page > 1) query.page = r.page
  return { name: 'benin-chapitre', params: { id: String(r.chapter) }, query }
})

function successClass(value) {
  if (value === null) return ''
  return value >= 85 ? 'good' : value >= 60 ? 'mid' : 'low'
}
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
        Beaucoup de questions ont <strong>plusieurs bonnes réponses</strong> : coche-les toutes puis valide.
      </p>

      <!-- Tableau de bord -->
      <div class="bj-dash" aria-label="Ma progression">
        <div class="bj-tile">
          <span class="v">{{ global.answered }}<small>/{{ global.total }}</small></span>
          <span class="l">questions faites</span>
          <span class="bar"><span :style="{ width: global.percent + '%' }" /></span>
        </div>
        <div class="bj-tile" :class="successClass(global.answered ? global.success : null)">
          <span class="v">{{ global.answered ? global.success + ' %' : '—' }}</span>
          <span class="l">de bonnes réponses</span>
        </div>
        <div class="bj-tile">
          <span class="v">{{ global.errors }}</span>
          <span class="l">erreurs à revoir</span>
        </div>
      </div>

      <div class="bj-actions">
        <router-link v-if="resumeChapter" :to="resumeLink" class="exam-btn primary">
          Reprendre : chapitre {{ resumeChapter.roman }}<template v-if="resume.page > 1">, page {{ resume.page }}</template>
        </router-link>
        <router-link v-if="global.errors" :to="{ name: 'benin-entrainement', query: { filtre: 'ratees' } }" class="exam-btn">
          Réviser mes erreurs ({{ global.errors }})
        </router-link>
        <router-link v-if="global.answered < global.total" :to="{ name: 'benin-entrainement', query: { filtre: 'nouvelles' } }" class="exam-btn">
          20 nouvelles questions
        </router-link>
        <router-link :to="{ name: 'benin-entrainement' }" class="exam-btn">20 questions au hasard</router-link>
        <router-link :to="{ name: 'examen' }" class="exam-btn">Examen blanc</router-link>
      </div>

      <p v-if="weakest.length" class="bj-weak">
        <strong>Points faibles :</strong>
        <template v-for="(c, i) in weakest" :key="c.num">
          <router-link :to="{ name: 'benin-entrainement', query: { chapitre: c.num, filtre: 'ratees' } }">
            {{ c.roman }}. {{ c.title }} ({{ c.success }} %)</router-link><template v-if="i < weakest.length - 1"> · </template>
        </template>
      </p>

      <!-- Recherche -->
      <BeninSearch />

      <!-- Chapitres -->
      <h3>Chapitres du manuel</h3>
      <ul class="bj-cards">
        <li v-for="c in chapterCards" :key="c.num">
          <router-link :to="{ name: 'benin-chapitre', params: { id: String(c.num) } }" class="bj-card">
            <span class="n">{{ c.roman }}</span>
            <span class="t">{{ c.title }}</span>
            <span class="meta">
              {{ c.total }} questions
              <template v-if="c.answered"> · {{ c.answered }} faites</template>
            </span>
            <span class="bar"><span :style="{ width: c.percent + '%' }" /></span>
            <span v-if="c.success !== null" class="score" :class="successClass(c.success)">{{ c.success }} % de réussite</span>
            <span v-else class="score">Pas encore commencé</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'benin-panneaux' }" class="bj-card special">
            <span class="n">▲</span>
            <span class="t">Catalogue des panneaux et illustrations</span>
            <span class="meta">Toutes les images du manuel, reliées à leurs questions</span>
          </router-link>
        </li>
      </ul>

      <AttentionBox label="À savoir" style="margin-top:26px">
        Les questions et corrigés sont repris du manuel de 2011. Quelques corrigés y sont incohérents et certaines
        illustrations n’ont pas pu être récupérées : ces questions sont marquées « ⚠ à vérifier ». En cas de doute,
        fie-toi à ton moniteur d’auto-école.
      </AttentionBox>

      <!-- Généralités (chapitre I) -->
      <h3>Chapitre I — Généralités</h3>
      <details class="bj-details">
        <summary>Catégories de permis</summary>
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
      </details>
      <details class="bj-details">
        <summary>Définitions et rappels</summary>
        <dl class="bj-defs">
          <template v-for="[term, def] in beninGeneralites.definitions" :key="term">
            <dt>{{ term }}</dt>
            <dd>{{ def }}</dd>
          </template>
        </dl>
      </details>
      <details class="bj-details">
        <summary>Abréviations</summary>
        <dl class="bj-defs">
          <template v-for="[abbr, meaning] in beninGeneralites.abreviations" :key="abbr">
            <dt>{{ abbr }}</dt>
            <dd>{{ meaning }}</dd>
          </template>
        </dl>
      </details>
    </section>
  </div>
</template>
