import { format, addDays } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Separator } from "@/components/ui/separator";
import { SearchIcon, CheckIcon } from "lucide-react";
import { useSearch } from "@/hook/search-context";
import { cn } from "@/lib/utils";
import { useState } from "react";

const locations = [
  { country: "Thailand" },
  { country: "Indonesia" },
  { country: "Vietnam" },
  { country: "Malaysia" },
  { country: "Singapore" },
  // Add more locations as needed
];

export const EnhancedSearchPanel = () => {
  const { filters, setFilters } = useSearch();
  const [open, setOpen] = useState(false);

  const handleSearch = () => {
    // Update both location and searchTerm when searching
    setFilters((prev) => ({
      ...prev,
      searchTerm: prev.location, // Use location as search term
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto relative border rounded-2xl flex justify-between items-center p-2 bg-card"
    >
      <div className="relative grid w-full grid-cols-1 items-center">
        <div className="grid h-full grid-cols-3 items-center justify-center">
          {/* Location Selection */}
          <div className="relative h-full">
            <Separator
              orientation="vertical"
              className="absolute inset-y-0 right-0 m-auto h-6 shrink-0"
            />
            <div className="flex size-full items-center justify-center px-0">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    role="combobox"
                    aria-expanded={open}
                    className="size-full flex-col overflow-hidden rounded-full border-none px-5 py-0 focus-visible:z-10"
                  >
                    <div className="flex size-full items-center justify-between">
                      <div className="flex size-full flex-col items-start justify-center truncate">
                        <div className="text-[13px] font-bold">Location</div>
                        {filters.location ? (
                          <p className="truncate font-semibold text-neutral-800">
                            {filters.location}
                          </p>
                        ) : (
                          <span className="text-neutral-500">
                            Select location
                          </span>
                        )}
                      </div>
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Command>
                    <CommandInput placeholder="Search location..." />
                    <CommandList>
                      <CommandEmpty>No location found.</CommandEmpty>
                      <CommandGroup>
                        {locations.map((loc) => (
                          <CommandItem
                            key={loc.country}
                            value={loc.country}
                            onSelect={(currentValue) => {
                              setFilters((prev) => ({
                                ...prev,
                                location:
                                  currentValue === filters.location
                                    ? ""
                                    : currentValue,
                              }));
                              setOpen(false);
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "mr-2 size-4 shrink-0",
                                filters.location === loc.country
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {loc.country}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Check-in Date */}
          <div className="relative h-full">
            <Separator
              orientation="vertical"
              className="absolute inset-y-0 right-0 m-auto h-6 shrink-0"
            />
            <div className="flex size-full items-center justify-center px-0">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="size-full flex-col overflow-hidden rounded-full border-none px-5 py-0 focus-visible:z-10"
                  >
                    <div className="flex size-full flex-col items-start justify-center truncate">
                      <div className="text-[13px] font-bold">Check in</div>
                      {filters.checkInDate ? (
                        <div className="font-semibold text-neutral-800">
                          {format(filters.checkInDate, "LLL dd, y")}
                        </div>
                      ) : (
                        <div className="truncate text-neutral-500">
                          Pick a date
                        </div>
                      )}
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={filters.checkInDate}
                    onSelect={(date) =>
                      setFilters((prev) => ({ ...prev, checkInDate: date }))
                    }
                    initialFocus
                    disabled={(date) => date <= addDays(new Date(), 1)}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Check-out Date */}
          <div className="relative h-full">
            <div className="flex size-full items-center justify-center px-0">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="size-full flex-col overflow-hidden rounded-full border-none px-5 py-0 focus-visible:z-10"
                  >
                    <div className="flex size-full flex-col items-start justify-center truncate">
                      <div className="text-[13px] font-bold">Check Out</div>
                      {filters.checkOutDate ? (
                        <div className="font-semibold text-neutral-800">
                          {format(filters.checkOutDate, "LLL dd, y")}
                        </div>
                      ) : (
                        <div className="truncate text-neutral-500">
                          Pick a date
                        </div>
                      )}
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={filters.checkOutDate}
                    onSelect={(date) =>
                      setFilters((prev) => ({ ...prev, checkOutDate: date }))
                    }
                    initialFocus
                    disabled={(date) =>
                      date <= (filters.checkInDate || addDays(new Date(), 1))
                    }
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Search Button */}
          <div className="absolute right-2 z-20">
            <Button
              type="submit"
              size="icon"
              className="flex sm:size-10 shrink-0 items-center justify-center rounded-full bg-black text-white"
            >
              <span className="sr-only">Search</span>
              <SearchIcon className="size-5 shrink-0" />
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
