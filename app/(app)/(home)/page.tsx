import { FooterSection } from "@/components/layout/sections/footer";
import Tag from "@/components/layout/tag";
import Image from "next/image";

export default function CompanyProfilePage() {
  return (
    <>
      {/* Background Image */}
      <div className="w-full h-auto shadow-lg -mb-34">
        <img
          src="/bg-home-3.png"
          alt="Golf course background"
          className="w-full h-auto opacity-85"
        />
      </div>
      <footer className="bg-card/80 text-white text-xs text-center py-4">
        © 2025 Unified Golf Pte Ltd. All rights reserved.
      </footer>
    </>
  );
}
