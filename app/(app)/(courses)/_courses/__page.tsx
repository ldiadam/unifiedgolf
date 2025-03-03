// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import Link from "next/link";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
// import locationData from "@/data/locationData.json";
// import CountryMap from "./components/country-map";
// import { useRouter } from "next/navigation";
// import { Separator } from "@/components/ui/separator";

// export default function CourseDetailPage() {
//   const router = useRouter();
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const [selectedCountry, setSelectedCountry] = useState<any>(null);
//   const [selectedCities, setSelectedCities] = useState<string[]>([]);

//   // Update selected cities when country changes
//   useEffect(() => {
//     if (selectedCountry) {
//       const countryData = locationData.find(
//         (location) => location.id === selectedCountry.id
//       );
//       setSelectedCities(countryData?.city || []);
//     } else {
//       setSelectedCities([]);
//     }
//   }, [selectedCountry]);

//   const createCitySlug = (country: string, city: string) => {
//     return `${country.toLowerCase()}-${city
//       .toLowerCase()
//       .replace(/\s+/g, "-")}`;
//   };

//   const scroll = (direction: "left" | "right") => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = 200;
//       scrollContainerRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const handleCountrySelect = (location: any) => {
//     setSelectedCountry(location);
//   };

//   const handleCityClick = (city: string) => {
//     if (selectedCountry) {
//       console.log(`City clicked: ${city}`);
//       const slug = createCitySlug(selectedCountry.country, city);
//       router.push(`/courses/${slug}`);
//     }
//   };

//   const renderCityList = (cities: string[], country: string) => {
//     if (!cities.length) {
//       return (
//         <div className="py-8 text-center">
//           <MapPin className="mx-auto h-12 w-12 text-gray-400 mb-3" />
//           <p className="text-sm text-gray-500">
//             No cities available in this country yet
//           </p>
//         </div>
//       );
//     }

//     const itemsPerColumn = 5;
//     const numberOfColumns =
//       cities.length <= 5 ? 1 : Math.ceil(cities.length / itemsPerColumn);

//     return (
//       <div
//         className="grid gap-4"
//         style={{
//           gridTemplateColumns: `repeat(${numberOfColumns}, minmax(0, 1fr))`,
//         }}
//       >
//         {cities.map((city, index) => (
//           <Link
//             key={index}
//             href={`/courses/${createCitySlug(country, city)}`}
//             className="block p-2 hover:bg-primary rounded-md transition-colors"
//           >
//             <li className="">{city}</li>
//           </Link>
//         ))}
//       </div>
//     );
//   };

//   console.log(selectedCountry);

//   return (
//     <div className="container mx-auto pt-40">
//       <div className="flex flex-col space-y-6 mt-6">
//         <h1 className="text-3xl font-bold">B. Course Details</h1>

//         <div className="relative">
//           {locationData.length > 4 && (
//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
//               onClick={() => scroll("left")}
//             >
//               <ChevronLeft className="h-4 w-4" />
//             </Button>
//           )}

//           <div
//             ref={scrollContainerRef}
//             className="flex overflow-x-auto gap-2 px-2 scrollbar-hide snap-x snap-mandatory"
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//           >
//             {locationData.map((location: any) => (
//               <Popover key={location.id}>
//                 <PopoverTrigger asChild>
//                   <Card
//                     className={`flex-shrink-0 cursor-pointer snap-center hover:bg-primary transition-all ${
//                       selectedCountry?.id === location.id ? "bg-primary" : ""
//                     }`}
//                     onClick={() => handleCountrySelect(location)}
//                   >
//                     <CardContent className="p-1 w-36">
//                       <h2 className="text-center font-semibold truncate">
//                         {location.id}. {location.country}
//                       </h2>
//                     </CardContent>
//                   </Card>
//                 </PopoverTrigger>
//                 {/* <PopoverContent className="w-auto min-w-[200px]">
//                   <div className="space-y-2">
//                     <h3 className="font-semibold border-b pb-2">
//                       {location.country}
//                     </h3>
//                     {renderCityList(location.city, location.country)}
//                   </div>
//                 </PopoverContent> */}
//               </Popover>
//             ))}
//           </div>

//           {locationData.length > 4 && (
//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
//               onClick={() => scroll("right")}
//             >
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           )}
//         </div>

//         <div className="w-full h-auto lg:h-[20rem] flex flex-col lg:flex-row gap-4">
//           {selectedCountry !== null ? (
//             <div className="flex flex-col w-full lg:w-3/4 px-6">
//               <div className="flex justify-start items-center py-4">
//                 <h2 className="text-xl font-bold">
//                   Find your {selectedCountry.country} Golf Course by selecting a
//                   Golf Destination
//                 </h2>
//               </div>
//               <Separator />
//               <div className="flex justify-start items-center py-4">
//                 <p className="text-base">
//                   {selectedCountry.country}, a hidden gem in Southeast Asia,
//                   offers a unique and tranquil golfing experience surrounded by
//                   breathtaking landscapes.
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center bg-card rounded border w-full lg:w-3/4">
//               <h1>Select a Country</h1>
//             </div>
//           )}
//           {/* Country Map */}
//           <div className="w-full lg:w-1/4 overflow-hidden rounded border bg-gray-50">
//             <CountryMap
//               country={selectedCountry?.country || null}
//               className="w-full h-full"
//               onCityClick={handleCityClick}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
