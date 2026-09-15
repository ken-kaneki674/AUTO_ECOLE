<script setup>
defineProps({
  label: { type: String, default: 'Astuce' },
})
</script>

<template>
  <div class="astuce">
    <span class="lab">{{ label }}</span>
    <slot />
  </div>
</template>
