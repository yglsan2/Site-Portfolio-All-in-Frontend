<script setup>
import { ref, onMounted } from 'vue'
import { api } from '@/api/service'
import { useLocale } from '@/composables/useLocale'

const { t, pick } = useLocale()
const profile = ref(null)
const loading = ref(true)
const error = ref(null)

async function load() {
  loading.value = true
  error.value = null
  try {
    profile.value = await api.getProfile()
  } catch (e) {
    error.value = e.message || 'Impossible de charger le profil.'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>

<template>
  <div class="container-pro">
    <div class="max-w-2xl">
    <h1 class="page-title text-2xl sm:text-3xl font-bold text-portfolio-text mb-2">{{ t('contact.title') }}</h1>
    <p class="text-portfolio-muted text-sm sm:text-base mb-8">{{ t('contact.lead') }}</p>
    <div v-if="loading" class="text-portfolio-muted">Chargement…</div>
    <div v-else-if="error" class="space-y-3">
      <p class="text-red-400">{{ error }}</p>
      <button type="button" class="text-sm text-portfolio-accent hover:underline" @click="load">Réessayer</button>
    </div>
    <template v-else-if="profile">
      <p class="text-portfolio-text mb-6">{{ pick(profile.availability) }}</p>
      <ul class="space-y-4">
        <li>
          <p class="text-xs uppercase tracking-wide text-portfolio-muted mb-1">{{ t('contact.email') }}</p>
          <a class="link-accent text-lg" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        </li>
        <li>
          <p class="text-xs uppercase tracking-wide text-portfolio-muted mb-1">{{ t('contact.phone') }}</p>
          <a class="link-accent text-lg" :href="profile.phoneHref">{{ profile.phone }}</a>
        </li>
        <li>
          <p class="text-xs uppercase tracking-wide text-portfolio-muted mb-1">{{ t('contact.location') }}</p>
          <p class="text-portfolio-text text-lg">{{ profile.location }}</p>
        </li>
        <li v-if="profile.linkedinUrl">
          <p class="text-xs uppercase tracking-wide text-portfolio-muted mb-1">{{ t('contact.linkedin') }}</p>
          <a class="link-accent text-lg break-all" :href="profile.linkedinUrl" target="_blank" rel="noopener noreferrer">{{ profile.linkedinUrl }}</a>
        </li>
        <li v-if="profile.githubUrl">
          <p class="text-xs uppercase tracking-wide text-portfolio-muted mb-1">{{ t('contact.github') }}</p>
          <a class="link-accent text-lg" :href="profile.githubUrl" target="_blank" rel="noopener noreferrer">{{ profile.githubUrl }}</a>
        </li>
      </ul>
    </template>
    </div>
  </div>
</template>
