"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Scale } from "lucide-react";

export function About() {
  
  const stats = [
    { icon: <Award size={24} />, label: "Especialista em Família" },
    { icon: <Scale size={24} />, label: "4 Anos de Atuação" },
    { icon: <CheckCircle2 size={24} />, label: "OAB/PR Ativa" },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-rich-gray relative overflow-hidden">
      
      {/* Detalhe visual de fundo (Círculo dourado bem suave) */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LADO ESQUERDO: A Imagem (Placeholder) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Moldura Dourada */}
            <div className="absolute -inset-4 border-2 border-gold-primary/30 rounded-lg translate-x-4 translate-y-4" />
            
            <div className="relative h-[500px] bg-rich-black rounded-lg border border-white/10 overflow-hidden flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
              <p className="text-center text-white/40 px-6">
                [FOTO: Dra. Mariana sentada ou em pose de escritório]
                <br /><span className="text-sm">Transmite seriedade e acolhimento</span>
              </p>
            </div>
          </motion.div>

          {/* LADO DIREITO: O Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-gold-primary text-sm tracking-[0.2em] uppercase font-bold mb-2">
              Perfil Profissional
            </h2>
            <h3 className="font-serif text-3xl md:text-5xl text-white mb-6">
              Advocacia não é apenas leis. <br />
              <span className="text-gold-gradient">É sobre vidas.</span>
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              Com foco absoluto em <strong>Direito de Família</strong>, minha missão é conduzir processos delicados com a firmeza necessária e a humanidade indispensável.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              Atuo de forma estratégica para garantir que seus direitos sejam preservados, sem expor desnecessariamente a sua história. Uma advocacia moderna, ágil e livre de burocracias antigas.
            </p>

            {/* Cards de Destaque */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center sm:items-start gap-2">
                  <div className="text-gold-primary mb-1">{stat.icon}</div>
                  <span className="text-white font-medium text-sm">{stat.label}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}