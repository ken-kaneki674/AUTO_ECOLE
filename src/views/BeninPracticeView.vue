<script setup>
import { computed, onMounted, shallowRef } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BeninQuestionSet from '../components/BeninQuestionSet.vue'
import { beninChapters, loadBeninBank, findFilter } from '../data/benin/meta.js'

// Entraînement sur toute la banque, piloté par l'URL :
//   ?filtre=ratees|nouvelles|images|multiples  ?chapitre=3  ?ids=bj-q15,bj-q16  ?n=20
const route = useRoute()
const router = useRouter()
const bank = shallowRef(null)

onMounted(async () => {
  bank.value = await loadBeninBank()
})

// Chaîne (et non tableau) pour que changer de mode ne relance pas un nouveau tirage.
const ids = computed(() => (route.query.ids ? String(route.query.ids) : ''))
const chapterNum = computed(() => (route.query.chapitre ? Number(route.query.chapitre) : null))
const chapter = computed(() => beninChapters.find((c) => c.num === chapterNum.value))
const filter = computed(() => findFilter(route.query.filtre).id)
const mode = computed(() => (route.query.mode === 'liste' ? 'liste' : 'cartes'))
const page = computed(() => Math.max(0, Number(route.query.page ?? 1) - 1) || 0)
// Tirage aléatoire limité sauf pour une liste explicite (catalogue) ou les erreurs.
const limit = computed(() => {
  if (ids.value || filter.value === 'ratees') return null
  return Number(route.query.n) || 20
})

const questions = computed(() => {
  if (!bank.value) return []
  if (ids.value) {
    const wanted = new Set(ids.value.split(','))
    return bank.value.filter((q) => wanted.has(q.id))
  }
  return chapterNum.value ? bank.value.filter((q) => q.chapter === chapterNum.value) : bank.value
})

const title = computed(() => {
  if (ids.value) return 'Questions sur ce panneau'
  const labels = {
    toutes: 'Série au hasard',
    nouvelles: 'Questions jamais faites',
    ratees: 'Réviser mes erreurs',
    images: 'Questions avec illustration',
    multiples: 'Questions à réponses multiples',
  }
  return labels[filter.value]
})

function update(changes) {
  const query = { ...route.query, ...changes }
  if (query.mode === 'cartes') delete query.mode
  if (!query.page || query.page === 1) delete query.page
  router.replace({ query })
}
</script>

<template>
  <div class="wrap">
    <section class="chap">
      <div class="chap-head" style="background:var(--vert)">
        <span class="borne" style="color:var(--vert)">⟳</span>
        <div>
          <span class="fil" style="color:#CDEBDD">
            Entraînement · {{ chapter ? `chapitre ${chapter.roman}` : 'toute la banque DGTT' }}
          </span>
          <h2>{{ title }}</h2>
        </div>
      </div>
      <p class="obj">
        <b>{{ limit ? `${limit} questions tirées au hasard` : `${questions.length} questions` }}</b>
        Réponds, la correction s'affiche aussitôt ; ta progression est comptée dans les chapitres.
        <router-link :to="{ name: 'benin' }" style="margin-left:8px">← Questions officielles</router-link>
      </p>

      <p v-if="!bank">Chargement de la banque de questions…</p>
      <BeninQuestionSet
        v-else
        :questions="questions"
        :filter="filter"
        :mode="mode"
        :page="page"
        :limit="limit"
        :random="Boolean(limit)"
        show-chapter
        @update:filter="(f) => update({ filtre: f, page: undefined })"
        @update:mode="(m) => update({ mode: m })"
        @update:page="(p) => update({ page: p + 1 })"
      />
    </section>
  </div>
</template>
