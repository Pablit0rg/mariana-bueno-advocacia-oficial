"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Instagram, ExternalLink, ArrowRight } from "lucide-react";

interface Post {
  id: number;
  title: string;
  image_url: string;
  instagram_link: string;
  is_active: boolean; // Agora o Blog sabe o que é isso
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Busca os posts do Python
    fetch("http://127.0.0.1:8000/api/posts")
      .then((res) => res.json())
      .then((data) => {
        // --- A MÁGICA DO FILTRO AQUI ---
        // Só deixa passar quem tem is_active == true
        const postsAtivos = data.filter((post: Post) => post.is_active === true);
        
        // Pega só os 3 primeiros posts ATIVOS para exibir
        setPosts(postsAtivos.slice(0, 3));
      })
      .catch((err) => console.error("Erro ao carregar posts:", err));
  }, []);

  return (
    <section id="blog" className="py-24 bg-rich-black relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
      <div className="absolute -left-64 top-1/2 w-96 h-96 bg-gold-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Atualizações & <span className="text-gold-primary">Artigos</span>
          </h2>
          <div className="w-24 h-1 bg-gold-primary mx-auto rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Acompanhe nossas últimas publicações no Instagram sobre Direito Civil, 
            Família e Sucessões. Informação jurídica descomplicada para você.
          </p>
        </div>

        {/* Grid de Posts */}
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-gold-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-primary/10"
              >
                {/* Imagem do Post */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image_url}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Ícone do Instagram Flutuante */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 text-white group-hover:bg-gold-primary group-hover:text-rich-black transition-colors">
                    <Instagram size={20} />
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-gold-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <a 
                    href={post.instagram_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
                  >
                    Ler no Instagram 
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Estado Vazio (Sem posts ativos) */
          <div className="text-center py-12 border border-dashed border-white/10 rounded-2xl bg-white/5">
            <p className="text-gray-500">Nenhuma publicação recente disponível no momento.</p>
          </div>
        )}

        {/* Botão Ver Mais */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/dramarianabueno"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-rich-black rounded-lg font-bold transition-all duration-300 uppercase tracking-wider text-sm"
          >
            <Instagram size={20} />
            Siga no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}