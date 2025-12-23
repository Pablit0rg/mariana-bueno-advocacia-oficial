import { cookies } from "next/headers";
import { loginAction, logoutAction } from "@/actions/auth";
import { Lock, ShieldCheck, LogOut, LayoutDashboard, FileText, Settings } from "lucide-react";

export default async function AdmPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  const isAuthenticated = !!session;

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-rich-black text-white p-6 md:p-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/10 rounded-full border border-green-500/20">
                <ShieldCheck className="text-green-500" size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-serif text-white">Painel Administrativo</h1>
                <p className="text-xs text-gold-primary uppercase tracking-widest font-bold">Sessão Segura Ativa</p>
              </div>
            </div>
            
            <form 
              action={async () => {
                "use server";
                await logoutAction();
              }}
            >
              <button className="flex items-center gap-2 px-6 py-3 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg hover:bg-red-500 hover:text-white transition-all text-sm font-bold uppercase">
                <LogOut size={16} /> Encerrar Sessão
              </button>
            </form>
          </div>

          <div className="p-12 text-center text-gray-600 border border-dashed border-white/10 rounded-xl">
            <p>Bem-vinda, Dra. Mariana.</p>
            <p className="text-sm mt-2">Sistema conectado.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-rich-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-md w-full bg-rich-gray/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative z-10">
        
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gold-primary/10 rounded-full flex items-center justify-center mx-auto border border-gold-primary/30 mb-6">
            <Lock className="text-gold-primary" size={32} />
          </div>
          <h1 className="text-2xl font-serif text-white">Área Restrita</h1>
        </div>

        {/* --- CORREÇÃO AQUI (Função Anônima para enganar o TypeScript) --- */}
        <form 
          action={async (formData) => {
            "use server";
            await loginAction(formData);
          }} 
          className="space-y-6"
        >
          <div className="space-y-2">
            <label className="text-[10px] text-gold-primary uppercase tracking-widest font-bold ml-1">Token de Segurança</label>
            <input 
              type="password" 
              name="token" 
              placeholder="••••••••••••••••" 
              className="w-full bg-rich-black border border-white/20 rounded-lg px-4 py-4 text-center text-white focus:border-gold-primary outline-none text-lg" 
              required 
            />
          </div>
          <button type="submit" className="w-full bg-gold-primary text-rich-black font-bold uppercase tracking-widest text-xs py-4 rounded-lg hover:bg-white transition-colors">
            Autenticar Acesso
          </button>
        </form>

      </div>
    </div>
  );
}
