import { ArrowDown, Download } from "lucide-react";
import FloatingStars from "./FloatingStars";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const handleScrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const resumeDownloadUrl = "https://drive.google.com/file/d/12xWjsn-Db4cURIbdJ8WFht3RQa3Nq2Nb/view?usp=sharing";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Floating stars background */}
      <FloatingStars />

      {/* Subtle nebula effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(270,70%,70%,0.05)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[hsl(280,60%,72%,0.04)] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Unique Intro */}
        <p className="text-sm md:text-base text-[hsl(270,70%,75%)] font-medium tracking-widest mb-4 opacity-0 animate-fade-in-up">
          Hi I'm 
        </p>

        {/* Name */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up animation-delay-100"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="text-foreground">Priyanka </span>
          <span className="text-gradient">Srivastava</span>
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-8 opacity-0 animate-fade-in-up animation-delay-200">
          <TypeAnimation sequence={["MERN Stack Developer",2000,
            "Full Stack Developer",2000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          />
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up animation-delay-300">
          Building modern, responsive web applications using the MERN stack. Focused on creating secure, scalable, and user-centered digital experiences with clean and structured code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-400">
          <button
            onClick={handleScrollToProjects}
            className="px-8 py-3 bg-[hsl(270,70%,70%)] text-[hsl(270,40%,6%)] font-medium rounded-lg transition-all duration-300 hover:bg-[hsl(270,70%,75%)] hover:shadow-[0_0_20px_hsl(270,70%,70%,0.3)]"
          >
            View Projects
          </button>
          <a
            href={resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-[hsl(270,70%,70%,0.3)] text-foreground font-medium rounded-lg hover:border-[hsl(270,70%,70%,0.6)] hover:bg-[hsl(270,70%,70%,0.05)] transition-all duration-300"
          >
            <Download size={18} />
            Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-[hsl(270,70%,75%)] transition-colors duration-300 animate-float"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
