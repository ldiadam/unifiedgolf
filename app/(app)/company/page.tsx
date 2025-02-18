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

export default function CompanyProfilePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden mb-16">
        <div className="absolute inset-0">
          <Image
            src="/img-background.jpg"
            alt="Golf course panorama"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-96 px-4">
          <h1
            id="about"
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            About Us
          </h1>
          {/* <Badge variant="secondary" className="px-4 py-2 text-sm mb-6">
            Established 2014
          </Badge> */}
          <p className="text-xl text-white max-w-2xl mx-auto">
            Your premier gateway to exceptional golf experiences across Asia and
            the Middle East
          </p>
        </div>
      </div>

      {/* Company Introduction Section */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              Company Profile
            </h2>
            <p className="text-xl font-medium text-primary mb-4">
              We are established with the aim to offer golf holiday packages
              tailored to our cliets exact requirements, competitively, and with
              a high standard of personal customised service
            </p>
            <p className="mb-4 text-muted-foreground">
              The Company operates in partnership with established tour
              operators, with local connection and experience that been running
              successfully in the golf travel industry for many years.
            </p>
            <p className="mb-4 text-muted-foreground">
              With our direct connection with various related and essential
              service providers, we are capable of offering our clients a highly
              competitive package with integrity and professionalism.
            </p>
            <p className="mb-4 text-muted-foreground">
              We customise golf packages for local (Singapore), regional and
              international golf packages for both private group and
              personalised event with multinational participants from different
              countries, in advance or ad hoc basis.
            </p>
            <p className="mb-6 text-muted-foreground">
              Please contact us for a free quotation or speak to our consultant
              to customise your nest trip to your specific requirement and
              budget.
            </p>
            <Button variant="default" className="bg-card hover:bg-card">
              <Link href={"https://wa.me/6289123123123"}>Contact Us</Link>
            </Button>
          </div>
          <div className="md:w-1/2 relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/img-background.jpg"
              alt="Golf course"
              fill
              className="object-cover transition-transform hover:scale-105 duration-700"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-20">
        <Card className="border-0 shadow-xl bg-gradient-to-r ">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-4 transition-transform hover:scale-105 duration-300">
                <Users className="h-12 w-12 text-primary mb-3" />
                <span className="text-4xl font-bold text-primary mb-1">
                  100,000+
                </span>
                <span className="text-muted-foreground">Happy Golfers</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 transition-transform hover:scale-105 duration-300">
                <Globe className="h-12 w-12 text-primary mb-3" />
                <span className="text-4xl font-bold text-primary mb-1">6</span>
                <span className="text-muted-foreground">Countries</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 transition-transform hover:scale-105 duration-300">
                <Calendar className="h-12 w-12 text-primary mb-3" />
                <span className="text-4xl font-bold text-primary mb-1">
                  Since 2025
                </span>
                <span className="text-muted-foreground">
                  Years of Experience
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-4 transition-transform hover:scale-105 duration-300">
                <Award className="h-12 w-12 text-primary mb-3" />
                <span className="text-4xl font-bold text-primary mb-1">
                  IAGTO
                </span>
                <span className="text-muted-foreground">Member</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Company Details Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-primary mb-8">
          Our Company
        </h2>
        <p className="mb-6 text-muted-foreground max-w-3xl">
          Unified Golf is owned by Unified Golf Co., Ltd. Our registered offices
          are located at:
        </p>
        <Card className="max-w-md hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-green-50 rounded-t-lg">
            <CardTitle className="text-xl text-primary">
              Thailand Headquarters
            </CardTitle>
            <CardDescription>Official Registered Office</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <address className="not-italic text-muted-foreground leading-relaxed">
              221 moo 8 Paklok
              <br />
              Thalang District,
              <br />
              Phuket 83110
            </address>
          </CardContent>
        </Card>
      </section>

      {/* Mission Statement */}
      <section className="mb-20">
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
