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
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* --- EFEITO RADAR (PULSO) --- */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-primary opacity-75 duration-1000"></span>
      
      <a
        href="https://wa.me/5541997606069?text=Ol%C3%A1%2C%20Dra.%20Mariana.%20Gostaria%20de%20agendar%20um%20atendimento."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-3 px-6 py-4 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 bg-gold-primary"
      >
        <MessageCircle size={24} className="text-rich-black fill-rich-black/10" />
        
        <span className="font-bold text-rich-black uppercase tracking-widest text-xs md:text-sm">
          Falar com a Advogada
        </span>
      </a>
    </div>
  );
}
