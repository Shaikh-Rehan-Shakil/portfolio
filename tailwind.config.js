/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
        fontFamily: {
            mono: ['IBM Plex Mono', 'monospace'], // Add IBM Plex Mono font
          },
          
    },
  },
  plugins: [],
}

