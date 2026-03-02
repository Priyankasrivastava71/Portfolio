import { useEffect, useRef, useState } from "react";
import FloatingStars from "./FloatingStars";

// Skills with icons (using simple SVG icons)
const skills = [
  { name: "React", size: "lg", color: "hsl(270,70%,75%)" },
  { name: "JavaScript", size: "lg", color: "hsl(280,60%,72%)" },
  { name: "Node.js", size: "lg", color: "hsl(270,70%,75%)" },
  { name: "HTML", size: "md", color: "hsl(290,55%,70%)" },
  { name: "CSS", size: "md", color: "hsl(270,70%,75%)" },
  { name: "Tailwind", size: "md", color: "hsl(280,60%,72%)" },
  { name: "SQL", size: "md", color: "hsl(270,70%,75%)" },
  { name: "Express", size: "md", color: "hsl(290,55%,70%)" },
  { name: "Firebase", size: "sm", color: "hsl(280,60%,72%)" },
  { name: "Git", size: "sm", color: "hsl(270,70%,75%)" },
  { name: "GitHub", size: "sm", color: "hsl(290,55%,70%)" },
  { name: "VS Code", size: "sm", color: "hsl(280,60%,72%)" },
  { name: "Postman", size: "sm", color: "hsl(270,70%,75%)" },
];

// Simple skill icons as SVG
function SkillIcon({ name, color }: { name: string; color: string }) {
  const iconProps = { width: "100%", height: "100%", fill: color };
  
  switch (name) {
    case "React":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <circle cx="12" cy="12" r="2.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={color} strokeWidth="1" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={color} strokeWidth="1" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke={color} strokeWidth="1" transform="rotate(120 12 12)" />
        </svg>
      );
    case "JavaScript":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke={color} strokeWidth="1.5" />
          <text x="8" y="17" fontSize="10" fontWeight="bold" fill={color}>JS</text>
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="none" stroke={color} strokeWidth="1.5" />
          <text x="8" y="14" fontSize="6" fontWeight="bold" fill={color}>N</text>
        </svg>
      );
    case "HTML":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="none" stroke={color} strokeWidth="1.5" />
          <text x="7" y="15" fontSize="7" fontWeight="bold" fill={color}>{"<>"}</text>
        </svg>
      );
    case "CSS":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="none" stroke={color} strokeWidth="1.5" />
          <text x="7" y="15" fontSize="7" fontWeight="bold" fill={color}>{"{}"}</text>
        </svg>
      );
    case "Tailwind":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M6 12c.5-3 2.5-4 6-4 5 0 5.5 3 8 3.5-1.5 2-3.5 2.5-6 2-2-.4-3.5-1.5-8-1.5zm-3 6c.5-3 2.5-4 6-4 5 0 5.5 3 8 3.5-1.5 2-3.5 2.5-6 2-2-.4-3.5-1.5-8-1.5z" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "SQL":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" fill="none" stroke={color} strokeWidth="1.5" />
        </svg>
      );
    case "Express":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <text x="4" y="16" fontSize="9" fontWeight="bold" fill={color}>Ex</text>
        </svg>
      );
    case "Firebase":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M5 18L8 4l4 8-7 6z" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12 12l7 6H5l7-6z" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12 12l4-8 3 14-7-6z" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "Git":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <circle cx="6" cy="6" r="2" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="18" cy="6" r="2" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="6" cy="18" r="2" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M6 8v8M8 6h8M6 18l12-12" fill="none" stroke={color} strokeWidth="1.5" />
        </svg>
      );
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z" fill="none" stroke={color} strokeWidth="1.2" />
        </svg>
      );
    case "VS Code":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M17 2l5 4v12l-5 4-10-8 10-8-5-4z" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M7 6L2 12l5 6" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Postman":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <circle cx="12" cy="12" r="9" fill="none" stroke={color} strokeWidth="1.5" />
          <path d="M8 12l3 3 5-6" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <circle cx="12" cy="12" r="8" fill="none" stroke={color} strokeWidth="1.5" />
        </svg>
      );
  }
}

interface SkillCardProps {
  name: string;
  size: string;
  color: string;
  index: number;
  isVisible: boolean;
}

function SkillCard({ name, size, color, index, isVisible }: SkillCardProps) {
  const animationDelay = (index * 0.4) % 5;
  const floatDelay = (index * 0.7) % 6;
  
  const sizeClasses = {
    lg: "w-24 h-28 md:w-28 md:h-32",
    md: "w-20 h-24 md:w-24 md:h-28",
    sm: "w-18 h-22 md:w-20 md:h-24",
  }[size] || "w-20 h-24";

  const iconSize = {
    lg: "w-10 h-10 md:w-12 md:h-12",
    md: "w-8 h-8 md:w-10 md:h-10",
    sm: "w-7 h-7 md:w-8 md:h-8",
  }[size] || "w-8 h-8";

  const textSize = {
    lg: "text-xs md:text-sm",
    md: "text-xs",
    sm: "text-[10px] md:text-xs",
  }[size] || "text-xs";

  return (
    <div
      className={`group relative flex flex-col items-center justify-center ${sizeClasses} rounded-xl 
        bg-[hsl(270,35%,10%,0.5)] border border-[hsl(270,70%,70%,0.1)] backdrop-blur-sm
        transition-all duration-500 animate-star-float hover:border-[hsl(270,70%,70%,0.3)] 
        hover:bg-[hsl(270,35%,12%,0.6)] hover:shadow-[0_0_20px_hsl(270,70%,70%,0.15)]
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
      style={{ 
        transitionDelay: `${index * 80}ms`,
        animationDelay: `${floatDelay}s`,
        animationDuration: `${5 + (index % 3)}s`
      }}
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
          background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)` 
        }}
      />
      
      {/* Icon */}
      <div 
        className={`relative ${iconSize} mb-2 animate-star-pulse`}
        style={{ animationDelay: `${animationDelay}s` }}
      >
        <SkillIcon name={name} color={color} />
      </div>

      {/* Skill name */}
      <span 
        className={`${textSize} font-medium text-muted-foreground/80 group-hover:text-foreground 
          transition-all duration-300 text-center leading-tight`}
      >
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative min-h-[80vh]"
    >
      {/* Floating stars background */}
      <FloatingStars />
      
      {/* Subtle purple nebula effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(270,70%,70%,0.06)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[hsl(280,60%,72%,0.05)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
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
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground/70 text-sm max-w-md mx-auto mb-4">
            
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(270,70%,70%)] to-[hsl(280,60%,72%)] mx-auto rounded-full" />
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              size={skill.size}
              color={skill.color}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
