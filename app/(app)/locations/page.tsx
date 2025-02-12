"use client";
import { useState } from "react";
import Image from "next/image";
import { SearchPanel } from "@/components/layout/search-panel";

const locations = [
  {
    id: 1,
    name: "Phuket",
    imageUrl: "/loc-1.jpg",
    description: "Beautiful beaches and vibrant nightlife.",
  },
  {
    id: 2,
    name: "Bangkok",
    imageUrl: "/loc-2.jpg",
    description: "The bustling capital city of Thailand.",
  },
  {
    id: 3,
    name: "Hua Hin",
    imageUrl: "/loc-3.jpg",
    description: "A serene seaside resort town.",
  },
  {
    id: 4,
    name: "Pattaya",
    imageUrl: "/loc-4.jpg",
    description: "Known for its beaches and nightlife.",
  },
  {
    id: 5,
    name: "Bali",
    imageUrl: "/loc-5.jpg",
    description: "A tropical paradise with rich culture.",
  },
  {
    id: 6,
    name: "Dubai",
    imageUrl: "/loc-6.jpg",
    description: "A modern city with luxury shopping and entertainment.",
  },
];

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold text-center">Locations</h1>
      <div className="flex justify-center mb-16">
        <SearchPanel />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredLocations.map((location) => (
          <div
            key={location.id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={location.imageUrl}
              alt={location.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{location.name}</h2>
              <p className="text-gray-700">{location.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
