import React from 'react'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { SectionTitle } from '../components/SectionTitle'
import { getFeaturedProjects, projects } from '../data/projects'
import { FeaturedProjectsCarousel } from '../components/projects/FeaturedProjectsCarousel'
import { ProjectGridCard } from '../components/projects/ProjectGridCard'
import { useFeaturedProjectsCarousel } from '../components/projects/useFeaturedProjectsCarousel'

export const ProjectsSection: React.FC = () => {
  const featuredProjects = getFeaturedProjects()
  const otherProjects = projects.filter((p) => !p.featured)

  const {
    featuredCount,
    activeIndex,
    setActiveIndex,
    goNext,
    goPrev,
    getPosition,
  } = useFeaturedProjectsCarousel(featuredProjects)

  return (
    <section id="projects" className="section-padding scroll-mt-24 bg-surface">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Selected work"
            title="Featured projects"
            subtitle="Showcase of my recent work and accomplishments across platforms."
          />
        </RevealOnScroll>

        {featuredCount > 0 && (
          <>
            <RevealOnScroll>
              <FeaturedProjectsCarousel
                featuredProjects={featuredProjects}
                activeIndex={activeIndex}
                getPosition={getPosition}
                onSelectIndex={setActiveIndex}
                onPrev={goPrev}
                onNext={goNext}
              />
            </RevealOnScroll>

          </>
        )}

        {otherProjects.length > 0 && (
          <RevealOnScroll className="mt-20">
            <h3 className="heading-card mb-8 text-on-surface">More projects</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <ProjectGridCard key={project.id} project={project} />
              ))}
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}
