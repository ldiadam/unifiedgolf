import React from "react";
import Link from "next/link";
import locationData from "@/data/locationData.json";
import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";
import Tag from "@/components/layout/tag";

export const metadata: Metadata = {
  title: "Country Golf Courses",
  description: "",
};

export default function CoursesPage() {
  return (
    <div className="md:container mx-auto pt-[0.5rem] md:pt-34 lg:pt-34 overflow-x-hidden">
      <div className="flex flex-col">
        {/* <h1 className="text-3xl font-bold">B. Course Details</h1>
        <Separator />
        <p className="text-lg mb-2">
          Select a country to view available golf courses:
        </p> */}

        {/* <div className="relative"> */}
        <div className="relative h-[30rem]">
          {/* Background Image */}
          {/* <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${locationData[0].image})` }}
            ></div> */}
          <div className="fixed inset-0 -z-10">
            <picture>
              {/* Mobile-optimized image with higher quality and vibrancy */}
              <source
                media="(max-width: 767px)"
                srcSet="/img-background-2.jpg"
              />
              {/* Desktop image */}
              <source
                media="(min-width: 768px)"
                srcSet="/img-background-2.jpg"
              />
              <Image
                src="/img-background-2.jpg"
                alt="Golf course background"
                fill
                className="object-cover md:opacity-70 brightness-[1.1] contrast-[1.05] md:brightness-100 md:contrast-100"
                priority
                quality={90}
              />
            </picture>
          </div>
          {/* Content */}
          <div className="absolute top-0 left-0 right-0 p-2 text-white px-4">
            <div className="bg-red-700 rounded-none mb-3 md:mb-3 p-1 w-[13rem] md:w-[20rem]">
              <div className="flex justify-start items-center text-sm md:text-base">
                <h2 className="text-md lg:text-2xl font-bold">
                  Country Golf Courses
                </h2>
              </div>
            </div>

            <div className="">
              <Tag />
            </div>

            {/* <div className="mt-2 h-[175px] bg-card/50 rounded-xl p-2"> */}
            {/* <div className="mt-4 px-4 h-[10rem]"> */}
            {/* <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                Key Features:
              </h3> */}
            <div className="h-[10rem]">
              <div className=" flex flex-wrap w-[50%] md:w-[30%] ">
                {locationData.map((item, index) => (
                  <Link
                    key={index}
                    href={`/courses/${item.country.toLowerCase()}`}
                    className="w-1/2 flex items-start py-2"
                  >
                    <div className="bg-black md:bg-white rounded-full w-1.5 h-1.5 mt-1 mr-0.5 md:w-2 md:h-2 md:mt-1.5 md:mr-1 flex-shrink-0"></div>
                    <span className="text-black md:text-white text-xs md:text-base">
                      {item.country}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
