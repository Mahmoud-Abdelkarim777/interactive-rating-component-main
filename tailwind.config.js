/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./main.js", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: 'hsl(25, 97%, 53%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          lightGray: 'hsl(217, 12%, 63%)',
          darkBlue: 'hsl(213, 19%, 18%)',
          veryDarkBlue: 'hsl(216, 12%, 8%)',
        },
      },
    },
  },
  plugins: [],
}