/** @type {import('tailwindcss').Config} */
const { withAnimations } = require('animated-tailwindcss') // eslint-disable-line
module.exports = withAnimations({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {}
  },
  plugins: []
})
