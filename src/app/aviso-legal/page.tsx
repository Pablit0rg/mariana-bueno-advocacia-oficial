import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function AvisoLegalPage() {
  return (
    <main className="bg-rich-black min-h-screen pt-32 pb-20">
      <ScrollToTop />
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        <div className="mb-12 border-b border-gold-primary/20 pb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-white mb-4">Aviso Legal</h1>
          <p className="text-gold-primary text-sm uppercase tracking-widest">Compliance OAB/PR</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed text-justify font-light">
          
          <section>
            <h2 className="text-xl text-white font-serif mb-3">1. Regularidade Profissional</h2>
            <p>
              Este site é mantido pela Dra. Mariana Bueno, advogada regularmente inscrita na <strong>Ordem dos Advogados do Brasil, Seccional Paraná (OAB/PR 110.875)</strong>. A atuação do escritório segue rigorosamente os preceitos do Código de Ética e Disciplina da OAB.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-serif mb-3">2. Caráter Informativo</h2>
            <p>
              Os artigos, posts e textos contidos neste site têm finalidade exclusivamente informativa e educacional. Eles não devem ser interpretados como aconselhamento jurídico para casos específicos. A legislação muda constantemente e cada situação fática exige uma análise detalhada.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-serif mb-3">3. Ausência de Vínculo</h2>
            <p>
              O envio de mensagens através do formulário de contato, e-mail ou WhatsApp não constitui, por si só, a formação de vínculo cliente-advogado. A contratação formal de serviços advocatícios depende de acordo prévio e assinatura de contrato de honorários.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-serif mb-3">4. Direitos Autorais de Terceiros</h2>
            <p>
              Imagens e recursos utilizados neste site podem ser provenientes de bancos de imagens licenciados ou de domínio público. Caso identifique qualquer conteúdo que supostamente infrinja direitos autorais, solicitamos que entre em contato imediatamente para a devida regularização.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
