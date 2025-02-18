import React from "react";
import { useCart } from "@/hook/booking-context";
import { Location } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/utils/utils";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { addDays, differenceInDays, format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";

interface BookingFormProps {
  location: Location;
}

interface BookingFormValues {
  checkIn: Date;
  checkOut: Date;
}

export function BookingForm({ location }: BookingFormProps) {
  const { dispatch } = useCart();
  const form = useForm<BookingFormValues>({
    defaultValues: {
      checkIn: new Date(),
      checkOut: addDays(new Date(), 1),
    },
  });

  const checkIn = form.watch("checkIn");
  const checkOut = form.watch("checkOut");
  const numberOfDays = differenceInDays(checkOut, checkIn);
  const totalPrice = location.pricePerDay * numberOfDays;

  const onSubmit = (data: BookingFormValues) => {
    dispatch({
      type: "ADD_BOOKING",
      payload: {
        locationId: location.slug,
        location,
        startDate: data.checkIn,
        endDate: data.checkOut,
        totalPrice,
      },
    });
  };

  return (
    <Card className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="checkIn"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-base">Check-in</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-3 h-4 w-4 text-muted-foreground" />
                          {field.value ? (
                            format(field.value, "LLL dd, y")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() ||
                          (form.getValues("checkOut") &&
                            date >= form.getValues("checkOut"))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="checkOut"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-base">Check-out</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-3 h-4 w-4 text-muted-foreground" />
                          {field.value ? (
                            format(field.value, "LLL dd, y")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date <= form.getValues("checkIn") || date < new Date()
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <CardContent className="p-0 space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">
                ${location.pricePerDay} x {numberOfDays} day
              </span>
              <span>${location.pricePerDay * numberOfDays}</span>
            </div>

            <div className="flex justify-between items-center font-medium text-lg border-t pt-4">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base"
              disabled={!checkIn || !checkOut || numberOfDays <= 0}
            >
              Reserve
            </Button>
          </CardContent>
        </form>
      </Form>
    </Card>
  );
}
