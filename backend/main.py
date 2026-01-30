from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException, Depends
from sqlmodel import SQLModel, Session, create_engine, select
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from models import Cliente, Usuario, ClienteCreate, Post, PostCreate
from auth import verificar_senha

sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

engine = create_engine(sqlite_url, connect_args={"check_same_thread": False})

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_session():
    with Session(engine) as session:
        yield session

class LoginData(BaseModel):
    senha: str

@app.get("/")
def read_root():
    return {"message": "API Conectada e Pronta! 🚀"}

# --- LOGIN CORRIGIDO ---
@app.post("/api/login")
def login(data: LoginData, session: Session = Depends(get_session)):
    # 1. Busca o usuário "mariana.admin" no banco
    statement = select(Usuario).where(Usuario.username == "mariana.admin")
    user = session.exec(statement).first()

    # 2. Se não achar usuário OU a senha não bater, erro
    if not user or not verificar_senha(data.senha, user.senha_hash):
        raise HTTPException(status_code=401, detail="Senha incorreta")
    
    return {"token": "acesso-liberado-vip-mariana", "status": "ok"}

# --- ROTAS DE CLIENTES ---
@app.post("/api/clientes")
def criar_cliente(cliente: ClienteCreate, session: Session = Depends(get_session)):
    novo_cliente = Cliente.model_validate(cliente)
    session.add(novo_cliente)
    session.commit()
    session.refresh(novo_cliente)
    return novo_cliente

@app.get("/api/clientes")
def listar_clientes(session: Session = Depends(get_session)):
    clientes = session.exec(select(Cliente).order_by(Cliente.data_cadastro.desc())).all()
    return clientes

# --- ROTAS DE POSTS (BLOG) ---
@app.get("/api/posts")
def listar_posts(session: Session = Depends(get_session)):
    posts = session.exec(select(Post).order_by(Post.order)).all()
    return posts

@app.post("/api/posts")
def criar_post(post: PostCreate, session: Session = Depends(get_session)):
    novo_post = Post.model_validate(post)
    session.add(novo_post)
    session.commit()
    session.refresh(novo_post)
    return novo_post

@app.delete("/api/posts/{post_id}")
def deletar_post(post_id: int, session: Session = Depends(get_session)):
    post = session.get(Post, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post não encontrado")
    session.delete(post)
    session.commit()
    return {"ok": True}