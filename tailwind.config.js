module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
      height: {
        'vh-1': '10vh',
        'vh-2': '20vh',
        'vh-3': '30vh',
        'vh-4': '40vh',
        'vh-5': '50vh',
        'vh-6': '60vh',
        'vh-7': '70vh',
        'vh-8': '80vh',
        'vh-9': '90vh',
        'vh-10': '100vh',
        'vw-1': '10vw',
        'vw-2': '20vw',
        'vw-3': '30vw',
        'vw-4': '40vw',
        'vw-5': '50vw',
        'vw-6': '60vw',
        'vw-7': '70vw',
        'vw-8': '80vw',
        'vw-9': '90vw',
        'vw-10': '100vw',
      }
    },
  },
  variants: {
    extend: {
      textColor: ['responsive', 'hover', 'focus', 'active'],
      display: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
