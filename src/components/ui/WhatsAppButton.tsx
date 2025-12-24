"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/5541997606069?text=Ol%C3%A1%2C%20Dra.%20Mariana.%20Gostaria%20de%20agendar%20um%20atendimento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 px-6 py-4 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] overflow-hidden bg-gold-primary"
    >
      {/* --- EFEITO REVISADO ---
         1. animate-shine-slow: Usa a animação de 5s (bem mais calma).
         2. via-white/20: Brilho reduzido para 20% de opacidade. 
            O botão não fica branco, apenas cintila.
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] animate-shine-slow pointer-events-none" />

      <MessageCircle size={24} className="text-rich-black relative z-10 fill-rich-black/10" />
      
      <span className="font-bold text-rich-black uppercase tracking-widest text-xs md:text-sm relative z-10">
        Falar com a Advogada
      </span>
    </a>
  );
}
