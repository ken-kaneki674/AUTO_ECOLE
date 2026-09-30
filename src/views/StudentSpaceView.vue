<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStudentStats, estimatedMinutes } from '../composables/useStudentStats.js'
import { useQuizProgress } from '../composables/useQuizProgress.js'
import { useExamHistory, PASS_RATE } from '../composables/useExamSession.js'

const NAME_KEY = 'code-route-prenom'
const MAX_ERRORS_SERIES = 30

const router = useRouter()
const { ready, global, themes, weakest, recommendation, seriesFor } = useStudentStats()
const { answers, resetQuestions } = useQuizProgress()
const examHistory = useExamHistory()
const threshold = Math.round(PASS_RATE * 100)

// ----- Prénom facultatif, gardé dans ce navigateur uniquement -----
function readName() {
  try {
    return localStorage.getItem(NAME_KEY) ?? ''
  } catch {
    return ''
  }
}
const name = ref(readName())
const editingName = ref(false)
const draftName = ref('')

function editName() {
  draftName.value = name.value
  editingName.value = true
}
function saveName() {
  name.value = draftName.value.trim().slice(0, 40)
  try {
    if (name.value) localStorage.setItem(NAME_KEY, name.value)
    else localStorage.removeItem(NAME_KEY)
  } catch {
    // stockage indisponible : le prénom ne sera pas retenu
  }
  editingName.value = false
}

// ----- Lancement d'une série -----
// Les erreurs de la série sont effacées pour pouvoir y répondre à nouveau ;
// les ids voyagent dans l'URL pour que la série survive au rechargement.
function startSeries(ids, themeId) {
  if (!ids.length) return
  resetQuestions(ids.filter((id) => answers[id]?.correct === false))
  router.push({ name: 'espace-revision', query: { ...(themeId ? { theme: themeId } : {}), ids: ids.join(',') } })
}

const allErrors = computed(() =>
  // Erreurs des thèmes les plus faibles d'abord.
  [...themes.value]
    .sort((a, b) => (a.success ?? 101) - (b.success ?? 101))
    .flatMap((t) => t.errors.map((q) => q.key))
    .slice(0, MAX_ERRORS_SERIES)
)

const lastExam = computed(() => examHistory.value[0] ?? null)
const bestExam = computed(() =>
  examHistory.value.length ? Math.max(...examHistory.value.map((h) => Math.round((h.correct / h.total) * 100))) : null
)

function rateClass(value) {
  if (value === null || value === undefined) return ''
  return value >= threshold ? 'good' : value >= 60 ? 'mid' : 'low'
}
</script>

<template>
  <div class="wrap">
    <section class="chap" id="espace">
      <div class="st-hello">
        <div>
          <p class="eyebrow">Mon espace</p>
          <h2>Bonjour{{ name ? ` ${name}` : '' }} 👋</h2>
        </div>
        <form v-if="editingName" class="st-name" @submit.prevent="saveName">
          <label for="st-name-input" class="bj-search-label">Ton prénom (facultatif)</label>
          <input id="st-name-input" v-model="draftName" type="text" maxlength="40" autocomplete="given-name">
          <button type="submit" class="exam-btn primary">Enregistrer</button>
          <p class="exam-legend">Gardé uniquement dans ce navigateur.</p>
        </form>
        <button v-else type="button" class="qcm-reset" @click="editName">
          {{ name ? 'Modifier mon prénom' : 'Ajouter mon prénom' }}
        </button>
      </div>

      <p v-if="!ready" class="obj">Chargement de ta progression…</p>
      <template v-else>
        <!-- Recommandation automatique -->
        <div v-if="recommendation" class="st-reco" :class="recommendation.kind">
          <p class="st-reco-label">Recommandation du jour</p>
          <p class="st-reco-msg">{{ recommendation.message }}</p>
          <template v-if="recommendation.count">
            <dl class="st-reco-facts">
              <div><dt>Révision recommandée</dt><dd>{{ recommendation.count }} questions</dd></div>
              <div><dt>Durée estimée</dt><dd>{{ recommendation.minutes }} minutes</dd></div>
            </dl>
            <button type="button" class="exam-btn primary" @click="startSeries(recommendation.ids, recommendation.theme?.id)">
              Commencer la révision →
            </button>
          </template>
          <router-link v-else :to="{ name: 'examen' }" class="exam-btn primary st-link-btn">Passer un examen blanc →</router-link>
          <button
            v-if="allErrors.length && recommendation.kind !== 'demarrage'"
            type="button"
            class="exam-btn"
            @click="startSeries(allErrors)"
          >Réviser toutes mes erreurs ({{ global.errors }})</button>
        </div>

        <!-- Tableau de bord -->
        <template v-if="global.answered">
          <h3 class="st-h">Tableau de bord</h3>
          <div class="st-tiles">
            <div class="bj-tile" :class="rateClass(global.success)">
              <span class="k">Progression générale</span>
              <span class="v">{{ global.progress }} %</span>
              <span class="bar"><span :style="{ width: global.progress + '%' }" /></span>
            </div>
            <div class="bj-tile">
              <span class="k">Questions réalisées</span>
              <span class="v">{{ global.answered }}<small>/{{ global.total }}</small></span>
            </div>
            <div class="bj-tile good">
              <span class="k">Bonnes réponses</span>
              <span class="v">{{ global.correct }}</span>
              <span class="l">{{ global.success }} % de réussite</span>
            </div>
            <div class="bj-tile" :class="global.errors ? 'low' : ''">
              <span class="k">Erreurs</span>
              <span class="v">{{ global.errors }}</span>
            </div>
          </div>
          <p class="st-exam">
            <template v-if="lastExam">
              Dernier examen blanc : <strong>{{ lastExam.correct }}/{{ lastExam.total }}</strong>
              ({{ lastExam.passed ? 'réussi' : 'échoué' }}) · meilleur score : <strong>{{ bestExam }} %</strong> ·
            </template>
            <template v-else>Pas encore d’examen blanc · </template>
            <router-link :to="{ name: 'examen' }">Examen blanc →</router-link>
          </p>
        </template>

        <!-- Mes thèmes -->
        <h3 class="st-h">Mes thèmes</h3>
        <div class="st-themes">
          <details v-for="t in themes" :key="t.id" class="st-theme">
            <summary>
              <span class="st-theme-name">{{ t.label }}</span>
              <span class="h-bar" :title="t.success === null ? 'Pas encore commencé' : `${t.success} % de réussite`">
                <span :class="rateClass(t.success)" :style="{ width: (t.success ?? 0) + '%' }" />
              </span>
              <span class="st-theme-rate" :class="rateClass(t.success)">{{ t.success === null ? '—' : `${t.success} %` }}</span>
              <span class="st-theme-cover">{{ t.answered }}/{{ t.total }} vues</span>
            </summary>
            <ul class="st-chapters">
              <li v-for="c in t.detail" :key="c.key">
                <router-link :to="c.to">{{ c.label }}</router-link>
                <span class="st-chapter-stats">
                  {{ c.answered }}/{{ c.total }} faites<template v-if="c.success !== null"> · {{ c.success }} % de réussite</template>
                </span>
              </li>
            </ul>
            <button
              v-if="t.errors.length || t.fresh.length"
              type="button"
              class="exam-btn"
              @click="startSeries(seriesFor(t), t.id)"
            >Réviser ce thème ({{ Math.min(15, t.errors.length + t.fresh.length) }} questions, ~{{ estimatedMinutes(Math.min(15, t.errors.length + t.fresh.length)) }} min)</button>
          </details>
        </div>

        <!-- Mes points faibles -->
        <template v-if="weakest.length">
          <h3 class="st-h">Mes points faibles</h3>
          <ol class="st-weak">
            <li v-for="t in weakest" :key="t.id">
              <span class="st-weak-name">{{ t.label }}</span>
              <span class="st-theme-rate" :class="rateClass(t.success)">{{ t.success }} %</span>
              <span class="st-weak-errors">{{ t.errors.length }} erreur(s)</span>
              <button type="button" class="exam-btn" @click="startSeries(seriesFor(t), t.id)">Réviser</button>
            </li>
          </ol>
        </template>
        <p v-else-if="global.answered" class="exam-legend">
          Tes points faibles apparaîtront quand tu auras répondu à au moins 5 questions d’un thème.
        </p>
      </template>
    </section>
  </div>
</template>
