import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { PaisleyIcon } from "../icons/paisley-icon";

export function InvitationSection() {
  return (
    <section id="invitation" className="bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-headline text-4xl md:text-5xl mb-4 text-primary">
          You Are Invited
        </h2>
        <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
          With joyful hearts, we, Vaishnavi and Suraj, invite you to share in our celebration of love as we exchange vows and begin our new life together.
        </p>
        
        <Card className="max-w-3xl mx-auto p-4 md:p-8 shadow-2xl bg-background/80 backdrop-blur-sm relative overflow-hidden border-2 border-primary/50 animate-glow-border">
           <div className="absolute -top-16 -left-16 text-primary/10 opacity-50">
             <PaisleyIcon className="w-64 h-64" />
           </div>
           <div className="absolute -bottom-16 -right-16 text-primary/10 opacity-50 transform rotate-180">
             <PaisleyIcon className="w-64 h-64" />
           </div>
           <div className="relative z-10">
                <CardContent className="p-4 md:p-8">
                    <p className="font-headline text-2xl text-accent mb-4">
                        Together with their families
                    </p>
                    <h3 className="font-headline text-5xl md:text-7xl font-bold text-primary mb-2">
                        Vaishnavi
                    </h3>
                    <p className="font-headline text-3xl text-muted-foreground mb-2">&</p>
                    <h3 className="font-headline text-5xl md:text-7xl font-bold text-primary mb-6">
                        Suraj
                    </h3>
                    <p className="text-lg mb-2">
                        request the pleasure of your company at their wedding celebration on
                    </p>
                    <p className="font-headline text-2xl md:text-3xl font-bold text-accent mb-6">
                        Friday, 12th December 2025 at 1:12 PM
                    </p>
                    <p className="text-lg">
                        at The Grand Palace, Royal Orchid Gardens, Bengaluru
                    </p>
                </CardContent>
           </div>
        </Card>

        <div className="mt-12">
          <Button size="lg">
            <Download className="mr-2 h-5 w-5" />
            Download Invitation (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}
