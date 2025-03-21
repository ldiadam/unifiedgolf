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

        {/* Special Layout for China */}
        <div className="">
          <Link href="/courses/china">
            <div className="relative h-64 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${locationData[0].image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-3xl font-bold mb-2">
                  {locationData[0].country}
                </h2>
                <div className="text-sm flex flex-wrap items-center">
                  {locationData[0].city.map((city, index) => (
                    <React.Fragment key={index}>
                      <Link
                        href={`/courses/${locationData[0].country.toLowerCase()}/${city.toLowerCase()}`}
                      >
                        <span className="hover:underline">{city}</span>
                      </Link>
                      {index < locationData[0].city.length - 1 && (
                        <span className="mx-2 border-l border-gray-400 h-4"></span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* Country Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {locationData.slice(1, 4).map((country, index) => (
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
                  <div className="text-sm flex flex-wrap items-center">
                    {country.city.map((city, index) => (
                      <React.Fragment key={index}>
                        <Link
                          href={`/courses/${country.country.toLowerCase()}/${city.toLowerCase()}`}
                        >
                          <span className="hover:underline">{city}</span>
                        </Link>
                        {index < country.city.length - 1 && (
                          <span className="mx-2 border-l border-gray-400 h-4"></span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Special Layout for Laos */}
        <div className="">
          <Link href="/courses/laos">
            <div className="relative h-64 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${locationData[4].image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-3xl font-bold mb-2">
                  {locationData[4].country}
                </h2>
                <div className="text-sm flex flex-wrap items-center">
                  {locationData[4].city.map((city, index) => (
                    <React.Fragment key={index}>
                      <Link
                        href={`/courses/${locationData[4].country.toLowerCase()}/${city.toLowerCase()}`}
                      >
                        <span className="hover:underline">{city}</span>
                      </Link>
                      {index < locationData[4].city.length - 1 && (
                        <span className="mx-2 border-l border-gray-400 h-4"></span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* Country Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {locationData.slice(5, 8).map((country, index) => (
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
                  <div className="text-sm flex flex-wrap items-center">
                    {country.city.map((city, index) => (
                      <React.Fragment key={index}>
                        <Link
                          href={`/courses/${country.country.toLowerCase()}/${city.toLowerCase()}`}
                        >
                          <span className="hover:underline">{city}</span>
                        </Link>
                        {index < country.city.length - 1 && (
                          <span className="mx-2 border-l border-gray-400 h-4"></span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Special Layout for singapore */}
        <div className="">
          <Link href="/courses/singapore">
            <div className="relative h-64 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${locationData[8].image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-3xl font-bold mb-2">
                  {locationData[8].country}
                </h2>
                <div className="text-sm flex flex-wrap items-center">
                  {locationData[8].city.map((city, index) => (
                    <React.Fragment key={index}>
                      <Link
                        href={`/courses/${locationData[8].country.toLowerCase()}/${city.toLowerCase()}`}
                      >
                        <span className="hover:underline">{city}</span>
                      </Link>
                      {index < locationData[8].city.length - 1 && (
                        <span className="mx-2 border-l border-gray-400 h-4"></span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* Country Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {locationData.slice(9, 12).map((country, index) => (
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
                  <div className="text-sm flex flex-wrap items-center">
                    {country.city.map((city, index) => (
                      <React.Fragment key={index}>
                        <Link
                          href={`/courses/${country.country.toLowerCase()}/${city.toLowerCase()}`}
                        >
                          <span className="hover:underline">{city}</span>
                        </Link>
                        {index < country.city.length - 1 && (
                          <span className="mx-2 border-l border-gray-400 h-4"></span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
