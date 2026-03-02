import Navbar from "@/react-app/components/Navbar";
import Hero from "@/react-app/components/Hero";
import About from "@/react-app/components/About";
import Skills from "@/react-app/components/Skills";
import Projects from "@/react-app/components/Projects";
import Resume from "@/react-app/components/Resume";
import Contact from "@/react-app/components/Contact";
import Footer from "@/react-app/components/Footer";

export default function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
