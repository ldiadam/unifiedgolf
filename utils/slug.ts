// utils/slug.ts
import locationData from "@/data/locationData.json";

export function createCitySlug(country: string, city: string): string {
  return `${country.toLowerCase()}-${city.toLowerCase().replace(/\s+/g, "-")}`;
}

export function parseLocationSlug(
  slug: string
): { country: string; city: string } | null {
  const parts = slug.split("-");
  if (parts.length < 2) return null;

  // Assume first part is country, rest is city with hyphens
  const countrySlug = parts[0];
  const citySlug = parts.slice(1).join(" ");

  // Find the matching country
  const countryData = locationData.find(
    (item) => item.country.toLowerCase() === countrySlug
  );

  if (!countryData) return null;

  // Find the matching city
  const matchedCity = countryData.city.find(
    (c) => c.toLowerCase() === citySlug
  );

  if (!matchedCity) return null;

  return {
    country: countryData.country,
    city: matchedCity,
  };
}

export function validateLocation(slug: string): boolean {
  return parseLocationSlug(slug) !== null;
}
