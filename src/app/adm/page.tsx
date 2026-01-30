"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, Key, Plus, Trash2, Instagram, LogOut, Pencil, CheckCircle, Save, Filter, Eye, EyeOff } from "lucide-react";

export default function AdminPage() {
  const router = useRouter();
  
  // Estados
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [filterType, setFilterType] = useState("recentes");

  const [formData, setFormData] = useState({
    title: "",
    image_url: "",
    instagram_link: "",
    order: 0,
    is_active: true // Padrão
  });

  const showSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(""), 3000);
  };

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

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  };

  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.image_url) return alert("Preencha título e imagem!");

    const url = editingId ? `/api/posts/${editingId}` : "/api/posts";
    const method = editingId ? "PUT" : "POST";

    await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setFormData({ title: "", image_url: "", instagram_link: "", order: 0, is_active: true });
    setEditingId(null);
    fetchPosts();
    showSuccess(editingId ? "Post atualizado com sucesso! ✨" : "Post criado com sucesso! 🚀");
  };

  // --- NOVA FUNÇÃO: Alternar Visibilidade ---
  const handleToggleVisibility = async (post: any) => {
    // Inverte o status atual
    const novoStatus = !post.is_active;
    
    await fetch(`/api/posts/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      // Manda todos os dados antigos, mas muda o is_active
      body: JSON.stringify({ ...post, is_active: novoStatus }),
    });

    fetchPosts();
    showSuccess(novoStatus ? "Post visível no site! 👁️" : "Post arquivado (oculto)! 🙈");
  };

  const handleEditClick = (post: any) => {
    setEditingId(post.id);
    setFormData({
      title: post.title,
      image_url: post.image_url,
      instagram_link: post.instagram_link,
      order: post.order,
      is_active: post.is_active
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ title: "", image_url: "", instagram_link: "", order: 0, is_active: true });
  };

  const handleDeletePost = async (id: number) => {
    if (!confirm("Tem certeza que quer apagar este post?")) return;
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    fetchPosts();
    showSuccess("Post removido.");
  };

  const getSortedPosts = () => {
    const sorted = [...posts];
    if (filterType === "recentes") {
      return sorted.sort((a, b) => b.id - a.id);
    }
    if (filterType === "antigos") {
      return sorted.sort((a, b) => a.id - b.id);
    }
    if (filterType === "az") {
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    return sorted;
  };

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

  return (
    <div className="min-h-screen bg-rich-black p-8 pt-32 relative">
      
      {/* Notificação Centralizada */}
      {successMsg && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-green-500 text-white px-8 py-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center gap-3 animate-fade-in-up z-[100] border border-white/20">
          <CheckCircle size={24} className="text-white drop-shadow-md" />
          <span className="font-bold text-lg tracking-wide drop-shadow-md">{successMsg}</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-white/10 pb-4">
          <h1 className="text-3xl font-serif text-white">
            Gerenciar Blog <span className="text-gold-primary">Instagram</span>
          </h1>
          <p className="text-gray-400 text-sm mt-2">Adicione, edite ou oculte os destaques do seu Instagram.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* === COLUNA ESQUERDA (Formulário) === */}
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4 mb-6 opacity-0 pointer-events-none select-none">
                <h2 className="text-xl font-bold py-2">Spacer</h2>
                <div className="h-9 w-20"></div>
            </div>

            <div className={`border p-8 rounded-2xl h-fit shadow-xl transition-all ${editingId ? 'bg-gold-primary/5 border-gold-primary/30' : 'bg-white/5 border-white/10'}`}>
              <h2 className={`text-xl font-bold mb-6 flex items-center gap-2 ${editingId ? 'text-gold-primary' : 'text-white'}`}>
                {editingId ? <Pencil size={20} /> : <Plus size={20} />} 
                {editingId ? "Editando Post" : "Novo Post"}
              </h2>
              <form onSubmit={handleSavePost} className="space-y-4">
                <input 
                  className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-gold-primary outline-none"
                  placeholder="Título do Post"
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                />
                <input 
                  className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-gold-primary outline-none"
                  placeholder="Link da Imagem (URL)"
                  value={formData.image_url}
                  onChange={e => setFormData({...formData, image_url: e.target.value})}
                />
                <input 
                  className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-gold-primary outline-none"
                  placeholder="Link do Instagram"
                  value={formData.instagram_link}
                  onChange={e => setFormData({...formData, instagram_link: e.target.value})}
                />
                <button type="submit" className="w-full bg-gold-primary text-rich-black font-bold py-3 rounded hover:bg-white transition-colors flex justify-center items-center gap-2">
                  {editingId ? <Save size={18}/> : <Plus size={18}/>}
                  {editingId ? "Salvar Alterações" : "Publicar no Site"}
                </button>
                {editingId && (
                  <button type="button" onClick={handleCancelEdit} className="w-full text-gray-400 hover:text-white py-2 text-sm underline text-center block">
                    Cancelar Edição
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* === COLUNA DIREITA (Lista) === */}
          <div className="space-y-4">
            
            <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4 mb-6">
               <h2 className="text-xl text-white font-bold flex items-center gap-2 py-2">
                 Posts ({posts.length})
               </h2>
               
               <div className="flex items-center gap-3">
                 <div className="relative group">
                    <select 
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                      className="bg-black/50 border border-white/20 text-white text-sm rounded-lg px-3 py-2 outline-none focus:border-gold-primary appearance-none pr-8 cursor-pointer"
                    >
                      <option value="recentes">Mais Recentes</option>
                      <option value="antigos">Mais Antigos</option>
                      <option value="az">Nome (A-Z)</option>
                    </select>
                    <Filter size={14} className="absolute right-2 top-3 text-gold-primary pointer-events-none"/>
                 </div>

                 <button 
                   onClick={() => setIsAuthenticated(false)} 
                   className="text-red-400 hover:bg-red-400/10 px-3 py-2 text-sm rounded border border-red-400/30 transition-all"
                   title="Sair"
                 >
                   <LogOut size={16}/>
                 </button>
               </div>
            </div>

            {posts.length === 0 && (
              <div className="p-8 border border-dashed border-white/20 rounded-xl text-center text-gray-500">
                Nenhum post publicado ainda.
              </div>
            )}

            {getSortedPosts().map((post) => (
              <div key={post.id} className={`flex items-center gap-4 p-4 rounded-lg border transition-all 
                ${editingId === post.id ? 'bg-gold-primary/10 border-gold-primary' : 'bg-white/5 border-white/5 hover:border-gold-primary/30'}
                ${!post.is_active ? 'opacity-60 grayscale' : ''} 
              `}>
                
                {/* Imagem (Se estiver oculto, fica preto e branco) */}
                <img src={post.image_url} alt="" className="h-16 w-16 object-cover rounded" />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-medium truncate ${post.is_active ? 'text-white' : 'text-gray-400 line-through'}`}>
                      {post.title}
                    </h3>
                    
                    {/* ETIQUETAS */}
                    {!post.is_active && (
                      <span className="text-[10px] text-red-300 bg-red-400/10 border border-red-400/20 px-1 rounded">
                        (Oculto)
                      </span>
                    )}
                    {post.is_edited && (
                      <span className="text-[10px] text-gray-500 font-normal border border-white/10 px-1 rounded">
                        (Editado)
                      </span>
                    )}
                  </div>
                  
                  <a href={post.instagram_link} target="_blank" className="text-gold-primary text-xs hover:underline flex items-center gap-1 mt-1">
                    <Instagram size={12} /> Ver no Insta
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  
                  {/* --- BOTÃO OLHO (ARQUIVAR) --- */}
                  <button 
                    onClick={() => handleToggleVisibility(post)} 
                    className={`p-2 rounded transition-colors ${post.is_active ? 'text-green-400 hover:bg-green-400/10' : 'text-gray-400 hover:bg-white/10'}`}
                    title={post.is_active ? "Ocultar do site" : "Mostrar no site"}
                  >
                    {post.is_active ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>

                  <button onClick={() => handleEditClick(post)} className="p-2 text-blue-400 hover:bg-blue-400/10 rounded" title="Editar">
                    <Pencil size={18} />
                  </button>
                  <button onClick={() => handleDeletePost(post.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded" title="Excluir Definitivamente">
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