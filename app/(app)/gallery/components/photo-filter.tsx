"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PhotoFilter } from "@/types/photo";

interface PhotoFilterProps {
  onFilterChange: (filter: PhotoFilter) => void;
}

export function PhotoFilterComponent({ onFilterChange }: PhotoFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState<string | undefined>(undefined);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onFilterChange({
      searchTerm: e.target.value,
      category,
    });
  };

  const handleCategoryChange = (value: string) => {
    const categoryValue = value === "semua" ? undefined : value;
    setCategory(categoryValue);
    onFilterChange({
      searchTerm,
      category: categoryValue,
    });
  };

  return (
    <div className="w-full mb-6 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-4">
      <div className="relative flex-grow">
        <svg
          className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <Input
          type="search"
          placeholder="Cari foto..."
          className="w-full pl-9"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="sm:w-[180px]">
        <Select
          value={category || "semua"}
          onValueChange={handleCategoryChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="semua">Semua Kategori</SelectItem>
            <SelectItem value="lapangan-golf">Lapangan Golf</SelectItem>
            <SelectItem value="turnamen">Turnamen</SelectItem>
            <SelectItem value="acara-komunitas">Acara Komunitas</SelectItem>
            <SelectItem value="lainnya">Lainnya</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        variant="outline"
        onClick={() => {
          setSearchTerm("");
          setCategory(undefined);
          onFilterChange({});
        }}
      >
        Reset
      </Button>
    </div>
  );
}
