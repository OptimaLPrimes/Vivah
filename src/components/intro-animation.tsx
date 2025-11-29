
"use client";

import { PaisleyIcon } from "./icons/paisley-icon";

export const IntroAnimation = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background animate-fade-out-intro">
      <div className="relative flex items-center justify-center">
        <PaisleyIcon className="w-64 h-64 text-primary/70 animate-draw-in" />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 animate-reveal-names">
          <h1 className="font-headline text-4xl text-primary-foreground animate-glow-text-soft">
            Vaishnavi
          </h1>
          <span className="font-headline text-2xl text-primary-foreground/80 my-1">&</span>
          <h1 className="font-headline text-4xl text-primary-foreground animate-glow-text-soft">
            Suraj
          </h1>
        </div>
      </div>
    </div>
  );
};
