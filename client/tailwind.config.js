/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5E3BEE',
        'headingcolour': '#282938',
        'bgshade': '#F5FCFF',
        'dribble': '#E662872',
        'body': '#1C1E53'
      }
    },
  },
  plugins: [],
}

