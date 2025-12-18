import Image from "next/image";
import { Award, BookOpen, Scale, FileCheck, ArrowRight } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Scale,
    label: "Especialidade",
    value: "Direito de Família",
    sub: "& Sucessões"
  },
  {
    icon: Award,
    label: "Experiência",
    value: "4+ Anos",
    sub: "De atuação intensa"
  },
  {
    icon: FileCheck,
    label: "Registro Profissional",
    value: "OAB/PR 110.875",
    sub: "Situação Regular"
  },
  {
    icon: BookOpen,
    label: "Formação",
    value: "Pós-Graduada",
    sub: "Direito Processual Civil"
  }
];

export function About() {
  return (
    <section id="sobre" className="py-24 bg-rich-black relative overflow-hidden">
      
      {/* Elemento Decorativo (Fundo) */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gold-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* COLUNA 1: A FOTO (LIMPA - SEM BORDA) */}
          <div className="relative w-full h-full min-h-[500px] flex flex-col">
            
            {/* CONTAINER DA IMAGEM (Sem borda, sem padding extra) */}
            <div className="relative flex-1 rounded-lg group transition-all duration-500">
              
              {/* Container Interno da Imagem */}
              <div className="relative w-full h-full overflow-hidden rounded-sm bg-rich-gray">
                 
                 {/* Overlay Gradiente Suave */}
                 <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                 
                 <Image
                  src="/hero.webp" 
                  alt="Dra. Mariana Bueno"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

            </div>
          </div>

          {/* COLUNA 2: O CONTEÚDO (RESTAURADO) */}
          <div className="flex flex-col justify-between py-2">
            
            <div className="space-y-6">
              <h2 className="text-gold-primary font-bold uppercase tracking-widest text-sm flex items-center gap-3 animate-in slide-in-from-right duration-700">
                <span className="w-12 h-[1px] bg-gold-primary"></span>
                Perfil Profissional
              </h2>
              
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.2]">
                Advocacia não é apenas leis. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-light">
                  É sobre vidas.
                </span>
              </h3>
              
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light text-justify">
                Com foco absoluto em <strong className="text-white font-medium border-b border-gold-primary/30 pb-0.5">Direito de Família</strong>, minha missão é conduzir processos delicados com a firmeza necessária e a humanidade indispensável.
                <br /><br />
                Atuo de forma estratégica para garantir que seus direitos sejam preservados, sem expor desnecessariamente a sua história. Uma advocacia moderna, ágil e livre de burocracias antigas.
              </p>
            </div>

            {/* GRID DE MINI-CARDS */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {HIGHLIGHTS.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 border border-white/5 p-4 rounded-lg hover:border-gold-primary/30 hover:bg-white/10 transition-all duration-300 group"
                >
                  <item.icon className="text-gold-primary mb-3 group-hover:scale-110 transition-transform duration-500" size={24} />
                  <h4 className="text-white font-serif text-lg font-medium">{item.value}</h4>
                  <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Botão de Ação */}
            <div className="pt-8">
               <a 
                href="#contato" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-rich-black transition-all duration-300 rounded uppercase tracking-widest text-xs font-bold group relative overflow-hidden w-full md:w-auto justify-center"
              >
                <span className="relative z-10">Agendar Consultoria</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 h-full w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gold-primary -z-0" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
