import Image from "next/image";
import { Instagram, ArrowUpRight, Calendar } from "lucide-react";

// --- DADOS DOS POSTS (Simulação do Feed) ---
// Amanhã no PC podemos trocar as imagens pelas capas reais dos vídeos dela.
const POSTS = [
  {
    id: 1,
    title: "Pensão Alimentícia: Mitos e Verdades que você precisa saber",
    date: "12 DEZ 2024",
    category: "Direito de Família",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    link: "https://www.instagram.com/adv.marianabueno/"
  },
  {
    id: 2,
    title: "Divórcio com Filhos Menores: Como fica a guarda?",
    date: "05 DEZ 2024",
    category: "Guarda e Visitas",
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&q=80&w=800",
    link: "https://www.instagram.com/adv.marianabueno/"
  },
  {
    id: 3,
    title: "Partilha de Bens: O regime de comunhão parcial explicado",
    date: "28 NOV 2024",
    category: "Direito Patrimonial",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
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

          <a 
            href="https://www.instagram.com/adv.marianabueno/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-gold-primary transition-colors group text-sm uppercase tracking-wider"
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
              className="group block bg-white/5 border border-white/5 hover:border-gold-primary/30 rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-2"
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
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                  <Calendar size={12} />
                  {post.date}
                </div>
                <h4 className="text-white font-serif text-lg leading-snug group-hover:text-gold-primary transition-colors">
                  {post.title}
                </h4>
                <div className="mt-4 flex items-center gap-2 text-gold-primary text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Ler no Instagram <ArrowUpRight size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
