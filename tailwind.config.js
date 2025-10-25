/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A1628',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#00D9FF',
          foreground: '#0A1628',
        },
        background: '#0A1628',
        foreground: '#ffffff',
        card: {
          DEFAULT: '#1a2740',
          foreground: '#ffffff',
        },
        border: '#2d3f5f',
        input: '#2d3f5f',
        ring: '#00D9FF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}