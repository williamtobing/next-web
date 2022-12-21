/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '500px',
        print: {raw: 'print'},
      },
      fontFamily: {
        jakarta: "'Plus Jakarta Sans', sans-serif",
        ubuntu: "'Ubuntu', sans-serif",
      },
      colors: {
        'my-white': '#EAEEFF',
        portage: '#879BE8',
        chalky: '#E8D487',
        'dull-lavender': '#A387E8',
        'sky-blue': '#87CBE8',
        'daisy-bush': '#41228E',
        'gray-chateau': '#98A0A8',
        'bright-gray': '#424756',
        'dark-gunmetal': '#182730',
        mirage: '#1C2030',
        bunker: '#101820',
        'kupon-blue': '#64B0F4',
        'retail-blue': '#2A3588',
        'mitra-white': '#FFFAFB',
        'axiata-blue': '#164396',
      },
      screens: {
        desktop: {min: '1280px'},
        tablet: {min: '768px'},
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      spacing: {
        v360p: '40rem',
        h360p: '22.5rem',
        vhd: '80rem',
        hhd: '45rem',
      },
      boxShadow: {
        neu: '4px 4px 0px rgba(16, 24, 32, 1)',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      filter: ['hover', 'focus'],
    },
  },
  plugins: [],
};
