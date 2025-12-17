import { Cinzel, Lato } from "next/font/google";

// Fonte Primária (Títulos/Serifada de Luxo)
export const primaryFont = Cinzel({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap", // Garante que o texto apareça rápido mesmo antes da fonte carregar
});

// Fonte Secundária (Texto Corrido/Leitura)
export const secondaryFont = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
});
