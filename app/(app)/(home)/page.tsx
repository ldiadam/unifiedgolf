import Tag from "@/components/layout/tag";
import Image from "next/image";

export default function CompanyProfilePage() {
  return (
    <div className="relative pt-[0.5rem] md:pt-34 lg:pt-34 overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <picture>
          {/* Mobile-optimized image with higher quality and vibrancy */}
          <source media="(max-width: 767px)" srcSet="/img-background-3.jpg" />
          {/* Desktop image */}
          <source media="(min-width: 768px)" srcSet="/img-background-3.jpg" />
          <Image
            src="/img-background-3.jpg"
            alt="Golf course background"
            fill
            className="object-cover opacity-70 md:opacity-70 brightness-[1.1] contrast-[1.05] md:brightness-100 md:contrast-100"
            priority
            quality={90}
          />
        </picture>
      </div>
      <div className="mx-auto px-4 relative -z-0">
        {/* Hero Section */}
        {/* <div className="relative rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0">
            <Image
              src="/img-background.jpg"
              alt="Golf course panorama"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-96 px-4">
            <h1
              id="about"
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              About Us
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Your premier gateway to exceptional golf experiences across Asia
              and the Middle East
            </p>
          </div>
        </div> */}

        {/* Company Introduction Section */}
        <section className="w-full">
          <div className="bg-red-700 rounded-none p-1 w-[9rem] md:w-[18rem] mb-3">
            <h2 className="text-md lg:text-2xl font-bold">Company Profile</h2>
          </div>

          <Tag />
          <div className="mr-16 pl-0.5 pr-4 mt-2">
            <div className="bg-card/50 p-2 rounded-md md:bg-none font-bold text-shadow-lg/80 text-white">
              <p className=" mb-2 text-xs md:text-md ">
                We are established with the aim to offer golf holiday packages
                tailored to our cliets exact requirements, competitively, and
                with a high standard of personal customised service
              </p>
              <p className="mb-2 text-xs md:text-md ">
                The Company operates in partnership with established tour
                operators, with local connection and experience that been
                running successfully in the golf travel industry for many years.
              </p>
              <p className="mb-2  text-xs md:text-md ">
                With our direct connection with various related and essential
                service providers, we are capable of offering our clients a
                highly competitive package with integrity and professionalism.
              </p>
              <p className="mb-2 text-xs md:text-md ">
                We customise golf packages for local (Singapore), regional and
                international golf packages for both private group and
                personalised event with multinational participants from
                different countries, in advance or ad hoc basis.
              </p>
              <p className=" text-xs md:text-md">
                Please contact us for a free quotation or speak to our
                consultant to customise your nest trip to your specific
                requirement and budget.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
