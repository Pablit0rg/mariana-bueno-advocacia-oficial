"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="fixed bottom-4 left-4 right-4 md:left-8 md:bottom-8 z-50 md:max-w-md"
        >
          <div className="bg-rich-gray/95 backdrop-blur-md border border-gold-primary/20 p-6 rounded-lg shadow-2xl flex flex-col gap-4 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/10 blur-[50px] rounded-full pointer-events-none" />

            <div className="flex items-start gap-4 z-10">
              <div className="bg-white/5 p-2 rounded text-gold-primary">
                <Cookie size={24} aria-hidden="true" /> {/* Ícone decorativo ignorado por leitores */}
              </div>
              <div>
                <h4 className="text-white font-serif font-bold mb-1">Sua Privacidade</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Utilizamos cookies para garantir a melhor experiência e performance em nosso site, de acordo com a LGPD.
                </p>
              </div>
              <button 
                onClick={() => setIsVisible(false)} 
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Fechar aviso de cookies" // <--- CORREÇÃO AQUI
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="flex gap-3 z-10">
              <button
                onClick={acceptCookies}
                className="flex-1 bg-gold-primary hover:bg-gold-light text-rich-black font-bold py-2 rounded text-xs uppercase tracking-wider transition-all shadow-lg shadow-gold-primary/10"
              >
                Aceitar
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="flex-1 border border-white/10 hover:border-white/30 text-gray-300 hover:text-white font-medium py-2 rounded text-xs uppercase tracking-wider transition-all"
              >
                Recusar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
