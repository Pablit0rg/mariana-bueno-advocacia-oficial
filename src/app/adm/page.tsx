"use client";

import { useState, useEffect } from "react";
import { Lock, Unlock, ShieldAlert, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  
  // Estados da Lógica
  const [inputToken, setInputToken] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  // Verifica se existe um token gerado ao carregar a página
  useEffect(() => {
    const sessionToken = sessionStorage.getItem("adm_token");
    if (!sessionToken) {
      // Se tentou entrar direto sem clicar no cadeado, manda embora
      alert("Acesso Negado: Protocolo de segurança não iniciado.");
      router.push("/");
    }
  }, [router]);

  // Função que valida o Token
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const sessionToken = sessionStorage.getItem("adm_token");

    if (inputToken.toUpperCase() === sessionToken) {
      setIsUnlocked(true); // LIBERA O LOGIN REAL
      setError(false);
    } else {
      setError(true); // MOSTRA ERRO
      setInputToken("");
    }
  };

  return (
    <main className="min-h-screen bg-rich-black flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Fundo Matrix/Hacker (Sutil) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
      
      <div className="w-full max-w-md bg-rich-gray/50 backdrop-blur-md border border-white/5 rounded-2xl p-8 shadow-2xl relative z-10">
        
        {/* CABEÇALHO DO CARD */}
        <div className="text-center mb-8">
          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${isUnlocked ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}>
            {isUnlocked ? <Unlock size={32} /> : <Lock size={32} />}
          </div>
          <h1 className="text-white font-serif text-2xl font-bold">
            {isUnlocked ? "Acesso Liberado" : "Área Restrita"}
          </h1>
          <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">
            {isUnlocked ? "Bem-vinda, Dra. Mariana" : "Autenticação de Dois Fatores"}
          </p>
        </div>

        {/* FASE 1: O GATEKEEPER (TOKEN) */}
        {!isUnlocked && (
          <form onSubmit={handleUnlock} className="flex flex-col gap-4">
            <div className="space-y-2">
              <label className="text-xs text-gold-primary font-bold uppercase tracking-wider ml-1">
                Token de Segurança
              </label>
              <div className="relative">
                <ShieldAlert className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="text" 
                  value={inputToken}
                  onChange={(e) => setInputToken(e.target.value)}
                  placeholder="Cole o código gerado..."
                  className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none transition-all font-mono text-center tracking-widest uppercase"
                  autoFocus
                />
              </div>
              {error && (
                <p className="text-red-500 text-xs text-center animate-pulse">
                  ⛔ Token inválido ou expirado.
                </p>
              )}
            </div>

            <button 
              type="submit"
              className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-lg transition-all border border-white/5 hover:border-white/20 uppercase tracking-widest text-xs flex items-center justify-center gap-2 group"
            >
              Verificar Identidade
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}

        {/* FASE 2: O LOGIN REAL (FIREBASE) */}
        {isUnlocked && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6 text-center">
              <p className="text-green-400 text-sm">Protocolo de segurança validado com sucesso.</p>
            </div>

            {/* AQUI ENTRARIA O FORMULÁRIO REAL DO FIREBASE */}
            <form className="flex flex-col gap-4 opacity-50 cursor-not-allowed">
               {/* Simulando campos desabilitados por enquanto */}
               <input type="email" placeholder="E-mail Administrativo" disabled className="w-full bg-black/30 border border-white/10 rounded p-3 text-gray-500 text-sm" />
               <input type="password" placeholder="Senha Mestra" disabled className="w-full bg-black/30 border border-white/10 rounded p-3 text-gray-500 text-sm" />
               <button disabled className="w-full bg-gold-primary/50 text-rich-black font-bold py-3 rounded text-sm uppercase">
                 Conectar ao Sistema (Em Breve)
               </button>
            </form>
            <p className="text-center text-gray-500 text-[10px] mt-4">
              Integração com banco de dados em desenvolvimento.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}
