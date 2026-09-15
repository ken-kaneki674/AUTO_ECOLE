<script setup>
import { ref } from 'vue'
import SearchBar from './components/SearchBar.vue'
import RegionToggle from './components/RegionToggle.vue'
import IconSprite from './components/IconSprite.vue'

const menuOpen = ref(false)
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
        class="menu-toggle"
        :aria-expanded="menuOpen"
        aria-controls="site-nav"
        @click="menuOpen = !menuOpen"
      >Menu</button>

      <nav id="site-nav" class="site-nav" :class="{ 'is-open': menuOpen }" @click="menuOpen = false">
        <router-link to="/">Accueil</router-link>
        <router-link :to="{ name: 'examen' }">Examen blanc</router-link>
        <router-link :to="{ name: 'lexique' }">Lexique</router-link>
      </nav>

      <RegionToggle />
    </div>
  </header>

  <main id="contenu">
    <router-view />
  </main>
</template>
