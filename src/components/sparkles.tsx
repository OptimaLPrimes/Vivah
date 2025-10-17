"use client";

import { useState, useEffect } from "react";

// Simple CSS-based sparkle effect
export const Sparkles = ({ enabled }: { enabled: boolean }) => {
  const [sparkles, setSparkles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (enabled) {
      const sparkleCount = 50;
      const newSparkles = Array.from({ length: sparkleCount }).map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
        };
        return <div key={i} className="absolute rounded-full bg-primary/50 w-1 h-1 animate-sparkle" style={style}></div>;
      });
      setSparkles(newSparkles);
    } else {
      setSparkles([]);
    }
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
      {sparkles}
    </div>
  );
};
