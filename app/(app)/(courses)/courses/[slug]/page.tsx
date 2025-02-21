"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import courseData from "@/data/allData.json";
import { Separator } from "@/components/ui/separator";

interface Course {
  id: number;
  slug: string;
  name: string;
  courseTitle: string;
  courseDesc: { id: number; text: string }[];
  country: string;
  city: string;
  imageUrl: { id: number; url: string; alt: string }[];
  description: { id: number; text: string }[];
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
      const filteredCourses = courseData.filter(
        (course: Course) =>
          course.country.toLowerCase() === country.toLowerCase() &&
          course.city.toLowerCase() === city.toLowerCase()
      );

      setLocationCourses(filteredCourses);
      // Set the first course as the main course to display its title and description
      if (filteredCourses.length > 0) {
        setMainCourse(filteredCourses[0]);
      }
    }
  }, [params]);

  if (!mainCourse) {
    return <div className="container mx-auto px-4 pt-52">Loading...</div>;
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
          {/* Golfing in Kunming (Title) */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg font-semibold hover:text-primary transition"
          >
            A. Golfing in {mainCourse.city}
          </button>

          {/* Course List Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCourses(!showCourses)}
              className="flex items-center text-lg font-semibold hover:text-primary transition"
            >
              B. Name of Courses <ChevronDown className="ml-2" size={18} />
            </button>

            {/* Dropdown List */}
            {showCourses && (
              <ul className="absolute right-0 mt-2 w-56 bg-card shadow-lg border rounded-lg overflow-hidden z-10">
                {locationCourses.length > 0 ? (
                  locationCourses.map((course, index) => (
                    <li key={course.id} className="border-b last:border-none">
                      <Link
                        href={`/course-detail/${course.slug}`}
                        className="block px-4 py-2 transition"
                      >
                        {index + 1}. {course.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">No courses found</li>
                )}
              </ul>
            )}
          </div>
        </div>

        {/* Course Title */}
        <div className="course-tittle">
          <h1 className="text-xl font-bold mb-8">
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

        {/* Course Detail Button */}
        {/* <div className="flex justify-end">
          <Button variant="outline" asChild className="border-2">
            <Link href={`/courses/${params.slug}/detail`}>Course Detail</Link>
          </Button>
        </div> */}
      </div>
    </div>
  );
}
