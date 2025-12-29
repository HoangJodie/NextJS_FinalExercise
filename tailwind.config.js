/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b0f1a',
        surface: '#111827',
        muted: '#6b7280',
        accent: '#f64b39',
        border: '#1f2937',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 15px 50px -25px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
};
