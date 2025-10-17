"use client";

import { useState, useEffect } from "react";

type TimeUnit = "Days" | "Hours" | "Minutes" | "Seconds";

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
  <div className="flex flex-col items-center">
    <span className="text-4xl md:text-6xl font-bold text-primary tracking-wider">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-sm md:text-base text-white/80 uppercase tracking-widest">
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
    <div className="flex items-center justify-center gap-4 md:gap-8 p-4 rounded-lg bg-black/20 backdrop-blur-sm">
      {(Object.keys(timeLeft) as TimeUnit[]).map((unit) => (
        <TimeValue key={unit} value={timeLeft[unit]} unit={unit} />
      ))}
    </div>
  );
};
