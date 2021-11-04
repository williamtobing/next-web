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
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
};
