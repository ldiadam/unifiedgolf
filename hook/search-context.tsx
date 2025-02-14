"use client";
import { SearchFilters } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

interface SearchContextType {
  filters: SearchFilters;
  setFilters: React.Dispatch<React.SetStateAction<SearchFilters>>;
}

const initialFilters: SearchFilters = {
  location: "",
  searchTerm: "",
  checkInDate: undefined,
  checkOutDate: undefined,
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);

  return (
    <SearchContext.Provider value={{ filters, setFilters }}>
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
