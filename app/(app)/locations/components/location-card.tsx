"use client";
import React from "react";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface LocationCardProps {
  location: any;
}

export const LocationCard = ({ location }: LocationCardProps) => {
  const rating = location.rating || 4.5;
  const reviews = location.reviews || 150;
  const pricePerDay = location.pricePerDay || 99;

  const slug = location.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Card className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg relative">
      <Link href={`/locations/${slug}`} className="absolute inset-0 z-20" />
      <CardContent className="p-0 gap-0">
        <div className="h-full overflow-hidden">
          <Image
            src={location.imageUrl}
            alt={location.name}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
        </div>
      </CardContent>
      <CardHeader>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold">{location.name}</CardTitle>
            <div className="flex items-center">
              <Star size={16} className="text-primary" />
              <span className="text-primary font-bold ml-1">{rating}</span>
              <span className="text-gray-600 ml-1"> ({reviews})</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <CardDescription className="text-gray-600">
              {location.city}, {location.country}
            </CardDescription>
          </div>
          <CardDescription>{location.description}</CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="justify-between">
        <p className="text-sm font-bold">Price ${pricePerDay} / day</p>
        <Button variant="link" size="sm" asChild>
          <Link href={`/locations/${slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
