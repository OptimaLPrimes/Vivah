
"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, Bell, Sparkles } from "lucide-react";

type TimeUnit = "Days" | "Hours" | "Minutes" | "Seconds";
type UnitIcons = {
    [key in TimeUnit]: React.ReactNode;
};

const icons: UnitIcons = {
    Days: <Calendar className="w-4 h-4 md:w-6 md:h-6" />,
    Hours: <Clock className="w-4 h-4 md:w-6 md:h-6" />,
    Minutes: <Bell className="w-4 h-4 md:w-6 md:h-6" />,
    Seconds: <Sparkles className="w-4 h-4 md:w-6 md:h-6" />,
};

const calculateTimeLeft = (date: string) => {
  const difference = +new Date(date) - +new Date();
  let timeLeft = {
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((difference / 1000 / 60) % 60),
      Seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const TimeValue = ({ value, unit }: { value: number; unit: TimeUnit }) => (
  <div className="flex flex-col items-center justify-center w-20 h-20 md:w-32 md:h-32 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
    <div className="text-primary/80 mb-1">{icons[unit]}</div>
    <span className="text-2xl md:text-4xl font-bold text-white tracking-wider">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-widest">
      {unit}
    </span>
  </div>
);

export const CountdownTimer = ({ date }: { date: string }) => {
  const [timeLeft, setTimeLeft] = useState({ Days: 0, Hours: 0, Minutes: 0, Seconds: 0 });

  useEffect(() => {
    // Set initial value on client mount to avoid hydration issues
    setTimeLeft(calculateTimeLeft(date));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);
  
  return (
    <div className="flex items-center justify-center gap-2 md:gap-6">
      {(Object.keys(timeLeft) as TimeUnit[]).map((unit) => (
        <TimeValue key={unit} value={timeLeft[unit]} unit={unit} />
      ))}
    </div>
  );
};
