from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException, Depends
from sqlmodel import SQLModel, Session, create_engine, select
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# --- CORREÇÃO AQUI (Removemos os pontos antes dos nomes) ---
from models import Cliente, Usuario, ClienteCreate
from auth import verificar_senha 

# --- Configuração do Banco de Dados ---
sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

# O "motor" que conecta no arquivo
engine = create_engine(sqlite_url, connect_args={"check_same_thread": False})

# Função para criar as tabelas se elas não existirem
def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

# Ciclo de Vida (O que acontece quando o App liga)
@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables() # Cria o arquivo database.db
    yield

app = FastAPI(lifespan=lifespan)

# Configuração CORS (Permite o Frontend conversar)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependência para pegar a sessão do banco
def get_session():
    with Session(engine) as session:
        yield session

# --- ROTAS ---

class LoginData(BaseModel):
    senha: str

@app.get("/")
def read_root():
    return {"message": "API Conectada ao Banco de Dados! 🧠"}

@app.post("/api/login")
def login(data: LoginData):
    if verificar_senha(data.senha):
        return {"token": "acesso-liberado-vip-mariana", "status": "ok"}
    raise HTTPException(status_code=401, detail="Senha incorreta")

# Rota para Criar Cliente (Teste)
@app.post("/api/clientes")
def criar_cliente(cliente: ClienteCreate, session: Session = Depends(get_session)):
    novo_cliente = Cliente.model_validate(cliente)
    session.add(novo_cliente)
    session.commit()
    session.refresh(novo_cliente)
    return novo_cliente

# Rota para Listar Clientes
@app.get("/api/clientes")
def listar_clientes(session: Session = Depends(get_session)):
    clientes = session.exec(select(Cliente)).all()
    return clientes