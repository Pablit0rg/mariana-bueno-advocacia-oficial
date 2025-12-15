"use client";

import { Instagram, MessageCircle, Mail, MapPin, ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rich-black border-t border-gold-primary/20 pt-20 pb-10 relative">
      
      {/* Botão de voltar ao topo (opcional, mas chique) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <a href="#hero" className="w-12 h-12 bg-rich-gray border border-gold-primary/30 rounded-full flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-rich-black transition-all shadow-lg shadow-gold-primary/10">
          <ArrowUp size={20} />
        </a>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* COLUNA 1: Marca */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-2xl text-white mb-6 tracking-widest">
              MARIANA BUENO
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Advocacia artesanal e estratégica. Foco em resultados que preservam o patrimônio e as relações familiares.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-rich-black transition-all hover:border-gold-primary">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/5541999999999" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-rich-black transition-all hover:border-gold-primary">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* COLUNA 2: Links Rápidos */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b border-gold-primary/20 pb-2 w-fit">Navegação</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#hero" className="hover:text-gold-primary transition-colors flex items-center gap-2">Início</Link></li>
              <li><Link href="#sobre" className="hover:text-gold-primary transition-colors flex items-center gap-2">Sobre a Dra.</Link></li>
              <li><Link href="#atuacao" className="hover:text-gold-primary transition-colors flex items-center gap-2">Áreas de Atuação</Link></li>
              <li><Link href="#depoimentos" className="hover:text-gold-primary transition-colors flex items-center gap-2">Depoimentos</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: Áreas (Agora com Links) */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b border-gold-primary/20 pb-2 w-fit">Áreas</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#atuacao" className="hover:text-gold-primary transition-colors block py-1">Direito de Família</Link></li>
              <li><Link href="#atuacao" className="hover:text-gold-primary transition-colors block py-1">Direito das Sucessões</Link></li>
              <li><Link href="#atuacao" className="hover:text-gold-primary transition-colors block py-1">Direito Civil</Link></li>
              <li><Link href="#atuacao" className="hover:text-gold-primary transition-colors block py-1">Direito do Trabalho</Link></li>
            </ul>
          </div>

          {/* COLUNA 4: Contato */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b border-gold-primary/20 pb-2 w-fit">Contato</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-primary shrink-0 mt-1" size={18} />
                <span>Curitiba - PR<br /><span className="text-xs opacity-60">Atendimento Online para todo o Brasil</span></span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-gold-primary shrink-0 group-hover:scale-110 transition-transform" size={18} />
                <a href="mailto:contato@advmarianabueno.com.br" className="hover:text-white transition-colors">contato@advmarianabueno.com.br</a>
              </li>
              <li className="flex items-center gap-3 group">
                <MessageCircle className="text-gold-primary shrink-0 group-hover:scale-110 transition-transform" size={18} />
                <a href="https://wa.me/5541999999999" target="_blank" className="hover:text-white transition-colors">(41) 99999-9999</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Final */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {currentYear} Mariana Bueno Advocacia. Todos os direitos reservados.</p>
          <p>Desenvolvido com <span className="text-gold-primary">Excelência</span></p>
        </div>
      </div>
    </footer>
  );
}