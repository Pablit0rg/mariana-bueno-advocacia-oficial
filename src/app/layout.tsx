import type { Metadata } from "next";
import { cinzel, montserrat } from "./fonts";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { WhatsAppButton } from "../components/ui/WhatsAppButton"; // <--- Importamos o botão aqui
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
        {/* A Barra de Navegação fica fixa no topo */}
        <Header />
        
        {/* Aqui entra o conteúdo das páginas (Home, etc.) */}
        {children}
        
        {/* O Rodapé fecha o site */}
        <Footer />

        {/* O Botão do WhatsApp fica "solto" flutuando por cima de tudo */}
        <WhatsAppButton />
      </body>
    </html>
  );
}