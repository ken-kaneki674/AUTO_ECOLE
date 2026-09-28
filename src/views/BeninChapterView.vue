<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import QcmBlock from '../components/QcmBlock.vue'
import ProgressBadge from '../components/ProgressBadge.vue'
import { beninChapters, beninQuestionIds, loadBeninChapter, isPlayable } from '../data/benin/meta.js'

const PAGE_SIZE = 25

const route = useRoute()
const num = computed(() => Number(route.params.id))
const chapter = computed(() => beninChapters.find((c) => c.num === num.value))

const questions = ref([])
const loading = ref(true)
const page = ref(0)

watch(
  num,
  async (value) => {
    loading.value = true
    page.value = 0
    const list = await loadBeninChapter(value)
    if (value !== num.value) return // navigation plus rapide que le chargement
    questions.value = list.filter(isPlayable)
    loading.value = false
  },
  { immediate: true }
)

const pageCount = computed(() => Math.ceil(questions.value.length / PAGE_SIZE))
const pageQuestions = computed(() =>
  questions.value.slice(page.value * PAGE_SIZE, (page.value + 1) * PAGE_SIZE)
)
const pageTitle = computed(() => {
  const list = pageQuestions.value
  return list.length ? `Questions ${list[0].num} à ${list[list.length - 1].num}` : ''
})

const previous = computed(() => beninChapters.find((c) => c.num === num.value - 1))
const next = computed(() => beninChapters.find((c) => c.num === num.value + 1))

function goToPage(index) {
  page.value = index
  document.getElementById('bj-chapitre')?.scrollIntoView()
}
</script>

<template>
  <div class="wrap">
    <section v-if="chapter" class="chap" id="bj-chapitre">
      <div class="chap-head" style="background:var(--vert)">
        <span class="borne" style="color:var(--vert)">{{ chapter.roman }}</span>
        <div>
          <span class="fil" style="color:#CDEBDD">Questions officielles Bénin · chapitre {{ chapter.roman }}</span>
          <h2>{{ chapter.title }}</h2>
        </div>
      </div>
      <p class="obj">
        <b>{{ questions.length }} questions</b>
        <ProgressBadge :question-ids="beninQuestionIds(chapter.num)" />
        <router-link :to="{ name: 'benin' }" style="margin-left:12px">← Tous les chapitres</router-link>
      </p>

      <p v-if="loading">Chargement des questions…</p>
      <template v-else>
        <nav v-if="pageCount > 1" class="bj-pager" aria-label="Pages de questions">
          <button
            v-for="(_, i) in pageCount"
            :key="i"
            type="button"
            :aria-current="i === page ? 'page' : undefined"
            @click="goToPage(i)"
          >{{ questions[i * PAGE_SIZE].num }}–{{ questions[Math.min((i + 1) * PAGE_SIZE, questions.length) - 1].num }}</button>
        </nav>

        <QcmBlock :key="`${num}-${page}`" :title="pageTitle" :questions="pageQuestions" />

        <nav class="bj-pager" aria-label="Navigation">
          <button v-if="page > 0" type="button" @click="goToPage(page - 1)">← Page précédente</button>
          <button v-if="page < pageCount - 1" type="button" @click="goToPage(page + 1)">Page suivante →</button>
          <router-link v-else-if="next" :to="{ name: 'benin-chapitre', params: { id: String(next.num) } }">
            Chapitre {{ next.roman }} : {{ next.title }} →
          </router-link>
          <router-link v-else :to="{ name: 'benin-examen' }">Passer l’examen blanc Bénin →</router-link>
        </nav>
        <p v-if="page === 0 && previous" style="margin-top:1rem">
          <router-link :to="{ name: 'benin-chapitre', params: { id: String(previous.num) } }">
            ← Chapitre {{ previous.roman }} : {{ previous.title }}
          </router-link>
        </p>
      </template>
    </section>
    <p v-else>Chapitre introuvable.</p>
  </div>
</template>
