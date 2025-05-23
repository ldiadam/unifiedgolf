import { FooterSection } from "@/components/layout/sections/footer";
import Tag from "@/components/layout/tag";
import Image from "next/image";

export default function CompanyProfilePage() {
  return (
    <>
      {/* Background Image */}
      <div className="w-full h-auto shadow-lg -mb-33">
        <Image
          src="/bg-home-3.png"
          alt="Golf course background"
          // fill={true}
          width={375}
          height={1024}
          className="md:opacity-70 brightness-[1.1] contrast-[1.05] md:brightness-100 md:contrast-100"
          priority
          quality={90}
        />
      </div>
      <FooterSection />
    </>
  );
}
