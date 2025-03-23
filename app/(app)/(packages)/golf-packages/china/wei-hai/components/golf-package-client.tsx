import Image from "next/image";
import { Info, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

type GolfPackageDay = {
  day: number;
  title: string;
  description: string;
};

type Accommodation = {
  name: string;
  stars: number;
};
type GolfPackage = {
  title: string;
  city_1: string;
  city_2: string;
  city_3: string;
  country: string;
  days: number;
  nights: number;
  games: number;
  price: number;
  currency: string;
  description: string;
  itinerary: GolfPackageDay[];
  inclusions: string[];
  exclusions: string[];
  recommendedHotel: string;
  accommodation: Accommodation[];
  breakfast: boolean;
  golfCourses: string[];
  buggyService: string;
  caddyService: string;
  transportation: string[];
  food: string[];
  guideServices: string[];
  locations: string[];
};

export function GolfPackageDisplay({
  golfPackage,
}: {
  golfPackage: GolfPackage;
}) {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-xl md:text-4xl font-bold mb-2">
            Golf Package for Wei Hai/China Qing Dao
          </h1>
          {/* <ul className="list-disc mb-2">
            <li className="text-md">
              Location: {golfPackage.city_1} / {golfPackage.city_2}
            </li>
            <li className="text-md">
              Location: {golfPackage.city_1} / {golfPackage.city_2}
            </li>
          </ul> */}

          {/* <div className=" mb-6">
            <p className="mb-4">{golfPackage.description}</p>
            <p className="flex items-center text-green-600 font-medium">
              <FileText className="h-5 w-5 mr-2" />
              Read the complete {golfPackage.title} Itinerary
            </p>
          </div> */}

          <div className="border-t border-b border-gray-200 py-3 my-6">
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-3 gap-1">
                <div>
                  <p className="text-md font-medium">Shandong / Weihai</p>
                  <p className="text-sm text-gray-500">Location</p>
                </div>
                <div>
                  <p className="text-md font-medium">5 Days / 4 Nights</p>
                  <p className="text-sm text-gray-500">Tour Length</p>
                </div>
                <div>
                  <p className="text-md font-medium">4</p>
                  <p className="text-sm text-gray-500">Games</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div>
                  <p className="text-md font-medium">3</p>
                  <p className="text-sm text-gray-500">Duration</p>
                </div>
                <div>
                  <p className="text-md font-medium">30 / 40</p>
                  <p className="text-sm text-gray-500">Nos of Golfer</p>
                </div>
                <div>
                  <div className="flex flex-col gap-1">
                    <p className="text-md font-medium">April to June</p>
                    <p className="text-md font-medium">September to November</p>
                  </div>
                  <p className="text-sm text-gray-500">Period</p>
                </div>
              </div>

              {/* <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-bold text-green-600">
                    {golfPackage.currency} {golfPackage.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">Price from</p>
                </div>
                <div>
                  <p className="text-xl font-medium">{golfPackage.city_1}</p>
                  <p className="text-sm text-gray-500">Start Location</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="text-xl font-medium">
                      {golfPackage.days} Days
                    </p>
                    <Info className="h-4 w-4 ml-1 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500">Tour Length</p>
                </div>
              </div> */}
            </div>
          </div>

          <Button className="w-full py-6 bg-secondary hover:bg-primary text-white rounded-md">
            <Link href="/maintenance">
              Request a Quote for the {golfPackage.title}
            </Link>
          </Button>
        </div>

        <div>
          <Image
            src="/loc-4.jpg"
            alt="Golf Course"
            width={600}
            height={400}
            className="rounded-md w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="lg:col-span-2 bg-transparent">
          <CardHeader>
            <CardTitle>Package to Include</CardTitle>
            <CardDescription>
              Complete information about the golf package
            </CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="space-y-4 mt-4">
            {golfPackage.accommodation.length > 0 && (
              <>
                <div>
                  <h3 className="text-lg font-bold mb-1">Accommodation</h3>
                  <div className="space-y-2">
                    {golfPackage.accommodation.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="font-medium">{item.name}</span>
                        <div className="flex">
                          {Array.from({ length: Math.floor(item.stars) }).map(
                            (_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            )
                          )}
                          {item.stars % 1 !== 0 && (
                            <svg
                              className="w-5 h-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
              </>
            )}

            <div>
              <h3 className="text-lg font-bold mb-1">Breakfast</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Included</li>
              </ul>
            </div>
            <Separator />

            {golfPackage.locations.length > 0 && (
              <>
                <div>
                  <h3 className="text-lg font-bold mb-1">Nos of Golf</h3>
                  <div className="space-y-2">
                    {golfPackage.locations.map((item, index) => (
                      <Badge key={index} variant="outline" className="mr-2">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Separator />
              </>
            )}
            {golfPackage.golfCourses.length > 0 && (
              <>
                <div>
                  <h3 className="text-lg font-bold mb-1">Name of Course</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {golfPackage.golfCourses.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <Separator />
              </>
            )}

            {golfPackage.buggyService.length > 0 && (
              <>
                <div>
                  <h3 className="text-lg font-bold mb-1">Buggy</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>{golfPackage.buggyService}</li>
                  </ul>
                </div>
                <Separator />
              </>
            )}
            {golfPackage.caddyService.length > 0 && (
              <>
                <div>
                  <h3 className="text-lg font-bold mb-1">Caddy</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>{golfPackage.caddyService}</li>
                  </ul>
                </div>
                <Separator />
              </>
            )}
            {golfPackage.transportation.length > 0 && (
              <>
                <div>
                  <h3 className="text-lg font-bold mb-1">Transportation</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {golfPackage.transportation.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <Separator />
              </>
            )}
            {golfPackage.food.length > 0 && (
              <>
                <div>
                  <h3 className="text-lg font-bold mb-1">Food</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {golfPackage.food.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <Separator />
              </>
            )}

            {golfPackage.guideServices.length > 0 && (
              <div>
                <h3 className="text-lg font-bold mb-1">Guide Services</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {golfPackage.guideServices.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-transparent lg:col-span-2">
          <CardHeader>
            <CardTitle>Package Excludes</CardTitle>
            <CardDescription>Items not included in the package</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {golfPackage.exclusions.map((item, index) => (
                <li key={index} className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
