
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartHandshake, Music, Paintbrush, GlassWater } from "lucide-react";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

type Event = {
  icon: ReactNode;
  name: string;
  date: string;
  time: string;
  description: string;
};

const events: Event[] = [
  {
    icon: <Paintbrush className="h-8 w-8 text-white" />,
    name: "Mehndi Ceremony",
    date: "Thursday, 11th Dec 2025",
    time: "4:00 PM onwards",
    description: "An evening of henna, folk music, and joyous celebrations.",
  },
  {
    icon: <Music className="h-8 w-8 text-white" />,
    name: "Sangeet Night",
    date: "Thursday, 11th Dec 2025",
    time: "7:00 PM onwards",
    description: "Join us for a night of music, dance performances, and fun!",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-white" />,
    name: "Wedding Ceremony",
    date: "Friday, 12th Dec 2025",
    time: "1:12 PM",
    description: "The auspicious wedding ceremony where we tie the knot.",
  },
  {
    icon: <GlassWater className="h-8 w-8 text-white" />,
    name: "Grand Reception",
    date: "Saturday, 20th Dec 2025",
    time: "TBD",
    description: "Celebrate with us at the reception with dinner and dancing.",
  },
];

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center w-full transition-all duration-1000",
        "md:justify-start",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="md:w-5/12 w-full">
        <Card
          className={cn(
            "shadow-lg border-primary/20 hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 transform-gpu",
            "bg-gradient-to-br from-background to-secondary/50 hover:shadow-xl"
          )}
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="md:hidden flex bg-primary p-3 rounded-full border-4 border-background shadow-lg">
              {event.icon}
            </div>
            <CardTitle
              className={cn(
                "font-headline text-2xl text-accent flex-1",
              )}
            >
              {event.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">{event.date}</p>
            <p className="text-muted-foreground mb-2">{event.time}</p>
            <p>{event.description}</p>
          </CardContent>
        </Card>
      </div>
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-primary p-3 rounded-full border-4 border-background shadow-lg">
        {event.icon}
      </div>
    </div>
  );
};


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
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <EventCard key={event.name} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
