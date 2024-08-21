/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    './src/**/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
            'hpPrimaryColor': '#3d2f22',
          'hpSecondaryColor': '#c39a1c',
          'hpThirdColor': '#8b5b1c',
          'hpFourthColor': '#704d1c',
          'hpFontColor': '#efeee9',
          'hpNavbarColor': '#641e1e',
          'hpSideBarColor': '#8a2e2e'
      },
      width: {
        '128': '32rem'
      },
      height: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}

