import { HeroSection } from "@/components/layout/sections/hero";
import { SearchSection } from "@/components/layout/sections/search";
import { DestionationSection } from "@/components/layout/sections/destionation";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "",
};

export default async function Home() {
  return (
    <>
      <HeroSection />
      {/* <SearchSection />
      <DestionationSection />
      <TestimonialSection /> */}
    </>
  );
}
