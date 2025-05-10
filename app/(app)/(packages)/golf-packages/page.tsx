"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function StandardPackagesPage() {
  const country = ["China", "Indonesia", "Malaysia", "Singapore"];

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
                  <MapPin className="h-4 w-4 lg:h-5 lg:w-5" />
                  <h2 className="text-md lg:text-2xl font-bold">
                    Country Golf Package
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
              {/* <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                Key Features:
              </h3> */}
              <div className="">
                {country.map((item, index) => (
                  <Link
                    key={index}
                    href={`/golf-packages/${item.toLowerCase()}`}
                    className="w-1/2 md:w-1/3 lg:w-1/4 flex items-start p-1"
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
