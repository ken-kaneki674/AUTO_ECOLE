<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import QuestionTrainer from '../components/QuestionTrainer.vue'
import { useStudentStats, estimatedMinutes } from '../composables/useStudentStats.js'
import { EXAM_THEMES } from '../data/examPool.js'

// Série de révision lancée depuis « Mon espace ». Les ids sont dans l'URL :
// /espace/revision?theme=signalisation&ids=bj-q12,ch1-q3,…
const route = useRoute()
const router = useRouter()
const { ready, pool } = useStudentStats()

const theme = computed(() => EXAM_THEMES.find((t) => t.id === route.query.theme))
// Chaîne (et non tableau) : la série ne se recalcule pas à chaque rendu.
const idsKey = computed(() => String(route.query.ids ?? ''))

const questions = computed(() => {
  if (!pool.value || !idsKey.value) return []
  const byKey = new Map(pool.value.map((q) => [q.key, q]))
  return idsKey.value
    .split(',')
    .map((key) => byKey.get(key))
    .filter(Boolean)
    // Format attendu par QuestionItem : l'id est celui de la progression.
    .map((q) => ({ ...q, id: q.key }))
})
</script>

<template>
  <div class="wrap">
    <section class="chap">
      <div class="chap-head" style="background:var(--bleu)">
        <span class="borne" style="color:var(--bleu)">⟳</span>
        <div>
          <span class="fil">Mon espace · révision recommandée</span>
          <h2>{{ theme ? theme.label : 'Mes erreurs' }}</h2>
        </div>
      </div>
      <p class="obj">
        <b>{{ questions.length }} questions · environ {{ estimatedMinutes(questions.length) }} minutes</b>
        Correction immédiate après chaque réponse ; ta progression est mise à jour.
        <router-link :to="{ name: 'espace' }" style="margin-left:8px">← Mon espace</router-link>
      </p>

      <p v-if="!ready">Chargement…</p>
      <p v-else-if="!questions.length" class="trainer-empty">
        Cette série est vide.
        <router-link :to="{ name: 'espace' }">Retour à mon espace</router-link>
      </p>
      <QuestionTrainer v-else :questions="questions" can-renew renew-label="Retour à mon espace" @new-series="router.push({ name: 'espace' })">
        <template #after-feedback="{ question }">
          <router-link :to="question.to">Revoir le chapitre →</router-link>
        </template>
      </QuestionTrainer>
    </section>
  </div>
</template>
