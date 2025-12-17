"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import Image from "next/image"; // Descomente amanhã para a logo
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito de scroll para mudar o fundo (Glassmorphism)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Início", href: "#hero" },
    { name: "Sobre a Dra.", href: "#sobre" },
    { name: "Áreas de Atuação", href: "#atuacao" },
    { name: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-rich-black/90 backdrop-blur-md py-3 shadow-xl" 
          : "bg-transparent py-5"
      } 
      /* AQUI ESTÁ A CORREÇÃO DA LINHA: */
      /* Ela agora é fixa (border-gold-primary/10) independente do scroll */
      border-gold-primary/10`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* --- LOGO / BRANDING --- */}
        <Link href="/" className="group relative z-50" aria-label="Ir para página inicial">
          
          {/* OPÇÃO 1: TEXTO (Ativo) */}
          <div className="flex flex-col">
            <h1 className="font-serif text-xl md:text-2xl font-bold text-white tracking-wider group-hover:text-gold-primary transition-colors">
              MARIANA BUENO
            </h1>
            <span className="text-[10px] md:text-xs font-sans text-gold-primary font-light tracking-[0.3em] uppercase">
              Advocacia Especializada
            </span>
          </div>

          {/* OPÇÃO 2: LOGO IMAGEM (Para amanhã) */}
          {/* <div className="relative w-48 h-12 hidden md:block">
            <Image src="/logo-header.png" alt="Mariana Bueno Advocacia" fill className="object-contain object-left" />
          </div> */}
        </Link>

        {/* --- MENU DESKTOP --- */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Menu Principal">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wide"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#D4AF37]" />
            </Link>
          ))}
          
          {/* BOTÃO PREMIUM (PADRÃO SOLID GOLD) */}
          {/* Antes era transparente, agora é Dourado Fixo */}
          <a 
            href="https://wa.me/5541999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-6 py-3 bg-gold-primary text-rich-black rounded overflow-hidden group hover:bg-white transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            aria-label="Falar com a advogada no WhatsApp"
          >
            {/* Efeito Shimmer (Reflexo Branco passando) */}
            <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out skew-x-12" />
            
            <span className="text-xs font-bold uppercase tracking-widest relative z-10">
              Falar com a Advogada
            </span>
            <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </nav>

        {/* --- BOTÃO MOBILE (HAMBURGUER) --- */}
        <button
          className="md:hidden text-white hover:text-gold-primary transition-colors relative z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MENU MOBILE (FULL SCREEN) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-rich-black/98 backdrop-blur-xl z-40 md:hidden flex flex-col justify-center items-center gap-8"
          >
            {/* Fundo Decorativo */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-primary/10 blur-[100px] rounded-full pointer-events-none" />

            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif text-white hover:text-gold-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            <div className="w-16 h-[1px] bg-white/10 my-4" />

            {/* Botão Mobile também Solid Gold */}
            <a 
              href="https://wa.me/5541999999999"
              target="_blank"
              className="px-8 py-4 bg-gold-primary text-rich-black font-bold rounded uppercase tracking-widest text-sm shadow-lg hover:bg-white transition-colors"
            >
              Agendar Consulta
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
