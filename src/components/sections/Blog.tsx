import Image from "next/image";
import { Instagram, ArrowUpRight, Calendar } from "lucide-react";

// --- DADOS DOS POSTS (Simulação do Feed) ---
const POSTS = [
  {
    id: 1,
    title: "Pensão Alimentícia: Mitos e Verdades que você precisa saber",
    date: "12 DEZ 2025",
    category: "Direito de Família",
    image: "/post1.jpg", // Imagem 1
    link: "https://www.instagram.com/adv.marianabueno/"
  },
  {
    id: 2,
    title: "Divórcio com Filhos Menores: Como fica a guarda?",
    date: "05 DEZ 2025",
    category: "Guarda e Visitas",
    image: "/post2.png", // Imagem 2 (PNG)
    link: "https://www.instagram.com/adv.marianabueno/"
  },
  {
    id: 3,
    title: "Partilha de Bens: O regime de comunhão parcial explicado",
    date: "28 NOV 2025",
    category: "Direito Patrimonial",
    image: "/post3.jpg", // Imagem 3
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
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-gold-primary font-bold uppercase tracking-widest text-sm">
              Atualizações Jurídicas
            </h2>
            <h3 className="font-serif text-3xl md:text-4xl text-white">
              Conhecimento que <span className="text-gold-gradient">Protege</span>
            </h3>
          </div>

          {/* BOTÃO INSTAGRAM (Cores Oficiais Modernas) */}
          <a 
            href="https://www.instagram.com/adv.marianabueno/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg group"
          >
            <Instagram size={18} />
            Siga no Instagram
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Grid de Posts */}
        <div className="grid md:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <a 
              key={post.id} 
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] border border-white/10 rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-xl"
            >
              {/* Imagem do Post */}
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-rich-black/20 group-hover:bg-transparent transition-colors z-10" />
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badge da Categoria */}
                <span className="absolute top-4 left-4 z-20 bg-rich-black/80 backdrop-blur border border-gold-primary/30 text-gold-primary text-[10px] uppercase tracking-widest px-3 py-1 rounded">
                  {post.category}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-white/90 text-xs mb-3 font-medium">
                  <Calendar size={12} />
                  {post.date}
                </div>
                <h4 className="text-white font-serif text-lg leading-snug font-bold drop-shadow-sm">
                  {post.title}
                </h4>
                
                {/* CTA Fixado e Visível */}
                <div className="mt-4 flex items-center gap-2 text-white text-xs uppercase tracking-widest font-bold drop-shadow-sm hover:underline decoration-white/50 underline-offset-4">
                  Ver no Instagram <ArrowUpRight size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
