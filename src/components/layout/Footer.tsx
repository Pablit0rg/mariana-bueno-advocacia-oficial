"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const footerLinks = {
  institucional: [
    { name: "Início", href: "/" },
    { name: "Sobre a Dra.", href: "#sobre" },
    { name: "Áreas de Atuação", href: "#atuacao" },
    { name: "Depoimentos", href: "#depoimentos" },
  ],
  legal: [
    { name: "Termos de Uso", href: "/termos" },
    { name: "Política de Privacidade", href: "/privacidade" },
    { name: "Aviso Legal", href: "/aviso-legal" },
  ],
  contato: [
    { name: "WhatsApp: (41) 99760-6069", href: "https://wa.me/5541997606069" },
    { name: "contato@advmarianabueno.com.br", href: "mailto:contato@advmarianabueno.com.br" },
    { name: "Curitiba - PR", href: "#" },
  ]
};

export function Footer() {
  
  // Função de Rolar ao Topo (Integrada)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-rich-black border-t border-gold-primary/20 relative pt-16 pb-8">
      
      {/* --- BOTÃO SCROLL TO TOP (ANCORADO NA LINHA) --- */}
      {/* CORRIGIDO: Dourado Fixo, Maior (p-3) e Centralizado */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gold-primary text-rich-black p-3 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] z-20 hover:scale-110 transition-transform duration-300"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Marca */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-white">Mariana Bueno</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advocacia artesanal e estratégica, focada na proteção do seu patrimônio e da sua família.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gold-primary hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gold-primary hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gold-primary hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Coluna 2: Institucional */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Institucional</h4>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold-primary text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Legal */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold-primary text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contato</h4>
            <ul className="space-y-3">
              {footerLinks.contato.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" className="text-gray-400 hover:text-gold-primary text-sm transition-colors flex items-center gap-2">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Mariana Bueno Advocacia. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-2">
             {/* Acesso Restrito (Login Oculto) */}
             <Link href="/adm" className="text-gray-600 hover:text-gold-primary transition-colors p-2">
                <span className="sr-only">Área Restrita</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
             </Link>
             <p className="text-gray-600 text-[10px] uppercase tracking-wider">
                Desenvolvido com excelência
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
