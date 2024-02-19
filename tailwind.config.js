/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        stupisci_y: "#E2BE40",
        stupisci_b: "#1D4064",
      },
      fontFamily: {
        font_login: "Slabo",
      },
    },
  },
  plugins: [],
};
