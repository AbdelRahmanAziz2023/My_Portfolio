interface ProjectPlaceholderProps {
  label: string
}

export function ProjectPlaceholder({ label }: ProjectPlaceholderProps) {
  return (
    <div className="rounded-xl border border-dashed border-outline-variant/50 bg-surface-container/40 px-5 py-6 text-center">
      <p className="badge-label text-on-surface-variant">{label} placeholder</p>
      <p className="body-sm mt-2 text-on-surface-variant">
        Add this information when it is available.
      </p>
    </div>
  )
}
