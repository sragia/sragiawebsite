/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      robotoCondensed: 'Roboto Condensed',
      outfit: 'Outfit Variable',
      krona: 'Krona One',
      ranga: 'Ranga',
      pacifico: 'Pacifico',
      bangers: 'Bangers',
      caveat: 'Caveat Brush',
    },
    extend: {
      colors: {
        red: {
          DEFAULT: '#d10437',
        },
      },
    },
  },
  plugins: [],
};
