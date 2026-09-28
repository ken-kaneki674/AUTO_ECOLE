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
      path: '/benin/entrainement',
      name: 'benin-entrainement',
      component: () => import('../views/BeninPracticeView.vue'),
    },
    {
      path: '/benin/panneaux',
      name: 'benin-panneaux',
      component: () => import('../views/BeninSignsView.vue'),
    },
    // Ancienne adresse de l'examen officiel, fusionné dans l'examen blanc.
    { path: '/benin/examen', redirect: { name: 'examen' } },
  ],
  scrollBehavior(to, from) {
    // Un simple changement de paramètres (filtre, page…) ne remonte pas en haut.
    if (to.hash) return { el: to.hash, top: 12, behavior: 'smooth' }
    if (to.path === from.path) return false
    return { top: 0 }
  },
})

export default router
