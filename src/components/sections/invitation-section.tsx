
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, CalendarDays, Clock, MapPin } from "lucide-react";
import { KalashIcon } from "../icons/kalash-icon";
import { AnimatedPaisley } from "../animated-paisley";

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
        
        <Card className="max-w-4xl mx-auto p-4 md:p-8 shadow-2xl bg-background/80 backdrop-blur-sm relative overflow-hidden border-2 border-primary/50 animate-glow-border">
           <AnimatedPaisley position="top-left" />
           <AnimatedPaisley position="top-right" />
           <AnimatedPaisley position="bottom-left" />
           <AnimatedPaisley position="bottom-right" />
           
           <div className="relative z-10">
                <CardContent className="p-4 md:p-8">
                    <p className="font-headline text-2xl text-accent mb-4">
                        Together with their families
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 items-center mb-6 text-center">
                        <div>
                            <h3 className="font-headline text-5xl md:text-7xl font-bold text-primary gilded-text">
                                Vaishnavi
                            </h3>
                        </div>
                        <div className="md:hidden">
                            <p className="font-headline text-3xl text-muted-foreground">&</p>
                        </div>
                        <div>
                            <h3 className="font-headline text-5xl md:text-7xl font-bold text-primary gilded-text">
                                Suraj
                            </h3>
                        </div>
                    </div>
                     <div className="hidden md:block">
                        <p className="font-headline text-4xl text-muted-foreground mb-6">&</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left md:text-center mt-6 text-sm">
                        <div className="space-y-1">
                            <p className="font-semibold text-accent">Ms. Vaishnavi</p>
                            <p className="text-muted-foreground text-xs">(Software Developer)</p>
                            <p>Daughter of Mrs. Sagartai and Dr. Harishchandra Sheshrao Patange Patil,</p>
                            <p className="text-xs text-muted-foreground">(Vice Principal, Yashwant Mahavidyalaya, Nanded)</p>
                            <p>Grandaughter of Shri. Sheshrao Motiram Patange</p>
                          <i>  <p> Sonari, Tq. Himayatnagar, Dist. Nanded</p></i>

        
                             </div>
                         <div className="space-y-1">
                            <p className="font-semibold text-accent">Mr. Suraj</p>
                            <p className="text-muted-foreground text-xs">(Software Developer)</p>
                            <p>Son of Smt. Meenatai and Shri. Dnyandeo Balbhim Rode Patil</p>
                            <p>Grandson of late. Balbhim Kisan Rode Patil</p>
                            <p><i>Jawala, Tq. Jamkhed, Dist. Ahilyanagar</i></p>
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-border space-y-4">
                      <p className="text-lg">
                      💝
                      </p>
                      <div className="flex items-center justify-center gap-2 md:gap-4 font-headline text-xl md:text-3xl font-bold text-accent">
                        <CalendarDays className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                        <span>Friday, 12th December 2025</span>
                      </div>
                       <div className="flex items-center justify-center gap-2 md:gap-4 font-headline text-xl md:text-3xl font-bold text-accent">
                        <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                        <span>at 1:12 PM</span>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-2 text-base md:text-lg">
                         <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                         <span>at Vitthalrao Deshmukh Mangal Karyalay and Lawns, Nanded</span>
                      </div>
                    </div>
                </CardContent>
           </div>
        </Card>

      </div>
    </section>
  );
}
