<script setup>
import { computed, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import ValeurBenin from '../components/ValeurBenin.vue'
import FlashCard from '../components/FlashCard.vue'
import { chiffres, mnemos, lexique, planRevision } from '../data/lexique.js'
import { chapters } from '../data/chapters/chapter-meta.js'
import { chapterQuestionIds } from '../data/questionIds.js'
import { beninChapters, beninQuestionIds } from '../data/benin/meta.js'
import { useQuizProgress } from '../composables/useQuizProgress.js'
import { normalize } from '../composables/useSearch.js'

// ----- A. Chiffres clés : tableau ou fiches -----
const chiffresMode = ref('tableau')
const revealed = reactive({})
const allChiffres = chiffres.flatMap((g) => g.items.map((item) => ({ ...item, theme: g.theme })))
const cardOrder = ref(allChiffres)

function toggle(key) {
  revealed[key] = !revealed[key]
}
function hideAll() {
  for (const key of Object.keys(revealed)) delete revealed[key]
}
function shuffleCards() {
  const copy = [...cardOrder.value]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  cardOrder.value = copy
  hideAll()
}
const revealedCount = computed(() => allChiffres.filter((c) => revealed[c.notion]).length)

// ----- C. Lexique : recherche et index alphabétique -----
// ?q=terme (lien depuis la recherche) pré-remplit le filtre du lexique.
const query = ref(String(useRoute().query.q ?? ''))
const letterOf = (term) => normalize(term)[0].toUpperCase()
const filteredTerms = computed(() => {
  const q = normalize(query.value.trim())
  if (!q) return lexique
  return lexique.filter((t) => normalize(`${t.terme} ${t.definition}`).includes(q))
})
const groups = computed(() => {
  const map = new Map()
  for (const t of filteredTerms.value) {
    const letter = letterOf(t.terme)
    if (!map.has(letter)) map.set(letter, [])
    map.get(letter).push(t)
  }
  return [...map.entries()]
})
const allLetters = [...new Set(lexique.map((t) => letterOf(t.terme)))]
const presentLetters = computed(() => new Set(groups.value.map(([l]) => l)))

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function goToLetter(letter) {
  scrollToSection(`lettre-${letter}`)
}

// ----- D. Plan de révision relié à la progression -----
const { stats } = useQuizProgress()
const plan = computed(() =>
  planRevision.map((week) => {
    const cours = week.cours.map((num) => {
      const chapter = chapters.find((c) => c.num === num)
      const s = stats(chapterQuestionIds(chapter.id))
      return { ...chapter, ...s, done: s.total > 0 && s.answered === s.total }
    })
    const dgtt = week.dgtt.map((num) => {
      const chapter = beninChapters.find((c) => c.num === num)
      const s = stats(beninQuestionIds(num))
      return { ...chapter, ...s, done: s.total > 0 && s.answered === s.total }
    })
    const items = [...cours, ...dgtt]
    const total = items.reduce((sum, i) => sum + i.total, 0)
    const answered = items.reduce((sum, i) => sum + i.answered, 0)
    return {
      ...week,
      cours,
      dgtt,
      percent: total ? Math.round((answered / total) * 100) : 0,
      done: items.every((i) => i.done),
    }
  })
)
</script>

<template>
  <div class="wrap">
    <section class="chap" id="lexique">
      <div class="chap-head" style="background:var(--asphalte-2)">
        <span class="borne" style="color:var(--asphalte-2)">AN</span>
        <div><span class="fil" style="color:var(--ambre)">Annexes</span><h2>Fiches de révision &amp; lexique</h2></div>
      </div>
      <nav class="lx-nav" aria-label="Sections de la page">
        <a href="#chiffres" @click.prevent="scrollToSection('chiffres')">Chiffres clés</a>
        <a href="#mnemos" @click.prevent="scrollToSection('mnemos')">Moyens mnémotechniques</a>
        <a href="#termes" @click.prevent="scrollToSection('termes')">Lexique</a>
        <a href="#plan" @click.prevent="scrollToSection('plan')">Plan de révision</a>
      </nav>

      <!-- A. Chiffres clés -->
      <div class="lx-head" id="chiffres">
        <h3>A. Les chiffres à connaître par cœur</h3>
        <div class="bj-mode" role="group" aria-label="Affichage des chiffres">
          <button type="button" :aria-pressed="chiffresMode === 'tableau'" @click="chiffresMode = 'tableau'">Tableau</button>
          <button type="button" :aria-pressed="chiffresMode === 'fiches'" @click="chiffresMode = 'fiches'">Fiches</button>
        </div>
      </div>
      <p class="lx-legend">
        <span class="lx-src dgtt">DGTT</span> chiffre donné par le manuel officiel (numéro de la question) ·
        <span class="lx-src cours">Cours</span> règle générale du cours ·
        <span class="region-value"><sup class="flag">⚠</sup></span> valeur à vérifier
      </p>

      <template v-if="chiffresMode === 'tableau'">
        <div v-for="group in chiffres" :key="group.theme" class="table-scroll">
          <table>
            <thead><tr><th colspan="3">{{ group.theme }}</th></tr></thead>
            <tbody>
              <tr v-for="item in group.items" :key="item.notion">
                <td>{{ item.notion }}</td>
                <td><strong><ValeurBenin v-if="item.k" :k="item.k" /><template v-else>{{ item.valeur }}</template></strong></td>
                <td class="lx-src-cell">
                  <span v-if="item.source === 'dgtt'" class="lx-src dgtt" :title="`Manuel DGTT, ${item.ref}`">DGTT {{ item.ref }}</span>
                  <span v-else-if="item.source === 'cours'" class="lx-src cours">Cours</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>

      <template v-else>
        <div class="lx-toolbar">
          <span>{{ revealedCount }} / {{ allChiffres.length }} réponses affichées</span>
          <button type="button" class="qcm-reset" @click="shuffleCards">Mélanger</button>
          <button type="button" class="qcm-reset" @click="hideAll">Tout masquer</button>
        </div>
        <div class="lx-cards">
          <FlashCard
            v-for="item in cardOrder"
            :key="item.notion"
            :revealed="Boolean(revealed[item.notion])"
            @toggle="toggle(item.notion)"
          >
            <template #front>
              <span class="lx-theme">{{ item.theme }}</span>
              {{ item.notion }}
            </template>
            <template #back>
              <ValeurBenin v-if="item.k" :k="item.k" /><template v-else>{{ item.valeur }}</template>
              <span v-if="item.ref" class="lx-ref">Manuel DGTT, {{ item.ref }}</span>
            </template>
          </FlashCard>
        </div>
      </template>

      <!-- B. Moyens mnémotechniques -->
      <h3 id="mnemos">B. Les moyens mnémotechniques</h3>
      <p class="lx-legend">Essaie de retrouver ce que cache chaque sigle, puis retourne la fiche.</p>
      <div class="lx-cards mnemo">
        <FlashCard
          v-for="m in mnemos"
          :key="m.sigle"
          :revealed="Boolean(revealed[m.sigle])"
          @toggle="toggle(m.sigle)"
        >
          <template #front>
            <span class="lx-sigle">{{ m.sigle }}</span>
            <span class="lx-theme">{{ m.role }}</span>
          </template>
          <template #back>{{ m.sens }}</template>
        </FlashCard>
      </div>

      <!-- C. Lexique -->
      <h3 id="termes">C. Lexique ({{ lexique.length }} termes)</h3>
      <div class="bj-search" style="margin-top:.4rem">
        <label for="lx-search" class="bj-search-label">Chercher un terme</label>
        <input id="lx-search" v-model="query" type="search" placeholder="Ex. : adhérence, PTAC, zébras…" autocomplete="off">
      </div>
      <nav class="lx-letters" aria-label="Index alphabétique">
        <button
          v-for="letter in allLetters"
          :key="letter"
          type="button"
          :disabled="!presentLetters.has(letter)"
          @click="goToLetter(letter)"
        >{{ letter }}</button>
      </nav>
      <p v-if="!groups.length" class="exam-legend">Aucun terme ne correspond à « {{ query }} ».</p>
      <div v-for="[letter, terms] in groups" :id="`lettre-${letter}`" :key="letter" class="lx-group">
        <span class="lx-letter">{{ letter }}</span>
        <dl>
          <template v-for="t in terms" :key="t.terme">
            <dt>
              {{ t.terme }}
              <span v-if="t.source === 'dgtt'" class="lx-src dgtt" title="Définition du manuel DGTT, chapitre I">DGTT</span>
            </dt>
            <dd>{{ t.definition }}</dd>
          </template>
        </dl>
      </div>

      <!-- D. Plan de révision -->
      <h3 id="plan">D. Plan de révision en 3 semaines</h3>
      <p class="lx-legend">Les cases se cochent toutes seules quand tu as répondu à toutes les questions d’un chapitre.</p>
      <ol class="lx-plan">
        <li v-for="week in plan" :key="week.titre" :class="{ done: week.done }">
          <div class="lx-plan-head">
            <strong>{{ week.done ? '✓ ' : '' }}{{ week.titre }}</strong>
            <span class="progress-badge">
              <span class="bar"><span :style="{ width: week.percent + '%' }" /></span>
              {{ week.percent }} %
            </span>
          </div>
          <p>{{ week.travail }}</p>
          <div class="lx-chips">
            <span class="lx-chips-label">Cours</span>
            <router-link
              v-for="c in week.cours"
              :key="`c${c.num}`"
              :to="{ name: 'chapitre', params: { id: String(c.num) } }"
              class="lx-chip"
              :class="{ done: c.done, started: c.answered && !c.done }"
              :title="`${c.title} — ${c.answered}/${c.total} questions`"
            >{{ c.done ? '✓' : '' }} {{ c.num }}. {{ c.title }}</router-link>
          </div>
          <div class="lx-chips">
            <span class="lx-chips-label">DGTT</span>
            <router-link
              v-for="c in week.dgtt"
              :key="`d${c.num}`"
              :to="{ name: 'benin-chapitre', params: { id: String(c.num) } }"
              class="lx-chip dgtt"
              :class="{ done: c.done, started: c.answered && !c.done }"
              :title="`${c.title} — ${c.answered}/${c.total} questions`"
            >{{ c.done ? '✓' : '' }} {{ c.roman }}. {{ c.title }} <small>{{ c.answered }}/{{ c.total }}</small></router-link>
          </div>
        </li>
        <li class="lx-plan-final">
          <strong>Et pour finir</strong>
          <p>Passe l’examen blanc à plusieurs jours d’intervalle jusqu’à dépasser régulièrement le seuil de réussite.</p>
          <router-link :to="{ name: 'examen' }" class="exam-btn primary" style="text-decoration:none;display:inline-flex">Examen blanc</router-link>
        </li>
      </ol>

      <div class="fin">
        <p><b>Comment utiliser ce manuel.</b> Lis un chapitre, ferme le document, écris de mémoire les points clés, puis fais le QCM sans regarder. Une réponse fausse n'est pas un échec : c'est exactement l'endroit où relire. Refais l'examen blanc à trois jours d'intervalle — la mémoire se construit par la répétition espacée, pas par la relecture.</p>
        <p><b>Rappel.</b> Les valeurs marquées ⚠ ne sont pas précisées par le manuel officiel de la DGTT. Vérifie-les auprès de ton auto-école ou du service des permis de conduire avant l'examen. Le code de la route béninois en vigueur reste la seule référence officielle.</p>
      </div>
    </section>
  </div>
</template>
