// app/courses/[slug]/page.tsx
import { parseLocationSlug } from "@/utils/slug";
import locationData from "@/data/locationData.json";
import { CourseDetailClient } from "./components/course-detail-client";
import { notFound } from "next/navigation";

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const locationInfo = parseLocationSlug(params.slug);

  if (!locationInfo) {
    return {
      title: "Course Location Not Found",
      description: "The requested course location could not be found.",
    };
  }

  return {
    title: `Courses in ${locationInfo.city}, ${locationInfo.country}`,
    description: `Browse our available courses in ${locationInfo.city}, ${locationInfo.country}`,
  };
}

// Sample course data generator function
function getCourseData(country: string, city: string) {
  // In a real app, you would fetch this data from an API
  return {
    id: `${country}-${city}`.toLowerCase().replace(/\s+/g, "-"),
    name: `${city} Learning Center`,
    city: city,
    country: country,
    imageUrl: "/loc-1.jpg", // You'll need to add a placeholder image
    rating: 4.7,
    reviews: 112,
    description: `Our state-of-the-art learning center in ${city}, ${country} offers a wide variety of courses designed to help you achieve your professional goals. With experienced instructors and modern facilities, you'll get hands-on experience in your chosen field.`,
    pricePerDay: 79,
    availableCourses: [
      {
        id: 1,
        title: "Introduction to Web Development",
        duration: "12 weeks",
        level: "Beginner",
        startDate: "March 15, 2025",
      },
      {
        id: 2,
        title: "Advanced React & NextJS",
        duration: "8 weeks",
        level: "Intermediate",
        startDate: "April 1, 2025",
      },
      {
        id: 3,
        title: "UI/UX Design Fundamentals",
        duration: "6 weeks",
        level: "Beginner",
        startDate: "May 10, 2025",
      },
      {
        id: 4,
        title: "Full Stack Development",
        duration: "16 weeks",
        level: "Advanced",
        startDate: "June 1, 2025",
      },
    ],
  };
}

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const locationInfo = parseLocationSlug(params.slug);

  if (!locationInfo) {
    notFound();
  }

  const { country, city } = locationInfo;
  const courseLocation = getCourseData(country, city);

  return <CourseDetailClient location={courseLocation} />;
}
