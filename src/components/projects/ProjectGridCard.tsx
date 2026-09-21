import React from 'react'
import { buttonClasses } from '../common/buttonStyles'
import { Card } from '../Card'
import { TagPill } from '../TagPill'
import type { Project } from '../../types/project'

type ProjectGridCardProps = {
  project: Project
}

export const ProjectGridCard: React.FC<ProjectGridCardProps> = ({ project }) => {
  return (
    <Card
      elevation="interactive"
      className="group flex min-h-[420px] flex-col overflow-hidden p-0"
      hover
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden rounded-xl bg-gradient-to-br from-primary-container/20 via-surface-container-high to-secondary/10">
        {/* Background Glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(207,188,255,0.28), transparent 55%), radial-gradient(circle at 80% 80%, rgba(34,211,238,0.16), transparent 50%)',
          }}
        />

        {project.logo ? (
          <img
            src={project.logo}
            alt={project.title}
            className="h-full w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-5xl text-primary/30">◇</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-3 border-b border-outline-variant/30 pb-4">
          <div>
            <h4 className="font-display text-lg font-semibold text-on-surface">
              {project.title}
            </h4>

            <p className="mt-1 text-xs text-on-surface-variant">
              {project.role || 'Case Study'}
            </p>
          </div>

          {project.year && (
            <TagPill variant="secondary">
              {project.year}
            </TagPill>
          )}
        </div>

        {/* Description */}
        <p className="body-sm mb-5 flex-1 text-pretty text-on-surface-variant">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <TagPill key={tech} variant="secondary">
              {tech}
            </TagPill>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-3">
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonClasses('primary', 'sm')} flex-1`}
            >
              Live Demo
            </a>
          )}

          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonClasses('outline', 'sm')} flex-1`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}