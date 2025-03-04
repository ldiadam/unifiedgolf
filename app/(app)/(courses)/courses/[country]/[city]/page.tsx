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
            <Link href={`/courses/${countryData.country.toLowerCase()}`}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {cityCourses.map((course, index) => (
            <Link href={`/course-detail/${course.slug}`} key={index}>
              <div className="relative h-80 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${course.imageUrl[0].url})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{course.name}</h2>
                </div>
              </div>
            </Link>
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
