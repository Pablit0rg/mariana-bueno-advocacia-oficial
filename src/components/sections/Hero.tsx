import Image from "next/image";
import { ArrowRight, Scale, Shield } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* --- BACKGROUND DE LUXO --- */}
      <div className="absolute inset-0 bg-rich-black z-0" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* --- COLUNA 1: TEXTO & LOGO 3D --- */}
          <div className="space-y-8 text-center md:text-left animate-in slide-in-from-left duration-1000 relative">
            
            {/* Tag Superior */}
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold-primary/30 rounded-full bg-gold-primary/5 backdrop-blur-sm mx-auto md:mx-0 relative z-20">
              <Shield size={14} className="text-gold-primary" />
              <span className="text-gold-primary text-[10px] md:text-xs uppercase tracking-widest font-bold">
                Advocacia Especializada
              </span>
            </div>

            {/* A FUSÃO DA LOGO COM O TÍTULO */}
            <div className="relative">
              
              {/* LOGO FLUTUANTE (Efeito 3D Atrás do Texto) */}
              {/* Opacidade controlada (20-30%) para não brigar com a leitura, mas marcar presença */}
              <div className="hidden md:block absolute -top-20 -left-20 w-[400px] h-[400px] opacity-10 pointer-events-none select-none z-0">
                 <Image 
                    src="/logo-header.png-removebg-preview.png" 
                    alt="Marca D'água Premium" 
                    fill 
                    className="object-contain" 
                 />
              </div> 

              <h1 className="relative z-10 font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.1]">
                Defesa Estratégica <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-gold-light to-gold-primary animate-shimmer bg-[length:200%_100%]">
                  do Seu Patrimônio
                </span>
              </h1>
            </div>

            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto md:mx-0 relative z-10">
              Atuação artesanal em Direito de Família e Sucessões. 
              Protegemos o que você construiu e quem você ama com sigilo absoluto e técnica refinada.
            </p>

            {/* BOTÃO COM EFEITO SHIMMER */}
            <div className="flex flex-col md:flex-row items-center gap-4 pt-4 relative z-10">
              <a 
                href="https://wa.me/5541999999999"
                target="_blank"
                className="relative inline-flex items-center gap-3 px-8 py-4 bg-gold-primary text-rich-black rounded overflow-hidden group transition-transform active:scale-95"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                <span className="text-xs font-bold uppercase tracking-widest relative z-10">
                  Agendar Atendimento
                </span>
                <ArrowRight size={16} className="relative z-10" />
              </a>

              <span className="text-gray-500 text-xs flex items-center gap-2">
                <Scale size={14} className="text-gold-primary" />
                Atendimento Online para todo Brasil
              </span>
            </div>
          </div>

          {/* --- COLUNA 2: FOTO DE IMPACTO --- */}
          <div className="relative h-[500px] md:h-[700px] w-full animate-in slide-in-from-right duration-1000 hidden md:block">
            
            {/* Elementos Dourados de Fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold-primary/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold-primary/10 rounded-full" />

            <Image
              src="/marianabueno.png"
              alt="Dra. Mariana Bueno Advogada"
              fill
              priority
              className="object-contain object-bottom drop-shadow-2xl z-10"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-rich-black to-transparent z-20" />
          </div>

        </div>
      </div>
    </section>
  );
}
