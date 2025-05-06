"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import courseData from "@/data/allData.json";
import ImageCarousel from "./components/image-carousel-course-detail";

interface Course {
  id: number;
  slug: string;
  name: string;
  country: string;
  city: string;
  imageUrl: CourseImage[];
  description: {
    credential: { text: string }[];
    theCourse: { text: string }[];
    accomodation: { text: string }[];
    address: { text: string }[];
    contact: { text: string }[];
    courseFee: { text: string }[];
    otherInfo: { text: string }[];
  };
  rating: number;
  reviews: number;
  pricePerDay: number;
  type: string;
}
interface CourseImage {
  id: number;
  url: string;
  alt: string;
}

interface Description {
  id: number;
  text: string;
}
export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  const createCountrySlug = (country: string) => {
    return `${country.toLowerCase()}`;
  };
  const createCitySlug = (city: string) => {
    return `${city.toLowerCase().replace(/\s+/g, "-")}`;
  };
  useEffect(() => {
    if (params.slug) {
      const slugString = Array.isArray(params.slug)
        ? params.slug[0]
        : params.slug;

      const foundCourse = courseData.find((c: Course) => c.slug === slugString);

      if (foundCourse) {
        setCourse(foundCourse);
      }

      setLoading(false);
    }
  }, [params.slug]);

  const renderStars = (rating: number) => {
    const roundedRating = Math.round(rating * 2) / 2;
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < Math.floor(roundedRating)
                ? "text-yellow-400 fill-yellow-400"
                : i < roundedRating
                ? "text-yellow-400 fill-yellow-400 opacity-50"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 text-lg font-medium">{rating.toFixed(1)}</span>
        <span className="ml-2 text-muted-foreground">
          ({course?.reviews} reviews)
        </span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="container mx-auto py-16 px-4 flex justify-center items-center">
        <p>Loading course details...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container mx-auto py-16 px-4">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-8">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Course Not Found</h2>
              <p className="text-muted-foreground mb-4">
                The course you&apos;re looking for doesn&apos;t exist or has
                been removed.
              </p>
              <Button asChild>
                <Link href="/courses">Return to Course Selection</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const citySlug = `${course.country.toLowerCase()}-${course.city
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <div className="container mx-auto pt-48 lg:pt-42">
      <div className="flex justify-start">
        <Button
          variant="ghost"
          asChild
          className="mb-4 text-base hover:bg-primary"
        >
          <Link
            href={`/courses/${createCountrySlug(
              course.country
            )}/${createCitySlug(course.city)}`}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Course List
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column - course details */}
        <div className="lg:col-span-2">
          <ImageCarousel
            images={course.imageUrl}
            courseInfo={{
              name: course.name,
              country: course.country,
              city: course.city,
              description: course.description,
              type: course.type,
            }}
          />

          {/* <h1 className="text-3xl font-bold mb-3">{course.name}</h1> */}

          {/* <div className="flex items-center mb-6">
            <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
            <span>
              {course.city}, {course.country}
            </span>
          </div> */}

          {/* <div className="mb-6">{renderStars(course.rating)}</div> */}

          {/* <Separator className="my-6" /> */}

          {/* <div className="w-full bg-card rounded-md">
            <div className="flex flex-col gap-1">
              <div className="flex flex-col justify-center items-center py-2 px-2">
                <h1 className="text-lg font-bold mb-2">Description</h1>
                <Separator />
              </div>
              <div className="flex justify-start items-center pb-4 px-4">
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <h2 className="font-bold">Credential</h2>
                    <div className="flex justify-start items-center pb-4 px-4">
                      <ul className="space-y-1 list-disc ml-4">
                        {course.description.credential.map(
                          (desc, index) =>
                            desc.text && <li key={index}>{desc.text}</li>
                        )}{" "}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bold">The Course</h2>
                    <div className="flex justify-start items-center pb-4 px-4">
                      <ul className="space-y-1 list-disc ml-4">
                        {course.description.theCourse.map(
                          (desc, index) =>
                            desc.text && <li key={index}>{desc.text}</li>
                        )}{" "}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bold">Accomodation</h2>
                    <div className="flex justify-start items-center pb-4 px-4">
                      <ul className="space-y-1 list-disc ml-4">
                        {course.description.accomodation.map(
                          (desc, index) =>
                            desc.text && <li key={index}>{desc.text}</li>
                        )}{" "}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bold">Address/Location</h2>
                    <div className="flex justify-start items-center pb-4 px-4">
                      <ul className="space-y-1 list-disc ml-4">
                        {course.description.address.map(
                          (desc, index) =>
                            desc.text && <li key={index}>{desc.text}</li>
                        )}{" "}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bold">Contact</h2>
                    <div className="flex justify-start items-center pb-4 px-4">
                      <ul className="space-y-1 list-disc ml-4">
                        {course.description.contact.map(
                          (desc, index) =>
                            desc.text && <li key={index}>{desc.text}</li>
                        )}{" "}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bold">Course Fee</h2>
                    <div className="flex justify-start items-center pb-4 px-4">
                      <ul className="space-y-1 list-disc ml-4">
                        {course.description.courseFee.map(
                          (desc, index) =>
                            desc.text && <li key={index}>{desc.text}</li>
                        )}{" "}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bold">Other Information</h2>
                    <div className="flex justify-start items-center pb-4 px-4">
                      <ul className="space-y-1 list-disc ml-4">
                        {course.description.otherInfo.map(
                          (desc, index) =>
                            desc.text && <li key={index}>{desc.text}</li>
                        )}{" "}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right column - booking card */}
        {/* <div>
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Book Your Tee Time</h2>

              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-medium">Price per day</span>
                <span className="text-2xl font-bold">
                  ${course.pricePerDay.toFixed(2)}
                </span>
              </div>

              <Separator className="my-6" />

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 border rounded-md"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Number of Players
                    </label>
                    <select className="w-full p-2 border rounded-md">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Preferred Tee Time
                  </label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Morning (6:00 AM - 10:00 AM)</option>
                    <option>Midday (10:00 AM - 2:00 PM)</option>
                    <option>Afternoon (2:00 PM - 6:00 PM)</option>
                  </select>
                </div>

                <Button className="w-full py-6 text-lg">Book Now</Button>

                <p className="text-sm text-muted-foreground text-center">
                  No payment required today. Reserve your spot now.
                </p>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </div>
  );
}
