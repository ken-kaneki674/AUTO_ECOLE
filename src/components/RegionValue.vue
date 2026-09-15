<script setup>
import { computed } from 'vue'
import { useRegion } from '../composables/useRegion.js'
import { regionValues } from '../data/regionValues.js'

const props = defineProps({
  k: { type: String, required: true },
})

const { region } = useRegion()

const entry = computed(() => regionValues[props.k])
const value = computed(() => entry.value?.[region.value] ?? '—')
</script>

<template>
  <span
    v-if="entry"
    class="region-value"
    :class="{ unverified: !entry.verified }"
  >{{ value }}<sup
      v-if="!entry.verified"
      class="flag"
      :title="`${entry.label} : valeur à vérifier auprès du code de la route en vigueur`"
      aria-label="valeur à vérifier"
    >⚠</sup></span>
  <span v-else class="region-value">{{ k }}</span>
</template>
