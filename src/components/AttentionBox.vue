<script setup>
defineProps({
  label: { type: String, default: 'Attention' },
})
</script>

<template>
  <div class="attention">
    <span class="lab">{{ label }}</span>
    <slot />
  </div>
</template>
