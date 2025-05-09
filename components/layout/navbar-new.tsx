"use client";
import { useState, useEffect } from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/utils/utils";
import { usePathname, useRouter } from "next/navigation";
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
import {
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  ChevronRight,
  Phone,
  Mail,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import locationData from "@/data/locationData.json"; // Import location data
import allData from "@/data/allData.json"; // Import course data
import { encodeUrlParam, getCountryUrl } from "@/utils/url-helpers";

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
    label: "Company Profile",
  },
  {
    id: 2,
    href: "/courses",
    label: "Course Detail",
    // hasChildren: true,
  },
  {
    id: 3,
    href: "/golf-packages",
    label: "Golf Packages",
    // hasChildren: true,
  },
  // {
  //   id: 4,
  //   href: "/maintenance",
  //   label: "Course Booking",
  // },
];

// Add a new array for the items in the "More" dropdown
const moreMenuItems = [
  {
    id: 1,
    href: "/maintenance",
    label: "Booking",
  },
  {
    id: 2,
    href: "/maintenance",
    label: "Quotation",
  },
  {
    id: 3,
    href: "/maintenance",
    label: "Planner",
  },
  {
    id: 4,
    href: "/maintenance",
    label: "Email",
  },
  {
    id: 5,
    href: "/maintenance",
    label: "Enquiry",
  },
  {
    id: 6,
    href: "/contact",
    label: "Contact",
  },
  {
    id: 7,
    href: "/admin/address-book/list",
    label: "Admin Panel",
  },
];

export const NavbarNew = () => {
  // Client-side only state initialization using useEffect
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [activeMobileCountry, setActiveMobileCountry] = useState<string | null>(
    null
  );
  const [activeMobileCity, setActiveMobileCity] = useState<string | null>(null);

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const router = useRouter();

  // Fix hydration mismatch by only rendering dynamic content on the client side
  useEffect(() => {
    setMounted(true);
    setIsOpen(false); // Set default state after mounting
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
      <Link href="/" className="text-white">
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

  const toggleMobileCity = (cityName: string) => {
    setActiveMobileCity(activeMobileCity === cityName ? null : cityName);
  };

  // Modify the existing navigateAndCollapse function
  const navigateAndCollapse = (href: string) => {
    // Close all menus for mobile
    setIsOpen(false);
    setMoreOpen(false);
    setActiveMobileMenu(null);
    setActiveMobileCountry(null);
    setActiveMobileCity(null);

    // Reset desktop menu selection states
    setSelectedCountry(null);
    setSelectedCity(null);

    // Navigate to the selected page
    router.push(href);
  };

  // Add a new handler for desktop menu navigation
  const handleDesktopNavigation = (href: string) => {
    navigateAndCollapse(href);
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
                <h1 className="font-bold">Unified Golf Pte Ltd</h1>
                <span className="text-xs font-bold pb-1">
                  1, Thomson Road #04-330G, Singapore, 300001
                </span>
              </div>
              <div className="h-full mt-20 flex-col gap-1">
                <Link href={"tel:+6586929998"} className="text-xs font-bold">
                  <Button variant={"link"}>
                    <span className="text-white flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      +65 8692 9998
                    </span>
                  </Button>
                </Link>
                <Link href={"tel:+60125499839"} className="text-xs font-bold">
                  <Button variant={"link"}>
                    <span className="text-white flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      +6012 549 9839
                    </span>
                  </Button>
                </Link>

                <Link
                  href={"mailto:theunifiedgolf@gmail.com"}
                  className="text-xs font-bold"
                >
                  <Button variant={"link"}>
                    <span className="text-white flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      theunifiedgolf@gmail.com
                    </span>
                  </Button>
                </Link>
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
        {/* <header className="shadow-inner bg-opacity-15 mx-auto border border-secondary rounded-md bg-card flex flex-col w-full max-w-md"> */}
        <header className="mx-auto border border-secondary bg-card/80 flex flex-col w-full max-w-md">
          {/* Top section with logo and actions */}
          <div className="flex flex-col items-start p-1">
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="w-full space-y-2"
            >
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-sm font-semibold hover:bg-transparent"
                >
                  <h4>Menu</h4>
                </Button>
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
                  {/* Main menu items */}
                  {routeList.map((route) => (
                    <div key={route.id} className="w-full mb-2">
                      {route.hasChildren ? (
                        <Collapsible
                          className="w-full"
                          open={activeMobileMenu === route.label}
                          onOpenChange={() => toggleMobileMenu(route.label)}
                        >
                          <CollapsibleTrigger className="w-full">
                            <div className="w-full">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-full text-left justify-between items-center flex"
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
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="ml-4 border-l border-gray-200 pl-2 mt-1">
                            {/* Existing code for countries and cities */}
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
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full text-left justify-between items-center flex py-1"
                                  >
                                    <span className="text-sm">
                                      {country.name}
                                    </span>
                                    {country.cities.length > 0 &&
                                      (activeMobileCountry === country.name ? (
                                        <ChevronUp className="h-3 w-3" />
                                      ) : (
                                        <ChevronDown className="h-3 w-3" />
                                      ))}
                                  </Button>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="ml-4 border-l border-gray-200 pl-2">
                                  {/* Cities */}
                                  {country.cities.map((city) => (
                                    <div key={city} className="py-1">
                                      {cityHasCourses(city) &&
                                      route.label !== "C. Golf Packages" ? (
                                        <Collapsible
                                          className="w-full"
                                          open={activeMobileCity === city}
                                          onOpenChange={() =>
                                            toggleMobileCity(city)
                                          }
                                        >
                                          <CollapsibleTrigger className="w-full">
                                            <Button
                                              variant="ghost"
                                              size="sm"
                                              className="w-full text-left justify-between items-center flex py-0.5"
                                            >
                                              <span className="text-xs">
                                                {city}
                                              </span>
                                              {activeMobileCity === city ? (
                                                <ChevronUp className="h-3 w-3" />
                                              ) : (
                                                <ChevronDown className="h-3 w-3" />
                                              )}
                                            </Button>
                                          </CollapsibleTrigger>
                                          <CollapsibleContent className="ml-4 border-l border-gray-200 pl-2">
                                            {/* Courses */}
                                            {route.label !==
                                              "C. Golf Packages" &&
                                              courseDetails[city]?.map(
                                                (course) => (
                                                  <Button
                                                    key={course.title}
                                                    variant="ghost"
                                                    size="sm"
                                                    className="w-full text-left justify-start text-xs hover:text-primary px-2"
                                                    onClick={() =>
                                                      navigateAndCollapse(
                                                        route.label ===
                                                          "C. Golf Packages"
                                                          ? `/golf-packages/detail/${course.href
                                                              .split("/")
                                                              .pop()}`
                                                          : course.href
                                                      )
                                                    }
                                                  >
                                                    {course.title}
                                                  </Button>
                                                )
                                              )}
                                          </CollapsibleContent>
                                        </Collapsible>
                                      ) : (
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="w-full text-left justify-start items-center flex py-0.5"
                                          onClick={() =>
                                            navigateAndCollapse(
                                              route.label === "C. Golf Packages"
                                                ? `/golf-packages/${country.name.toLowerCase()}/${encodeUrlParam(
                                                    city
                                                  )}`
                                                : `/courses/${country.name.toLowerCase()}/${encodeUrlParam(
                                                    city
                                                  )}`
                                            )
                                          }
                                        >
                                          <span className="text-xs">
                                            {city}
                                          </span>
                                        </Button>
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
                          variant="ghost"
                          size="sm"
                          className="w-full text-left justify-start rounded-md"
                          onClick={() => navigateAndCollapse(route.href)}
                        >
                          <span className="hover:text-primary">
                            {route.label}
                          </span>
                        </Button>
                      )}
                    </div>
                  ))}

                  {/* More dropdown for mobile */}
                  <div className="w-full mb-2">
                    <Collapsible
                      className="w-full"
                      open={activeMobileMenu === "More"}
                      onOpenChange={() => toggleMobileMenu("More")}
                    >
                      <CollapsibleTrigger className="w-full">
                        <div className="w-full">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full text-left justify-between items-center flex"
                          >
                            <span className="hover:text-primary">Link</span>
                            {activeMobileMenu === "More" ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-4 border-l border-gray-200 pl-2 mt-1">
                        {moreMenuItems.map((item) => (
                          <Button
                            key={item.id}
                            variant="ghost"
                            size="sm"
                            className="w-full text-left justify-start rounded-md py-1"
                            onClick={() => navigateAndCollapse(item.href)}
                          >
                            <span className="hover:text-primary">
                              {item.label}
                            </span>
                          </Button>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </nav>

                <Separator />

                <div className="flex w-full items-start flex-col">
                  <Link href={"tel:+6586929998"} className="text-xs font-bold">
                    <Button variant={"link"}>
                      <span className="text-white flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        +65 8692 9998
                      </span>
                    </Button>
                  </Link>
                  <Link href={"tel:+60125499839"} className="text-xs font-bold">
                    <Button variant={"link"}>
                      <span className="text-white flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        +6012 549 9839
                      </span>
                    </Button>
                  </Link>
                  <Link
                    href={"mailto:theunifiedgolf@gmail.com"}
                    className="text-xs font-bold"
                  >
                    <Button variant={"link"}>
                      <span className="text-white flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        theunifiedgolf@gmail.com
                      </span>
                    </Button>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Separator className={cn(isOpen && "hidden")} />
            <Link
              href="/"
              className="flex flex-col items-start mx-2 mt-1 gap-1"
            >
              <Image
                src={"/company-logo.jpg"}
                width={80}
                height={30}
                alt="Company Logo"
                className={cn("rounded-md", isOpen && "hidden")}
              />
              <h1 className={cn("font-bold", isOpen && "hidden")}>
                Unified Golf Pte Ltd
              </h1>
              <span
                className={cn("text-xs font-bold pb-1", isOpen && "hidden")}
              >
                1, Thomson Road #04-330G, Singapore, 300001
              </span>
            </Link>
          </div>
        </header>
      </div>

      {/* Desktop Mode */}
      <div className="hidden lg:block md:block">
        {/* <header className="shadow-inner bg-opacity-15 border border-secondary rounded-md p-1 bg-card"> */}
        <header className="border border-secondary rounded-md p-1 bg-card/80">
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
                <h1 className="font-bold">Unified Golf Pte Ltd</h1>
                <span className="text-xs font-bold pb-1">
                  1, Thomson Road #04-330G, Singapore, 300001
                </span>
              </div>
              <div className="h-full mt-20 flex-col gap-1">
                <Link href={"tel:+6586929998"} className="text-xs font-bold">
                  <Button variant={"link"}>
                    <span className="text-white flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      +65 8692 9998
                    </span>
                  </Button>
                </Link>
                <Link href={"tel:+60125499839"} className="text-xs font-bold">
                  <Button variant={"link"}>
                    <span className="text-white flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      +6012 549 9839
                    </span>
                  </Button>
                </Link>

                <Link
                  href={"mailto:theunifiedgolf@gmail.com"}
                  className="text-xs font-bold"
                >
                  <Button variant={"link"}>
                    <span className="text-white flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      theunifiedgolf@gmail.com
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
            <Separator />
            <div className="flex justify-between items-center pt-1">
              <div className="flex flex-shrink-0 justify-between items-center">
                <NavigationMenu
                  className="hidden lg:block md:block"
                  delayDuration={0}
                  onMouseLeave={() => {
                    setSelectedCountry(null);
                    setSelectedCity(null);
                  }}
                >
                  <NavigationMenuList>
                    {routeList.map((route) => (
                      <NavigationMenuItem
                        key={route.id}
                        className={
                          route.id === 3 ? "relative golf-packages-menu" : ""
                        }
                      >
                        {route.hasChildren ? (
                          <>
                            <NavigationMenuTrigger>
                              <Link href={route.href}>{route.label}</Link>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="max-h-96 overflow-y-auto">
                              <div className="flex">
                                {/* Countries Column */}
                                <div className="bg-background p-0 w-[200px] min-h-[500px] rounded-l-md border-r border-gray-200">
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
                                        <Link
                                          href={
                                            route.id === 3
                                              ? `/golf-packages/${country.name.toLowerCase()}`
                                              : `${getCountryUrl(country.name)}`
                                          }
                                          onClick={(e) => {
                                            e.preventDefault();
                                            navigateAndCollapse(
                                              route.id === 3
                                                ? `/golf-packages/${country.name.toLowerCase()}`
                                                : `${getCountryUrl(
                                                    country.name
                                                  )}`
                                            );
                                          }}
                                        >
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
                                              href={
                                                route.id === 3
                                                  ? `/golf-packages/${selectedCountry.toLowerCase()}/${encodeUrlParam(
                                                      city
                                                    )}`
                                                  : `/courses/${selectedCountry.toLowerCase()}/${encodeUrlParam(
                                                      city
                                                    )}`
                                              }
                                              onClick={(e) => {
                                                e.preventDefault();
                                                navigateAndCollapse(
                                                  route.id === 3
                                                    ? `/golf-packages/${selectedCountry.toLowerCase()}/${encodeUrlParam(
                                                        city
                                                      )}`
                                                    : `/courses/${selectedCountry.toLowerCase()}/${encodeUrlParam(
                                                        city
                                                      )}`
                                                );
                                              }}
                                            >
                                              <span>{city}</span>
                                            </Link>
                                            {cityHasCourses(city) &&
                                              route.id !== 3 && (
                                                <ChevronRight className="h-4 w-4" />
                                              )}
                                          </li>
                                        ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Course Details Column */}
                                {selectedCity && !(route.id === 3) && (
                                  <div className="bg-background p-0 w-[380px] min-h-[400px] rounded-r-md">
                                    <ul className="py-2 px-0">
                                      {courseDetails[
                                        selectedCity as keyof typeof courseDetails
                                      ]?.map((course) => (
                                        <li key={course.title}>
                                          <Link
                                            href={
                                              route.id === 3
                                                ? `/golf-packages/detail/${course.href
                                                    .split("/")
                                                    .pop()}`
                                                : course.href
                                            }
                                            onClick={(e) => {
                                              e.preventDefault();
                                              navigateAndCollapse(
                                                route.id === 3
                                                  ? `/golf-packages/detail/${course.href
                                                      .split("/")
                                                      .pop()}`
                                                  : course.href
                                              );
                                            }}
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
                            <Link
                              href={route.href}
                              onClick={(e) => {
                                e.preventDefault();
                                navigateAndCollapse(route.href);
                              }}
                            >
                              {route.label}
                            </Link>
                          </NavigationMenuLink>
                        )}
                      </NavigationMenuItem>
                    ))}

                    {/* More dropdown using Popover */}
                    <NavigationMenuItem>
                      <Popover open={moreOpen} onOpenChange={setMoreOpen}>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" className="bg-green-700">
                            More <ChevronDown className="h-4 w-4 ml-1" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0 bg-transparent border-none">
                          <ul className="grid gap-1 p-2">
                            {moreMenuItems.map((item) => (
                              <li key={item.id}>
                                <Button
                                  variant="ghost"
                                  className="w-full justify-start text-left rounded-md p-2 bg-green-700"
                                  onClick={() => navigateAndCollapse(item.href)}
                                >
                                  {item.label}
                                </Button>
                              </li>
                            ))}
                          </ul>
                        </PopoverContent>
                      </Popover>
                    </NavigationMenuItem>
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
