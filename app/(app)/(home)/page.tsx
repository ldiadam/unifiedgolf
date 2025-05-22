import Tag from "@/components/layout/tag";
import Image from "next/image";

export default function CompanyProfilePage() {
  return (
    <div className="relative pt-[0.5rem] md:pt-34 lg:pt-34 overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/img-background-3.jpg"
          alt="Golf course background"
          fill
          className="object-cover md:opacity-70 brightness-[1.1] contrast-[1.05] md:brightness-100 md:contrast-100"
          priority
          quality={90}
        />
      </div>
      <div className="mx-auto px-4 relative -z-0">
        {/* Company Introduction Section */}
        <section className="w-full">
          <div className="bg-red-700 rounded-none p-1 w-[9rem] md:w-[18rem] mb-3">
            <h2 className="text-md lg:text-2xl font-bold">Company Profile</h2>
          </div>

          <Tag />
          <div className="mr-16 pl-0.5 pr-4 mt-2">
            <div className="bg-none font-bold text-shadow-lg/80">
              <p className=" mb-2 text-xs md:text-md text-black md:text-white ">
                We are established with the aim to{" "}
                <span className="md:text-black text-white">offer golf</span>{" "}
                holiday packages tailored to our{" "}
                <span className="md:text-black text-white">cliets exact</span>{" "}
                requirements, competitively,{" "}
                <span className="md:text-black text-white">
                  and with a high
                </span>{" "}
                standard of personal customi
                <span className="md:text-black text-white">sed service</span>
              </p>
              <p className="mb-2 text-xs md:text-md text-black md:text-white">
                The Company operates in{" "}
                <span className="md:text-black text-white">
                  partnership with
                </span>{" "}
                established tour operators, with local{" "}
                <span className="md:text-black text-white">
                  connection and experience that been
                </span>{" "}
                running successfully in the golf travel industry for many years.
              </p>
              <p className="mb-2  text-xs md:text-md text-black md:text-white">
                With our direct connection with various related and essential
                service providers, we are capable of offering our clients a
                highly competitive package with integrity and professionalism.
              </p>
              <p className="mb-2 text-xs md:text-md text-black md:text-white">
                We customise golf packages for local (Singapore), regional and
                international golf packages for both private group and
                personalised event with multinational participants from
                different countries, in advance or ad hoc basis.
              </p>
              <p className=" text-xs md:text-md text-white">
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
