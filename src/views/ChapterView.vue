<script setup>
import { computed, shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import { chapters } from '../data/chapters/chapter-meta.js'

const route = useRoute()
const num = computed(() => Number(route.params.id))

const modules = import.meta.glob('../chapters/Chapter*.vue')

// Chargé à la main (plutôt que defineAsyncComponent) pour n'afficher la navigation
// de bas de page qu'une fois le chapitre rendu.
const component = shallowRef(null)
const missing = computed(() => !modules[`../chapters/Chapter${num.value}.vue`])

watch(
  num,
  async (value) => {
    component.value = null
    const loader = modules[`../chapters/Chapter${value}.vue`]
    if (!loader) return
    const mod = await loader()
    if (value === num.value) component.value = mod.default
  },
  { immediate: true }
)

const previous = computed(() => chapters.find((c) => c.num === num.value - 1))
const next = computed(() => chapters.find((c) => c.num === num.value + 1))
const to = (c) => ({ name: 'chapitre', params: { id: String(c.num) } })
</script>

<template>
  <div class="wrap">
    <p v-if="missing">Chapitre introuvable.</p>
    <template v-else-if="component">
      <component :is="component" :key="num" />
      <nav class="chap-nav" aria-label="Chapitres">
        <router-link v-if="previous" :to="to(previous)" class="prev">
          <span class="dir">← Chapitre précédent</span>
          <span class="t">{{ previous.num }}. {{ previous.title }}</span>
        </router-link>
        <router-link v-if="next" :to="to(next)" class="next">
          <span class="dir">Chapitre suivant →</span>
          <span class="t">{{ next.num }}. {{ next.title }}</span>
        </router-link>
        <router-link v-else :to="{ name: 'examen' }" class="next">
          <span class="dir">Dernier chapitre terminé →</span>
          <span class="t">Passer l’examen blanc</span>
        </router-link>
      </nav>
    </template>
  </div>
</template>
