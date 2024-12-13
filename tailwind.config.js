import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,tx,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: '1rem',
      base: '1.3rem',
      xl: '1.75rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '3.75rem'
    },
    extend: {
      animation: {
        'infinite-vert-scroll': 'scroll-up 5s linear infinite',
        'loop-product-visibility': 'hide-reveal-product 5s linear infinite',
        'loop-branding-visibility': 'hide-reveal-branding 5s linear infinite',
        'loop-creative-visibility': 'hide-reveal-creative 5s linear infinite',
      }
    },
    keyframes: {
      'scroll-up': {
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(-100%)' },
      },
      'hide-reveal-product': {
        '0%': { opacity: '100%' },
        '30.333%': { opacity: '100%' },
        '33.333%': { opacity: '0%' },
        '97.666%': { opacity: '0%' },
        '100%': { opacity: '100%' }
      },
      'hide-reveal-branding': {
        '0%': { opacity: '0%' },
        '30.333%': { opacity: '0%' },
        '33.333%': { opacity: '100%' },
        '63.666%': { opacity: '100%' },
        '66.666%': { opacity: '0%' },
        '100%': { opacity: '0%' },
      },
      'hide-reveal-creative': {
        '0%': { opacity: '0%' },
        '3%': { opactiy: '0%' },
        '63.666%': { opacity: '0%' },
        '66.666%': { opacity: '100%' },
        '97.666%': { opacity: '100%' },
        '100%': { opacity: '0%' },
      },
      'show': {
        from: { opacity: '0%' },
        to: { opacity: '100%' }
      }

    },
    fontFamily: {
      'heading': ['jost', 'san-serif'],
      'reading': ["EB Garamond", 'serif']
    }
  },
  plugins: [],
}

