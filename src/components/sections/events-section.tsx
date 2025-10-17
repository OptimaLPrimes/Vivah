import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gem, GlassWater, Heart, Music, Sparkles } from "lucide-react";
import { ReactNode } from "react";

type Event = {
  icon: ReactNode;
  name: string;
  date: string;
  time: string;
  description: string;
};

const events: Event[] = [
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    name: "Mehndi Ceremony",
    date: "Thursday, 11th Dec 2025",
    time: "4:00 PM onwards",
    description: "An evening of henna, folk music, and joyous celebrations.",
  },
  {
    icon: <Music className="h-8 w-8 text-primary" />,
    name: "Sangeet Night",
    date: "Thursday, 11th Dec 2025",
    time: "7:00 PM onwards",
    description: "Join us for a night of music, dance performances, and fun!",
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    name: "Wedding Ceremony",
    date: "Friday, 12th Dec 2025",
    time: "1:12 PM",
    description: "The auspicious wedding ceremony where we tie the knot.",
  },
  {
    icon: <GlassWater className="h-8 w-8 text-primary" />,
    name: "Grand Reception",
    date: "Friday, 12th Dec 2025",
    time: "7:30 PM onwards",
    description: "Celebrate with us at the reception with dinner and dancing.",
  },
];

export function EventsSection() {
  return (
    <section id="events" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl mb-4 text-primary">
            Wedding Festivities
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Your presence is the only gift we need, but your blessings are cherished. Join us as we celebrate the beginning of our forever.
          </p>
        </div>

        <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
                {events.map((event, index) => (
                    <div key={event.name} className={`flex items-center w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        <div className="md:w-5/12">
                            <Card className={`shadow-lg border-primary/20 hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className={`md:hidden ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>{event.icon}</div>
                                    <CardTitle className={`font-headline text-2xl text-accent flex-1 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>{event.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-semibold">{event.date}</p>
                                    <p className="text-muted-foreground mb-2">{event.time}</p>
                                    <p>{event.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-primary">
                            {event.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
