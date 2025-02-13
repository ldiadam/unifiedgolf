"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Place 1",
    country: "Thailand",
    city: "Phuket",
    imageUrl: "/loc-1.jpg",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.7,
    reviews: 190,
    pricePerDay: 80,
  },
  {
    id: 2,
    name: "Place 2",
    country: "Indonesia",
    city: "Bali",
    imageUrl: "/loc-2.jpg",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.6,
    reviews: 170,
    pricePerDay: 75,
  },
  {
    id: 3,
    name: "Place 3",
    country: "Vietnam",
    city: "Hanoi",
    imageUrl: "/loc-3.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.6,
    reviews: 170,
    pricePerDay: 75,
  },
  {
    id: 4,
    name: "Place 4",
    country: "Malaysia",
    city: "Serawak",
    imageUrl: "/loc-4.jpg",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.6,
    reviews: 170,
    pricePerDay: 75,
  },
  {
    id: 5,
    name: "Place 5",
    country: "Singapore",
    city: "Singapore",
    imageUrl: "/loc-5.jpg",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.6,
    reviews: 170,
    pricePerDay: 75,
  },
  {
    id: 6,
    name: "Place 6",
    country: "Indonesia",
    city: "Jakarta",
    imageUrl: "/loc-6.jpg",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.6,
    reviews: 170,
    pricePerDay: 75,
  },
  // ... rest of your locations with added fields
];

export default function LocationDetailPage() {
  const { slug } = useParams();
  const router = useRouter();

  const location = locations.find(
    (loc) => loc.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <div className="container mx-auto my-16">
      <Button variant="outline" className="mb-8" onClick={() => router.back()}>
        Back to Locations
      </Button>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <Image
            src={location.imageUrl}
            alt={location.name}
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{location.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={16} />
            <span className="text-gray-600">
              {location.city}, {location.country}
            </span>
          </div>
          <div className="flex items-center mb-4">
            <Star className="text-yellow-500 mr-2" />
            <span className="text-lg font-semibold">
              {location.rating} ({location.reviews} reviews)
            </span>
          </div>
          <p className="text-lg mb-4">{location.description}</p>
          <div className="text-3xl font-bold text-blue-600 mb-4">
            ${location.pricePerDay} / day
          </div>
          <Button variant="default" className="w-full py-3">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
