<script setup>
import { computed, ref, shallowRef, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BeninQuestionSet from '../components/BeninQuestionSet.vue'
import ProgressBadge from '../components/ProgressBadge.vue'
import {
  beninChapters,
  beninQuestionIds,
  loadBeninChapter,
  isPlayable,
  findFilter,
  saveResume,
} from '../data/benin/meta.js'

const route = useRoute()
const router = useRouter()
const num = computed(() => Number(route.params.id))
const chapter = computed(() => beninChapters.find((c) => c.num === num.value))

const questions = shallowRef([])
const loading = ref(true)

watch(
  num,
  async (value) => {
    loading.value = true
    const list = await loadBeninChapter(value)
    if (value !== num.value) return // navigation plus rapide que le chargement
    questions.value = list.filter(isPlayable).map((q) => ({ ...q, chapter: value }))
    loading.value = false
  },
  { immediate: true }
)

// Filtre, mode et page sont gardés dans l'URL (?filtre=ratees&mode=cartes&page=2).
const filter = computed(() => findFilter(route.query.filtre).id)
const mode = computed(() => (route.query.mode === 'cartes' ? 'cartes' : 'liste'))
const page = computed(() => Math.max(0, Number(route.query.page ?? 1) - 1) || 0)

function update(changes) {
  const query = { ...route.query, ...changes }
  if (query.filtre === 'toutes') delete query.filtre
  if (query.mode === 'liste') delete query.mode
  if (!query.page || query.page === 1) delete query.page
  router.replace({ query })
}

// Point de reprise. Le filtre « Ratées » n'est pas repris : la liste se vide à mesure
// qu'on rejoue ses erreurs.
watch(
  [num, filter, mode, page],
  () => saveResume({
    chapter: num.value,
    filter: filter.value === 'ratees' ? 'toutes' : filter.value,
    mode: mode.value,
    page: filter.value === 'ratees' ? 1 : page.value + 1,
  }),
  { immediate: true }
)

const previous = computed(() => beninChapters.find((c) => c.num === num.value - 1))
const next = computed(() => beninChapters.find((c) => c.num === num.value + 1))
</script>

<template>
  <div class="wrap">
    <section v-if="chapter" class="chap" id="bj-chapitre">
      <div class="chap-head" style="background:var(--vert)">
        <span class="borne" style="color:var(--vert)">{{ chapter.roman }}</span>
        <div>
          <span class="fil" style="color:#CDEBDD">Questions officielles DGTT · chapitre {{ chapter.roman }}</span>
          <h2>{{ chapter.title }}</h2>
        </div>
      </div>
      <p class="obj">
        <b>{{ questions.length }} questions</b>
        <ProgressBadge :question-ids="beninQuestionIds(chapter.num)" />
        <router-link :to="{ name: 'benin' }" style="margin-left:12px">← Tous les chapitres</router-link>
      </p>

      <p v-if="loading">Chargement des questions…</p>
      <BeninQuestionSet
        v-else
        :key="num"
        :questions="questions"
        :filter="filter"
        :mode="mode"
        :page="page"
        @update:filter="(f) => update({ filtre: f, page: undefined })"
        @update:mode="(m) => update({ mode: m })"
        @update:page="(p) => update({ page: p + 1 })"
      >
        <template #after-list="{ lastPage }">
          <nav v-if="lastPage" class="bj-pager" aria-label="Chapitres">
            <router-link v-if="previous" :to="{ name: 'benin-chapitre', params: { id: String(previous.num) } }">
              ← Chapitre {{ previous.roman }}
            </router-link>
            <router-link v-if="next" :to="{ name: 'benin-chapitre', params: { id: String(next.num) } }">
              Chapitre {{ next.roman }} : {{ next.title }} →
            </router-link>
            <router-link v-else :to="{ name: 'examen' }">Passer l’examen blanc →</router-link>
          </nav>
        </template>
      </BeninQuestionSet>
    </section>
    <p v-else>Chapitre introuvable.</p>
  </div>
</template>
