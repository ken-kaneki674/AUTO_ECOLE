<script setup>
import { computed, onMounted, ref, shallowRef } from 'vue'
import { beninChapters, loadBeninBank } from '../data/benin/meta.js'
import { normalize } from '../composables/useSearch.js'

const bank = shallowRef(null)
const query = ref('')
const selected = ref(null)

onMounted(async () => {
  bank.value = await loadBeninBank()
})

// Une vignette par illustration du manuel, avec les questions qui l'utilisent.
const signs = computed(() => {
  const bySrc = new Map()
  for (const q of bank.value ?? []) {
    for (const src of q.images ?? []) {
      const entry = bySrc.get(src) ?? { src, questions: [], codes: new Set() }
      entry.questions.push(q)
      for (const code of q.signs ?? []) entry.codes.add(code)
      bySrc.set(src, entry)
    }
  }
  return [...bySrc.values()]
    .map((e) => ({
      ...e,
      codes: [...e.codes],
      first: Math.min(...e.questions.map((q) => q.num)),
      text: normalize([...e.codes, ...e.questions.map((q) => q.question)].join(' ')),
    }))
    .sort((a, b) => a.first - b.first)
})

const filtered = computed(() => {
  const terms = normalize(query.value.trim()).split(/\s+/).filter(Boolean)
  if (!terms.length) return signs.value
  return signs.value.filter((s) => terms.every((t) => s.text.includes(t)))
})

function caption(sign) {
  return sign.codes.length ? sign.codes.join(' · ') : `Q${sign.first}`
}

function chapterOf(question) {
  return beninChapters.find((c) => c.num === question.chapter)
}

function practiceLink(sign) {
  return { name: 'benin-entrainement', query: { ids: sign.questions.map((q) => q.id).join(',') } }
}
</script>

<template>
  <div class="wrap">
    <section class="chap">
      <div class="chap-head" style="background:var(--vert)">
        <span class="borne" style="color:var(--vert)">▲</span>
        <div>
          <span class="fil" style="color:#CDEBDD">Questions officielles DGTT</span>
          <h2>Catalogue des panneaux et illustrations</h2>
        </div>
      </div>
      <p class="obj">
        <b>{{ signs.length }} illustrations du manuel</b>
        Clique sur une image pour voir les questions qui s'y rapportent et t'entraîner dessus.
        <router-link :to="{ name: 'benin' }" style="margin-left:8px">← Questions officielles</router-link>
      </p>

      <p v-if="!bank">Chargement…</p>
      <template v-else>
        <div class="bj-search">
          <label for="bj-sign-filter" class="bj-search-label">Filtrer</label>
          <input id="bj-sign-filter" v-model="query" type="search" placeholder="Code (B6a1, AB6…) ou mot (virage, stationnement…)" autocomplete="off">
        </div>
        <p class="exam-legend">{{ filtered.length }} illustration(s)</p>

        <div v-if="selected" class="bj-sign-detail" role="region" aria-label="Détail de l'illustration">
          <button type="button" class="qcm-reset bj-close" @click="selected = null">Fermer ✕</button>
          <img :src="selected.src" :alt="`Illustration ${caption(selected)}`">
          <div>
            <h3>{{ caption(selected) }}</h3>
            <ul>
              <li v-for="q in selected.questions" :key="q.id">
                <strong>Q{{ q.num }}</strong> {{ q.question }}
                <router-link :to="{ name: 'benin-chapitre', params: { id: String(q.chapter) } }">
                  (chapitre {{ chapterOf(q)?.roman }})
                </router-link>
              </li>
            </ul>
            <router-link :to="practiceLink(selected)" class="exam-btn primary">
              S'entraîner sur {{ selected.questions.length > 1 ? `ces ${selected.questions.length} questions` : 'cette question' }}
            </router-link>
          </div>
        </div>

        <ul class="bj-signs">
          <li v-for="sign in filtered" :key="sign.src">
            <button
              type="button"
              :aria-pressed="selected?.src === sign.src"
              @click="selected = sign; $nextTick(() => $el.querySelector('.bj-sign-detail')?.scrollIntoView({ block: 'start' }))"
            >
              <img :src="sign.src" :alt="`Illustration ${caption(sign)}`" loading="lazy">
              <span>{{ caption(sign) }}</span>
            </button>
          </li>
        </ul>
      </template>
    </section>
  </div>
</template>
