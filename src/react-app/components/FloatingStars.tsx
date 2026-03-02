// Floating background stars for atmosphere - used across all sections
export default function FloatingStars() {
  const stars = [
    { top: "5%", left: "8%", size: "w-1 h-1", delay: "0s", duration: "10s" },
    { top: "12%", left: "25%", size: "w-1.5 h-1.5", delay: "1.5s", duration: "12s" },
    { top: "8%", left: "45%", size: "w-1 h-1", delay: "0.8s", duration: "9s" },
    { top: "15%", left: "70%", size: "w-1.5 h-1.5", delay: "2.2s", duration: "11s" },
    { top: "10%", left: "90%", size: "w-1 h-1", delay: "1.1s", duration: "8s" },
    { top: "25%", left: "5%", size: "w-1.5 h-1.5", delay: "0.5s", duration: "13s" },
    { top: "35%", left: "15%", size: "w-1 h-1", delay: "2.8s", duration: "10s" },
    { top: "30%", left: "85%", size: "w-1 h-1", delay: "1.8s", duration: "9s" },
    { top: "45%", left: "3%", size: "w-1 h-1", delay: "3.2s", duration: "11s" },
    { top: "50%", left: "95%", size: "w-1.5 h-1.5", delay: "0.3s", duration: "12s" },
    { top: "60%", left: "10%", size: "w-1 h-1", delay: "2.5s", duration: "8s" },
    { top: "65%", left: "92%", size: "w-1 h-1", delay: "1.3s", duration: "10s" },
    { top: "75%", left: "7%", size: "w-1.5 h-1.5", delay: "0.9s", duration: "9s" },
    { top: "80%", left: "88%", size: "w-1 h-1", delay: "2.1s", duration: "11s" },
    { top: "85%", left: "20%", size: "w-1 h-1", delay: "3.5s", duration: "13s" },
    { top: "90%", left: "75%", size: "w-1.5 h-1.5", delay: "1.7s", duration: "10s" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className={`absolute ${star.size} rounded-full bg-gradient-to-br from-white to-[hsl(270,70%,80%)] animate-bg-star-float`}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
            boxShadow: "0 0 6px hsl(270 70% 75% / 0.5), 0 0 12px hsl(280 60% 72% / 0.3)",
          }}
        />
      ))}
      {/* Additional smaller twinkling stars */}
      {stars.slice(0, 8).map((star, i) => (
        <div
          key={`small-${i}`}
          className="absolute w-0.5 h-0.5 rounded-full bg-white/60 animate-twinkle"
          style={{
            top: `${parseInt(star.top) + 5}%`,
            left: `${parseInt(star.left) + 3}%`,
            animationDelay: `${parseFloat(star.delay) + 1}s`,
          }}
        />
      ))}
    </div>
  );
}
