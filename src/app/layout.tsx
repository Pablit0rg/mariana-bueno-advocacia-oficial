import type { Metadata, Viewport } from "next";
import { inter } from "./fonts";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { CookieBanner } from "../components/ui/CookieBanner";
import "./globals.css";

// Configuração de Viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

// Configuração Completa de SEO (Metadados)
export const metadata: Metadata = {
  // PWA Manifest (O App)
  manifest: "/manifest.json",

  metadataBase: new URL("https://mariana-bueno-advocacia-oficial.vercel.app"),
  
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
  
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mariana-bueno-advocacia-oficial.vercel.app",
    title: "Dra. Mariana Bueno | Advocacia Especializada",
    description: "Defesa estratégica em Direito de Família e Sucessões. Agende sua consulta.",
    siteName: "Mariana Bueno Advocacia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Mariana Bueno - Escritório Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dra. Mariana Bueno | Advocacia Premium",
    description: "Especialista em resolução de conflitos familiares complexos.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

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
      <body className={`${inter.variable} font-sans bg-rich-black text-white antialiased selection:bg-gold-primary/30 selection:text-white`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
