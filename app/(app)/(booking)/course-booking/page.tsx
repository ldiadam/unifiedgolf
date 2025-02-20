"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
// import itemData from "@/data/itemData.json";

const barData = [
  {
    id: 1,
    name: "Your Contact Detail",
  },
  {
    id: 2,
    name: "Course Selection",
  },
  {
    id: 3,
    name: "Hotel Selection",
  },
  {
    id: 4,
    name: "Booking Detail",
  },
];

export default function CourseBookingPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to create a unique slug for each city
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

  return (
    <div className="container mx-auto pt-40">
      <div className="flex flex-col space-y-6 mt-6">
        <h1 className="text-3xl font-bold">D. Course Booking</h1>

        {/* Countries List with hover effect */}
        <div className="relative">
          {barData.length > 4 && (
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
            {barData.map((item) => (
              <Popover key={item.id}>
                <PopoverTrigger asChild>
                  <Card className="flex-shrink-0 cursor-pointer snap-center hover:bg-primary transition-all">
                    <CardContent className="p-1 w-full">
                      <h2 className="text-center font-semibold truncate">
                        {item.id}. {item.name}
                      </h2>
                    </CardContent>
                  </Card>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <div className="space-y-2">
                    <h3 className="font-semibold border-b pb-2">{item.name}</h3>
                    {/* {item.city && item.city.length > 0 ? (
                      <div className="grid gap-2">
                        {item.city.map((city, index) => (
                          <Link
                            key={index}
                            href={`/courses/${createCitySlug(
                              item.country,
                              city
                            )}`}
                            className="block p-2 hover:bg-primary rounded-md transition-colors"
                          >
                            <li>{city}</li>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="py-8 text-center">
                        <MapPin className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                        <p className="text-sm text-gray-500">
                          No cities available in this country yet
                        </p>
                      </div>
                    )} */}
                  </div>
                </PopoverContent>
              </Popover>
            ))}
          </div>

          {barData.length > 4 && (
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
      </div>
    </div>
  );
}
