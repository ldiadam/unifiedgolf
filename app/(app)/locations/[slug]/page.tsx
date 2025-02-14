import { Metadata } from "next";
import { LocationDetailClient } from "./location-detail-client";

const locations = [
  {
    id: 1,
    slug: "place-1",
    name: "Place 1",
    country: "Thailand",
    city: "Phuket",
    imageUrl: "/loc-1.jpg",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.7,
    reviews: 190,
    pricePerDay: 80,
    type: "Location",
  },
  {
    id: 2,
    slug: "place-2",
    name: "Place 2",
    country: "Indonesia",
    city: "Bali",
    imageUrl: "/loc-2.jpg",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.6,
    reviews: 170,
    pricePerDay: 75,
    type: "Location",
  },
  {
    id: 3,
    slug: "place-3",
    name: "Place 3",
    country: "Vietnam",
    city: "Hanoi",
    imageUrl: "/loc-3.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.6,
    reviews: 170,
    pricePerDay: 75,
    type: "Location",
  },
  {
    id: 4,
    slug: "place-4",
    name: "Place 4",
    country: "Malaysia",
    city: "Serawak",
    imageUrl: "/loc-4.jpg",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.6,
    reviews: 170,
    pricePerDay: 75,
    type: "Location",
  },
  {
    id: 5,
    slug: "place-5",
    name: "Place 5",
    country: "Singapore",
    city: "Singapore",
    imageUrl: "/loc-5.jpg",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.6,
    reviews: 170,
    pricePerDay: 75,
    type: "Location",
  },
  {
    id: 6,
    slug: "place-6",
    name: "Place 6",
    country: "Indonesia",
    city: "Jakarta",
    imageUrl: "/loc-6.jpg",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.6,
    reviews: 170,
    pricePerDay: 75,
    type: "Location",
  },
];

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // In a real app, you would fetch the location data here
  const location = locations.find((loc) => loc.slug === params.slug);

  if (!location) {
    return {
      title: "Location Not Found",
      description: "The requested location could not be found.",
    };
  }

  return {
    title: `${location.name} - ${location.city}, ${location.country}`,
    description: location.description,
    // openGraph: {
    //   title: `${location.name} - ${location.city}, ${location.country}`,
    //   description: location.description,
    //   images: [
    //     {
    //       url: location.imageUrl,
    //       width: 1200,
    //       height: 630,
    //       alt: location.name,
    //     },
    //   ],
    // },
  };
}
export default async function LocationPage({ params }: Props) {
  const location = locations.find((loc) => loc.slug === params.slug);

  if (!location) {
    return <div>Location not found</div>;
  }

  return <LocationDetailClient location={location} />;
}
