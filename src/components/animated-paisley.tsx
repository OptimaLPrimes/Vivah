"use client";

import { PaisleyIcon } from "./icons/paisley-icon";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const positionClasses: Record<Position, string> = {
  "top-left": "-top-16 -left-16",
  "top-right": "-top-16 -right-16 transform rotate-90",
  "bottom-left": "-bottom-16 -left-16 transform -rotate-90",
  "bottom-right": "-bottom-16 -right-16 transform rotate-180",
};

export const AnimatedPaisley = ({ position }: { position: Position }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "absolute text-primary/10 opacity-80 transition-opacity duration-1000",
        positionClasses[position],
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <PaisleyIcon
        className={cn(
          "w-64 h-64",
          inView && "animate-draw-in"
        )}
      />
    </div>
  );
};
