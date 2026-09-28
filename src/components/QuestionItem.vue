<script setup>
import { computed, ref } from 'vue'
import { useQuizProgress, toIndexList } from '../composables/useQuizProgress.js'

// Une question de QCM : choix, validation (plusieurs réponses possibles),
// correction. La réponse est enregistrée dans la progression commune.
const props = defineProps({
  // { id, question, choices, correct, explanation?, num?, images?, needsReview?, missingImage? }
  // `correct` : indice de la bonne réponse, ou tableau d'indices si plusieurs réponses.
  question: { type: Object, required: true },
  // Numéro affiché quand la question n'a pas de numéro du manuel.
  index: { type: Number, default: null },
})
const emit = defineEmits(['answered'])

const { answerQuestion, getAnswer } = useQuizProgress()

const letters = 'ABCDEFGH'
// Cases cochées mais pas encore validées, pour les questions à réponses multiples.
const pending = ref([])

const answer = computed(() => getAnswer(props.question.id))
const isMulti = computed(() => Array.isArray(props.question.correct) && props.question.correct.length > 1)
const label = computed(() => (props.question.num ? `Q${props.question.num}.` : props.index ? `${props.index}.` : ''))

function submit(selection) {
  answerQuestion(props.question.id, selection, props.question.correct)
  pending.value = []
  emit('answered', getAnswer(props.question.id).correct)
}

function choose(index) {
  if (answer.value) return
  if (!isMulti.value) {
    submit(index)
    return
  }
  pending.value = pending.value.includes(index)
    ? pending.value.filter((i) => i !== index)
    : [...pending.value, index]
}

function validate() {
  if (pending.value.length) submit(pending.value)
}

function isSelected(index) {
  if (answer.value) return toIndexList(answer.value.selected).includes(index)
  return pending.value.includes(index)
}

function choiceClass(index) {
  if (!answer.value) return { 'is-pending': isSelected(index) }
  if (toIndexList(props.question.correct).includes(index)) return { 'is-correct': true }
  if (isSelected(index)) return { 'is-incorrect': true }
  return {}
}

const correctLetters = computed(() =>
  toIndexList(props.question.correct).map((i) => letters[i]).join(' · ')
)

defineExpose({ choose, validate, isMulti })
</script>

<template>
  <div class="q">
    <div v-if="question.images?.length" class="q-images">
      <img
        v-for="src in question.images"
        :key="src"
        :src="src"
        alt="Illustration de la question"
        loading="lazy"
      >
    </div>
    <p>
      {{ label }} {{ question.question }}
      <span v-if="isMulti" class="q-hint">Plusieurs réponses possibles</span>
      <span v-if="question.needsReview" class="q-review" :title="question.missingImage ? 'Illustration manquante' : 'Corrigé incohérent dans le manuel'">⚠ à vérifier</span>
    </p>
    <ul>
      <li v-for="(choice, ci) in question.choices" :key="ci">
        <button
          type="button"
          class="choice"
          :class="choiceClass(ci)"
          :disabled="Boolean(answer)"
          :aria-pressed="isSelected(ci)"
          @click="choose(ci)"
        ><b>{{ letters[ci] }}.</b> {{ choice }}</button>
      </li>
    </ul>
    <button
      v-if="isMulti && !answer"
      type="button"
      class="qcm-validate"
      :disabled="!pending.length"
      @click="validate"
    >Valider</button>
    <p
      v-if="answer"
      class="feedback"
      :class="answer.correct ? 'ok' : 'ko'"
      aria-live="polite"
    >
      <span class="rep">{{ correctLetters }}</span>
      {{ question.explanation }}
      <slot name="after-feedback" />
    </p>
  </div>
</template>
