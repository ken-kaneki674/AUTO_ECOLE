<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useQuizProgress } from '../composables/useQuizProgress.js'
import QuestionItem from './QuestionItem.vue'

// Entraînement une question à la fois, avec correction immédiate.
const props = defineProps({
  questions: { type: Array, required: true },
  // Afficher un bouton « Nouvelle série » en fin de série (émet `new-series`).
  canRenew: { type: Boolean, default: false },
})
const emit = defineEmits(['new-series'])

const { getAnswer, resetQuestions, stats } = useQuizProgress()

// Série courante : par défaut toutes les questions reçues, ou seulement les
// erreurs quand on choisit de les rejouer.
const series = ref(props.questions)
const position = ref(0)
const item = ref(null)
const nextBtn = ref(null)

// Après une réponse, le bouton « Suivante » prend le focus : Entrée enchaîne.
function focusNext() {
  nextTick(() => nextBtn.value?.focus())
}

watch(
  () => props.questions,
  (list) => {
    series.value = list
    // Reprend à la première question sans réponse.
    const first = list.findIndex((q) => !getAnswer(q.id))
    position.value = first === -1 ? list.length : first
  },
  { immediate: true }
)

const ids = computed(() => series.value.map((q) => q.id))
const seriesStats = computed(() => stats(ids.value))
const current = computed(() => series.value[position.value])
const finished = computed(() => position.value >= series.value.length)
const errors = computed(() => series.value.filter((q) => getAnswer(q.id)?.correct === false))

function go(delta) {
  position.value = Math.min(Math.max(position.value + delta, 0), series.value.length)
}

function restart(list) {
  resetQuestions(list.map((q) => q.id))
  series.value = list
  position.value = 0
}

function onKey(event) {
  if (finished.value || event.target.closest('input, textarea, select')) return
  if (event.key === 'ArrowRight') go(1)
  else if (event.key === 'ArrowLeft') go(-1)
  else if (event.key === 'Enter') {
    if (event.target.tagName !== 'BUTTON') item.value?.validate()
  } else {
    const index = 'ABCDEFGH'.indexOf(event.key.toUpperCase())
    if (event.key.length === 1 && index >= 0 && index < current.value.choices.length) item.value?.choose(index)
  }
}
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div class="trainer">
    <template v-if="!series.length">
      <p class="trainer-empty">Aucune question ne correspond à ce filtre.</p>
    </template>

    <template v-else-if="!finished">
      <div class="trainer-bar">
        <span>Question <strong>{{ position + 1 }}</strong> / {{ series.length }}</span>
        <span class="progress-badge">
          {{ seriesStats.correct }}/{{ seriesStats.answered }} bonnes
          <span class="bar"><span :style="{ width: (seriesStats.answered / series.length) * 100 + '%' }" /></span>
        </span>
      </div>
      <div class="trainer-card">
        <QuestionItem ref="item" :key="current.id" :question="current" @answered="focusNext">
          <template #after-feedback><slot name="after-feedback" :question="current" /></template>
        </QuestionItem>
        <div class="exam-nav">
          <button type="button" class="exam-btn" :disabled="position === 0" @click="go(-1)">← Précédente</button>
          <button type="button" ref="nextBtn" class="exam-btn primary" @click="go(1)">
            {{ getAnswer(current.id) ? (position === series.length - 1 ? 'Voir le bilan' : 'Suivante →') : 'Passer →' }}
          </button>
        </div>
      </div>
      <p class="exam-legend">Raccourcis clavier : A, B, C… pour répondre · Entrée pour valider · ← → pour naviguer</p>
    </template>

    <div v-else class="exam-result" :class="seriesStats.correct === series.length ? 'ok' : 'ko'">
      <p class="big">{{ seriesStats.correct }} / {{ series.length }}</p>
      <p class="verdict">Bilan de la série</p>
      <p>
        {{ seriesStats.answered }} question(s) répondue(s)
        <template v-if="seriesStats.answered < series.length"> · {{ series.length - seriesStats.answered }} passée(s)</template>
      </p>
      <button v-if="errors.length" type="button" class="exam-btn primary" @click="restart(errors)">
        Rejouer mes {{ errors.length }} erreur(s)
      </button>
      <button type="button" class="exam-btn" @click="restart(series)">Recommencer la série</button>
      <button v-if="canRenew" type="button" class="exam-btn" @click="emit('new-series')">Nouvelle série</button>
    </div>
  </div>
</template>
