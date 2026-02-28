/**
 * Tests du client API (version frontend-only : données statiques).
 */
import { describe, it, expect } from 'vitest'
import { api } from './service.js'

describe('api/service', () => {
  it('getProfile retourne le profil', async () => {
    const result = await api.getProfile()
    expect(result).toBeDefined()
    expect(result.name).toBeDefined()
    expect(result.title).toBeDefined()
  })

  it('getProjects retourne un tableau', async () => {
    const result = await api.getProjects()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(0)
    expect(result[0]).toHaveProperty('slug')
    expect(result[0]).toHaveProperty('title')
  })

  it('getProjectBySlug retourne le projet quand le slug existe', async () => {
    const result = await api.getProjectBySlug('barrelmcd-python')
    expect(result).toBeDefined()
    expect(result.slug).toBe('barrelmcd-python')
  })

  it('getProjectBySlug rejette avec 404 quand le slug n’existe pas', async () => {
    await expect(api.getProjectBySlug('slug-inexistant')).rejects.toMatchObject({ status: 404 })
  })

  it('getSnippetsByProjectId retourne un tableau', async () => {
    const result = await api.getSnippetsByProjectId(1)
    expect(Array.isArray(result)).toBe(true)
  })

  it('getSkills retourne la liste des compétences', async () => {
    const result = await api.getSkills()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(0)
    expect(result[0]).toHaveProperty('name')
    expect(result[0]).toHaveProperty('category')
  })
})
