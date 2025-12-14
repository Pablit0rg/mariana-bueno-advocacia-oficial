"use client";

import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-rich-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* COLUNA 1: Marca */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-2xl text-white mb-6">
              MARIANA BUENO
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Advocacia artesanal e estratégica. Foco em resultados que preservam o patrimônio e as relações familiares.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-rich-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-rich-black transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* COLUNA 2: Links Rápidos */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navegação</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#hero" className="hover:text-gold-primary transition-colors">Início</Link></li>
              <li><Link href="#sobre" className="hover:text-gold-primary transition-colors">Sobre a Dra.</Link></li>
              <li><Link href="#atuacao" className="hover:text-gold-primary transition-colors">Áreas de Atuação</Link></li>
              <li><Link href="#depoimentos" className="hover:text-gold-primary transition-colors">Depoimentos</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: Áreas */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Áreas</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Direito de Família</li>
              <li>Direito das Sucessões</li>
              <li>Direito Civil</li>
              <li>Direito do Trabalho</li>
            </ul>
          </div>

          {/* COLUNA 4: Contato */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-primary shrink-0 mt-1" size={18} />
                <span>Curitiba - PR<br />Atendimento Online para todo o Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-primary shrink-0" size={18} />
                <span>contato@advmarianabueno.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="text-gold-primary shrink-0" size={18} />
                <span>(41) 99999-9999</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Final */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2025 Mariana Bueno Advocacia. Todos os direitos reservados.</p>
          <p>Desenvolvido com <span className="text-gold-primary">Excelência</span></p>
        </div>
      </div>
    </footer>
  );
}