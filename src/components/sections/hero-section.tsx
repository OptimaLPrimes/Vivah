import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import Link from "next/link";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "couple-hero");

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-center text-white p-4 pt-20">
      <div className="absolute inset-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center animate-fade-in-up">
        <h2 className="font-headline text-4xl md:text-6xl text-background/80 tracking-tight">
          We're Getting Married!
        </h2>
        <h1 className="font-headline text-6xl md:text-9xl font-bold my-4 text-primary drop-shadow-lg">
          Vaishnavi & Suraj
        </h1>
        <p className="font-body text-xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary via-amber-200 to-primary mb-8">
          12th December 2025 | 1:12 PM
        </p>
        <div className="flex gap-4">
            <Button size="lg" variant="outline" className="bg-transparent text-white border-primary hover:bg-primary/20 hover:text-white" asChild>
                <Link href="#events">View Events</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
