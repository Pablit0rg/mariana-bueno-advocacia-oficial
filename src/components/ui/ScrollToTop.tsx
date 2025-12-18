"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra o botão quando rolar mais de 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          // AQUI ESTÁ A MUDANÇA DE POSIÇÃO:
          // ANTES: fixed bottom-8 right-8 ... (Brigava com o Whats)
          // AGORA: fixed bottom-8 left-1/2 -translate-x-1/2 ... (Centralizado, estilo "Dock")
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 p-3 bg-gold-primary text-rich-black rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group border border-gold-primary/50 animate-in fade-in slide-in-from-bottom-4"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </>
  );
}
