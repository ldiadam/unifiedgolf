"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";
import { COMPANY_CATEGORIES } from "@/constants/categories";

interface CategoryFilterProps {
  table: any;
}

export function CategoryFilter({ table }: CategoryFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      const updated = prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category];

      if (updated.length === 0) {
        table.getColumn("categories")?.setFilterValue(undefined);
      } else {
        table.getColumn("categories")?.setFilterValue(updated);
      }

      return updated;
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border">
          <Filter className="mr-2 h-4 w-4" />
          Filter Categories
          {selectedCategories.length > 0 && (
            <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
              {selectedCategories.length}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {COMPANY_CATEGORIES.map((category) => (
          <DropdownMenuCheckboxItem
            key={category.id}
            checked={selectedCategories.includes(category.label)}
            onCheckedChange={() => handleCategoryChange(category.label)}
          >
            {category.label}
          </DropdownMenuCheckboxItem>
        ))}
        {/* <DropdownMenuSeparator /> */}
        {/* <div className="px-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-full"
            onClick={() => {
              setSelectedCategories([]);
              table.getColumn("categories")?.setFilterValue(undefined);
            }}
          >
            Clear Filters
          </Button>
        </div> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
