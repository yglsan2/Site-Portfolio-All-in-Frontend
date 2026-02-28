/**
 * Client API pour le portfolio (version frontend-only : données statiques).
 * Même interface que la version avec backend : getProfile, getProjects, getProjectBySlug, getSnippetsByProjectId, getSkills.
 *
 * @module api/service
 */

import { profile, projects, skills, snippets } from '@/data/portfolio'

/**
 * Retourne le profil (accueil).
 * @returns {Promise<object>}
 */
function getProfile() {
  return Promise.resolve(profile)
}

/**
 * Retourne la liste des projets.
 * @returns {Promise<object[]>}
 */
function getProjects() {
  return Promise.resolve(projects)
}

/**
 * Retourne un projet par son slug.
 * @param {string} slug
 * @returns {Promise<object|null>}
 */
function getProjectBySlug(slug) {
  const p = projects.find((proj) => proj.slug === slug)
  if (!p) {
    const err = new Error('Projet non trouvé.')
    err.status = 404
    return Promise.reject(err)
  }
  return Promise.resolve(p)
}

/**
 * Retourne les extraits de code d'un projet.
 * @param {number} projectId
 * @returns {Promise<object[]>}
 */
function getSnippetsByProjectId(projectId) {
  const list = snippets.filter((s) => s.projectId === projectId)
  return Promise.resolve(list)
}

/**
 * Retourne la liste des compétences.
 * @returns {Promise<object[]>}
 */
function getSkills() {
  return Promise.resolve(skills)
}

export const api = {
  getProfile,
  getProjects,
  getProjectBySlug,
  getSnippetsByProjectId,
  getSkills
}
