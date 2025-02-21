"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import courseData from "@/data/allData.json";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Course {
  id: number;
  slug: string;
  name: string;
  courseTitle: string;
  courseDesc: { id: number; text: string }[];
  country: string;
  city: string;
  imageUrl: { id: number; url: string; alt: string }[];
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

export default function CourseListPage() {
  const params = useParams();
  const [locationCourses, setLocationCourses] = useState<Course[]>([]);
  const [mainCourse, setMainCourse] = useState<Course | null>(null);
  const [showCourses, setShowCourses] = useState(false);

  useEffect(() => {
    const slug = params?.slug as string;
    if (slug) {
      const [country, city] = slug
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1));

      // Filter courses for this location
      const filteredCourses = courseData.filter((course: Course) => {
        return (
          course.city.toLowerCase() === city.toLowerCase() ||
          city.toLowerCase().includes(course.city.toLowerCase()) ||
          course.city.toLowerCase().includes(city.toLowerCase())
        );
      });
      // console.log(filteredCourses);

      setLocationCourses(filteredCourses);
      // Set the first course as the main course to display its title and description
      if (filteredCourses.length > 0) {
        setMainCourse(filteredCourses[0]);
      }
    }
  }, [params]);

  if (!mainCourse) {
    return (
      <div className="container mx-auto px-4 pt-52">
        <div className="flex justify-center">
          <Button
            variant="ghost"
            asChild
            className="mb-4 text-base hover:bg-primary"
          >
            <Link href="/courses">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Data is Not Available. Please back to Course Selection
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-48">
      <div className="flex flex-col">
        {/* Back Button */}
        <div className="mb-2">
          <div className="flex justify-start">
            <Button
              variant="ghost"
              asChild
              className="mb-4 text-base hover:bg-primary"
            >
              <Link href="/courses">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Course Selection
              </Link>
            </Button>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="bg-card shadow-md rounded-lg flex items-center justify-start gap-6 p-4 mb-4">
          {/* Golfing in City (Title) */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg font-semibold hover:text-primary transition"
          >
            A. Golfing in {mainCourse.city}
          </button>

          {/* Course List Dropdown using Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center text-lg font-semibold hover:text-primary transition">
                B. Name of Courses <ChevronDown className="ml-2" size={18} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto min-w-[256px] p-0">
              <div className="p-2">
                {/* <h3 className="font-semibold border-b pb-2">
                  Available Courses in {mainCourse.city}
                </h3> */}
                <div className="flex flex-col space-y-1 mt-2">
                  {locationCourses.length > 0 ? (
                    locationCourses.map((course, index) => (
                      <Link
                        key={course.id}
                        href={`/course-detail/${course.slug}`}
                        className="block hover:bg-primary rounded-md transition-colors"
                      >
                        <div className="text-sm py-1">
                          {index + 1}. {course.name}
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="text-sm py-1 text-gray-500">
                      No courses found
                    </div>
                  )}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Course Title */}
        <div className="course-tittle">
          <h1 className="text-xl font-bold mb-6">
            A. Golfing in {mainCourse.city}
          </h1>
          <h1 className="text-xl font-bold mb-4 text-primary">
            {mainCourse.courseTitle}
          </h1>
          <p className="text-md mb-2">{mainCourse.courseDesc[0].text}</p>
        </div>

        {/* Course Description List */}
        <div className="mb-8">
          <ul className="list-disc pl-6 space-y-4">
            {mainCourse.courseDesc.slice(1).map((desc) => (
              <li key={desc.id} className="text-base">
                {desc.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
