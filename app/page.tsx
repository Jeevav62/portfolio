import Navigation from "./components/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import TechnicalWriting from "./components/sections/TechnicalWriting";
import Skills from "./components/sections/Skills";
import GitHubSection from "./components/sections/GitHub";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fafafa] text-[#09090b] overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechnicalWriting />
      <Skills />
      <GitHubSection />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
