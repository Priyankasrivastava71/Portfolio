import { useEffect, useRef, useState } from "react";
import { Download, FileText } from "lucide-react";
import FloatingStars from "./FloatingStars";

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Google Drive direct download link
  const resumeDownloadUrl =
    "https://drive.google.com/file/d/19r0EZvIe72nNPUpYOAOsHcP2JvTJxpYa/view?usp=sharing";

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
      id="resume"
      ref={sectionRef}
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Floating stars background */}
      <FloatingStars />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-gradient">Resume</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(270,70%,70%)] to-[hsl(280,60%,72%)] mx-auto rounded-full" />
        </div>

        {/* Resume Card */}
        <div
          className={`relative p-8 md:p-10 rounded-2xl bg-[hsl(270,35%,8%)]/60 border border-[hsl(270,70%,70%,0.1)] transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Subtle glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(270,70%,70%)]/5 via-transparent to-transparent" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[hsl(270,70%,70%,0.1)] border border-[hsl(270,70%,70%,0.2)] flex items-center justify-center">
              <FileText className="w-8 h-8 text-[hsl(270,70%,75%)]" />
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-8">
              You can download my resume to learn more about my experience,
              projects, and technical expertise.
            </p>

            {/* Download Button */}
            <a
              href={resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[hsl(270,70%,70%)] text-[hsl(270,40%,6%)] font-medium rounded-lg hover:bg-[hsl(270,70%,75%)] hover:shadow-[0_0_15px_hsl(270,70%,70%,0.3)] transition-all duration-300"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
