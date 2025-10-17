import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";

export function VenueSection() {
  const mapImage = PlaceHolderImages.find((img) => img.id === "venue-map");
  const venueImage = PlaceHolderImages.find((img) => img.id === "venue-main");

  return (
    <section id="venue" className="bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl mb-4 text-primary">
            The Venue
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            We've chosen a special place to celebrate our special day. We hope you'll love it as much as we do.
          </p>
        </div>

        <Card className="overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-headline text-3xl font-bold text-accent mb-2">The Grand Palace</h3>
                <p className="text-lg font-semibold">Royal Orchid Gardens</p>
                <p className="text-muted-foreground mb-6">123 Wedding Lane, Garden City, Bengaluru, Karnataka 560001</p>
                
                <h4 className="font-bold mb-2 mt-4">Travel Information</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Nearest Airport: Kempegowda International Airport (BLR)</li>
                    <li>Nearest Railway Station: Bengaluru City Railway Station (SBC)</li>
                    <li>Ample parking available at the venue.</li>
                </ul>
                
                <Button size="lg" className="mt-8 w-fit" asChild>
                    <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                        <Navigation className="mr-2 h-5 w-5" />
                        Get Directions
                    </Link>
                </Button>
            </div>
            <div className="relative min-h-[300px] md:min-h-0">
                {mapImage && (
                    <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      <Image 
                          src={mapImage.imageUrl}
                          alt={mapImage.description}
                          data-ai-hint={mapImage.imageHint}
                          fill
                          className="object-cover"
                      />
                    </Link>
                )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
