<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { search, ensureSearchIndex, queryTerms } from '../composables/useSearch.js'
import SearchResult from './SearchResult.vue'

const PER_GROUP = 3

const router = useRouter()
const query = ref('')
const open = ref(false)
const ready = ref(false)
const active = ref(-1)

watch(query, (value) => {
  active.value = -1
  if (value.trim().length >= 2 && !ready.value) ensureSearchIndex().then(() => (ready.value = true))
})

const results = computed(() => (ready.value ? search(query.value, { perGroup: PER_GROUP }) : { groups: [], total: 0 }))
const terms = computed(() => queryTerms(query.value))
// Liste à plat pour la navigation au clavier.
const flat = computed(() => results.value.groups.flatMap((g) => g.items))

function close() {
  open.value = false
  active.value = -1
}

function go(entry) {
  close()
  query.value = ''
  router.push(entry.to)
}

function seeAll(type) {
  const q = query.value.trim()
  close()
  router.push({ name: 'recherche', query: { q, ...(type ? { type } : {}) } })
}

function onKey(event) {
  if (!open.value) open.value = true
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    active.value = Math.min(active.value + 1, flat.value.length - 1)
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    active.value = Math.max(active.value - 1, -1)
  } else if (event.key === 'Enter') {
    event.preventDefault()
    if (active.value >= 0) go(flat.value[active.value])
    else if (query.value.trim().length >= 2) seeAll()
  } else if (event.key === 'Escape') {
    close()
  }
}
</script>

<template>
  <div class="search-bar">
    <label for="site-search" class="sr-only" style="position:absolute;left:-9999px">Rechercher dans tout le manuel</label>
    <input
      id="site-search"
      v-model="query"
      type="search"
      placeholder="Rechercher : priorité, B6a1, alcool…"
      autocomplete="off"
      role="combobox"
      aria-controls="site-search-results"
      :aria-expanded="open && query.trim().length >= 2"
      @focus="open = true"
      @blur="close"
      @keydown="onKey"
    >
    <div
      v-if="open && query.trim().length >= 2"
      id="site-search-results"
      class="search-results"
      role="listbox"
      @mousedown.prevent
    >
      <p v-if="!ready" class="search-empty">Recherche en cours…</p>
      <template v-else-if="results.total">
        <div v-for="group in results.groups" :key="group.id" class="sr-group">
          <p class="sr-group-head">
            <span>{{ group.icon }} {{ group.label }}</span>
            <button v-if="group.total > group.items.length" type="button" @click="seeAll(group.id)">
              {{ group.total }} résultats →
            </button>
          </p>
          <a
            v-for="entry in group.items"
            :key="entry.kind + entry.title"
            href="#"
            role="option"
            :aria-selected="flat[active] === entry"
            :class="{ 'is-active': flat[active] === entry }"
            @click.prevent="go(entry)"
          ><SearchResult :entry="entry" :terms="terms" compact /></a>
        </div>
        <button type="button" class="sr-all" @click="seeAll()">
          Voir les {{ results.total }} résultats pour « {{ query.trim() }} » →
        </button>
      </template>
      <p v-else class="search-empty">Aucun résultat pour « {{ query }} ».</p>
    </div>
  </div>
</template>
