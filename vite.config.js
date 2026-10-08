import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

const embeddedSites = ['lumieres', 'hypnose']

function embeddedSitePreview() {
  return {
    name: 'embedded-site-preview',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const raw = req.url || ''
        const pathname = raw.split('?')[0]
        const site = embeddedSites.find((name) => pathname === `/${name}` || pathname.startsWith(`/${name}/`))
        if (!site) return next()
        const query = raw.includes('?') ? raw.slice(raw.indexOf('?')) : ''
        const rel = pathname.replace(new RegExp(`^/${site}/?`), '')
        const file = path.join(rootDir, 'public', site, rel)
        if (rel && fs.existsSync(file) && fs.statSync(file).isFile()) return next()
        req.url = `/${site}/index.html${query}`
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [embeddedSitePreview(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
