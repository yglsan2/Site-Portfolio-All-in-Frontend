<script setup>
import { ref, onMounted, computed } from 'vue'
import { api } from '@/api/service'
import { useLocale } from '@/composables/useLocale'

const { t, pick } = useLocale()

const skills = ref([])
const projects = ref([])
const loading = ref(true)
const error = ref(null)

/** Compétence → projet où elle est réellement utilisée. */
const proofSlug = {
  1: 'site-hypnotisation',
  2: 'site-hypnotisation',
  3: 'dokilight',
  5: 'dokilight',
  6: 'dokilight',
  7: 'lumieres-ukraine',
  8: 'site-hypnotisation',
  9: 'userscripts',
  11: 'noublipo',
  12: 'dokilight',
  29: 'barrelmcd-python',
}

const byCategory = computed(() => {
  const map = {}
  for (const s of skills.value) {
    const cat = s.category || 'Autre'
    if (!map[cat]) map[cat] = []
    map[cat].push(s)
  }
  return map
})

const titleBySlug = computed(() => {
  const map = {}
  for (const p of projects.value) map[p.slug] = pick(p.title)
  return map
})

const categoriesOrder = ['Backend', 'Frontend', 'Mobile', 'Data', 'DevOps', 'Méthodes', 'Outils', 'Autre']

async function load() {
  loading.value = true
  error.value = null
  try {
    const [skillList, projectList] = await Promise.all([api.getSkills(), api.getProjects()])
    skills.value = skillList
    projects.value = projectList
  } catch (e) {
    error.value = e.message || 'Impossible de charger les compétences.'
    if (import.meta.env.DEV && console?.error) console.error('[SkillsView] load failed:', e)
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>

<template>
  <div>
    <h1 class="page-title text-2xl sm:text-3xl font-bold text-portfolio-text mb-2">{{ t('skills.title') }}</h1>
    <p class="text-portfolio-muted text-sm sm:text-base mb-8">{{ t('skills.lead') }}</p>
    <div v-if="loading" class="text-portfolio-muted flex items-center gap-2">
      <span class="inline-block w-2 h-2 rounded-full bg-portfolio-accent animate-pulse" />
      Chargement…
    </div>
    <div v-else-if="error" class="space-y-3">
      <p class="text-red-400">{{ error }}</p>
      <button type="button" class="touch-target-inline text-sm text-portfolio-accent hover:underline focus-visible-ring rounded px-3 py-2" @click="load">Réessayer</button>
    </div>
    <div v-else class="space-y-10">
      <section v-for="cat in categoriesOrder.filter(c => byCategory[c])" :key="cat">
        <h2 class="text-lg font-semibold text-portfolio-accent mb-4 flex items-center gap-2">
          <span class="w-1 h-5 rounded-full bg-portfolio-accent/80" aria-hidden="true" />
          {{ cat }}
        </h2>
        <ul class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <li v-for="s in byCategory[cat]" :key="s.id" class="card-pro">
            <p class="font-medium text-portfolio-text mb-2">{{ s.name }}</p>
            <div v-if="s.keywords?.length" class="flex flex-wrap gap-1.5">
              <span
                v-for="k in s.keywords"
                :key="k"
                class="text-xs px-2 py-0.5 rounded-lg bg-white/5 text-portfolio-muted border border-white/[0.04]"
              >
                {{ k }}
              </span>
            </div>
            <router-link
              v-if="proofSlug[s.id] && titleBySlug[proofSlug[s.id]]"
              :to="{ name: 'ProjectDetail', params: { slug: proofSlug[s.id] } }"
              class="mt-3 inline-flex text-sm link-accent"
            >
              {{ t('skills.proof') }} {{ titleBySlug[proofSlug[s.id]] }}
            </router-link>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
