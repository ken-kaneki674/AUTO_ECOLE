<script setup>
import { computed, onMounted, onUnmounted, ref, shallowRef, watch } from 'vue'
import { loadExamPool, drawQuestions } from '../data/examPool.js'
import {
  useExamSession,
  EXAM_SIZES,
  SECONDS_PER_QUESTION,
  PASS_RATE,
} from '../composables/useExamSession.js'

const pool = shallowRef(null)
const {
  session,
  history,
  questions,
  status,
  remaining,
  results,
  start,
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
const reviewFilter = ref('ratees')

onMounted(async () => {
  pool.value = await loadExamPool()
  startTicker()
})
onUnmounted(stopTicker)

const current = computed(() => questions.value[session.value?.current ?? 0])
const selected = computed(() => (current.value ? session.value.answers[current.value.key] ?? [] : []))
const unanswered = computed(() =>
  questions.value.filter((q) => !(session.value.answers[q.key] ?? []).length).length
)

function begin() {
  confirmFinish.value = false
  start(drawQuestions(pool.value, size.value), { timed: timed.value })
}

function askFinish() {
  if (unanswered.value || session.value.flagged.length) confirmFinish.value = true
  else finish()
}

watch(status, () => {
  confirmFinish.value = false
  window.scrollTo({ top: 0 })
})

function onKey(event) {
  if (status.value !== 'en-cours' || event.target.closest('input, textarea')) return
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

function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
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

const bestScore = computed(() => Math.max(0, ...history.value.map((h) => Math.round((h.correct / h.total) * 100))))
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
          Questions tirées au hasard dans la banque officielle de la DGTT (environ trois quarts) et dans les QCM du cours.
          <strong>Une question peut avoir une ou plusieurs bonnes réponses</strong> : elle n'est comptée juste que si
          toutes les bonnes réponses, et elles seules, sont cochées. La correction n'apparaît qu'à la fin.
        </p>

        <div class="exam-setup">
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
              Temps limité : {{ size * SECONDS_PER_QUESTION / 60 }} minutes (1 min par question)
            </label>
          </fieldset>
          <p class="exam-rule">
            Seuil de réussite indicatif : <strong>{{ Math.ceil(size * PASS_RATE) }} / {{ size }}</strong>
            ({{ Math.round(PASS_RATE * 100) }} %).
          </p>
          <button type="button" class="exam-btn primary" @click="begin">Commencer l'examen</button>
        </div>

        <div v-if="history.length" class="exam-history">
          <h3>Mes derniers examens</h3>
          <p class="exam-rule">Meilleur score : <strong>{{ bestScore }} %</strong></p>
          <ol>
            <li v-for="h in history" :key="h.date">
              <span class="h-date">{{ formatDate(h.date) }}</span>
              <span class="h-bar"><span :class="h.passed ? 'ok' : 'ko'" :style="{ width: (h.correct / h.total) * 100 + '%' }" /></span>
              <strong>{{ h.correct }}/{{ h.total }}</strong>
              <span class="h-verdict" :class="h.passed ? 'ok' : 'ko'">{{ h.passed ? 'Réussi' : 'Échoué' }}</span>
            </li>
          </ol>
          <button type="button" class="qcm-reset" @click="clearHistory">Effacer l'historique</button>
        </div>
      </template>

      <!-- Examen en cours : une question à la fois -->
      <template v-else-if="status === 'en-cours' && current">
        <div class="exam-bar">
          <span>Question <strong>{{ session.current + 1 }}</strong> / {{ questions.length }}</span>
          <span>{{ questions.length - unanswered }} répondue(s)</span>
          <span v-if="remaining !== null" class="exam-clock" :class="{ low: remaining <= 60 }" role="timer">
            ⏱ {{ clock(remaining) }}
          </span>
        </div>

        <div class="exam-card">
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

        <nav class="exam-grid" aria-label="Aller à une question">
          <button
            v-for="(q, i) in questions"
            :key="q.key"
            type="button"
            :class="cellState(q, i)"
            :aria-current="i === session.current ? 'step' : undefined"
            @click="goTo(i)"
          >{{ i + 1 }}</button>
        </nav>
        <p class="exam-legend">
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
        <p v-else style="text-align:right;margin-top:1rem">
          <button type="button" class="qcm-reset" @click="askFinish">Terminer l'examen</button>
        </p>
      </template>

      <!-- Résultats -->
      <template v-else-if="status === 'resultats' && results">
        <div class="exam-result" :class="results.passed ? 'ok' : 'ko'">
          <p class="big">{{ results.correct }} / {{ results.total }}</p>
          <p class="verdict">{{ results.passed ? 'Réussi' : 'Échoué' }} — {{ results.score }} %</p>
          <p>
            Seuil indicatif : {{ results.threshold }} / {{ results.total }} · Durée : {{ formatTime(results.duration) }}
            <template v-if="session.deadline && remaining === 0"> · temps écoulé</template>
            <template v-if="results.answered < results.total"> · {{ results.total - results.answered }} sans réponse</template>
          </p>
          <button type="button" class="exam-btn primary" @click="begin">Nouvel examen</button>
          <button type="button" class="exam-btn" @click="reset">Retour aux réglages</button>
        </div>

        <h3>Résultats par thème</h3>
        <div class="table-scroll"><table>
          <thead><tr><th>Thème</th><th>Score</th><th>À réviser</th></tr></thead>
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
