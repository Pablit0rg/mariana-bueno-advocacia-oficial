import { cookies } from "next/headers";
import { loginAction, logoutAction } from "@/actions/auth";
import { Lock, ShieldCheck, LogOut } from "lucide-react";

export default async function AdmPage() {
  // Verificação Server-Side (Blindada)
  const session = (await cookies()).get("admin_session");
  const isAuthenticated = !!session;

  return (
    <div className="min-h-screen bg-rich-black text-white flex flex-col items-center justify-center p-4">
      
      {/* --- CENÁRIO 1: USUÁRIO LOGADO (PAINEL) --- */}
      {isAuthenticated ? (
        <div className="max-w-2xl w-full bg-white/5 border border-gold-primary/30 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-500" size={32} />
              <div>
                <h1 className="text-2xl font-serif text-white">Painel Administrativo</h1>
                <p className="text-xs text-gold-primary uppercase tracking-widest">Acesso Autorizado</p>
              </div>
            </div>
            
            <form action={logoutAction}>
              <button className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm transition-colors">
                <LogOut size={16} /> Sair
              </button>
            </form>
          </div>

          <div className="py-12 text-center text-gray-400">
            <p>Bem-vinda, Dra. Mariana.</p>
            <p className="text-sm mt-2">O sistema de gestão de conteúdo será conectado aqui em breve.</p>
          </div>
        </div>
      ) : (
        
        /* --- CENÁRIO 2: LOGIN (BLOQUEIO) --- */
        <div className="max-w-md w-full bg-rich-gray border border-white/10 rounded-2xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 bg-gold-primary/10 rounded-full flex items-center justify-center mx-auto border border-gold-primary/30">
            <Lock className="text-gold-primary" size={32} />
          </div>
          
          <div>
            <h1 className="text-xl font-serif text-white">Acesso Restrito</h1>
            <p className="text-gray-400 text-sm mt-2">Área exclusiva para administração.</p>
          </div>

          {/* FORMULÁRIO QUE CHAMA A SERVER ACTION */}
          <form action={loginAction} className="space-y-4">
            <input 
              type="password" 
              name="token" 
              placeholder="Token de Segurança" 
              className="w-full bg-rich-black border border-white/20 rounded-lg px-4 py-3 text-center text-white focus:border-gold-primary outline-none transition-colors"
              required
            />
            <button 
              type="submit" 
              className="w-full bg-gold-primary text-rich-black font-bold uppercase tracking-widest text-xs py-4 rounded-lg hover:bg-white transition-colors"
            >
              Autenticar
            </button>
          </form>
          
          <p className="text-[10px] text-gray-600">
            Dica: A senha mestre temporária é <strong>MARIANA-GOLD-2025</strong>
          </p>
        </div>
      )}
    </div>
  );
}
