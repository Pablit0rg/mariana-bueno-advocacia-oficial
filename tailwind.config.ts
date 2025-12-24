import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Mantendo suas cores de luxo
        "rich-black": "#050505",
        "rich-gray": "#0a0a0a",
        "gold-primary": "#D4AF37",
        "gold-light": "#F4DF8D",
        "gold-dark": "#AA8C2C",
      },
      fontFamily: {
        // Truque: Mapeamos AMBAS para a Inter. 
        // Assim, os títulos (serif) ficam retos como você queria.
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-inter)", "serif"], 
      },
      // --- A MÁGICA DO BRILHO (SHINE) ---
      animation: {
        shine: "shine 2.5s linear infinite", // Velocidade ajustada para passar rápido (2.5s)
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
