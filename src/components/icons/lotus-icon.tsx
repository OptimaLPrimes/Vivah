import { cn } from "@/lib/utils";

export const LotusIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={cn("w-64 h-64", className)}
    {...props}
  >
    <g className="fill-current">
      {/* Outer Petals */}
      <path
        d="M50,85 C35,85 30,70 30,55 S35,25 50,25 S70,40 70,55 S65,85 50,85"
        style={{ '--petal-rotation': '-45deg' } as React.CSSProperties}
        className="animate-bloom-petal"
      />
      <path
        d="M50,85 C35,85 30,70 30,55 S35,25 50,25 S70,40 70,55 S65,85 50,85"
        style={{ '--petal-rotation': '45deg', animationDelay: '0.1s' } as React.CSSProperties}
        className="animate-bloom-petal"
        transform-origin="50 85" transform="rotate(90 50 50)"
      />
      <path
        d="M50,85 C35,85 30,70 30,55 S35,25 50,25 S70,40 70,55 S65,85 50,85"
        style={{ '--petal-rotation': '-135deg', animationDelay: '0.2s' } as React.CSSProperties}
        className="animate-bloom-petal"
        transform-origin="50 85" transform="rotate(180 50 50)"
      />
      <path
        d="M50,85 C35,85 30,70 30,55 S35,25 50,25 S70,40 70,55 S65,85 50,85"
        style={{ '--petal-rotation': '135deg', animationDelay: '0.3s' } as React.CSSProperties}
        className="animate-bloom-petal"
        transform-origin="50 85" transform="rotate(270 50 50)"
      />

      {/* Inner Petals */}
      <path
        d="M50,75 C40,75 38,65 38,55 S40,35 50,35 S62,45 62,55 S60,75 50,75"
        style={{ '--petal-rotation': '-30deg', animationDelay: '0.4s' } as React.CSSProperties}
        className="animate-bloom-petal opacity-80"
        transform-origin="50 75" transform="rotate(45 50 50)"
      />
      <path
        d="M50,75 C40,75 38,65 38,55 S40,35 50,35 S62,45 62,55 S60,75 50,75"
        style={{ '--petal-rotation': '30deg', animationDelay: '0.5s' } as React.CSSProperties}
        className="animate-bloom-petal opacity-80"
        transform-origin="50 75" transform="rotate(-45 50 50)"
      />
       <path
        d="M50,75 C40,75 38,65 38,55 S40,35 50,35 S62,45 62,55 S60,75 50,75"
        style={{ '--petal-rotation': '-120deg', animationDelay: '0.6s' } as React.CSSProperties}
        className="animate-bloom-petal opacity-80"
        transform-origin="50 75" transform="rotate(135 50 50)"
      />
       <path
        d="M50,75 C40,75 38,65 38,55 S40,35 50,35 S62,45 62,55 S60,75 50,75"
        style={{ '--petal-rotation': '120deg', animationDelay: '0.7s' } as React.CSSProperties}
        className="animate-bloom-petal opacity-80"
        transform-origin="50 75" transform="rotate(-135 50 50)"
      />
    </g>
  </svg>
);
