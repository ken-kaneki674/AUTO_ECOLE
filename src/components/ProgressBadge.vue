<script setup>
import { computed } from 'vue'
import { useQuizProgress } from '../composables/useQuizProgress.js'

const props = defineProps({
  questionIds: { type: Array, required: true },
})

const { stats } = useQuizProgress()
const s = computed(() => stats(props.questionIds))
</script>

<template>
  <span v-if="s.total" class="progress-badge">
    <span class="bar"><span :style="{ width: s.percent + '%' }" /></span>
    <span v-if="s.answered">{{ s.answered }}/{{ s.total }}</span>
  </span>
</template>
