<script setup>
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
</script>

<template>
  <div class="max-w-2xl">
    <h1 class="page-title text-2xl sm:text-3xl font-bold text-portfolio-text mb-8">{{ t('mentions.title') }}</h1>
    <section class="mb-6">
      <h2 class="text-lg font-semibold text-portfolio-accent mb-2">{{ t('mentions.editor') }}</h2>
      <p class="text-portfolio-muted leading-relaxed">{{ t('mentions.editorBody') }}</p>
    </section>
    <section class="mb-6">
      <h2 class="text-lg font-semibold text-portfolio-accent mb-2">{{ t('mentions.host') }}</h2>
      <p class="text-portfolio-muted leading-relaxed">{{ t('mentions.hostBody') }}</p>
    </section>
    <section>
      <h2 class="text-lg font-semibold text-portfolio-accent mb-2">{{ t('mentions.data') }}</h2>
      <p class="text-portfolio-muted leading-relaxed">{{ t('mentions.dataBody') }}</p>
    </section>
  </div>
</template>
