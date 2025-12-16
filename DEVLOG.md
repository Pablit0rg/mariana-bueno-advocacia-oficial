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

### 🎨 UI & Layout (Ajustes Visuais)
- [ ] **Cookie Banner (Full Width):**
    * *Desktop:* Esticar a barra de ponta a ponta (100% width).
    * *Conteúdo:* Ajustar o texto harmonicamente para preencher o espaço (avaliar texto padrão LGPD mais longo se necessário para o equilíbrio visual).
- [ ] **Imagens (Dra. Mariana):**
    * *Estilo:* Definir padrão de bordas (com ou sem linha fina branca) para consistência entre Hero e Sobre.
    * *Performance/Sobriedade:* **Remover** o efeito de zoom/movimento no hover. Manter estático para aliviar a memória do browser e passar mais seriedade profissional.
- [ ] **Perfil Profissional (Mini-Cards):**
    * Transformar os itens (Especialista, 4 Anos, OAB) em "Mini-cards".
    * *Estilo:* Seguir padrão de "Áreas de Atuação" (borda fina, hover com destaque dourado e leve movimento).
- [ ] **Footer (Matemática Visual):**
    * Manter todo o conteúdo atual inalterado.
    * *Ajuste:* Aplicar espaçamento matematicamente perfeito entre as colunas (Navegação, Áreas, Contato) para valorizar o "respiro" (whitespace) do layout.

### ✨ Interatividade & Efeitos (UX)
- [ ] **Botões (Novo Efeito Hover):**
    * **Remover:** O efeito de "subir" (translate-y).
    * **Adicionar:** Efeito de "Reflexo Dourado" (Shimmer/Brilho) passando pelo botão, valorizando a cor sem mover o elemento.
- [ ] **WhatsApp Button 3.0:**
    * *Ícone:* Trocar pelo vetor do WhatsApp mais moderno/clean disponível.
    * *Radar:* Manter o efeito pulsante, mas alterar o intervalo para **5 segundos** (reduzir pressão visual no usuário).
    * *Copywriting (Mensagem):* Configurar mensagem de saudação automática no link.
        * *Requisito:* Linguagem simples, popular e direta, sem formalidade excessiva, mas ética. Deve passar tranquilidade e confiança para iniciar o atendimento (ex: "Olá Dra. Mariana, gostaria de agendar um atendimento.").
- [ ] **Botão "Voltar ao Topo":**
    * Cor fixa Dourada (destaque imediato).

### 🔐 Funcionalidade & Credibilidade (Segurança Avançada)
- [ ] **Selo de Segurança (Footer):**
    * Substituir "Desenvolvido com Excelência" por selo/frase de segurança ("Site Seguro" ou similar).
    * *Ícone:* Adicionar Cadeado moderno ao lado.
- [ ] **Protocolo de Login Oculto (Anti-Invasão):**
    * **Gatilho:** O ícone do cadeado exigirá **Duplo Clique** para ativar.
    * **Geração de Token:** Ao ativar, o sistema gera um código aleatório (Token temporário) e exibe para a Dra. (ex: num modal ou toast discreto).
    * **Barreira de Entrada:** Ao acessar a rota `/adm` (ou painel de login), o primeiro campo a ser preenchido será o "Token de Segurança".
    * **Liberação:** Somente após validar o Token correto, o formulário de E-mail/Senha do Firebase será liberado. Sem o token (que só o cadeado gera), a tela de login permanece bloqueada.

### 📱 Blog & Integração Social (Instagram) [NOVO]
- [ ] **Feed Dinâmico (Mosaico):**
    * Criar seção "Atualizações Jurídicas" conectada ao perfil [@adv.marianabueno](https://www.instagram.com/adv.marianabueno/).
    * *Formato:* Exibir os últimos Reels/Posts (temas: pensão, imóveis, etc.) em formato de mosaico elegante.
    * *UX:* Design limpo, sem poluição visual, servindo como "isca" de conteúdo que ancora o usuário diretamente para o perfil profissional dela.

### 🚨 Performance & Acessibilidade (Lighthouse)
- [ ] **Contraste:** Ajustar tons de dourado/cinza para leitura perfeita.
- [ ] **Aria-Labels:** Adicionar nomes acessíveis nos links de ícones.
- [ ] **Imagens Responsivas:** Configurar `sizes` para baixar versões leves no mobile.
- [ ] **CLS:** Otimizar animações de texto para evitar trocas de layout.

### 🖌️ Branding (Identidade)
- [ ] **Refinamento da Logo:** Tratamento da logo oficial para alta definição e fundo transparente.
- [ ] **Redesign do Hero:** Reestruturar a dobra principal para encaixar a Logo Oficial ao lado da headline.
