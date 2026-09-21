import type { ReactNode } from 'react'

interface ProjectSectionProps {
  /** Small section number/label shown above the title. */
  eyebrow: string
  title: string
  children: ReactNode
  className?: string
}

/**
 * Generic titled section used across the Project Details page so every
 * content block (overview, technologies, features, challenges, gallery,
 * stats, links) shares the same heading hierarchy and spacing.
 */
export function ProjectSection({
  eyebrow,
  title,
  children,
  className = '',
}: ProjectSectionProps) {
  return (
    <section className={className}>
      <p className="badge-label mb-2 text-secondary">{eyebrow}</p>
      <h2 className="heading-card mb-6 text-on-surface">{title}</h2>
      {children}
    </section>
  )
}
