/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" //ÖNEMLİ
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          'background': '#042D3D',     // Çok koyu teal
          'surface': '#074C67',        // Koyu teal
          'text-primary': '#F3F3F3',   // Nötr açık gri
          'text-secondary': '#A3D5E4', // Soluk mavi-gri
          'accent': '#E48F07',         // Canlı turuncu vurgu
        },
        light: {
          'background': '#A3D5E4',     // Soluk mavi-gri
          'surface': '#F3F3F3',        // Nötr açık gri
          'text-primary': '#042D3D',   // Çok koyu teal
          'text-secondary': '#074C67', // Koyu teal
          'accent': '#E48F07',         // Canlı turuncu vurgu
        },
      }
    },
  },
  plugins: [],
}
