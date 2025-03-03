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

export default function CourseDetailPage() {
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
      router.push(`/courses/${slug}`);
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
        {cities.map((city, index) => (
          <Link
            key={index}
            href={`/courses/${createCitySlug(country, city)}`}
            className="block p-2 hover:bg-primary rounded-md transition-colors"
          >
            <li className="">{city}</li>
          </Link>
        ))}
      </div>
    );
  };

  console.log(selectedCountry);

  return (
    <div className="container mx-auto pt-52">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">B. Course Details</h1>
        <Separator />
        <span>Test</span>
      </div>
    </div>
  );
}
