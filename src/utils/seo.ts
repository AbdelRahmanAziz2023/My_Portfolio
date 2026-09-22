import { siteMeta } from '../data/siteMeta'

/**
 * Document-head operations shared by every route.
 *
 * Responsibilities are deliberately narrow: resolve URLs, then keep the title,
 * description, robots directive, canonical link, Open Graph tags, Twitter card,
 * and JSON-LD blocks in sync with the current page.
 *
 * Every write goes through an upsert that removes duplicates first, so
 * client-side navigation (Home → Projects → Project → Education) can never
 * accumulate competing tags.
 */

/** Site identity, re-exported so components do not import the data module directly. */
export const SITE_NAME = siteMeta.name
export const SITE_TITLE = siteMeta.title
export const SITE_DESCRIPTION = siteMeta.description
export const DEFAULT_OG_IMAGE = siteMeta.ogImage

/** Schema.org context shared by the JSON-LD builders. */
export const SCHEMA_CONTEXT = 'https://schema.org'

const TITLE_SEPARATOR = ' | '
const JSONLD_DATA_ATTRIBUTE = 'data-jsonld'

export type JsonLdValue = string | number | boolean | null | JsonLdNode | JsonLdValue[]

export interface JsonLdNode {
  '@context'?: string
  '@type': string
  [key: string]: JsonLdValue | undefined
}

export interface PageMetadata {
  /** Page title; the site name is appended unless it is already included. */
  title: string
  description?: string
  /** Social preview image path; defaults to the portfolio image. */
  image?: string
  type?: 'website' | 'article'
  /** Skip appending the site name (useful when the title is already complete). */
  absoluteTitle?: boolean
  /** `false` marks the page `noindex` (used by not-found states). */
  index?: boolean
  /** Canonical path override; defaults to the current pathname. */
  path?: string
}

/**
 * Build-time configured origin (`VITE_SITE_URL`), normalised without a
 * trailing slash. Empty when no production URL is configured.
 */
const configuredSiteUrl = normalizeSiteUrl(import.meta.env?.VITE_SITE_URL)

function normalizeSiteUrl(raw: string | undefined): string {
  const value = (raw ?? '').trim()
  if (!value) return ''
  return value.replace(/\/+$/, '')
}

/**
 * Absolute origin used for canonical and Open Graph URLs.
 *
 * Prefers the configured `VITE_SITE_URL`; otherwise falls back to the origin
 * the site is actually served from — so a deployment emits its real domain and
 * localhost is only ever used while developing locally.
 */
export function getSiteUrl(): string {
  if (configuredSiteUrl) return configuredSiteUrl
  if (typeof window !== 'undefined' && window.location.origin) {
    return window.location.origin
  }
  return ''
}

/** Collapses a path to a canonical form: no query string, hash, or trailing slash. */
export function normalizePath(path: string): string {
  const withoutHash = path.split('#')[0] ?? ''
  const withoutQuery = withoutHash.split('?')[0] ?? ''
  const trimmed = withoutQuery.trim()
  if (!trimmed || trimmed === '/') return '/'
  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  return withLeadingSlash.replace(/\/+$/, '') || '/'
}

/** Absolute URL for a site-relative path, falling back to the path when no origin is known. */
export function toAbsoluteUrl(path: string): string {
  const base = getSiteUrl()
  const normalized = normalizePath(path)
  return base ? `${base}${normalized}` : normalized
}

/** `Projects | Abdelrahman Aziz` — never doubles an already-complete title. */
export function formatPageTitle(title: string, absoluteTitle = false): string {
  const trimmed = title.trim()
  if (absoluteTitle || trimmed.includes(SITE_NAME)) return trimmed
  return `${trimmed}${TITLE_SEPARATOR}${SITE_NAME}`
}

function currentPath(): string {
  if (typeof window === 'undefined') return '/'
  return window.location.pathname
}

/** Returns the single matching head element, deleting any duplicates. */
function upsertHeadElement<T extends Element>(selector: string, create: () => T): T {
  const existing = Array.from(document.head.querySelectorAll<T>(selector))
  const [first, ...duplicates] = existing
  for (const duplicate of duplicates) duplicate.remove()
  if (first) return first
  const created = create()
  document.head.appendChild(created)
  return created
}

function setMeta(attribute: 'name' | 'property', key: string, content: string): void {
  const element = upsertHeadElement(`meta[${attribute}="${key}"]`, () => {
    const meta = document.createElement('meta')
    meta.setAttribute(attribute, key)
    return meta
  })
  element.setAttribute('content', content)
}

function removeMeta(attribute: 'name' | 'property', key: string): void {
  const selector = `meta[${attribute}="${key}"]`
  for (const element of document.head.querySelectorAll(selector)) element.remove()
}

function setCanonical(href: string): void {
  const link = upsertHeadElement('link[rel="canonical"]', () => {
    const element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    return element
  })
  link.setAttribute('href', href)
}

/**
 * Applies title, description, robots, canonical, Open Graph, and Twitter card
 * metadata for the current route.
 */
export function setPageMetadata({
  title,
  description,
  image,
  type = 'website',
  absoluteTitle = false,
  index = true,
  path,
}: PageMetadata): void {
  const pageTitle = formatPageTitle(title, absoluteTitle)
  const pageDescription = description?.trim() || SITE_DESCRIPTION
  const pageUrl = toAbsoluteUrl(normalizePath(path ?? currentPath()))
  const customImage = image?.trim()
  const imageUrl = toAbsoluteUrl(customImage || DEFAULT_OG_IMAGE)

  document.title = pageTitle

  setMeta('name', 'description', pageDescription)
  setMeta('name', 'robots', index ? 'index, follow' : 'noindex, follow')
  setCanonical(pageUrl)

  setMeta('property', 'og:type', type)
  setMeta('property', 'og:site_name', SITE_NAME)
  setMeta('property', 'og:title', pageTitle)
  setMeta('property', 'og:description', pageDescription)
  setMeta('property', 'og:url', pageUrl)
  setMeta('property', 'og:image', imageUrl)
  setMeta('property', 'og:image:alt', pageTitle)

  // Intrinsic dimensions are only known for the portfolio's own image.
  if (customImage) {
    removeMeta('property', 'og:image:width')
    removeMeta('property', 'og:image:height')
  } else {
    setMeta('property', 'og:image:width', String(siteMeta.ogImageWidth))
    setMeta('property', 'og:image:height', String(siteMeta.ogImageHeight))
  }

  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', pageTitle)
  setMeta('name', 'twitter:description', pageDescription)
  setMeta('name', 'twitter:image', imageUrl)
}

/**
 * Replaces the JSON-LD block for `slot` with the given nodes.
 *
 * One slot per graph ("site" for the site-wide graph, "page" for the current
 * route) keeps navigation from stacking duplicate structured data. The payload
 * is written with `textContent`, never parsed as HTML.
 */
export function setStructuredData(nodes: JsonLdNode[], slot = 'page'): void {
  const selector = `script[${JSONLD_DATA_ATTRIBUTE}="${slot}"]`
  for (const element of document.head.querySelectorAll(selector)) element.remove()
  if (nodes.length === 0) return

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute(JSONLD_DATA_ATTRIBUTE, slot)
  script.textContent = JSON.stringify(nodes.length === 1 ? nodes[0] : nodes)
  document.head.appendChild(script)
}
