/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {

        "primary": "#e6ff9e",

        "secondary": "#99efb6",

        "accent": "#c2f28e",

        "neutral": "#22242B",

        "base-100": "#362F3C",

        "info": "#A2E2F6",

        "success": "#14573D",

        "warning": "#E1B609",

        "error": "#EF2A65",
      },
    },
  ],
  plugins: [require("daisyui")],
}

