"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Instagram, Linkedin, Mail } from "lucide-react";

const navigation = [
  { name: "Início", href: "#hero" },
  { name: "Áreas de Atuação", href: "#areas" },
  { name: "Sobre", href: "#sobre" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // AJUSTE CRÍTICO: Ativa o fundo preto logo no início (10px) 
      // para evitar que a logo do Hero apareça por trás.
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-rich-black/95 backdrop-blur-md border-gold-primary/20 py-2 shadow-lg" // Fundo preto rápido e sólido
          : "bg-transparent border-transparent py-6" // Transparente apenas no topo absoluto
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between relative">
          
          {/* LOGO ESQUERDA (Muda com Scroll) */}
          <Link href="/" className="relative z-50 group">
            <div className={`transition-all duration-500 ease-in-out ${isScrolled ? "scale-90" : "scale-100"}`}>
              {isScrolled ? (
                // Logo Pequena (Menu Fixo)
                <div className="flex items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-500">
                  <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gold-primary/30">
                    <Image
                      src="/logo-header.png-removebg-preview.png"
                      alt="Logo Compacta"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="font-serif text-lg text-white tracking-widest uppercase">
                    Mariana <span className="text-gold-primary">Bueno</span>
                  </span>
                </div>
              ) : (
                // Logo Grande (Topo) - Oculta aqui para não competir com o Hero, ou mantém discreta
                <span className="font-serif text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-white to-gold-primary bg-[length:200%_auto] animate-shine tracking-widest uppercase opacity-0 lg:opacity-100 transition-opacity">
                  {/* Texto visível apenas em telas grandes antes do scroll se desejar, ou deixe vazio */}
                </span>
              )}
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Botão de Ação Rápida */}
            <a
              href="https://wa.me/5541997606069?text=Ol%C3%A1%2C%20Dra.%20Mariana.%20Gostaria%20de%20agendar%20um%20atendimento."
              target="_blank"
              className={`px-6 py-2 border border-gold-primary text-gold-primary text-xs uppercase tracking-widest hover:bg-gold-primary hover:text-rich-black transition-all duration-300 rounded-sm ${
                isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              Agendar
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-gold-primary p-2 z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* MOBILE OVERLAY */}
          {isOpen && (
            <div className="fixed inset-0 bg-rich-black/98 z-40 flex items-center justify-center animate-in fade-in duration-300">
              <div className="flex flex-col items-center gap-8 text-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-2xl font-serif text-white hover:text-gold-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="w-16 h-[1px] bg-gold-primary/30 my-4"></div>

                <div className="flex gap-6">
                  <a href="#" className="text-gray-400 hover:text-gold-primary transition-colors"><Instagram size={24} /></a>
                  <a href="#" className="text-gray-400 hover:text-gold-primary transition-colors"><Linkedin size={24} /></a>
                  <a href="#" className="text-gray-400 hover:text-gold-primary transition-colors"><Mail size={24} /></a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
