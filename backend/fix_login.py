from sqlmodel import Session, create_engine, select, SQLModel
from models import Usuario
from auth import get_password_hash, verificar_senha
import os

# 1. Limpeza Radical
print("🧹 Limpando banco de dados antigo...")
if os.path.exists("database.db"):
    os.remove("database.db")

# 2. Configuração
sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"
engine = create_engine(sqlite_url)
SQLModel.metadata.create_all(engine)

def reset_admin():
    with Session(engine) as session:
        print("☕ Criando usuário admin novo...")
        
        # Gera a senha
        senha_plana = "123456"
        hash_gerada = get_password_hash(senha_plana)
        
        # Salva no banco
        admin_user = Usuario(username="mariana.admin", senha_hash=hash_gerada)
        session.add(admin_user)
        session.commit()
        print("✅ Usuário salvo.")

        # --- O TESTE REAL ---
        print("\n🕵️‍♂️ TESTANDO LOGIN IMEDIATAMENTE:")
        user_db = session.exec(select(Usuario).where(Usuario.username == "mariana.admin")).first()
        
        if user_db:
            teste = verificar_senha("123456", user_db.senha_hash)
            if teste:
                print("✨ SUCESSO TOTAL! A senha '123456' está funcionando perfeitamente.")
            else:
                print("❌ ERRO CRÍTICO: A senha gravada não confere. Problema na biblioteca bcrypt.")
        else:
            print("❌ ERRO: Usuário não foi encontrado no banco.")

if __name__ == "__main__":
    reset_admin()
