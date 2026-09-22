import { Link, useParams } from 'react-router'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { StatBlock } from '../components/StatBlock'
import { JsonLd } from '../components/common/JsonLd'
import { Seo } from '../components/common/Seo'
import { buttonClasses } from '../components/common/buttonStyles'
import { ProjectGallery } from '../components/projects/ProjectGallery'
import { ProjectHero } from '../components/projects/ProjectHero'
import { ProjectLinks } from '../components/projects/ProjectLinks'
import { ProjectNavigation } from '../components/projects/ProjectNavigation'
import { ProjectOverview } from '../components/projects/ProjectOverview'
import { ProjectSection } from '../components/projects/ProjectSection'
import { ProjectTechStack } from '../components/projects/ProjectTechStack'
import {
  getNextProject,
  getPreviousProject,
  getProjectBySlug,
} from '../data/projects'
import { projectGraphNodes } from '../utils/structuredData'

/**
 * Project Details route ("/projects/:slug").
 *
 * Renders any project from the centralized dataset with the same reusable
 * structure — no hardcoded per-project pages. Sections render only when
 * their data exists; the hero image is the only eagerly loaded visual.
 */
export function ProjectDetails() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <section className="section-padding scroll-mt-24 bg-surface">
        {/* Unknown slug → not-found state, deliberately kept out of the index. */}
        <Seo
          title="Project not found"
          description="The project you're looking for doesn't exist. Browse the full project list instead."
          index={false}
        />
        <div className="container-custom">
          <div className="mx-auto max-w-xl text-center">
            <p className="badge-label mb-3 text-secondary">404</p>
            <h1 className="heading-section gradient-text">Project not found</h1>
            <p className="body-main mt-4">
              The project you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link to="/projects" className={`${buttonClasses('primary', 'md')} mt-8`}>
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const previousProject = getPreviousProject(project.id)
  const nextProject = getNextProject(project.id)

  return (
    <article className="section-padding scroll-mt-24 bg-surface">
      <Seo title={project.title} description={project.description} />
      <JsonLd nodes={projectGraphNodes(project)} />
      <div className="container-custom">
        {/* Back navigation */}
        <Link
          to="/projects"
          className="body-sm inline-flex items-center gap-2 text-on-surface-variant transition-colors hover:text-secondary"
        >
          <span aria-hidden>←</span> Back to Projects
        </Link>

        {/* Hero */}
        <RevealOnScroll className="mt-8">
          <ProjectHero project={project} />
        </RevealOnScroll>

        <div className="mx-auto mt-16 max-w-4xl space-y-16 sm:mt-20 lg:space-y-20">
          {/* Hero image — the only eagerly loaded visual on this page */}
          {project.heroImage && (
            <RevealOnScroll>
              <figure>
                <div className="overflow-hidden rounded-xl border border-outline-variant/40">
                  <img
                    src={project.heroImage}
                    alt={`${project.title} hero image`}
                    loading="eager"
                    decoding="async"
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
              </figure>
            </RevealOnScroll>
          )}

          {/* Overview: Problem / Solution / Impact */}
          {(project.problem || project.solution || project.impact) && (
            <RevealOnScroll>
              <ProjectSection eyebrow="01" title="Overview">
                <ProjectOverview project={project} />
              </ProjectSection>
            </RevealOnScroll>
          )}

          {/* Technologies */}
          <RevealOnScroll>
            <ProjectSection eyebrow="02" title="Technologies">
              <ProjectTechStack project={project} />
            </ProjectSection>
          </RevealOnScroll>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <RevealOnScroll>
              <ProjectSection eyebrow="03" title="Features">
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span aria-hidden className="mt-0.5 text-secondary">
                        ✦
                      </span>
                      <span className="body-main text-pretty">{feature}</span>
                    </li>
                  ))}
                </ul>
              </ProjectSection>
            </RevealOnScroll>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <RevealOnScroll>
              <ProjectSection eyebrow="04" title="Challenges">
                <ol className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={challenge} className="flex items-start gap-4">
                      <span
                        aria-hidden
                        className="font-display text-lg font-semibold text-primary/40"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="body-main text-pretty">{challenge}</span>
                    </li>
                  ))}
                </ol>
              </ProjectSection>
            </RevealOnScroll>
          )}

          {/* Gallery */}
          {project.images && project.images.length > 0 && (
            <RevealOnScroll>
              <ProjectSection eyebrow="05" title="Gallery">
                <ProjectGallery images={project.images} />
              </ProjectSection>
            </RevealOnScroll>
          )}

          {/* Stats */}
          {project.stats && project.stats.length > 0 && (
            <RevealOnScroll>
              <ProjectSection eyebrow="06" title="Key numbers">
                <div className="grid gap-6 sm:grid-cols-3">
                  {project.stats.map((stat) => (
                    <StatBlock key={stat.label} value={stat.value} label={stat.label} />
                  ))}
                </div>
              </ProjectSection>
            </RevealOnScroll>
          )}

          {/* Links */}
          <RevealOnScroll>
            <ProjectSection eyebrow="07" title="Explore">
              <ProjectLinks links={project.links} />
            </ProjectSection>
          </RevealOnScroll>

          {/* Previous / next */}
          <RevealOnScroll>
            <ProjectNavigation previous={previousProject} next={nextProject} />
          </RevealOnScroll>
        </div>
      </div>
    </article>
  )
}
