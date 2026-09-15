<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSearch } from '../composables/useSearch.js'

const { query, results } = useSearch()
const router = useRouter()
const open = ref(false)

const kindLabels = { chapitre: 'Chapitre', question: 'Question', examen: 'Examen blanc' }

function go(entry) {
  open.value = false
  query.value = ''
  if (entry.to) router.push(entry.to)
}
</script>

<template>
  <div class="search-bar">
    <label for="site-search" class="sr-only" style="position:absolute;left:-9999px">Rechercher dans le manuel</label>
    <input
      id="site-search"
      v-model="query"
      type="search"
      placeholder="Rechercher un chapitre, une question…"
      @focus="open = true"
      @blur="open = false"
    >
    <div v-if="open && query.trim().length >= 2" class="search-results" @mousedown.prevent>
      <template v-if="results.length">
        <a
          v-for="(entry, i) in results"
          :key="i"
          href="#"
          @click.prevent="go(entry)"
        >
          <span class="kind">{{ kindLabels[entry.type] }} · {{ entry.title }}</span>
          {{ entry.text }}
        </a>
      </template>
      <p v-else class="search-empty">Aucun résultat pour « {{ query }} ».</p>
    </div>
  </div>
</template>
