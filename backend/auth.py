from pydantic import BaseModel

# Modelo de dados
class LoginRequest(BaseModel):
    senha: str

# Configuração
SENHA_MESTRA = "advocacia2026"

def verificar_senha(senha_digitada: str) -> bool:
    return senha_digitada == SENHA_MESTRA

def gerar_token_simples():
    return {"token": "acesso-liberado-vip-gold", "tipo": "admin"}
