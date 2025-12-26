"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Users, FileText, Activity, LogOut } from "lucide-react";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState("");

  // Verificar se tem o "crachá" (Token) ao carregar a página
  useEffect(() => {
    const token = localStorage.getItem("token-advocacia");
    if (!token) {
      alert("🔒 Você precisa fazer login primeiro.");
      router.push("/adm"); // Chuta de volta pro login se não tiver token
    } else {
      setUser("Dra. Mariana");
    }
  }, [router]);

  const fazerLogout = () => {
    localStorage.removeItem("token-advocacia"); // Rasga o crachá
    router.push("/adm");
  };

  return (
    <div className="min-h-screen bg-rich-black text-white p-8">
      {/* --- CABEÇALHO --- */}
      <header className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-white">
            Painel de Controle
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Bem-vinda de volta, <span className="text-gold-primary">{user}</span>.
          </p>
        </div>
        <button 
          onClick={fazerLogout}
          className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors border border-red-900/30 px-4 py-2 rounded-lg hover:bg-red-900/10"
        >
          <LogOut size={16} />
          Sair do Sistema
        </button>
      </header>

      {/* --- ESTATÍSTICAS RÁPIDAS (Cards) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1 */}
        <div className="bg-charcoal p-6 rounded-xl border border-white/5 hover:border-gold-primary/50 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-rich-black rounded-lg text-gold-primary group-hover:scale-110 transition-transform">
              <Users size={24} />
            </div>
            <span className="text-xs text-gray-500 bg-black/30 px-2 py-1 rounded">+2 hoje</span>
          </div>
          <h3 className="text-gray-400 text-sm font-medium">Clientes Ativos</h3>
          <p className="text-3xl font-bold text-white mt-1">124</p>
        </div>

        {/* Card 2 */}
        <div className="bg-charcoal p-6 rounded-xl border border-white/5 hover:border-gold-primary/50 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-rich-black rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
              <FileText size={24} />
            </div>
            <span className="text-xs text-gray-500 bg-black/30 px-2 py-1 rounded">Em andamento</span>
          </div>
          <h3 className="text-gray-400 text-sm font-medium">Processos</h3>
          <p className="text-3xl font-bold text-white mt-1">48</p>
        </div>

        {/* Card 3 (Status do Sistema) */}
        <div className="bg-charcoal p-6 rounded-xl border border-white/5 hover:border-gold-primary/50 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-rich-black rounded-lg text-green-400 group-hover:scale-110 transition-transform">
              <Activity size={24} />
            </div>
            <span className="text-xs text-green-400 bg-green-900/20 px-2 py-1 rounded border border-green-900/30">Online</span>
          </div>
          <h3 className="text-gray-400 text-sm font-medium">Status do Servidor</h3>
          <p className="text-lg font-bold text-white mt-1">Operacional 🐍</p>
        </div>
      </div>

      {/* --- ÁREA DE CONTEÚDO --- */}
      <div className="bg-charcoal/30 border border-white/5 rounded-xl p-8 text-center py-20">
        <p className="text-gray-500">Selecione uma opção no menu para começar a trabalhar.</p>
      </div>
    </div>
  );
}