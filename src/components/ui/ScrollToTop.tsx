"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Lógica para mostrar o botão só depois de rolar 300px
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Se não for visível, não renderiza nada
  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      // AJUSTES REALIZADOS:
      // z-40: Garante que fique acima do conteúdo, mas abaixo de modais críticos.
      // bottom-24 right-6: Posição Mobile (para não cobrir o WhatsApp).
      // md:bottom-28 md:right-8: Posição Desktop (Ajustada para ficar acima do WhatsApp/Cookie Banner com segurança).
      // bg-gold-primary: COR DOURADA FIXA (Padrão Solid Gold).
      // text-rich-black: Texto preto para contraste no dourado.
      className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-40 p-3 bg-gold-primary text-rich-black rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-white hover:scale-110 transition-all duration-300 group"
    >
      <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
    </button>
  );
}
