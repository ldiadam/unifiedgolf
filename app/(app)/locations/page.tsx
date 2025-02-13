"use client";
import { useState } from "react";
import { LocationCard } from "./components/location-card";
import { SearchPanel } from "@/components/layout/search-panel";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [sortOption, setSortOption] = useState("price");

  const filteredLocations = locations
    .filter((location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((location) =>
      selectedCountry === "All" ? true : location.country === selectedCountry
    )
    .filter((location) =>
      selectedCity === "All" ? true : location.city === selectedCity
    )
    .sort((a, b) => {
      if (sortOption === "price") {
        return a.pricePerDay - b.pricePerDay;
      } else if (sortOption === "rating") {
        return b.rating - a.rating;
      } else if (sortOption === "reviews") {
        return b.reviews - a.reviews;
      }
      return 0;
    });

  return (
    <div className="container mx-auto my-16">
      <h1 className="text-3xl font-bold text-center">Locations</h1>
      <div className="flex justify-center mb-8">
        {/* <SearchPanel searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
        <SearchPanel />
      </div>
      <div className="flex justify-center my-8 pt-4">
        <div className="flex flex-wrap gap-4">
          <span className="flex justify-center items-center font-bold">
            Filter:
          </span>
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="w-[180px] shadow-inner bg-opacity-15">
              <SelectValue placeholder="Choose Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All">All Countries</SelectItem>
                {[
                  ...Array.from(
                    new Set(locations.map((location) => location.country))
                  ),
                ].map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-[180px] shadow-inner bg-opacity-15">
              <SelectValue placeholder="Choose Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All">All Cities</SelectItem>
                {Array.from(
                  new Set(locations.map((location) => location.city))
                ).map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px] shadow-inner bg-opacity-15">
              <SelectValue placeholder="Choose Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="price">Sort by Price</SelectItem>
                <SelectItem value="rating">Sort by Rating</SelectItem>
                <SelectItem value="reviews">Sort by Reviews</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredLocations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
}
