from typing import Optional
from sqlmodel import Field, SQLModel
from datetime import datetime

# --- Tabela de Clientes (O coração do escritório) ---
class Cliente(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    nome: str
    email: str
    telefone: str
    area_atuacao: str  # Ex: Trabalhista, Civil, Família
    status_processo: str = "Aguardando Análise" # Ex: Em Andamento, Concluído
    data_cadastro: datetime = Field(default_factory=datetime.now)
    observacoes: Optional[str] = None

# --- Tabela de Usuários (Para login - Dra. Mariana) ---
class Usuario(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str = Field(index=True)
    senha_hash: str # Nunca salvaremos a senha pura!

# --- Modelos para receber dados do Site (JSON) ---
# Esses não criam tabela, só servem para validação
class ClienteCreate(SQLModel):
    nome: str
    email: str
    telefone: str
    area_atuacao: str
    observacoes: Optional[str] = None

class ClienteUpdate(SQLModel):
    status_processo: Optional[str] = None
    observacoes: Optional[str] = None