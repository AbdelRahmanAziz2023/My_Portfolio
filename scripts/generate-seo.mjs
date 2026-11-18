#!/usr/bin/env node
/**
 * Build-time SEO artefacts.
 *
 *   node scripts/generate-seo.mjs pre    public/sitemap.xml (+ index.html copy check)
 *   node scripts/generate-seo.mjs post   absolute canonical/OG tags in dist/index.html + dist/robots.txt
 *
 * The project list is imported from `src/data/projects.ts`, so adding a project
 * to that single dataset is enough for its `/projects/<slug>` URL to appear in
 * the sitemap — nothing here is duplicated.
 *
 * The production URL is never invented. It is read from `VITE_SITE_URL`
 * (documented in .env.example) or from the hosting provider's own build
 * variables. When no origin can be resolved the script reports exactly which
 * artefacts it skipped and why, and the build still succeeds.
 *
 * Only plain data modules are imported (type annotations are stripped by Node),
 * which is why this file needs no bundler and no package.
 */
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const isPostBuild = process.argv[2] === 'post'
const HEAD_MARKER = '<!-- seo:absolute-meta -->'

const loadDataModule = (relativePath) =>
  import(pathToFileURL(path.join(rootDir, relativePath)).href)

/**
 * Static routes, mirroring the router in `src/App.tsx`. Project URLs are
 * derived from the dataset instead of being listed here.
 */
const staticRoutes = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/projects', changefreq: 'monthly', priority: '0.9' },
  { path: '/education', changefreq: 'yearly', priority: '0.6' },
]

const escapeXml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Decodes the entities we write into index.html so comparisons are fair. */
const decodeEntities = (value) =>
  value.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')

function normalizeSiteUrl(raw) {
  const value = (raw ?? '').trim()
  if (!value) return ''
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`
  try {
    const url = new URL(withProtocol)
    return `${url.protocol}//${url.host}`
  } catch {
    return ''
  }
}

/** Minimal `KEY=value` reader — avoids adding a dotenv dependency. */
async function readDotEnv() {
  try {
    const contents = await readFile(path.join(rootDir, '.env'), 'utf8')
    const env = {}
    for (const line of contents.split('\n')) {
      if (line.trim().startsWith('#')) continue
      const match = /^\s*([A-Za-z0-9_]+)\s*=\s*(.*)$/.exec(line)
      if (!match) continue
      env[match[1]] = match[2].trim().replace(/^["']|["']$/g, '')
    }
    return env
  } catch {
    return {}
  }
}

async function resolveSiteUrl() {
  const fileEnv = await readDotEnv()
  const candidates = [
    process.env.VITE_SITE_URL,
    fileEnv.VITE_SITE_URL,
    process.env.SITE_URL,
    fileEnv.SITE_URL,
    // Hosting providers expose their own build-time URL variables.
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
    process.env.DEPLOY_PRIME_URL, // Netlify
    process.env.URL, // Netlify
  ]
  for (const candidate of candidates) {
    const url = normalizeSiteUrl(candidate)
    if (url) return url
  }
  return ''
}

function buildSitemap(siteUrl, projects) {
  const routes = [
    ...staticRoutes,
    ...projects.map((project) => ({
      path: `/projects/${project.slug}`,
      changefreq: 'yearly',
      priority: '0.8',
    })),
  ]

  const entries = routes
    .map((route) =>
      [
        '  <url>',
        `    <loc>${escapeXml(`${siteUrl}${route.path}`)}</loc>`,
        `    <changefreq>${route.changefreq}</changefreq>`,
        `    <priority>${route.priority}</priority>`,
        '  </url>',
      ].join('\n'),
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`
}

function buildAbsoluteHeadBlock(siteUrl, siteMeta) {
  const image = `${siteUrl}${siteMeta.ogImage}`
  return [
    `    ${HEAD_MARKER}`,
    `    <link rel="canonical" href="${siteUrl}/" />`,
    `    <meta property="og:url" content="${siteUrl}/" />`,
    `    <meta property="og:image" content="${image}" />`,
    `    <meta property="og:image:width" content="${siteMeta.ogImageWidth}" />`,
    `    <meta property="og:image:height" content="${siteMeta.ogImageHeight}" />`,
    `    <meta name="twitter:image" content="${image}" />`,
  ].join('\n')
}

function warnMissingUrl(skipped) {
  console.warn(
    [
      '[seo] No production URL configured — skipped:',
      ...skipped.map((item) => `[seo]   - ${item}`),
      '[seo] Set VITE_SITE_URL (see .env.example) or deploy on a host that',
      '[seo] provides VERCEL_URL / DEPLOY_PRIME_URL, then rebuild.',
    ].join('\n'),
  )
}

/** Warns when the static <title>/description in index.html drift from siteMeta. */
async function checkStaticCopy(siteMeta) {
  let html
  try {
    html = await readFile(path.join(rootDir, 'index.html'), 'utf8')
  } catch {
    return
  }
  const title = decodeEntities(/<title>([\s\S]*?)<\/title>/.exec(html)?.[1]?.trim() ?? '')
  const description = decodeEntities(
    /<meta\s+name="description"\s+content="([^"]*)"/.exec(html)?.[1]?.trim() ?? '',
  )

  if (title && title !== siteMeta.title) {
    console.warn(
      `[seo] index.html <title> differs from siteMeta.title:\n[seo]   html: ${title}\n[seo]   data: ${siteMeta.title}`,
    )
  }
  if (description && description !== siteMeta.description) {
    console.warn('[seo] index.html meta description differs from siteMeta.description')
  }
}

async function runPreBuild() {
  const [{ projects }, { siteMeta }] = await Promise.all([
    loadDataModule('src/data/projects.ts'),
    loadDataModule('src/data/siteMeta.ts'),
  ])

  const siteUrl = await resolveSiteUrl()
  if (siteUrl) {
    const sitemap = buildSitemap(siteUrl, projects)
    await writeFile(path.join(rootDir, 'public/sitemap.xml'), sitemap)
    const urlCount = staticRoutes.length + projects.length
    console.log(`[seo] public/sitemap.xml written — ${urlCount} URLs for ${siteUrl}`)
  } else {
    warnMissingUrl(['public/sitemap.xml (requires absolute URLs)'])
  }

  await checkStaticCopy(siteMeta)
}

async function runPostBuild() {
  const { siteMeta } = await loadDataModule('src/data/siteMeta.ts')
  const siteUrl = await resolveSiteUrl()

  if (!siteUrl) {
    warnMissingUrl(['dist/index.html absolute canonical/OG tags', 'dist/robots.txt Sitemap line'])
    return
  }

  const indexPath = path.join(rootDir, 'dist/index.html')
  const html = await readFile(indexPath, 'utf8')
  if (!html.includes(HEAD_MARKER)) {
    await writeFile(
      indexPath,
      html.replace('</head>', `${buildAbsoluteHeadBlock(siteUrl, siteMeta)}\n  </head>`),
    )
    console.log('[seo] dist/index.html annotated with absolute canonical/OG metadata')
  } else {
    console.log('[seo] dist/index.html already annotated')
  }

  // The committed public/robots.txt stays generic; only the build output
  // declares the absolute sitemap URL.
  const robots = [
    '# Generated by scripts/generate-seo.mjs',
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${siteUrl}/sitemap.xml`,
    '',
  ].join('\n')
  await writeFile(path.join(rootDir, 'dist/robots.txt'), robots)
  console.log('[seo] dist/robots.txt written')
}

const run = isPostBuild ? runPostBuild : runPreBuild
run().catch((error) => {
  console.error(`[seo] generation failed: ${error.message}`)
  process.exitCode = 1
})
