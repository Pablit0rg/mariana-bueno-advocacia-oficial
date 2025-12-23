import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function TermosPage() {
  return (
    <main className="bg-rich-black min-h-screen pt-32 pb-20">
      <ScrollToTop />
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        {/* Cabeçalho */}
        <div className="mb-12 border-b border-gold-primary/20 pb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-white mb-4">Termos de Uso</h1>
          <p className="text-gold-primary text-sm uppercase tracking-widest">Última atualização: Dezembro 2024</p>
        </div>

        {/* Conteúdo Jurídico */}
        <div className="space-y-8 text-gray-300 leading-relaxed text-justify font-light">
          
          <section>
            <h2 className="text-xl text-white font-serif mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site <strong>Mariana Bueno Advocacia</strong>, você concorda expressamente com estes Termos de Uso. O conteúdo deste site possui caráter meramente informativo e educacional, não substituindo, em hipótese alguma, a consultoria jurídica especializada para o seu caso concreto.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-serif mb-3">2. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo disponibilizado neste site (textos, logotipos, design, imagens e artigos) é de propriedade exclusiva da <strong>Dra. Mariana Bueno</strong> ou de seus licenciadores, estando protegido pela Lei de Direitos Autorais (Lei nº 9.610/98). É vedada a reprodução parcial ou total sem a prévia autorização por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-serif mb-3">3. Natureza do Conteúdo</h2>
            <p>
              Em conformidade com o Código de Ética e Disciplina da OAB (Ordem dos Advogados do Brasil), as informações aqui contidas não constituem publicidade mercantil, captação indevida de clientela ou promessa de resultado. O objetivo é promover a cultura jurídica e o esclarecimento sobre direitos.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-serif mb-3">4. Limitação de Responsabilidade</h2>
            <p>
              O escritório não se responsabiliza por decisões tomadas exclusivamente com base nas informações genéricas deste site. Cada processo jurídico possui particularidades que exigem análise técnica individualizada. O uso deste site não cria automaticamente uma relação advogado-cliente.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white font-serif mb-3">5. Foro</h2>
            <p>
              Fica eleito o foro da Comarca de <strong>Curitiba/PR</strong> para dirimir quaisquer dúvidas oriundas destes termos, renunciando-se a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
