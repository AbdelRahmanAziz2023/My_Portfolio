import { Link, useParams } from 'react-router'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { JsonLd } from '../components/common/JsonLd'
import { Seo } from '../components/common/Seo'
import { buttonClasses } from '../components/common/buttonStyles'
import { ProjectGallery } from '../components/projects/ProjectGallery'
import { ProjectHero } from '../components/projects/ProjectHero'
import { ProjectLinks } from '../components/projects/ProjectLinks'
import { ProjectNavigation } from '../components/projects/ProjectNavigation'
import { ProjectOverview } from '../components/projects/ProjectOverview'
import { ProjectPlaceholder } from '../components/projects/ProjectPlaceholder'
import { ProjectSection } from '../components/projects/ProjectSection'
import { ProjectTechStack } from '../components/projects/ProjectTechStack'
import { RelatedProjects } from '../components/projects/RelatedProjects'
import {
  getNextProject,
  getPreviousProject,
  getProjectBySlug,
} from '../data/projects'
import { projectGraphNodes } from '../utils/structuredData'

/**
 * Project Details route ("/projects/:slug").
 *
 * Renders every project from the centralized dataset with the same reusable
 * structure. Missing case-study data is represented by explicit placeholders.
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
  const hasExternalLinks = Boolean(
    project.links?.live ||
      project.links?.github ||
      project.links?.store?.appStore ||
      project.links?.store?.googlePlay,
  )

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

        <div className="mx-auto mt-12 max-w-4xl space-y-12 sm:mt-16 lg:space-y-16">
          <RevealOnScroll>
            <ProjectSection eyebrow="01" title="Project overview">
              <ProjectOverview project={project} />
            </ProjectSection>
          </RevealOnScroll>

          <RevealOnScroll>
            <ProjectSection eyebrow="02" title="Project goals">
              {project.goals?.length ? (
                <ul className="space-y-3">
                  {project.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-3">
                      <span aria-hidden className="mt-0.5 text-secondary">✦</span>
                      <span className="body-main text-pretty">{goal}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ProjectPlaceholder label="Project goals" />
              )}
            </ProjectSection>
          </RevealOnScroll>

          <RevealOnScroll>
            <ProjectSection eyebrow="03" title="My role & responsibilities">
              {project.role ? (
                <p className="mb-4 font-display text-lg font-semibold text-secondary">
                  {project.role}
                </p>
              ) : (
                <ProjectPlaceholder label="Role" />
              )}
              {project.responsibilities?.length ? (
                <ul className="space-y-3">
                  {project.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex items-start gap-3">
                      <span aria-hidden className="mt-0.5 text-secondary">✦</span>
                      <span className="body-main text-pretty">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ProjectPlaceholder label="Responsibilities" />
              )}
            </ProjectSection>
          </RevealOnScroll>

          <RevealOnScroll>
            <ProjectSection eyebrow="04" title="Technical architecture">
              {project.architecture ? (
                <p className="body-main text-pretty">{project.architecture}</p>
              ) : (
                <ProjectPlaceholder label="Technical architecture" />
              )}
            </ProjectSection>
          </RevealOnScroll>

          <RevealOnScroll>
            <ProjectSection eyebrow="05" title="Technology stack">
              {project.technologies.length ? (
                <ProjectTechStack project={project} />
              ) : (
                <ProjectPlaceholder label="Technology stack" />
              )}
            </ProjectSection>
          </RevealOnScroll>

          <RevealOnScroll>
            <ProjectSection eyebrow="06" title="Key features">
              {project.features?.length ? (
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span aria-hidden className="mt-0.5 text-secondary">✦</span>
                      <span className="body-main text-pretty">{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ProjectPlaceholder label="Key features" />
              )}
            </ProjectSection>
          </RevealOnScroll>

          <RevealOnScroll>
            <ProjectSection eyebrow="07" title="Engineering challenges">
              {project.challenges?.length ? (
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
              ) : (
                <ProjectPlaceholder label="Engineering challenges" />
              )}
            </ProjectSection>
          </RevealOnScroll>

          <RevealOnScroll>
            <ProjectSection eyebrow="08" title="Technical decisions & trade-offs">
              {project.technicalDecisions?.length ? (
                <div className="space-y-5">
                  {project.technicalDecisions.map((decision) => (
                    <article
                      key={decision.decision}
                      className="rounded-xl border border-outline-variant/40 bg-surface-container/40 p-5"
                    >
                      <h3 className="font-display font-semibold text-on-surface">
                        {decision.decision}
                      </h3>
                      {decision.rationale && (
                        <p className="body-sm mt-2 text-on-surface-variant">
                          {decision.rationale}
                        </p>
                      )}
                      {decision.tradeOff && (
                        <p className="body-sm mt-3 text-on-surface-variant">
                          <span className="font-semibold text-secondary">Trade-off: </span>
                          {decision.tradeOff}
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              ) : (
                <ProjectPlaceholder label="Technical decisions and trade-offs" />
              )}
            </ProjectSection>
          </RevealOnScroll>

          <RevealOnScroll>
            <ProjectSection eyebrow="09" title="Results & impact">
              {project.impact || project.stats?.length ? (
                <div className="space-y-6">
                  {project.impact && (
                    <p className="body-main text-pretty">{project.impact}</p>
                  )}
                  {project.stats?.length ? (
                    <dl className="grid gap-4 sm:grid-cols-2">
                      {project.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-xl border border-outline-variant/40 bg-surface-container/60 p-4"
                        >
                          <dt className="badge-label text-on-surface-variant">{stat.label}</dt>
                          <dd className="mt-2 font-display text-lg font-semibold text-primary">
                            {stat.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                </div>
              ) : (
                <ProjectPlaceholder label="Results and impact" />
              )}
            </ProjectSection>
          </RevealOnScroll>

          <RevealOnScroll>
            <ProjectSection eyebrow="10" title="Project gallery">
              {project.images?.length ? (
                <ProjectGallery images={project.images} />
              ) : (
                <ProjectPlaceholder label="Project screenshots" />
              )}
            </ProjectSection>
          </RevealOnScroll>

          <RevealOnScroll>
            <ProjectSection eyebrow="11" title="Demo, repository & availability">
              {hasExternalLinks && <ProjectLinks links={project.links} />}
              {project.availabilityNote ? (
                <p className="body-main text-pretty">{project.availabilityNote}</p>
              ) : !hasExternalLinks ? (
                <ProjectPlaceholder label="Demo, repository, or availability" />
              ) : null}
            </ProjectSection>
          </RevealOnScroll>

          <RevealOnScroll>
            <ProjectSection eyebrow="12" title="Related projects">
              <RelatedProjects project={project} />
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
