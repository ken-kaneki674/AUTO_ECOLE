<script setup>
import { computed, ref, watch } from 'vue'
import QcmBlock from './QcmBlock.vue'
import QuestionTrainer from './QuestionTrainer.vue'
import { BENIN_FILTERS, beninChapters } from '../data/benin/meta.js'
import { useBeninSelection } from '../composables/useBeninSelection.js'
import { useQuizProgress } from '../composables/useQuizProgress.js'

// Série de questions de la banque DGTT : filtres de révision, affichage en liste
// paginée ou une question à la fois. L'état (filtre, mode, page) est piloté par le
// parent pour pouvoir le refléter dans l'URL.
const props = defineProps({
  questions: { type: Array, required: true },
  filter: { type: String, default: 'toutes' },
  mode: { type: String, default: 'liste' }, // 'liste' | 'cartes'
  page: { type: Number, default: 0 },
  limit: { type: Number, default: null },
  random: { type: Boolean, default: false },
  showChapter: { type: Boolean, default: false },
})
const emit = defineEmits(['update:filter', 'update:mode', 'update:page'])

const PAGE_SIZE = 25
const { counts, select, replay } = useBeninSelection()
const { getAnswer } = useQuizProgress()

const filterCounts = computed(() => counts(props.questions))

// Série figée : recalculée seulement quand on change de filtre ou de questions,
// ou quand on demande une nouvelle série.
const selection = ref([])
const generation = ref(0)
watch(
  [() => props.questions, () => props.filter, generation],
  () => {
    selection.value = select(props.questions, props.filter, { limit: props.limit, random: props.random })
  },
  { immediate: true }
)

// Compteur servant de clé aux listes pour les réinitialiser après « Les rejouer ».
const replays = ref(0)
function replayAll() {
  replay(selection.value)
  replays.value++
}

const answeredInSelection = computed(() => selection.value.filter((q) => getAnswer(q.id)).length)

const pageCount = computed(() => Math.ceil(selection.value.length / PAGE_SIZE))
const currentPage = computed(() => Math.min(props.page, Math.max(pageCount.value - 1, 0)))
const pageQuestions = computed(() =>
  selection.value.slice(currentPage.value * PAGE_SIZE, (currentPage.value + 1) * PAGE_SIZE)
)

function range(list) {
  if (!list.length) return ''
  const nums = list.map((q) => q.num)
  return `Q${Math.min(...nums)}–Q${Math.max(...nums)}`
}

function goToPage(index) {
  emit('update:page', index)
  document.querySelector('.bj-set')?.scrollIntoView()
}

function chapterOf(question) {
  return beninChapters.find((c) => c.num === question.chapter)
}
</script>

<template>
  <div class="bj-set">
    <div class="bj-toolbar">
      <div class="bj-chips" role="group" aria-label="Filtrer les questions">
        <button
          v-for="f in BENIN_FILTERS"
          :key="f.id"
          type="button"
          class="bj-chip"
          :aria-pressed="filter === f.id"
          :disabled="!filterCounts[f.id] && filter !== f.id"
          @click="emit('update:filter', f.id)"
        >{{ f.label }} <span>{{ filterCounts[f.id] }}</span></button>
      </div>
      <div class="bj-mode" role="group" aria-label="Affichage">
        <button type="button" :aria-pressed="mode === 'liste'" @click="emit('update:mode', 'liste')">Liste</button>
        <button type="button" :aria-pressed="mode === 'cartes'" @click="emit('update:mode', 'cartes')">1 par 1</button>
      </div>
    </div>
    <div v-if="filter === 'ratees' && answeredInSelection" class="bj-replay">
      <span>{{ answeredInSelection }} erreur(s) : la correction est affichée. Pour t'entraîner de nouveau sur ces questions :</span>
      <button type="button" class="exam-btn primary" @click="replayAll">Les rejouer</button>
    </div>

    <QuestionTrainer
      v-if="mode === 'cartes'"
      :key="`${filter}-${generation}-${replays}`"
      :questions="selection"
      :can-renew="random"
      @new-series="generation++"
    >
      <template #after-feedback="{ question }">
        <router-link v-if="showChapter && chapterOf(question)" :to="{ name: 'benin-chapitre', params: { id: String(question.chapter) } }">
          Chapitre {{ chapterOf(question).roman }} →
        </router-link>
      </template>
    </QuestionTrainer>

    <template v-else>
      <p v-if="!selection.length" class="trainer-empty">Aucune question ne correspond à ce filtre.</p>
      <template v-else>
        <nav v-if="pageCount > 1" class="bj-pager" aria-label="Pages de questions">
          <button
            v-for="(_, i) in pageCount"
            :key="i"
            type="button"
            :aria-current="i === currentPage ? 'page' : undefined"
            @click="goToPage(i)"
          >{{ range(selection.slice(i * PAGE_SIZE, (i + 1) * PAGE_SIZE)) }}</button>
        </nav>
        <QcmBlock :key="`${filter}-${currentPage}-${generation}-${replays}`" :title="range(pageQuestions)" :questions="pageQuestions">
          <template #after-feedback="{ question }">
            <router-link v-if="showChapter && chapterOf(question)" :to="{ name: 'benin-chapitre', params: { id: String(question.chapter) } }">
              Chapitre {{ chapterOf(question).roman }} →
            </router-link>
          </template>
        </QcmBlock>
        <nav v-if="pageCount > 1" class="bj-pager" aria-label="Pages suivantes">
          <button v-if="currentPage > 0" type="button" @click="goToPage(currentPage - 1)">← Page précédente</button>
          <button v-if="currentPage < pageCount - 1" type="button" @click="goToPage(currentPage + 1)">Page suivante →</button>
        </nav>
        <slot name="after-list" :last-page="currentPage >= pageCount - 1" />
      </template>
    </template>
  </div>
</template>
