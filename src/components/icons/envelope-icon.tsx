
import { cn } from "@/lib/utils";

type AnimationStep = "closed" | "opening" | "revealing" | "exiting";

export const EnvelopeIcon = ({
  className,
  step,
}: {
  className?: string;
  step: AnimationStep;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 400"
    className={cn("w-full h-auto drop-shadow-2xl", className)}
  >
    <defs>
      <linearGradient id="envelopeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 0.9 }} />
      </linearGradient>
    </defs>
    
    {/* Main body */}
    <rect x="0" y="100" width="600" height="300" fill="url(#envelopeGradient)" />
    
    {/* Side flaps */}
    <path d="M 0 100 L 300 250 L 0 400 Z" fill="hsl(var(--primary))" opacity="0.5" />
    <path d="M 600 100 L 300 250 L 600 400 Z" fill="hsl(var(--primary))" opacity="0.5" />

    {/* Bottom flap */}
    <path d="M 0 400 L 300 250 L 600 400 Z" fill="hsl(var(--primary))" opacity="0.7" />

    {/* Top flap */}
    <path
      d="M 0 100 L 300 250 L 600 100 Z"
      fill="hsl(var(--accent))"
      className={cn(
        "transition-transform duration-1000 ease-in-out",
      )}
      style={{
        transformOrigin: "center 100px",
        transform:
          step === "opening" || step === "revealing" || step === "exiting"
            ? "rotateX(-180deg)"
            : "rotateX(0deg)",
      }}
    />
  </svg>
);
