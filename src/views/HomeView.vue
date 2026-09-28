<script setup>
import TableOfContents from '../components/TableOfContents.vue'
import AttentionBox from '../components/AttentionBox.vue'
import { useRegion } from '../composables/useRegion.js'
import { beninQuestionCount } from '../data/benin/meta.js'

const { region } = useRegion()
</script>

<template>
  <header class="cover">
    <div class="wrap">
      <p class="eyebrow">Manuel de formation · Auto-école</p>
      <h1>Le code de la route<span>de A à Z</span></h1>
      <div class="route" />
      <p class="sous">Cours complet en 14 chapitres, illustré, avec exemples concrets, fiches mémo, plus de 100 questions de QCM et leurs corrigés types. Préparation à l'examen théorique du permis de conduire catégorie B et des permis deux-roues A1 / A2 / A3.</p>
      <div class="badges">
        <span class="badge">14 chapitres</span>
        <span class="badge">QCM interactifs corrigés</span>
        <span class="badge">Schémas &amp; panneaux</span>
        <span class="badge">Examen blanc final</span>
      </div>
    </div>
  </header>

  <div class="wrap">
    <router-link v-if="region === 'benin'" :to="{ name: 'benin' }" class="bj-callout">
      <span class="n">BJ</span>
      <span>
        <strong>Questions officielles du Bénin</strong> — {{ beninQuestionCount() }} questions du manuel DGTT
        (édition 2011) avec corrigés, et un examen blanc tiré au hasard.
      </span>
    </router-link>

    <TableOfContents />

    <AttentionBox label="Avertissement important" style="margin-top:26px">
      Ce manuel présente les règles communes aux codes de la route francophones (Bénin et espace UEMOA, France, etc.). <strong>Les chiffres qui varient d'un pays à l'autre</strong> — limitations de vitesse, taux d'alcoolémie, montants d'amendes, numéros d'urgence — sont signalés par le pictogramme « ⚠ à vérifier » et peuvent être basculés entre Bénin/UEMOA et France avec le sélecteur en haut de page. Confronte-les toujours au code en vigueur dans ton pays et aux consignes de ton auto-école, qui font seuls foi le jour de l'examen.
    </AttentionBox>
  </div>
</template>
