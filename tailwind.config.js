/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-01': 'rgba(19, 19, 19, 0.7)',
        'dark-02': 'rgb(19, 19, 19)',
      },
    },
  },
  plugins: [require('daisyui'),],
}

