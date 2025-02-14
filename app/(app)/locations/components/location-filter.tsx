import { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Location {
  id: number;
  country: string;
  city: string;
  imageUrl: string;
  description: string;
  rating: number;
  reviews: number;
  pricePerDay: number;
  type: string;
  // ... other location properties
}

interface LocationFilterProps {
  locations: Location[];
  selectedCountry: string;
  setSelectedCountry: Dispatch<SetStateAction<string>>;
  selectedCity: string;
  setSelectedCity: Dispatch<SetStateAction<string>>;
  sortOption: string;
  setSortOption: Dispatch<SetStateAction<string>>;
}

export function LocationFilter({
  locations,
  selectedCountry,
  setSelectedCountry,
  selectedCity,
  setSelectedCity,
  sortOption,
  setSortOption,
}: LocationFilterProps) {
  // Get unique countries and cities
  const countries = Array.from(
    new Set(locations.map((location) => location.country))
  );
  const cities = Array.from(
    new Set(locations.map((location) => location.city))
  );

  return (
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
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={selectedCity} onValueChange={setSelectedCity}>
          <SelectTrigger className="w-[180px] shadow-inner bg-opacity-15">
            <SelectValue placeholder="Choose City" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="All">All Cities</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className="w-[180px] shadow-inner bg-opacity-15">
            <SelectValue placeholder="Sort By" />
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
  );
}
