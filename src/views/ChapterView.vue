<script setup>
import { computed, defineAsyncComponent, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const num = computed(() => Number(route.params.id))

const modules = import.meta.glob('../chapters/Chapter*.vue')

// ?section=2.1 : défile jusqu'à la section une fois le chapitre chargé
// (lien depuis la recherche). Le composant arrive de façon asynchrone.
watch(
  () => [num.value, route.query.section],
  ([, section]) => {
    if (!section) return
    let tries = 0
    const find = () => {
      const heading = [...document.querySelectorAll('.chap h3')].find((h) => h.textContent.trim().startsWith(`${section} `))
      if (heading) {
        heading.scrollIntoView({ block: 'start' })
        heading.classList.add('is-target')
        setTimeout(() => heading.classList.remove('is-target'), 2500)
      } else if (tries++ < 30) setTimeout(find, 100)
    }
    find()
  },
  { immediate: true }
)

const component = computed(() => {
  const path = `../chapters/Chapter${num.value}.vue`
  const loader = modules[path]
  return loader ? defineAsyncComponent(loader) : null
})
</script>

<template>
  <div class="wrap">
    <component :is="component" v-if="component" :key="num" />
    <p v-else>Chapitre introuvable.</p>
  </div>
</template>
