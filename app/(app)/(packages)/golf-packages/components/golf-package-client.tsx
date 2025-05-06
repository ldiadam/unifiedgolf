"use client";
import Image from "next/image";

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
      <div className="relative container flex flex-col gap-5 items-center justify-center h-full">
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
