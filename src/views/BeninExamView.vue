<script setup>
import { computed, onMounted, ref } from 'vue'
import QcmBlock from '../components/QcmBlock.vue'
import { useQuizProgress } from '../composables/useQuizProgress.js'
import { beninChapters, loadBeninChapter, isPlayable } from '../data/benin/meta.js'

const EXAM_SIZE = 40
const DRAW_KEY = 'code-route-benin-exam'

const { stats, resetQuestions } = useQuizProgress()
const questions = ref([])
const loading = ref(true)

// Les questions de l'examen ont leur propre identifiant, pour que la progression
// de l'examen ne se mélange pas avec celle des chapitres.
const examId = (num) => `bj-exam-q${num}`

let bank = []

function saveDraw(nums) {
  try {
    localStorage.setItem(DRAW_KEY, JSON.stringify(nums))
  } catch {
    // stockage indisponible : le tirage ne survivra pas au rechargement
  }
}

function loadDraw() {
  try {
    const nums = JSON.parse(localStorage.getItem(DRAW_KEY) ?? 'null')
    return Array.isArray(nums) ? nums : null
  } catch {
    return null
  }
}

function applyDraw(nums) {
  const byNum = new Map(bank.map((q) => [q.num, q]))
  questions.value = nums
    .map((n) => byNum.get(n))
    .filter(Boolean)
    .map((q) => ({ ...q, id: examId(q.num) }))
}

function newDraw() {
  resetQuestions(questions.value.map((q) => q.id))
  const pool = [...bank]
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  const nums = pool.slice(0, EXAM_SIZE).map((q) => q.num).sort((a, b) => a - b)
  saveDraw(nums)
  applyDraw(nums)
}

onMounted(async () => {
  const chapters = await Promise.all(beninChapters.map((c) => loadBeninChapter(c.num)))
  bank = chapters.flat().filter(isPlayable)
  const saved = loadDraw()
  if (saved?.length === EXAM_SIZE) applyDraw(saved)
  if (questions.value.length !== EXAM_SIZE) newDraw()
  loading.value = false
})

const questionIds = computed(() => questions.value.map((q) => q.id))
const examStats = computed(() => stats(questionIds.value))
const finished = computed(() => examStats.value.answered === EXAM_SIZE)
</script>

<template>
  <div class="wrap">
    <section class="chap" id="benin-examen">
      <div class="chap-head" style="background:var(--asphalte)">
        <span class="borne" style="color:var(--asphalte)">BJ</span>
        <div><span class="fil" style="color:var(--ambre)">Questions officielles Bénin</span><h2>Examen blanc — {{ EXAM_SIZE }} questions</h2></div>
      </div>
      <p class="obj">
        <b>Règle du jeu</b>
        {{ EXAM_SIZE }} questions tirées au hasard parmi toute la banque du manuel DGTT. Certaines ont plusieurs bonnes
        réponses : une question n’est comptée juste que si toutes les bonnes réponses, et elles seules, sont cochées.
        Le tirage est conservé jusqu’à ce que tu demandes un nouveau tirage.
      </p>

      <p v-if="loading">Tirage des questions…</p>
      <template v-else>
        <p style="margin-top:1.4rem">
          <template v-if="examStats.answered">
            <strong>{{ examStats.correct }} / {{ EXAM_SIZE }}</strong> bonnes réponses
            <span v-if="finished"> — score : {{ examStats.score }} %</span>
          </template>
          <button type="button" class="qcm-reset" style="margin-left:10px" @click="newDraw">Nouveau tirage</button>
        </p>
        <QcmBlock :title="`Examen Bénin`" :questions="questions" />
        <p v-if="finished" style="margin-top:1.4rem">
          <strong>Résultat : {{ examStats.correct }} / {{ EXAM_SIZE }}.</strong>
          Revois dans leur chapitre les questions ratées (leur numéro « Q… » est celui du manuel), puis relance un tirage.
          <button type="button" class="qcm-reset" style="margin-left:10px" @click="newDraw">Nouveau tirage</button>
        </p>
      </template>
    </section>
  </div>
</template>
