import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* --- BACKGROUND DE LUXO --- */}
      <div className="absolute inset-0 bg-rich-black z-0" />
      
      {/* Luzes Ambientais */}
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-gold-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-rich-black via-rich-black/80 to-transparent pointer-events-none" />
      
      {/* Textura Sutil */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-1000">
          
          {/* 1. LOGO */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl">
            <Image 
              src="/logo-header.png-removebg-preview.png" 
              alt="Logo Oficial Mariana Bueno" 
              fill 
              className="object-contain"
              priority 
            />
          </div>

          {/* 2. TEXTO COM EFEITO DEGRADÊ CORRIGIDO */}
          <div className="space-y-4 max-w-4xl mx-auto">
            
            {/* Título Principal com o Ouro Metálico e BRILHO INTENSO (Shine Animation) */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#BF953F] via-white to-[#BF953F] bg-[length:200%_auto] animate-shine bg-clip-text text-transparent tracking-wide uppercase drop-shadow-sm">
              Mariana Bueno
            </h1>

            {/* Linha Divisória */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent mx-auto opacity-70" />
            
            {/* Subtítulo */}
            <p className="font-sans text-gold-primary text-xs md:text-sm tracking-[0.4em] uppercase font-light">
              Advocacia & Consultoria Especializada
            </p>
          </div>

          {/* 3. BOTÃO DE AÇÃO (CTA) */}
          <div className="pt-8">
            <a 
              href="https://wa.me/5541997606069?text=Ol%C3%A1%2C%20Dra.%20Mariana.%20Gostaria%20de%20agendar%20um%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white uppercase transition-all duration-300 rounded-sm bg-gradient-to-r from-gold-600 to-gold-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1"
            >
              Agendar Consultoria
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
