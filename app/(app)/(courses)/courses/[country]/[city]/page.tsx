import { notFound } from "next/navigation";
import locationData from "@/data/locationData.json";
import allData from "@/data/allData.json";
import { decodeUrlParam } from "@/utils/url-helpers";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: {
    country: string;
    city: string;
  };
}

export default function CityPage({ params }: PageProps) {
  const { country } = params;
  const decodedCity = decodeUrlParam(params.city);

  // Add debugging logs
  // console.log("URL Params:", params);
  // console.log("Decoded City:", decodedCity);
  // console.log("Looking for country:", country);

  // Verify if country and city exist in locationData (case-insensitive match for country)
  const countryData = locationData.find(
    (c) => c.country.toLowerCase() === country.toLowerCase()
  );

  // console.log("Country Data:", countryData);

  const cityExists = countryData?.city.includes(decodedCity);

  // console.log("City exists:", cityExists);
  // console.log("Available cities:", countryData?.city);

  if (!countryData || !cityExists) {
    console.log("Not found triggered because:", {
      noCountryData: !countryData,
      noCityExists: !cityExists,
    });
    notFound();
  }

  // Get courses for this city
  const cityCourses = allData.filter((course) => course.city === decodedCity);

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

        <h1 className="text-3xl font-bold mb-1">
          Golf Courses in {decodedCity}, {countryData.country}
        </h1>
        <div className="flex justify-start items-center py-4">
          <p className="text-base">
            {countryData.country}, a hidden gem in Southeast Asia, offers a
            unique and tranquil golfing experience surrounded by breathtaking
            landscapes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cityCourses.map((course) => (
            <div key={course.slug} className="border rounded-lg p-4 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
              <Link
                href={`/course-detail/${course.slug}`}
                className="text-primary hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>

        {cityCourses.length === 0 && (
          <p className="text-lg text-gray-600">
            No courses found in {decodedCity}.
          </p>
        )}
      </div>
    </div>
  );
}
