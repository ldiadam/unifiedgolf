"use client";
import { useState, useEffect } from "react";
import { LocationCard } from "./components/location-card";
import { EnhancedSearchPanel } from "@/components/layout/search/enhanced-search-panel";
import { LocationFilter } from "./components/location-filter";
import { useSearch } from "@/hook/search-context";
import { Location } from "@/lib/types";
import dataPlace from "@/dataPlace.json";

export default function LocationsClient() {
  const { filters } = useSearch();
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [sortOption, setSortOption] = useState("price");

  useEffect(() => {
    setLocations(dataPlace);
  }, []);

  const filteredLocations = locations
    .filter((location) =>
      filters.searchTerm
        ? location.name
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) ||
          location.country
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase())
        : true
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
        <EnhancedSearchPanel />
      </div>
      <LocationFilter
        locations={locations}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredLocations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
}
