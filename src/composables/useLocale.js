import { ref } from 'vue'
import { messages } from '@/i18n/messages'

const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('locale') : null
const locale = ref(stored === 'en' ? 'en' : 'fr')

function applyLang(value) {
  if (typeof document !== 'undefined') document.documentElement.lang = value
}

applyLang(locale.value)

export function useLocale() {
  function setLocale(next) {
    locale.value = next === 'en' ? 'en' : 'fr'
    if (typeof localStorage !== 'undefined') localStorage.setItem('locale', locale.value)
    applyLang(locale.value)
  }

  function toggleLocale() {
    setLocale(locale.value === 'fr' ? 'en' : 'fr')
  }

  function t(key) {
    return messages[locale.value]?.[key] || messages.fr[key] || key
  }

  /** Chaîne, ou { fr, en }. */
  function pick(value) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return value[locale.value] || value.fr || ''
    }
    return value ?? ''
  }

  return { locale, setLocale, toggleLocale, t, pick }
}
