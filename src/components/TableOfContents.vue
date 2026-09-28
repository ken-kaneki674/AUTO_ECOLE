<script setup>
import { computed } from 'vue'
import { chapters } from '../data/chapters/chapter-meta.js'
import { chapterQuestionIds } from '../data/questionIds.js'
import { useQuizProgress } from '../composables/useQuizProgress.js'

const { stats } = useQuizProgress()

const cards = computed(() =>
  chapters.map((chapter) => {
    const s = stats(chapterQuestionIds(chapter.id))
    return { ...chapter, ...s, done: s.total > 0 && s.answered === s.total }
  })
)
</script>

<template>
  <nav aria-labelledby="toc-title">
    <h2 id="toc-title" class="home-h2">Le cours en 14 chapitres</h2>
    <ul class="bj-cards">
      <li v-for="c in cards" :key="c.id">
        <router-link :to="{ name: 'chapitre', params: { id: String(c.num) } }" class="bj-card cours">
          <span class="n">{{ String(c.num).padStart(2, '0') }}</span>
          <span class="t">{{ c.title }}</span>
          <span class="meta">QCM : {{ c.total }} questions</span>
          <span class="bar"><span :style="{ width: c.percent + '%' }" /></span>
          <span v-if="c.done" class="score good">✓ QCM terminé · {{ c.correct }}/{{ c.total }}</span>
          <span v-else-if="c.answered" class="score">{{ c.answered }}/{{ c.total }} questions faites</span>
          <span v-else class="score">Pas encore commencé</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'lexique' }" class="bj-card special">
          <span class="n">AN</span>
          <span class="t">Lexique &amp; fiches de révision</span>
          <span class="meta">Les chiffres clés et le vocabulaire à connaître</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
