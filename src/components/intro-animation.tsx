
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { EnvelopeIcon } from "./icons/envelope-icon";
import { SealIcon } from "./icons/seal-icon";

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
    setTimeout(() => setStep("exiting"), 3000);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1000",
        step === "exiting" ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="relative w-[90vw] max-w-lg md:w-[600px]">
         <div
            className={cn(
                "text-center mb-8 transition-opacity duration-500",
                step !== "closed" ? "opacity-0" : "opacity-100"
            )}>
            <h2 className="font-headline text-3xl md:text-5xl text-primary">
              विवाह सोहळा निमंत्रण 💌
            </h2>
        </div>

        <EnvelopeIcon step={step} />

        {/* Inner Card */}
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-[55%] bg-card transition-transform duration-1000 ease-in-out",
            "flex items-center justify-center",
            step === "revealing" ? "translate-y-[20%]" : "translate-y-[-100%]"
          )}
          style={{ transitionDelay: '0.5s' }}
        >
          <div className="text-center p-8">
            <h3 className="font-headline text-3xl md:text-5xl text-accent">
            Vaishnavi & Suraj
            </h3>
            <p className="mt-2 text-lg text-foreground/80">Are getting married!</p>
          </div>
        </div>

        {/* Envelope Content & Seal */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300",
            step !== "closed" && "opacity-0"
          )}
        >
          <div className="absolute top-[48%] transform -translate-y-1/2">
            <SealIcon
              className={cn(
                "w-20 h-20 text-accent transition-all duration-500",
                step === "opening" && "opacity-0 scale-150"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
