import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useRegion } from '../composables/useRegion.js'

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
    // Banque de questions officielle du Bénin : accessible seulement en région Bénin.
    {
      path: '/benin',
      name: 'benin',
      component: () => import('../views/BeninHomeView.vue'),
      meta: { region: 'benin' },
    },
    {
      path: '/benin/chapitre/:id(\\d+)',
      name: 'benin-chapitre',
      component: () => import('../views/BeninChapterView.vue'),
      meta: { region: 'benin' },
    },
    {
      path: '/benin/examen',
      name: 'benin-examen',
      component: () => import('../views/BeninExamView.vue'),
      meta: { region: 'benin' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  const { region } = useRegion()
  if (to.meta.region && to.meta.region !== region.value) return { name: 'accueil' }
})

export default router
