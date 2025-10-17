import { cn } from "@/lib/utils";

export const KalashIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-6 h-6", className)}
  >
    <path d="M6 14c0-2.21 1.79-4 4-4h4c2.21 0 4 1.79 4 4v2H6v-2zm13 3c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-1h14v1zM8 9.5V8h8v1.5c0-2.21-1.79-4-4-4S8 7.29 8 9.5zM12 2L9 5h6l-3-3z" />
  </svg>
);
