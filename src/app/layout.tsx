import type { Metadata } from "next";
import { primaryFont, secondaryFont } from "./fonts"; // Vamos otimizar isso no passo 3
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup"; // <--- IMPORTADO AQUI

export const metadata: Metadata = {
  title: "Mariana Bueno | Advocacia Especializada em Família e Sucessões",
  description: "Advocacia de Alta Complexidade. Proteção patrimonial e resolução de conflitos familiares com discrição e estratégia técnica.",
  keywords: ["Advogada Família Curitiba", "Divórcio", "Inventário", "Partilha de Bens", "Mariana Bueno"],
  authors: [{ name: "Mariana Bueno" }],
  creator: "Pablo Rosa Gomes",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} font-sans antialiased bg-rich-black text-gray-300 selection:bg-gold-primary selection:text-rich-black overflow-x-hidden`}
      >
        {/* INJEÇÃO DO CÉREBRO SEO */}
        <SchemaMarkup />

        <Header />
        <main className="relative z-0">
          {children}
        </main>
        <Footer />
        
        {/* Elementos Flutuantes Globais */}
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
