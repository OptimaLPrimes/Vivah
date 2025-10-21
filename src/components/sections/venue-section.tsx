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
                <h3 className="font-headline text-3xl font-bold text-accent mb-2">Vitthalrao Deshmukh Mangal Karyalay and Lawns</h3>
                <p className="text-lg font-semibold">विठ्ठलराव देशमुख मंगल कार्यालय</p>
                <p className="text-muted-foreground mb-6">123 Wedding Lane, Garden City, Bengaluru, Karnataka 560001</p>
                
                <h4 className="font-bold mb-2 mt-4">Travel Information</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Nearest Airport: Nanded Airport (Nanded)</li>
                    <li>Nearest Railway Station: Hazur Saheb Railway Station (SBC)</li>
                    <li>🅿️ Parking: available at venue.</li>
                </ul>
                
                <Button size="lg" className="mt-8 w-fit" asChild>
                    <Link href="https://www.google.com/maps/dir//Vitthalrao+Deshmukh+Mangal+Karyalaya,+Pimpalgaon+Mahadeo,+Maharashtra+431605/@19.2125029,77.3483339,646m/data=!3m1!1e3!4m16!1m7!3m6!1s0x3bd1d7fabc540b67:0xe809511c67ce2ff6!2sVitthalrao+Deshmukh+Mangal+Karyalaya!8m2!3d19.2121799!4d77.3489277!16s%2Fg%2F11gh_g05x_!4m7!1m0!1m5!1m1!1s0x3bd1d7fabc540b67:0xe809511c67ce2ff6!2m2!1d77.3489277!2d19.2121799?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                        <Navigation className="mr-2 h-5 w-5" />
                        Get Directions
                    </Link>
                </Button>
            </div>
            <div className="relative min-h-[300px] md:min-h-0">
                {mapImage && (
                    <Link href="https://www.google.com/maps/dir//Vitthalrao+Deshmukh+Mangal+Karyalaya,+Pimpalgaon+Mahadeo,+Maharashtra+431605/@19.2125029,77.3483339,646m/data=!3m1!1e3!4m16!1m7!3m6!1s0x3bd1d7fabc540b67:0xe809511c67ce2ff6!2sVitthalrao+Deshmukh+Mangal+Karyalaya!8m2!3d19.2121799!4d77.3489277!16s%2Fg%2F11gh_g05x_!4m7!1m0!1m5!1m1!1s0x3bd1d7fabc540b67:0xe809511c67ce2ff6!2m2!1d77.3489277!2d19.2121799?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
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
