"use client";

import { Facebook, Instagram, Linkedin, ShieldCheck, Lock } from "lucide-react"; // Adicionei Lock
import Link from "next/link";
import { useRouter } from "next/navigation"; // Para redirecionar

export function Footer() {
  const router = useRouter();

  // --- LÓGICA DE SEGURANÇA (Geração de Token) ---
  const handleSecurityAccess = () => {
    // 1. Gera um token aleatório de 6 dígitos (Letras e Números)
    const token = Math.random().toString(36).slice(2, 8).toUpperCase();
    
    // 2. Salva na memória da sessão (se fechar o navegador, perde)
    sessionStorage.setItem("adm_token", token);
    
    // 3. Mostra o token para a Dra. (num cenário real faríamos um modal, aqui usamos alert pro Chromebook)
    alert(`🔐 MODO DE SEGURANÇA ATIVADO\n\nSeu Token de Acesso Temporário é:\n👉 ${token}\n\nCopie este código. Você será redirecionado para a área restrita.`);
    
    // 4. Redireciona para a página de administração
    router.push("/adm");
  };

  return (
    <footer className="bg-rich-black border-t border-gold-primary/20 pt-20 pb-10 relative overflow-hidden">
      
      {/* Luz de Fundo (Efeito Premium) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Marca */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-2xl text-white mb-4">MARIANA BUENO</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Advocacia artesanal e estratégica. Foco em resultados que preservam o patrimônio e as relações familiares.
            </p>
            <div className="flex gap-4">
              {/* Ícones com Aria-Label para Acessibilidade (Lighthouse) */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-rich-black transition-all" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-rich-black transition-all" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-rich-black transition-all" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="text-gold-primary font-bold uppercase tracking-widest text-xs mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li><Link href="#hero" className="text-gray-400 hover:text-gold-primary text-sm transition-colors">Início</Link></li>
              <li><Link href="#sobre" className="text-gray-400 hover:text-gold-primary text-sm transition-colors">Sobre a Dra.</Link></li>
              <li><Link href="#atuacao" className="text-gray-400 hover:text-gold-primary text-sm transition-colors">Áreas de Atuação</Link></li>
              <li><Link href="#depoimentos" className="text-gray-400 hover:text-gold-primary text-sm transition-colors">Depoimentos</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Áreas */}
          <div>
            <h3 className="text-gold-primary font-bold uppercase tracking-widest text-xs mb-6">Áreas</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 text-sm">Direito de Família</span></li>
              <li><span className="text-gray-400 text-sm">Direito das Sucessões</span></li>
              <li><span className="text-gray-400 text-sm">Direito Civil</span></li>
              <li><span className="text-gray-400 text-sm">Direito do Trabalho</span></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h3 className="text-gold-primary font-bold uppercase tracking-widest text-xs mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <span className="text-white text-sm">Curitiba - PR<br/><span className="text-xs opacity-60">Atendimento Online para todo o Brasil</span></span>
              </li>
              <li>
                <a href="mailto:contato@advmarianabueno.com.br" className="text-gray-400 hover:text-gold-primary text-sm transition-colors">
                  contato@advmarianabueno.com.br
                </a>
              </li>
              <li>
                <a href="https://wa.me/5541999999999" className="text-xl text-white font-serif hover:text-gold-primary transition-colors">
                  (41) 99999-9999
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Divisória */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs text-center md:text-left">
            © 2025 Mariana Bueno Advocacia. Todos os direitos reservados.
          </p>
          
          {/* ÁREA DE SEGURANÇA (SELO + CADEADO) */}
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-green-500/80" />
            <span className="text-gray-600 text-[10px] uppercase tracking-wider font-medium">
              Ambiente Seguro & Criptografado
            </span>
            
            {/* O CADEADO MÁGICO (Gatilho) */}
            <button 
              onDoubleClick={handleSecurityAccess} // <--- O Pulo do Gato: Duplo Clique
              className="ml-2 text-gray-700 hover:text-gold-primary transition-colors cursor-help p-1"
              title="Acesso Restrito"
              aria-label="Área Administrativa"
            >
              <Lock size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
