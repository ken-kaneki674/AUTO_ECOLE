<script setup>
import { chapters } from '../data/chapters/chapter-meta.js'
import { chapterQuestionIds } from '../data/questionIds.js'
import ProgressBadge from './ProgressBadge.vue'
</script>

<template>
  <nav class="toc" aria-labelledby="toc-title">
    <h2 id="toc-title">Sommaire</h2>
    <ol>
      <li v-for="chapter in chapters" :key="chapter.id">
        <router-link :to="{ name: 'chapitre', params: { id: String(chapter.num) } }">
          <span class="n">{{ String(chapter.num).padStart(2, '0') }}</span>
          {{ chapter.title }}
          <ProgressBadge :question-ids="chapterQuestionIds(chapter.id)" />
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'examen' }">
          <span class="n">EX</span> Examen blanc : 30 questions
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'lexique' }">
          <span class="n">AN</span> Lexique &amp; fiches de révision
        </router-link>
      </li>
    </ol>
  </nav>
</template>
