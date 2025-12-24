"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  // --- CONFIGURAÇÃO DE MENSAGEM (COPYWRITING) ---
  const phoneNumber = "5541997606069";
  const message = "Olá Dra. Mariana, gostaria de agendar um atendimento."; // Mensagem acolhedora e direta
  
  // Codifica a mensagem para URL (transforma espaços em %20)
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      {/* RADAR PULSANTE (Ajustado para 5s via CSS animation-duration se estivesse no global,
         mas aqui usamos o pulse padrão do Tailwind com uma "pausa" visual natural 
         pela própria suavidade do efeito ping) 
      */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-20 animate-ping duration-[3000ms]" />
      
      {/* BOTÃO PRINCIPAL */}
      <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all hover:scale-110 active:scale-95 flex items-center justify-center">
        {/* Ícone SVG Oficial Moderno (Path Desenhado) */}
        <svg 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="fill-white stroke-none" // Preenchimento sólido branco
        >
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.966-.944 1.164-.175.199-.347.223-.648.075-.3-.15-1.27-.468-2.421-1.49-1.151-1.025-1.927-2.289-2.152-2.678-.225-.39-.024-.601.126-.749.134-.133.3-.347.45-.52.149-.174.199-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.199 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.418.249-.697.249-1.296.174-1.425-.076-.13-.274-.213-.574-.362z" />
          <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.004c6.585 0 11.946-5.336 11.949-11.896 0-3.178-1.24-6.165-3.479-8.45zM12.049 21.78c-1.786 0-3.535-.48-5.065-1.385l-.363-.217-3.766.984 1.006-3.665-.235-.374a9.86 9.86 0 0 1-1.516-5.26c.004-5.466 4.465-9.907 9.945-9.907 2.653 0 5.151 1.035 7.027 2.912 1.875 1.878 2.906 4.372 2.906 7.028 0 5.468-4.437 9.884-9.939 9.884z" fill="white" />
        </svg>
      </div>

      {/* Tooltip (Opcional - só aparece no desktop) */}
      <span className="absolute right-16 bg-white text-rich-black px-3 py-1 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Fale Conosco
      </span>
    </a>
  );
}
