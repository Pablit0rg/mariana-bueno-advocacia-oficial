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
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-rich-black border-t border-gold-primary/20 relative pt-10 pb-6">
      
      {/* Botão Scroll: Ajustado para ficar mais harmônico com a nova altura */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold-primary text-rich-black p-2 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)] z-20 hover:scale-110 transition-transform duration-300"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={18} />
      </button>

      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- GRID DE ALINHAMENTO PERFEITO --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-start">
          
          {/* Coluna 1: Identidade & Phygital */}
          <div className="space-y-5">
            <h3 className="font-serif text-2xl text-white tracking-wide">Mariana Bueno</h3>
            
            {/* QR CODE - PHYGITAL EXPERIENCE (Visível em Mobile e Desktop) */}
            <div className="flex flex-row items-center gap-4">
              <div className="bg-white p-1.5 w-fit rounded shadow-[0_0_15px_rgba(212,175,55,0.1)] border border-gold-primary/20">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://wa.me/5541997606069" 
                  alt="QR Code WhatsApp" 
                  className="w-[80px] h-[80px] object-contain"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                {/* CTA NOVA: Simples, Direta e Tecnológica */}
                <span className="text-gold-primary text-[10px] uppercase tracking-[0.2em] font-bold border-l-2 border-gold-primary pl-3">
                  Atendimento<br/>Digital
                </span>
                
                {/* Redes Sociais Alinhadas ao QR Code */}
                <div className="flex gap-4 pl-3">
                  <a href="#" className="text-gray-400 hover:text-gold-primary transition-colors hover:scale-110"><Instagram size={18} /></a>
                  <a href="#" className="text-gray-400 hover:text-gold-primary transition-colors hover:scale-110"><Linkedin size={18} /></a>
                  <a href="#" className="text-gray-400 hover:text-gold-primary transition-colors hover:scale-110"><Facebook size={18} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Legal (Alinhada à direita no Desktop) */}
          <div className="md:text-right flex flex-col md:items-end">
            <h4 className="text-white font-serif text-lg mb-4 tracking-wide">Informações Legais</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 hover:text-gold-primary text-xs uppercase tracking-wider transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Rodapé Inferior: Copyright & Créditos */}
        <div className="border-t border-gold-primary/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] text-center md:text-left uppercase tracking-widest">
            © {new Date().getFullYear()} Mariana Bueno Advocacia. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-3">
             {/* 1. FRASE DE SEGURANÇA */}
             <p className="text-gray-700 text-[10px] uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 inline-block"></span>
                Site Protegido e Criptografado
             </p>

             {/* 2. CADEADO (Login Administrativo Oculto) */}
             <Link href="/adm" className="text-gray-800 hover:text-gold-primary transition-colors p-1" title="Área Restrita">
                <span className="sr-only">Login Administrativo</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 hover:opacity-100">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
