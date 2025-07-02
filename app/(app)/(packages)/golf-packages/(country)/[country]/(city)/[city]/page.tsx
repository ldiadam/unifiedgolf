"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import {
  capitalizeFirstLetter,
  decodeUrlParam,
  encodeUrlParam,
} from "@/utils/url-helpers";
import { notFound } from "next/navigation";
import Tag from "@/components/layout/tag";

interface Props {
  params: {
    country: string;
    city: string;
  };
}

interface PackageData {
  id: number;
  package: string[];
  country: string;
  city: string[];
}

export default function PackageCityPage({ params }: Props) {
  // Indexed data structure for better lookup
  const data: PackageData[] = [
    {
      id: 1,
      package: ["Weh Hai Qing Dao Yantai Golf Holiday"],
      country: "China",
      city: ["Wei Hai", "Qing Dao", "Yantai"],
    },
    {
      id: 2,
      package: ["Beijing Golf Holiday"],
      country: "China",
      city: ["Beijing"],
    },
    {
      id: 3,
      package: [
        "2 Days 1 Night Weekdays Golf Package in Batam",
        "3 Days 2 Nights Weekdays Golf Package in Batam",
      ],
      country: "Indonesia",
      city: ["Batam"],
    },
    {
      id: 4,
      package: ["Singapore Malaysia Golf Holiday"],
      country: "Singapore",
      city: ["Singapore"],
    },
    {
      id: 5,
      package: [
        "Singapore Malaysia Golf Holiday",
        "Malaysia Johor Golf Package",
      ],
      country: "Malaysia",
      city: ["Johor", "Malaysia"],
    },
    {
      id: 6,
      package: ["Hua Hin Golf Package"],
      country: "Thailand",
      city: ["Hua Hin"],
    },
  ];

  const { country } = params;
  const decodedCity = decodeUrlParam(params.city);

  // Create lookup maps for faster and more reliable access
  const countryMap = new Map<string, PackageData[]>();

  // Build an index of data by country
  data.forEach((item) => {
    const lowercaseCountry = item.country.toLowerCase();
    if (!countryMap.has(lowercaseCountry)) {
      countryMap.set(lowercaseCountry, []);
    }
    countryMap.get(lowercaseCountry)?.push(item);
  });

  // Get all items for the requested country
  const countryItems = countryMap.get(country.toLowerCase()) || [];

  if (countryItems.length === 0) {
    notFound();
  }

  // Now find packages for this city
  const packagesForCity: string[] = [];
  let cityExists = false;

  for (const item of countryItems) {
    // Check if this city exists in the current item
    const cityMatch = item.city.find(
      (city) => city.toLowerCase() === decodedCity.toLowerCase()
    );

    if (cityMatch) {
      cityExists = true;
      packagesForCity.push(...item.package);
    }
  }

  if (!cityExists) {
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
              <div className="bg-red-700 rounded-none md:mb-0.5 p-1 w-[13rem] md:w-[20rem]">
                <div className="flex justify-start items-center text-sm md:text-base gap-2 ">
                  <h2 className="text-md lg:text-2xl font-bold">
                    {decodedCity} Golf Packages
                  </h2>
                </div>
              </div>
            </div>
            <div className="pl-2">
              <Tag />
            </div>

            <div className="pl-2 h-[10rem]">
              {packagesForCity.length > 0 ? (
                <ul className="space-y-2">
                  {packagesForCity.map((packageName, index) => (
                    <li key={index} className="flex items-start">
                      <Link
                        href={`/golf-packages/${country}/${encodeUrlParam(
                          decodedCity
                        )}/${encodeUrlParam(packageName)}`}
                        className="flex flex-row"
                      >
                        <div className="bg-black md:bg-white rounded-full w-1.5 h-1.5 mt-1 mr-0.5 md:w-2 md:h-2 md:mt-1.5 md:mr-1 flex-shrink-0"></div>
                        <span className="text-black md:text-white text-xs md:text-base">
                          {packageName}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">
                  No packages available for this city at the moment.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
