<script setup>
import { computed } from 'vue'
import QcmBlock from '../components/QcmBlock.vue'
import { useQuizProgress } from '../composables/useQuizProgress.js'
import questions from '../data/questions/examen.json'

const { stats, resetQuestions } = useQuizProgress()
const questionIds = questions.map((q) => q.id)
const examStats = computed(() => stats(questionIds))

const verdict = computed(() => {
  const c = examStats.value.correct
  if (examStats.value.answered < questionIds.length) return null
  if (c >= 28) return 'Prêt pour l’examen.'
  if (c >= 25) return 'Révise les chapitres où tu as chuté.'
  if (c >= 20) return 'Reprends les chapitres 1, 2, 5 et 14.'
  return 'Reprends le manuel dans l’ordre, chapitre par chapitre, avec les QCM de fin de chapitre.'
})
</script>

<template>
  <div class="wrap">
    <section class="chap" id="examen">
      <div class="chap-head" style="background:var(--asphalte)">
        <span class="borne" style="color:var(--asphalte)">EX</span>
        <div><span class="fil" style="color:var(--ambre)">Évaluation finale</span><h2>Examen blanc — 30 questions</h2></div>
      </div>
      <p class="obj">
        <b>Règle du jeu</b> 30 questions couvrant les 14 chapitres. Une seule bonne réponse par question. Temps conseillé : 30 minutes, soit une minute par question. <strong>Seuil de réussite conseillé : 25 bonnes réponses sur 30.</strong>
      </p>

      <p v-if="examStats.answered" style="margin-top:1.4rem">
        <strong>{{ examStats.correct }} / {{ questionIds.length }}</strong> bonnes réponses
        <span v-if="verdict"> — {{ verdict }}</span>
        <button type="button" class="qcm-reset" style="margin-left:10px" @click="resetQuestions(questionIds)">Recommencer l'examen</button>
      </p>
      <p style="font-size:.88rem;color:#5C636D">
        <strong>Barème indicatif :</strong> 28 à 30 → prêt pour l'examen · 25 à 27 → révise les chapitres où tu as chuté · 20 à 24 → reprends les chapitres 1, 2, 5 et 14 · moins de 20 → reprends le manuel dans l'ordre, chapitre par chapitre, avec les QCM de fin de chapitre.
      </p>

      <QcmBlock title="Questions 1 à 30" :questions="questions" />
    </section>
  </div>
</template>
