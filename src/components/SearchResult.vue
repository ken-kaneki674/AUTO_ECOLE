<script setup>
import { computed } from 'vue'
import { highlight, snippet } from '../composables/useSearch.js'

// Un résultat de recherche : vignette (panneau / illustration), nature, titre et
// contexte avec les termes surlignés.
const props = defineProps({
  entry: { type: Object, required: true },
  terms: { type: Array, required: true },
  compact: { type: Boolean, default: false },
})

const title = computed(() => highlight(snippet(props.entry.title, props.terms, props.compact ? 110 : 200), props.terms))
const context = computed(() =>
  props.entry.context ? highlight(snippet(props.entry.context, props.terms, props.compact ? 90 : 180), props.terms) : null
)
// Pour une section du cours, un extrait du texte où le terme apparaît.
const excerpt = computed(() => {
  if (props.compact || props.entry.kind !== 'Section du cours' || !props.entry.text) return null
  return highlight(snippet(props.entry.text, props.terms, 200), props.terms)
})
</script>

<template>
  <span class="sr-item" :class="{ compact }">
    <span v-if="entry.svg" class="sr-thumb" aria-hidden="true" v-html="entry.svg" />
    <img v-else-if="entry.image" class="sr-thumb" :src="entry.image" alt="" loading="lazy">
    <span class="sr-body">
      <span class="sr-kind">{{ entry.kind }}</span>
      <span class="sr-title"><template v-for="(p, i) in title" :key="i"><mark v-if="p.mark">{{ p.text }}</mark><template v-else>{{ p.text }}</template></template></span>
      <span v-if="context" class="sr-context"><template v-for="(p, i) in context" :key="i"><mark v-if="p.mark">{{ p.text }}</mark><template v-else>{{ p.text }}</template></template></span>
      <span v-if="excerpt" class="sr-excerpt"><template v-for="(p, i) in excerpt" :key="i"><mark v-if="p.mark">{{ p.text }}</mark><template v-else>{{ p.text }}</template></template></span>
    </span>
  </span>
</template>
