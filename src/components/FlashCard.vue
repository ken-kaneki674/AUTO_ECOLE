<script setup>
// Fiche de révision : la question au recto, la réponse cachée au verso.
defineProps({
  revealed: { type: Boolean, default: false },
})
const emit = defineEmits(['toggle'])
</script>

<template>
  <button
    type="button"
    class="flash"
    :class="{ 'is-revealed': revealed }"
    :aria-expanded="revealed"
    @click="emit('toggle')"
  >
    <span class="flash-front"><slot name="front" /></span>
    <span v-if="revealed" class="flash-back"><slot name="back" /></span>
    <span v-else class="flash-hint">Voir la réponse</span>
  </button>
</template>
