import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="w-full mt-4 bottom-0">
      <div className="p-5 bg-card/80 border border-secondary">
        <div className="flex flex-col w-full">
          <div className="flex flex-nowrap justify-between items-center w-full ml-1">
            <div className="flex flex-col items-start gap-1">
              <Link href="/" className="flex items-center">
                <Image
                  src={"/company-logo.jpg"}
                  width={80}
                  height={30}
                  alt="Company Logo"
                  className="rounded-md"
                />
              </Link>
              <h1 className="font-bold">Unified Golf Pte Ltd</h1>
              <span className="text-xs font-bold pb-1">
                1, Thomson Road #04-330G, Singapore, 300001
              </span>
            </div>
            <div className="h-full mt-20 flex-col gap-1">
              <Link href={"tel:+6586929998"} className="text-xs font-bold">
                <Button variant={"link"}>
                  <span className="text-white flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    +65 8692 9998
                  </span>
                </Button>
              </Link>
              <Link href={"tel:+60125499839"} className="text-xs font-bold">
                <Button variant={"link"}>
                  <span className="text-white flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    +6012 549 9839
                  </span>
                </Button>
              </Link>

              <Link
                href={"mailto:theunifiedgolf@gmail.com"}
                className="text-xs font-bold"
              >
                <Button variant={"link"}>
                  <span className="text-white flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    theunifiedgolf@gmail.com
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link
                href="/maintenance"
                className="opacity-60 hover:opacity-100"
              >
                Github
              </Link>
            </div>

            <div>
              <Link
                href="/maintenance"
                className="opacity-60 hover:opacity-100"
              >
                Twitter
              </Link>
            </div>

            <div>
              <Link
                href="/maintenance"
                className="opacity-60 hover:opacity-100"
              >
                Instagram
              </Link>
            </div>
          </div> */}

          {/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
            <div>
              <Link
                href="/maintenance"
                className="opacity-60 hover:opacity-100"
              >
                iOS
              </Link>
            </div>

            <div>
              <Link
                href="/maintenance"
                className="opacity-60 hover:opacity-100"
              >
                Android
              </Link>
            </div>

            <div>
              <Link
                href="/maintenance"
                className="opacity-60 hover:opacity-100"
              >
                Web
              </Link>
            </div>
          </div> */}

          {/* <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link
                href="/maintenance"
                className="opacity-60 hover:opacity-100"
              >
                Contact Us
              </Link>
            </div>

            <div>
              <Link
                href="/maintenance"
                className="opacity-60 hover:opacity-100"
              >
                FAQ
              </Link>
            </div>
          </div> */}
        </div>

        <Separator className="my-2" />
        <section className="flex justify-center items-center">
          <h3 className="">
            &copy; 2025 Copyright
            {/* <Link
              target="_blank"
              href="https://github.com/leoMirandaa"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Leo Miranda
            </Link> */}
          </h3>
        </section>
      </div>
    </footer>
  );
};
