import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { SearchSection } from "@/components/layout/sections/search";
import { DestionationSection } from "@/components/layout/sections/destionation";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Landing Page",
  description: "",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SearchSection />
      <DestionationSection />
      <TestimonialSection />
      <FooterSection />
    </>
  );
}
