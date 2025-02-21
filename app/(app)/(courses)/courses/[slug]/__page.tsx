// // app/courses/[slug]/page.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   ChevronLeft,
//   Star,
//   ChevronRight,
//   ChevronLeftIcon,
//   ChevronRightIcon,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import courseData from "@/data/allData.json";

// interface Course {
//   id: number;
//   slug: string;
//   name: string;
//   country: string;
//   city: string;
//   imageUrl: { id: number; url: string; alt: string }[];
//   description: { id: number; text: string }[];
//   rating: number;
//   reviews: number;
//   pricePerDay: number;
//   type: string;
// }

// export default function CourseListPage() {
//   const params = useParams();
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [countryCity, setCountryCity] = useState({ country: "", city: "" });

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const coursesPerPage = 6;

//   useEffect(() => {
//     if (params.slug) {
//       const slugString = Array.isArray(params.slug)
//         ? params.slug[0]
//         : params.slug;
//       const parts = slugString.split("-");

//       // Assuming the first part is the country and the rest is the city (may contain hyphens)
//       const country = parts[0];
//       const cityParts = parts.slice(1);
//       const city = cityParts
//         .join(" ")
//         .replace(/(^|\s)\S/g, (char) => char.toUpperCase());

//       setCountryCity({
//         country: country.charAt(0).toUpperCase() + country.slice(1),
//         city: city,
//       });

//       // Filter courses based on the city
//       const filteredCourses = courseData.filter((course: Course) => {
//         return (
//           course.city.toLowerCase() === city.toLowerCase() ||
//           city.toLowerCase().includes(course.city.toLowerCase()) ||
//           course.city.toLowerCase().includes(city.toLowerCase())
//         );
//       });

//       setCourses(filteredCourses);
//       setCurrentPage(1); // Reset to first page when location changes
//     }
//   }, [params.slug]);

//   // Get current courses
//   const indexOfLastCourse = currentPage * coursesPerPage;
//   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
//   const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);
//   const totalPages = Math.ceil(courses.length / coursesPerPage);

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const renderStars = (rating: number) => {
//     const roundedRating = Math.round(rating * 2) / 2;
//     return (
//       <div className="flex items-center">
//         {[...Array(5)].map((_, i) => (
//           <Star
//             key={i}
//             className={`h-4 w-4 ${
//               i < Math.floor(roundedRating)
//                 ? "text-yellow-400 fill-yellow-400"
//                 : i < roundedRating
//                 ? "text-yellow-400 fill-yellow-400 opacity-50"
//                 : "text-gray-300"
//             }`}
//           />
//         ))}
//         <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
//       </div>
//     );
//   };

//   const renderPagination = () => {
//     if (totalPages <= 1) return null;

//     return (
//       <Pagination className="mt-8">
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious
//               onClick={() =>
//                 currentPage > 1 && handlePageChange(currentPage - 1)
//               }
//               className={
//                 currentPage === 1
//                   ? "pointer-events-none opacity-50"
//                   : "cursor-pointer"
//               }
//             />
//           </PaginationItem>

//           {[...Array(totalPages)].map((_, index) => {
//             const pageNumber = index + 1;
//             // Show first page, last page, current page, and pages adjacent to current page
//             if (
//               pageNumber === 1 ||
//               pageNumber === totalPages ||
//               (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
//             ) {
//               return (
//                 <PaginationItem key={pageNumber}>
//                   <PaginationLink
//                     onClick={() => handlePageChange(pageNumber)}
//                     isActive={currentPage === pageNumber}
//                   >
//                     {pageNumber}
//                   </PaginationLink>
//                 </PaginationItem>
//               );
//             }

//             // Show ellipsis for gaps (but only once per gap)
//             if (
//               (pageNumber === 2 && currentPage > 3) ||
//               (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
//             ) {
//               return (
//                 <PaginationItem key={`ellipsis-${pageNumber}`}>
//                   <PaginationEllipsis />
//                 </PaginationItem>
//               );
//             }

//             return null;
//           })}

//           <PaginationItem>
//             <PaginationNext
//               onClick={() =>
//                 currentPage < totalPages && handlePageChange(currentPage + 1)
//               }
//               className={
//                 currentPage === totalPages
//                   ? "pointer-events-none opacity-50"
//                   : "cursor-pointer"
//               }
//             />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     );
//   };

//   return (
//     <div className="container mx-auto pt-48">
//       <div className="mb-8">
//         <div className="flex justify-start">
//           <Button
//             variant="ghost"
//             asChild
//             className="mb-4 text-base hover:bg-primary"
//           >
//             <Link href="/courses">
//               <ChevronLeft className="mr-2 h-4 w-4" />
//               Back to Course Selection
//             </Link>
//           </Button>
//         </div>

//         <h1 className="text-3xl font-bold">
//           Golf Courses in {countryCity.city}, {countryCity.country}
//         </h1>
//         <p className="text-muted-foreground mt-2">
//           Found {courses.length} courses available in this location
//         </p>
//         <Separator className="my-4" />
//       </div>

//       {courses.length === 0 ? (
//         <Card>
//           <CardContent className="flex flex-col items-center justify-center p-8">
//             <div className="text-center">
//               <h2 className="text-xl font-semibold mb-2">No Courses Found</h2>
//               <p className="text-muted-foreground mb-4">
//                 We couldn&apos;t find any golf courses in {countryCity.city},{" "}
//                 {countryCity.country}.
//               </p>
//               <Button asChild>
//                 <Link href="/courses">Return to Course Selection</Link>
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {currentCourses.map((course) => (
//               <Card
//                 key={course.id}
//                 className="overflow-hidden h-full flex flex-col"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <Image
//                     src={
//                       course.imageUrl[0].url
//                         ? course.imageUrl[0].url
//                         : "/no-image.jpg"
//                     }
//                     alt={course.name}
//                     fill
//                     className="object-cover transition-transform hover:scale-105"
//                     //   onError={(e) => {
//                     //     const target = e.target as HTMLImageElement;
//                     // target.src = "/placeholder-course.jpg";
//                     //   }}
//                   />
//                 </div>
//                 <CardHeader>
//                   <CardTitle className="line-clamp-2">{course.name}</CardTitle>
//                   <div className="flex items-center justify-between mt-2">
//                     {renderStars(course.rating)}
//                     <span className="text-sm text-muted-foreground">
//                       {course.reviews} reviews
//                     </span>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="flex-grow">
//                   <p className="text-muted-foreground line-clamp-3 mb-4">
//                     {course.description[0].text}
//                   </p>
//                   <p className="font-medium">
//                     ${course.pricePerDay.toFixed(2)}{" "}
//                     <span className="text-muted-foreground text-sm">
//                       per day
//                     </span>
//                   </p>
//                 </CardContent>
//                 <CardFooter>
//                   <Button asChild className="w-full">
//                     <Link href={`/course-detail/${course.slug}`}>
//                       View Details
//                     </Link>
//                   </Button>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>

//           {renderPagination()}
//         </>
//       )}
//     </div>
//   );
// }
