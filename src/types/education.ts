export interface Education {
  id: string
  institution: string
  /** Degree, diploma, or program name. */
  credential: string
  field?: string
  /** Start year, e.g. '2024'. */
  startYear: string
  /** End year; omit when the program is ongoing. */
  endYear?: string
  location?: string
  description?: string
}
