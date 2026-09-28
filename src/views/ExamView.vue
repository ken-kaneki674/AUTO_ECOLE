<script setup>
import { computed, onMounted, onUnmounted, ref, shallowRef, watch } from 'vue'
import { loadExamPool, drawQuestions, filterPool, EXAM_THEMES } from '../data/examPool.js'
import {
  useExamSession,
  EXAM_SIZES,
  SECONDS_PER_QUESTION,
  PASS_RATE,
} from '../composables/useExamSession.js'
import { useQuizProgress } from '../composables/useQuizProgress.js'
import ExamHistory from '../components/ExamHistory.vue'
import QuestionTrainer from '../components/QuestionTrainer.vue'

const pool = shallowRef(null)
const {
  session,
  history,
  questions,
  status,
  remaining,
  paused,
  alertMessage,
  results,
  start,
  pause,
  resume,
  abandon,
  toggleChoice,
  toggleFlag,
  goTo,
  finish,
  reset,
  clearHistory,
  startTicker,
  stopTicker,
} = useExamSession(pool)

const letters = 'ABCDEFGH'
const size = ref(40)
const timed = ref(true)
const confirmFinish = ref(false)
const confirmAbandon = ref(false)
const reviewFilter = ref('ratees')

// Contenu de l'examen : source des questions et thèmes (aucun thème coché = tous).
const source = ref(session.value?.config?.source ?? 'mixte')
const themes = ref([...(session.value?.config?.themes ?? [])])
const sources = [
  { id: 'mixte', label: 'Mixte (≈ 3/4 manuel DGTT, 1/4 cours)' },
  { id: 'dgtt', label: 'Manuel DGTT seul' },
  { id: 'cours', label: 'Cours seul' },
]

onMounted(async () => {
  pool.value = await loadExamPool()
  startTicker()
})

const available = computed(() =>
  pool.value ? filterPool(pool.value, { source: source.value, themes: themes.value }).length : 0
)
const themeCounts = computed(() =>
  Object.fromEntries(
    EXAM_THEMES.map((t) => [t.id, pool.value ? filterPool(pool.value, { source: source.value, themes: [t.id] }).length : 0])
  )
)
const examSize = computed(() => Math.min(size.value, available.value))
onUnmounted(stopTicker)

const current = computed(() => questions.value[session.value?.current ?? 0])
const selected = computed(() => (current.value ? session.value.answers[current.value.key] ?? [] : []))
const unanswered = computed(() =>
  questions.value.filter((q) => !(session.value.answers[q.key] ?? []).length).length
)

function begin() {
  confirmFinish.value = false
  confirmAbandon.value = false
  retry.value = null
  const config = { source: source.value, themes: [...themes.value] }
  start(drawQuestions(pool.value, examSize.value, config), { timed: timed.value, config })
}

function quit() {
  confirmAbandon.value = false
  abandon()
}

// Révision des erreurs juste après l'examen, une question à la fois. Les questions
// reçoivent un identifiant propre pour ne pas écraser la progression enregistrée.
const { resetQuestions } = useQuizProgress()
const retry = ref(null)
function startRetry() {
  const list = results.value.detail
    .filter((d) => !d.ok)
    .map(({ question: q }) => ({
      id: `revoir-${q.key}`,
      num: q.num,
      question: q.question,
      choices: q.choices,
      correct: q.correct,
      explanation: q.explanation,
      images: q.images,
      to: q.to,
    }))
  resetQuestions(list.map((q) => q.id))
  retry.value = list
  window.scrollTo({ top: 0 })
}

function askFinish() {
  if (unanswered.value || session.value.flagged.length) confirmFinish.value = true
  else finish()
}

watch(status, () => {
  confirmFinish.value = false
  confirmAbandon.value = false
  retry.value = null
  window.scrollTo({ top: 0 })
})

function onKey(event) {
  if (status.value !== 'en-cours' || paused.value || event.target.closest('input, textarea')) return
  if (event.key === 'ArrowRight') goTo(session.value.current + 1)
  else if (event.key === 'ArrowLeft') goTo(session.value.current - 1)
  else {
    const index = letters.indexOf(event.key.toUpperCase())
    if (index >= 0 && index < current.value.choices.length) toggleChoice(current.value.key, index)
  }
}
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = String(seconds % 60).padStart(2, '0')
  return `${m} min ${s} s`
}

function clock(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`
}

function cellState(q, i) {
  return {
    'is-current': i === session.value.current,
    'is-answered': (session.value.answers[q.key] ?? []).length > 0,
    'is-flagged': session.value.flagged.includes(q.key),
  }
}

const reviewList = computed(() => {
  const detail = results.value?.detail ?? []
  return reviewFilter.value === 'ratees' ? detail.filter((d) => !d.ok) : detail
})
</script>

<template>
  <div class="wrap">
    <section class="chap" id="examen">
      <div class="chap-head" style="background:var(--asphalte)">
        <span class="borne" style="color:var(--asphalte)">EX</span>
        <div><span class="fil" style="color:var(--ambre)">Évaluation</span><h2>Examen blanc</h2></div>
      </div>

      <p v-if="!pool" class="obj">Chargement de la banque de questions…</p>

      <!-- Accueil : réglages et historique -->
      <template v-else-if="status === 'accueil'">
        <p class="obj">
          <b>Règle du jeu</b>
          Questions tirées au hasard dans la banque officielle de la DGTT et dans les QCM du cours, selon les réglages ci-dessous.
          <strong>Une question peut avoir une ou plusieurs bonnes réponses</strong> : elle n'est comptée juste que si
          toutes les bonnes réponses, et elles seules, sont cochées. La correction n'apparaît qu'à la fin.
        </p>

        <div class="exam-setup">
          <fieldset>
            <legend>Questions</legend>
            <label v-for="src in sources" :key="src.id" class="exam-option">
              <input v-model="source" type="radio" :value="src.id"> {{ src.label }}
            </label>
          </fieldset>
          <fieldset>
            <legend>Thèmes <span class="exam-legend-inline">— aucun coché = tous les thèmes</span></legend>
            <div class="exam-themes">
              <label v-for="t in EXAM_THEMES" :key="t.id" class="exam-theme" :class="{ empty: !themeCounts[t.id] }">
                <input v-model="themes" type="checkbox" :value="t.id" :disabled="!themeCounts[t.id]">
                <span>{{ t.label }}</span>
                <small>{{ themeCounts[t.id] }}</small>
              </label>
            </div>
            <button v-if="themes.length" type="button" class="qcm-reset" @click="themes = []">Tous les thèmes</button>
          </fieldset>
          <fieldset>
            <legend>Nombre de questions</legend>
            <label v-for="n in EXAM_SIZES" :key="n" class="exam-option">
              <input v-model="size" type="radio" :value="n"> {{ n }} questions
            </label>
          </fieldset>
          <fieldset>
            <legend>Chronomètre</legend>
            <label class="exam-option">
              <input v-model="timed" type="checkbox">
              Temps limité : {{ examSize * SECONDS_PER_QUESTION / 60 }} minutes (1 min par question)
            </label>
          </fieldset>
          <p class="exam-rule">
            <strong>{{ available }}</strong> questions disponibles avec ces réglages.
            <template v-if="available && available < size">L'examen comptera donc {{ examSize }} questions.</template>
            <br>Seuil de réussite indicatif : <strong>{{ Math.ceil(examSize * PASS_RATE) }} / {{ examSize }}</strong>
            ({{ Math.round(PASS_RATE * 100) }} %).
          </p>
          <button type="button" class="exam-btn primary" :disabled="!examSize" @click="begin">Commencer l'examen</button>
        </div>

        <ExamHistory v-if="history.length" :history="history" @clear="clearHistory" />
      </template>

      <!-- Examen en cours : une question à la fois -->
      <template v-else-if="status === 'en-cours' && current">
        <div class="exam-bar">
          <span>Question <strong>{{ session.current + 1 }}</strong> / {{ questions.length }}</span>
          <span>{{ questions.length - unanswered }} répondue(s)</span>
          <span class="exam-bar-right">
            <span v-if="remaining !== null" class="exam-clock" :class="{ low: remaining <= 60, warn: remaining <= 300 }" role="timer">
              ⏱ {{ clock(remaining) }}
            </span>
            <button type="button" class="exam-pause" @click="paused ? resume() : pause()">
              {{ paused ? '▶ Reprendre' : '❚❚ Pause' }}
            </button>
          </span>
          <span class="exam-progress" aria-hidden="true">
            <span :style="{ width: ((questions.length - unanswered) / questions.length) * 100 + '%' }" />
          </span>
        </div>
        <p v-if="alertMessage" class="exam-alert" role="alert">⏱ {{ alertMessage }}</p>

        <div v-if="paused" class="exam-paused">
          <p class="big">Examen en pause</p>
          <p>Le chronomètre est arrêté et la question est masquée.</p>
          <button type="button" class="exam-btn primary" @click="resume">▶ Reprendre l'examen</button>
        </div>

        <div v-else class="exam-card">
          <p class="exam-source">
            {{ current.source === 'dgtt' ? `Manuel DGTT · Q${current.num}` : 'Cours' }}
          </p>
          <div v-if="current.images?.length" class="q-images">
            <img v-for="src in current.images" :key="src" :src="src" alt="Illustration de la question">
          </div>
          <p class="exam-question">{{ current.question }}</p>
          <p class="exam-hint">Coche la ou les bonnes réponses.</p>
          <ul class="exam-choices">
            <li v-for="(choice, ci) in current.choices" :key="ci">
              <button
                type="button"
                class="choice"
                :class="{ 'is-pending': selected.includes(ci) }"
                :aria-pressed="selected.includes(ci)"
                @click="toggleChoice(current.key, ci)"
              ><b>{{ letters[ci] }}.</b> {{ choice }}</button>
            </li>
          </ul>

          <div class="exam-nav">
            <button type="button" class="exam-btn" :disabled="session.current === 0" @click="goTo(session.current - 1)">← Précédente</button>
            <button
              type="button"
              class="exam-btn flag"
              :aria-pressed="session.flagged.includes(current.key)"
              @click="toggleFlag(current.key)"
            >{{ session.flagged.includes(current.key) ? '★ À revoir' : '☆ Marquer à revoir' }}</button>
            <button
              v-if="session.current < questions.length - 1"
              type="button"
              class="exam-btn primary"
              @click="goTo(session.current + 1)"
            >Suivante →</button>
            <button v-else type="button" class="exam-btn primary" @click="askFinish">Terminer</button>
          </div>
        </div>

        <nav v-if="!paused" class="exam-grid" aria-label="Aller à une question">
          <button
            v-for="(q, i) in questions"
            :key="q.key"
            type="button"
            :class="cellState(q, i)"
            :aria-current="i === session.current ? 'step' : undefined"
            @click="goTo(i)"
          >{{ i + 1 }}</button>
        </nav>
        <p v-if="!paused" class="exam-legend">
          <span class="lg answered" /> répondue · <span class="lg flagged" /> à revoir · <span class="lg" /> sans réponse
          · raccourcis clavier : ← → et A, B, C…
        </p>

        <div v-if="confirmFinish" class="exam-confirm" role="alertdialog" aria-live="assertive">
          <p>
            <template v-if="unanswered">Il reste <strong>{{ unanswered }} question(s) sans réponse</strong>. </template>
            <template v-if="session.flagged.length"><strong>{{ session.flagged.length }} question(s)</strong> marquée(s) à revoir. </template>
            Terminer quand même ?
          </p>
          <button type="button" class="exam-btn primary" @click="finish">Oui, terminer</button>
          <button type="button" class="exam-btn" @click="confirmFinish = false">Continuer l'examen</button>
        </div>
        <div v-else-if="confirmAbandon" class="exam-confirm" role="alertdialog" aria-live="assertive">
          <p>Abandonner l'examen ? Tes réponses seront perdues et l'examen ne comptera pas dans l'historique.</p>
          <button type="button" class="exam-btn primary" @click="quit">Oui, abandonner</button>
          <button type="button" class="exam-btn" @click="confirmAbandon = false">Continuer l'examen</button>
        </div>
        <p v-else-if="!paused" class="exam-end-actions">
          <button type="button" class="qcm-reset" @click="confirmAbandon = true">Abandonner</button>
          <button type="button" class="qcm-reset" @click="askFinish">Terminer l'examen</button>
        </p>
      </template>

      <!-- Résultats -->
      <template v-else-if="status === 'resultats' && results && retry">
        <p class="exam-retry-head">
          <button type="button" class="qcm-reset" @click="retry = null">← Retour aux résultats</button>
          <span>Révision des {{ retry.length }} erreur(s) de l'examen — correction immédiate</span>
        </p>
        <QuestionTrainer :questions="retry">
          <template #after-feedback="{ question }">
            <router-link :to="question.to">Revoir le chapitre →</router-link>
          </template>
        </QuestionTrainer>
      </template>

      <template v-else-if="status === 'resultats' && results">
        <div class="exam-result" :class="results.passed ? 'ok' : 'ko'">
          <p class="big">{{ results.correct }} / {{ results.total }}</p>
          <p class="verdict">{{ results.passed ? 'Réussi' : 'Échoué' }} — {{ results.score }} %</p>
          <p>
            Seuil indicatif : {{ results.threshold }} / {{ results.total }} · Durée : {{ formatTime(results.duration) }}
            <template v-if="session.deadline && remaining === 0"> · temps écoulé</template>
            <template v-if="results.answered < results.total"> · {{ results.total - results.answered }} sans réponse</template>
          </p>
          <button v-if="results.correct < results.total" type="button" class="exam-btn primary" @click="startRetry">
            S'entraîner sur mes {{ results.total - results.correct }} erreur(s)
          </button>
          <button type="button" class="exam-btn" :class="{ primary: results.correct === results.total }" @click="begin">Nouvel examen</button>
          <button type="button" class="exam-btn" @click="reset">Réglages et historique</button>
          <p class="exam-legend">
            Tes réponses comptent dans ta progression : les erreurs sur les questions officielles se retrouvent dans
            <router-link :to="{ name: 'benin-entrainement', query: { filtre: 'ratees' } }">Réviser mes erreurs</router-link>.
          </p>
        </div>

        <h3>Résultats par thème</h3>
        <ul class="exam-theme-scores">
          <li v-for="t in results.themes" :key="t.id">
            <span>{{ t.label }}</span>
            <span class="h-bar"><span :class="t.correct / t.total >= PASS_RATE ? 'ok' : 'ko'" :style="{ width: (t.correct / t.total) * 100 + '%' }" /></span>
            <strong>{{ t.correct }}/{{ t.total }}</strong>
          </li>
        </ul>

        <h3>Résultats par chapitre</h3>
        <div class="table-scroll"><table>
          <thead><tr><th>Chapitre</th><th>Score</th><th>À réviser</th></tr></thead>
          <tbody>
            <tr v-for="g in results.groups" :key="g.name">
              <td>{{ g.name }}</td>
              <td><strong>{{ g.correct }}/{{ g.total }}</strong></td>
              <td><router-link v-if="g.correct < g.total" :to="g.to">Revoir →</router-link></td>
            </tr>
          </tbody>
        </table></div>

        <h3>Correction</h3>
        <div class="bj-filters">
          <label><input v-model="reviewFilter" type="radio" value="ratees"> Questions ratées ({{ results.total - results.correct }})</label>
          <label><input v-model="reviewFilter" type="radio" value="toutes"> Toutes les questions</label>
        </div>
        <p v-if="!reviewList.length">Aucune erreur, bravo !</p>
        <div v-for="d in reviewList" :key="d.question.key" class="q exam-review" :class="d.ok ? 'ok' : 'ko'">
          <div v-if="d.question.images?.length" class="q-images">
            <img v-for="src in d.question.images" :key="src" :src="src" alt="Illustration de la question" loading="lazy">
          </div>
          <p>
            {{ results.detail.indexOf(d) + 1 }}. {{ d.question.question }}
            <span class="exam-source">{{ d.question.source === 'dgtt' ? `DGTT Q${d.question.num}` : 'Cours' }}</span>
          </p>
          <ul>
            <li v-for="(choice, ci) in d.question.choices" :key="ci">
              <span
                class="choice"
                :class="{
                  'is-correct': d.question.correct.includes(ci),
                  'is-incorrect': d.selected.includes(ci) && !d.question.correct.includes(ci),
                }"
              ><b>{{ letters[ci] }}.</b> {{ choice }}
                <em v-if="d.selected.includes(ci)" class="mine">ta réponse</em></span>
            </li>
          </ul>
          <p class="feedback" :class="d.ok ? 'ok' : 'ko'">
            <span class="rep">{{ d.question.correct.map((i) => letters[i]).join(' · ') }}</span>
            <template v-if="!d.selected.length">Pas de réponse. </template>
            {{ d.question.explanation }}
            <router-link :to="d.question.to">Revoir le chapitre →</router-link>
          </p>
        </div>
      </template>
    </section>
  </div>
</template>
