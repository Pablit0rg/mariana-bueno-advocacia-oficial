from fastapi import FastAPI, Depends, HTTPException, status
from sqlmodel import Session, select
from models import Usuario, Post, engine
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from auth import get_password_hash, verificar_senha

def get_session():
    with Session(engine) as session:
        yield session

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LoginData(BaseModel):
    senha: str

class PostCreate(BaseModel):
    title: str
    image_url: str
    instagram_link: str
    order: int = 0
    # is_edited não entra aqui, o backend controla isso

# --- ROTAS ---
@app.post("/api/login")
def login(data: LoginData, session: Session = Depends(get_session)):
    user = session.exec(select(Usuario).where(Usuario.username == "mariana.admin")).first()
    if not user:
        raise HTTPException(status_code=401, detail="Usuário não encontrado")
    
    if verificar_senha(data.senha, user.senha_hash):
        return {"message": "Login realizado com sucesso", "user": user.username}
    else:
        raise HTTPException(status_code=401, detail="Senha incorreta")

@app.get("/api/posts")
def list_posts(session: Session = Depends(get_session)):
    posts = session.exec(select(Post).order_by(Post.id.desc())).all()
    return posts

@app.post("/api/posts")
def create_post(post_data: PostCreate, session: Session = Depends(get_session)):
    new_post = Post(
        title=post_data.title,
        image_url=post_data.image_url,
        instagram_link=post_data.instagram_link,
        order=post_data.order,
        is_edited=False # Nasce falso
    )
    session.add(new_post)
    session.commit()
    session.refresh(new_post)
    return new_post

@app.put("/api/posts/{post_id}")
def update_post(post_id: int, post_data: PostCreate, session: Session = Depends(get_session)):
    post = session.get(Post, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post não encontrado")
    
    post.title = post_data.title
    post.image_url = post_data.image_url
    post.instagram_link = post_data.instagram_link
    post.is_edited = True # <--- AQUI A MÁGICA: Marcou como editado!
    
    session.add(post)
    session.commit()
    session.refresh(post)
    return post

@app.delete("/api/posts/{post_id}")
def delete_post(post_id: int, session: Session = Depends(get_session)):
    post = session.get(Post, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post não encontrado")
    session.delete(post)
    session.commit()
    return {"message": "Post deletado"}