import React from 'react'
import { Card } from '../Card'
import { buttonClasses } from '../common/buttonStyles'
import { TagPill } from '../TagPill'
import type { Project } from '../../types/project'
import type { FeaturedPosition } from './useFeaturedProjectsCarousel'

type FeaturedProjectCardProps = {
  project: Project
  position: FeaturedPosition
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  project,
  position,
}) => {
  const isActive = position === 'active'

  return (
    <Card
      elevation={isActive ? 'floating' : 'interactive'}
      className="group relative overflow-hidden p-0"
      hover={false}
    >
      {/* 🔥 Soft Glow Layer (only active) */}
      <div
        className={`
          pointer-events-none absolute inset-0 transition-opacity duration-700
          ${
            isActive
              ? 'opacity-25'
              : 'opacity-0'
          }
        `}
        aria-hidden
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(207,188,255,0.18), transparent 60%), radial-gradient(circle at 80% 80%, rgba(34,211,238,0.10), transparent 55%)',
        }}
      />

      <div className="relative grid lg:grid-cols-12">
        {/* Image Section */}
        <div className="relative flex min-h-[220px] items-center justify-center bg-gradient-to-br from-primary-container/20 via-surface-container-high to-secondary/5 p-8 lg:col-span-5">
          {/* subtle inner glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background:
                'radial-gradient(circle at 30% 20%, rgba(207,188,255,0.15), transparent 65%), radial-gradient(circle at 80% 80%, rgba(34,211,238,0.08), transparent 60%)',
            }}
          />

          {project.logo ? (
            <img
              src={project.logo}
              alt={project.title}
              className={`
                relative z-10 max-h-40 w-full max-w-xs object-contain
                drop-shadow-[0_8px_25px_rgba(0,0,0,0.35)]
                transition-transform duration-500
                ${isActive ? 'scale-105' : 'scale-100'}
                group-hover:scale-105
              `}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : (
            <span className="relative z-10 font-display text-6xl text-primary/30">
              ◇
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-7">
          {/* Header */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-outline-variant/30 pb-4">
            <h3 className="heading-card text-on-surface">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.role && (
                <TagPill variant="secondary">
                  {project.role}
                </TagPill>
              )}
              {project.year && (
                <TagPill variant="secondary">
                  {project.year}
                </TagPill>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="body-sm mb-6 text-pretty text-on-surface-variant">
            {project.description}
          </p>

          {/* Highlights */}
          {(project.problem || project.solution || project.impact) && (
            <div className="mb-6 grid gap-3 md:grid-cols-3">
              {(
                [
                  ['Problem', project.problem],
                  ['Solution', project.solution],
                  ['Impact', project.impact],
                ] as const
              ).map(
                ([label, value]) =>
                  value && (
                    <div
                      key={label}
                      className="rounded-lg border border-outline-variant/25 bg-surface-container/40 p-3 backdrop-blur-sm"
                    >
                      <p className="badge-label mb-1 text-primary">{label}</p>
                      <p className="text-xs leading-relaxed text-on-surface-variant">{value}</p>
                    </div>
                  ),
              )}
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TagPill key={tech} variant="primary">
                {tech}
              </TagPill>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses('primary', 'sm')}
              >
                Live Demo
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses('outline', 'sm')}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}