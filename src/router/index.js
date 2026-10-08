/**
 * Configuration du routeur Vue (client-side routing).
 *
 * Définit les routes : Accueil, Projets (liste + détail par slug), Codes, Compétences, 404.
 * afterEach met à jour document.title selon meta.title pour chaque navigation.
 *
 * @module router
 */

import { createRouter, createWebHistory } from 'vue-router'
import { useLocale } from '@/composables/useLocale'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/HomeView.vue'), meta: { title: 'Accueil' } },
  { path: '/projets', name: 'Projects', component: () => import('@/views/ProjectsView.vue'), meta: { title: 'Projets' } },
  { path: '/projets/:slug', name: 'ProjectDetail', component: () => import('@/views/ProjectDetailView.vue'), meta: { title: 'Projet' } },
  { path: '/codes', name: 'Codes', component: () => import('@/views/CodesView.vue'), meta: { title: 'Codes' } },
  { path: '/competences', name: 'Skills', component: () => import('@/views/SkillsView.vue'), meta: { title: 'Compétences' } },
  { path: '/contact', name: 'Contact', component: () => import('@/views/ContactView.vue'), meta: { title: 'Contact' } },
  { path: '/mentions', name: 'Mentions', component: () => import('@/views/MentionsView.vue'), meta: { title: 'Mentions légales' } },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFoundView.vue'), meta: { title: 'Page introuvable' } },
]

const titleByName = {
  Home: { fr: 'Accueil', en: 'Home' },
  Projects: { fr: 'Projets', en: 'Projects' },
  ProjectDetail: { fr: 'Projet', en: 'Project' },
  Codes: { fr: 'Codes', en: 'Code' },
  Skills: { fr: 'Compétences', en: 'Skills' },
  Contact: { fr: 'Contact', en: 'Contact' },
  Mentions: { fr: 'Mentions légales', en: 'Legal notice' },
  NotFound: { fr: 'Page introuvable', en: 'Page not found' },
}

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  const { locale } = useLocale()
  const localized = titleByName[to.name]
  const title = localized ? localized[locale.value] || localized.fr : to.meta.title
  document.title = title ? `${title} | Portfolio` : 'Portfolio'
})

export default router
