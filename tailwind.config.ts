import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0e0e0e', // fond principal
          soft: '#141414',
          card: '#1a1a1a',
          border: '#262626',
        },
        accent: {
          DEFAULT: '#ece81a', // jaune LUZURIO
          bright: '#f4f04a',
          soft: '#3a3803',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 20px 40px -24px rgba(0,0,0,0.8)',
        glow: '0 0 0 1px rgba(236,232,26,0.4), 0 12px 30px -10px rgba(236,232,26,0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}

export default config
