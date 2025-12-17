import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { CookieBanner } from "../components/ui/CookieBanner";
import { ScrollToTop } from "../components/ui/ScrollToTop"; // <--- Importei o novo botão aqui

// Configuração das Fontes
// Serifada para Títulos (Elegância)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Sans-serif para Textos (Leitura)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Metadados Globais (SEO)
export const metadata: Metadata = {
  title: "Mariana Bueno | Advocacia de Alta Complexidade",
  description: "Escritório boutique especializado em Direito de Família e Sucessões. Atendimento estratégico e sigiloso para proteção patrimonial e resolução de conflitos.",
  keywords: ["advogada família", "divórcio empresarial", "sucessões", "inventário", "curitiba", "advocacia premium"],
  authors: [{ name: "Mariana Bueno" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://advmarianabueno.com.br",
    title: "Mariana Bueno | Advocacia Estratégica",
    description: "Protegendo seu legado e sua família com técnica jurídica refinada.",
    siteName: "Mariana Bueno Advocacia",
    images: [
      {
        url: "/og-image.jpg", // Certifique-se de ter essa imagem na pasta public
        width: 1200,
        height: 630,
        alt: "Mariana Bueno Advocacia",
      },
    ],
  },
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
    <html lang="pt-br" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased bg-rich-black text-gray-300 relative selection:bg-gold-primary/30 selection:text-white">
        
        {/* Header Fixo no Topo */}
        <Header />
        
        {/* Conteúdo das Páginas */}
        {children}
        
        {/* Rodapé Global */}
        <Footer />
        
        {/* Componentes Flutuantes de UI */}
        <WhatsAppButton />
        <CookieBanner />
        <ScrollToTop /> {/* <--- O Botão Voltar ao Topo entra aqui */}
        
      </body>
    </html>
  );
}
