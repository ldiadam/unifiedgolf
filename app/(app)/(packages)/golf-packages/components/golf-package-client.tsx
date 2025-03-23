"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const GolfPackageClient = () => {
  // const { theme } = useTheme();
  return (
    <section className="relative w-full h-screen pt-36">
      <Image
        src="/angkor-golf-resort-img-4.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 opacity-90 -mb-32"
      />
      <div className="relative z-10 container flex flex-col gap-5 items-center justify-center h-full">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-bold">
            Golf Packages
          </h1>
          <h2 className="text-md md:text-xl lg:text-xl text-white text-center">
            Discover expertly curated golf vacations featuring the best courses,
            resorts, and experiences. At Unified Golf, we specialize in
            delivering seamless golf holidays across Asia.
          </h2>
        </div>
      </div>
    </section>
  );
};
