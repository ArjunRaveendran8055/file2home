/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "paragraph-16": "Sen",
      sans: ["Roboto", "sans-serif"],
      krona: ["Krona One", "sans-serif"],
      Playfiar: ["Playfair"],
      enriq: ["Enriqueta"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      caveat:["caveat"]
    },
    screens: {
      sm: "360px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },

    colors: {
      whitesmoke: "#F5F5F5",
      custdarkblue: "#001861",
      custblack: "#000000",
      custwhite: "#ffffff",
      custblue: "#1fb6ff",
      custpurple: "#7e5bef",
      custpink: "#ff49db",
      custdarkpink: "#FF1493",
      custorange: "#ff7849",
      custdarkblue: "#001861",
      custblack: "#000000",
      custwhite: "#ffffff",
      custblue: "#1fb6ff",
      custpurple: "#7e5bef",
      custpink: "#ff49db",
      custdarkpink: "#FF1493",
      custorange: "#ff7849",
      custGreen: "#13ce66",
      custyellow: "#ffc82c",
      "custgray-dark": "#273444",
      custgray: "#8492a6",
      "custgray-light": "#d3dce6",
      custnavyblue: "#000080",
      custfluegreen: "#00FF15",
      custspecialgray: "#B4D9EF",
      custcyan500: "#00BCD4",
      custdarkpurple: "#301934",
      custviolet: "#5800e3",
      custcrimson: "#DC143C",
      custred: "#FF0000",
      custyellow: "#ffc82c",
      "custgray-dark": "#273444",
      custgray: "#8492a6",
      "custgray-light": "#d3dce6",
      custnavyblue: "#000080",
      custfluegreen: "#00FF15",
      custspecialgray: "#B4D9EF",
      custcyan500: "#00BCD4",
      custdarkpurple: "#301934",
      custviolet: "#5800e3",
      custcrimson: "#DC143C",
      custred: "#FF0000",
    },

    extend: {},
  },
  plugins: [],
});