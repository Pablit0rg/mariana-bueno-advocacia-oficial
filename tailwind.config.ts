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
        "rich-black": "#050505",
        "rich-gray": "#0a0a0a",
        "gold-primary": "#D4AF37",
        "gold-light": "#F4DF8D",
        "gold-dark": "#AA8C2C",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-inter)", "serif"], 
      },
      animation: {
        // Shine rápido para o Texto do Hero
        shine: "shine 2.5s linear infinite",
        // Shine LENTO para o Botão (NOVO)
        "shine-slow": "shine 5s linear infinite",
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
