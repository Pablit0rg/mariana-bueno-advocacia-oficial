"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2 group">
      
      {/* Tooltip (Texto que aparece ao passar o mouse) */}
      <span className="bg-rich-black text-white text-xs font-bold px-3 py-1 rounded shadow-lg border border-gold-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
        Falar com a Dra.
      </span>

      <motion.a
        href="https://wa.me/5541999999999" // Link real
        target="_blank"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="relative bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        {/* Efeito de Onda (Pulse) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:animate-none"></span>
        
        {/* Ícone */}
        <MessageCircle size={32} fill="white" className="text-[#25D366] relative z-10" />
      </motion.a>
    </div>
  );
}