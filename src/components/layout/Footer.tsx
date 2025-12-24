"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const footerLinks = {
  legal: [
    { name: "Termos de Uso", href: "/termos" },
    { name: "Política de Privacidade", href: "/privacidade" },
    { name: "Aviso Legal", href: "/aviso-legal" },
  ],
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
      
      {/* --- BOTÃO SCROLL TO TOP --- */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gold-primary text-rich-black p-3 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] z-20 hover:scale-110 transition-transform duration-300"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-4 md:px-8">
        {/* GRID REESTRUTURADO: 2 Colunas Principais (Brand/QR + Legal) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-start">
          
          {/* Coluna 1: Marca, QR Code (Desktop) & Social */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl text-white">Mariana Bueno</h3>
            
            {/* QR CODE - PHYGITAL EXPERIENCE (Apenas Desktop) */}
            <div className="hidden md:flex flex-col gap-2">
              <div className="bg-white p-2 w-fit rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.2)] border border-gold-primary/30">
                {/* QR Code gerado apontando para o link do WhatsApp oficial */}
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://wa.me/5541997606069" 
                  alt="QR Code WhatsApp Dra. Mariana Bueno" 
                  className="w-[100px] h-[100px] object-contain"
                />
              </div>
              <p className="text-gold-primary text-[10px] uppercase tracking-widest font-semibold ml-1">
                Scan to Chat
              </p>
            </div>

            {/* Texto alternativo para Mobile (já que o QR some) */}
            <p className="md:hidden text-gray-400 text-sm leading-relaxed">
              Advocacia artesanal e estratégica, focada na proteção do seu patrimônio.
            </p>

            {/* Redes Sociais */}
            <div className="flex gap-6 pt-2">
              <a href="#" className="text-gold-primary hover:text-white transition-colors hover:scale-110 transform duration-200"><Instagram size={24} /></a>
              <a href="#" className="text-gold-primary hover:text-white transition-colors hover:scale-110 transform duration-200"><Linkedin size={24} /></a>
              <a href="#" className="text-gold-primary hover:text-white transition-colors hover:scale-110 transform duration-200"><Facebook size={24} /></a>
            </div>
          </div>

          {/* Coluna 2: Legal & Links Úteis (Alinhado à direita no Desktop) */}
          <div className="md:text-right flex flex-col md:items-end">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Informações Legais</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold-primary text-sm transition-colors relative group">
                    {link.name}
                    <span className="absolute -bottom-1 right-0 w-0 h-[1px] bg-gold-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
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
