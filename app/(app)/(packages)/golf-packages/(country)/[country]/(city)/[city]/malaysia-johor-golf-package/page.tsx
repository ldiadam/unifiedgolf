"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { decodeUrlParam } from "@/utils/url-helpers";
import { notFound } from "next/navigation";

export default function PackageDetailsPage() {
  // This would normally come from an API or database
  // For now, we're hard-coding an example package
  //   const packageData = [
  //     {
  //     id: "2-days-1-night-weekdays-golf-package-in-batam",
  //     name: "3 Day, 2 Night Weekdays Golf Package in Batam",
  //     country: "Indonesia",
  //     city: ["Batam"],
  //     image: "/indonesia-batam.jpg",
  //   },
  //     {
  //     id: "3-days-2-nights-weekdays-golf-package-in-batam",
  //     name: "3 Day, 2 Nights Weekdays Golf Package in Batam",
  //     country: "Indonesia",
  //     city: ["Batam"],
  //     image: "/indonesia-batam-2.jpg",
  //   },
  //     {
  //     id: "weh-hai-qing-dao-yantai-golf-holiday",
  //     name: "Weh Hai Qing Dao Yantai Golf Holiday",
  //     country: "China",
  //     city: ["Wei Hai", "Qing Dao", "Yantai"],
  //     image: "/weihai-qingdao-yantai.jpg",
  //   },
  //     {
  //     id: "singapore-malaysia-golf-holiday",
  //     name: "Singapore Malaysia Golf Holiday",
  //     country: ["Singapore","Malaysia",],
  //     city: ["Malaysia", "Singapore"],
  //     image: "/singapore-malaysia.jpg",
  //   },
  //     {
  //     id: "singapore-malaysia-golf-holiday",
  //     name: "Singapore Malaysia Golf Holiday",
  //     country: ["Singapore","Malaysia",],
  //     city: ["Malaysia", "Singapore"],
  //     image: "/singapore-malaysia.jpg",
  //   },
  // ];

  // Check if this package exists
  // if (!packageData) {
  //   notFound();
  // }

  return (
    <div className="container mx-auto pt-48 lg:pt-42">
      {/* Package image card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-full w-full">
          {/* This is where we display the image from your example */}
          <Image
            src={"/malaysia-johor.jpg"}
            alt={""}
            width={1200}
            height={900}
            className="w-full object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
