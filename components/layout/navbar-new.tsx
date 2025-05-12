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
  ChevronDown,
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
    href: "/",
    label: "Home",
  },
  {
    id: 2,
    href: "/courses",
    label: "Golf Course Detail",
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

// Add a hook to detect viewport size
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint is typically 768px
    };

    // Check on initial load
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

export const NavbarNew = () => {
  // Add this near the beginning of the NavbarNew component
  const isMobile = useIsMobile();
  // Client-side only state initialization using useEffect
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Remove or comment out these lines
  // const [moreOpenMobile, setMoreOpenMobile] = useState(false);
  // const [moreOpenDesktop, setMoreOpenDesktop] = useState(true);
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
    // Remove these lines
    // setMoreOpenMobile(false);
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
    <div className="relative z-50 w-full">
      {/* Mobile Mode */}
      <div className="lg:hidden md:hidden">
        {/* <header className="shadow-inner bg-opacity-15 border border-secondary rounded-md p-1 bg-card"> */}
        <header className="bg-transparant">
          <div className="flex flex-col w-full">
            {/* <div className="flex flex-nowrap justify-between items-center w-full ml-1">
              <div className="flex flex-col items-start gap-1">
                <Link href="/" className="flex items-center">
                  <Image
                    src={"/company-logo.jpg"}
                    width={50}
                    height={10}
                    alt=""
                    className="rounded-md"
                  />
                </Link>
                <h1 className="font-bold text-sm">Unified Golf Pte Ltd</h1>
                <span className="text-xs font-bold pb-1">
                  1, Thomson Road #04-330G, Singapore, 300001
                </span>
              </div>
              <div className="h-full mt-1 flex-col">
                <Link href={"tel:+6586929998"}>
                  <Button variant={"link"}>
                    <span className="text-white flex items-center gap-2 text-xs font-bold">
                      <Phone className="h-4 w-4" />
                      +65 8692 9998
                    </span>
                  </Button>
                </Link>
                <Link href={"tel:+60125499839"}>
                  <Button variant={"link"}>
                    <span className="text-white flex items-center gap-2 text-xs font-bold">
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
            </div> */}
            {/* <Separator /> */}
            <div className="my-2"></div>
            <div className="flex justify-between items-center bg-red-700">
              <div className="flex flex-shrink-0 justify-between items-center ">
                <NavigationMenu
                  className="block lg:block md:block"
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
                            className={
                              navigationMenuTriggerStyle() + " h-7 rounded-none"
                            }
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
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div>
                <Popover open={isMobile}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className="bg-green-700 h-7 rounded-none"
                    >
                      Link
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[110px] bg-transparent border-none -mt-4">
                    <ul className="grid gap-1">
                      {moreMenuItems.map((item) => (
                        <li key={item.id}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start text-left rounded-none p-1 bg-green-700 "
                            onClick={() => navigateAndCollapse(item.href)}
                          >
                            {item.label}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Desktop Mode */}
      <div className="hidden lg:block md:block">
        <header className="bg-transparent">
          <div className="flex flex-col w-full">
            {/* <div className="flex flex-nowrap justify-between items-center w-full ml-1">
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
            </div> */}
            {/* <Separator /> */}
            <div className="my-2"></div>

            <div className="flex justify-between gap-3 items-center px-1 bg-red-700">
              {routeList.map((item) => (
                <div key={item.id}>
                  <Link href={item.href}>
                    <Button variant={"ghost"} className="rounded-none -ml-1">
                      {item.label}
                    </Button>
                  </Link>
                </div>
              ))}
              <div>
                <Popover open={!isMobile}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className="bg-green-700 rounded-none -mr-1 w-[120px]"
                    >
                      Link
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-[124px] p-0 bg-transparent border-none"
                    align="start"
                    sideOffset={0}
                  >
                    <ul className="grid gap-1 p-1">
                      {moreMenuItems.map((item) => (
                        <li key={item.id}>
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-left rounded-none bg-green-700 focus-visible:ring-0"
                            onClick={() => navigateAndCollapse(item.href)}
                          >
                            {item.label}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
