import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rich: {
          black: "#050505",      // Fundo Absoluto
          gray: "#121212",       // Fundo Secundário
          surface: "#1E1E1E",    // Superfícies
        },
        gold: {
          primary: "#D4AF37",    // Ouro Metálico Principal
          light: "#F4C430",      // Ouro Brilhante
          dark: "#AA771C",       // Ouro Escuro
        }
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;