import { useMemo, useState } from 'react'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { JsonLd } from '../components/common/JsonLd'
import { Seo } from '../components/common/Seo'
import { ProjectsGrid } from '../components/projects/ProjectsGrid'
import { projects } from '../data/projects'
import { pageMeta } from '../data/siteMeta'
import { projectsCollectionNodes } from '../utils/structuredData'

/**
 * Dedicated Projects route ("/projects").
 * Reads the centralized dataset from src/data/projects.ts — no local copies.
 */
export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  // Filter categories are derived from the data — nothing is hardcoded.
  const categories = useMemo(
    () =>
      Array.from(
        new Set(projects.map((p) => p.category).filter((c): c is string => Boolean(c))),
      ),
    [],
  )

  const visibleProjects = useMemo(
    () =>
      activeCategory === 'all'
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory],
  )

  const filterButtonClasses = (active: boolean): string =>
    active
      ? 'min-h-11 rounded-full border border-primary/50 bg-primary/15 px-4 py-2 text-sm font-medium text-primary shadow-[0_0_14px_rgba(207,188,255,0.12)] transition-all duration-300 sm:min-h-0'
      : 'min-h-11 rounded-full border border-outline-variant/40 bg-surface-container/60 px-4 py-2 text-sm font-medium text-on-surface-variant transition-all duration-300 hover:border-primary/35 hover:text-primary sm:min-h-0'

  return (
    <section className="section-padding scroll-mt-24 bg-surface">
      <Seo title={pageMeta.projects.title} description={pageMeta.projects.description} />
      <JsonLd nodes={projectsCollectionNodes()} />
      <div className="container-custom">
        {/* Page header */}
        <RevealOnScroll>
          <header className="mb-12 text-center sm:mb-16">
            <p className="badge-label mb-3 text-secondary">Selected work</p>
            <h1 className="heading-section mb-4">
              <span className="gradient-text">Projects</span>
            </h1>
            <p className="body-main mx-auto max-w-2xl text-on-surface-variant">
              Mobile and web applications built with React Native, Flutter, Angular, and
              Node.js.
            </p>
          </header>
        </RevealOnScroll>

        {/* Category filters — rendered only when the data carries categories */}
        {categories.length > 1 && (
          <RevealOnScroll>
            <div
              className="mb-10 flex flex-wrap items-center justify-center gap-2"
              role="group"
              aria-label="Filter projects by category"
            >
              <button
                type="button"
                aria-pressed={activeCategory === 'all'}
                onClick={() => setActiveCategory('all')}
                className={filterButtonClasses(activeCategory === 'all')}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`${filterButtonClasses(activeCategory === category)} capitalize`}
                >
                  {category}
                </button>
              ))}
            </div>
          </RevealOnScroll>
        )}

        {/* Projects grid / empty state. The visually hidden h2 keeps the
            heading order intact (h1 → h2 → h3 card titles) without adding
            visible chrome. */}
        <RevealOnScroll>
          <h2 className="sr-only">All projects</h2>
          <ProjectsGrid projects={visibleProjects} />
        </RevealOnScroll>
      </div>
    </section>
  )
}
