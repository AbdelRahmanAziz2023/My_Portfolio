export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

const base =
  'relative z-0 inline-flex items-center justify-center overflow-hidden rounded-lg font-sans font-semibold transition-all duration-300 ease-cinematic focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:pointer-events-none disabled:opacity-50'

const variants: Record<ButtonVariant, string> = {
  primary:
    'border border-primary/30 bg-gradient-to-br from-primary-container to-[#564496] text-white shadow-sm hover:border-primary/50 hover:shadow-[0_0_14px_rgba(207,188,255,0.12)]',
  secondary:
    'border border-secondary/30 bg-secondary/10 text-secondary hover:border-secondary/50 hover:bg-secondary/15 hover:shadow-[0_0_12px_rgba(34,211,238,0.12)]',
  outline:
    'border border-primary/30 bg-transparent text-primary hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_12px_rgba(207,188,255,0.08)]',
  ghost:
    'border border-transparent bg-transparent text-on-surface-variant hover:border-outline-variant/40 hover:text-primary hover:shadow-none',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
}

/**
 * Visual classes for the Button component, exposed separately so external
 * links can render as real <a> elements while sharing the exact button
 * styling (an <a> must never be disguised as a disabled <button>).
 */
export const buttonClasses = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className = '',
): string => `${base} ${variants[variant]} ${sizes[size]} ${className}`
