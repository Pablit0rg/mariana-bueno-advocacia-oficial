"use client";
import { useState } from "react";
import { Lock, ArrowRight, Loader2 } from "lucide-react";

export default function Login() {
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErro("");

    try {
      // O Frontend chama a ponte /api/login
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ senha }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("token-advocacia", data.token); // Salva o crachá
        alert("🔓 Acesso Permitido! Bem-vinda, Dra. Mariana.");
        // Aqui futuramente vamos redirecionar para o Dashboard
      } else {
        setErro("Senha incorreta.");
      }
    } catch (error) {
      setErro("Erro de conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-rich-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-charcoal/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-rich-black rounded-full flex items-center justify-center mx-auto mb-4 border border-gold-primary/30">
            <Lock className="w-8 h-8 text-gold-primary" />
          </div>
          <h1 className="text-2xl font-serif text-white font-bold">Área Restrita</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="password"
            placeholder="Senha Mestra"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full bg-rich-black border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-gold-primary text-center tracking-widest"
          />
          
          {erro && <p className="text-red-400 text-sm text-center">{erro}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold-primary hover:bg-white text-rich-black font-bold py-4 rounded-lg uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Entrar"}
            {!loading && <ArrowRight className="w-5 h-5" />}
          </button>
        </form>
      </div>
    </div>
  );
}