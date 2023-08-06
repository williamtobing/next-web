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
        /* original */
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
        /* external */
        'kupon-blue': '#64B0F4',
        'retail-blue': '#2A3588',
        'mitra-white': '#FFFAFB',
        'axiata-blue': '#164396',
        'next-black': '#010100',
        'react-blue': '#60DBFB',
        'typescript-blue': '#3178C6',
        'javascript-yellow': '#FCDD01',
        'laravel-orange': '#F9322C',
        'tailwind-blue': '#0EA4E8',
        'vue-green': '#43B882',
      },
      screens: {
        // ?: above
        // TODO: disable desktop
        // above1440: {min: '1440px'},
        // above1280: {min: '1280px'},
        // above512: {min: '512px'},
        above1440: {min: '2560px'},
        above1280: {min: '2560px'},
        above512: {min: '512px'},

        // below
        below393: {max: '392px'},
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      boxShadow: {
        neu: '4px 4px 0px rgba(16, 24, 32, 1)',
        'neu-wide': '6px 6px 0px rgba(16, 24, 32, 1)',
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
