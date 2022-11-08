module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs':"200px",
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1400px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"]
      },
     
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}