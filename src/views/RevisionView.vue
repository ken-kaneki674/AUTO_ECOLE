<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import RevisionQuiz from '../components/RevisionQuiz.vue'
import { getRevisionSujets, REVISION_THEMES } from '../data/revisionQuestions.js'
import { useRevisionScoring } from '../composables/useRevisionScoring.js'

const route = useRoute()
const router = useRouter()

const {
  sessionHistory,
  bestScore,
  averageScore,
  passRate,
  getScorePollOptions,
  getRecentSessions,
  getStatsByTheme
} = useRevisionScoring()

const sujets = computed(() => getRevisionSujets())

const selectedSujet = ref('sujet1')

// Update selectedSujet when route changes
watch(() => route.params.sujetId, (newSujetId) => {
  if (newSujetId && sujets.value.find(s => s.id === newSujetId)) {
    selectedSujet.value = newSujetId
  }
}, { immediate: true })

// Initialize with first available sujet if no route param
watch(sujets, (newSujets) => {
  if (newSujets.length > 0 && !selectedSujet.value) {
    selectedSujet.value = newSujets[0].id
  }
}, { immediate: true })
const showResults = ref(false)
const lastResults = ref(null)
const activeTab = ref('quiz') // 'quiz', 'history', 'stats'

function onQuizCompleted(results) {
  lastResults.value = results
  showResults.value = true
  activeTab.value = 'results'
}

function onQuizProgress(progress) {
  // Handle progress updates if needed
}

function selectSujet(sujetId) {
  selectedSujet.value = sujetId
  showResults.value = false
  lastResults.value = null
  router.push({ name: 'revision', params: { sujetId } })
}

function goToQuiz() {
  activeTab.value = 'quiz'
  showResults.value = false
}

function goToHistory() {
  activeTab.value = 'history'
}

function goToStats() {
  activeTab.value = 'stats'
}

const recentSessions = computed(() => getRecentSessions(5))
const themeStats = computed(() => getStatsByTheme())
const pollOptions = computed(() => getScorePollOptions())
</script>

<template>
  <div class="revision-view">
    <div class="revision-header">
      <h1>📚 Révisions Examens</h1>
      <p>Questions de révision du groupe WhatsApp avec le moniteur Kévin DJOSSOU</p>
    </div>

    <!-- Sujet Selection -->
    <div class="sujet-selector">
      <h3>Choisir un sujet de révision</h3>
      <div class="sujet-buttons">
        <button
          v-for="sujet in sujets"
          :key="sujet.id"
          class="sujet-button"
          :class="{ active: selectedSujet === sujet.id }"
          @click="selectSujet(sujet.id)"
        >
          <div class="sujet-title">{{ sujet.title }}</div>
          <div class="sujet-date">{{ sujet.date }}</div>
          <div class="sujet-count">{{ sujet.questions?.length || 0 }} questions</div>
        </button>
      </div>
    </div>

    <!-- Tabs -->
    <div class="tabs">
      <button
        class="tab-button"
        :class="{ active: activeTab === 'quiz' }"
        @click="goToQuiz"
      >
        📝 Quiz
      </button>
      <button
        class="tab-button"
        :class="{ active: activeTab === 'history' }"
        @click="goToHistory"
      >
        📊 Historique
      </button>
      <button
        class="tab-button"
        :class="{ active: activeTab === 'stats' }"
        @click="goToStats"
      >
        📈 Statistiques
      </button>
    </div>

    <!-- Quiz Tab -->
    <div v-if="activeTab === 'quiz'" class="tab-content">
      <div v-if="!showResults" class="quiz-container">
        <RevisionQuiz
          :sujet-id="selectedSujet"
          @completed="onQuizCompleted"
          @progress="onQuizProgress"
        />
      </div>

      <!-- Results Panel -->
      <div v-if="showResults && lastResults" class="results-panel">
        <div class="results-header">
          <h2>🎉 Quiz terminé !</h2>
          <div class="score-display">
            <div class="score-circle">
              <span class="score-number">{{ lastResults.score }}/20</span>
            </div>
            <p class="score-message">
              {{ lastResults.score >= 14 ? '✅ Excellent ! Vous êtes prêt pour l\'examen !' : '💪 Continuez vos efforts !' }}
            </p>
          </div>
        </div>

        <!-- WhatsApp-style Poll -->
        <div class="poll-section">
          <h3>📋 Sondage de notes (comme dans le groupe WhatsApp)</h3>
          <p class="poll-instruction">Sélectionnez votre tranche de notes :</p>
          <div class="poll-options">
            <button
              v-for="option in pollOptions"
              :key="option.value"
              class="poll-option"
              :class="{ selected: lastResults.score >= option.min && lastResults.score <= option.max }"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <div class="results-actions">
          <button class="action-button primary" @click="goToQuiz">
            🔄 Recommencer le même sujet
          </button>
          <button class="action-button" @click="goToHistory">
            📊 Voir l'historique
          </button>
        </div>
      </div>
    </div>

    <!-- History Tab -->
    <div v-if="activeTab === 'history'" class="tab-content">
      <div class="history-panel">
        <h2>📊 Historique des révisions</h2>

        <div v-if="sessionHistory.length === 0" class="empty-state">
          <p>Aucune session de révision enregistrée.</p>
          <p>Commencez un quiz pour voir votre historique !</p>
        </div>

        <div v-else class="history-list">
          <div
            v-for="session in recentSessions"
            :key="session.id"
            class="history-item"
          >
            <div class="history-header">
              <span class="history-title">{{ session.sujetTitle }}</span>
              <span class="history-date">{{ new Date(session.date).toLocaleDateString('fr-FR') }}</span>
            </div>
            <div class="history-score">
              <span class="score-badge" :class="{ passed: session.passed }">
                {{ session.score }}/20
              </span>
              <span class="score-detail">{{ session.correct }}/{{ session.total }}</span>
            </div>
            <div class="history-duration">
              ⏱️ {{ Math.floor(session.duration / 60) }}min {{ session.duration % 60 }}s
            </div>
          </div>
        </div>

        <div class="history-summary">
          <div class="summary-card">
            <span class="summary-label">Meilleure note</span>
            <span class="summary-value">{{ bestScore }}/20</span>
          </div>
          <div class="summary-card">
            <span class="summary-label">Moyenne</span>
            <span class="summary-value">{{ averageScore }}/20</span>
          </div>
          <div class="summary-card">
            <span class="summary-label">Taux de réussite</span>
            <span class="summary-value">{{ passRate }}%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Tab -->
    <div v-if="activeTab === 'stats'" class="tab-content">
      <div class="stats-panel">
        <h2>📈 Statistiques par thème</h2>

        <div v-if="themeStats.length === 0" class="empty-state">
          <p>Pas encore de données statistiques.</p>
          <p>Complétez des quiz pour voir vos statistiques par thème !</p>
        </div>

        <div v-else class="theme-stats-list">
          <div
            v-for="stat in themeStats"
            :key="stat.label"
            class="theme-stat-item"
          >
            <div class="theme-info">
              <span class="theme-name">{{ stat.label }}</span>
              <span class="theme-attempts">{{ stat.attempts }} tentative(s)</span>
            </div>
            <div class="theme-performance">
              <div class="accuracy-bar">
                <div
                  class="accuracy-fill"
                  :style="{ width: stat.accuracy + '%' }"
                  :class="{
                    'high': stat.accuracy >= 80,
                    'medium': stat.accuracy >= 60 && stat.accuracy < 80,
                    'low': stat.accuracy < 60
                  }"
                ></div>
              </div>
              <span class="accuracy-text">{{ stat.accuracy }}%</span>
            </div>
            <div class="theme-details">
              <span class="correct-answers">{{ stat.correctAnswers }} correctes</span>
              <span class="total-questions">sur {{ stat.totalQuestions }}</span>
            </div>
          </div>
        </div>

        <div class="stats-tips">
          <h3>💡 Conseils d'amélioration</h3>
          <ul>
            <li v-if="themeStats.some(s => s.accuracy < 60)">
              Concentrez-vous sur les thèmes où votre accuracy est inférieure à 60%
            </li>
            <li v-if="passRate < 70">
              Votre taux de réussite est en dessous de 70%. Continuez à vous entraîner !
            </li>
            <li v-if="passRate >= 70 && passRate < 85">
              Bon progression ! Visez maintenant 85% de taux de réussite.
            </li>
            <li v-if="passRate >= 85">
              Excellent travail ! Vous êtes bien préparé pour l'examen.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.revision-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.revision-header {
  text-align: center;
  margin-bottom: 30px;
}

.revision-header h1 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.revision-header p {
  margin: 0;
  color: #666;
}

.sujet-selector {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.sujet-selector h3 {
  margin: 0 0 16px 0;
  color: #2c3e50;
}

.sujet-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.sujet-button {
  padding: 16px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}

.sujet-button:hover {
  border-color: #3498db;
  background: #f8f9fa;
}

.sujet-button.active {
  border-color: #3498db;
  background: #e3f2fd;
}

.sujet-title {
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 4px;
}

.sujet-date {
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
}

.sujet-count {
  font-size: 12px;
  color: #3498db;
}

.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  border-bottom: 2px solid #e0e0e0;
}

.tab-button {
  padding: 12px 24px;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  font-size: 16px;
  color: #666;
  transition: all 0.2s;
}

.tab-button:hover {
  color: #3498db;
}

.tab-button.active {
  color: #3498db;
  border-bottom-color: #3498db;
}

.tab-content {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.quiz-container {
  min-height: 400px;
}

.results-panel {
  text-align: center;
}

.results-header {
  margin-bottom: 30px;
}

.results-header h2 {
  margin: 0 0 20px 0;
  color: #2c3e50;
}

.score-display {
  margin: 20px 0;
}

.score-circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3498db, #2ecc71);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.score-number {
  font-size: 36px;
  font-weight: bold;
  color: white;
}

.score-message {
  font-size: 18px;
  color: #555;
  margin: 0;
}

.poll-section {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  margin: 30px 0;
  text-align: left;
}

.poll-section h3 {
  margin: 0 0 12px 0;
  color: #2c3e50;
}

.poll-instruction {
  margin: 0 0 16px 0;
  color: #666;
  font-size: 14px;
}

.poll-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 8px;
}

.poll-option {
  padding: 10px 16px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
}

.poll-option:hover {
  border-color: #3498db;
}

.poll-option.selected {
  border-color: #2ecc71;
  background: #d4edda;
  font-weight: bold;
}

.results-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 30px;
}

.action-button {
  padding: 12px 24px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s;
}

.action-button:hover {
  border-color: #3498db;
}

.action-button.primary {
  background: #3498db;
  color: white;
  border-color: #3498db;
}

.action-button.primary:hover {
  background: #2980b9;
}

.history-panel, .stats-panel {
  min-height: 400px;
}

.history-panel h2, .stats-panel h2 {
  margin: 0 0 20px 0;
  color: #2c3e50;
}

.empty-state {
  text-align: center;
  padding: 40px;
  color: #666;
}

.empty-state p {
  margin: 8px 0;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.history-item {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  border-left: 4px solid #3498db;
}

.history-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.history-title {
  font-weight: bold;
  color: #2c3e50;
}

.history-date {
  font-size: 12px;
  color: #666;
}

.history-score {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.score-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-weight: bold;
  background: #e0e0e0;
  color: #666;
}

.score-badge.passed {
  background: #d4edda;
  color: #2ecc71;
}

.score-detail {
  color: #666;
  font-size: 14px;
}

.history-duration {
  font-size: 12px;
  color: #666;
}

.history-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  margin-top: 24px;
}

.summary-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
}

.summary-label {
  display: block;
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}

.summary-value {
  display: block;
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
}

.theme-stats-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.theme-stat-item {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
}

.theme-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.theme-name {
  font-weight: bold;
  color: #2c3e50;
}

.theme-attempts {
  font-size: 12px;
  color: #666;
}

.theme-performance {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.accuracy-bar {
  flex: 1;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.accuracy-fill {
  height: 100%;
  transition: width 0.3s ease;
}

.accuracy-fill.high {
  background: #2ecc71;
}

.accuracy-fill.medium {
  background: #f39c12;
}

.accuracy-fill.low {
  background: #e74c3c;
}

.accuracy-text {
  font-weight: bold;
  color: #2c3e50;
  min-width: 40px;
}

.theme-details {
  font-size: 12px;
  color: #666;
}

.stats-tips {
  background: #fff3cd;
  border-radius: 8px;
  padding: 16px;
  border-left: 4px solid #ffc107;
}

.stats-tips h3 {
  margin: 0 0 12px 0;
  color: #856404;
}

.stats-tips ul {
  margin: 0;
  padding-left: 20px;
}

.stats-tips li {
  margin-bottom: 8px;
  color: #856404;
}
</style>