
"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { EnvelopeIcon, ScissorsIcon, SealIcon } from "./icons/intro-icons";

type AnimationStep = "closed" | "opening" | "cutting" | "revealing" | "finished";

export const IntroAnimation = ({ onFinish }: { onFinish: () => void }) => {
  const [step, setStep] = useState<AnimationStep>("closed");

  useEffect(() => {
    if (step === "opening") {
      const timer = setTimeout(() => setStep("cutting"), 1500); // Duration for flap animation
      return () => clearTimeout(timer);
    }
    if (step === "cutting") {
      const timer = setTimeout(() => setStep("revealing"), 2500); // Duration for scissor animation
      return () => clearTimeout(timer);
    }
    if (step === "revealing") {
      const timer = setTimeout(() => {
        setStep("finished");
        onFinish();
      }, 1200); // Duration for screen split
      return () => clearTimeout(timer);
    }
  }, [step, onFinish]);

  const handleOpen = () => {
    if (step === "closed") {
      setStep("opening");
    }
  };

  const isRevealing = step === "revealing" || step === "finished";

  return (
    <div className={cn(
        "fixed inset-0 z-[100] h-full w-full overflow-hidden transition-opacity duration-1000",
        isRevealing ? "bg-transparent" : "bg-gradient-to-br from-amber-50 to-pink-100"
    )}>
      {/* Top half for reveal */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-1/2 w-full transition-transform duration-1000 ease-in-out",
        isRevealing ? "-translate-y-full" : "translate-y-0"
      )}>
        <div className="absolute bottom-0 left-0 right-0 h-full w-full bg-gradient-to-br from-amber-50 to-pink-100" />
      </div>
      
      {/* Bottom half for reveal */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-1/2 w-full transition-transform duration-1000 ease-in-out",
        isRevealing ? "translate-y-full" : "translate-y-0"
      )}>
        <div className="absolute top-0 left-0 right-0 h-full w-full bg-gradient-to-br from-amber-50 to-pink-100" />
      </div>


      {/* Scissors */}
      <div className={cn(
          "absolute inset-0 z-40 flex items-center justify-center transition-opacity duration-300",
          step === "cutting" ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
          <ScissorsIcon className="absolute w-48 h-48 text-gray-700 animate-cut-left" />
          <ScissorsIcon className="absolute w-48 h-48 text-gray-700 animate-cut-right" />
      </div>
      
      {/* Sparkle Particles on cut */}
      <div className={cn(
          "absolute top-1/2 left-0 w-full h-1 flex items-center justify-center z-50",
           step === "cutting" ? "opacity-100" : "opacity-0"
      )}>
        {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-sparkle-burst" style={{
                left: '50%',
                animationDelay: `${1.5 + i * 0.02}s`
            }}/>
        ))}
      </div>


      {/* Envelope and Content */}
      <div
        className={cn(
          "absolute inset-0 z-30 flex flex-col items-center justify-center transition-all duration-1000",
          isRevealing ? "opacity-0 scale-95" : "opacity-100 scale-100"
        )}
      >
        <div className={cn(
            "relative w-[90vw] max-w-lg aspect-[1.5/1] transition-transform duration-500",
            step === "closed" && "animate-float"
        )}>
            {/* Envelope Body */}
            <EnvelopeIcon className="absolute inset-0 w-full h-full text-maroon drop-shadow-2xl" />

            {/* Invitation Card inside */}
            <div className={cn(
                "absolute top-[2%] left-[2%] w-[96%] h-[96%] bg-cream flex flex-col items-center justify-center transition-transform duration-1000 ease-out",
                step === "opening" || step === "cutting" ? "translate-y-[-45%]" : "translate-y-0"
            )}>
                 <p className="font-script text-4xl md:text-6xl text-maroon">Vaishnavi & Suraj</p>
                 <p className="font-headline text-lg md:text-xl text-gold mt-2">request your presence</p>
            </div>

            {/* Envelope Flap */}
            <EnvelopeIcon flapOnly={true} className={cn(
                "absolute inset-0 w-full h-full text-maroon transition-transform duration-1000 ease-out origin-top",
                step === "opening" || step === "cutting" ? "animate-flap-open" : ""
            )} />
            
            {/* Seal */}
            <SealIcon className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+10%)] w-20 h-20 text-gold transition-all duration-500",
                step !== "closed" ? "opacity-0 scale-0" : "opacity-100 scale-100"
            )} />
        </div>

        <div className={cn(
            "text-center mt-8 transition-opacity duration-500",
             step !== "closed" && "opacity-0 pointer-events-none"
        )}>
            <p className="font-headline text-3xl text-maroon mb-2">You're Invited</p>
            <p className="font-script text-5xl text-gold mb-8">Vaishnavi & Suraj</p>
            <Button size="lg" onClick={handleOpen} className="bg-gold text-maroon hover:bg-gold/90 animate-pulse">
                Open Invitation
            </Button>
        </div>
      </div>

       <style jsx>{`
        .text-maroon { color: #800000; }
        .text-gold { color: #D4AF37; }
        .bg-gold { background-color: #D4AF37; }
        .bg-cream { background-color: #FFFDD0; }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes flap-open {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(180deg); }
        }
        .animate-flap-open {
            animation: flap-open 1s ease-in-out forwards;
            animation-delay: 0.2s;
        }
        @keyframes cut-left {
            0% { transform: translateX(-150%) translateY(50%) rotate(-30deg); }
            30% { transform: translateX(-55%) translateY(0) rotate(0deg); }
            60% { transform: translateX(-50%) translateY(0) rotate(0deg) scaleX(1); }
            70% { transform: translateX(-50%) translateY(0) rotate(5deg) scaleX(0.9); }
            100% { transform: translateX(-50%) translateY(0) rotate(5deg) scaleX(0.9); }
        }
        .animate-cut-left {
            transform-origin: bottom right;
            animation: cut-left 2.5s ease-out forwards;
        }
        @keyframes cut-right {
            0% { transform: translateX(150%) translateY(50%) rotate(30deg) scaleX(-1); }
            30% { transform: translateX(55%) translateY(0) rotate(0deg) scaleX(-1); }
            60% { transform: translateX(50%) translateY(0) rotate(0deg) scaleX(-1); }
            70% { transform: translateX(50%) translateY(0) rotate(-5deg) scaleX(-0.9); }
            100% { transform: translateX(50%) translateY(0) rotate(-5deg) scaleX(-0.9); }
        }
        .animate-cut-right {
            transform-origin: bottom left;
            animation: cut-right 2.5s ease-out forwards;
        }
        @keyframes sparkle-burst {
            0% { transform: scale(0) translateX(0); opacity: 1; }
            50% { opacity: 1; }
            100% {
                transform: scale(1.5) translateX(${Math.random() * 100 - 50}vw) translateY(${Math.random() * 40 - 20}px);
                opacity: 0;
            }
        }
        .animate-sparkle-burst {
            animation-name: sparkle-burst;
            animation-duration: 1s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};
