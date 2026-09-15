<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const num = computed(() => Number(route.params.id))

const modules = import.meta.glob('../chapters/Chapter*.vue')

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
