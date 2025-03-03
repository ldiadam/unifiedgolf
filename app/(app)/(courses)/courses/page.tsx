import React from "react";
import Link from "next/link";
import locationData from "@/data/locationData.json";
import { Separator } from "@/components/ui/separator";

export default function CoursesPage() {
  return (
    <div className="container mx-auto pt-44">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">B. Course Details</h1>
        <Separator />
        <p className="text-lg mb-2">
          Select a country to view available golf courses:
        </p>

        {/* Country Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {locationData.slice(0, 3).map((country, index) => (
            <Link
              href={`/courses/${country.country.toLowerCase()}`}
              key={index}
            >
              <div className="relative h-80 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${country.image})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{country.country}</h2>
                  <p className="text-xl">
                    {country.city.length} cities available
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Special Layout for 4th Item (Cambodia) */}
        <div className="">
          <Link href="/courses/japan">
            <div className="relative h-64 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${locationData[3].image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-3xl font-bold mb-2">
                  {locationData[3].country}
                </h2>
                <p className="text-xl">
                  {" "}
                  {locationData[3].city.length} cities available
                </p>
              </div>
            </div>
          </Link>
        </div>
        {/* Country Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {locationData.slice(4, 7).map((country, index) => (
            <Link
              href={`/courses/${country.country.toLowerCase()}`}
              key={index}
            >
              <div className="relative h-80 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${country.image})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{country.country}</h2>
                  <p className="text-xl">
                    {country.city.length} cities available
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Special Layout for 4th Item (Cambodia) */}
        <div className="">
          <Link href="/courses/philippines">
            <div className="relative h-64 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${locationData[7].image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-3xl font-bold mb-2">
                  {locationData[7].country}
                </h2>
                <p className="text-xl">
                  {" "}
                  {locationData[7].city.length} cities available
                </p>
              </div>
            </div>
          </Link>
        </div>
        {/* Country Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {locationData.slice(8, 11).map((country, index) => (
            <Link
              href={`/courses/${country.country.toLowerCase()}`}
              key={index}
            >
              <div className="relative h-80 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${country.image})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{country.country}</h2>
                  <p className="text-xl">
                    {country.city.length} cities available
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Special Layout for 4th Item (Cambodia) */}
        <div className="">
          <Link href="/courses/philippines">
            <div className="relative h-64 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${locationData[11].image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-3xl font-bold mb-2">
                  {locationData[11].country}
                </h2>
                <p className="text-xl">
                  {" "}
                  {locationData[11].city.length} cities available
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {locationData.map((country) => (
          <Link
            key={country.country}
            href={`/courses/${country.country.toLowerCase()}`}
            className="p-4 border rounded-lg hover:bg-primary/10 transition-colors"
          >
            <h2 className="text-xl font-semibold">{country.country}</h2>
            <p className="text-gray-600">
              {country.city.length} cities available
            </p>
          </Link>
        ))}
      </div> */}
    </div>
  );
}
