
"use client";

import { useEffect, useState } from "react";

const NameCharacter = ({ char, index }: { char: string; index: number }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <span
      className={`font-headline text-6xl md:text-8xl font-bold text-primary transition-all duration-500 transform-gpu ${
        isAnimated ? "opacity-100 scale-100" : "opacity-0 scale-125"
      }`}
      style={{ 
        textShadow: '0 0 10px hsl(var(--primary) / 0.7), 0 0 20px hsl(var(--primary) / 0.5), 0 0 35px hsl(var(--primary) / 0.3)',
        transitionDelay: `${index * 50}ms`,
      }}
    >
      {char}
    </span>
  );
};


export const AnimatedName = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center justify-center flex-wrap">
      {name.split("").map((char, index) =>
        char === " " ? (
          <div key={index} className="w-2 md:w-6" />
        ) : (
          <NameCharacter key={index} char={char} index={index} />
        )
      )}
    </div>
  );
};
