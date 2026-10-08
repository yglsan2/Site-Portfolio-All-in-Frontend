<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from '@/api/service'
import { useLocale } from '@/composables/useLocale'
import CodeBlock from '@/components/CodeBlock.vue'

const route = useRoute()
const router = useRouter()
const { t, pick } = useLocale()
const project = ref(null)
const snippets = ref([])
const loading = ref(true)
const error = ref(null)

const slug = computed(() => route.params.slug)
const zooming = ref(false)

function zoomToSite(event) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  event.preventDefault()
  zooming.value = true
  const href = event.currentTarget.href
  window.setTimeout(() => window.location.assign(href), 420)
}

async function load() {
  if (!slug.value) return
  loading.value = true
  error.value = null
  try {
    project.value = await api.getProjectBySlug(slug.value)
    try {
      snippets.value = await api.getSnippetsByProjectId(project.value.id)
    } catch (e2) {
      if (import.meta.env.DEV && console?.warn) console.warn('[ProjectDetailView] snippets load failed, keeping project', e2)
      snippets.value = []
    }
  } catch (e) {
    error.value = e.status === 404 ? 'Projet non trouvé.' : (e.message || 'Erreur de chargement.')
    project.value = null
    snippets.value = []
    if (import.meta.env.DEV && console?.error) console.error('[ProjectDetailView] load failed:', e)
  } finally {
    loading.value = false
  }
}

onMounted(load)
watch(slug, load)

function goBack() {
  router.push({ name: 'Projects' })
}
</script>

<template>
  <div class="w-full">
    <div class="container-pro">
      <button
        type="button"
        class="touch-target-inline mb-6 text-sm text-portfolio-muted hover:text-portfolio-accent transition-colors flex items-center gap-1.5 group py-2 -my-2 active:opacity-80"
        @click="goBack"
      >
        <span class="inline-block transition-transform group-hover:-translate-x-0.5">←</span>
        {{ t('projects.back') }}
      </button>

      <div v-if="loading" class="text-portfolio-muted flex items-center gap-2">
        <span class="inline-block w-2 h-2 rounded-full bg-portfolio-accent animate-pulse" />
        Chargement…
      </div>
      <div v-else-if="error" class="space-y-3">
        <p class="text-red-400">{{ error }}</p>
        <button type="button" class="touch-target-inline text-sm text-portfolio-accent hover:underline focus-visible-ring rounded px-3 py-2" @click="load">Réessayer</button>
      </div>
    </div>
    <template v-if="project && !loading && !error">
      <div
        v-if="project.projectUrl"
        class="site-preview mb-8"
        :class="{ 'is-zooming': zooming }"
      >
          <iframe
            :src="project.projectUrl"
            class="site-preview-frame"
            tabindex="-1"
            aria-hidden="true"
            title=""
          />
          <a
            :href="project.projectUrl"
            class="site-preview-link focus-visible-ring"
            @click="zoomToSite"
          >
            {{ t('detail.site') }}
            <span aria-hidden="true">→</span>
          </a>
      </div>
      <div class="container-pro">
      <article class="max-w-3xl">
        <header class="mb-10">
          <img
            v-if="project.image"
            :src="project.image"
            :alt="pick(project.imageAlt) || t('detail.visual')"
            class="mb-6 w-full rounded-2xl border border-white/[0.06]"
          >
          <img
            v-if="project.imageSecondary"
            :src="project.imageSecondary"
            :alt="pick(project.imageSecondaryAlt) || t('detail.visual')"
            class="mb-6 w-full rounded-2xl border border-white/[0.06]"
          >
          <p
            v-if="project.badge"
            class="inline-flex items-center mb-3 text-xs font-medium tracking-wide uppercase text-portfolio-accent bg-portfolio-accent/10 border border-portfolio-accent/30 rounded-full px-2.5 py-1"
          >
            {{ project.badge }}
          </p>
          <h1 class="text-2xl sm:text-3xl font-bold text-portfolio-text mb-2">
            {{ pick(project.title) }}
          </h1>
          <p class="text-portfolio-muted mb-6">{{ t('type.' + project.type) }}</p>
          <dl v-if="project.caseStudy" class="space-y-5 mb-6">
            <div v-for="key in ['problem', 'role', 'decision', 'result']" :key="key">
              <dt class="text-xs font-medium uppercase tracking-wide text-portfolio-accent mb-1">{{ t('case.' + key) }}</dt>
              <dd class="text-portfolio-muted leading-relaxed">{{ pick(project.caseStudy[key]) }}</dd>
            </div>
          </dl>
          <p v-else class="text-portfolio-muted leading-relaxed whitespace-pre-line">
            {{ pick(project.description) }}
          </p>
          <div class="flex flex-wrap gap-2 mt-4">
            <span
              v-for="tech in (project.technologies || [])"
              :key="tech"
              class="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-portfolio-muted border border-white/[0.04]"
            >
              {{ tech }}
            </span>
          </div>
          <div class="mt-5 flex flex-wrap gap-4">
            <a
              v-if="project.projectUrl"
              :href="project.projectUrl"
              class="touch-target-inline link-accent text-sm inline-flex items-center gap-1 group py-2"
            >
              {{ t('detail.site') }}
              <span class="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              v-if="project.repoUrl"
              :href="project.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="touch-target-inline link-accent text-sm inline-flex items-center gap-1 group py-2"
            >
              {{ t('detail.github') }}
              <span class="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </header>

        <section v-if="snippets.length" class="mt-10">
          <h2 class="text-lg font-semibold text-portfolio-accent mb-4">{{ t('detail.snippets') }}</h2>
          <ul class="space-y-6">
            <li v-for="(s, i) in snippets" :key="s.id" :class="['card-pro opacity-0 animate-fade-in-up', `stagger-${Math.min(i + 1, 10)}`]">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-medium text-portfolio-accent">{{ s.section }}</span>
                <span class="text-xs text-portfolio-muted">{{ s.language }}</span>
              </div>
              <h3 class="font-semibold text-portfolio-text mb-2">{{ s.title }}</h3>
              <p class="text-sm text-portfolio-muted mb-3">{{ s.description }}</p>
              <CodeBlock :code="s.code" :language="s.language" />
            </li>
          </ul>
        </section>
      </article>
      </div>
    </template>
  </div>
</template>

<style scoped>
.site-preview {
  position: relative;
  width: 100%;
  height: clamp(22rem, 52vw, 40rem);
  overflow: hidden;
  background: #071018;
}

.site-preview-frame {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  pointer-events: none;
  transform-origin: center top;
  transition: transform 0.45s ease;
}

.site-preview:hover .site-preview-frame {
  transform: scale(1.03);
}

.site-preview.is-zooming .site-preview-frame {
  transform: scale(1.08);
  transition-duration: 0.4s;
}

.site-preview-link {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 0.35rem;
  padding: 0.85rem 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.55), transparent 42%);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
}

@media (prefers-reduced-motion: reduce) {
  .site-preview-frame {
    transition: none;
  }
}
</style>
