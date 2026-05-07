/**
 * Cinematic Neo-Noir design tokens — aligned with Stitch project
 * "Cinematic Mobile Engineer Portfolio" (Material-style dark surfaces,
 * violet primary, cyan secondary accents, Space Grotesk + Inter).
 *
 * Tailwind semantic colors in tailwind.config.js mirror these values.
 * Update both when changing the palette.
 */
export const stitchTheme = {
  colors: {
    surface: '#141218',
    surfaceDim: '#141218',
    surfaceBright: '#3b383e',
    surfaceContainerLowest: '#0f0d13',
    surfaceContainerLow: '#1d1b20',
    surfaceContainer: '#211f24',
    surfaceContainerHigh: '#2b292f',
    surfaceContainerHighest: '#36343a',
    onSurface: '#e6e0e9',
    onSurfaceVariant: '#cbc4d2',
    outline: '#948e9c',
    outlineVariant: '#494551',
    primary: '#cfbcff',
    onPrimary: '#381e72',
    primaryContainer: '#6750a4',
    onPrimaryContainer: '#e0d2ff',
    secondary: '#22d3ee', // cyan accent (Stitch spec: technical highlights)
    tertiary: '#e7c365',
    error: '#ffb4ab',
  },
  fonts: {
    headline: '"Space Grotesk", system-ui, sans-serif',
    body: '"Inter", system-ui, sans-serif',
  },
  radii: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '64px',
    xxl: '128px',
  },
} as const

export type StitchTheme = typeof stitchTheme
