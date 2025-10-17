"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Music, Sparkles as SparklesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { KalashIcon } from "../icons/kalash-icon";
import { Sparkles } from "../sparkles";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#invitation", label: "Invitation" },
  { href: "#events", label: "Events" },
  { href: "#venue", label: "Venue" },
  { href: "#gallery", label: "Gallery" },
  { href: "#guestbook", label: "Guestbook" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sparklesEnabled, setSparklesEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSparkles = () => {
    setSparklesEnabled(prev => !prev);
  }

  return (
    <>
      <Sparkles enabled={sparklesEnabled} />
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="#home" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary">
            <KalashIcon className="h-8 w-8 text-primary" />
            <span className="hidden sm:inline">Vivah Utsav</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Button key={item.label} variant="ghost" asChild>
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
            <Button variant="ghost" size="icon" aria-label="Toggle Music">
              <Music className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Toggle Sparkles" onClick={toggleSparkles} className={cn(sparklesEnabled && "text-primary")}>
              <SparklesIcon className="h-5 w-5" />
            </Button>
          </nav>
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-background">
                <div className="flex flex-col items-center justify-center h-full">
                  <nav className="flex flex-col items-center gap-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-2xl font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="flex items-center gap-4 mt-4">
                      <Button variant="ghost" size="icon" aria-label="Toggle Music">
                         <Music className="h-6 w-6" />
                      </Button>
                       <Button variant="ghost" size="icon" aria-label="Toggle Sparkles" onClick={toggleSparkles} className={cn("h-10 w-10", sparklesEnabled && "text-primary")}>
                        <SparklesIcon className="h-6 w-6" />
                      </Button>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
