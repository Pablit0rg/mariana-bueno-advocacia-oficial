from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Importa a lógica de senha do arquivo auth.py
from .auth import verificar_senha

app = FastAPI()

# Configuração para permitir que o Next.js converse com o Python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todas as origens (facilitador para dev)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo de dados (o que o Python espera receber)
class LoginData(BaseModel):
    senha: str

@app.get("/")
def read_root():
    return {"message": "API da Mariana Bueno Advocacia está ON!"}

@app.post("/api/login")
def login(data: LoginData):
    print(f"🔑 Recebi a senha: {data.senha}") # Log no terminal para a gente ver
    
    if verificar_senha(data.senha):
        # SUCESSO: Retorna o token JSON que o site espera
        return {"token": "acesso-liberado-vip-mariana", "status": "ok"}
    else:
        # ERRO: Retorna código 401 (Não autorizado)
        raise HTTPException(status_code=401, detail="Senha incorreta")