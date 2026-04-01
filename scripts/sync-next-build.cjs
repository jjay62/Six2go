/**
 * Copy event-app/.next to repo root .next so Vercel (project root = monorepo root)
 * can find routes-manifest.json and the rest of the Next.js output.
 */
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const src = path.join(root, 'event-app', '.next')
const dest = path.join(root, '.next')

if (!fs.existsSync(src)) {
  console.error('sync-next-build: missing', src, '— did `next build` run in event-app?')
  process.exit(1)
}

fs.rmSync(dest, { recursive: true, force: true })
fs.cpSync(src, dest, { recursive: true })
console.log('sync-next-build: copied event-app/.next → .next')
