// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { ChevronDown, ChevronLeft, Star } from "lucide-react";
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
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import courseData from "@/data/allData.json";
// import CourseMap from "./components/course-map";

// interface Course {
//   id: number;
//   slug: string;
//   name: string;
//   courseTitle: string;
//   courseDesc: { id: number; text: string }[];
//   country: string;
//   city: string;
//   imageUrl: { id: number; url: string; alt: string }[];
//   description: {
//     credential: { text: string }[];
//     theCourse: { text: string }[];
//     accomodation: { text: string }[];
//     address: { text: string }[];
//     contact: { text: string }[];
//     courseFee: { text: string }[];
//     otherInfo: { text: string }[];
//   };
//   rating: number;
//   reviews: number;
//   pricePerDay: number;
//   type: string;
// }

// // Create a map of dummy coordinates for golf courses
// const generateDummyCoordinates = (
//   country: string,
//   city: string,
//   courseName: string,
//   index: number
// ): [number, number] => {
//   // Base coordinates for major countries
//   const countryBaseCoordinates: Record<string, [number, number]> = {
//     China: [104.0668, 30.5728],
//     Cambodia: [104.9282, 11.5564],
//     Indonesia: [110.0045, -7.4917],
//     Japan: [135.8048, 34.6851],
//     Laos: [102.6331, 17.9757],
//     Malaysia: [101.5183, 3.0738],
//     Myanmar: [96.1951, 16.8661],
//     Philippines: [121.0244, 14.5547],
//     Singapore: [103.8198, 1.3521],
//     Thailand: [100.5018, 13.7563],
//     Vietnam: [105.8342, 21.0278],
//     Brunei: [114.9398, 4.9031],
//   };

//   // Use country base or default to a central Asia coordinate
//   const baseCoord = countryBaseCoordinates[country] || [100.0, 13.0];

//   // Add small random offsets based on the course index to create slightly different positions
//   // This ensures each course in the same city has a unique position on the map
//   const latOffset = (Math.random() - 0.5) * 0.1 + index * 0.01;
//   const lngOffset = (Math.random() - 0.5) * 0.1 + index * 0.01;

//   return [baseCoord[0] + lngOffset, baseCoord[1] + latOffset];
// };

// export default function IntegratedCoursePage() {
//   const params = useParams();
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [mainCourse, setMainCourse] = useState<Course | null>(null);
//   const [countryCity, setCountryCity] = useState({ country: "", city: "" });
//   const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const coursesPerPage = 3;

//   useEffect(() => {
//     if (params.slug) {
//       const slugString = Array.isArray(params.slug)
//         ? params.slug[0]
//         : params.slug;
//       const parts = slugString.split("-");

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

//       // Add dummy coordinates to each course
//       const coursesWithCoordinates = filteredCourses.map((course, index) => ({
//         ...course,
//         coordinates: generateDummyCoordinates(
//           course.country,
//           course.city,
//           course.name,
//           index
//         ),
//       }));

//       setCourses(coursesWithCoordinates);

//       if (coursesWithCoordinates.length > 0) {
//         setMainCourse(coursesWithCoordinates[0]);
//         setSelectedCourseId(coursesWithCoordinates[0].id);
//       } else {
//         setMainCourse(null);
//         setSelectedCourseId(null);
//       }

//       // setCourses(filteredCourses);
//       // setMainCourse(filteredCourses[0] || null);
//       setCurrentPage(1);
//     }
//   }, [params.slug]);

//   // Helper function to safely get course description
//   const getCourseDescription = (course: Course): string => {
//     if (!course.description) return "";

//     // Check if description is an array (old format)
//     if (Array.isArray(course.description)) {
//       return course.description[0]?.text || "";
//     }

//     // Check if description has theCourse (new format)
//     if (
//       course.description.theCourse &&
//       course.description.theCourse.length > 0
//     ) {
//       return course.description.theCourse[0].text;
//     }

//     // Fallback to first available description
//     if (Array.isArray(course.courseDesc) && course.courseDesc.length > 0) {
//       return course.courseDesc[0].text;
//     }

//     return "";
//   };

//   // Pagination logic
//   const indexOfLastCourse = currentPage * coursesPerPage;
//   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
//   const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);
//   const totalPages = Math.ceil(courses.length / coursesPerPage);

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//     // window.scrollTo({ top: 20, behavior: "smooth" });
//   };

//   // Handle course selection on map
//   const handleCourseSelect = (courseId: number) => {
//     setSelectedCourseId(courseId);
//     const course = courses.find((c) => c.id === courseId);
//     if (course) {
//       // You might want to navigate to the course detail page or highlight the selected course
//       console.log(`Selected course: ${course.name}`);
//     }
//   };

//   // Handle city click on map
//   const handleCityClick = (city: string) => {
//     // Find courses in the clicked city
//     const coursesInCity = courses.filter(
//       (course) => course.city.toLowerCase() === city.toLowerCase()
//     );

//     if (coursesInCity.length > 0) {
//       // Select the first course in that city
//       setSelectedCourseId(coursesInCity[0].id);
//     }
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

//   const PaginationControls = () => {
//     if (totalPages <= 1) return null;

//     return (
//       <Pagination className="mt-3">
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

//   if (!mainCourse) {
//     return (
//       <div className="container mx-auto px-4 pt-52">
//         <Button
//           variant="ghost"
//           asChild
//           className="mb-4 text-base hover:bg-primary"
//         >
//           <Link href="/courses">
//             <ChevronLeft className="mr-2 h-4 w-4" />
//             Data is Not Available. Please back to Course Selection
//           </Link>
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 pt-48">
//       {/* Back Button */}
//       <div className="">
//         <Button
//           variant="ghost"
//           asChild
//           className="mb-4 text-base hover:bg-primary"
//         >
//           <Link href="/courses">
//             <ChevronLeft className="mr-2 h-4 w-4" />
//             Back to Course Selection
//           </Link>
//         </Button>
//       </div>

//       {/* Menu Bar */}
//       <div className="bg-card shadow-md rounded-sm flex items-center justify-start gap-6 mb-8 mx-2 p-3">
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="text-sm md:text-lg font-semibold hover:text-primary transition"
//         >
//           A. Golfing in {mainCourse.city}
//         </button>

//         {/* <Popover>
//           <PopoverTrigger asChild>
//             <button className="flex items-center text-sm md:text-lg font-semibold hover:text-primary transition">
//               B. Name of Courses <ChevronDown className="ml-2" size={18} />
//             </button>
//           </PopoverTrigger>
//           <PopoverContent className="w-auto min-w-[256px] p-0">
//             <div className="p-2">
//               <div className="flex flex-col space-y-1 mt-2">
//                 {courses.map((course, index) => (
//                   <Link
//                     key={course.id}
//                     href={`/course-detail/${course.slug}`}
//                     className="block hover:bg-primary rounded-md transition-colors"
//                   >
//                     <div className="text-sm py-1">
//                       {index + 1}. {course.name}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </PopoverContent>
//         </Popover> */}
//       </div>

//       {/* Course Description Section */}
//       <div className="mb-12 px-5 w-full">
//         <div className="flex flex-col gap-4 h-full">
//           <h2 className="text-xl font-bold">A. Golfing in {mainCourse.city}</h2>
//           <Separator />
//           <div className="flex flex-row w-full">
//             <div className="flex flex-col gap-4 justify-start items-start px-2 w-3/4">
//               <h3 className="text-xl font-bold text-primary">
//                 {mainCourse.courseTitle || `Golf Courses in ${mainCourse.city}`}
//               </h3>
//               <p className="text-md">
//                 {mainCourse.courseDesc?.[0]?.text ||
//                   getCourseDescription(mainCourse)}
//               </p>
//               <ul className="list-disc pl-4">
//                 {(mainCourse.courseDesc || []).slice(1).map((desc) => (
//                   <li key={desc.id} className="text-base">
//                     {desc.text}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Country Map */}

//             <div className="w-1/4 overflow-hidden rounded border h-[400px]">
//               <CourseMap
//                 country={countryCity.country}
//                 courses={courses}
//                 selectedCourseId={selectedCourseId}
//                 className="w-full h-full"
//                 onCourseClick={handleCourseSelect}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Course Cards Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-5">
//         {currentCourses.map((course) => (
//           <Card key={course.id} className="overflow-hidden flex flex-col">
//             <div className="relative h-36 overflow-hidden">
//               <Image
//                 src={course.imageUrl[0].url || "/no-image.jpg"}
//                 alt={course.name}
//                 fill
//                 className="object-cover transition-transform hover:scale-105"
//               />
//             </div>
//             <CardHeader>
//               <CardTitle className="text-xl line-clamp-2">
//                 {course.name}
//               </CardTitle>
//               <div className="flex items-center justify-between mt-2">
//                 {renderStars(course.rating)}
//                 <span className="text-sm text-muted-foreground">
//                   {course.reviews} reviews
//                 </span>
//               </div>
//             </CardHeader>
//             <CardContent className="flex-grow">
//               <p className="text-muted-foreground line-clamp-3 mb-2">
//                 {getCourseDescription(course)}
//               </p>
//               <p className="font-medium">
//                 ${course.pricePerDay.toFixed(2)}{" "}
//                 <span className="text-muted-foreground text-sm">per day</span>
//               </p>
//             </CardContent>
//             <CardFooter>
//               <Button asChild className="w-full">
//                 <Link href={`/course-detail/${course.slug}`}>View Details</Link>
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>

//       <PaginationControls />
//     </div>
//   );
// }
