/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#bdaaf0',
          DEFAULT: '#bdaaf0',
          dark: '#9d8ad0',
        },
        secondary: {
          light: '#6B5FB4',
          DEFAULT: '#6B5FB4',
          dark: '#5a4fa3',
        },
        bg: {
          light: '#F5E9FF',
          DEFAULT: '#e6ecfd',
          dark: '#000000',
        },
        surface: {
          light: '#FFFFFF',
          DEFAULT: '#FFFFFF',
          dark: '#0a0a0a',
        },
        text: {
          light: '#000000',
          DEFAULT: '#333333',
          dark: '#ffffff',
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.8', transform: 'scaleX(1)' },
          '50%': { opacity: '1', transform: 'scaleX(1.05)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
