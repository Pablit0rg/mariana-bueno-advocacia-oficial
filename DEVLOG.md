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
- [x] **Auditoria Lighthouse:** Todo deploy deve passar por validação no Google Lighthouse.
- [ ] **Meta de Excelência:** Não aceitar scores abaixo de 90 (Verde).
- [ ] **Mobile First:** Prioridade total para otimização em redes móveis (4G).

---

## 🗓️ DIÁRIO DE BORDO

### 🚀 Fase 1 a 6 (Concluídas)
- **Base:** Next.js 16, Tailwind v4, Design System "Dark & Gold".
- **Funcionalidades:** Header Glass, Cookies LGPD, Otimização de Imagens (`next/image`).
- **SEO:** Metadados, Open Graph, SitemapXML, RobotsTXT.
- **PWA:** Manifesto de Aplicativo instalado.

---

## 💎 Fase Final: Refinamento "High Ticket" (Backlog Prioritário)

### 🎨 UI & Layout (Correções Visuais)
- [ ] **Navbar (Linha Fixa):**
    * *Problema:* A linha inferior (borda) desaparece quando o site está no topo (0px).
    * *Ação:* Fixar a borda `border-gold-primary` para ser visível permanentemente, independente do scroll.
- [ ] **Seção Contato (Alinhamento & Harmonia):**
    * *Problema:* Os cards da esquerda (Telefone, Email, Endereço) e o formulário da direita não estão alinhados verticalmente.
    * *Ação:* Ajustar o layout para que o topo do primeiro card e o fundo do último card fiquem na mesma "linha invisível" do formulário, criando um bloco sólido e organizado.
- [ ] **Botão "Voltar ao Topo" (Resgate):**
    * *Problema:* O botão sumiu da tela (possível erro de `z-index` ou lógica).
    * *Ação:* Trazer o botão de volta, garantindo que funcione e fique visível acima do rodapé.

### ✨ Interatividade & Branding (UX)
- [ ] **Padrão CTA "Solid Gold" (Dourado Fixo):**
    * *Regra:* Padronizar todos os botões de ação ("Falar com Advogada", etc.) com a cor **Dourada Fixa** (`bg-gold-primary`).
    * *Ajuste:* Remover estilos transparentes ou outline do botão do Header e outros CTAs.
- [ ] **Botão Instagram (Cores Oficiais):**
    * *Ação:* Alterar o botão "Siga no Instagram" para usar as **Cores Oficiais** da rede social (Gradiente Roxo/Laranja) para modernizar e aumentar o reconhecimento, mantendo o texto do CTA.
- [ ] **Efeito Shimmer (Reflexo):**
    * Aplicar o efeito de brilho passando em todos os botões dourados.
- [ ] **WhatsApp Button 3.0:**
    * Ícone vetorizado moderno + Radar 5s + Mensagem de saudação acolhedora.

### 🔐 Funcionalidade & Credibilidade
- [ ] **Selo de Segurança (Footer):**
    * Texto "Site Seguro" + Cadeado Moderno.
- [ ] **Protocolo de Login Oculto (Anti-Invasão):**
    * Duplo clique no cadeado -> Token Aleatório -> Liberação da rota `/adm`.

### 📱 Conteúdo & Expansão
- [ ] **Blog (Feed Mosaico):**
    * Seção estática com os principais posts do Instagram linkados.
- [ ] **Cookie Banner (Full Width):**
    * Barra estendida de ponta a ponta no Desktop.
- [ ] **Imagens (Dra. Mariana):**
    * Remover zoom no hover e padronizar bordas finas.

### 🖌️ Identidade Visual Dupla
- [ ] **Refinamento da Logo Oficial:** Tratamento para alta definição e fundo transparente.
- [ ] **Aplicação 1 - Navbar:** Substituir texto pela Logo Oficial.
- [ ] **Aplicação 2 - Hero:** Fundir a Logo Oficial (versão artística) com a headline.
