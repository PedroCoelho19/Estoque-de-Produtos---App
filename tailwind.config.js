/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        backgroundImage: {
          'tijuca-img-fundo': "url('src/assets/bgProducaoTijuca.png')",
          'tijuca-estoque': "url('src/assets/estoque.png')",
        }
      }
    
  },
  plugins: [],
}