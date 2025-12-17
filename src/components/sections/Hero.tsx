"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image"; // <--- Import ativado

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-rich-black">
      
      {/* Efeito de Fundo (Luz Dourada Suave) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold-dark/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LADO ESQUERDO: Texto e CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="text-gold-primary" size={20} />
            <span className="text-gold-light/80 text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
              Advocacia de Alta Performance
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Defesa <br />
            <span className="text-gold-gradient">Estratégica</span> & <br />
            Humanizada
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed">
            Especialista em resolver conflitos familiares e cíveis com segurança jurídica e discrição absoluta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5541999999999"
              target="_blank"
              className="px-8 py-4 bg-gold-primary hover:bg-gold-light text-rich-black font-bold rounded text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
            >
              Iniciar Atendimento
              <ArrowRight size={18} />
            </a>
            
            <a 
              href="#sobre"
              className="px-8 py-4 border border-white/20 hover:border-gold-primary text-white hover:text-gold-primary font-medium rounded text-sm uppercase tracking-widest transition-all flex items-center justify-center cursor-pointer"
            >
              Conhecer a Dra.
            </a>
          </div>
        </motion.div>

        {/* LADO DIREITO: Foto Real Otimizada */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[600px] w-full flex items-end justify-center"
        >
          <div className="relative w-full h-full rounded-t-[100px] border border-white/10 overflow-hidden shadow-2xl group">
             
             {/* Componente Next/Image Otimizado */}
             <Image 
               src="https://images.pexels.com/photos/8111815/pexels-photo-8111815.jpeg" 
               alt="Advogada especialista"
               fill // Preenche o pai
               priority // Carrega IMEDIATAMENTE (Capa)
               className="object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
             />
             
             {/* Degradê na base */}
             <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-rich-black via-rich-black/50 to-transparent z-10" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
