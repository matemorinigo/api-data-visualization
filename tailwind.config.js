/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    './src/**/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      /*
      
      colors: {
            'hpPrimaryColor': '#3d2f22',
          'hpSecondaryColor': '#c39a1c',
          'hpThirdColor': '#8b5b1c',
          'hpFourthColor': '#704d1c',
          'hpFontColor': '#efeee9',
          'hpNavbarColor': '#641e1e',
          'hpSideBarColor': '#8a2e2e'
      },
      
      */ 
      colors: {
            'hpPrimaryColor': '#3d2f22',
          'hpSecondaryColor': '#232b2b',
          'hpThirdColor': '#414a4c',
          'hpFourthColor': '#3b444b',
          'hpFontColor': '#efeee9',
          'hpNavbarColor': '#641e1e',
          'hpSideBarColor': '#8a2e2e'
      },
      fontFamily: {
        harry: ['"Harry P"', 'serif']
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

