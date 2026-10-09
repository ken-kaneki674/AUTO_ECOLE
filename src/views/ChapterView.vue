<script setup>
import { computed, shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import { chapters } from '../data/chapters/chapter-meta.js'
import ChapterNav from '../components/ChapterNav.vue'

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

function navItem(c) {
  return c ? { to: { name: 'chapitre', params: { id: String(c.num) } }, label: c.num, title: c.title } : null
}
const previous = computed(() => navItem(chapters.find((c) => c.num === num.value - 1)))
const next = computed(() => navItem(chapters.find((c) => c.num === num.value + 1)))
</script>

<template>
  <div class="wrap">
    <p v-if="missing">Chapitre introuvable.</p>
    <template v-else-if="component">
      <component :is="component" :key="num" />
      <ChapterNav :previous="previous" :next="next" />
    </template>
  </div>
</template>
