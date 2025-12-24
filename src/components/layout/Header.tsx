"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Sobre a Dra.", href: "/#sobre" },
  { name: "Áreas de Atuação", href: "/#atuacao" },
  { name: "Blog Jurídico", href: "/#blog" },
  { name: "Contato", href: "/#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Verifica se é uma página interna (não a home)
  const isInternalPage = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      // CORREÇÃO AQUI: Removido o zero à esquerda (era 05, agora é 5)
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define as cores baseadas no scroll ou se é página interna
  const isDarkBg = scrolled || isInternalPage;
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isDarkBg 
          ? "bg-rich-black/95 backdrop-blur-md shadow-lg py-3 border-b border-gold-primary/20" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="relative z-50 group">
          {/* Logo Texto (Sem imagem por enquanto para evitar erros de load) */}
           <div className="flex flex-col">
              <span className={`font-serif text-2xl tracking-wide transition-colors duration-300 ${
                isDarkBg ? "text-gold-primary" : "text-white"
              }`}>
                Mariana Bueno
              </span>
              <span className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${
                isDarkBg ? "text-gray-400" : "text-gray-300"
              }`}>
                Advocacia Especializada
              </span>
           </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 ${
                isDarkBg 
                  ? "text-gray-300 hover:text-gold-primary" 
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <a 
            href="https://wa.me/5541997606069" 
            target="_blank"
            className={`px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 ${
               isDarkBg
                ? "bg-gold-primary text-rich-black hover:bg-white"
                : "bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-gold-primary hover:border-gold-primary hover:text-rich-black"
            }`}
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden relative z-50 p-2 transition-colors ${
            isDarkBg ? "text-white" : "text-white"
          }`}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-rich-black/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}>
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif text-white hover:text-gold-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
             <a 
                href="https://wa.me/5541997606069"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 bg-gold-primary text-rich-black rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
              >
                Falar no WhatsApp
              </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
