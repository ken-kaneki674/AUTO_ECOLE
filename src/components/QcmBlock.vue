<script setup>
import { computed } from 'vue'
import { useQuizProgress } from '../composables/useQuizProgress.js'
import QuestionItem from './QuestionItem.vue'

const props = defineProps({
  title: { type: String, required: true },
  // Questions au format de QuestionItem.
  questions: { type: Array, required: true },
})

const { resetQuestions, stats } = useQuizProgress()

const questionIds = computed(() => props.questions.map((q) => q.id))
const blockStats = computed(() => stats(questionIds.value))
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

    <QuestionItem
      v-for="(question, qi) in questions"
      :key="question.id"
      :question="question"
      :index="qi + 1"
    >
      <template #after-feedback>
        <slot name="after-feedback" :question="question" />
      </template>
    </QuestionItem>
  </div>
</template>
