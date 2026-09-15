<script setup>
import { useRegion } from '../composables/useRegion.js'

const { region, setRegion } = useRegion()
</script>

<template>
  <div class="region-toggle" role="group" aria-label="Région des valeurs réglementaires">
    <button
      type="button"
      :aria-pressed="region === 'benin'"
      @click="setRegion('benin')"
    >Bénin / UEMOA</button>
    <button
      type="button"
      :aria-pressed="region === 'france'"
      @click="setRegion('france')"
    >France</button>
  </div>
</template>
