import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import locationData from "@/data/locationData.json";
import allData from "@/data/allData.json";
import { encodeUrlParam } from "@/utils/url-helpers";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface Props {
  params: {
    country: string;
  };
}

export default function CountryPage({ params }: Props) {
  const { country } = params;

  // Verify if country exists in locationData (case-sensitive match)
  const countryData = locationData.find(
    (c) => c.country.toLowerCase() === country.toLowerCase()
  );

  if (!countryData) {
    notFound();
  }

  // Get all courses in this country
  const countryCourses = allData.filter((course) => {
    const cityInCountry = countryData.city.includes(course.city);
    return cityInCountry;
  });

  return (
    <div className="container mx-auto pt-44">
      <div className="flex flex-col gap-1">
        <div className="flex justify-start">
          <Button
            variant="ghost"
            asChild
            className="mb-2 text-base hover:bg-primary"
            size={"sm"}
          >
            <Link href="/courses">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Course Selection
            </Link>
          </Button>
        </div>
        <h2 className="text-xl font-bold">
          Find your {countryData.country} Golf Course by selecting a Golf
          Destination
        </h2>
        <div className="flex justify-start items-center py-4">
          <p className="text-base">
            {countryData.country}, a hidden gem in Southeast Asia, offers a
            unique and tranquil golfing experience surrounded by breathtaking
            landscapes.
          </p>
        </div>
        {/* Country Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {countryData.city.map((city) => {
            const cityCourses = countryCourses.filter(
              (course) => course.city === city
            );
            return (
              <Link
                href={`/courses/${countryData.country.toLowerCase()}/${encodeUrlParam(
                  city
                )}`}
                key={city}
              >
                <div className="relative h-80 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${countryData.image})` }}
                  ></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-3xl font-bold mb-2">{city}</h2>
                    <p className="text-xl">
                      {cityCourses.length} courses available
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Country Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {countryData.city.map((city) => {
            const cityCourses = countryCourses.filter(
              (course) => course.city === city
            );
            return (
              <div key={city} className="border rounded-lg p-4 shadow-sm">
                <h2 className="text-xl font-semibold mb-2">{city}</h2>
                <p className="text-sm text-gray-600 mb-4">
                  {cityCourses.length} course(s) available
                </p>
                <Link
                  href={`/courses/${countryData.country.toLowerCase()}/${encodeUrlParam(
                    city
                  )}`}
                  className="text-primary hover:underline"
                >
                  View Courses →
                </Link>
              </div>
            );
          })}
        </div> */}

        {countryCourses.length === 0 && (
          <p className="text-lg text-gray-600">
            No courses found in this country.
          </p>
        )}
      </div>
    </div>
  );
}
