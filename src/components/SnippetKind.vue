<script setup>
import { computed } from 'vue'
import { useLocale } from '@/composables/useLocale'

const props = defineProps({
  kind: { type: String, default: '' },
})

const { t } = useLocale()

const tones = {
  logic: 'border-portfolio-accent/40 bg-portfolio-accent/15 text-portfolio-accent',
  model: 'border-portfolio-text/30 bg-white/5 text-portfolio-text',
  constructor: 'border-portfolio-accent-hover/50 bg-portfolio-accent/10 text-portfolio-accent-hover',
  validation: 'border-white/20 bg-white/[0.04] text-portfolio-text',
  api: 'border-white/15 bg-transparent text-portfolio-muted',
  security: 'border-portfolio-accent/50 bg-portfolio-bg text-portfolio-accent',
}

const label = computed(() => (props.kind ? t(`snippet.${props.kind}`) : ''))
const tone = computed(() => tones[props.kind] || tones.logic)
</script>

<template>
  <span
    v-if="label && label !== `snippet.${kind}`"
    class="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold leading-4"
    :class="tone"
  >
    {{ label }}
  </span>
</template>
