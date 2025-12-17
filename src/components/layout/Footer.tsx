"use client";

import { Facebook, Instagram, Linkedin, ShieldCheck, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Footer() {
  const router = useRouter();

  const handleSecurityAccess = () => {
    // 1. Gera um token aleatório de 6 dígitos
    const token = Math.random().toString(36).slice(2, 8).toUpperCase();
    
    // 2. Salva na memória
    sessionStorage.setItem("adm_token", token);
    
    // 3. Mostra o token (Simulação de Modal)
    alert(`🔐 MODO DE SEGURANÇA ATIVADO\n\nSeu Token de Acesso Temporário é:\n👉 ${token}\n\nCopie este código para acessar a área restrita.`);
    
    // 4. Redireciona
    router.push("/adm");
  };

  return (
    <footer className="bg-rich-black border-t border-gold-primary/20 pt-20 pb-10 relative overflow-hidden">
      
      {/* Luz de Fundo (Efeito Premium) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* GRID PRINCIPAL (Ajuste Matemático) */}
        {/* grid-cols-1 no mobile, grid-cols-12 no desktop para controle total da largura das colunas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Coluna 1: Marca (Ocupa 4 espaços de 12) */}
          <div className="md:col-span-4 space-y-6">
            <h2 className="font-serif text-2xl text-white">MARIANA BUENO</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Advocacia artesanal e estratégica. Foco em resultados que preservam o patrimônio e as relações familiares.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/adv.marianabueno" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-rich-black transition-all" aria-label="Instagram">
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

          {/* ESPAÇADOR (Ocupa 1 espaço) - Cria o "respiro" matemático */}
          <div className="hidden md:block md:col-span-1" />

          {/* Coluna 2: Navegação (Ocupa 2 espaços) */}
          <div className="md:col-span-2">
            <h3 className="text-gold-primary font-bold uppercase tracking-widest text-xs mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li><Link href="#hero" className="text-gray-400 hover:text-gold-primary text-sm transition-colors">Início</Link></li>
              <li><Link href="#sobre" className="text-gray-400 hover:text-gold-primary text-sm transition-colors">Sobre a Dra.</Link></li>
              <li><Link href="#atuacao" className="text-gray-400 hover:text-gold-primary text-sm transition-colors">Áreas de Atuação</Link></li>
              <li><Link href="#depoimentos" className="text-gray-400 hover:text-gold-primary text-sm transition-colors">Depoimentos</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Áreas (Ocupa 2 espaços) */}
          <div className="md:col-span-2">
            <h3 className="text-gold-primary font-bold uppercase tracking-widest text-xs mb-6">Áreas</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 text-sm cursor-default hover:text-white transition-colors">Direito de Família</span></li>
              <li><span className="text-gray-400 text-sm cursor-default hover:text-white transition-colors">Direito das Sucessões</span></li>
              <li><span className="text-gray-400 text-sm cursor-default hover:text-white transition-colors">Direito Civil</span></li>
              <li><span className="text-gray-400 text-sm cursor-default hover:text-white transition-colors">Direito do Trabalho</span></li>
            </ul>
          </div>

          {/* Coluna 4: Contato (Ocupa 3 espaços) */}
          <div className="md:col-span-3">
            <h3 className="text-gold-primary font-bold uppercase tracking-widest text-xs mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <span className="text-white text-sm">Curitiba - PR<br/><span className="text-xs opacity-60">Atendimento Online para todo o Brasil</span></span>
              </li>
              <li>
                <a href="mailto:contato@advmarianabueno.com.br" className="text-gray-400 hover:text-gold-primary text-sm transition-colors block truncate">
                  contato@advmarianabueno.com.br
                </a>
              </li>
              <li>
                <a href="https://wa.me/5541999999999" target="_blank" className="text-xl text-white font-serif hover:text-gold-primary transition-colors">
                  (41) 99999-9999
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Divisória & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs text-center md:text-left">
            © 2025 Mariana Bueno Advocacia. Todos os direitos reservados.
          </p>
          
          {/* ÁREA DE SEGURANÇA (SELO + CADEADO OCULTO) */}
          <div className="flex items-center gap-2 group/security relative">
            <ShieldCheck size={14} className="text-green-500/80" />
            <span className="text-gray-600 text-[10px] uppercase tracking-wider font-medium cursor-default">
              Site Seguro & Protegido
            </span>
            
            {/* O CADEADO MÁGICO (Gatilho) */}
            {/* Posicionado discretamente ao lado do texto */}
            <button 
              onDoubleClick={handleSecurityAccess} 
              className="text-gray-800 hover:text-rich-black transition-colors cursor-default p-1 opacity-50 hover:opacity-100"
              title="Verificação de Segurança"
              aria-label="Área Administrativa"
            >
              <Lock size={10} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
