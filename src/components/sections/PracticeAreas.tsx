"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Scale, Briefcase, ScrollText, Gavel, Users } from "lucide-react";

const areas = [
  {
    icon: <HeartHandshake size={32} />,
    title: "Direito de Família",
    description: "Divórcios, guarda, pensão e partilhas. Soluções que priorizam o bem-estar emocional e financeiro.",
    highlight: true, // Destaque para o carro-chefe
  },
  {
    icon: <Briefcase size={32} />,
    title: "Direito Trabalhista",
    description: "Defesa intransigente dos seus direitos nas relações de trabalho, seja para empregados ou empregadores.",
    highlight: false,
  },
  {
    icon: <Scale size={32} />,
    title: "Direito Civil",
    description: "Contratos, indenizações e responsabilidade civil. Segurança jurídica para seus negócios e patrimônio.",
    highlight: false,
  },
  {
    icon: <Users size={32} />,
    title: "Sucessões",
    description: "Inventários e testamentos. Planejamento sucessório para garantir tranquilidade à família.",
    highlight: false,
  },
];

export function PracticeAreas() {
  return (
    <section id="atuacao" className="py-24 bg-rich-black relative">
      
      {/* Título da Seção */}
      <div className="container mx-auto px-4 md:px-8 mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold-primary text-xs md:text-sm tracking-[0.3em] uppercase font-bold"
        >
          Expertise Jurídica
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl text-white mt-4"
        >
          Áreas de <span className="text-gold-gradient">Atuação</span>
        </motion.h2>
      </div>

      {/* Grid de Cards */}
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }} // Efeito cascata (um por um)
            className={`group p-8 rounded-xl border transition-all duration-300 relative overflow-hidden ${
              area.highlight 
                ? "bg-rich-gray border-gold-primary/40 shadow-[0_0_30px_rgba(212,175,55,0.1)]" 
                : "bg-rich-gray/50 border-white/5 hover:border-gold-primary/30"
            }`}
          >
            {/* Efeito de brilho no hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className={`mb-6 p-3 rounded-lg w-fit transition-colors duration-300 ${
                area.highlight ? "bg-gold-primary text-rich-black" : "bg-white/5 text-gold-primary group-hover:bg-gold-primary group-hover:text-rich-black"
              }`}>
                {area.icon}
              </div>
              
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-gold-primary transition-colors">
                {area.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300">
                {area.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}