import type { EducationItem } from '../../types/education'

interface EducationCardProps {
  item: EducationItem
}

/**
 * Content block for a single education entry.
 * Optional fields (field, dates, description, logo) are omitted when missing.
 */
export function EducationCard({ item }: EducationCardProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {item.logo && (
            <img
              src={item.logo}
              alt={`${item.institution} logo`}
              loading="lazy"
              decoding="async"
              className="h-10 w-10 rounded-lg border border-outline-variant/40 object-contain"
            />
          )}
          <p className="font-display text-lg font-semibold text-on-surface">
            {item.institution}
          </p>
        </div>

        {(item.startDate || item.endDate) && (
          <p className="badge-label text-primary">
            {item.startDate}
            {item.startDate && item.endDate ? ' — ' : ''}
            {item.endDate}
          </p>
        )}
      </div>

      <p className="body-sm mt-1 text-on-surface-variant">
        {item.degree}
        {item.field ? ` · ${item.field}` : ''}
      </p>

      {item.description && <p className="body-sm mt-2 text-pretty">{item.description}</p>}
    </div>
  )
}
