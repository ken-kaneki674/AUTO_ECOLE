<script setup>
import { computed } from 'vue'
import { useQuizProgress } from '../composables/useQuizProgress.js'

const props = defineProps({
  title: { type: String, required: true },
  questions: { type: Array, required: true }, // [{ id, question, choices: [4], correct, explanation }]
})

const { answerQuestion, getAnswer, resetQuestions, stats } = useQuizProgress()

const letters = ['A', 'B', 'C', 'D']
const questionIds = computed(() => props.questions.map((q) => q.id))
const blockStats = computed(() => stats(questionIds.value))

function choose(question, index) {
  if (getAnswer(question.id)) return
  answerQuestion(question.id, index, question.correct)
}

function choiceClass(question, index) {
  const answer = getAnswer(question.id)
  if (!answer) return {}
  if (index === question.correct) return { 'is-correct': true }
  if (index === answer.selected) return { 'is-incorrect': true }
  return {}
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
        @click="resetQuestions(questionIds)"
      >Recommencer</button>
    </h4>

    <div v-for="(question, qi) in questions" :key="question.id" class="q">
      <p>{{ qi + 1 }}. {{ question.question }}</p>
      <ul>
        <li v-for="(choice, ci) in question.choices" :key="ci">
          <button
            type="button"
            class="choice"
            :class="choiceClass(question, ci)"
            :disabled="Boolean(getAnswer(question.id))"
            :aria-pressed="getAnswer(question.id)?.selected === ci"
            @click="choose(question, ci)"
          ><b>{{ letters[ci] }}.</b> {{ choice }}</button>
        </li>
      </ul>
      <p
        v-if="getAnswer(question.id)"
        class="feedback"
        :class="getAnswer(question.id).correct ? 'ok' : 'ko'"
        aria-live="polite"
      >
        <span class="rep">{{ letters[question.correct] }}</span>
        {{ question.explanation }}
      </p>
    </div>
  </div>
</template>
