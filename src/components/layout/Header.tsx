"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar a cor do vidro quando rola a página
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
    { name: "Diferenciais", href: "#diferenciais" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-rich-black/80 backdrop-blur-md border-b border-gold-primary/20 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* LOGO / NOME */}
        <Link href="/" className="group">
          <h1 className="font-serif text-xl md:text-2xl font-bold text-white tracking-wider group-hover:text-gold-primary transition-colors">
            MARIANA BUENO
            <span className="block text-[10px] md:text-xs font-sans text-gold-primary font-light tracking-[0.2em] uppercase">
              Advocacia Especializada
            </span>
          </h1>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-gold-primary transition-colors uppercase tracking-wide"
            >
              {item.name}
            </Link>
          ))}
          
          <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-gold-dark to-gold-primary text-rich-black font-bold rounded text-sm hover:brightness-110 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            Falar com a Advogada
            <ArrowRight size={16} />
          </button>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden text-white hover:text-gold-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE (Full Screen) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-rich-black/95 backdrop-blur-xl border-b border-gold-primary/20 md:hidden p-8 flex flex-col gap-6 shadow-2xl"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif text-white hover:text-gold-primary border-b border-white/5 pb-2"
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full py-4 bg-gold-primary text-rich-black font-bold rounded uppercase tracking-widest mt-4">
              Agendar Consulta
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}