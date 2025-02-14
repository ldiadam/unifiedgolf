import { SearchProvider } from "@/hook/search-context";
import LocationsClient from "./location-client";

export const metadata = {
  title: "Location Page",
  description: "",
};

export default async function LocationsPage() {
  return (
    <>
      <SearchProvider>
        <LocationsClient />
      </SearchProvider>
    </>
  );
}
