/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backdrop: "#121212",
        primary: "#1DB954",
        active: "#282828",
        link: "#b3b3b3",
        footer: "#282828",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};
