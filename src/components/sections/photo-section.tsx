
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

export function PhotoSection({ imageId = "couple-portrait" }: { imageId?: string }) {
  const photo = PlaceHolderImages.find((img) => img.id === imageId);

  if (!photo) return null;

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-5xl mx-auto overflow-hidden shadow-2xl border-primary/20">
            <div className="relative aspect-[3/2]">
                <Image
                    src={photo.imageUrl}
                    alt={photo.description}
                    data-ai-hint={photo.imageHint}
                    fill
                    className="object-cover"
                />
            </div>
        </Card>
      </div>
    </section>
  );
}
