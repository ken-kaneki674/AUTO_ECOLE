<script setup>
defineProps({
  label: { type: String, default: 'À retenir' },
})
</script>

<template>
  <div class="memo">
    <span class="lab">{{ label }}</span>
    <slot />
  </div>
</template>
