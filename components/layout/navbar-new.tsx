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
import { ArrowLeft, ChevronRight, Phone, Mail, MapPin } from "lucide-react";
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
  // {
  //   id: 7,
  //   href: "/admin/address-book/list",
  //   label: "Admin Panel",
  // },
];

// Add a hook to detect viewport size
// const useIsMobile = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth < 768); // md breakpoint is typically 768px
//     };

//     // Check on initial load
//     checkIsMobile();

//     // Add event listener for window resize
//     window.addEventListener("resize", checkIsMobile);

//     // Clean up
//     return () => window.removeEventListener("resize", checkIsMobile);
//   }, []);

//   return isMobile;
// };

export const NavbarNew = () => {
  // Add this near the beginning of the NavbarNew component
  // const isMobile = useIsMobile();
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

  // If not mounted yet, return a simpler version to avoid hydration errors
  if (!mounted) {
    return null;
  }

  return (
    <div className="relative z-50">
      {/* Mobile Mode */}
      <div className="lg:hidden md:hidden">
        <header className="bg-card/80 w-full">
          <div className="flex flex-col ">
            <div className="block">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between items-center pl-3">
                  <div className="flex flex-col justify-start py-1">
                    <Link href="/">
                      <Image
                        src={"/company-logo.jpg"}
                        width={20}
                        height={20}
                        alt=""
                        // className="rounded-md"
                      />
                    </Link>
                    <h1 className="font-bold text-[6px]">
                      Unified Golf Pte Ltd
                    </h1>
                    <span className="text-[4px]">
                      1, Thomson Road #04-330G, Singapore, 300001
                    </span>
                  </div>
                  {/* <div className="text-white font-bold pb-1.5">
                    
                  </div> */}
                  <div className="pt-5 flex flex-shrink-0">
                    <div className="flex justify-center items-center">
                      <Button variant={"link"} className="h-2">
                        <Link href={"tel:+6586929998"}>
                          <span className="text-white text-[4px] font-bold">
                            {/* <Phone className="h-3 w-3" /> */}
                            +65 8692 9998
                          </span>
                        </Link>
                      </Button>
                    </div>
                    <div className="flex justify-center items-center">
                      <Button variant={"link"} className="h-2">
                        <Link href={"tel:+60125499839"}>
                          <span className="text-white text-[4px] font-bold">
                            {/* <Phone className="h-3 w-3" /> */}
                            +6012 549 9839
                          </span>
                        </Link>
                      </Button>
                    </div>

                    <div className="flex justify-center items-center">
                      <Button variant={"link"} className="h-2">
                        <Link href={"mailto:theunifiedgolf@gmail.com"}>
                          <span className="text-white text-[4px] font-bold ">
                            {/* <Mail className="h-3 w-3" /> */}
                            theunifiedgolf@gmail.com
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                  {/* <div className="text-white flex justify-start items-center gap-2 text-xs font-bold pl-4">
                    <MapPin className="h-4 w-4" />
                    <div className="flex flex-wrap">
                      <span className="text-xs">
                        1, Thomson Road #04-330G, Singapore, 300001
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <Link href={"tel:+6586929998"}>
                      <Button variant={"link"} className="h-2">
                        <span className="text-white flex items-center gap-2 text-xs font-bold">
                          <Phone className="h-3 w-3" />
                          +65 8692 9998
                        </span>
                      </Button>
                    </Link>
                  </div>
                  <div className="">
                    <Link href={"tel:+60125499839"}>
                      <Button variant={"link"} className="h-2">
                        <span className="text-white flex items-center gap-2 text-xs font-bold">
                          <Phone className="h-3 w-3" />
                          +6012 549 9839
                        </span>
                      </Button>
                    </Link>
                  </div>

                  <div className="">
                    <Link href={"mailto:theunifiedgolf@gmail.com"}>
                      <Button variant={"link"} className="h-2">
                        <span className="text-white flex items-center gap-2 text-xs font-bold ">
                          <Mail className="h-3 w-3" />
                          theunifiedgolf@gmail.com
                        </span>
                      </Button>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            <Separator />
            <div className=" bg-orange-700">
              <div className="block">
                <div className="px-1 gap-2 w-full flex justify-between">
                  {routeList.map((route, index) => (
                    <div key={index}>
                      <Button
                        variant={"ghost"}
                        className="h-7 px-1 rounded-none bg-red-700 text-sm"
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
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="fixed top-[12rem] right-4 z-[100]">
              <div className="w-[65px] bg-transparent border-none -mt-4">
                <ul className="grid gap-0.5">
                  {moreMenuItems.map((item) => (
                    <li key={item.id}>
                      <Button
                        variant="ghost"
                        size="xs"
                        className="w-full justify-start text-left rounded-none bg-green-700 text-xs"
                        onClick={() => navigateAndCollapse(item.href)}
                      >
                        {item.label}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Desktop Mode */}
      <div className="hidden lg:block md:block">
        <header className="bg-card/80">
          <div className="flex flex-col w-full">
            <div className="flex flex-nowrap justify-between items-center w-full pl-1">
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
            <div className="flex justify-between gap-3 items-center px-1 bg-orange-700">
              {routeList.map((item) => (
                <div key={item.id}>
                  <Link href={item.href}>
                    <Button
                      variant={"ghost"}
                      className="rounded-none ml-[0.1rem] bg-red-700 text-lg p-6 font-bold"
                    >
                      {item.label}
                    </Button>
                  </Link>
                </div>
              ))}
              <div className="fixed bottom-0 right-16 z-[100]">
                <div className="w-[160px] bg-transparent border-none pr-1">
                  <ul className="grid gap-1">
                    {moreMenuItems.map((item) => (
                      <li key={item.id}>
                        <Button
                          variant="ghost"
                          className="w-full py-6 justify-start items-center text-lg text-left rounded-none bg-green-700 focus-visible:ring-0"
                          onClick={() => navigateAndCollapse(item.href)}
                        >
                          {item.label}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
