
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { EnvelopeIcon } from "./icons/envelope-icon";
import { SealIcon } from "./icons/seal-icon";
import { AnimatedName } from "./animated-name";

type AnimationStep = "closed" | "opening" | "revealing" | "exiting";

export function IntroAnimation({ onFinish }: { onFinish: () => void }) {
  const [step, setStep] = useState<AnimationStep>("closed");

  useEffect(() => {
    // Automatically start the animation sequence
    const autoOpenTimer = setTimeout(() => {
      handleOpen();
    }, 1000); // 1-second delay before opening

    return () => clearTimeout(autoOpenTimer);
  }, []);


  useEffect(() => {
    if (step === "exiting") {
      const timer = setTimeout(onFinish, 1000); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [step, onFinish]);

  const handleOpen = () => {
    setStep("opening");
    setTimeout(() => setStep("revealing"), 1000);
    setTimeout(() => setStep("exiting"), 4000); // Increased time for new animation
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1000",
        step === "exiting" ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="relative w-[90vw] max-w-lg md:w-[600px]">
        <EnvelopeIcon step={step} />

        {/* Inner Card Content */}
        <div
          className={cn(
            "absolute top-[10%] left-0 w-full h-[55%] bg-card transition-transform duration-1000 ease-in-out",
            "flex flex-col items-center justify-center text-center overflow-hidden",
            step === "revealing"
              ? "translate-y-0"
              : "translate-y-[-120%]",
            step === "exiting" && "opacity-0"
          )}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="text-center">
            <AnimatedName name="Vaishnavi" />
            <p className="font-headline text-4xl text-muted-foreground my-2">&</p>
            <AnimatedName name="Suraj" />
          </div>
        </div>

        {/* Seal */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-500",
            step !== "closed" && "opacity-0 scale-150"
          )}
        >
          <div className="absolute top-[48%] transform -translate-y-1/2">
            <SealIcon
              className={cn(
                "w-20 h-20 text-accent animate-pulse",
                step === "opening" && "animate-none"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
