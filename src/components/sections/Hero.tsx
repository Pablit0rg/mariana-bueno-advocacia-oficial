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

          {/* 3. BOTÃO DE AÇÃO (CTA) - COM STATUS ONLINE */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-8 animate-fade-in-up delay-300">
            <a 
              href="https://wa.me/5541997606069?text=Ol%C3%A1%2C%20Dra.%20Mariana.%20Gostaria%20de%20agendar%20um%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold-primary text-rich-black font-bold text-sm uppercase tracking-widest rounded hover:bg-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)] w-full sm:w-auto text-center"
            >
              Agendar Consultoria
            </a>
            
            {/* STATUS ONLINE (Green Dot Effect) */}
            <div className="hidden sm:flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wider opacity-90">
              {/* O Ponto de Luz */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              </span>
              Atendimento exclusivo
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
