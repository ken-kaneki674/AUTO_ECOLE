<script setup>
import { computed, ref, shallowRef } from 'vue'
import QcmBlock from './QcmBlock.vue'
import { beninChapters, loadBeninBank } from '../data/benin/meta.js'
import { normalize } from '../composables/useSearch.js'

const MAX_RESULTS = 20

const query = ref('')
const bank = shallowRef(null)

// La banque n'est chargée qu'au premier usage du champ.
function ensureBank() {
  if (!bank.value) loadBeninBank().then((list) => (bank.value = list))
}

const index = computed(() =>
  (bank.value ?? []).map((q) => ({
    q,
    text: normalize([q.question, ...q.choices, ...(q.signs ?? [])].join(' ')),
    signs: (q.signs ?? []).map((s) => s.toLowerCase()),
  }))
)

const matches = computed(() => {
  const raw = query.value.trim()
  if (raw.length < 2 || !bank.value) return []
  // « Q518 », « q 518 » ou « 518 » : recherche par numéro du manuel.
  const numMatch = raw.match(/^q?\s*(\d{1,3})$/i)
  if (numMatch) return bank.value.filter((q) => q.num === Number(numMatch[1]))
  const terms = normalize(raw).split(/\s+/).filter(Boolean)
  return index.value
    .filter(({ text, signs }) => terms.every((t) => text.includes(t) || signs.includes(t)))
    .map(({ q }) => q)
})

const results = computed(() => matches.value.slice(0, MAX_RESULTS))

function chapterOf(question) {
  return beninChapters.find((c) => c.num === question.chapter)
}
</script>

<template>
  <div class="bj-search">
    <label for="bj-search-input" class="bj-search-label">Rechercher une question</label>
    <input
      id="bj-search-input"
      v-model="query"
      type="search"
      placeholder="Numéro (Q518), code de panneau (B6a1) ou mot-clé (zébras)…"
      autocomplete="off"
      @focus="ensureBank"
      @input="ensureBank"
    >
    <template v-if="query.trim().length >= 2">
      <p v-if="!bank" class="exam-legend">Chargement…</p>
      <p v-else-if="!matches.length" class="exam-legend">Aucune question ne correspond à « {{ query }} ».</p>
      <template v-else>
        <p class="exam-legend">
          {{ matches.length }} résultat(s)<template v-if="matches.length > MAX_RESULTS"> — les {{ MAX_RESULTS }} premiers sont affichés, précise ta recherche</template>.
        </p>
        <QcmBlock title="Résultats" :questions="results">
          <template #after-feedback="{ question }">
            <router-link :to="{ name: 'benin-chapitre', params: { id: String(question.chapter) } }">
              Chapitre {{ chapterOf(question)?.roman }} →
            </router-link>
          </template>
        </QcmBlock>
      </template>
    </template>
  </div>
</template>
