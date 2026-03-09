import { useEffect, useRef, useState } from "react";
import { Code2, Layers } from "lucide-react";
import FloatingStars from "./FloatingStars";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Floating stars background */}
      <FloatingStars />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            About <span className="text-gradient">Me</span>
          </h2>
         
          <div className="flex justify-center">
  <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.3)] overflow-hidden">
    <img
      src="/pp.jpg"
      alt="Priyanka Srivastava"
      className="w-full h-full object-cover object-[center_20%]"
    />
  </div>
</div>
          
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(270,70%,70%)] to-[hsl(280,60%,72%)] mx-auto rounded-full" />
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column */}
          <div 
            className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[hsl(270,70%,70%,0.1)] border border-[hsl(270,70%,70%,0.2)]">
                <Code2 className="w-5 h-5 text-[hsl(270,70%,75%)]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Who I Am</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I am a Full Stack Web Developer with a strong understanding of core web development concepts across both frontend and backend technologies. I have hands-on experience building complete web applications, which has strengthened my knowledge of application structure, user interface development, and backend functionality.
            </p>
          </div>

          {/* Right Column */}
          <div 
            className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[hsl(270,70%,70%,0.1)] border border-[hsl(270,70%,70%,0.2)]">
                <Layers className="w-5 h-5 text-[hsl(270,70%,75%)]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">My Approach</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I focus on writing clean, maintainable code and building responsive, practical web solutions. With a solid foundation in modern web technologies, I am confident in my fundamentals and committed to continuous learning and I am eager to contribute to a growth-oriented team where I can apply my knowledge and grow as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
