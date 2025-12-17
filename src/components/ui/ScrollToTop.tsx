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

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-30 p-3 bg-rich-black/80 backdrop-blur border border-gold-primary text-gold-primary rounded-full shadow-lg hover:bg-gold-primary hover:text-rich-black transition-all duration-300 hover:-translate-y-1 group"
    >
      <ArrowUp size={20} className="group-hover:animate-bounce" />
    </button>
  );
}
