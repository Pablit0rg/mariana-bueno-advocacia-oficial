import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";

// --- DADOS DOS POSTS (Semântica Corrigida) ---
const POSTS = [
  {
    id: 1,
    // Antes: Pensão Alimentícia -> Agora: Direito Civil
    title: "Direito Civil: Segurança para contratos e obrigações",
    image: "/MB.png", 
    link: "https://www.instagram.com/p/DTYZfeEksOz/?img_index=1"
  },
  {
    id: 2,
    // Antes: Divórcio -> Agora: Direito de Família (Mantendo a essência)
    title: "Direito de Família: Soluções humanizadas para divórcios",
    image: "/MB1.png", 
    // Mantendo a posição customizada do Card 2
    customPosition: "object-left", 
    link: "https://www.instagram.com/p/DTYZfeEksOz/?img_index=2"
  },
  {
    id: 3,
    // Antes: Partilha -> Agora: Direito Trabalhista
    title: "Direito Trabalhista: Defesa dos seus direitos laborais",
    image: "/MB2.png", 
    link: "https://www.instagram.com/p/DTYZfeEksOz/?img_index=3"
  },
  {
    id: 4,
    // Antes: Inventário -> Agora: Direito Imobiliário
    title: "Direito Imobiliário: Assessoria em compra e venda",
    image: "/MB3.png", 
    link: "https://www.instagram.com/p/DTYZfeEksOz/?img_index=4"
  },
  {
    id: 5,
    // Antes: Sucessão -> Agora: Extrajudicial
    title: "Extrajudicial: Rapidez em inventários e cartórios",
    image: "/MB4.png", 
    link: "https://www.instagram.com/p/DTYZfeEksOz/?img_index=5"
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
              // Estilo da borda degradê mantido
              style={{
                border: '1px solid transparent',
                background: 'linear-gradient(rgba(5,5,5,0.5), rgba(5,5,5,0.5)) padding-box, linear-gradient(to right, #833AB4, #FD1D1D, #F77737) border-box'
              }}
              className="group block relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Imagem do Post (Thumbnail) */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  // Lógica de posição customizada mantida
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