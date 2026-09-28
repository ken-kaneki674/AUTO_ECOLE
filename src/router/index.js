import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'accueil', component: HomeView },
    {
      path: '/chapitre/:id(\\d+)',
      name: 'chapitre',
      component: () => import('../views/ChapterView.vue'),
    },
    {
      path: '/examen',
      name: 'examen',
      component: () => import('../views/ExamView.vue'),
    },
    {
      path: '/lexique',
      name: 'lexique',
      component: () => import('../views/LexiqueView.vue'),
    },
    // Banque de questions officielle du manuel DGTT.
    {
      path: '/benin',
      name: 'benin',
      component: () => import('../views/BeninHomeView.vue'),
    },
    {
      path: '/benin/chapitre/:id(\\d+)',
      name: 'benin-chapitre',
      component: () => import('../views/BeninChapterView.vue'),
    },
    {
      path: '/benin/examen',
      name: 'benin-examen',
      component: () => import('../views/BeninExamView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
