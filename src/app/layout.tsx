import type { Metadata } from "next";
import { cinzel, montserrat } from "./fonts";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { CookieBanner } from "../components/ui/CookieBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Mariana Bueno | Advocacia de Alta Complexidade",
  description: "Especialista em Direito de Família e Sucessões. Atendimento estratégico e humanizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${cinzel.variable} ${montserrat.variable} font-sans bg-rich-black text-white antialiased`}>
        {/* Header no Topo */}
        <Header />
        
        {/* Conteúdo do Site */}
        {children}
        
        {/* Rodapé */}
        <Footer />

        {/* Componentes Flutuantes (Overlays) */}
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
