import React from 'react'
import { Link } from 'react-router'
import { RevealOnScroll } from '../components/RevealOnScroll'
import { SectionTitle } from '../components/SectionTitle'
import { ProjectsGrid } from '../components/projects/ProjectsGrid'
import { buttonClasses } from '../components/common/buttonStyles'
import { getFeaturedProjects, projects } from '../data/projects'

export const ProjectsSection: React.FC = () => {
  const featuredProjects = getFeaturedProjects()

  // Fall back to the full centralized collection when nothing is featured,
  // so the section never renders broken or empty without an explanation.
  const homeProjects = featuredProjects.length > 0 ? featuredProjects : projects

  return (
    <section id="projects" className="section-padding scroll-mt-24 bg-surface">
      <div className="container-custom">
        <RevealOnScroll>
          <SectionTitle
            eyebrow="Selected work"
            title="Featured projects"
            subtitle="A selection of web and mobile case studies."
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mb-10 flex justify-center">
            <Link to="/projects" className={buttonClasses('outline', 'md')}>
              View All Projects
            </Link>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <ProjectsGrid projects={homeProjects} />
        </RevealOnScroll>
      </div>
    </section>
  )
}
