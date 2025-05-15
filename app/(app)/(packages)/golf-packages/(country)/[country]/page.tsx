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

            <div className="px-4 h-[10rem]">
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
                    <div className="bg-white rounded-full w-2 h-2 mt-1.5 mr-2 flex-shrink-0"></div>
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
