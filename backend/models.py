from sqlmodel import SQLModel, Field, create_engine
from typing import Optional

# 1. Configuração do Banco de Dados
sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

engine = create_engine(sqlite_url)

# 2. Tabelas
class Usuario(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str
    senha_hash: str

class Cliente(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    nome: str
    area: str
    telefone: str
    status: str = "Novo"

class Post(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    image_url: str
    instagram_link: str
    order: int = 0
    is_edited: bool = Field(default=False)
    is_active: bool = Field(default=True) # <--- NOVO: Define se aparece no site ou não