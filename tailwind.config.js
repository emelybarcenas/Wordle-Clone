/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",            // Make sure the root HTML file is included
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure all JSX files are included in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
