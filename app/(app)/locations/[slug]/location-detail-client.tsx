"use client";

import { Button } from "@/components/ui/button";
import { Location } from "@/lib/types";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BookingForm } from "./components/booking-form";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface LocationDetailClientProps {
  location: Location;
}

export function LocationDetailClient({ location }: LocationDetailClientProps) {
  const router = useRouter();
  return (
    <div className="container mx-auto my-16">
      <Button variant="outline" className="mb-8" onClick={() => router.back()}>
        Back to Locations
      </Button>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 my-auto">
          <Carousel
            opts={{
              align: "start",
            }}
            className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={location.imageUrl}
                  alt={location.name}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{location.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={16} />
            <span className="text-gray-600">
              {location.city}, {location.country}
            </span>
          </div>
          <div className="flex items-center mb-4">
            <Star className="text-yellow-500 mr-2" />
            <span className="text-lg font-semibold">
              {location.rating} ({location.reviews} reviews)
            </span>
          </div>
          <p className="text-lg mb-4">{location.description}</p>
          <div className="text-3xl font-bold text-blue-600 mb-4">
            ${location.pricePerDay} / day
          </div>
          <BookingForm location={location} />
        </div>
      </div>
    </div>
  );
}
