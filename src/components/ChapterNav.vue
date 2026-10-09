<script setup>
// Boutons « chapitre précédent / suivant » affichés en bas d'un chapitre.
// previous et next : { to, label, title } ou null ; sans next, on propose l'examen blanc.
defineProps({
  previous: { type: Object, default: null },
  next: { type: Object, default: null },
})
</script>

<template>
  <nav class="chap-nav" aria-label="Chapitres">
    <router-link v-if="previous" :to="previous.to" class="prev">
      <span class="dir">← Chapitre précédent</span>
      <span class="t">{{ previous.label }}. {{ previous.title }}</span>
    </router-link>
    <router-link v-if="next" :to="next.to" class="next">
      <span class="dir">Chapitre suivant →</span>
      <span class="t">{{ next.label }}. {{ next.title }}</span>
    </router-link>
    <router-link v-else :to="{ name: 'examen' }" class="next">
      <span class="dir">Dernier chapitre terminé →</span>
      <span class="t">Passer l’examen blanc</span>
    </router-link>
  </nav>
</template>
