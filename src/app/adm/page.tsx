"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, Key, Plus, Trash2, Instagram, LogOut, Pencil, CheckCircle, Save } from "lucide-react";

export default function AdminPage() {
  const router = useRouter();
  
  // Estados
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  // Estados de Gerenciamento
  const [posts, setPosts] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null); // Id do post sendo editado
  const [successMsg, setSuccessMsg] = useState(""); // Mensagem de sucesso (Toast)

  const [formData, setFormData] = useState({
    title: "",
    image_url: "",
    instagram_link: "",
    order: 0
  });

  // Função para mostrar mensagem temporária
  const showSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(""), 3000); // Some depois de 3 segundos
  };

  // 1. Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
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

  // 3. Salvar (Criar OU Editar)
  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.image_url) return alert("Preencha título e imagem!");

    // Se tiver editingId, é EDIÇÃO via PUT. Se não, é CRIAÇÃO via POST.
    const url = editingId ? `/api/posts/${editingId}` : "/api/posts";
    const method = editingId ? "PUT" : "POST";

    await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // Resetar formulário
    setFormData({ title: "", image_url: "", instagram_link: "", order: 0 });
    setEditingId(null);
    fetchPosts();
    
    // Mensagem bonita em vez de alert()
    showSuccess(editingId ? "Post atualizado com sucesso! ✨" : "Post criado com sucesso! 🚀");
  };

  // 4. Preencher formulário para editar
  const handleEditClick = (post: any) => {
    setEditingId(post.id);
    setFormData({
      title: post.title,
      image_url: post.image_url,
      instagram_link: post.instagram_link,
      order: post.order
    });
    // Rola a tela para o topo suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 5. Cancelar Edição
  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ title: "", image_url: "", instagram_link: "", order: 0 });
  };

  // 6. Deletar Post
  const handleDeletePost = async (id: number) => {
    if (!confirm("Tem certeza que quer apagar este post?")) return;
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    fetchPosts();
    showSuccess("Post removido.");
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

  // --- DASHBOARD (Logado) ---
  return (
    <div className="min-h-screen bg-rich-black p-8 pt-32">
      
      {/* NOTIFICAÇÃO (TOAST) FLUTUANTE */}
      {successMsg && (
        <div className="fixed top-24 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in-up z-50">
          <CheckCircle size={24} />
          <span className="font-bold">{successMsg}</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        
        {/* Título Principal */}
        <div className="mb-12 border-b border-white/10 pb-4">
          <h1 className="text-3xl font-serif text-white">
            Gerenciar Blog <span className="text-gold-primary">Instagram</span>
          </h1>
          <p className="text-gray-400 text-sm mt-2">Adicione ou edite os destaques do seu Instagram.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* COLUNA ESQUERDA: Formulário (Muda de cor se estiver editando) */}
          <div className={`border p-8 rounded-2xl h-fit shadow-xl transition-all ${editingId ? 'bg-gold-primary/5 border-gold-primary/30' : 'bg-white/5 border-white/10'}`}>
            <h2 className={`text-xl font-bold mb-6 flex items-center gap-2 ${editingId ? 'text-gold-primary' : 'text-white'}`}>
              {editingId ? <Pencil size={20} /> : <Plus size={20} />} 
              {editingId ? "Editando Post" : "Novo Post"}
            </h2>
            
            <form onSubmit={handleSavePost} className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider mb-1 block">Título</label>
                <input 
                  className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-gold-primary outline-none"
                  placeholder="Ex: Contratos Inteligentes"
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider mb-1 block">Imagem (URL)</label>
                <input 
                  className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-gold-primary outline-none"
                  placeholder="https://..."
                  value={formData.image_url}
                  onChange={e => setFormData({...formData, image_url: e.target.value})}
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider mb-1 block">Link do Instagram</label>
                <input 
                  className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-gold-primary outline-none"
                  placeholder="https://instagram.com/p/..."
                  value={formData.instagram_link}
                  onChange={e => setFormData({...formData, instagram_link: e.target.value})}
                />
              </div>

              <button type="submit" className="w-full bg-gold-primary text-rich-black font-bold py-3 rounded hover:bg-white transition-colors flex justify-center items-center gap-2">
                {editingId ? <Save size={18}/> : <Plus size={18}/>}
                {editingId ? "Salvar Alterações" : "Publicar no Site"}
              </button>

              {editingId && (
                <button type="button" onClick={handleCancelEdit} className="w-full text-gray-400 hover:text-white py-2 text-sm underline">
                  Cancelar Edição
                </button>
              )}
            </form>
          </div>

          {/* COLUNA DIREITA: Lista de Posts */}
          <div className="space-y-4">
            <div className="flex justify-between items-end mb-6">
               <h2 className="text-xl text-white font-bold">
                 Posts Ativos ({posts.length})
               </h2>
               <button 
                 onClick={() => setIsAuthenticated(false)} 
                 className="text-red-400 hover:text-red-300 border border-red-400/30 hover:bg-red-400/10 px-3 py-1 text-sm rounded flex items-center gap-2 transition-all"
               >
                 <LogOut size={14}/> Sair do Painel
               </button>
            </div>

            {posts.length === 0 && (
              <div className="p-8 border border-dashed border-white/20 rounded-xl text-center text-gray-500">
                Nenhum post publicado ainda.
              </div>
            )}

            {posts.map((post) => (
              <div key={post.id} className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${editingId === post.id ? 'bg-gold-primary/10 border-gold-primary' : 'bg-white/5 border-white/5 hover:border-gold-primary/30'}`}>
                <img src={post.image_url} alt="" className="h-16 w-16 object-cover rounded" />
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium truncate">{post.title}</h3>
                  <a href={post.instagram_link} target="_blank" className="text-gold-primary text-xs hover:underline flex items-center gap-1">
                    <Instagram size={12} /> Ver no Insta
                  </a>
                </div>

                {/* AQUI ESTÃO OS BOTÕES DE AÇÃO */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleEditClick(post)} 
                    className="p-2 text-blue-400 hover:bg-blue-400/10 rounded" 
                    title="Editar Post"
                  >
                    <Pencil size={18} />
                  </button>
                  
                  <button 
                    onClick={() => handleDeletePost(post.id)} 
                    className="p-2 text-red-400 hover:bg-red-400/10 rounded" 
                    title="Excluir Post"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}