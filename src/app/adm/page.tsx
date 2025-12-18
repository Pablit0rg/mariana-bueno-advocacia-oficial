import { cookies } from "next/headers";
import { loginAction, logoutAction } from "@/actions/auth";
import { Lock, ShieldCheck, LogOut, LayoutDashboard, FileText, Settings } from "lucide-react";

export default async function AdmPage() {
  // 1. Verificação Server-Side (SEGURANÇA NOVA - BLINDADA)
  // O servidor verifica o cookie antes de mandar a página para o navegador.
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  const isAuthenticated = !!session;

  // --- CENÁRIO 1: USUÁRIO JÁ LOGADO (MOSTRAR PAINEL) ---
  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-rich-black text-white p-6 md:p-12">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Header do Painel */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/10 rounded-full border border-green-500/20">
                <ShieldCheck className="text-green-500" size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-serif text-white">Painel Administrativo</h1>
                <p className="text-xs text-gold-primary uppercase tracking-widest font-bold">
                  Sessão Segura Ativa
                </p>
              </div>
            </div>
            
            <form action={logoutAction}>
              <button className="flex items-center gap-2 px-6 py-3 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 text-sm font-bold uppercase tracking-wide">
                <LogOut size={16} /> Encerrar Sessão
              </button>
            </form>
          </div>

          {/* Grid de Dashboard (Placeholder) */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-gold-primary/30 transition-colors cursor-pointer group">
              <LayoutDashboard size={32} className="text-gray-400 group-hover:text-gold-primary mb-4 transition-colors" />
              <h3 className="text-xl font-serif mb-2">Visão Geral</h3>
              <p className="text-sm text-gray-500">Métricas de acesso e contatos recebidos.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-gold-primary/30 transition-colors cursor-pointer group">
              <FileText size={32} className="text-gray-400 group-hover:text-gold-primary mb-4 transition-colors" />
              <h3 className="text-xl font-serif mb-2">Blog & Artigos</h3>
              <p className="text-sm text-gray-500">Gerenciar publicações e notícias.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-gold-primary/30 transition-colors cursor-pointer group">
              <Settings size={32} className="text-gray-400 group-hover:text-gold-primary mb-4 transition-colors" />
              <h3 className="text-xl font-serif mb-2">Configurações</h3>
              <p className="text-sm text-gray-500">SEO e dados do escritório.</p>
            </div>
          </div>

          <div className="p-12 text-center text-gray-600 border border-dashed border-white/10 rounded-xl">
            <p>Bem-vinda, Dra. Mariana.</p>
            <p className="text-sm mt-2">O sistema de gestão completo será conectado aqui.</p>
          </div>
        </div>
      </div>
    );
  }

  // --- CENÁRIO 2: USUÁRIO NÃO LOGADO (MOSTRAR TELA DE LOGIN) ---
  return (
    <div className="min-h-screen bg-rich-black flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full bg-rich-gray/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative z-10 animate-in fade-in zoom-in duration-500">
        
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gold-primary/10 rounded-full flex items-center justify-center mx-auto border border-gold-primary/30 mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Lock className="text-gold-primary" size={32} />
          </div>
          <h1 className="text-2xl font-serif text-white">Área Restrita</h1>
          <p className="text-gray-400 text-sm mt-2 font-light">
            Acesso exclusivo para administração.
          </p>
        </div>

        {/* FORMULÁRIO SERVER-SIDE (Chama a Server Action) */}
        <form action={loginAction} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] text-gold-primary uppercase tracking-widest font-bold ml-1">
              Token de Segurança
            </label>
            <input 
              type="password" 
              name="token" 
              placeholder="••••••••••••••••" 
              className="w-full bg-rich-black border border-white/20 rounded-lg px-4 py-4 text-center text-white focus:border-gold-primary outline-none transition-all placeholder:text-gray-700 tracking-widest text-lg"
              autoFocus
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-gold-primary text-rich-black font-bold uppercase tracking-widest text-xs py-4 rounded-lg hover:bg-white transition-colors shadow-lg shadow-gold-primary/10 flex items-center justify-center gap-2 group"
          >
            <span className="relative z-10">Autenticar Acesso</span>
            <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
          </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-wider">
            Monitoramento de IP Ativo • {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </div>
  );
}
