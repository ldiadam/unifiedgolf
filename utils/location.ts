// utils/location.ts

export function formatLocationName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function slugifyLocationName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}
export function findCountryById(id: number, locationData: any[]): any {
  return locationData.find((location) => location.id === id);
}

export function findCitiesByCountry(
  country: string,
  locationData: any[]
): string[] {
  const location = locationData.find(
    (item) => item.country.toLowerCase() === country.toLowerCase()
  );
  return location?.city || [];
}

export function validateLocation(
  country: string,
  city: string,
  locationData: any[]
): boolean {
  const countryData = locationData.find(
    (item) => item.country.toLowerCase() === country.toLowerCase()
  );

  if (!countryData) return false;

  const formattedCity = city.replace(/-/g, " ").toLowerCase();
  return countryData.city.some(
    (c: string) => c.toLowerCase() === formattedCity
  );
}
