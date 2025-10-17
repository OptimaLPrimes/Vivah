
export const EnvelopeIcon = ({ className, flapOnly = false }: { className?: string; flapOnly?: boolean }) => (
    <svg className={className} viewBox="0 0 100 100" preserveAspectRatio="none">
      {!flapOnly && <path d="M0 20 L50 70 L100 20 L100 90 L0 90 Z" />}
      <path d="M0 20 L50 70 L100 20 Z" />
    </svg>
  );
  
export const SealIcon = ({ className }: { className?: string }) => (
<svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.8"/>
    <path d="M50,15 C60,25 75,25 80,35 C85,45 80,55 75,60 C70,65 60,75 50,85 C40,75 30,65 25,60 C20,55 15,45 20,35 C25,25 40,25 50,15 Z" fill="none" stroke="#fff" strokeWidth="3" opacity="0.5" />
    <text x="50" y="60" fontFamily="Great Vibes, cursive" fontSize="30" fill="#fff" textAnchor="middle">VS</text>
</svg>
);
  
export const ScissorsIcon = ({ className }: { className?: string }) => (
<svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M30,70 A10,10 0 1,1 30,50 A10,10 0 1,1 30,70" fill="none" stroke="currentColor" strokeWidth="4"/>
    <path d="M30,30 A10,10 0 1,1 30,10 A10,10 0 1,1 30,30" fill="none" stroke="currentColor" strokeWidth="4"/>
    <line x1="33" y1="50" x2="45" y2="40" stroke="currentColor" strokeWidth="4"/>
    <line x1="33" y1="30" x2="45" y2="40" stroke="currentColor" strokeWidth="4"/>
    <path d="M48,38 L95,5" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
    <path d="M48,42 L95,95" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
</svg>
);
