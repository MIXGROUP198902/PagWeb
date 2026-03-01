/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0dccf2",
        "primary-dark": "#0ab8da",
        "background-light": "#f5f8f8",
        "background-dark": "#101f22",
        "surface-dark": "#162629",
        "surface-border": "#283a3d",
        "navy-dark": "#0a131a",
        "navy-light": "#15202b",
        "text-main": "#e1e8e9",
        "text-muted": "#9cb5ba",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}