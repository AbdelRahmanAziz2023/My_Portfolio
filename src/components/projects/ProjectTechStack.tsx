import { TagPill } from '../TagPill'
import type { Project } from '../../types/project'

interface ProjectTechStackProps {
  project: Project
}

/**
 * Renders the technologies stored in the centralized project data.
 * Nothing is hardcoded — any technology added to the data appears
 * automatically.
 */
export function ProjectTechStack({ project }: ProjectTechStackProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech) => (
        <TagPill key={tech} variant="primary">
          {tech}
        </TagPill>
      ))}
    </div>
  )
}
