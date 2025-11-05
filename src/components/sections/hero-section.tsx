
import { Button } from "../ui/button";
import Link from "next/link";
import { CountdownTimer } from "../countdown-timer";
import { AnimatedName } from "../animated-name";
import { ArrowRight, MoveDown } from "lucide-react";

export function HeroSection() {
  const weddingDate = "2025-12-12T13:12:00";

  return (
    <section id="home" className="relative h-svh min-h-[700px] w-full flex items-center justify-center text-center text-white p-4 dark">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-rose-950 opacity-90" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-[0.03]" />
      
      <div className="relative z-10 flex flex-col items-center animate-fade-in-up gap-4">
        <h1 className="font-headline text-2xl md:text-4xl text-primary/90 tracking-widest">
          ॥ श्री गणेशाय नमः ॥
        </h1>
        
        <div className="my-2">
          <AnimatedName name="Vaishnavi & Suraj" />
        </div>

        <p className="font-body text-base md:text-xl font-semibold text-foreground/80 mb-6">
          December 12, 2025 at 1:12 PM
        </p>

        <CountdownTimer date={weddingDate} />

        <div className="flex gap-4 mt-12">
            <Button 
                variant="outline"
                size="lg" 
                className="group rounded-full bg-transparent text-lg font-bold text-white border-primary/50 hover:bg-primary/20 hover:text-white py-6 px-8 md:py-7 md:px-10 transition-all duration-300"
                asChild
            >
                <Link href="#events">
                  View Event Schedule 
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <MoveDown className="w-6 h-6 text-primary/50" />
      </div>
    </section>
  );
}
