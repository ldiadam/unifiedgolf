"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import locationData from "@/data/locationData.json";
import allData from "@/data/allData.json";
import cityCourseData from "@/data/cityCourseData.json";
import { encodeUrlParam } from "@/utils/url-helpers";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Metadata } from "next";

interface Props {
  params: {
    country: string;
  };
}

export default function CountryPage({ params }: Props) {
  const { country } = params;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  // Verify if country exists in locationData (case-sensitive match)
  const countryData = locationData.find(
    (c) => c.country.toLowerCase() === country.toLowerCase()
  );

  if (!countryData) {
    notFound();
  }

  const handleCountrySelect = (location: any) => {
    setSelectedCountry(location);
  };

  // Get all courses in this country
  const countryCourses = allData.filter((course) => {
    const cityInCountry = countryData.city.includes(course.city);
    return cityInCountry;
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const renderCityList = (cities: string[], country: string) => {
    if (!cities.length) {
      return (
        <div className="py-8 text-center">
          <MapPin className="mx-auto h-12 w-12 text-gray-400 mb-3" />
          <p className="text-sm text-gray-500">
            No cities available in this country yet
          </p>
        </div>
      );
    }
    // Create array of arrays, each inner array has 5 cities max
    const itemsPerColumn = 5;
    const numberOfColumns =
      cities.length <= 5 ? 1 : Math.ceil(cities.length / itemsPerColumn);

    return (
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${numberOfColumns}, minmax(0, 1fr))`,
        }}
      >
        {cities.map((city, index) => (
          <Link
            key={index}
            href={`/courses/${country.toLowerCase()}/${encodeUrlParam(city)}`}
            className="block p-2 hover:bg-primary rounded-md transition-colors"
          >
            <li className="">{city}</li>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto pt-48 lg:pt-42">
      <div className="flex flex-col gap-1">
        <div className="flex justify-start">
          <Button
            variant="ghost"
            asChild
            className="mb-2 text-base hover:bg-green-700/50"
            size={"sm"}
          >
            <Link href="/courses">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Course Selection
            </Link>
          </Button>
        </div>
        {/* <div className="relative">
          {locationData.length > 4 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-2 px-2 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {locationData.map((location: any) => (
              <Popover key={location.id}>
                <PopoverTrigger asChild>
                  <Card
                    className={`flex-shrink-0 cursor-pointer snap-center hover:bg-primary transition-all ${
                      selectedCountry?.id === location.id ? "bg-primary" : ""
                    }`}
                    onClick={() => handleCountrySelect(location)}
                  >
                    <CardContent className="p-1 w-36">
                      <h2 className="text-center font-semibold truncate">
                        {location.id}. {location.country}
                      </h2>
                    </CardContent>
                  </Card>
                </PopoverTrigger>
                <PopoverContent className="w-auto min-w-[200px]">
                  <div className="space-y-2">
                    <h3 className="font-semibold border-b pb-2">
                      {location.country}
                    </h3>
                    {renderCityList(location.city, location.country)}
                  </div>
                </PopoverContent>
              </Popover>
            ))}
          </div>

          {locationData.length > 4 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Separator />
        <h2 className="text-2xl font-bold mt-1">
          Find your {countryData.country} Golf Course by selecting a Golf
          Destination
        </h2>
        <div className="flex justify-start items-center py-2">
          <p className="text-base">
            {countryData.country}, a hidden gem in Asia, offers a unique and
            tranquil golfing experience surrounded by breathtaking landscapes.
          </p>
        </div> */}

        {/* Country Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"> */}
        <div className="relative">
          <div className="relative h-[25rem] rounded-lg">
            {/* Background Image */}
            {/* <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${countryData.image})` }}
            ></div> */}
            <div className="fixed inset-0 -z-10">
              <Image
                src="/jagorawi-golf-&-country-club-img-2.jpg"
                alt="Golf course background"
                fill
                className="object-cover opacity-50"
                priority
              />
            </div>

            {/* Content */}
            <div className="absolute top-0 left-0 right-0 p-2 text-white">
              <div className="bg-red-700/70 rounded-sm mb-6 p-1 max-w-xs">
                <div className="flex justify-center items-center text-sm md:text-base gap-2 ">
                  <MapPin className="h-4 w-4 lg:h-5 lg:w-5" />
                  <h2 className="text-md lg:text-2xl font-bold">
                    {countryData.country} Golf Courses
                  </h2>
                </div>
              </div>

              <div className="my-5 w-full p-4">
                <div className="flex flex-col gap-5 items-center justify-center">
                  <div className="flex flex-row gap-2 md:gap-6 lg:gap-10 items-center justify-center">
                    <div className="bg-black p-2">
                      <h2 className="text-xs md:text-lg lg:text-xl text-white">
                        Reliable
                      </h2>
                    </div>
                    <div className="bg-black p-2">
                      <h2 className="text-xs md:text-lg lg:text-xl text-white">
                        Comprehensive
                      </h2>
                    </div>
                    <div className="bg-black p-2">
                      <h2 className="text-xs md:text-lg lg:text-xl text-white">
                        Professional
                      </h2>
                    </div>
                    <div className="bg-black p-2">
                      <h2 className="text-xs md:text-lg lg:text-xl text-white">
                        Integrity
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 px-4 h-[10rem] flex flex-wrap">
                {countryData.city.map((city) => (
                  <Link
                    key={city}
                    href={`/courses/${countryData.country.toLowerCase()}/${encodeUrlParam(
                      city
                    )}`}
                    className="w-1/2 md:w-1/3 lg:w-1/4 flex items-start p-1"
                  >
                    <div className="bg-white rounded-full w-2 h-2 mt-1.5 mr-2 flex-shrink-0"></div>
                    <span className="text-white text-sm md:text-base">
                      {city}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
