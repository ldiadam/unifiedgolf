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
import { GolfPackageDisplay } from "./components/golf-package-client";
import { encodeUrlParam } from "@/utils/url-helpers";

// Sample data for a golf package
const golfPackage = {
  title: "Golf Package for Wei Hai/China Qing Dao",
  city_1: "Shandong",
  city_2: "Weihai",
  city_3: "Yantai",
  locations: ["Wei Hai", "Yantai", "Qing Dao"],
  country: "China",
  days: 3,
  nights: 2,
  price: 7500,
  games: 5,
  currency: "THB",
  description:
    "Here is a short Thailand Golf Holiday in bustling Bangkok. Anyone wanting to sample Bangkok golf will significantly enjoy this package. Everything assured for a most memorable golf trip. Play during the day or under the lights, schedule golf on the day of arrival or departure. Anything is possible with this flexible Bangkok golf package.",
  itinerary: [
    {
      day: 1,
      title: "Arrival",
      description: "Arrival and transfer to hotel.",
    },
    {
      day: 2,
      title: "Golf at Alpine Golf & Sports Club",
      description:
        "Golf at Alpine Golf & Sports Club (site of Tiger Woods' 2000 Asian Tour win)",
    },
    {
      day: 3,
      title: "Golf & Departure - Golf at Thana City Country Club",
      description:
        "Golf at Thana City Country Club (Thailand's only Greg Norman design)\nTransfer to airport for departure.",
    },
  ],
  inclusions: [
    "All accommodations",
    "Daily buffet or cooked to order breakfast",
    "All green fees",
    "One caddie per golfer at each golf course",
    "All airport transfers",
    "All golf course transfers",
    "All transfers by private VIP touring van or equivalent",
    "Daily drinking water",
    "24/7 golf hotline staffed by knowledgeable service personnel",
    "Local knowledge, suggestions, and tips throughout the trip",
    "All taxes and service charges",
  ],
  exclusions: [
    "Return air tickets",
    "Travel Insurance",
    "Weekends & PH golf surcharges",
    "Single Buggy Fee",
    "Meals that are not indicated in the package",
    "Personal expenses",
  ],
  recommendedHotel: "Recommended Hotel information available upon request",
  accommodation: [
    { name: "Weihai Xintai International & Qingdao Hotel", stars: 5 },
    // { name: "Amari Phuket", stars: 4.5 },
  ],
  breakfast: true,
  golfCourses: [
    "Weihai Point Hotel & Golf Resort",
    "WeGo Hot Spring Golf Club",
    "Stone Bay Country & Resort",
  ],
  buggyService: "Twin Sharing",
  caddyService: "Twin Sharing",
  transportation: [
    "Airport transfer including ⁠All transfer (till 10pm daily) ",
  ],
  food: [
    "Welcome Seafood Dinner on Day 1",
    "Hotel Breakfast included",
    "Farewell Dinner on Day 5",
    "Golf Club Lunches after golf",
    "Daily mineral water & Fruits on Buggy",
    "Full Day Experienced Tour Guide services",
    "Tipping of guide & driver at 25RMB  per person per day",
    "Meals & Accommodation for the driver",
  ],
  guideServices: [
    "⁠Customized Bag Tag with Individual name",
    "Golf Umbrella as Gift",
  ],
};

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

  const handleCityClick = (city: string) => {
    if (selectedCountry) {
      console.log(`City clicked: ${city}`);
      const slug = createCitySlug(selectedCountry.country, city);
      router.push(`/maintenance`);
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
        <GolfPackageDisplay golfPackage={golfPackage} />
      </div>
    </div>
  );
}
