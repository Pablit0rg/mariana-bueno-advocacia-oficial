"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Clock, MapPin, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-rich-black relative">
      
      {/* Efeito de Luz de Fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rich-gray/50 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-rich-gray border border-gold-primary/20 rounded-2xl p-8 md:p-12 overflow-hidden relative shadow-[0_0_50px_rgba(212,175,55,0.1)]">
          
          {/* Decoração de Fundo do Card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-primary/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* LADO ESQUERDO: Texto de Urgência */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-serif text-3xl md:text-5xl text-white mb-6"
              >
                Seu caso exige <br />
                <span className="text-gold-gradient">atenção imediata?</span>
              </motion.h2>
              
              <p className="text-gray-400 text-lg mb-8 font-light">
                Não espere o problema se agravar. Agende uma consulta inicial para analisarmos a melhor estratégia para o seu cenário.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-gold-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Horário de Atendimento</p>
                    <p className="text-sm">Segunda a Sexta, das 09h às 18h</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-gold-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Escritório Digital</p>
                    <p className="text-sm">Atendimento em todo o Brasil via Videoconferência</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LADO DIREITO: Botões de Ação */}
            <div className="flex flex-col gap-4">
              <motion.a 
                href="https://wa.me/5541999999999" // Link do WhatsApp (depois colocamos o real)
                target="_blank"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group w-full py-6 bg-gold-primary hover:bg-gold-light text-rich-black rounded-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-gold-primary/20 hover:-translate-y-1"
              >
                <MessageCircle size={24} strokeWidth={2.5} />
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-wider font-bold opacity-80">Falar no WhatsApp</span>
                  <span className="block text-xl font-bold font-serif">Agendar Consulta</span>
                </div>
                <ArrowRight className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0" />
              </motion.a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="mailto:contato@advmarianabueno.com.br" className="py-4 px-6 border border-white/10 rounded-lg flex items-center gap-3 text-white hover:border-gold-primary/50 hover:bg-white/5 transition-colors">
                  <Mail className="text-gold-primary" size={20} />
                  <span className="text-sm font-medium">Enviar E-mail</span>
                </a>
                
                <button className="py-4 px-6 border border-white/10 rounded-lg flex items-center gap-3 text-white hover:border-gold-primary/50 hover:bg-white/5 transition-colors">
                  <span className="text-gold-primary font-bold border rounded px-1.5 text-xs">OAB</span>
                  <span className="text-sm font-medium">Ver Cadastro</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}