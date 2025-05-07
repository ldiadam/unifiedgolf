import React from "react";
import Link from "next/link";
import locationData from "@/data/locationData.json";
import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Assuming Shadcn provides Carousel component
import { encodeUrlParam } from "@/utils/url-helpers";

export default function CoursesPage() {
  return (
    <div className="container mx-auto pt-44">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">B. Course Details</h1>
        <Separator />
        <p className="text-lg mb-2">
          Select a country to view available golf courses:
        </p>

        {/* Shadcn Carousel Component for Images */}
        <Carousel className="relative">
          <CarouselContent>
            {locationData.map((country, index) => (
              <CarouselItem key={index}>
                <div className="relative h-80 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${country.image})` }}
                  ></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

                  {/* Content */}
                  <div className="absolute top-0 left-0 right-0 p-10 text-white">
                    <div className="bg-green-700 rounded-xl mb-6">
                      <div className="flex justify-center items-center text-sm md:text-base gap-2">
                        <MapPin className="h-4 w-4 lg:h-6 lg:w-6" />
                        <h2 className="text-md lg:text-2xl font-bold mb-1">
                          {country.country} Golf Courses
                        </h2>
                      </div>
                    </div>

                    <div className="mt-2 h-[175px] bg-card/50 rounded-xl p-2">
                      <div className="flex flex-col flex-wrap gap-1 max-h-40">
                        {country.city.map((city, index) => (
                          <Link
                            key={index}
                            href={`/courses/${country.country.toLowerCase()}/${encodeUrlParam(
                              city
                            )}`}
                            className="w-1/5 min-w-24 pr-2"
                          >
                            <span className="bg-green-700/60 hover:bg-green-600 px-2 py-1 rounded text-sm lg:text-md transition-colors duration-200 hover:text-white truncate block">
                              {city}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-4 bg-black/20 text-white hover:bg-black/50" />
          <CarouselNext className="right-2 md:right-4 bg-black/20 text-white hover:bg-black/50" />
        </Carousel>
      </div>
    </div>
  );
}
