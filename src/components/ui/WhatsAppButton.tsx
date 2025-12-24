"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "5541997606069"; // Número da Dra. Mariana

  useEffect(() => {
    const toggleVisibility = () => {
      // O botão só aparece depois que o usuário rolar um pouco (300px)
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
    <div className="fixed bottom-6 right-6 z-50 group">
      
      {/* --- EFEITO RADAR (PULSO) --- 
          Mantido o animate-ping para o efeito de "onda" expandindo atrás do botão
      */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-primary opacity-75 duration-1000"></span>
      
      <a
        href={`https://wa.me/${phoneNumber}?text=Ol%C3%A1%2C%20Dra.%20Mariana.%20Gostaria%20de%20agendar%20um%20atendimento.`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-3 px-6 py-4 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 bg-gold-primary overflow-hidden group/btn"
      >
        {/* --- EFEITO REFLEXO DE LUXO (SHINE SUAVE) --- 
            Ajustado para ser lento (duration-1000) e sutil (white/30) para não branquear o botão
        */}
        <div className="absolute inset-0 -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] z-10 pointer-events-none" />

        <MessageCircle size={24} className="text-rich-black fill-rich-black/10 relative z-20" />
        
        <span className="font-bold text-rich-black uppercase tracking-widest text-xs md:text-sm relative z-20">
          Falar com a Advogada
        </span>
      </a>
    </div>
  );
}
