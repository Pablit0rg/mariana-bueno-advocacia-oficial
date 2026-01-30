from sqlmodel import Session, create_engine, select, SQLModel
from models import Usuario, Cliente, Post 
from auth import get_password_hash

sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"
engine = create_engine(sqlite_url)

def create_admin():
    print("🔨 Criando tabelas no Banco de Dados...")
    SQLModel.metadata.create_all(engine)
    
    with Session(engine) as session:
        statement = select(Usuario).where(Usuario.username == "mariana.admin")
        user = session.exec(statement).first()
        
        if not user:
            print("☕ Criando usuário admin...")
            hashed_pwd = get_password_hash("123456")
            admin_user = Usuario(username="mariana.admin", senha_hash=hashed_pwd)
            session.add(admin_user)
            session.commit()
            print("✅ SUCESSO! Usuário criado: mariana.admin / 123456")
        else:
            print("⚠️ Usuário já existe.")

if __name__ == "__main__":
    create_admin()