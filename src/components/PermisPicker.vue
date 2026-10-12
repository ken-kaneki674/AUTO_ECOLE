<script setup>
import { PERMIS, ALL_PERMIS, usePermis } from '../composables/usePermis.js'

const { permis, setPermis } = usePermis()
const options = [...PERMIS.map((p) => ({ id: p.id, label: p.label, name: p.name })), { id: ALL_PERMIS, label: 'Tous', name: 'tous les chapitres' }]
</script>

<template>
  <div class="permis-picker">
    <span class="permis-picker-label">Je prépare le permis</span>
    <div class="bj-chips" role="group" aria-label="Permis préparé">
      <button
        v-for="o in options"
        :key="o.id"
        type="button"
        class="bj-chip"
        :aria-pressed="permis === o.id"
        :title="o.name"
        @click="setPermis(o.id)"
      >
        {{ o.label }}<span>{{ o.name }}</span>
      </button>
    </div>
  </div>
</template>
