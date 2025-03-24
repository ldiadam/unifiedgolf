"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import locationData from "@/data/locationData.json";
import CountryMap from "./components/country-map";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { HeroSection } from "@/components/layout/sections/hero";
import { GolfPackageClient } from "./components/golf-package-client";
import { encodeUrlParam } from "@/utils/url-helpers";

export default function StandardPackagesPage() {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  // Update selected cities when country changes
  useEffect(() => {
    if (selectedCountry) {
      const countryData = locationData.find(
        (location) => location.id === selectedCountry.id
      );
      setSelectedCities(countryData?.city || []);
    } else {
      setSelectedCities([]);
    }
  }, [selectedCountry]);

  const createCitySlug = (country: string, city: string) => {
    return `${country.toLowerCase()}-${city
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCountrySelect = (location: any) => {
    setSelectedCountry(location);
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
        {" "}
        {cities.map((city, index) => (
          <Link
            key={index}
            href={`/golf-packages/${country.toLowerCase()}/${encodeUrlParam(
              city
            )}`}
            className="block p-2 hover:bg-primary rounded-md transition-colors"
          >
            <li className="">{city}</li>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="container mx-auto pt-40 md:pt-48 lg:pt-40">
        <div className="flex flex-col space-y-4 mt-6">
          <h1 className="text-3xl font-bold">C. Golf Packages</h1>

          <div className="relative">
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
        </div>
      </div>
      <GolfPackageClient />
    </>
  );
}
