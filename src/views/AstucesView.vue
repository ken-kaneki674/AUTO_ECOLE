<script setup>
import { computed, reactive, ref } from 'vue'
import FlashCard from '../components/FlashCard.vue'
import { themes, astuces, penseBetes, pieges } from '../data/astuces.js'

// ----- Filtre par thème, commun aux trois sections -----
const theme = ref('')
const byTheme = (list) => (theme.value ? list.filter((i) => i.theme === theme.value) : list)
const shownAstuces = computed(() => byTheme(astuces))
const shownPieges = computed(() => byTheme(pieges))
const shownPenseBetes = computed(() => {
  const map = new Map()
  for (const item of byTheme(penseBetes)) {
    if (!map.has(item.theme)) map.set(item.theme, [])
    map.get(item.theme).push(item)
  }
  return [...map.entries()]
})

// ----- Pièges : la correction se dévoile au clic -----
const revealed = reactive({})
const revealedCount = computed(() => shownPieges.value.filter((p) => revealed[p.piege]).length)
function toggle(key) {
  revealed[key] = !revealed[key]
}
function showAll() {
  for (const p of shownPieges.value) revealed[p.piege] = true
}
function hideAll() {
  for (const key of Object.keys(revealed)) delete revealed[key]
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div class="wrap">
    <section class="chap" id="astuces">
      <div class="chap-head" style="background:var(--asphalte-2)">
        <span class="borne" style="color:var(--asphalte-2)">AP</span>
        <div><span class="fil" style="color:var(--ambre)">Annexes</span><h2>Astuces, pense-bêtes &amp; pièges</h2></div>
      </div>
      <nav class="lx-nav" aria-label="Sections de la page">
        <a href="#astuces-liste" @click.prevent="scrollToSection('astuces-liste')">Astuces</a>
        <a href="#pense-betes" @click.prevent="scrollToSection('pense-betes')">Pense-bêtes</a>
        <a href="#pieges" @click.prevent="scrollToSection('pieges')">Pièges</a>
      </nav>

      <div class="ap-filter" role="group" aria-label="Filtrer par thème">
        <button type="button" class="lx-chip" :aria-pressed="theme === ''" @click="theme = ''">Tous les thèmes</button>
        <button
          v-for="t in themes"
          :key="t"
          type="button"
          class="lx-chip"
          :aria-pressed="theme === t"
          @click="theme = theme === t ? '' : t"
        >{{ t }}</button>
      </div>

      <!-- A. Astuces -->
      <h3 id="astuces-liste">A. Astuces <small class="ap-count">{{ shownAstuces.length }}</small></h3>
      <p class="lx-legend">Des méthodes pour trouver la bonne réponse ou retenir une règle sans effort.</p>
      <p v-if="!shownAstuces.length" class="exam-legend">Pas d’astuce pour ce thème : regarde les pense-bêtes et les pièges ci-dessous.</p>
      <div class="ap-grid">
        <div v-for="a in shownAstuces" :key="a.titre" class="astuce">
          <span class="lab">{{ a.titre }}</span>
          {{ a.texte }}
          <span class="ap-meta">
            <span class="lx-theme">{{ a.theme }}</span>
            <router-link v-if="a.ch" :to="{ name: 'chapitre', params: { id: String(a.ch) } }">Chapitre {{ a.ch }}</router-link>
            <span v-if="a.ref" class="lx-src dgtt" :title="`Manuel DGTT, ${a.ref}`">DGTT {{ a.ref }}</span>
          </span>
        </div>
      </div>

      <!-- B. Pense-bêtes -->
      <h3 id="pense-betes">B. Pense-bêtes</h3>
      <p class="lx-legend">Les phrases courtes à se répéter jusqu’à ce qu’elles sortent toutes seules.</p>
      <p v-if="!shownPenseBetes.length" class="exam-legend">Pas de pense-bête pour ce thème.</p>
      <div v-for="[t, items] in shownPenseBetes" :key="t" class="memo ap-memo">
        <span class="lab">{{ t }}</span>
        <ul>
          <li v-for="p in items" :key="p.texte">
            {{ p.texte }}
            <router-link v-if="p.ch" :to="{ name: 'chapitre', params: { id: String(p.ch) } }" class="ap-ch" :title="`Chapitre ${p.ch}`">ch. {{ p.ch }}</router-link>
            <span v-if="p.ref" class="lx-src dgtt" :title="`Manuel DGTT, ${p.ref}`">{{ p.ref }}</span>
          </li>
        </ul>
      </div>

      <!-- C. Pièges -->
      <div class="lx-head" id="pieges">
        <h3>C. Pièges <small class="ap-count">{{ shownPieges.length }}</small></h3>
      </div>
      <p class="lx-legend">Chaque phrase sonne juste… et pourtant elle est fausse ou incomplète. Trouve l’erreur, puis retourne la fiche.</p>
      <div class="lx-toolbar">
        <span>{{ revealedCount }} / {{ shownPieges.length }} corrections affichées</span>
        <button type="button" class="qcm-reset" @click="showAll">Tout afficher</button>
        <button type="button" class="qcm-reset" @click="hideAll">Tout masquer</button>
      </div>
      <p v-if="!shownPieges.length" class="exam-legend">Pas de piège pour ce thème.</p>
      <div class="lx-cards ap-pieges">
        <FlashCard
          v-for="p in shownPieges"
          :key="p.piege"
          :revealed="Boolean(revealed[p.piege])"
          @toggle="toggle(p.piege)"
        >
          <template #front>
            <span class="lx-theme">{{ p.theme }}</span>
            « {{ p.piege }} »
          </template>
          <template #back>
            <span class="ap-faux">Piège</span>
            {{ p.verite }}
            <span class="lx-ref">Chapitre {{ p.ch }}<template v-if="p.ref"> · Manuel DGTT, {{ p.ref }}</template></span>
          </template>
        </FlashCard>
      </div>

      <div class="fin">
        <p><b>Comment s’en servir.</b> Lis les astuces une fois, puis reviens chaque jour sur les pense-bêtes et sur les pièges que tu as ratés. Quand tu les retournes tous sans te tromper, passe un examen blanc.</p>
        <p><b>Rappel.</b> Ces fiches résument le cours et le manuel de la DGTT (édition 2011). Le code de la route béninois en vigueur et les consignes de ton auto-école restent la référence le jour de l’examen.</p>
      </div>
    </section>
  </div>
</template>
