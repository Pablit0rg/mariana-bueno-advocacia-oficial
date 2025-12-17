import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { PracticeAreas } from "../components/sections/PracticeAreas";
import { Testimonials } from "../components/sections/Testimonials";
import { Contact } from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-rich-black selection:bg-gold-primary/30">
      <Hero />
      <About />
      <PracticeAreas />
      <Testimonials />
      <Contact />
    </main>
  );
}
