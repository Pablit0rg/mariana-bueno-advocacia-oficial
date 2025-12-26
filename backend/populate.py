from sqlmodel import Session, select
from .models import Cliente, Usuario
from .main import engine, create_db_and_tables
from passlib.context import CryptContext

# Configuração de senha
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def popular_banco():
    # Garante que as tabelas existem
    create_db_and_tables()

    with Session(engine) as session:
        # 1. Verifica se já tem clientes
        if session.exec(select(Cliente)).first():
            print("⚠️ O banco de dados já tem dados! Pulando criação.")
            return

        # 2. Criar Clientes Fictícios
        clientes = [
            Cliente(
                nome="João da Silva", 
                email="joao@email.com", 
                telefone="(41) 99999-0001", 
                area_atuacao="Trabalhista",
                status_processo="Em Andamento",
                observacoes="Audiência marcada para dia 15."
            ),
            Cliente(
                nome="Maria Oliveira", 
                email="maria@email.com", 
                telefone="(41) 99999-0002", 
                area_atuacao="Família",
                status_processo="Aguardando Documentos",
                observacoes="Divórcio consensual."
            ),
            Cliente(
                nome="Empresa X Ltda", 
                email="contato@x.com", 
                telefone="(41) 3333-0000", 
                area_atuacao="Empresarial",
                status_processo="Concluído",
                observacoes="Contrato revisado."
            )
        ]

        # 3. Criar Usuário Admin (Futuro)
        admin = Usuario(
            username="mariana",
            senha_hash=pwd_context.hash("advocacia2026")
        )

        # Salvar tudo
        session.add_all(clientes)
        session.add(admin)
        session.commit()
        print("✅ Banco de dados populado com sucesso! 3 Clientes criados.")

if __name__ == "__main__":
    popular_banco()