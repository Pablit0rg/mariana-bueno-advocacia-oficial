# Dra. Mariana Bueno | Advocacia de Alta Complexidade

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)

> **Plataforma digital de alta performance** desenvolvida para posicionamento de autoridade no mercado jurídico premium ("High Ticket"). Focado em Direito de Família e Sucessões.

---

## Sobre o Projeto

Este projeto não é apenas um site institucional, é uma **aplicação web moderna** construída com as tecnologias mais recentes do mercado (dezembro/2025). O objetivo é converter visitantes em clientes através de uma experiência de usuário (UX) fluida, design luxuoso ("Dark & Gold") e performance extrema.

### Identidade Visual
- **Tema:** "Black Excellence & Gold Luxury"
- **Tipografia:** - *Cinzel* (Serifa) para autoridade e títulos.
  - *Montserrat* (Sans) para modernidade e leitura.
- **Conceito:** Glassmorphism (Vidro), Animações Suaves e Contraste Alto.

---

## Tech Stack (Tecnologias)

O projeto utiliza a arquitetura **Modern Stack** para garantir SEO, velocidade e escalabilidade:

| Tecnologia | Função | Detalhes |
|------------|--------|----------|
| **Next.js 16** | Framework | App Router, Server Components e Otimização de Imagens. |
| **Tailwind CSS v4** | Estilização | Motor de estilos *Zero-Runtime*, configurado com sintaxe moderna. |
| **TypeScript** | Linguagem | Tipagem estática para código robusto e livre de erros. |
| **Framer Motion** | Animações | Entradas suaves, efeitos de scroll e interações de UI. |
| **Lucide React** | Ícones | Biblioteca de ícones vetoriais leves e modernos. |
| **Vercel** | Infraestrutura | CI/CD automatizado e hospedagem em Edge Network. |

---

## Funcionalidades (Features)

- [x] **Header Glassmorphism:** Navegação fixa com efeito de vidro e sublinhado animado.
- [x] **Hero Section Cinemática:** Apresentação de impacto com foto realista e CTA claro.
- [x] **Sistema de Cards Interativos:** Seção de "Áreas de Atuação" com efeitos de hover dourados.
- [x] **Prova Social:** Carrossel de depoimentos com design editorial.
- [x] **Botão Flutuante 2.0:** Integração direta com WhatsApp API, com animação de "pulso" para conversão.
- [x] **Footer Rico:** Rodapé com links de ancoragem funcionais e dados de contato.
- [x] **Responsividade Total:** *Mobile-First*, perfeito em qualquer celular ou desktop.

---

## Como Rodar o Projeto

Pré-requisitos: Node.js 18+ instalado.

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Pablit0rg/mariana-bueno-advocacia-oficial.git](https://github.com/Pablit0rg/mariana-bueno-advocacia-oficial.git)

   Estrutura de Pastas

   src/
├── app/                 # App Router (Páginas e Layouts)
│   ├── fonts.ts         # Configuração das fontes Google
│   ├── globals.css      # Estilos globais e Tailwind Imports
│   ├── layout.tsx       # Estrutura base (Header/Footer globais)
│   └── page.tsx         # Home Page (Montagem das seções)
├── components/
│   ├── layout/          # Componentes estruturais (Header, Footer)
│   ├── sections/        # Seções da página (Hero, About, Contact...)
│   └── ui/              # Elementos isolados (Botões, Cards...)
└── public/              # Imagens e Assets estáticos
