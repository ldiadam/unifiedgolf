import Image from "next/image";

export default function CompanyProfilePage() {
  return (
    <div className="relative min-h-screen pt-44">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/img-background.jpg"
          alt="Golf course background"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>
      <div className="container mx-auto px-4 py-2 relative -z-0">
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
        <section className="">
          <div className="gap-10 items-center">
            <div className="w-full">
              <div className="bg-red-700/70 rounded-sm p-1 flex justify-center items-center max-w-xs">
                <h2 className="text-3xl font-bold">Company Profile</h2>
              </div>

              <div className="my-5 bg-black bg-opacity-50 w-full p-4">
                <div className="flex flex-col gap-5 items-center justify-center">
                  <div>
                    <div className="flex flex-row gap-2 md:gap-6 lg:gap-10 items-center justify-center">
                      <h2 className="text-xs md:text-lg lg:text-xl text-white">
                        Reliable
                      </h2>
                      <h2 className="text-sm md:text-lg lg:text-xl text-white">
                        |
                      </h2>
                      <h2 className="text-xs md:text-lg lg:text-xl text-white">
                        Comprehensive
                      </h2>
                      <h2 className="text-sm md:text-lg lg:text-xl text-white">
                        |
                      </h2>

                      <h2 className="text-xs md:text-lg lg:text-xl text-white">
                        Professional
                      </h2>
                      <h2 className="text-sm md:text-lg lg:text-xl text-white">
                        |
                      </h2>

                      <h2 className="text-xs md:text-lg lg:text-xl text-white">
                        Integrity
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl font-medium text-white mb-4">
                We are established with the aim to offer golf holiday packages
                tailored to our cliets exact requirements, competitively, and
                with a high standard of personal customised service
              </p>
              <p className="mb-4 text-white">
                The Company operates in partnership with established tour
                operators, with local connection and experience that been
                running successfully in the golf travel industry for many years.
              </p>
              <p className="mb-4 text-white">
                With our direct connection with various related and essential
                service providers, we are capable of offering our clients a
                highly competitive package with integrity and professionalism.
              </p>
              <p className="mb-4 text-white">
                We customise golf packages for local (Singapore), regional and
                international golf packages for both private group and
                personalised event with multinational participants from
                different countries, in advance or ad hoc basis.
              </p>
              <p className="text-white">
                Please contact us for a free quotation or speak to our
                consultant to customise your nest trip to your specific
                requirement and budget.
              </p>
            </div>
            {/* <div className="md:w-1/2 relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/company-logo.jpg"
                alt="Golf course"
                layout="fill"
                quality={100}
                className=""
              />
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}
