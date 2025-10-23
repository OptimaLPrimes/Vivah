
"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary/30 pt-12">
        <div className="container mx-auto py-12 px-4 md:px-6 text-center">
            <h3 className="font-headline text-3xl mb-4 text-primary">#VaishnaviWedsSuraj</h3>
            <p className="mb-6 max-w-2xl mx-auto">
                For any queries, feel free to reach out to our family. We can't wait to celebrate with you!
            </p>
            <div className="flex justify-center gap-4 mb-8">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-6 w-6" />
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-6 w-6" />
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-6 w-6" />
                    </Link>
                </Button>
            </div>
            <p className="text-muted-foreground text-sm">
                &copy; {year} Vaishnavi & Suraj. All rights reserved.
            </p>
             <p className="text-muted-foreground text-xs mt-2">
                Crafted with love by Firebase Studio.
            </p>
        </div>
    </footer>
  );
}
