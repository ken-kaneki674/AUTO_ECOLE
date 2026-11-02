<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { getRevisionQuestions, REVISION_THEMES, getRevisionSujets } from '../data/revisionQuestions.js'
import { useRevisionScoring } from '../composables/useRevisionScoring.js'
import { getQuestionMedia } from '../data/mediaMapping.js'

const props = defineProps({
  sujetId: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['completed', 'progress'])

const {
  startSession,
  recordAnswer,
  finishSession,
  getSessionProgress
} = useRevisionScoring()

const sujetInfo = computed(() => {
  const sujets = getRevisionSujets()
  return sujets.find(s => s.id === props.sujetId)
})

const questions = computed(() => getRevisionQuestions(props.sujetId))
const currentIndex = ref(0)
const answers = ref({})
const showResults = ref(false)
const showExplanation = ref(false)
const playingAudio = ref(null)
const audioPlayers = ref([])

const currentQuestion = computed(() => questions.value[currentIndex.value])
const progress = computed(() => ((currentIndex.value + 1) / questions.value.length) * 100)

// Get media files for current question
const questionMedia = computed(() => {
  if (!currentQuestion.value) return { audios: [], images: [] }
  return getQuestionMedia(props.sujetId, currentQuestion.value.id)
})

const userAnswer = computed(() => answers.value[currentQuestion.value?.id])
const isMulti = computed(() => currentQuestion.value?.correct?.length > 1)
const isAnswered = computed(() => userAnswer.value !== undefined)

const pendingAnswers = ref([])

function selectOption(index) {
  if (isAnswered.value) return

  if (!isMulti.value) {
    // Réponse unique
    const selectedAnswer = [index]
    answers.value[currentQuestion.value.id] = selectedAnswer
    showExplanation.value = true

    const isCorrect = checkAnswer(selectedAnswer, currentQuestion.value.correct)
    recordAnswer(currentQuestion.value.id, selectedAnswer, isCorrect)

    emit('progress', {
      questionId: currentQuestion.value.id,
      correct: isCorrect
    })
  } else {
    // Réponses multiples
    if (pendingAnswers.value.includes(index)) {
      pendingAnswers.value = pendingAnswers.value.filter(i => i !== index)
    } else {
      pendingAnswers.value.push(index)
    }
  }
}

function validateMultiple() {
  if (pendingAnswers.value.length === 0) return

  const selectedAnswer = [...pendingAnswers.value]
  answers.value[currentQuestion.value.id] = selectedAnswer
  pendingAnswers.value = []
  showExplanation.value = true

  const isCorrect = checkAnswer(selectedAnswer, currentQuestion.value.correct)
  recordAnswer(currentQuestion.value.id, selectedAnswer, isCorrect)

  emit('progress', {
    questionId: currentQuestion.value.id,
    correct: isCorrect
  })
}

function checkAnswer(selected, correct) {
  if (!selected || !correct) return false
  const sortedSelected = [...selected].sort((a, b) => a - b)
  const sortedCorrect = [...correct].sort((a, b) => a - b)
  return sortedSelected.length === sortedCorrect.length &&
         sortedSelected.every((val, index) => val === sortedCorrect[index])
}

function isCorrect(index) {
  if (!currentQuestion.value) return false
  return currentQuestion.value.correct.includes(index)
}

function isSelected(index) {
  if (!userAnswer.value) return pendingAnswers.value.includes(index)
  return userAnswer.value.includes(index)
}

function getOptionClass(index) {
  if (!isAnswered.value) {
    return {
      'selected': isSelected(index),
      'hoverable': true
    }
  }

  if (isCorrect(index)) {
    return 'correct'
  }
  if (isSelected(index) && !isCorrect(index)) {
    return 'incorrect'
  }
  return ''
}

function nextQuestion() {
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++
    showExplanation.value = false
    pendingAnswers.value = []
  } else {
    finishQuiz()
  }
}

function previousQuestion() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    showExplanation.value = answers.value[currentQuestion.value.id] !== undefined
    pendingAnswers.value = []
  }
}

function finishQuiz() {
  const results = calculateResults()
  const finalResults = finishSession(results)
  showResults.value = true
  emit('completed', finalResults)
}

function calculateResults() {
  let correct = 0
  const details = questions.value.map(q => {
    const userAns = answers.value[q.id] || []
    const isCorrect = checkAnswer(userAns, q.correct)
    if (isCorrect) correct++
    return {
      question: q,
      userAnswer: userAns,
      correct: isCorrect
    }
  })

  return {
    total: questions.value.length,
    correct,
    score: Math.round((correct / questions.value.length) * 20),
    details,
    themes: calculateThemeResults(details)
  }
}

function calculateThemeResults(details) {
  const themeStats = {}
  REVISION_THEMES.forEach(theme => {
    themeStats[theme.id] = {
      label: theme.label,
      total: 0,
      correct: 0
    }
  })

  details.forEach(detail => {
    const themeId = detail.question.theme
    if (themeStats[themeId]) {
      themeStats[themeId].total++
      if (detail.correct) {
        themeStats[themeId].correct++
      }
    }
  })

  return Object.values(themeStats).filter(t => t.total > 0)
}

function restartQuiz() {
  currentIndex.value = 0
  answers.value = {}
  showResults.value = false
  showExplanation.value = false
  pendingAnswers.value = []
  if (sujetInfo.value) {
    startSession(props.sujetId, sujetInfo.value.title)
  }
}

function goToQuestion(index) {
  currentIndex.value = index
  showExplanation.value = answers.value[questions.value[index].id] !== undefined
  pendingAnswers.value = []
}

function stopAudio() {
  audioPlayers.value.forEach(player => player?.pause())
  playingAudio.value = null
}

// Changer de question coupe l'explication en cours
watch(currentIndex, () => {
  stopAudio()
  audioPlayers.value = []
})

function toggleAudio(index) {
  const player = audioPlayers.value[index]
  if (!player) return

  if (playingAudio.value === index) {
    stopAudio()
    return
  }
  stopAudio()
  player.play()
  playingAudio.value = index
}

const letters = 'ABCDE'

onMounted(() => {
  if (sujetInfo.value) {
    startSession(props.sujetId, sujetInfo.value.title)
  }
})

onUnmounted(() => {
  stopAudio()
})
</script>

<template>
  <div class="revision-quiz">
    <!-- Header -->
    <div class="quiz-header">
      <h2>{{ sujetInfo?.title || 'Quiz de révision' }}</h2>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
      <div class="progress-text">
        Question {{ currentIndex + 1 }} / {{ questions.length }}
      </div>
    </div>

    <!-- Quiz Content -->
    <div v-if="!showResults && currentQuestion" class="quiz-content">
      <div class="question-card">
        <div class="question-header">
          <span class="question-number">Q{{ currentIndex + 1 }}</span>
          <span class="theme-badge">{{ REVISION_THEMES.find(t => t.id === currentQuestion.theme)?.label || 'Général' }}</span>
        </div>

        <p class="question-text">{{ currentQuestion.question }}</p>

        <img
          v-if="currentQuestion.image"
          :src="currentQuestion.image"
          :alt="`Illustration de la question ${currentIndex + 1}`"
          class="question-image"
        />

        <div v-if="isMulti && !isAnswered" class="multi-answer-hint">
          Plusieurs réponses possibles
        </div>

        <div class="choices">
          <button
            v-for="(choice, index) in currentQuestion.choices"
            :key="index"
            class="choice-button"
            :class="getOptionClass(index)"
            @click="selectOption(index)"
          >
            <span class="choice-letter">{{ letters[index] }}.</span>
            <span class="choice-text">{{ choice }}</span>
          </button>
        </div>

        <button
          v-if="isMulti && !isAnswered"
          class="validate-button"
          :disabled="pendingAnswers.length === 0"
          @click="validateMultiple"
        >
          Valider
        </button>

        <!-- Explanation -->
        <div v-if="showExplanation && isAnswered" class="explanation">
          <div :class="checkAnswer(userAnswer, currentQuestion.correct) ? 'correct-answer' : 'incorrect-answer'">
            <span class="answer-label">
              {{ checkAnswer(userAnswer, currentQuestion.correct) ? '✓ Correct' : '✗ Incorrect' }}
            </span>
            <span class="correct-answers">
              Bonne(s) réponse(s) : {{ currentQuestion.correct.map(i => letters[i]).join(', ') }}
            </span>
          </div>

          <!-- Image support -->
          <div v-if="questionMedia.images && questionMedia.images.length" class="explanation-images">
            <img
              v-for="(image, index) in questionMedia.images"
              :key="index"
              :src="image"
              :alt="`Explication image ${index + 1}`"
              class="explanation-image"
            />
          </div>

          <!-- Audio support -->
          <div v-if="questionMedia.audios.length" class="explanation-audio">
            <div v-for="(audio, index) in questionMedia.audios" :key="audio">
              <button class="audio-button" @click="toggleAudio(index)">
                <span v-if="playingAudio !== index">
                  ▶ Écouter l'explication du moniteur{{ questionMedia.audios.length > 1 ? ` (${index + 1}/${questionMedia.audios.length})` : '' }}
                </span>
                <span v-else>⏸ Pause</span>
              </button>
              <audio
                :ref="el => { audioPlayers[index] = el }"
                :src="audio"
                preload="none"
                @ended="playingAudio = null"
              ></audio>
            </div>
          </div>

          <p class="explanation-text">{{ currentQuestion.explanation }}</p>
        </div>

        <!-- Navigation -->
        <div class="navigation">
          <button
            class="nav-button"
            :disabled="currentIndex === 0"
            @click="previousQuestion"
          >
            ← Précédent
          </button>
          <button
            class="nav-button primary"
            @click="nextQuestion"
          >
            {{ currentIndex === questions.length - 1 ? 'Terminer' : 'Suivant' }} →
          </button>
        </div>
      </div>

      <!-- Question Navigator -->
      <div class="question-navigator">
        <div class="nav-grid">
          <button
            v-for="(q, index) in questions"
            :key="q.id"
            class="nav-item"
            :class="{
              'current': index === currentIndex,
              'answered': answers[q.id] !== undefined,
              'correct': answers[q.id] !== undefined && checkAnswer(answers[q.id], q.correct),
              'incorrect': answers[q.id] !== undefined && !checkAnswer(answers[q.id], q.correct)
            }"
            @click="goToQuestion(index)"
          >
            {{ index + 1 }}
          </button>
        </div>
      </div>
    </div>

    <!-- Results -->
    <div v-if="showResults" class="results">
      <div class="results-card">
        <h2>Résultats du quiz</h2>
        <div class="score-display">
          <div class="score-circle">
            <span class="score-number">{{ calculateResults().score }}/20</span>
          </div>
          <p class="score-text">
            {{ calculateResults().correct }} correctes sur {{ calculateResults().total }}
          </p>
        </div>

        <div class="theme-results">
          <h3>Résultats par thème</h3>
          <div
            v-for="theme in calculateResults().themes"
            :key="theme.label"
            class="theme-stat"
          >
            <span class="theme-label">{{ theme.label }}</span>
            <div class="theme-bar">
              <div
                class="theme-fill"
                :style="{ width: (theme.correct / theme.total * 100) + '%' }"
              ></div>
            </div>
            <span class="theme-score">{{ theme.correct }}/{{ theme.total }}</span>
          </div>
        </div>

        <div class="results-actions">
          <button class="action-button" @click="restartQuiz">
            Recommencer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.revision-quiz {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.quiz-header {
  margin-bottom: 20px;
}

.quiz-header h2 {
  margin: 0 0 15px 0;
  color: #2c3e50;
}

.progress-bar {
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 14px;
  color: #666;
  text-align: right;
}

.quiz-content {
  margin-bottom: 20px;
}

.question-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.question-number {
  font-weight: bold;
  color: #3498db;
  font-size: 18px;
}

.theme-badge {
  background: #f0f0f0;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  color: #666;
}

.question-text {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #2c3e50;
}

.question-image {
  display: block;
  max-width: 100%;
  max-height: 420px;
  margin: 0 auto 20px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.multi-answer-hint {
  background: #fff3cd;
  color: #856404;
  padding: 8px 12px;
  border-radius: 6px;
  margin-bottom: 16px;
  font-size: 14px;
}

.choices {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.choice-button {
  display: flex;
  align-items: center;
  padding: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.choice-button:hoverable:hover {
  border-color: #3498db;
  background: #f8f9fa;
}

.choice-button.selected {
  border-color: #3498db;
  background: #e3f2fd;
}

.choice-button.correct {
  border-color: #2ecc71;
  background: #d4edda;
}

.choice-button.incorrect {
  border-color: #e74c3c;
  background: #f8d7da;
}

.choice-letter {
  font-weight: bold;
  color: #3498db;
  margin-right: 12px;
  min-width: 24px;
}

.choice-text {
  flex: 1;
}

.validate-button {
  width: 100%;
  padding: 12px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.validate-button:hover:not(:disabled) {
  background: #2980b9;
}

.validate-button:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}

.explanation {
  margin: 20px 0;
  padding: 16px;
  border-radius: 8px;
  background: #f8f9fa;
}

.correct-answer {
  color: #2ecc71;
  font-weight: bold;
  margin-bottom: 8px;
}

.incorrect-answer {
  color: #e74c3c;
  font-weight: bold;
  margin-bottom: 8px;
}

.answer-label {
  margin-right: 12px;
}

.correct-answers {
  font-weight: normal;
}

.explanation-text {
  margin: 8px 0 0 0;
  color: #555;
  line-height: 1.5;
}

.explanation-images {
  margin: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.explanation-image {
  max-width: 100%;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.explanation-audio {
  margin: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.audio-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}

.audio-button:hover {
  background: #2980b9;
}

.navigation {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 20px;
}

.nav-button {
  flex: 1;
  padding: 12px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-button:hover:not(:disabled) {
  border-color: #3498db;
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-button.primary {
  background: #3498db;
  color: white;
  border-color: #3498db;
}

.nav-button.primary:hover:not(:disabled) {
  background: #2980b9;
}

.question-navigator {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  gap: 8px;
}

.nav-item {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: all 0.2s;
}

.nav-item:hover {
  border-color: #3498db;
}

.nav-item.current {
  border-color: #3498db;
  background: #e3f2fd;
}

.nav-item.answered {
  background: #f0f0f0;
}

.nav-item.correct {
  background: #d4edda;
  border-color: #2ecc71;
}

.nav-item.incorrect {
  background: #f8d7da;
  border-color: #e74c3c;
}

.results {
  margin-top: 20px;
}

.results-card {
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
}

.results-card h2 {
  margin: 0 0 24px 0;
  color: #2c3e50;
}

.score-display {
  margin: 32px 0;
}

.score-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3498db, #2ecc71);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.score-number {
  font-size: 32px;
  font-weight: bold;
  color: white;
}

.score-text {
  font-size: 18px;
  color: #666;
}

.theme-results {
  margin: 32px 0;
  text-align: left;
}

.theme-results h3 {
  margin: 0 0 16px 0;
  color: #2c3e50;
}

.theme-stat {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.theme-label {
  width: 150px;
  font-size: 14px;
  color: #555;
}

.theme-bar {
  flex: 1;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 12px;
}

.theme-fill {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  transition: width 0.3s ease;
}

.theme-score {
  font-weight: bold;
  color: #2c3e50;
  min-width: 40px;
}

.results-actions {
  margin-top: 24px;
}

.action-button {
  padding: 12px 32px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.action-button:hover {
  background: #2980b9;
}
</style>