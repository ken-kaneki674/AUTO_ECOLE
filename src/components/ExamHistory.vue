<script setup>
import { computed, ref } from 'vue'
import { PASS_RATE } from '../composables/useExamSession.js'
import { EXAM_THEMES } from '../data/examPool.js'

// Historique des examens blancs : courbe des scores (du plus ancien au plus récent)
// avec la ligne du seuil, puis la liste détaillée (qui sert aussi de vue tableau).
const props = defineProps({
  history: { type: Array, required: true }, // du plus récent au plus ancien
})
const emit = defineEmits(['clear'])

const W = 640
const H = 220
const PAD = { top: 16, right: 16, bottom: 30, left: 40 }
const threshold = Math.round(PASS_RATE * 100)

const points = computed(() => {
  const list = [...props.history].reverse()
  const n = list.length
  const innerW = W - PAD.left - PAD.right
  const innerH = H - PAD.top - PAD.bottom
  return list.map((h, i) => {
    const score = Math.round((h.correct / h.total) * 100)
    return {
      ...h,
      score,
      index: i + 1,
      x: PAD.left + (n === 1 ? innerW / 2 : (i / (n - 1)) * innerW),
      y: PAD.top + (1 - score / 100) * innerH,
    }
  })
})

const yOf = (v) => PAD.top + (1 - v / 100) * (H - PAD.top - PAD.bottom)
const path = computed(() => points.value.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' '))
const best = computed(() => Math.max(...points.value.map((p) => p.score)))
const hovered = ref(null)
const opened = ref(null)

function formatDate(timestamp, withTime = true) {
  return new Date(timestamp).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    ...(withTime ? { hour: '2-digit', minute: '2-digit' } : {}),
  })
}

function formatDuration(seconds) {
  return `${Math.floor(seconds / 60)} min ${String(seconds % 60).padStart(2, '0')} s`
}

function describe(h) {
  const c = h.config ?? {}
  const source = { dgtt: 'Manuel DGTT seul', cours: 'Cours seul' }[c.source] ?? 'Mixte'
  const themes = c.themes?.length
    ? c.themes.map((id) => EXAM_THEMES.find((t) => t.id === id)?.label).filter(Boolean).join(', ')
    : 'tous les thèmes'
  return `${source} · ${themes}${h.timed === false ? ' · sans chronomètre' : ''}`
}
</script>

<template>
  <div class="exam-history">
    <h3>Ma progression aux examens blancs</h3>
    <p class="exam-rule">
      {{ history.length }} examen(s) · meilleur score : <strong>{{ best }} %</strong> ·
      seuil de réussite : {{ threshold }} %
    </p>

    <figure v-if="points.length >= 2" class="eh-chart">
      <svg :viewBox="`0 0 ${W} ${H}`" role="img" :aria-label="`Scores des ${points.length} derniers examens, du plus ancien au plus récent`">
        <!-- grille et axe -->
        <g class="eh-grid">
          <template v-for="v in [0, 25, 50, 75, 100]" :key="v">
            <line :x1="PAD.left" :x2="W - PAD.right" :y1="yOf(v)" :y2="yOf(v)" />
            <text :x="PAD.left - 8" :y="yOf(v) + 4" text-anchor="end">{{ v }}</text>
          </template>
        </g>
        <!-- seuil -->
        <line class="eh-threshold" :x1="PAD.left" :x2="W - PAD.right" :y1="yOf(threshold)" :y2="yOf(threshold)" />
        <text class="eh-threshold-label" :x="W - PAD.right" :y="yOf(threshold) - 6" text-anchor="end">seuil {{ threshold }} %</text>
        <!-- courbe -->
        <path class="eh-line" :d="path" />
        <g v-for="p in points" :key="p.date">
          <circle
            class="eh-point"
            :class="p.passed ? 'ok' : 'ko'"
            :cx="p.x"
            :cy="p.y"
            r="5"
          />
          <!-- zone de survol plus large que le point -->
          <circle
            class="eh-hit"
            :cx="p.x"
            :cy="p.y"
            r="16"
            tabindex="0"
            :aria-label="`Examen ${p.index} du ${formatDate(p.date)} : ${p.correct} sur ${p.total}, ${p.passed ? 'réussi' : 'échoué'}`"
            @mouseenter="hovered = p"
            @focus="hovered = p"
            @mouseleave="hovered = null"
            @blur="hovered = null"
          />
          <text class="eh-x" :x="p.x" :y="H - 10" text-anchor="middle">{{ p.index }}</text>
        </g>
      </svg>
      <div
        v-if="hovered"
        class="eh-tooltip"
        :style="{ left: `${(hovered.x / W) * 100}%`, top: `${(hovered.y / H) * 100}%` }"
      >
        <strong>{{ hovered.score }} %</strong> — {{ hovered.correct }}/{{ hovered.total }}
        <span>{{ hovered.passed ? '✓ Réussi' : '✗ Échoué' }} · {{ formatDate(hovered.date) }}</span>
      </div>
      <figcaption>Score de chaque examen (numérotés du plus ancien au plus récent). Survole un point pour le détail.</figcaption>
    </figure>

    <ol class="eh-list">
      <li v-for="h in history" :key="h.date" :class="{ open: opened === h.date }">
        <button type="button" class="eh-row" :aria-expanded="opened === h.date" @click="opened = opened === h.date ? null : h.date">
          <span class="h-date">{{ formatDate(h.date) }}</span>
          <span class="h-bar"><span :class="h.passed ? 'ok' : 'ko'" :style="{ width: (h.correct / h.total) * 100 + '%' }" /></span>
          <strong>{{ h.correct }}/{{ h.total }}</strong>
          <span class="h-verdict" :class="h.passed ? 'ok' : 'ko'">{{ h.passed ? '✓ Réussi' : '✗ Échoué' }}</span>
        </button>
        <div v-if="opened === h.date" class="eh-detail">
          <p>{{ describe(h) }} · durée {{ formatDuration(h.duration) }}</p>
          <table v-if="h.themes?.length">
            <tbody>
              <tr v-for="t in h.themes" :key="t.label">
                <td>{{ t.label }}</td>
                <td><strong>{{ t.correct }}/{{ t.total }}</strong></td>
              </tr>
            </tbody>
          </table>
          <p v-else class="exam-legend">Détail par thème non disponible pour cet examen.</p>
        </div>
      </li>
    </ol>
    <button type="button" class="qcm-reset" @click="emit('clear')">Effacer l'historique</button>
  </div>
</template>
