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
import { ProjectSection } from '../components/projects/ProjectSection'
import { ProjectTechStack } from '../components/projects/ProjectTechStack'
import { RelatedProjects } from '../components/projects/RelatedProjects'
import {
  getNextProject,
  getPreviousProject,
  getProjectPreview,
  getProjectBySlug,
  getRelatedProjects,
} from '../data/projects'
import { projectGraphNodes } from '../utils/structuredData'

/**
 * Project Details route ("/projects/:slug").
 *
 * Renders every project from the centralized dataset with the same reusable
 * structure. Optional case-study sections are omitted when the data is missing.
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
  const projectPreview = getProjectPreview(project)

  return (
    <article className="section-padding scroll-mt-24 bg-surface">
      <Seo
        title={project.title}
        description={project.description}
        image={projectPreview?.src}
        type="article"
      />
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
          {project.problem || project.solution ? (
            <RevealOnScroll>
              <ProjectSection eyebrow="01" title="Project overview">
                <ProjectOverview project={project} />
              </ProjectSection>
            </RevealOnScroll>
          ) : null}

          {project.goals?.length ? (
            <RevealOnScroll>
              <ProjectSection eyebrow="02" title="Project goals">
                <ul className="space-y-3">
                  {project.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-3">
                      <span aria-hidden className="mt-0.5 text-secondary">✦</span>
                      <span className="body-main text-pretty">{goal}</span>
                    </li>
                  ))}
                </ul>
              </ProjectSection>
            </RevealOnScroll>
          ) : null}

          {project.role || project.responsibilities?.length ? (
            <RevealOnScroll>
              <ProjectSection eyebrow="03" title="My role & responsibilities">
                {project.role && (
                  <p className="mb-4 font-display text-lg font-semibold text-secondary">
                    {project.role}
                  </p>
                )}
                {project.responsibilities?.length && (
                <ul className="space-y-3">
                  {project.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex items-start gap-3">
                      <span aria-hidden className="mt-0.5 text-secondary">✦</span>
                      <span className="body-main text-pretty">{responsibility}</span>
                    </li>
                  ))}
                </ul>
                )}
              </ProjectSection>
            </RevealOnScroll>
          ) : null}

          {project.architecture && (
            <RevealOnScroll>
              <ProjectSection eyebrow="04" title="Technical architecture">
                <p className="body-main text-pretty">{project.architecture}</p>
              </ProjectSection>
            </RevealOnScroll>
          )}

          <RevealOnScroll>
            <ProjectSection eyebrow="05" title="Technology stack">
              <ProjectTechStack project={project} />
            </ProjectSection>
          </RevealOnScroll>

          {project.features?.length ? (
            <RevealOnScroll>
              <ProjectSection eyebrow="06" title="Key features">
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span aria-hidden className="mt-0.5 text-secondary">✦</span>
                      <span className="body-main text-pretty">{feature}</span>
                    </li>
                  ))}
                </ul>
              </ProjectSection>
            </RevealOnScroll>
          ) : null}

          {project.challenges?.length ? (
            <RevealOnScroll>
              <ProjectSection eyebrow="07" title="Engineering challenges">
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
          ) : null}

          {project.technicalDecisions?.length ? (
            <RevealOnScroll>
              <ProjectSection eyebrow="08" title="Technical decisions & trade-offs">
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
              </ProjectSection>
            </RevealOnScroll>
          ) : null}

          {project.impact || project.stats?.length ? (
            <RevealOnScroll>
              <ProjectSection eyebrow="09" title="Results & impact">
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
              </ProjectSection>
            </RevealOnScroll>
          ) : null}

          {project.images?.length ? (
            <RevealOnScroll>
              <ProjectSection eyebrow="10" title="Project gallery">
                <ProjectGallery images={project.images} />
              </ProjectSection>
            </RevealOnScroll>
          ) : null}

          {hasExternalLinks || project.availabilityNote ? (
            <RevealOnScroll>
              <ProjectSection eyebrow="11" title="Demo, repository & availability">
                {hasExternalLinks && <ProjectLinks links={project.links} />}
                {project.availabilityNote && (
                  <p className="body-main text-pretty">{project.availabilityNote}</p>
                )}
              </ProjectSection>
            </RevealOnScroll>
          ) : null}

          {getRelatedProjects(project).length > 0 && (
            <RevealOnScroll>
              <ProjectSection eyebrow="12" title="Related projects">
                <RelatedProjects project={project} />
              </ProjectSection>
            </RevealOnScroll>
          )}

          {/* Previous / next */}
          <RevealOnScroll>
            <ProjectNavigation previous={previousProject} next={nextProject} />
          </RevealOnScroll>
        </div>
      </div>
    </article>
  )
}
