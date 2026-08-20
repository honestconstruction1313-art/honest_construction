/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2fb',
          100: '#d4ddf5',
          200: '#a9bceb',
          300: '#7e9be0',
          400: '#537bd6',
          500: '#3b62c4',
          600: '#2d4da3',
          700: '#1e3a8a',
          800: '#1a3278',
          900: '#162a66',
          950: '#0f1f4d',
        },
        sky: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7dcbfc',
          400: '#60a5fa',
          500: '#3b8ef6',
          600: '#2574e0',
          700: '#1d5dba',
          800: '#1e4f97',
          900: '#1d447c',
        },
        accent: {
          grey: '#F3F4F6',
          steel: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(96, 165, 250, 0.5)' },
          '70%': { boxShadow: '0 0 0 12px rgba(96, 165, 250, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(96, 165, 250, 0)' },
        },
      },
    },
  },
  plugins: [],
};
