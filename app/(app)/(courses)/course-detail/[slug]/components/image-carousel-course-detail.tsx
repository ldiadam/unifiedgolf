import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Image {
  url: string;
  alt: string;
}

export default function ImageCarousel({ images }: { images: Image[] }) {
  if (!images || images.length === 0) {
    return (
      <div className="relative h-64 md:h-96 w-full mb-6 rounded-lg overflow-hidden bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          No images available
        </div>
      </div>
    );
  }

  return (
    <Carousel className="relative h-64 md:h-96 w-full mb-6">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg">
              <Image
                src={image.url ? image.url : "/no-image.jpg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
