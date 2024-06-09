/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik Variable', ...defaultTheme.fontFamily.sans],
        serif: ['IBM Plex Serif', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        dlmain: '#F8F26B',
      },
      boxShadow: {
        sharp: '2px 2px 0 0 rgba(0, 0, 0, 1)',
        'sharp-pressed': '1px 1px 0 0 rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
