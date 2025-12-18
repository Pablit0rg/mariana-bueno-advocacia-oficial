"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { sendContactEmail } from "@/actions/contact"; // Importa a Server Action

export function Contact() {
  const [isPending, setIsPending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  // Função que gerencia o envio
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Evita o reload da página
    setIsPending(true);
    setFeedback({ type: null, message: '' });

    const formData = new FormData(event.currentTarget);
    
    // Chama a Server Action
    const result = await sendContactEmail(formData);

    setIsPending(false);

    if (result.success) {
      setFeedback({ type: 'success', message: result.message });
      (event.target as HTMLFormElement).reset(); // Limpa o form
    } else {
      setFeedback({ type: 'error', message: result.message });
    }
  }

  return (
    <section id="contato" className="py-24 bg-rich-black relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-gold-primary font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-gold-primary"></span>
            Atendimento Exclusivo
            <span className="w-8 h-[1px] bg-gold-primary"></span>
          </h2>
          <h3 className="font-serif text-3xl md:text-4xl text-white">
            Agende sua Consulta
          </h3>
          <p className="text-gray-400 font-light">
            Seu caso requer atenção especializada. Entre em contato para uma análise preliminar.
          </p>
        </div>

        {/* O LAYOUT */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* COLUNA 1: Informações (Esquerda) */}
          <div className="flex flex-col justify-between gap-6 h-full">
            
            {/* Cards de Contato (Visualização Apenas) */}
            <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 hover:border-gold-primary/30 transition-colors rounded-lg group flex-1">
              <div className="p-3 bg-rich-black rounded-full border border-gold-primary/20 text-gold-primary group-hover:scale-110 transition-transform mt-1">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-white font-serif text-lg">Telefone & WhatsApp</h4>
                <p className="text-gray-400 text-sm mb-2">Atendimento ágil e direto.</p>
                <a href="https://wa.me/5541999999999" target="_blank" className="text-white hover:text-gold-primary transition-colors font-medium text-lg">
                  (41) 99999-9999
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 hover:border-gold-primary/30 transition-colors rounded-lg group flex-1">
              <div className="p-3 bg-rich-black rounded-full border border-gold-primary/20 text-gold-primary group-hover:scale-110 transition-transform mt-1">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-white font-serif text-lg">E-mail Corporativo</h4>
                <p className="text-gray-400 text-sm mb-2">Para envio de documentos.</p>
                <a href="mailto:contato@advmarianabueno.com.br" className="text-white hover:text-gold-primary transition-colors font-medium break-all">
                  contato@advmarianabueno.com.br
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 hover:border-gold-primary/30 transition-colors rounded-lg group flex-1">
              <div className="p-3 bg-rich-black rounded-full border border-gold-primary/20 text-gold-primary group-hover:scale-110 transition-transform mt-1">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-white font-serif text-lg">Escritório Físico</h4>
                <p className="text-gray-400 text-sm">
                  Curitiba - PR <br />
                  <span className="text-xs opacity-60 uppercase tracking-wider mt-1 block">Atendimento com Hora Marcada</span>
                </p>
              </div>
            </div>

          </div>

          {/* COLUNA 2: Formulário Funcional (Direita) */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-2xl relative h-full flex flex-col justify-center">
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Feedback Visual (Sucesso/Erro) */}
              {feedback.type && (
                <div className={`p-4 rounded-lg flex items-center gap-3 text-sm animate-in fade-in slide-in-from-top-2 ${
                  feedback.type === 'success' 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}>
                  {feedback.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  {feedback.message}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs text-gold-primary uppercase tracking-widest font-bold ml-1">Nome Completo</label>
                  <input name="name" type="text" required placeholder="Seu nome" className="w-full bg-rich-black border border-white/10 focus:border-gold-primary/50 text-white rounded-lg px-4 py-3 outline-none transition-all placeholder:text-gray-600 disabled:opacity-50" disabled={isPending} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gold-primary uppercase tracking-widest font-bold ml-1">Telefone</label>
                  <input name="phone" type="tel" placeholder="(00) 00000-0000" className="w-full bg-rich-black border border-white/10 focus:border-gold-primary/50 text-white rounded-lg px-4 py-3 outline-none transition-all placeholder:text-gray-600 disabled:opacity-50" disabled={isPending} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gold-primary uppercase tracking-widest font-bold ml-1">E-mail</label>
                <input name="email" type="email" required placeholder="seu@email.com" className="w-full bg-rich-black border border-white/10 focus:border-gold-primary/50 text-white rounded-lg px-4 py-3 outline-none transition-all placeholder:text-gray-600 disabled:opacity-50" disabled={isPending} />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gold-primary uppercase tracking-widest font-bold ml-1">Relato Breve</label>
                <textarea name="message" required rows={5} placeholder="Descreva brevemente sua necessidade..." className="w-full bg-rich-black border border-white/10 focus:border-gold-primary/50 text-white rounded-lg px-4 py-3 outline-none transition-all placeholder:text-gray-600 resize-none disabled:opacity-50" disabled={isPending} />
              </div>

              {/* Botão de Envio com Estado de Loading */}
              <button 
                type="submit"
                disabled={isPending}
                className="w-full relative overflow-hidden group bg-gold-primary text-rich-black font-bold uppercase tracking-widest text-xs py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-lg shadow-gold-primary/10 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span className="relative z-10">Enviando...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Enviar Solicitação</span>
                    <Send size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
