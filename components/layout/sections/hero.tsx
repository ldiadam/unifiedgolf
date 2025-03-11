"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  // const { theme } = useTheme();
  return (
    <section className="relative w-full h-screen pt-36">
      <Image
        src="/img-background.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 opacity-90 -mb-32"
      />
      <div className="relative z-10 container flex flex-col gap-5 items-center justify-center h-full">
        <div className="flex flex-row gap-1 items-center justify-center">
          <h2 className="text-sm md:text-lg lg:text-xl text-white">
            Golf Packages
          </h2>
          <h2 className="text-sm md:text-lg lg:text-xl text-white">|</h2>
          <h2 className="text-sm md:text-lg lg:text-xl text-white">
            Course Booking
          </h2>
          <h2 className="text-sm md:text-lg lg:text-xl text-white">|</h2>
          <h2 className="text-sm md:text-lg lg:text-xl text-white">Holiday </h2>
          <h2 className="text-sm md:text-lg lg:text-xl text-white">|</h2>
          <h2 className="text-sm md:text-lg lg:text-xl text-white">Planner</h2>
        </div>
        <div className="mt-5 bg-black bg-opacity-50 w-full p-6">
          <div className="flex flex-col gap-5 items-center justify-center">
            <div>
              <div className="flex flex-row gap-3 md:gap-6 lg:gap-10 items-center justify-center">
                <h2 className="text-sm md:text-lg lg:text-xl text-white">
                  Reliable
                </h2>
                <h2 className="text-sm md:text-lg lg:text-xl text-white">|</h2>
                <h2 className="text-sm md:text-lg lg:text-xl text-white">
                  Comprehensive
                </h2>
                <h2 className="text-sm md:text-lg lg:text-xl text-white">|</h2>

                <h2 className="text-sm md:text-lg lg:text-xl text-white">
                  Professional
                </h2>
                <h2 className="text-sm md:text-lg lg:text-xl text-white">|</h2>

                <h2 className="text-sm md:text-lg lg:text-xl text-white">
                  Integrity
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
