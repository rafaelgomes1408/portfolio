/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',
          DEFAULT: '#1d4ed8',
          dark: '#1e40af',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
