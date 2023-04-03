/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      'sm': '375px',
      'xl': '1440px',
    },
    colors: {
      'primary-dark-cyan': 'hsl(158, 36%, 37%)',
      'primary-cream': 'hsl(30, 38%, 92%)',
      'neutral-very-dark-blue': 'hsl(212, 21%, 14%)',
      'neutral-dark-grayish-blue': 'hsl(228, 12%, 48%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      'body': ['Montserrat', 'sans-serif'],
      'heading': ['Fraunces', 'serif'],
    },
    fontWeight: {
      'regular': 500,
      'bold': 700,
    },
    extend: {},
  },
  plugins: [],
}

