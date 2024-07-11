/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./distribution/*.html"], // Ensure correct path to HTML files
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i ./src/input.css -o ./distribution/style.css --watch