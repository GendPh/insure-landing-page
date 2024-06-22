/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        twilight: '#2C2830',  // Dark grayish purple
        mist: '#837D88',      // Light grayish purple
        dusk: '#2D2641',      // Dark grayish blue
        sky: '#96A9C6',       // Light grayish blue
        snow: '#FAFAFA'
      },
    },
  },
  plugins: [],
}