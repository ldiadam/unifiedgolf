import React from "react";
import Link from "next/link";
import locationData from "@/data/locationData.json";
import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golf Courses",
  description: "",
};

export default function CoursesPage() {
  return (
    <div className="container mx-auto pt-44">
      <div className="flex flex-col gap-2">
        {/* <h1 className="text-3xl font-bold">B. Course Details</h1>
        <Separator />
        <p className="text-lg mb-2">
          Select a country to view available golf courses:
        </p> */}

        <div className="relative pt-3">
          <div className="relative h-[30rem] rounded-lg overflow-hidden">
            {/* Background Image */}
            {/* <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${locationData[0].image})` }}
            ></div> */}
            <div className="fixed inset-0 -z-10">
              <Image
                src="/jagorawi-golf-&-country-club-img-2.jpg"
                alt="Golf course background"
                fill
                className="object-cover opacity-50"
                priority
              />
            </div>
            {/* Content */}
            <div className="absolute top-0 left-0 right-0 p-2 text-white">
              <div className="bg-red-700/70 rounded-sm mb-6 p-1 max-w-xs">
                <div className="flex justify-center items-center text-sm md:text-base gap-2 ">
                  <MapPin className="h-4 w-4 lg:h-5 lg:w-5" />
                  <h2 className="text-md lg:text-2xl font-bold">
                    Country Golf Courses
                  </h2>
                </div>
              </div>

              <div className="my-5 w-full p-4">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="flex flex-row gap-2 md:gap-6 lg:gap-10 items-center justify-center">
                    <div className="bg-black p-2">
                      <h2 className="text-xs md:text-lg lg:text-xl text-white">
                        Reliable
                      </h2>
                    </div>
                    <div className="bg-black p-2">
                      <h2 className="text-xs md:text-lg lg:text-xl text-white">
                        Comprehensive
                      </h2>
                    </div>
                    <div className="bg-black p-2">
                      <h2 className="text-xs md:text-lg lg:text-xl text-white">
                        Professional
                      </h2>
                    </div>
                    <div className="bg-black p-2">
                      <h2 className="text-xs md:text-lg lg:text-xl text-white">
                        Integrity
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="mt-2 h-[175px] bg-card/50 rounded-xl p-2"> */}
              {/* <div className="mt-4 px-4 h-[10rem]"> */}
              {/* <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                Key Features:
              </h3> */}
              <div className="mt-4 px-4 h-[10rem] flex flex-wrap">
                {locationData.map((item, index) => (
                  <Link
                    key={index}
                    href={`/courses/${item.country.toLowerCase()}`}
                    className="w-1/2 md:w-1/3 lg:w-1/4 flex items-start p-1"
                  >
                    <div className="bg-white rounded-full w-2 h-2 mt-1.5 mr-2 flex-shrink-0"></div>
                    <span className="text-white text-sm md:text-base">
                      {item.country}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
