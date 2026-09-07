import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Bitaxus Dark Theme
        'bitaxus': {
          'bg-primary': '#0F0F13',
          'bg-secondary': '#151519',
          'bg-tertiary': '#1A1A20',
          'border-soft': '#2A2A32',
          'border': '#3A3A42',
          'text-muted-dark': '#6B6B77',
          'text-muted': '#8B8B99',
          'text-white': '#FFFFFF',
          'red': '#E12C37',
          'red-bright': '#E12C37',
          'red-dark': '#B82430',
          'coral': '#FF6B5B',
        },
      },
      backgroundColor: {
        'dark': '#0F0F13',
        'dark-secondary': '#151519',
        'dark-tertiary': '#1A1A20',
      },
      textColor: {
        'muted-dark': '#6B6B77',
        'muted': '#8B8B99',
      },
      borderColor: {
        'soft': '#2A2A32',
      },
      fontFamily: {
        'mono': ['"DM Mono"', 'monospace'],
        'sans': ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

export default config
