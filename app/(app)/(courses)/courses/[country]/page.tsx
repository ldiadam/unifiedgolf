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
import Tag from "@/components/layout/tag";

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
    <div className="md:container mx-auto pt-[0.5rem] md:pt-34 lg:pt-34 overflow-x-hidden">
      {/* <div className="flex justify-start">
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
        </div> */}
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
        <div className="relative h-[30rem] lg:h-[25rem] rounded-lg">
          {/* Background Image */}
          {/* <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${countryData.image})` }}
            ></div> */}
          <div className="fixed inset-0 -z-10">
            <picture>
              {/* Mobile-optimized image with higher quality and vibrancy */}
              <source
                media="(max-width: 767px)"
                srcSet="/img-background-2.jpg"
              />
              {/* Desktop image */}
              <source
                media="(min-width: 768px)"
                srcSet="/img-background-2.jpg"
              />
              <Image
                src="/img-background-2.jpg"
                alt="Golf course background"
                fill
                className="object-cover md:opacity-70 brightness-[1.1] contrast-[1.05] md:brightness-100 md:contrast-100"
                priority
                quality={90}
              />
            </picture>
          </div>

          {/* Content */}
          <div className="absolute top-0 left-0 right-0 p-2 text-white px-4">
            <div className="bg-red-700 rounded-none mb-3 md:mb-6 p-1 w-[13rem] md:w-[20rem]">
              <div className="flex justify-start items-center text-sm md:text-base">
                <h2 className="text-md lg:text-2xl font-bold">
                  {countryData.country} Golf Courses
                </h2>
              </div>
            </div>

            <Tag />
            <div className="pl-0.5 h-[20rem]">
              <div className="flex flex-wrap w-[70%] md:w-[50%] ">
                {countryData.city.map((city) => (
                  <Link
                    key={city}
                    href={`/courses/${countryData.country.toLowerCase()}/${encodeUrlParam(
                      city
                    )}`}
                    className="w-[50%] md:w-[33%] flex items-start p-1"
                  >
                    <div className="bg-black md:bg-white rounded-full w-1.5 h-1.5 mt-1 mr-0.5 md:w-2 md:h-2 md:mt-1.5 md:mr-1 flex-shrink-0"></div>
                    <span className="text-black md:text-white text-xs md:text-base">
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
