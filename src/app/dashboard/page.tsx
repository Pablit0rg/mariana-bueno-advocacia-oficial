"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Users, FileText, Activity, LogOut, PlusCircle } from "lucide-react";

// Definindo como é um Cliente no Frontend
interface Cliente {
  id: number;
  nome: string;
  area_atuacao: string;
  status_processo: string;
  telefone: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar os dados do Python
  const carregarDados = async () => {
    const token = localStorage.getItem("token-advocacia");
    if (!token) {
      router.push("/adm");
      return;
    }

    try {
      const res = await fetch("/api/clientes");
      if (res.ok) {
        const data = await res.json();
        setClientes(data);
      }
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarDados();
  }, [router]);

  const fazerLogout = () => {
    localStorage.removeItem("token-advocacia");
    router.push("/adm");
  };

  // Cálculos Automáticos
  const totalClientes = clientes.length;
  const processosAtivos = clientes.filter(c => c.status_processo !== "Concluído").length;

  return (
    <div className="min-h-screen bg-rich-black text-white p-8">
      {/* --- CABEÇALHO --- */}
      <header className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-white">Escritório Digital</h1>
          <p className="text-gray-400 text-sm mt-1">Visão geral em tempo real</p>
        </div>
        <div className="flex gap-4">
           <button className="flex items-center gap-2 text-sm bg-gold-primary text-rich-black px-4 py-2 rounded-lg font-bold hover:bg-white transition-all">
            <PlusCircle size={16} /> Novo Cliente
          </button>
          <button 
            onClick={fazerLogout}
            className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 border border-red-900/30 px-4 py-2 rounded-lg hover:bg-red-900/10"
          >
            <LogOut size={16} /> Sair
          </button>
        </div>
      </header>

      {/* --- CARDS DE ESTATÍSTICAS (Dados Reais) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-charcoal p-6 rounded-xl border border-white/5 border-l-4 border-l-gold-primary">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-rich-black rounded text-gold-primary"><Users size={20} /></div>
          </div>
          <h3 className="text-gray-400 text-xs uppercase tracking-wider">Total de Clientes</h3>
          <p className="text-3xl font-bold text-white mt-1">{loading ? "..." : totalClientes}</p>
        </div>

        <div className="bg-charcoal p-6 rounded-xl border border-white/5 border-l-4 border-l-blue-500">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-rich-black rounded text-blue-500"><FileText size={20} /></div>
          </div>
          <h3 className="text-gray-400 text-xs uppercase tracking-wider">Casos Ativos</h3>
          <p className="text-3xl font-bold text-white mt-1">{loading ? "..." : processosAtivos}</p>
        </div>

        <div className="bg-charcoal p-6 rounded-xl border border-white/5 border-l-4 border-l-green-500">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-rich-black rounded text-green-500"><Activity size={20} /></div>
          </div>
          <h3 className="text-gray-400 text-xs uppercase tracking-wider">Status do Sistema</h3>
          <p className="text-xl font-bold text-white mt-2">Online 🟢</p>
        </div>
      </div>

      {/* --- TABELA DE CLIENTES --- */}
      <div className="bg-charcoal border border-white/5 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-white/5">
          <h2 className="font-serif text-xl font-bold">Clientes Recentes</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-rich-black text-xs uppercase font-medium text-gray-500">
              <tr>
                <th className="px-6 py-4">Nome</th>
                <th className="px-6 py-4">Área</th>
                <th className="px-6 py-4">Telefone</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                 <tr><td colSpan={5} className="px-6 py-8 text-center">Carregando dados...</td></tr>
              ) : clientes.map((cliente) => (
                <tr key={cliente.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{cliente.nome}</td>
                  <td className="px-6 py-4">{cliente.area_atuacao}</td>
                  <td className="px-6 py-4">{cliente.telefone}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs border ${
                      cliente.status_processo === 'Concluído' ? 'bg-green-900/20 border-green-900/50 text-green-400' : 
                      'bg-yellow-900/20 border-yellow-900/50 text-yellow-400'
                    }`}>
                      {cliente.status_processo}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gold-primary hover:text-white transition-colors">Ver Detalhes</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}