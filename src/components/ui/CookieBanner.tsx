"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se já aceitou (simulação simples via localStorage)
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Delay pequeno para não assustar o usuário assim que entra
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem("cookie_consent", "true");
  };

  if (!isVisible) return null;

  return (
    // BARRA FULL-WIDTH (Estilo High Ticket)
    // w-full = Ocupa toda a largura
    // bottom-0 = Colado no chão
    // z-50 = Acima de quase tudo (mas abaixo do modal de segurança se houver)
    <div className="fixed bottom-0 left-0 w-full z-40 bg-rich-black/90 backdrop-blur-md border-t border-gold-primary/20 shadow-[0_-4px_20px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom duration-700">
      
      <div className="container mx-auto px-4 py-4 md:py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          
          {/* Ícone e Texto */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-2 bg-gold-primary/10 rounded-full hidden md:block">
              <Cookie className="text-gold-primary" size={20} />
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-2xl">
              Utilizamos cookies para garantir uma experiência de navegação segura e personalizada, em conformidade com a <span className="text-white font-medium">LGPD</span>. Ao continuar, você concorda com nossa política de privacidade.
            </p>
          </div>

          {/* Botões de Ação */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Botão Aceitar (Destaque) */}
            <button 
              onClick={handleAccept}
              className="flex-1 md:flex-none bg-gold-primary hover:bg-gold-light text-rich-black font-bold text-xs uppercase tracking-widest py-3 px-8 rounded transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Concordar e Fechar
            </button>
            
            {/* Botão Fechar (X discreto mobile) */}
            <button 
              onClick={() => setIsVisible(false)}
              className="md:hidden text-gray-500 p-2"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
