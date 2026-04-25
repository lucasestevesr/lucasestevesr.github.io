/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0b",
        accent: "#171717"
      },
      fontFamily: {
        sans: ["Manrope", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["IBM Plex Mono", "Consolas", "Monaco", "monospace"]
      },
      maxWidth: {
        content: "72rem"
      }
    }
  },
  plugins: []
};
