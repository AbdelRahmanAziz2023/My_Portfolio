import { EducationCard } from './EducationCard'
import type { EducationItem } from '../../types/education'

interface EducationTimelineProps {
  items: EducationItem[]
}

/**
 * Education timeline using the portfolio's existing timeline visual
 * language (rail + glowing markers). Shows a subtle empty state when no
 * entries exist yet.
 */
export function EducationTimeline({ items }: EducationTimelineProps) {
  if (items.length === 0) {
    return (
      <p className="rounded-xl border border-outline-variant/40 bg-surface-container/60 p-6 text-center backdrop-blur-md">
        <span className="body-sm text-on-surface-variant">
          No formal education entries have been added yet.
        </span>
      </p>
    )
  }

  return (
    <ol className="relative space-y-8 border-l border-outline-variant/60 pl-6">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span
            aria-hidden
            className="absolute -left-[25px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-surface shadow-[0_0_12px_rgba(207,188,255,0.5)]"
          />
          <EducationCard item={item} />
        </li>
      ))}
    </ol>
  )
}
