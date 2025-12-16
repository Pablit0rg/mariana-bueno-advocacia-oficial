import dynamic from "next/dynamic";
import { Hero } from "../components/sections/Hero";

// Carregamento Otimizado (Lazy Loading)
// Essas seções só carregam o código quando estão perto de aparecer na tela
const About = dynamic(() => import("../components/sections/About").then(mod => mod.About), {
  loading: () => <div className="h-screen bg-rich-black" />, // Placeholder invisível
});

const PracticeAreas = dynamic(() => import("../components/sections/PracticeAreas").then(mod => mod.PracticeAreas));
const Testimonials = dynamic(() => import("../components/sections/Testimonials").then(mod => mod.Testimonials));
const Contact = dynamic(() => import("../components/sections/Contact").then(mod => mod.Contact));

export default function Home() {
  return (
    <main className="min-h-screen bg-rich-black selection:bg-gold-primary/30">
      {/* O Hero carrega normal (prioridade máxima) */}
      <Hero />
      
      {/* O resto carrega sob demanda (Performance Extrema) */}
      <About />
      <PracticeAreas />
      <Testimonials />
      <Contact />
    </main>
  );
}
