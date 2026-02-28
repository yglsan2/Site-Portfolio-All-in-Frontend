/**
 * Récupère les données du portfolio depuis l'API (backend Site-Portfolio sur http://localhost:8080)
 * et met à jour src/data/portfolio.js avec les snippets.
 *
 * Usage : lancer le backend (mvn spring-boot:run dans le repo Site-Portfolio), puis :
 *   node scripts/export-from-api.js
 */

import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const API = 'http://localhost:8080/api'

async function fetchJson(path) {
  const res = await fetch(`${API}${path}`)
  if (!res.ok) throw new Error(`${path} ${res.status}`)
  return res.json()
}

async function main() {
  const profile = await fetchJson('/profile')
  const projects = await fetchJson('/projects')
  const skills = await fetchJson('/skills')
  const snippetsByProject = []
  for (const p of projects) {
    const list = await fetchJson(`/snippets/project/${p.id}`)
    snippetsByProject.push(...list)
  }

  const outPath = join(__dirname, '..', 'src', 'data', 'portfolio.js')
  const content = `/**
 * Données statiques du portfolio (générées par scripts/export-from-api.js).
 */

export const profile = ${JSON.stringify(profile, null, 2)}

export const projects = ${JSON.stringify(projects, null, 2)}

export const skills = ${JSON.stringify(skills, null, 2)}

export const snippets = ${JSON.stringify(snippetsByProject, null, 2)}
`
  writeFileSync(outPath, content, 'utf8')
  console.log('Écrit:', outPath)
  console.log('Profil, projets:', projects.length, ', compétences:', skills.length, ', snippets:', snippetsByProject.length)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
