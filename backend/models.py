from typing import Optional
from sqlmodel import Field, SQLModel
from datetime import datetime

# --- Clientes ---
class Cliente(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    nome: str
    email: str
    telefone: str
    area_atuacao: str 
    status_processo: str = "Aguardando Análise"
    data_cadastro: datetime = Field(default_factory=datetime.now)
    observacoes: Optional[str] = None

# --- Usuário (Admin) ---
class Usuario(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str = Field(index=True)
    senha_hash: str

# --- Posts do Blog (NOVA TABELA) ---
class Post(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    image_url: str
    instagram_link: str
    position_class: str = Field(default="object-center")
    order: int = Field(default=0)
    data_postagem: datetime = Field(default_factory=datetime.now)

# --- Schemas de Criação ---
class ClienteCreate(SQLModel):
    nome: str
    email: str
    telefone: str
    area_atuacao: str
    observacoes: Optional[str] = None

class PostCreate(SQLModel):
    title: str
    image_url: str
    instagram_link: str
    position_class: str = "object-center"
    order: int = 0