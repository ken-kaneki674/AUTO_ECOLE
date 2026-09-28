<script setup>
import { computed } from 'vue'
import TableOfContents from '../components/TableOfContents.vue'
import AttentionBox from '../components/AttentionBox.vue'
import { useQuizProgress } from '../composables/useQuizProgress.js'
import { useExamHistory, PASS_RATE } from '../composables/useExamSession.js'
import { chapters } from '../data/chapters/chapter-meta.js'
import { chapterQuestionIds } from '../data/questionIds.js'
import { beninQuestionCount, beninAllQuestionIds } from '../data/benin/meta.js'

const { stats } = useQuizProgress()
const examHistory = useExamHistory()

function rate(s) {
  return s.answered ? Math.round((s.correct / s.answered) * 100) : null
}

const course = computed(() => {
  const perChapter = chapters.map((c) => ({ chapter: c, ...stats(chapterQuestionIds(c.id)) }))
  const all = stats(chapters.flatMap((c) => chapterQuestionIds(c.id)))
  return {
    ...all,
    rate: rate(all),
    done: perChapter.filter((c) => c.total && c.answered === c.total).length,
    // Chapitre à continuer : le premier dont le QCM n'est pas terminé.
    next: perChapter.find((c) => c.answered < c.total)?.chapter ?? chapters[0],
  }
})

const official = computed(() => {
  const s = stats(beninAllQuestionIds())
  return { ...s, rate: rate(s) }
})

const lastExam = computed(() => examHistory.value[0] ?? null)
const bestExam = computed(() =>
  examHistory.value.length ? Math.max(...examHistory.value.map((h) => Math.round((h.correct / h.total) * 100))) : null
)

const started = computed(() => course.value.answered > 0 || official.value.answered > 0 || lastExam.value)

function rateClass(value) {
  if (value === null) return ''
  return value >= Math.round(PASS_RATE * 100) ? 'good' : value >= 60 ? 'mid' : 'low'
}
</script>

<template>
  <header class="cover">
    <div class="wrap">
      <p class="eyebrow">Manuel de formation · Auto-école · République du Bénin</p>
      <h1>Le code de la route<span>de A à Z</span></h1>
      <div class="route" />
      <p class="sous">
        Prépare l'examen théorique du permis de conduire au Bénin — catégorie B et deux-roues A1 / A2 / A3 —
        avec un cours illustré en 14 chapitres, les {{ beninQuestionCount() }} questions officielles de la DGTT
        et des examens blancs chronométrés.
      </p>
      <div class="home-cta">
        <router-link :to="{ name: 'chapitre', params: { id: String(course.next.num) } }" class="cta primary">
          <template v-if="course.answered">Continuer le cours : chapitre {{ course.next.num }}</template>
          <template v-else>Commencer le cours</template>
        </router-link>
        <router-link :to="{ name: 'benin' }" class="cta">Questions officielles</router-link>
        <router-link :to="{ name: 'examen' }" class="cta">Examen blanc</router-link>
      </div>
    </div>
  </header>

  <div class="wrap">
    <!-- Ma progression -->
    <section v-if="started" class="home-section" aria-labelledby="progress-title">
      <h2 id="progress-title" class="home-h2">Ma progression</h2>
      <div class="bj-dash">
        <router-link :to="{ name: 'chapitre', params: { id: String(course.next.num) } }" class="bj-tile link" :class="rateClass(course.rate)">
          <span class="k">Cours</span>
          <span class="v">{{ course.done }}<small>/{{ chapters.length }}</small></span>
          <span class="l">
            chapitres terminés<template v-if="course.rate !== null"> · {{ course.rate }} % de réussite</template>
          </span>
          <span class="bar"><span :style="{ width: course.percent + '%' }" /></span>
        </router-link>
        <router-link :to="{ name: 'benin' }" class="bj-tile link" :class="rateClass(official.rate)">
          <span class="k">Questions officielles</span>
          <span class="v">{{ official.answered }}<small>/{{ official.total }}</small></span>
          <span class="l">
            questions faites<template v-if="official.rate !== null"> · {{ official.rate }} % de réussite</template>
          </span>
          <span class="bar"><span :style="{ width: official.percent + '%' }" /></span>
        </router-link>
        <router-link :to="{ name: 'examen' }" class="bj-tile link" :class="lastExam ? (lastExam.passed ? 'good' : 'low') : ''">
          <span class="k">Examen blanc</span>
          <template v-if="lastExam">
            <span class="v">{{ lastExam.correct }}<small>/{{ lastExam.total }}</small></span>
            <span class="l">dernier examen · {{ lastExam.passed ? 'réussi' : 'échoué' }} · meilleur : {{ bestExam }} %</span>
          </template>
          <template v-else>
            <span class="v">—</span>
            <span class="l">pas encore passé</span>
          </template>
        </router-link>
      </div>
    </section>

    <!-- Parcours -->
    <section class="home-section" aria-labelledby="steps-title">
      <h2 id="steps-title" class="home-h2">Comment réviser</h2>
      <ol class="home-steps">
        <li>
          <span class="step">1</span>
          <h3>Apprendre le cours</h3>
          <p>Lis un chapitre, retiens les fiches mémo, puis fais son QCM sans regarder le cours.</p>
          <router-link :to="{ name: 'chapitre', params: { id: String(course.next.num) } }">
            {{ course.answered ? `Continuer au chapitre ${course.next.num}` : 'Commencer au chapitre 1' }} →
          </router-link>
        </li>
        <li>
          <span class="step">2</span>
          <h3>S'entraîner sur la banque officielle</h3>
          <p>Les {{ beninQuestionCount() }} questions du manuel de la DGTT, par chapitre ou au hasard, et révise tes erreurs.</p>
          <router-link :to="{ name: 'benin' }">Questions officielles →</router-link>
        </li>
        <li>
          <span class="step">3</span>
          <h3>Passer l'examen blanc</h3>
          <p>20 ou 40 questions chronométrées, correction à la fin. Vise au moins {{ Math.round(PASS_RATE * 100) }} % avant le jour J.</p>
          <router-link :to="{ name: 'examen' }">Examen blanc →</router-link>
        </li>
      </ol>
    </section>

    <section class="home-section">
      <TableOfContents />
    </section>

    <AttentionBox label="Avertissement important" style="margin-top:34px">
      Les chiffres réglementaires tirés du manuel officiel de la DGTT (édition 2011) sont indiqués tels quels ; ceux que le manuel ne précise pas — certaines limitations de vitesse, taux d'alcoolémie, numéros d'urgence — sont signalés par le pictogramme « ⚠ à vérifier ». Confronte-les toujours au code de la route en vigueur et aux consignes de ton auto-école, qui font seuls foi le jour de l'examen.
    </AttentionBox>
  </div>
</template>
