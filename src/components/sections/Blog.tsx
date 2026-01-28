import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";

// --- DADOS DOS POSTS ---
// Note que removi a linha 'position' dos outros cards para limpar o código.
// A regra de posição agora é controlada lá embaixo, na lógica visual.
const POSTS = [
  {
    id: 1,
    title: "Pensão Alimentícia: O que você precisa saber",
    image: "/MB.png", 
    link: "https://www.instagram.com/adv.marianabueno/"
  },
  {
    id: 2,
    title: "Divórcio e Guarda: Entenda seus direitos",
    image: "/MB1.png", 
    // Mude AQUI apenas o Card 2. 
    // Experimente: object-left, object-right, object-[80%_center]
    customPosition: "object-left", 
    link: "https://www.instagram.com/adv.marianabueno/"
  },
  {
    id: 3,
    title: "Partilha de Bens: Regime de comunhão explicado",
    image: "/MB2.png", 
    link: "https://www.instagram.com/adv.marianabueno/"
  },
  {
    id: 4,
    title: "Inventário Extrajudicial: Agilidade no processo",
    image: "/MB3.png", 
    link: "https://www.instagram.com/adv.marianabueno/"
  },
  {
    id: 5,
    title: "Planejamento Sucessório: Proteja seu patrimônio",
    image: "/MB4.png", 
    link: "https://www.instagram.com/adv.marianabueno/"
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-rich-black relative overflow-hidden">
      
      {/* Elemento Decorativo de Fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-gold-primary font-bold uppercase tracking-widest text-sm">
              Acompanhe no Instagram
            </h2>
            <h3 className="font-serif text-3xl md:text-4xl text-white">
              Conteúdo Jurídico <span className="text-gold-gradient">Exclusivo</span>
            </h3>
          </div>

          {/* Botão Principal do Instagram */}
          <a 
            href="https://www.instagram.com/adv.marianabueno/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg group"
          >
            <Instagram size={18} />
            @adv.marianabueno
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Grid de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {POSTS.map((post) => (
            <a 
              key={post.id} 
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/5 bg-rich-black/50"
            >
              {/* Imagem do Post (Thumbnail) */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  // --- AQUI ESTÁ A MÁGICA DO ISOLAMENTO ---
                  // Lógica: "Se tiver uma posição customizada (Card 2), use ela.
                  // Senão, use o padrão perfeito (object-[30%_center])."
                  className={`object-cover ${post.customPosition || "object-[30%_center]"} group-hover:scale-105 transition-transform duration-700`}
                />
                
                {/* Overlay Gradiente Sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Barra Inferior Minimalista */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-r from-[#833AB4]/90 via-[#FD1D1D]/90 to-[#F77737]/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest pl-2">
                  Ver Post
                </span>
                <div className="bg-white/20 p-1.5 rounded-full text-white">
                  <Instagram size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Botão Mobile */}
        <div className="mt-8 flex justify-center md:hidden">
             <a 
            href="https://www.instagram.com/adv.marianabueno/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-bold text-xs uppercase tracking-widest shadow-lg"
          >
            <Instagram size={18} />
            Siga no Instagram
          </a>
        </div>

      </div>
    </section>
  );
}