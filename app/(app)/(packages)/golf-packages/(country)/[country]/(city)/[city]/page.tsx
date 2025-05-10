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

interface Props {
  params: {
    country: string;
    city: string;
  };
}

export default function PackageCityPage({ params }: Props) {
  const data = [
    {
      package: ["Weh Hai Qing Dao Yantai Golf Holiday"],
      country: "China",
      city: ["Wei Hai", "Qing Dao", "Yantai"],
    },
    {
      package: ["Beijing Golf Holiday"],
      country: "China",
      city: ["Beijing"],
    },
    {
      package: [
        "2 Days 1 Night Weekdays Golf Package in Batam",
        "3 Days 2 Nights Weekdays Golf Package in Batam",
      ],
      country: "Indonesia",
      city: ["Batam"],
    },
    {
      package: ["Singapore Malaysia Golf Holiday"],
      country: "Singapore",
      city: ["Singapore"],
    },
    {
      package: [
        "Singapore Malaysia Golf Holiday",
        "Malaysia Johor Golf Package",
      ],
      country: "Malaysia",
      city: ["Johor", "Malaysia"],
    },
  ];

  const { country } = params;
  const decodedCity = decodeUrlParam(params.city);
  const countryData = data.find(
    (c) => c.country.toLowerCase() === country.toLowerCase()
  );

  const cityExists = countryData?.city.includes(decodedCity);
  // console.log(cityExists);

  // Find packages for the current city
  const cityPackages =
    data
      .filter((item) => item.country.toLowerCase() === country.toLowerCase())
      .find((item) => item.city.includes(decodedCity))?.package || [];

  if (!countryData || !cityExists) {
    notFound();
  }
  // console.log(cityExists);

  return (
    <>
      <div className="container mx-auto pt-[2rem] md:pt-42 lg:pt-42">
        <div className="relative h-[20rem]">
          <div className="h-full">
            <div className="fixed inset-0 -z-10">
              <Image
                src="/jagorawi-golf-&-country-club-img-1.jpg"
                alt="Golf course background"
                fill
                className="object-cover opacity-50"
                priority
              />
            </div>
            {/* content */}
            <div className="top-0 left-0 right-0 p-2 text-white">
              <div className="bg-red-700/70 rounded-xl mb-6 p-1 max-w-xs">
                <div className="flex justify-center items-center text-sm md:text-base gap-2 ">
                  {/* <MapPin className="h-4 w-4 lg:h-5 lg:w-5" /> */}
                  <h2 className="text-md lg:text-2xl font-bold">
                    {decodedCity} Golf Packages
                  </h2>
                </div>
              </div>
            </div>
            <div className="my-1  w-full p-4">
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex flex-row gap-2 md:gap-6 lg:gap-10 items-center justify-center">
                  <div className="bg-black p-2">
                    <h2 className="text-xs md:text-lg lg:text-xl text-white">
                      Professional
                    </h2>
                  </div>
                  <div className="bg-black p-2">
                    <h2 className="text-xs md:text-lg lg:text-xl text-white">
                      Comprehensive
                    </h2>
                  </div>
                  <div className="bg-black p-2">
                    <h2 className="text-xs md:text-lg lg:text-xl text-white">
                      Reliable
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
            <div className="mt-4 px-4 h-[10rem]">
              {cityPackages.length > 0 ? (
                <ul className="space-y-2">
                  {cityPackages.map((packageName, index) => (
                    <li key={index} className="flex items-start">
                      <Link
                        href={`/golf-packages/${
                          countryData.country
                        }/${encodeUrlParam(decodedCity)}/${encodeUrlParam(
                          packageName
                        )}`}
                        className="flex flex-row"
                      >
                        <div className="bg-green-600 rounded-full w-2 h-2 mt-1.5 mr-2 flex-shrink-0"></div>
                        <span className="text-white text-sm md:text-base">
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
