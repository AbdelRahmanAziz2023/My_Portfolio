/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Semantic surface system (Stitch Cinematic Neo-Noir)
        surface: '#141218',
        'surface-dim': '#141218',
        'surface-bright': '#3b383e',
        'surface-lowest': '#0f0d13',
        'surface-low': '#1d1b20',
        'surface-container': '#211f24',
        'surface-container-high': '#2b292f',
        'surface-container-highest': '#36343a',
        'on-surface': '#e6e0e9',
        'on-surface-variant': '#cbc4d2',
        outline: '#948e9c',
        'outline-variant': '#494551',
        primary: '#cfbcff',
        'on-primary': '#381e72',
        'primary-container': '#6750a4',
        'on-primary-container': '#e0d2ff',
        secondary: '#22d3ee',
        'on-secondary': '#042f34',
        tertiary: '#e7c365',
        'on-tertiary': '#3e2e00',
        error: '#ffb4ab',
        'on-error': '#690005',
        // Glow / gradient helpers
        glow: {
          primary: 'rgba(207, 188, 255, 0.45)',
          secondary: 'rgba(34, 211, 238, 0.35)',
        },
      },
      backgroundImage: {
        'gradient-border':
          'linear-gradient(135deg, rgba(207,188,255,0.85), rgba(34,211,238,0.55))',
        'gradient-hero':
          'linear-gradient(135deg, rgba(103,80,164,0.35) 0%, rgba(34,211,238,0.12) 50%, rgba(231,195,101,0.08) 100%)',
        'gradient-cta':
          'linear-gradient(90deg, #cfbcff 0%, #22d3ee 50%, #e7c365 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(207, 188, 255, 0.15), 0 0 80px rgba(34, 211, 238, 0.08)',
        'glow-lg':
          '0 0 60px rgba(207, 188, 255, 0.2), 0 0 120px rgba(34, 211, 238, 0.1)',
        card: '0 12px 32px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'float-slow': 'floatSlow 18s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        reveal: 'revealUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(2%, -1%) scale(1.02)' },
          '66%': { transform: 'translate(-1%, 2%) scale(0.98)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.85' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        revealUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
