// app/courses/[slug]/components/course-detail-client.tsx
"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Star, Calendar, Clock, BarChart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CourseBookingForm } from "./course-booking-form";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Course {
  id: number;
  title: string;
  duration: string;
  level: string;
  startDate: string;
}

interface CourseLocation {
  id: string;
  name: string;
  city: string;
  country: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  description: string;
  pricePerDay: number;
  availableCourses: Course[];
}

interface CourseDetailClientProps {
  location: CourseLocation;
}

export function CourseDetailClient({ location }: CourseDetailClientProps) {
  const router = useRouter();
  return (
    <div className="container mx-auto my-16">
      <Button variant="outline" className="mb-8" onClick={() => router.back()}>
        Back to Locations
      </Button>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 my-auto">
          <Carousel
            opts={{
              align: "start",
            }}
            className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={location.imageUrl}
                  alt={location.name}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{location.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={16} />
            <span className="text-gray-600">
              {location.city}, {location.country}
            </span>
          </div>
          <div className="flex items-center mb-4">
            <Star className="text-yellow-500 mr-2" />
            <span className="text-lg font-semibold">
              {location.rating} ({location.reviews} reviews)
            </span>
          </div>
          <p className="text-lg mb-4">{location.description}</p>
          <div className="text-3xl font-bold text-blue-600 mb-4">
            ${location.pricePerDay} / day
          </div>
          <CourseBookingForm location={location} />
        </div>
      </div>

      {/* Available Courses Section */}
      {/* <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {location.availableCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{course.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{course.level}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Starts {course.startDate}</span>
                  </div>

                  <Button className="w-full mt-4">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}
    </div>
  );
}
