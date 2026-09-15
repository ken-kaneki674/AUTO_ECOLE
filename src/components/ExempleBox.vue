<script setup>
defineProps({
  label: { type: String, default: 'Exemple concret' },
})
</script>

<template>
  <div class="exemple">
    <span class="lab">{{ label }}</span>
    <slot />
  </div>
</template>
