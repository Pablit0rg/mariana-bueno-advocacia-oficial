// src/app/page.tsx
import { Hero } from '@/components/sections/Hero';
import { PracticeAreas } from '@/components/sections/PracticeAreas';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="bg-rich-black min-h-screen">
      {/* 1. Seção Principal (Capa) */}
      <Hero />
      
      {/* 2. Áreas de Atuação */}
      <PracticeAreas />
      
      {/* 3. Sobre a Dra. Mariana */}
      <About />
      
      {/* 4. Depoimentos de Clientes */}
      <Testimonials />

      {/* 5. Artigos Recentes (Blog) */}
      <Blog />
      
      {/* 6. Contato e Localização */}
      <Contact />
    </main>
  );
}
