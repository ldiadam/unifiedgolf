"use client";
import React, { useState, useEffect } from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/utils/utils";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronDown, ChevronUp, ArrowLeft, ChevronRight } from "lucide-react";
import locationData from "@/data/locationData.json"; // Import location data
import allData from "@/data/allData.json"; // Import course data
import { encodeUrlParam } from "@/utils/url-helpers";

interface RouteProps {
  id: number;
  href: string;
  label: string;
  hasChildren?: boolean;
}

// Extract countries and cities from locationData.json
const countries = locationData.map((country) => ({
  name: country.country,
  cities: country.city,
}));

// Extract course details for each city from allData.json
const courseDetails = allData.reduce(
  (acc: { [key: string]: { title: string; href: string }[] }, course) => {
    if (!acc[course.city]) {
      acc[course.city] = [];
    }
    acc[course.city].push({
      title: course.name,
      href: `/course-detail/${course.slug}`,
    });
    return acc;
  },
  {}
);

const routeList: RouteProps[] = [
  {
    id: 1,
    href: "/company",
    label: "A. Company Profile",
  },
  {
    id: 2,
    href: "/courses",
    label: "B. Course Detail",
    hasChildren: true,
  },
  {
    id: 3,
    href: "/standard-packages",
    label: "C. Standard Packages",
  },
  {
    id: 4,
    href: "/course-booking",
    label: "D. Course Booking",
  },
  {
    id: 5,
    href: "/maintenance",
    label: "E. Enquiry",
  },
  {
    id: 6,
    href: "/maintenance",
    label: "F. Contact",
  },
];

export const NavbarNew = () => {
  // Client-side only state initialization using useEffect
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [activeMobileCountry, setActiveMobileCountry] = useState<string | null>(
    null
  );

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Fix hydration mismatch by only rendering dynamic content on the client side
  useEffect(() => {
    setMounted(true);
    setIsOpen(true); // Set default state after mounting
  }, []);

  // Function to check if a city has courses
  const cityHasCourses = (city: string) => {
    return courseDetails[city as keyof typeof courseDetails] !== undefined;
  };

  const BackButton = () => (
    <Button
      variant="link"
      size="sm"
      className="flex items-center gap-2 hover:bg-none"
      asChild
    >
      <Link href="/">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
    </Button>
  );

  // Reset sequential selections when menu closes
  const handleMenuReset = () => {
    setSelectedCountry(null);
    setSelectedCity(null);
  };

  // Handle mobile menu toggles
  const toggleMobileMenu = (menuName: string) => {
    setActiveMobileMenu(activeMobileMenu === menuName ? null : menuName);
  };

  const toggleMobileCountry = (countryName: string) => {
    setActiveMobileCountry(
      activeMobileCountry === countryName ? null : countryName
    );
  };

  // If not mounted yet, return a simpler version to avoid hydration errors
  if (!mounted) {
    return (
      <div className="fixed z-50 w-full">
        <header className="shadow-inner bg-opacity-15 border border-secondary rounded-md p-2 bg-card">
          <div className="flex flex-col w-full">
            <div className="flex flex-nowrap justify-between items-center w-full ml-1">
              <div className="flex flex-col items-start gap-1">
                <Link href="/" className="flex items-center">
                  <Image
                    src={"/company-logo.jpg"}
                    width={80}
                    height={30}
                    alt="Company Logo"
                    className="rounded-md"
                  />
                </Link>
                <span className="text-xs font-bold">
                  Street No, Building No. Name, unit no, Province, City,
                  Country, Postal Code
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }

  return (
    <div className="fixed z-50 w-full">
      {/* Mobile Mode */}
      <div className="lg:hidden md:hidden flex justify-center">
        <header className="shadow-inner bg-opacity-15 mx-auto border border-secondary rounded-md bg-card flex flex-col w-full max-w-md">
          {/* Top section with logo and actions */}
          <div className="flex flex-col items-center p-2">
            <Link
              href="/"
              className="flex flex-col items-start py-4 mx-2 gap-1"
            >
              <Image
                src={"/company-logo.jpg"}
                width={80}
                height={30}
                alt="Company Logo"
                className="rounded-md"
              />
              <span className="text-xs font-bold">
                Street No, Building No. Name, unit no, Province, City, Country,
                Postal Code
              </span>
            </Link>

            <Separator />
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="w-full space-y-2"
            >
              <div className="flex items-center justify-between px-4">
                <h4 className="text-sm font-semibold">Menu</h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-9 p-0">
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
              </div>
              {isOpen ? <Separator /> : null}

              <CollapsibleContent className="space-y-2 max-h-96 overflow-y-auto">
                <nav className="flex flex-col w-full justify-center items-start py-2 pl-3">
                  {routeList.map((route) => (
                    <div key={route.id} className="w-full">
                      {route.hasChildren ? (
                        <Collapsible
                          className="w-full"
                          open={activeMobileMenu === route.label}
                          onOpenChange={() => toggleMobileMenu(route.label)}
                        >
                          <CollapsibleTrigger className="w-full">
                            <Link href={route.href} className="w-full">
                              <Button
                                variant={null}
                                size="sm"
                                className={cn(
                                  "px-1 sm:px-2 md:px-3",
                                  "h-8 sm:h-9 md:h-10",
                                  "rounded-md",
                                  "w-full text-left justify-between items-center flex"
                                )}
                              >
                                <span className="hover:text-primary">
                                  {route.label}
                                </span>
                                {activeMobileMenu === route.label ? (
                                  <ChevronUp className="h-4 w-4" />
                                ) : (
                                  <ChevronDown className="h-4 w-4" />
                                )}
                              </Button>
                            </Link>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="ml-4 border-l border-gray-200 pl-2 mt-1">
                            {/* Countries */}
                            {countries.map((country) => (
                              <Collapsible
                                key={country.name}
                                className="w-full"
                                open={activeMobileCountry === country.name}
                                onOpenChange={() =>
                                  toggleMobileCountry(country.name)
                                }
                              >
                                <CollapsibleTrigger className="w-full">
                                  <Link
                                    href={`/courses/${country.name}`}
                                    className="w-full"
                                  >
                                    <Button
                                      variant={null}
                                      size="sm"
                                      className="w-full text-left justify-between items-center flex py-1"
                                    >
                                      <span className="text-sm">
                                        {country.name}
                                      </span>
                                      {country.cities.length > 0 &&
                                        (activeMobileCountry ===
                                        country.name ? (
                                          <ChevronUp className="h-3 w-3" />
                                        ) : (
                                          <ChevronDown className="h-3 w-3" />
                                        ))}
                                    </Button>
                                  </Link>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="ml-4 border-l border-gray-200 pl-2">
                                  {/* Cities */}
                                  {country.cities.map((city) => (
                                    <div key={city} className="py-1">
                                      {cityHasCourses(city) ? (
                                        <Collapsible className="w-full">
                                          <CollapsibleTrigger className="w-full">
                                            <Link
                                              href={`/courses/${
                                                country.name
                                              }/${encodeUrlParam(city)}`}
                                              className="w-full"
                                            >
                                              <Button
                                                variant={null}
                                                size="sm"
                                                className="w-full text-left justify-between items-center flex py-0.5"
                                              >
                                                <span className="text-xs">
                                                  {city}
                                                </span>
                                                <ChevronDown className="h-3 w-3" />
                                              </Button>
                                            </Link>
                                          </CollapsibleTrigger>
                                          <CollapsibleContent className="ml-4 border-l border-gray-200 pl-2">
                                            {/* Courses */}
                                            {courseDetails[
                                              city as keyof typeof courseDetails
                                            ]?.map((course) => (
                                              <Link
                                                key={course.title}
                                                href={course.href}
                                                className="block py-0.5 text-xs hover:text-primary"
                                              >
                                                {course.title}
                                              </Link>
                                            )) || (
                                              <span className="block text-xs py-0.5">
                                                No courses available
                                              </span>
                                            )}
                                          </CollapsibleContent>
                                        </Collapsible>
                                      ) : (
                                        <span className="block text-xs py-0.5">
                                          {city}
                                        </span>
                                      )}
                                    </div>
                                  ))}
                                </CollapsibleContent>
                              </Collapsible>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <Button
                          asChild
                          variant={null}
                          size="sm"
                          className={cn(
                            "px-1 sm:px-2 md:px-3",
                            "h-8 sm:h-9 md:h-10",
                            "rounded-md",
                            "whitespace-nowrap",
                            "w-full text-left justify-start"
                          )}
                        >
                          <Link
                            className="hover:underline hover:text-primary"
                            href={route.href}
                          >
                            {route.label}
                          </Link>
                        </Button>
                      )}
                    </div>
                  ))}
                </nav>

                <Separator />

                <div className="flex w-full items-start">
                  <Link
                    href={"mailto:theunifiedgolf@gmail.com"}
                    className="text-xs font-bold"
                  >
                    <Button variant={"link"}>
                      Email: theunifiedgolf@gmail.com
                    </Button>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </header>
      </div>

      {/* Desktop Mode */}
      <div className="hidden lg:block md:block">
        <header className="shadow-inner bg-opacity-15 border border-secondary rounded-md p-1 bg-card">
          <div className="flex flex-col w-full">
            <div className="flex flex-nowrap justify-between items-center w-full ml-1">
              <div className="flex flex-col items-start gap-1">
                <Link href="/" className="flex items-center">
                  <Image
                    src={"/company-logo.jpg"}
                    width={80}
                    height={30}
                    alt=""
                    className="rounded-md"
                  />
                </Link>
                <span className="text-xs font-bold">
                  Street No, Building No. Name, unit no, Province, City,
                  Country, Postal Code
                </span>
              </div>
              <div className="flex h-full mt-14">
                <Link
                  href={"mailto:theunifiedgolf@gmail.com"}
                  className="text-xs font-bold"
                >
                  <Button variant={"link"}>
                    Email: theunifiedgolf@gmail.com
                  </Button>
                </Link>
              </div>
            </div>
            <Separator />
            <div className="flex justify-between items-center pt-1">
              <div className="flex flex-shrink-0 justify-between items-center">
                <NavigationMenu
                  className="hidden lg:block md:block"
                  onMouseLeave={handleMenuReset}
                >
                  <NavigationMenuList>
                    {routeList.map((route) => (
                      <NavigationMenuItem key={route.id}>
                        {route.hasChildren ? (
                          <>
                            <NavigationMenuTrigger>
                              <Link href={route.href}>{route.label}</Link>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="max-h-96 overflow-y-auto">
                              <div className="flex">
                                {/* Countries Column */}
                                <div className="bg-background p-0 w-[200px] min-h-[400px] rounded-l-md border-r border-gray-200">
                                  <ul className="py-2 px-0">
                                    {countries.map((country) => (
                                      <li
                                        key={country.name}
                                        className={cn(
                                          "px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-primary/20 transition-colors",
                                          selectedCountry === country.name &&
                                            "bg-primary/10 font-medium"
                                        )}
                                        onMouseEnter={() =>
                                          setSelectedCountry(country.name)
                                        }
                                      >
                                        <Link href={`/courses/${country.name}`}>
                                          <span>{country.name}</span>
                                        </Link>
                                        {country.cities.length > 0 && (
                                          <ChevronRight className="h-4 w-4" />
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Cities Column */}
                                {selectedCountry && (
                                  <div className="bg-background p-0 w-[200px] min-h-[400px] border-r border-gray-200">
                                    <ul className="py-2 px-0">
                                      {countries
                                        .find((c) => c.name === selectedCountry)
                                        ?.cities.map((city) => (
                                          <li
                                            key={city}
                                            className={cn(
                                              "px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-primary/20 transition-colors",
                                              selectedCity === city &&
                                                "bg-primary/10 font-medium"
                                            )}
                                            onMouseEnter={() =>
                                              setSelectedCity(city)
                                            }
                                          >
                                            <Link
                                              href={`/courses/${selectedCountry}/${encodeUrlParam(
                                                city
                                              )}`}
                                            >
                                              <span>{city}</span>
                                            </Link>
                                            {cityHasCourses(city) && (
                                              <ChevronRight className="h-4 w-4" />
                                            )}
                                          </li>
                                        ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Course Details Column */}
                                {selectedCity && (
                                  <div className="bg-background p-0 w-[250px] min-h-[400px] rounded-r-md">
                                    <ul className="py-2 px-0">
                                      {courseDetails[
                                        selectedCity as keyof typeof courseDetails
                                      ]?.map((course) => (
                                        <li key={course.title}>
                                          <Link
                                            href={course.href}
                                            className="px-4 py-2 block hover:bg-primary/20 transition-colors"
                                          >
                                            {course.title}
                                          </Link>
                                        </li>
                                      )) || (
                                        <li className="px-4 py-2">
                                          No courses available
                                        </li>
                                      )}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </NavigationMenuContent>
                          </>
                        ) : (
                          <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                          >
                            <Link href={route.href}>{route.label}</Link>
                          </NavigationMenuLink>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              {!isHomePage && <BackButton />}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
