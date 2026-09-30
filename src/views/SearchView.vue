<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { search, ensureSearchIndex, queryTerms } from '../composables/useSearch.js'
import { SEARCH_TYPES } from '../data/searchIndex.js'
import SearchResult from '../components/SearchResult.vue'

const PAGE = 20
const SUGGESTIONS = ['priorité', 'stationnement', 'alcool', 'B6a1', 'giratoire', 'freinage', 'PLS', 'permis B']

const route = useRoute()
const router = useRouter()
const ready = ref(false)
const input = ref(String(route.query.q ?? ''))
const shown = ref({})

onMounted(() => ensureSearchIndex().then(() => (ready.value = true)))

const q = computed(() => String(route.query.q ?? ''))
const type = computed(() => (SEARCH_TYPES.some((t) => t.id === route.query.type) ? route.query.type : null))
const terms = computed(() => queryTerms(q.value))

// Tous les groupes pour les compteurs, et les résultats du type choisi.
const all = computed(() => (ready.value ? search(q.value) : { groups: [], total: 0 }))
const groups = computed(() => (type.value ? all.value.groups.filter((g) => g.id === type.value) : all.value.groups))

watch(q, (value) => {
  input.value = value
  shown.value = {}
})

function submit() {
  router.replace({ query: { q: input.value.trim(), ...(type.value ? { type: type.value } : {}) } })
}

function setType(id) {
  router.replace({ query: { q: q.value, ...(id ? { type: id } : {}) } })
}

function limitFor(group) {
  return shown.value[group.id] ?? (type.value ? PAGE : 5)
}
function more(group) {
  shown.value = { ...shown.value, [group.id]: limitFor(group) + PAGE }
}
</script>

<template>
  <div class="wrap">
    <section class="chap">
      <div class="chap-head" style="background:var(--asphalte)">
        <span class="borne" style="color:var(--asphalte)">⌕</span>
        <div><span class="fil" style="color:var(--ambre)">Recherche dans tout le manuel</span><h2>{{ q ? `« ${q} »` : 'Rechercher' }}</h2></div>
      </div>

      <form class="sv-form" role="search" @submit.prevent="submit">
        <label for="sv-input" class="bj-search-label">Cours, panneaux, questions, lexique</label>
        <div class="sv-row">
          <input id="sv-input" v-model="input" type="search" placeholder="Ex. : priorité, B6a1, alcool, zébras…" autocomplete="off">
          <button type="submit" class="exam-btn primary">Rechercher</button>
        </div>
      </form>

      <template v-if="!q">
        <p class="exam-legend">Quelques idées :</p>
        <div class="sv-suggest">
          <router-link v-for="s in SUGGESTIONS" :key="s" :to="{ name: 'recherche', query: { q: s } }" class="lx-chip">{{ s }}</router-link>
        </div>
      </template>

      <p v-else-if="!ready" class="exam-legend">Recherche en cours…</p>

      <template v-else>
        <nav class="sv-tabs" aria-label="Filtrer par nature">
          <button type="button" :aria-pressed="!type" @click="setType(null)">Tout <span>{{ all.total }}</span></button>
          <button
            v-for="t in SEARCH_TYPES"
            :key="t.id"
            type="button"
            :aria-pressed="type === t.id"
            :disabled="!all.groups.find((g) => g.id === t.id)"
            @click="setType(t.id)"
          >{{ t.icon }} {{ t.label }} <span>{{ all.groups.find((g) => g.id === t.id)?.total ?? 0 }}</span></button>
        </nav>

        <p v-if="!all.total" class="trainer-empty">
          Aucun résultat pour « {{ q }} ». Essaie un mot plus court ou sans accent, ou un code de panneau (ex. B6a1).
        </p>

        <section v-for="group in groups" :key="group.id" class="sv-group">
          <h3>{{ group.icon }} {{ group.label }} <small>{{ group.total }}</small></h3>
          <ul class="sv-list">
            <li v-for="entry in group.items.slice(0, limitFor(group))" :key="entry.kind + entry.title">
              <router-link :to="entry.to"><SearchResult :entry="entry" :terms="terms" /></router-link>
            </li>
          </ul>
          <button v-if="group.total > limitFor(group) && type" type="button" class="qcm-reset" @click="more(group)">
            Afficher plus ({{ group.total - limitFor(group) }} restants)
          </button>
          <button v-else-if="group.total > limitFor(group)" type="button" class="qcm-reset" @click="setType(group.id)">
            Voir les {{ group.total }} résultats →
          </button>
        </section>
      </template>
    </section>
  </div>
</template>
