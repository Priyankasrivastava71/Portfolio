import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import FloatingStars from "./FloatingStars";

const project = {
  title: "Skill Swap App",
  overview:
    "SkillSwap is a skill exchange web application that connects users who want to learn new skills with those who can teach them, making peer-to-peer learning more organized and interactive.",
  problem:
    "Many people have useful skills they can teach, and at the same time they want to learn new skills from others. But there is no simple and organized way for people to connect, exchange skills, schedule sessions, and track feedback in one place.",
  solution:
    "SkillSwap is a full-stack web application that allows users to create profiles, add skills they offer and want to learn, connect with matching users, send requests, schedule sessions, and give feedback after completing sessions. It provides a structured platform for peer-to-peer skill exchange.",
  features: [
    "Secure user registration and login using JWT-based authentication with protected routes and encrypted passwords",
    "Skill-based matching and structured request system",
    "Session scheduling with feedback & rating mechanism",
    "Real-time-style notification management Community posts and resource sharing",
    "Top-rated users dashboard Responsive UI with dark mode support",
  ],
  techStack: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Supabase(PostgreSQL)",
    "JWT Authentication",
    "bycrypt",
    "REST APIs",
    "Context API",
    "Axios",
  ],
  githubUrl: "https://github.com/Priyankasrivastava71/skillswap-frontend",
  liveUrl: "https://skillswap-frontend-two.vercel.app", // Placeholder
};

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Floating stars background */}
      <FloatingStars />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Featured <span className="text-gradient">Project</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(270,70%,70%)] to-[hsl(280,60%,72%)] mx-auto rounded-full" />
        </div>

        {/* Project Card */}
        <div
          className={`relative rounded-2xl bg-[hsl(270,35%,8%)]/60 border border-[hsl(270,70%,70%,0.1)] overflow-hidden transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(270,70%,70%)]/5 via-transparent to-[hsl(280,60%,72%)]/5" />

          <div className="relative z-10 p-8 md:p-10">
            {/* Project Title */}
            <h3
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {project.title}
            </h3>

            {/* Overview */}
            <p className="text-muted-foreground leading-relaxed mb-8">
              {project.overview}
            </p>

            {/* Case Study: Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Problem */}
              <div className="p-5 rounded-xl bg-[hsl(270,40%,6%)]/80 border border-[hsl(270,70%,70%,0.08)]">
                <h4 className="text-sm font-semibold text-[hsl(270,70%,75%)] uppercase tracking-wider mb-3">
                  The Problem
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-xl bg-[hsl(270,40%,6%)]/80 border border-[hsl(270,70%,70%,0.08)]">
                <h4 className="text-sm font-semibold text-[hsl(270,70%,75%)] uppercase tracking-wider mb-3">
                  The Solution
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Key Features
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[hsl(270,70%,75%)] mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Badges */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium text-[hsl(270,70%,80%)] bg-[hsl(270,70%,70%,0.1)] border border-[hsl(270,70%,70%,0.2)] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(270,70%,70%)] text-[hsl(270,40%,6%)] font-medium rounded-lg hover:bg-[hsl(270,70%,75%)] hover:shadow-[0_0_15px_hsl(270,70%,70%,0.3)] transition-all duration-300"
              >
                <Github size={18} />
                View on GitHub
              </a>
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[hsl(270,70%,70%,0.3)] text-foreground font-medium rounded-lg hover:border-[hsl(270,70%,70%,0.6)] hover:bg-[hsl(270,70%,70%,0.05)] transition-all duration-300"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
