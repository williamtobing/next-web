module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "500px",
        print: { raw: "print" },
      },
      fontFamily: {
        jakarta: "'Plus Jakarta Sans', sans-serif",
      },
      colors: {
        "my-white": "#EAEEFF",
        portage: "#879BE8",
        chalky: "#E8D487",
        "gray-chateau": "#98A0A8",
        "bright-gray": "#424756",
        "dark-gunmetal": "#182730",
        mirage: "#1C2030",
        bunker: "#101820",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      spacing: {
        v360p: "40rem",
        h360p: "22.5rem",
        vhd: "80rem",
        hhd: "45rem",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus"],
      filter: ["hover", "focus"],
    },
  },
  plugins: [],
};
