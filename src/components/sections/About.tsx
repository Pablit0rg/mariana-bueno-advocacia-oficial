import Image from "next/image";
import { Award, BookOpen, Scale, FileCheck } from "lucide-react"; // Ícones novos

// --- DADOS DOS MINI-CARDS (Informações Cruciais) ---
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* COLUNA 1: A FOTO (Estática e Elegante) */}
          <div className="relative group">
            <div className="relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-lg border border-white/10 shadow-2xl">
              {/* Overlay suave para integrar com o fundo escuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-transparent to-transparent z-10 opacity-60" />
              
              <Image
                src="/marianabueno.png" // Certifique-se que o nome do arquivo está correto na pasta public
                alt="Dra. Mariana Bueno"
                fill
                className="object-cover object-top" // Estático (sem hover zoom para performance)
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Elemento decorativo atrás da foto (Moldura deslocada) */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-primary/30 rounded-lg -z-10 hidden md:block" />
          </div>

          {/* COLUNA 2: O CONTEÚDO */}
          <div className="space-y-8">
            
            <div className="space-y-4">
              <h2 className="text-gold-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <span className="w-8 h-[1px] bg-gold-primary"></span>
                Perfil Profissional
              </h2>
              <h3 className="font-serif text-3xl md:text-5xl text-white leading-tight">
                Mariana Bueno
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Advogada especialista na resolução de conflitos familiares e sucessórios. 
                Minha atuação é pautada pela <strong className="text-white font-medium">técnica jurídica refinada</strong> e pelo atendimento humanizado, 
                buscando sempre a preservação do patrimônio e o bem-estar das relações familiares.
              </p>
            </div>

            {/* GRID DE MINI-CARDS (A Grande Mudança) */}
            <div className="grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 border border-white/5 p-4 rounded-lg hover:border-gold-primary/50 transition-colors group"
                >
                  <item.icon className="text-gold-primary mb-3 group-hover:scale-110 transition-transform duration-500" size={24} />
                  <h4 className="text-white font-serif text-lg font-medium">{item.value}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Botão de Ação */}
            <div className="pt-4">
               {/* Note: Aqui removemos o translate-y e adicionamos o group para o shimmer */}
               <a 
                href="#contato" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-rich-black transition-all duration-300 rounded uppercase tracking-widest text-xs font-bold group relative overflow-hidden"
              >
                <span className="relative z-10">Agendar Consultoria</span>
                
                {/* Efeito Shimmer (Brilho Passando) */}
                <div className="absolute inset-0 h-full w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gold-primary -z-0" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
