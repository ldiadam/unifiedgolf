// app/courses/page.tsx
"use client";

import { useState, useMemo } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import locationData from "@/data/locationData.json";

export default function CourseDetailPage() {
  const [activeCountry, setActiveCountry] = useState(locationData[0].country);

  // Get the list of cities for the active country
  const activeCities = useMemo(() => {
    const country = locationData.find((item) => item.country === activeCountry);
    return country?.city || [];
  }, [activeCountry]);

  // Function to create a unique slug for each city
  const createCitySlug = (country: string, city: string) => {
    return `${country.toLowerCase()}-${city
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
  };

  return (
    <div className="container mx-auto py-16 px-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Course Details</h1>

      {/* Country Tabs */}
      <Tabs
        value={activeCountry}
        onValueChange={setActiveCountry}
        className="w-full"
      >
        <TabsList className="mb-4 flex flex-wrap h-auto">
          {locationData.map((location) => (
            <TabsTrigger
              key={location.id}
              value={location.country}
              className="px-4 py-2 m-1 hover:bg-primary"
            >
              <span className="text-base">{location.country}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Content for each country */}
        {locationData.map((location) => (
          <TabsContent key={location.id} value={location.country}>
            <Card>
              <CardHeader>
                <CardTitle>Courses in {location.country}</CardTitle>
              </CardHeader>
              <CardContent>
                {location.city.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {location.city.map((city, index) => (
                      <Link
                        href={`/courses/${createCitySlug(
                          location.country,
                          city
                        )}`}
                        key={index}
                      >
                        <Card className="hover:shadow-lg hover:bg-primary transition-shadow cursor-pointer h-full">
                          <CardContent className="flex items-center justify-center h-full p-6">
                            <span className="text-center font-medium">
                              {city}
                            </span>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    No cities available for this country.
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
