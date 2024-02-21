/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        stupisci_y: { 500: "#E8BE00", 700: "#DAA507" },
        stupisci_b: "#1D4064",
        stupisci_lb: "#0D6A87",
      },

      fontFamily: {
        font_login: "Slabo",
      },
      backgroundImage: {
        sfondo: "url('/src/assets/bglogin.jpeg')",
      },
    },
  },
  plugins: [],
};
