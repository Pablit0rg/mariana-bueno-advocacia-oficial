"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-rich-black relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-gold-primary font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-gold-primary"></span>
            Atendimento Exclusivo
            <span className="w-8 h-[1px] bg-gold-primary"></span>
          </h2>
          <h3 className="font-serif text-3xl md:text-4xl text-white">
            Agende sua Consulta
          </h3>
          <p className="text-gray-400 font-light">
            Seu caso requer atenção especializada. Entre em contato para uma análise preliminar.
          </p>
        </div>

        {/* O LAYOUT MÁGICO (GRID) */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* COLUNA 1: Informações (Esquerda) */}
          {/* 'flex flex-col justify-between' é o segredo para esticar e alinhar ponta a ponta */}
          <div className="flex flex-col justify-between gap-6 h-full">
            
            {/* Card 1: Telefone (Topo alinhado com o Form) */}
            <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 hover:border-gold-primary/30 transition-colors rounded-lg group flex-1">
              <div className="p-3 bg-rich-black rounded-full border border-gold-primary/20 text-gold-primary group-hover:scale-110 transition-transform mt-1">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-white font-serif text-lg">Telefone & WhatsApp</h4>
                <p className="text-gray-400 text-sm mb-2">Atendimento ágil e direto.</p>
                <a href="https://wa.me/5541999999999" target="_blank" className="text-white hover:text-gold-primary transition-colors font-medium text-lg">
                  (41) 99999-9999
                </a>
              </div>
            </div>

            {/* Card 2: E-mail (Meio) */}
            <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 hover:border-gold-primary/30 transition-colors rounded-lg group flex-1">
              <div className="p-3 bg-rich-black rounded-full border border-gold-primary/20 text-gold-primary group-hover:scale-110 transition-transform mt-1">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-white font-serif text-lg">E-mail Corporativo</h4>
                <p className="text-gray-400 text-sm mb-2">Para envio de documentos.</p>
                <a href="mailto:contato@advmarianabueno.com.br" className="text-white hover:text-gold-primary transition-colors font-medium break-all">
                  contato@advmarianabueno.com.br
                </a>
              </div>
            </div>

            {/* Card 3: Endereço (Fundo alinhado com o Form) */}
            <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 hover:border-gold-primary/30 transition-colors rounded-lg group flex-1">
              <div className="p-3 bg-rich-black rounded-full border border-gold-primary/20 text-gold-primary group-hover:scale-110 transition-transform mt-1">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-white font-serif text-lg">Escritório Físico</h4>
                <p className="text-gray-400 text-sm">
                  Curitiba - PR <br />
                  <span className="text-xs opacity-60 uppercase tracking-wider mt-1 block">Atendimento com Hora Marcada</span>
                </p>
              </div>
            </div>

          </div>

          {/* COLUNA 2: Formulário Premium (Direita) */}
          <div className="bg-rich-gray/50 backdrop-blur-sm border border-white/5 p-8 md:p-10 rounded-2xl relative h-full flex flex-col justify-center">
            {/* Brilho decorativo */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-primary/10 blur-[40px] rounded-full pointer-events-none" />
            
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs text-gold-primary uppercase tracking-widest font-bold ml-1">Nome Completo</label>
                  <input type="text" placeholder="Seu nome" className="w-full bg-rich-black border border-white/10 focus:border-gold-primary/50 text-white rounded-lg px-4 py-3 outline-none transition-all placeholder:text-gray-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gold-primary uppercase tracking-widest font-bold ml-1">Telefone</label>
                  <input type="tel" placeholder="(00) 00000-0000" className="w-full bg-rich-black border border-white/10 focus:border-gold-primary/50 text-white rounded-lg px-4 py-3 outline-none transition-all placeholder:text-gray-600" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gold-primary uppercase tracking-widest font-bold ml-1">E-mail</label>
                <input type="email" placeholder="seu@email.com" className="w-full bg-rich-black border border-white/10 focus:border-gold-primary/50 text-white rounded-lg px-4 py-3 outline-none transition-all placeholder:text-gray-600" />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gold-primary uppercase tracking-widest font-bold ml-1">Relato Breve</label>
                {/* Altura ajustada para garantir o alinhamento visual com a coluna da esquerda */}
                <textarea rows={5} placeholder="Descreva brevemente sua necessidade..." className="w-full bg-rich-black border border-white/10 focus:border-gold-primary/50 text-white rounded-lg px-4 py-3 outline-none transition-all placeholder:text-gray-600 resize-none" />
              </div>

              {/* Botão Shimmer (Solid Gold Fixado) */}
              <button 
                type="submit"
                className="w-full relative overflow-hidden group bg-gold-primary text-rich-black font-bold uppercase tracking-widest text-xs py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-lg shadow-gold-primary/10"
              >
                <span className="relative z-10">Enviar Solicitação</span>
                <Send size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                
                <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
