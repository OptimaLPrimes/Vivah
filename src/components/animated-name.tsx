
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
      className={`font-script text-7xl md:text-9xl font-bold text-background/80 drop-shadow-lg transition-opacity duration-500 animate-breathe ${
        isAnimated ? "opacity-100" : "opacity-0"
      }`}
      style={{ 
        transitionDelay: `${index * 50}ms`,
        animationDelay: `${index * 150}ms` 
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
          <div key={index} className="w-4 md:w-6" />
        ) : (
          <NameCharacter key={index} char={char} index={index} />
        )
      )}
    </div>
  );
};
