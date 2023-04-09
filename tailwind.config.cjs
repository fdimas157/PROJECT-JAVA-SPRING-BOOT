/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui", "Roboto"],
      serif: ["ui-serif", "Georgia"],
      mono: ["SFMono-Regular", "monospace"],
      bebas: ["Segoe UI", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
