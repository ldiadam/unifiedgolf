import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container pt-5 pb-1">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              <h1 className="text-xl font-bold">Unified Golf</h1>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
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
          </div>

          <div className="flex flex-col gap-2">
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
          </div>

          <div className="flex flex-col gap-2">
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
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
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
