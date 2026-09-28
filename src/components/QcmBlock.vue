<script setup>
import { computed, reactive } from 'vue'
import { useQuizProgress, toIndexList } from '../composables/useQuizProgress.js'

const props = defineProps({
  title: { type: String, required: true },
  // [{ id, question, choices, correct, explanation? }]
  // `correct` : indice de la bonne réponse, ou tableau d'indices si plusieurs réponses.
  // Champs facultatifs (banque Bénin) : num, images, needsReview, missingImage.
  questions: { type: Array, required: true },
})

const { answerQuestion, getAnswer, resetQuestions, stats } = useQuizProgress()

const letters = 'ABCDEFGH'
const questionIds = computed(() => props.questions.map((q) => q.id))
const blockStats = computed(() => stats(questionIds.value))

// Cases cochées mais pas encore validées, pour les questions à réponses multiples.
const pending = reactive({})

function isMulti(question) {
  return Array.isArray(question.correct) && question.correct.length > 1
}

function choose(question, index) {
  if (getAnswer(question.id)) return
  if (!isMulti(question)) {
    answerQuestion(question.id, index, question.correct)
    return
  }
  const set = pending[question.id] ?? []
  pending[question.id] = set.includes(index) ? set.filter((i) => i !== index) : [...set, index]
}

function validate(question) {
  const selection = pending[question.id]
  if (!selection?.length) return
  answerQuestion(question.id, selection, question.correct)
  delete pending[question.id]
}

function reset() {
  resetQuestions(questionIds.value)
  for (const id of questionIds.value) delete pending[id]
}

function isSelected(question, index) {
  const answer = getAnswer(question.id)
  if (answer) return toIndexList(answer.selected).includes(index)
  return (pending[question.id] ?? []).includes(index)
}

function choiceClass(question, index) {
  const answer = getAnswer(question.id)
  if (!answer) return { 'is-pending': isSelected(question, index) }
  if (toIndexList(question.correct).includes(index)) return { 'is-correct': true }
  if (isSelected(question, index)) return { 'is-incorrect': true }
  return {}
}

function correctLetters(question) {
  return toIndexList(question.correct).map((i) => letters[i]).join(' · ')
}
</script>

<template>
  <div class="qcm">
    <h4>
      <span>{{ title }} ({{ questions.length }} questions)</span>
      <span class="progress-badge" v-if="blockStats.answered">
        {{ blockStats.correct }}/{{ blockStats.answered }} bonnes réponses
        <span class="bar"><span :style="{ width: blockStats.score + '%' }" /></span>
      </span>
      <button
        v-if="blockStats.answered"
        type="button"
        class="qcm-reset"
        @click="reset"
      >Recommencer</button>
    </h4>

    <div v-for="(question, qi) in questions" :key="question.id" class="q">
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
        {{ question.num ? `Q${question.num}.` : `${qi + 1}.` }} {{ question.question }}
        <span v-if="isMulti(question)" class="q-hint">Plusieurs réponses possibles</span>
        <span v-if="question.needsReview" class="q-review" :title="question.missingImage ? 'Illustration manquante' : 'Corrigé incohérent dans le manuel'">⚠ à vérifier</span>
      </p>
      <ul>
        <li v-for="(choice, ci) in question.choices" :key="ci">
          <button
            type="button"
            class="choice"
            :class="choiceClass(question, ci)"
            :disabled="Boolean(getAnswer(question.id))"
            :aria-pressed="isSelected(question, ci)"
            @click="choose(question, ci)"
          ><b>{{ letters[ci] }}.</b> {{ choice }}</button>
        </li>
      </ul>
      <button
        v-if="isMulti(question) && !getAnswer(question.id)"
        type="button"
        class="qcm-validate"
        :disabled="!pending[question.id]?.length"
        @click="validate(question)"
      >Valider</button>
      <p
        v-if="getAnswer(question.id)"
        class="feedback"
        :class="getAnswer(question.id).correct ? 'ok' : 'ko'"
        aria-live="polite"
      >
        <span class="rep">{{ correctLetters(question) }}</span>
        {{ question.explanation }}
      </p>
    </div>
  </div>
</template>
