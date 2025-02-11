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
    <section className="relative w-full h-screen">
      <Image
        src="/img-background.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 opacity-60"
      />
      <div className="relative z-10 container flex flex-col gap-5 items-center justify-center h-full">
        <div className="flex flex-col mb-10">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            Book Discount Golf Holidays Online
          </h1>
          <p className="text-lg md:text-lg lg:text-xl text-white text-center">
            The trusted choice for golf tee times & holiday across Asia
          </p>
        </div>
        <div className="mt-5 bg-black bg-opacity-50 w-full p-6">
          <div className="flex flex-row gap-5 items-center justify-center">
            <h2 className="text-sm md:text-xl lg:text-2xl text-white">
              Trustworthy
            </h2>
            <h2 className="text-sm md:text-xl lg:text-2xl text-white">|</h2>
            <h2 className="text-sm md:text-xl lg:text-2xl text-white">
              Effortless
            </h2>
            <h2 className="text-sm md:text-xl lg:text-2xl text-white">|</h2>
            <h2 className="text-sm md:text-xl lg:text-2xl text-white">
              Competitive
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
