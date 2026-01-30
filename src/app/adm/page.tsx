"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, Key, Plus, Trash2, Instagram, LogOut } from "lucide-react";

export default function AdminPage() {
  const router = useRouter();
  
  // Estados
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState({
    title: "",
    image_url: "",
    instagram_link: "",
    order: 0
  });

  // 1. Login (Agora usando o Túnel /api)
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      // Repare: Não usamos mais localhost:8000, só /api/login
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ senha: password }),
      });

      if (res.ok) {
        setIsAuthenticated(true);
        fetchPosts(); 
      } else {
        setError("Senha incorreta.");
      }
    } catch (err) {
      console.error(err);
      setError("Erro de conexão. Verifique se o backend está rodando.");
    }
  };

  // 2. Buscar Posts
  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  };

  // 3. Criar Post
  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.image_url) return alert("Preencha título e imagem!");

    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    setNewPost({ title: "", image_url: "", instagram_link: "", order: 0 });
    fetchPosts();
    alert("Post criado com sucesso! 🚀");
  };

  // 4. Deletar Post
  const handleDeletePost = async (id: number) => {
    if (!confirm("Tem certeza?")) return;
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    fetchPosts();
  };

  // --- TELA DE LOGIN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-rich-black flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gold-primary/10 rounded-full">
              <Lock className="text-gold-primary" size={32} />
            </div>
          </div>
          <h1 className="text-2xl font-serif text-white text-center mb-8">Área Restrita</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Key className="absolute left-3 top-3 text-gray-500" size={20} />
              <input
                type="password"
                placeholder="Senha de Acesso"
                className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 text-white focus:border-gold-primary outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <button type="submit" className="w-full bg-gold-primary text-rich-black font-bold py-3 rounded-lg hover:bg-white transition-colors">
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- DASHBOARD ---
  return (
    <div className="min-h-screen bg-rich-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-serif text-white">Gerenciar Blog <span className="text-gold-primary">Instagram</span></h1>
          <button onClick={() => setIsAuthenticated(false)} className="text-gray-400 hover:text-white border border-white/20 px-4 py-2 rounded flex items-center gap-2">
            <LogOut size={16}/> Sair
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl h-fit">
            <h2 className="text-xl text-white font-bold mb-6 flex items-center gap-2">
              <Plus size={20} className="text-gold-primary" /> Novo Post
            </h2>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <input 
                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-gold-primary outline-none"
                placeholder="Título do Post"
                value={newPost.title}
                onChange={e => setNewPost({...newPost, title: e.target.value})}
              />
              <input 
                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-gold-primary outline-none"
                placeholder="Link da Imagem (URL)"
                value={newPost.image_url}
                onChange={e => setNewPost({...newPost, image_url: e.target.value})}
              />
              <input 
                className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-gold-primary outline-none"
                placeholder="Link do Instagram"
                value={newPost.instagram_link}
                onChange={e => setNewPost({...newPost, instagram_link: e.target.value})}
              />
              <button type="submit" className="w-full bg-gold-primary text-rich-black font-bold py-3 rounded hover:bg-white transition-colors">
                Publicar no Site
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl text-white font-bold mb-6">Posts Ativos ({posts.length})</h2>
            {posts.length === 0 && <p className="text-gray-500 italic">Nenhum post ainda.</p>}
            {posts.map((post) => (
              <div key={post.id} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5 hover:border-gold-primary/30 transition-colors">
                <img src={post.image_url} alt="" className="h-16 w-16 object-cover rounded" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium truncate">{post.title}</h3>
                  <a href={post.instagram_link} target="_blank" className="text-gold-primary text-xs hover:underline flex items-center gap-1">
                    <Instagram size={12} /> Ver no Insta
                  </a>
                </div>
                <button onClick={() => handleDeletePost(post.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded"><Trash2 size={18} /></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}