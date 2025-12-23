import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* --- BACKGROUND DE LUXO (Mantido, mas focado no centro) --- */}
      <div className="absolute inset-0 bg-rich-black z-0" />
      
      {/* Luzes Ambientais Suaves */}
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-gold-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-rich-black via-rich-black/80 to-transparent pointer-events-none" />
      
      {/* Textura Sutil */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in zoom-in duration-1000">
          
          {/* 1. A LOGO (Joia Central) */}
          {/* Tamanho controlado: w-48 a w-64 para não ficar grotesco, mas imponente */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl">
            <Image 
              src="/logo-header.png-removebg-preview.png" 
              alt="Logo Oficial Mariana Bueno" 
              fill 
              className="object-contain"
              priority 
            />
          </div>

          {/* 2. BLOCO DE TEXTO INSTITUCIONAL */}
          <div className="space-y-4 max-w-4xl mx-auto">
            
            {/* O Nome (Marca) */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-wide uppercase">
              Mariana Bueno
            </h1>

            {/* Linha Divisória Elegante */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent mx-auto opacity-70" />

            {/* O Subtítulo (Serviço) */}
            <p className="font-sans text-gold-primary text-xs md:text-sm tracking-[0.4em] uppercase font-light">
              Advocacia & Consultoria Especializada
            </p>

          </div>

          {/* 3. BOTÃO DE AÇÃO (CTA) */}
          <div className="pt-8">
            <a 
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-10 py-4 bg-gold-primary text-rich-black rounded overflow-hidden group hover:bg-white transition-colors shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out skew-x-12" />
              
              <span className="text-xs font-bold uppercase tracking-widest relative z-10">
                Iniciar Atendimento
              </span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
