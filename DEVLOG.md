# 📜 DEVLOG: Jornada "Advocacia de Alta Complexidade"
**Projeto:** Dra. Mariana Bueno - Portfólio Jurídico Premium
**Desenvolvedor:** Pablo Rosa Gomes (Full-Stack)
**Status:** 🟢 Online (Vercel)
**Scores Atuais (Lighthouse Mobile):**
- 🟢 **SEO:** 100/100
- 🟢 **Best Practices:** 100/100
- 🟢 **Performance:** 93/100 (Meta: 100)
- 🟢 **Acessibilidade:** 92/100 (Meta: 100)

---

## 🛡️ PROTOCOLO DE QUALIDADE (Padrão Oficial)
**Obrigatório em todos os projetos:**
- [x] **Auditoria Lighthouse:** Todo deploy deve passar por validação no Google Lighthouse (Aba 'Inspecionar' > Lighthouse).
- [ ] **Meta de Excelência:** Não aceitar scores abaixo de 90 (Verde) em nenhuma categoria.
- [ ] **Mobile First:** A prioridade de otimização é sempre a versão celular (4G Lento).

---

## 🗓️ DIÁRIO DE BORDO

### 🚀 Fase 1 a 6 (Concluídas)
- **Base:** Next.js 16, Tailwind v4, Design System "Dark & Gold".
- **Funcionalidades:** Header Glass, WhatsApp Pulsante, Cookies LGPD, Otimização de Imagens (`next/image`).
- **SEO:** Metadados, Open Graph (Link com foto), SitemapXML, RobotsTXT.
- **PWA:** Manifesto de Aplicativo instalado.

---

## 💎 Fase Final: Polimento & "Pixel Perfect" (A Fazer)

### 🚨 Prioridade Alta (Correções do Relatório Lighthouse)

#### 1. Acessibilidade (Rumo ao 100)
- [ ] **Contraste de Cores:** Ajustar o tom do dourado/cinza em textos pequenos do Rodapé e Sobre, que acusaram "baixo contraste".
- [ ] **Nomes em Links (Aria-Labels):** Adicionar `aria-label="Instagram"` e `aria-label="WhatsApp"` nos botões de ícone do Rodapé (Footer) e Header, pois leitores de tela estão lendo apenas "link".

#### 2. Performance (Rumo ao 100)
- [ ] **Imagens Responsivas (`sizes`):** O Lighthouse apontou que estamos baixando imagens de 750px para exibir em espaços de 300px.
    * *Ação:* Configurar a prop `sizes="(max-width: 768px) 100vw, 50vw"` no componente `next/image` do Hero e About para o navegador baixar a versão leve no celular.
- [ ] **CLS (Layout Shift):** A animação `text-gold-gradient` está causando recálculos de layout.
    * *Ação:* Otimizar o CSS da animação para usar apenas `transform` ou `opacity`, ou fixar dimensões.

### 🎨 Design & Marca (Solicitações Especiais)
- [ ] **Refinamento da Logo:** Tratamento profissional da logo oficial (Dra. Mariana) para alta definição, fundo transparente e compressão WebP.
- [ ] **Redesign do Hero (Main):** Reestruturar a primeira dobra para encaixar a Logo Oficial com destaque ao lado do texto.
- [ ] **Scroll Mobile:** Investigar solução para forçar a barra de rolagem dourada também no Android/iOS (atualmente nativa).

### 📈 Expansão Futura
- [ ] Substituição final das fotos (Quando a Dra. enviar as oficiais de estúdio).
- [ ] Teste de Carga (Verificar comportamento com muitos acessos simultâneos).
