"use client";
import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import { CartComponent } from "./cart/cart";
import { Button } from "../ui/button";
import { cn } from "@/utils/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

interface RouteProps {
  id: number;
  href: string;
  label: string;
}

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
  },
  {
    id: 3,
    href: "/maintenance",
    label: "Standard Packages",
  },
  {
    id: 4,
    href: "/maintenance",
    label: "Course Booking",
  },
  {
    id: 5,
    href: "/maintenance",
    label: "Enquiry",
  },
  {
    id: 6,
    href: "/maintenance",
    label: "Contact",
  },
];

export const NavbarNew = () => {
  return (
    <div className="container sticky top-5 z-40 w-full">
      <div className="lg:hidden  flex justify-center">
        <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[80%] lg:w-[90%] xl:w-[75%] max-w-screen-xl mx-auto border border-secondary rounded-xl bg-card flex flex-col">
          {/* Top section with logo and actions */}
          <div className="flex justify-between items-center p-2">
            <Link href="/" className="flex items-center p-3">
              <Image
                src={"/company-logo.jpg"}
                width={80}
                height={30}
                alt="Company Logo"
              />
            </Link>

            <div className="flex flex-row gap-2 justify-between items-center mr-2">
              <ToggleTheme />
              <CartComponent />
            </div>
          </div>

          <Separator />

          {/* Navigation menu - always visible */}
          <nav className="flex flex-wrap justify-center p-2">
            {routeList.map(({ id, href, label }) => (
              <Button
                key={id}
                asChild
                variant="ghost"
                size="sm"
                className={cn(
                  "text-xs sm:text-sm md:text-base",
                  "px-1 sm:px-2 md:px-3",
                  "h-8 sm:h-9 md:h-10",
                  "rounded-md",
                  "whitespace-nowrap"
                )}
              >
                <Link href={href}>{label}</Link>
              </Button>
            ))}
          </nav>
        </header>
      </div>
      {/* <!-- Desktop --> */}
      <div className="hidden lg:block">
        <header className=" shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto border border-secondary z-40 rounded-xl flex justify-between items-center p-2 bg-card">
          <Link href="/" className="flex items-center p-3">
            <Image
              src={"/company-logo.jpg"}
              width={80}
              height={30}
              alt=""
              // fill
              className="rounded-md"
            />
          </Link>
          <NavigationMenu className="hidden lg:block mx-auto">
            <NavigationMenuList>
              {/* <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Select Your Country
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-1 gap-5 p-4">
                <ul className="flex flex-row gap-2">
                  {featureList.map(({ href, title }) => (
                    <Button
                      key={href}
                      variant={"link"}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <Link
                        href={href}
                        className="mb-1 font-semibold leading-none text-foreground"
                      >
                        {title}
                      </Link>
                    </Button>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem> */}

              <NavigationMenuItem>
                {routeList.map(({ href, label }) => (
                  <NavigationMenuLink key={label} asChild>
                    <Link href={href} className="text-base font-bold px-2">
                      {label}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex flex-row gap-2 justify-between items-center mr-2">
            <ToggleTheme />
            <CartComponent />
          </div>
        </header>
      </div>
    </div>
  );
};
