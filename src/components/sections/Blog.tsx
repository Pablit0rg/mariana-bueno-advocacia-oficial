"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Instagram } from "lucide-react";

// Definição do Tipo do Post
interface Post {
  id: number;
  title: string;
  image_url: string;
  instagram_link: string;
  position_class?: string;
  order: number;
}

export function Blog() {
  // Estado para guardar os posts
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // A MÁGICA: Busca os posts através do Túnel /api
    // (Não usa mais localhost:8000 direto para evitar erro de segurança)
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar posts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="blog" className="py-24 bg-rich-black relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-gold-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold-primary"></span>
              Atualizações & Artigos
            </h2>
            <h3 className="font-serif text-3xl md:text-5xl text-white leading-tight">
              Conteúdo Jurídico <br />
              <span className="text-gold-gradient">Exclusivo</span>
            </h3>
          </div>

          <a 
            href="https://www.instagram.com/mariana_bueno_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300"
          >
            <Instagram size={20} className="text-gold-primary" />
            <span className="text-white font-medium">Siga no Instagram</span>
            <ArrowRight size={16} className="text-gold-primary group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* GRID DE POSTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {loading ? (
             // SKELETON (Carregando...)
             [1, 2, 3].map((i) => (
                <div key={i} className="h-[400px] bg-white/5 rounded-xl animate-pulse" />
             ))
          ) : posts.length === 0 ? (
             // ESTADO VAZIO
             <div className="col-span-full text-center py-12 border border-white/10 rounded-xl bg-white/5">
                <p className="text-gray-400">Nenhum post publicado ainda.</p>
             </div>
          ) : (
             // POSTS REAIS DO BANCO
             posts.map((post) => (
              <a 
                key={post.id}
                href={post.instagram_link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer bg-black/40"
              >
                <Image
                  src={post.image_url}
                  alt={post.title}
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-110 ${post.position_class || 'object-center'}`}
                />
                
                {/* Overlay Degradê */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Texto */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="h-1 w-12 bg-gold-primary mb-4 rounded-full" />
                  <h4 className="text-xl font-serif text-white font-medium leading-snug group-hover:text-gold-primary transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-4 text-xs font-bold text-gold-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    Ler no Instagram <ArrowRight size={14} />
                  </div>
                </div>

                {/* Borda Dourada */}
                <div className="absolute inset-0 border-2 border-gold-primary/0 group-hover:border-gold-primary/50 rounded-xl transition-all duration-300 pointer-events-none" />
              </a>
            ))
          )}

        </div>
      </div>
    </section>
  );
}