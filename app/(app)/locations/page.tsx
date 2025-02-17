import { SearchProvider } from "@/hook/search-context";
import LocationsClient from "./location-client";
import { Suspense } from "react";

export const metadata = {
  title: "Location Page",
  description: "",
};

export default async function LocationsPage() {
  return (
    <SearchProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <LocationsClient />
      </Suspense>
    </SearchProvider>
  );
}
