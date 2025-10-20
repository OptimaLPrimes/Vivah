
import { cn } from "@/lib/utils";

export const SealIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={cn("w-20 h-20", className)}
  >
    <defs>
      <filter id="wobble">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.1"
          numOctaves="1"
          result="warp"
        />
        <feDisplacementMap
          xChannelSelector="R"
          yChannelSelector="G"
          scale="3"
          in="SourceGraphic"
          in2="warp"
        />
      </filter>
    </defs>
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="currentColor"
      filter="url(#wobble)"
    />
    <text
      x="50"
      y="58"
      fontFamily="Great Vibes, cursive"
      fontSize="40"
      fill="hsl(var(--accent-foreground))"
      textAnchor="middle"
    >
      V&S
    </text>
  </svg>
);
