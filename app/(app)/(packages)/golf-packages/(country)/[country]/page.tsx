"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { capitalizeFirstLetter, encodeUrlParam } from "@/utils/url-helpers";
import { notFound } from "next/navigation";

interface Props {
  params: {
    country: string;
  };
}

export default function PackageCountryPage({ params }: Props) {
  const data = [
    {
      country: "Australia",
      city: ["Canbera"],
    },
    {
      country: "Cambodia",
      city: ["Phom Penh"],
    },
    {
      country: "China",
      city: ["Wei Hai", "Qing Dao", "Yantai"],
    },
    {
      country: "Indonesia",
      city: ["Jakarta", "Bandung", "Bali", "Batam"],
    },
    {
      country: "Japan",
      city: ["Hokkaido"],
    },
    {
      country: "Laos",
      city: [""],
    },
    {
      country: "New Zealand",
      city: [""],
    },
    {
      country: "Singapore",
      city: ["Singapore"],
    },
    {
      country: "Thailand",
      city: ["Phuket"],
    },
    {
      country: "Vietnam",
      city: ["Hanoi"],
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
      <div className="container mx-auto pt-48 lg:pt-42">
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
              <div className="bg-green-700/70 rounded-xl mb-6 p-1 max-w-xs">
                <div className="flex justify-center items-center text-sm md:text-base gap-2 ">
                  <MapPin className="h-4 w-4 lg:h-5 lg:w-5" />
                  <h2 className="text-md lg:text-2xl font-bold">
                    {capitalizeFirstLetter(country)} Golf Package
                  </h2>
                </div>
              </div>
            </div>
            <div className="my-1 bg-black bg-opacity-50 w-full p-4">
              <div className="flex flex-col gap-2 items-center justify-center">
                <div>
                  <div className="flex flex-row gap-1 md:gap-6 lg:gap-10 items-center justify-center">
                    <h2 className="text-xs md:text-lg lg:text-xl text-white">
                      Reliable
                    </h2>
                    <h2 className="text-sm md:text-lg lg:text-xl text-white">
                      |
                    </h2>
                    <h2 className="text-xs md:text-lg lg:text-xl text-white">
                      Comprehensive
                    </h2>
                    <h2 className="text-sm md:text-lg lg:text-xl text-white">
                      |
                    </h2>

                    <h2 className="text-xs md:text-lg lg:text-xl text-white">
                      Professional
                    </h2>
                    <h2 className="text-sm md:text-lg lg:text-xl text-white">
                      |
                    </h2>

                    <h2 className="text-xs md:text-lg lg:text-xl text-white">
                      Integrity
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 px-4 h-[10rem]">
              {/* <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                Key Features:
              </h3> */}
              <div className="">
                {countryData.city.map((item, index) => (
                  <Link
                    key={index}
                    href={`/golf-packages/${encodeUrlParam(
                      countryData.country
                    )}/${encodeUrlParam(item)}`}
                    className="w-1/2 md:w-1/3 lg:w-1/4 flex flex-warp items-start p-1"
                  >
                    <div className="bg-green-600 rounded-full w-2 h-2 mt-1.5 mr-2 flex-shrink-0"></div>
                    <span className="text-white text-sm md:text-base">
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
