import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btp-primary': {
          50: '#e6f2ff',
          100: '#b3dbff',
          300: '#4a90e2',
          500: '#2c5282',
          700: '#1a365d',
        },
        'btp-secondary': {
          50: '#f0f4f8',
          100: '#d9e2ec',
          300: '#9fb3c8',
          500: '#627d98',
          700: '#486581',
        },
        'btp-accent': {
          300: '#f6ad55',
          500: '#ed8936',
        },
        'btp-industrial': {
          100: '#f0f0f0',
          300: '#d3d3d3',
          500: '#808080',
          700: '#505050',
        },
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'display': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'btp-card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'btp-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [
    forms,
    typography,
    aspectRatio,
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  }
}; 

