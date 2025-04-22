/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redAccent: '#ef4444',
        blueAccent: '#3b82f6',
        greenAccent: '#10b981',
      },
    },
  },
  plugins: [],
}

