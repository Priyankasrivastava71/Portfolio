import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import FloatingStars from "./FloatingStars";

const contactLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:srivastavapriyanka71307@gmail.com",
    label: "srivastavapriyanka71307@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/priyanka-srivastava-478b20255",
    label: "linkedin.com/in/priyanka-srivastava",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Priyankasrivastava71",
    label: "github.com/Priyankasrivastava71",
  },
];

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Floating stars background */}
      <FloatingStars />
      
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[hsl(270,70%,70%,0.03)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[hsl(270,70%,70%)] to-[hsl(280,60%,72%)] mx-auto rounded-full" />
        </div>

        {/* Description */}
        <p
          className={`text-muted-foreground/80 text-sm leading-relaxed mb-10 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          
        </p>

        {/* Contact Links - Minimal Icon Style */}
        <div
          className={`flex justify-center gap-8 mb-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(270,35%,10%)]/50 border border-[hsl(270,70%,70%,0.1)] hover:border-[hsl(270,70%,70%,0.4)] transition-all duration-300 hover:shadow-[0_0_20px_hsl(270,70%,70%,0.15)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-5 h-5 text-[hsl(270,70%,75%,0.6)] group-hover:text-[hsl(270,70%,80%)] transition-colors duration-300" />
                
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Email text link */}
        <a
          href="mailto:srivastavapriyanka71307@gmail.com"
          className={`inline-block text-muted-foreground/70 text-sm hover:text-[hsl(270,70%,80%)] transition-all duration-300 hover:tracking-wide ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          srivastavapriyanka71307@gmail.com
        </a>
      </div>
    </section>
  );
}
