<script setup>
/**
 * Page Projets : études de cas, puis les autres réalisations.
 */
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '@/api/service'
import { useLocale } from '@/composables/useLocale'

const router = useRouter()
const { t, pick } = useLocale()

const projects = ref([])
const loading = ref(true)
const error = ref(null)

const cases = computed(() => projects.value.filter((p) => p.caseStudy))
const others = computed(() => projects.value.filter((p) => !p.caseStudy))

async function load() {
  loading.value = true
  error.value = null
  try {
    projects.value = await api.getProjects()
  } catch (e) {
    error.value = e.message || 'Impossible de charger les projets.'
    if (import.meta.env.DEV && console?.error) console.error('[ProjectsView] load failed:', e)
  } finally {
    loading.value = false
  }
}

onMounted(load)

function openProject(project) {
  router.push({ name: 'ProjectDetail', params: { slug: project.slug } })
}
</script>

<template>
  <div>
    <h1 class="page-title text-2xl sm:text-3xl font-bold text-portfolio-text mb-2">{{ t('projects.title') }}</h1>
    <p class="text-portfolio-muted text-sm sm:text-base mb-10">{{ t('projects.lead') }}</p>
    <div v-if="loading" class="text-portfolio-muted flex items-center gap-2">
      <span class="inline-block w-2 h-2 rounded-full bg-portfolio-accent animate-pulse" />
      Chargement…
    </div>
    <div v-else-if="error" class="space-y-3">
      <p class="text-red-400">{{ error }}</p>
      <button type="button" class="touch-target-inline text-sm text-portfolio-accent hover:underline focus-visible-ring rounded px-3 py-2" @click="load">Réessayer</button>
    </div>
    <template v-else>
      <section class="mb-12">
        <h2 class="text-lg font-semibold text-portfolio-accent mb-4">{{ t('projects.cases') }}</h2>
        <ul class="grid gap-4">
          <li
            v-for="p in cases"
            :key="p.id"
            class="card-pro cursor-pointer"
            @click="openProject(p)"
          >
            <img
              v-if="p.image"
              :src="p.image"
              :alt="pick(p.imageAlt) || t('detail.visual')"
              class="mb-4 w-full max-h-48 object-cover rounded-xl border border-white/[0.06]"
            >
            <p
              v-if="p.badge"
              class="inline-flex items-center mb-3 text-xs font-medium tracking-wide uppercase text-portfolio-accent bg-portfolio-accent/10 border border-portfolio-accent/30 rounded-full px-2.5 py-1"
            >
              {{ p.badge }}
            </p>
            <h3 class="font-semibold text-portfolio-text text-lg mb-2">{{ pick(p.title) }}</h3>
            <p class="text-sm text-portfolio-muted mb-3">{{ pick(p.teaser || p.description) }}</p>
            <div class="flex flex-wrap gap-2 mb-3">
              <span
                v-for="tech in p.technologies"
                :key="tech"
                class="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-portfolio-muted border border-white/[0.04]"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex flex-wrap items-center gap-x-4 text-sm" @click.stop>
              <router-link
                :to="{ name: 'ProjectDetail', params: { slug: p.slug } }"
                class="link-accent font-medium inline-flex items-center gap-1 py-2"
              >
                {{ t('projects.detail') }}
                <span aria-hidden="true">→</span>
              </router-link>
              <a
                v-if="p.repoUrl"
                :href="p.repoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="link-accent inline-flex items-center gap-1.5 py-2"
              >
                GitHub
              </a>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-lg font-semibold text-portfolio-text mb-4">{{ t('projects.others') }}</h2>
        <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="p in others"
            :key="p.id"
            class="card-pro cursor-pointer"
            @click="openProject(p)"
          >
            <h3 class="font-semibold text-portfolio-text mb-1">{{ pick(p.title) }}</h3>
            <p class="text-sm text-portfolio-muted mb-2">{{ t('type.' + p.type) }}</p>
            <p class="text-sm text-portfolio-muted mb-3 line-clamp-3">{{ pick(p.description) }}</p>
            <div class="flex flex-wrap gap-2 mb-3">
              <span
                v-for="tech in (p.technologies || []).slice(0, 4)"
                :key="tech"
                class="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-portfolio-muted border border-white/[0.04]"
              >
                {{ tech }}
              </span>
            </div>
            <a
              v-if="p.repoUrl"
              :href="p.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="link-accent text-sm inline-flex items-center gap-1.5 py-2"
              @click.stop
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </template>
  </div>
</template>
