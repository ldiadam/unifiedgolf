"use client";
import React, { useState } from "react";
import { Separator } from "./ui/separator";
import { addDays, format, isBefore } from "date-fns";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CheckIcon, SearchIcon, TextSelectionIcon } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";
import { SelectIcon } from "@radix-ui/react-select";

interface LocationProps {
  name: string;
}
const locations: LocationProps[] = [
  {
    name: "Indonesia",
  },
  {
    name: "Malaysia",
  },
  {
    name: "Singapore",
  },
];
export const SearchPanel = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");

  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto relative border rounded-2xl flex justify-between items-center p-2 bg-card"
    >
      <div className="relative grid w-full grid-cols-1 items-center">
        <div className="grid h-full grid-cols-3 items-center justify-center">
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
                        {location ? (
                          <p className="truncate font-semibold text-neutral-800">
                            {
                              locations.find((loc) => loc.name === location)
                                ?.name
                            }
                          </p>
                        ) : (
                          <div className="text-neutral-500">
                            Select location
                          </div>
                        )}
                      </div>
                      <SelectIcon className="-mr-2 ml-2  size-5 shrink-0 opacity-50" />
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
                            key={loc.name}
                            value={loc.name}
                            onSelect={(currentValue) => {
                              setLocation(
                                currentValue === location ? "" : currentValue
                              );
                              setOpen(false);
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "mr-2 size-4 shrink-0",
                                location === loc.name
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {loc.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="relative h-full">
            <Separator
              orientation="vertical"
              className="absolute inset-y-0 right-0 m-auto h-6 shrink-0"
            />
            <div className="flex size-full items-center justify-center px-0">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="size-full flex-col overflow-hidden rounded-full border-none px-5 py-0 focus-visible:z-10"
                  >
                    <div className="flex size-full flex-col items-start justify-center truncate">
                      <div className="text-[13px] font-bold">Check in</div>
                      {checkInDate ? (
                        <div className="font-semibold text-neutral-800">
                          {format(checkInDate, "LLL dd, y")}
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
                    selected={checkInDate}
                    onSelect={setCheckInDate}
                    initialFocus
                    disabled={(date) => date <= addDays(new Date(), 1)}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="relative h-full">
            <div className="flex size-full items-center justify-center px-0">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="size-full flex-col overflow-hidden rounded-full border-none px-5 py-0 focus-visible:z-10"
                  >
                    <div className="flex size-full flex-col items-start justify-center truncate">
                      <div className="text-[13px] font-bold">Check Out</div>
                      {checkOutDate ? (
                        <div className="font-semibold text-neutral-800">
                          {format(checkOutDate, "LLL dd, y")}
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
                    selected={checkOutDate}
                    onSelect={setCheckOutDate}
                    initialFocus
                    disabled={(date) => date <= addDays(new Date(), 1)}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="absolute right-2 z-20">
            <Button
              type="submit"
              variant={"ghost"}
              size={"icon"}
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
