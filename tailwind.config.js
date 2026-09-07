const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-source-sans)', ...defaultTheme.fontFamily.sans],
        heading: ['var(--font-fraunces)', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        secondary: colors.yellow,
        highlight: colors.yellow,
      },
    },
  },
  darkMode: 'class',
};
