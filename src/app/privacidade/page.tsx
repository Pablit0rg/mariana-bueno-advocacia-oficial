import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function PrivacidadePage() {
  return (
    <main className="bg-rich-black min-h-screen pt-32 pb-20">
      <ScrollToTop />
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        <div className="mb-12 border-b border-gold-primary/20 pb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-white mb-4">Política de Privacidade</h1>
          <p className="text-gold-primary text-sm uppercase tracking-widest">Conformidade LGPD</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed text-justify font-light">
          
          <section>
            <h2 className="text-xl text-white font-serif mb-3">1. Compromisso com seus Dados</h2>
            <p>
              A <strong>Mariana Bueno Advocacia</strong>, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), reafirma seu compromisso com a privacidade e a segurança das informações dos usuários e clientes.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-serif mb-3">2. Coleta de Dados</h2>
            <p>
              Coletamos apenas os dados estritamente necessários através do nosso formulário de contato e WhatsApp, tais como: <strong>Nome, E-mail e Telefone</strong>. A finalidade única é realizar o atendimento inicial, agendamento de consultas ou responder às suas dúvidas jurídicas.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-serif mb-3">3. Sigilo Profissional</h2>
            <p>
              Todas as informações compartilhadas, inclusive relatos de casos em formulários, são protegidas pelo <strong>Sigilo Advogado-Cliente</strong>, garantido por lei. Seus dados e sua história jamais serão expostos ou comercializados a terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-serif mb-3">4. Armazenamento e Segurança</h2>
            <p>
              Utilizamos tecnologias seguras e criptografia padrão de mercado para armazenar e processar seus dados. Eles são mantidos apenas pelo tempo necessário para o cumprimento da finalidade do atendimento ou para cumprimento de obrigações legais.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-serif mb-3">5. Seus Direitos</h2>
            <p>
              Você pode solicitar a qualquer momento a confirmação, acesso, correção ou exclusão dos seus dados pessoais de nossa base, bastando entrar em contato através do e-mail: <strong>contato@advmarianabueno.com.br</strong>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
