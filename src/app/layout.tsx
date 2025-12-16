import type { Metadata, Viewport } from "next";
import { cinzel, montserrat } from "./fonts";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { CookieBanner } from "../components/ui/CookieBanner";
import "./globals.css";

// Configuração de Viewport (Zoom e Escala em celulares)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505", // A cor da barra do navegador no celular (Fica preto chique)
};

// Configuração Completa de SEO (Metadados)
export const metadata: Metadata = {
  metadataBase: new URL("https://mariana-bueno-advocacia.vercel.app"), // URL do seu site (ajustaremos se mudar)
  
  title: {
    default: "Dra. Mariana Bueno | Advocacia de Alta Complexidade",
    template: "%s | Dra. Mariana Bueno"
  },
  
  description: "Escritório boutique especializado em Direito de Família e Sucessões. Atendimento estratégico, discreto e humanizado para casos de alta complexidade em Curitiba e todo Brasil.",
  
  keywords: [
    "Advogada de Família", 
    "Divórcio Empresarial", 
    "Partilha de Bens", 
    "Inventário Judicial", 
    "Advocacia Premium Curitiba", 
    "Direito Sucessório",
    "Mariana Bueno"
  ],

  authors: [{ name: "Dra. Mariana Bueno" }],
  creator: "Pablo Rosa Gomes (Full-Stack Developer)",
  
  // Como aparece no Facebook / WhatsApp (Open Graph)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mariana-bueno-advocacia.vercel.app",
    title: "Dra. Mariana Bueno | Advocacia Especializada",
    description: "Defesa estratégica em Direito de Família e Sucessões. Agende sua consulta.",
    siteName: "Mariana Bueno Advocacia",
    images: [
      {
        url: "/og-image.jpg", // Vamos precisar criar essa imagem depois
        width: 1200,
        height: 630,
        alt: "Dra. Mariana Bueno - Escritório Digital",
      },
    ],
  },

  // Como aparece no Twitter
  twitter: {
    card: "summary_large_image",
    title: "Dra. Mariana Bueno | Advocacia Premium",
    description: "Especialista em resolução de conflitos familiares complexos.",
    images: ["/og-image.jpg"],
  },

  // Ícones (Favicon)
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Instruções para Robôs (Google)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${cinzel.variable} ${montserrat.variable} font-sans bg-rich-black text-white antialiased selection:bg-gold-primary/30 selection:text-white`}>
        <Header />
        
        {children}
        
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
