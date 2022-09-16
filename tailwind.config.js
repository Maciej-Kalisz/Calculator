/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/*.css",
            "./*.html",
            "./js/*.js"],
  theme: {
    extend: {
      colors: {
        "darkestGray": "#282a2a",
        "midGray": "#3d3f3f",
        "lightGray": "#5d5f5f",
        "midOrange": "#ff9f0c",
        "softWhite": "#f7f7f7"
      },
    },
  },
  plugins: [],
}
