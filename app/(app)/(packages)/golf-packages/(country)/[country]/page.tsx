"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { capitalizeFirstLetter, encodeUrlParam } from "@/utils/url-helpers";
import { notFound } from "next/navigation";
import Tag from "@/components/layout/tag";

interface Props {
  params: {
    country: string;
  };
}

export default function PackageCountryPage({ params }: Props) {
  const data = [
    {
      country: "China",
      city: ["Wei Hai", "Qing Dao", "Yantai", "Beijing"],
    },
    {
      country: "Indonesia",
      city: ["Batam"],
    },
    {
      country: "Singapore",
      city: ["Singapore"],
    },
    {
      country: "Malaysia",
      city: ["Johor", "Malaysia"],
    },
  ];

  const { country } = params;
  const countryData = data.find(
    (c) => c.country.toLowerCase() === country.toLowerCase()
  );

  if (!countryData) {
    notFound();
  }
  return (
    <>
      <div className="md:container mx-auto pt-[0.5rem] md:pt-34 lg:pt-34 overflow-x-hidden">
        <div className="relative h-[20rem]">
          <div className="h-full px-2">
            <div className="fixed inset-0 -z-10">
              <picture>
                {/* Mobile-optimized image with higher quality and vibrancy */}
                <source media="(max-width: 767px)" srcSet="/loc-3.jpg" />
                {/* Desktop image */}
                <source media="(min-width: 768px)" srcSet="/loc-3.jpg" />
                <Image
                  src="/loc-3.jpg"
                  alt="Golf course background"
                  fill
                  className="object-cover md:opacity-70 brightness-[1.1] contrast-[1.05] md:brightness-100 md:contrast-100"
                  priority
                  quality={90}
                />
              </picture>
            </div>
            {/* content */}
            <div className="top-0 left-0 right-0 p-2 text-white">
              <div className="bg-red-700 rounded-none md:mb-1 p-1 w-[13rem] md:w-[20rem]">
                <div className="flex justify-start items-center text-sm md:text-base gap-2 ">
                  <h2 className="text-md lg:text-2xl font-bold">
                    {capitalizeFirstLetter(country)} Golf Packages
                  </h2>
                </div>
              </div>
            </div>
            <div className="pl-2">
              <Tag />
            </div>

            <div className="pl-1 h-[10rem]">
              {/* <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                Key Features:
              </h3> */}
              <div className="bg-white/30 md:bg-none">
                {countryData.city.map((item, index) => (
                  <Link
                    key={index}
                    href={`/golf-packages/${encodeUrlParam(
                      countryData.country
                    )}/${encodeUrlParam(item)}`}
                    className="w-1/2 md:w-1/3 lg:w-1/4 flex flex-warp items-start p-1"
                  >
                    <div className="bg-black md:bg-white rounded-full w-1.5 h-1.5 mt-1 mr-0.5 md:w-2 md:h-2 md:mt-1.5 md:mr-1 flex-shrink-0"></div>
                    <span className="text-black md:text-white text-xs md:text-base">
                      {item}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
