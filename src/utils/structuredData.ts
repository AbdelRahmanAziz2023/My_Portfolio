import { about, skills, socialLinks } from '../data/portfolio'
import { projects } from '../data/projects'
import { pageMeta, siteMeta } from '../data/siteMeta'
import type { Project } from '../types/project'
import { SCHEMA_CONTEXT, formatPageTitle, getSiteUrl, toAbsoluteUrl, type JsonLdNode } from './seo'

/**
 * Schema.org JSON-LD builders.
 *
 * Every field is derived from data that already exists in the portfolio —
 * `src/data/portfolio.ts`, `src/data/projects.ts`, and `src/data/siteMeta.ts`.
 * Nothing is fabricated: no ratings, reviews, prices, user counts, awards, or
 * metrics, and no social profiles that are not real links.
 */

/** Site-wide graph: WebSite + Person. Rendered once, in `App`. */
export function siteGraphNodes(siteUrl: string = getSiteUrl()): JsonLdNode[] {
  return [websiteNode(siteUrl), personNode(siteUrl)]
}

function websiteNode(siteUrl: string): JsonLdNode {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: siteMeta.title,
    description: siteMeta.description,
    inLanguage: siteMeta.locale,
    publisher: { '@type': 'Person', '@id': `${siteUrl}/#person` },
  }
}

function personNode(siteUrl: string): JsonLdNode {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: siteMeta.name,
    jobTitle: siteMeta.role,
    description: about.bio,
    url: `${siteUrl}/`,
    image: toAbsoluteUrl(siteMeta.ogImage),
    email: `mailto:${about.email}`,
    // Only real, public profiles; placeholder entries (e.g. "#") are skipped.
    sameAs: socialLinks
      .filter((link) => /^https?:\/\//i.test(link.url))
      .map((link) => link.url),
    knowsAbout: skills.map((skill) => skill.name),
  }
}

/**
 * Project page graph: a CreativeWork for the project plus its breadcrumb trail.
 * Fields come straight from the centralized project data.
 */
export function projectGraphNodes(
  project: Project,
  siteUrl: string = getSiteUrl(),
): JsonLdNode[] {
  const projectUrl = `${siteUrl}/projects/${project.slug}`

  const projectNode: JsonLdNode = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'CreativeWork',
    '@id': `${projectUrl}#project`,
    name: project.title,
    description: project.description,
    url: projectUrl,
    keywords: project.technologies.join(', '),
    author: { '@type': 'Person', '@id': `${siteUrl}/#person` },
    isPartOf: { '@type': 'WebSite', '@id': `${siteUrl}/#website` },
  }

  // Only a plain four-digit year is treated as an ISO 8601 date.
  if (project.year && /^\d{4}$/.test(project.year)) {
    projectNode.dateCreated = project.year
  }

  const breadcrumbNode: JsonLdNode = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${siteUrl}/projects` },
      { '@type': 'ListItem', position: 3, name: project.title, item: projectUrl },
    ],
  }

  return [projectNode, breadcrumbNode]
}

/**
 * Projects index graph: a CollectionPage whose main entity is an ItemList of
 * the centralized projects (names and URLs only).
 */
export function projectsCollectionNodes(siteUrl: string = getSiteUrl()): JsonLdNode[] {
  return [
    {
      '@context': SCHEMA_CONTEXT,
      '@type': 'CollectionPage',
      '@id': `${siteUrl}/projects#collection`,
      url: `${siteUrl}/projects`,
      name: formatPageTitle(pageMeta.projects.title),
      description: pageMeta.projects.description,
      inLanguage: siteMeta.locale,
      isPartOf: { '@type': 'WebSite', '@id': `${siteUrl}/#website` },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: project.title,
          url: `${siteUrl}/projects/${project.slug}`,
        })),
      },
    },
  ]
}
