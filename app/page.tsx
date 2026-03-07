import Navigation from "./components/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import TechnicalWriting from "./components/sections/TechnicalWriting";
import Skills from "./components/sections/Skills";
import GitHubSection from "./components/sections/GitHub";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030712] overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Technical Writing Section */}
      <TechnicalWriting />

      {/* Skills Section */}
      <Skills />

      {/* GitHub Section */}
      <GitHubSection />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
