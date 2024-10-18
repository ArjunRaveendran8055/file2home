/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      nesthub: { min: "1024px", max: "1280px" },
    },
    fontFamily: {
      Poppins: "Poppins",
    },
    extend: {},
  },
  plugins: [],
};
