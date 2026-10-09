<script setup>
import { ref } from 'vue'
import SearchBar from './components/SearchBar.vue'
import IconSprite from './components/IconSprite.vue'
import { useTheme } from './composables/useTheme.js'

const menuOpen = ref(false)
const { theme, toggleTheme } = useTheme()
</script>

<template>
  <IconSprite />
  <a href="#contenu" class="skip-link">Aller au contenu</a>

  <header class="site-bar">
    <div class="wrap">
      <router-link to="/" class="brand">Code de la route <span>de A à Z</span></router-link>

      <SearchBar />

      <button
        type="button"
        class="theme-toggle"
        :aria-label="theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'"
        :title="theme === 'dark' ? 'Thème clair' : 'Thème sombre'"
        @click="toggleTheme"
      >
        <svg v-if="theme === 'dark'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true">
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
        </svg>
      </button>

      <button
        type="button"
        class="menu-toggle"
        :aria-expanded="menuOpen"
        aria-controls="site-nav"
        @click="menuOpen = !menuOpen"
      >Menu</button>

      <nav id="site-nav" class="site-nav" :class="{ 'is-open': menuOpen }" @click="menuOpen = false">
        <router-link to="/">Accueil</router-link>
        <router-link :to="{ name: 'examen' }">Examen blanc</router-link>
        <router-link :to="{ name: 'benin' }">Questions officielles</router-link>
        <router-link :to="{ name: 'lexique' }">Lexique</router-link>
      </nav>

    </div>
  </header>

  <main id="contenu">
    <router-view />
  </main>
</template>
