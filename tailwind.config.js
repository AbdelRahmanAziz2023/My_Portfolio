/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f172a',
        'dark-card': '#1e293b',
        'dark-border': '#334155',
        'dark-text': '#e2e8f0',
        'dark-text-muted': '#94a3b8',
        'accent-primary': '#0ea5e9',
        'accent-secondary': '#8b5cf6',
        'accent-tertiary': '#ec4899',
      },
    },
  },
  plugins: [],
}

