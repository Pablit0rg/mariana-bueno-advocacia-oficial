import dynamic from "next/dynamic";
import { Hero } from "../components/sections/Hero";

// --- IMPORTS DINÂMICOS (Otimização High Ticket) ---
// Carrega as seções pesadas apenas quando necessário para manter o site rápido.
const About = dynamic(() => import("../components/sections/About").then(mod => mod.About));
const PracticeAreas = dynamic(() => import("../components/sections/PracticeAreas").then(mod => mod.PracticeAreas));
const Testimonials = dynamic(() => import("../components/sections/Testimonials").then(mod => mod.Testimonials));
const Blog = dynamic(() => import("../components/sections/Blog").then(mod => mod.Blog)); // <--- Novo Componente
const Contact = dynamic(() => import("../components/sections/Contact").then(mod => mod.Contact));

export default function Home() {
  return (
    <main className="min-h-screen bg-rich-black selection:bg-gold-primary/30">
      
      {/* Hero carrega estático para ser imediato (LCP) */}
      <Hero />
      
      {/* As outras seções carregam otimizadas */}
      <About />
      <PracticeAreas />
      <Testimonials />
      <Blog />
      <Contact />
      
    </main>
  );
}
