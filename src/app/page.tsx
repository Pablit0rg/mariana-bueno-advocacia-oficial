import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { PracticeAreas } from "../components/sections/PracticeAreas";
import { Testimonials } from "../components/sections/Testimonials";
import { Contact } from "../components/sections/Contact"; // <--- Importe aqui

export default function Home() {
  return (
    <main className="bg-rich-black min-h-screen">
      <Hero />
      <About />
      <PracticeAreas />
      <Testimonials />
      <Contact /> {/* <--- Adicione aqui (O Grand Finale) */}
      
      {/* O rodapé virá automaticamente abaixo disso pelo layout.tsx */}
    </main>
  );
}