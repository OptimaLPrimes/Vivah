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
      className={`font-script text-6xl md:text-8xl font-bold gilded-text drop-shadow-lg transition-opacity duration-500 ${
        isAnimated ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
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
          <div key={index} className="w-2 md:w-4" />
        ) : (
          <NameCharacter key={index} char={char} index={index} />
        )
      )}
    </div>
  );
};
