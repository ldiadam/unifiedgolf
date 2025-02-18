"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Construction, Calendar, ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UnderConstructionClient() {
  return (
    <div className="min-h-screen bg-background py-16">
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-3xl shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <Construction className="h-20 w-20 text-primary mx-auto" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold">
              Under Construction
            </CardTitle>
            <CardDescription className="text-base md:text-lg mt-2">
              We&apos;re working hard to bring you an amazing experience
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <Image
                src="/under-construction.jpg"
                width={250}
                height={250}
                alt="Under Construction Illustration"
                className="object-contain"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.onerror = null;
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="max-w-md space-y-3 text-center md:text-left">
                <h3 className="text-lg font-semibold">What to expect</h3>
                <p className="text-muted-foreground">
                  We&apos;re building a comprehensive platform that will offer
                  detailed course information, seamless booking experiences, and
                  personalized learning paths.
                </p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/company">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
