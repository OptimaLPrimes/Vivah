import { Button } from "../ui/button";
import Link from "next/link";
import { CountdownTimer } from "../countdown-timer";
import { AnimatedName } from "../animated-name";

export function HeroSection() {
  const weddingDate = "2025-12-12T13:12:00";

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-center text-white p-4 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col items-center animate-fade-in-up">
        <h2 className="font-headline text-3xl md:text-4xl text-background/80 tracking-tight mb-4">
          We're Getting Married!
        </h2>
        
        <div className="my-2">
          <AnimatedName name="Vaishnavi & Suraj" />
        </div>

        <p className="font-body text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-amber-200 to-primary mb-8">
          12th December 2025 | 1:12 PM
        </p>

        <div className="animate-breathe">
            <CountdownTimer date={weddingDate} />
        </div>

        <div className="flex gap-4 mt-12">
            <Button size="lg" variant="outline" className="bg-transparent text-white border-primary hover:bg-primary/20 hover:text-white" asChild>
                <Link href="#events">View Events</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
