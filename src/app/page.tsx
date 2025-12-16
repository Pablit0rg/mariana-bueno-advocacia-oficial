"use client";

import dynamic from "next/dynamic";
import Image from "next/image"; 
import { ShieldCheck } from "lucide-react";

// --- CÓDIGO DO SITE (MANTIDO IMPORTADO MAS COMENTADO NO RETURN) ---
import { Hero } from "../components/sections/Hero";

const About = dynamic(() => import("../components/sections/About").then(mod => mod.About), {
  loading: () => <div className="h-screen bg-rich-black" />,
});
const PracticeAreas = dynamic(() => import("../components/sections/PracticeAreas").then(mod => mod.PracticeAreas));
const Testimonials = dynamic(() => import("../components/sections/Testimonials").then(mod => mod.Testimonials));
const Contact = dynamic(() => import("../components/sections/Contact").then(mod => mod.Contact));

export default function Home() {
  // --- VARIÁVEL DE CONTROLE ---
  // Quando for lançar o site, mude para: const isMaintenance = false;
  const isMaintenance = true;

  if (isMaintenance) {
    return (
      <main className="min-h-screen bg-rich-black selection:bg-gold-primary/30 relative">
        {/* TELA DE MANUTENÇÃO (CAPA DE LUXO) */}
        {/* z-[100] garante que fique por cima do Header e Footer que estão no layout */}
        <div className="fixed inset-0 z-[100] bg-rich-black flex flex-col items-center justify-center p-4 text-center">
          
          {/* Efeito de Luz de Fundo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-primary/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            
            {/* --- ÁREA DA LOGO --- */}
            {/* DICA DE OURO: Assim que subir o arquivo 'logo.png' na pasta public,
                descomente a parte do <Image /> e comente o <ShieldCheck />.
            */}
            
            {/* Opção 1: Escudo (Ativo) */}
            <ShieldCheck className="text-gold-primary w-16 h-16 md:w-20 md:h-20" strokeWidth={1} />

            {/* Opção 2: Logo Oficial (Aguardando arquivo) */}
            {/* <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image 
                src="/logo.png" 
                alt="Logo Dra. Mariana Bueno" 
                fill
                className="object-contain"
                priority
              />
            </div> 
            */}
            
            <div className="space-y-2">
              <h1 className="font-serif text-3xl md:text-5xl text-white font-bold tracking-wide">
                MARIANA BUENO
              </h1>
              <p className="font-sans text-gold-primary text-xs md:text-sm tracking-[0.3em] uppercase">
                Advocacia de Alta Complexidade
              </p>
            </div>

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent my-4" />

            <p className="text-gray-400 font-light max-w-md text-sm md:text-base">
              Nosso novo escritório digital está sendo finalizado para oferecer uma experiência à altura dos seus direitos.
            </p>

            <span className="inline-block px-4 py-2 border border-gold-primary/30 rounded text-gold-primary text-xs uppercase tracking-widest mt-4">
              Em Breve
            </span>
          </div>

          {/* Rodapé da Manutenção (Tamanho Original Restaurado) */}
          <div className="absolute bottom-8 text-gray-600 text-xs text-center px-4">
            © 2025 Mariana Bueno Advocacia. Todos os direitos reservados.
          </div>
        </div>
      </main>
    );
  }

  // --- SITE REAL (SÓ VAI APARECER QUANDO isMaintenance = false) ---
  return (
    <main className="min-h-screen bg-rich-black selection:bg-gold-primary/30">
      <Hero />
      <About />
      <PracticeAreas />
      <Testimonials />
      <Contact />
    </main>
  );
}
