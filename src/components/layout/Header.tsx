"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ativa a transição logo após sair do topo (100px)
      setScrolled(window.scrollY > 100);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-gold-primary/20 ${
        scrolled 
          ? "bg-rich-black/90 backdrop-blur-md py-2 shadow-xl" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* --- BRANDING DINÂMICO --- */}
        <Link href="/" className="group relative z-50 flex items-center h-12" aria-label="Ir para página inicial">
          
          {/* ESTADO 1: TEXTO LIMPO (Aparece no Topo) */}
          {/* Formatação original restaurada: Flex Column, alinhamento simples */}
          <div className={`flex flex-col justify-center transition-all duration-500 absolute left-0 ${
            scrolled ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
          }`}>
            <h1 className="font-serif text-xl md:text-2xl font-bold text-white tracking-wider group-hover:text-gold-primary transition-colors uppercase whitespace-nowrap">
              MARIANA BUENO
            </h1>
            <span className="text-[10px] md:text-xs font-sans text-gold-primary font-light tracking-[0.3em] uppercase">
              Advocacia Especializada
            </span>
          </div>

          {/* ESTADO 2: LOGO 3D (Aparece no Scroll) */}
          <div className={`relative w-40 md:w-48 h-full transition-all duration-500 ${
            scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <Image 
              src="/logo-header.png-removebg-preview.png"
              alt="Mariana Bueno Advocacia" 
              width={65}
              height={65}
              className="object-contain hover:scale-105 transition-transform duration-300 -mt-2" 
              priority
            />
          </div>

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
          
          {/* BOTÃO PREMIUM (SOLID GOLD) */}
          <a 
            href="https://wa.me/5541999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-6 py-3 bg-gold-primary text-rich-black rounded overflow-hidden group hover:bg-white transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]"
          >
            <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out skew-x-12" />
            <span className="text-xs font-bold uppercase tracking-widest relative z-10">
              Falar com a Advogada
            </span>
            <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </nav>

        {/* --- BOTÃO MOBILE --- */}
        <button
          className="md:hidden text-white hover:text-gold-primary transition-colors relative z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MENU MOBILE --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-rich-black/98 backdrop-blur-xl z-40 md:hidden flex flex-col justify-center items-center gap-8"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-primary/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative w-48 h-16 mb-4 opacity-80">
               <Image 
                  src="/logo-header.png-removebg-preview.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
            </div>

            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif text-white hover:text-gold-primary transition-colors relative group"
              >
                {item.name}
              </Link>
            ))}

            <div className="w-16 h-[1px] bg-white/10 my-4" />

            <a 
              href="https://wa.me/5541999999999"
              target="_blank"
              className="px-8 py-4 bg-gold-primary text-rich-black font-bold rounded uppercase tracking-widest text-sm shadow-lg"
            >
              Agendar Consulta
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
