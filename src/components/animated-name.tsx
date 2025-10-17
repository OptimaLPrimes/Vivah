"use client";

import { useEffect, useState } from "react";

const NameCharacter = ({ char, index }: { char: string; index: number }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <svg
      className="w-10 h-10 md:w-20 md:h-20"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="50%"
        dy=".35em"
        textAnchor="middle"
        className={`font-headline text-6xl md:text-9xl font-bold fill-primary drop-shadow-lg ${
          isAnimated ? "animate-draw-letter-fill" : ""
        }`}
        style={{ fillOpacity: 0 }}
      >
        <tspan
          className={isAnimated ? "animate-draw-letter" : ""}
          style={{ stroke: "hsl(var(--primary))", strokeWidth: 1 }}
        >
          {char}
        </tspan>
      </text>
    </svg>
  );
};


export const AnimatedName = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center justify-center flex-wrap">
      {name.split("").map((char, index) =>
        char === " " ? (
          <div key={index} className="w-4 md:w-8" />
        ) : (
          <NameCharacter key={index} char={char} index={index} />
        )
      )}
    </div>
  );
};
