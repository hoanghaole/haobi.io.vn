/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#137fec",
        "primary-dark": "#0b63be",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "hms-primary": "#ea2a33",
        "hms-primary-dark": "#c91f27",
        "hms-secondary": "#1a202c",
        "hms-bg-subtle": "#f8f9fa",
        "hms-text-main": "#1e293b",
        "hms-text-muted": "#64748b",
      },
      boxShadow: {
        "soft": "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        "glow": "0 0 15px rgba(234, 42, 51, 0.15)",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "sans": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
