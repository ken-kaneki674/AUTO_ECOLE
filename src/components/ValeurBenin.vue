<script setup>
import { computed } from 'vue'
import { valeursBenin } from '../data/valeursBenin.js'

const props = defineProps({
  k: { type: String, required: true },
})

const entry = computed(() => valeursBenin[props.k])
const title = computed(() => {
  const e = entry.value
  if (!e) return undefined
  return e.verified
    ? `${e.label} — ${e.source}`
    : `${e.label} : valeur à vérifier auprès du code de la route en vigueur`
})
</script>

<template>
  <span
    v-if="entry"
    class="region-value"
    :class="{ unverified: !entry.verified }"
    :title="title"
  >{{ entry.value }}<sup
      v-if="!entry.verified"
      class="flag"
      aria-label="valeur à vérifier"
    >⚠</sup></span>
  <span v-else class="region-value">{{ k }}</span>
</template>
