/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gotham: {
          bg: "#000000",
          panel: "#0b0b0c",
          border: "#16161a",
          text: "#e5e7eb",
          dim: "#a1a1aa",
          accent: "#2dd4bf",
          warn: "#ef4444"
        }
      }
    },
  },
  plugins: [],
}
