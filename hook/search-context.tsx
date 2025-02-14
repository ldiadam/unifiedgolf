"use client";
import { SearchFilters } from "@/lib/types";
import React, { createContext, useCallback, useContext, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface SearchContextType {
  filters: SearchFilters;
  setFilters: React.Dispatch<React.SetStateAction<SearchFilters>>;
  handleSearch: () => void;
}

const initialFilters: SearchFilters = {
  location: "",
  searchTerm: "",
  checkInDate: undefined,
  checkOutDate: undefined,
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const handleSearch = useCallback(() => {
    const params = new URLSearchParams();

    if (filters.location) {
      params.set("location", filters.location);
    }
    if (filters.searchTerm) {
      params.set("searchTerm", filters.searchTerm);
    }
    if (filters.checkInDate) {
      params.set("checkIn", filters.checkInDate.toISOString());
    }
    if (filters.checkOutDate) {
      params.set("checkOut", filters.checkOutDate.toISOString());
    }

    router.push(`/locations?${params.toString()}`);
  }, [filters, router]);

  return (
    <SearchContext.Provider value={{ filters, setFilters, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
