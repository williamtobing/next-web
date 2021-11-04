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
        ubuntu: "'Ubuntu', sans-serif",
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
