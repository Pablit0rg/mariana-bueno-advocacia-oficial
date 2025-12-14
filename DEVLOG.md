# 📜 DEVLOG: Jornada "Advocacia de Alta Complexidade"
**Projeto:** Dra. Mariana Bueno - Portfólio Jurídico Premium
**Desenvolvedor:** Pablo Rosa Gomes (Full-Stack)
**Status:** 🟢 Online (Vercel)

---

## 🗓️ DIÁRIO DE BORDO

### 🚀 Fase 1: A Fundação do Império (Setup)
- **Inicialização:** Criação do projeto Next.js com TypeScript e App Router.
- **Identidade Visual (Ouro & Preto):**
    - Definição das cores `rich-black`, `rich-gray` e a paleta `gold` no `tailwind.config.ts`.
    - Configuração das fontes de luxo: **Cinzel** (Títulos) e **Montserrat** (Textos) no arquivo `src/app/fonts.ts`.
    - Aplicação das fontes e estilos globais no `src/app/layout.tsx`.

### 🧭 Fase 2: A Estrutura de Navegação
- **Header de Vidro (Glassmorphism):**
    - Criação do componente `Header.tsx` com efeito de desfoque ao rolar, menu responsivo e animações suaves.
    - Correção de importação no layout principal para garantir que o cabeçalho apareça em todas as páginas.
- **Rodapé Institucional:**
    - Criação do `Footer.tsx` com links rápidos, contato e copyright, fechando o site com elegância.

### 🏗️ Fase 3: Construção das Seções (O Corpo)
- **Hero Section (Primeira Impressão):**
    - `Hero.tsx`: Título de impacto "Defesa Estratégica", animação de entrada e espaço reservado para a foto da Dra. Mariana com recorte moderno.
- **Sobre a Dra. (Autoridade):**
    - `About.tsx`: Layout de colunas com foto e texto, destacando a experiência e a abordagem humanizada.
- **Áreas de Atuação (Serviços):**
    - `PracticeAreas.tsx`: Cards interativos para Família, Civil e Trabalhista, com destaque visual para o carro-chefe (Família).
- **Depoimentos (Prova Social):**
    - `Testimonials.tsx`: Design com aspas gigantes e estrelas douradas para transmitir confiança.
- **Chamada para Ação (Contato):**
    - `Contact.tsx`: Seção final antes do rodapé com senso de urgência e botões claros de contato.

### 💬 Fase 4: Funcionalidades de Conversão
- **Botão Flutuante:**
    - `WhatsAppButton.tsx`: Ícone do WhatsApp fixo no canto da tela, garantindo contato rápido em qualquer momento da navegação.

### ⚔️ Fase 5: Deploy e Ajustes Críticos (A Batalha Final)
- **Integração:** Montagem de todas as seções no arquivo `src/app/page.tsx`.
- **Deploy na Vercel:** Conexão do repositório GitHub com a plataforma Vercel.
- **Correção do Tailwind v4 (O Grande Desafio):**
    - Identificação do conflito entre a configuração da v3 e o motor da v4 (Site aparecia sem CSS).
    - **Solução:**
        1. Limpeza do `tailwind.config.ts` (remoção de tipos conflitantes).
        2. Atualização do `src/app/globals.css` para usar a sintaxe moderna `@import "tailwindcss";`.
    - **Resultado:** Site no ar com design perfeito.

---

## 🎯 PRÓXIMOS PASSOS (Roadmap)
- [ ] Refinamento Visual (Pixel Perfect).
- [ ] Substituição das imagens (Placeholders -> Reais).
- [ ] Otimização de SEO.