// Inspired by https://www.hyperui.dev/
// Not a component, just the CSS and JSX for a confetti effect.
export const Confetti = () => {
    return (
        <>
        <div
            className="pointer-events-none absolute inset-0 z-50 overflow-hidden"
            aria-hidden="true"
        >
            <div className="absolute left-[10%] top-0 h-3 w-3 -translate-y-full animate-[confetti-fall_4s_ease-in-out_infinite] rounded-full bg-primary"></div>
            <div className="absolute left-[20%] top-0 h-3 w-3 -translate-y-full animate-[confetti-fall_3s_ease-in-out_infinite] rounded-full bg-accent"></div>
            <div className="absolute left-[30%] top-0 h-3 w-3 -translate-y-full animate-[confetti-fall_5s_ease-in-out_infinite] rounded-full bg-primary"></div>
            <div className="absolute left-[40%] top-0 h-3 w-3 -translate-y-full animate-[confetti-fall_3.5s_ease-in-out_infinite] rounded-full bg-accent"></div>
            <div className="absolute left-[50%] top-0 h-3 w-3 -translate-y-full animate-[confetti-fall_4.5s_ease-in-out_infinite] rounded-full bg-primary"></div>
            <div className="absolute left-[60%] top-0 h-3 w-3 -translate-y-full animate-[confetti-fall_6s_ease-in-out_infinite] rounded-full bg-accent"></div>
            <div className="absolute left-[70%] top-0 h-3 w-3 -translate-y-full animate-[confetti-fall_4s_ease-in-out_infinite] rounded-full bg-primary"></div>
            <div className="absolute left-[80%] top-0 h-3 w-3 -translate-y-full animate-[confetti-fall_3s_ease-in-out_infinite] rounded-full bg-accent"></div>
            <div className="absolute left-[90%] top-0 h-3 w-3 -translate-y-full animate-[confetti-fall_5.5s_ease-in-out_infinite] rounded-full bg-primary"></div>
        </div>
        <style>{`
            @keyframes confetti-fall {
                0% { transform: translateY(-100vh) rotate(0deg); }
                100% { transform: translateY(100vh) rotate(1080deg); }
            }
        `}</style>
        </>
    )
}
