
"use client";

import { useState, useEffect } from 'react';
import { Calendar, Clock, Heart, Hourglass } from 'lucide-react';

const CountdownRing = ({ radius, stroke, progress, colorStart, colorEnd, id }: { radius: number, stroke: number, progress: number, colorStart: string, colorEnd: string, id: string }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
    <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: colorStart, stopOpacity:1}} />
            <stop offset="100%" style={{stopColor: colorEnd, stopOpacity:1}} />
        </linearGradient>
    </defs>
    <circle
      stroke={`url(#${id})`}
      fill="transparent"
      strokeWidth={stroke}
      strokeDasharray={circumference + ' ' + circumference}
      style={{ strokeDashoffset, strokeLinecap: 'round', transition: 'stroke-dashoffset 0.35s linear', transform: 'rotate(-90deg)', transformOrigin: 'center' }}
      r={normalizedRadius}
      cx={radius}
      cy={radius}
    />
    </>
  );
};

const CountdownSegment = ({ value, label, icon }: { value: number, label: string, icon: React.ReactNode }) => (
    <div className="flex flex-col items-center justify-center text-center transition-all duration-300">
        <span className="font-headline text-3xl md:text-4xl font-bold text-white tabular-nums tracking-tighter">
            {String(value).padStart(2, '0')}
        </span>
        <div className="flex items-center gap-1">
          {icon}
          <span className="text-xs md:text-sm text-white/70 uppercase tracking-widest">{label}</span>
        </div>
    </div>
);


export const StylishCountdown = ({ date }: { date: string }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(date) - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Set initial value on client mount to avoid hydration issues
        setTimeLeft(calculateTimeLeft());
    
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, [date]);

    const daysProgress = (timeLeft.days / 365) * 100;
    const hoursProgress = (timeLeft.hours / 24) * 100;
    const minutesProgress = (timeLeft.minutes / 60) * 100;
    const secondsProgress = (timeLeft.seconds / 60) * 100;

    const size = 280;
    const radius = size / 2;
    const stroke = 12;

    return (
        <div className="relative" style={{ width: size, height: size }}>
             <svg
                className="absolute inset-0"
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
            >
                <circle cx={radius} cy={radius} r={radius - stroke} stroke="hsl(var(--primary) / 0.1)" strokeWidth={stroke} fill="transparent" />
                <CountdownRing radius={radius} stroke={stroke} progress={daysProgress} colorStart="hsl(var(--primary))" colorEnd="#FFD700" id="days-gradient"/>
            </svg>
            <svg
                className="absolute inset-0 transform scale-[0.7]"
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
            >
                <circle cx={radius} cy={radius} r={radius - stroke} stroke="hsl(var(--accent) / 0.1)" strokeWidth={stroke} fill="transparent" />
                 <CountdownRing radius={radius} stroke={stroke} progress={hoursProgress} colorStart="hsl(var(--accent))" colorEnd="#87CEEB" id="hours-gradient"/>
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-white">
                    <CountdownSegment value={timeLeft.days} label="Days" icon={<Calendar className="w-3 h-3"/>} />
                    <CountdownSegment value={timeLeft.hours} label="Hours" icon={<Clock className="w-3 h-3"/>} />
                    <CountdownSegment value={timeLeft.minutes} label="Minutes" icon={<Hourglass className="w-3 h-3"/>} />
                    <CountdownSegment value={timeLeft.seconds} label="Seconds" icon={<Heart className="w-3 h-3"/>} />
                </div>
            </div>
        </div>
    );
};
