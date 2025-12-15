"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Eu estava perdida e com medo do processo de divórcio. A Dra. Mariana não só resolveu a parte jurídica com maestria, mas me devolveu a paz. Uma profissional humana e implacável na defesa.",
    author: "M. S.",
    area: "Direito de Família",
  },
  {
    text: "Procurei o escritório para um caso trabalhista complexo. A estratégia montada foi perfeita e o resultado superou minhas expectativas. Senti firmeza desde a primeira reunião.",
    author: "Carlos A.",
    area: "Direito Trabalhista",
  },
  {
    text: "A regularização do inventário da minha família estava parada há anos. A Dra. Mariana destravou tudo com uma agilidade impressionante. Recomendo de olhos fechados.",
    author: "Ana P.",
    area: "Sucessões",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-rich-gray relative overflow-hidden">
      
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
        <Quote size={400} className="text-gold-primary rotate-180" />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-primary text-xs md:text-sm tracking-[0.3em] uppercase font-bold">
            Reconhecimento
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mt-4">
            A voz de quem <span className="text-gold-gradient">já foi defendido</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              // Borda mais visível: border-white/10
              className="bg-rich-black/50 p-8 rounded-xl border border-white/10 relative hover:border-gold-primary/40 transition-colors group shadow-lg"
            >
              <Quote className="text-gold-primary mb-6 opacity-50 group-hover:opacity-100 transition-opacity" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold-primary text-gold-primary" />
                ))}
              </div>

              <p className="text-gray-300 font-light italic leading-relaxed mb-6">
                "{item.text}"
              </p>

              <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                <span className="font-serif text-white font-bold tracking-wide">
                  {item.author}
                </span>
                <span className="text-xs text-gold-primary uppercase tracking-wider bg-gold-primary/10 px-2 py-1 rounded">
                  {item.area}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}