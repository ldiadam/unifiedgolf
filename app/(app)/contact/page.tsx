import React from "react";
import Image from "next/image";
import {
  MapPin,
  Users,
  Award,
  Calendar,
  LandPlot,
  Globe,
  Star,
  Shield,
  Mail,
  Phone,
  Locate,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <div className="container mx-auto pt-48">
      {/* Company Details Section */}
      <section className="mb-10">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Company</h2>
        </div>
        <p className="mb-6 text-muted-foreground max-w-3xl">
          Unified Golf is owned by Unified Golf Pte Ltd. Our registered offices
          are located at:
        </p>
        <Card className="max-w-md hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="rounded-t-lg">
            <CardTitle className="text-xl text-primary">
              Unified Golf Pte Ltd
            </CardTitle>
            <CardDescription>Official Registered Office</CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="pt-6">
            <div className="flex flex-col gap-1 -ml-4">
              <address className="text-base not-italic flex items-center gap-2 ml-4 pb-1">
                <Locate className="h-4 w-4" />
                1, Thomson Road #04-330G, Singapore, 300001
              </address>
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
          </CardContent>
        </Card>
      </section>

      {/* Mission Statement */}
      <section className="mb-10">
        <Card className="overflow-hidden border-0 shadow-2xl">
          <div className="relative h-32 bg-primary">
            <div className="absolute inset-0">
              <Image
                src="/img-background.jpg"
                alt="Golf landscape"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <h2 className="text-3xl font-semibold text-white">Our Mission</h2>
            </div>
          </div>
          <CardContent className="p-8 text-center max-w-3xl mx-auto">
            <p className="text-xl leading-relaxed">
              To connect golfers with exceptional golfing experiences throughout
              Asia and the Middle East through a seamless booking process,
              competitive pricing, and outstanding customer support.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Why Choose Us Section */}
      <section className="">
        <h2 className="text-3xl font-semibold text-primary mb-8">
          Why Choose Unified Golf?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px]">
            <div className="h-2 bg-primary"></div>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary-foreground flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Experience & Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                With nearly a decade of experience and over 100,000 satisfied
                customers, we understand what makes a perfect golfing holiday.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px]">
            <div className="h-2 bg-primary"></div>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary-foreground flex items-center justify-center mb-4">
                <LandPlot className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Unbeatable Value</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We negotiate the best rates with our partners to offer you
                competitive pricing without compromising on quality.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px]">
            <div className="h-2 bg-primary"></div>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary-foreground flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Customer Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our dedicated team is always ready to assist you before, during,
                and after your booking, ensuring a hassle-free experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
