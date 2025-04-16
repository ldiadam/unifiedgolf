"use client";
import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { API_BASE_URL } from "@/config/api";
import { useCompany } from "@/hook/company-context";

const formSchema = z.object({
  reference_no: z.string().optional(),
  validity: z.string().optional(),
  date: z.string().optional(),
  title: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  duration_days: z.number().optional(),
  duration_night: z.number().optional(),
  nos_of_round: z.number().optional(),

  // Golf Course
  course_name: z.string().optional(),
  course_date: z.string().optional(),

  // Hotel/Accommodation
  hotel_name: z.string().optional(),
  hotel_location: z.string().optional(),
  hotel_date: z.string().optional(),

  // These fields are kept for compatibility with the existing code
  company_name: z.string().optional(),
  company_code: z.string().optional(),
  company_address: z.string().optional(),
  company_address_building: z.string().optional(),
  company_street_number: z.number().optional(),
  company_street_name: z.string().optional(),
  company_building_no: z.number().optional(),
  company_building_unit: z.string().optional(),
  company_building_name: z.string().optional(),
  company_city: z.string().optional(),
  company_state: z.string().optional(),
  company_country: z.string().optional(),
  company_zip_code: z.number().optional(),
  company_fax: z.number().optional(),
  company_website: z.string().optional(),
  company_pic: z.string().optional(),
  company_designation: z.string().optional(),
  company_email: z.string().email().optional(),
  company_phone: z.string().optional(),
  categories: z.array(z.number()).default([]),
});

type FormValues = z.infer<typeof formSchema>;

interface CostingFormProps {
  initialData: any | null;
  isUpdate?: boolean;
}

export const CostingForm: React.FC<CostingFormProps> = ({
  initialData,
  isUpdate = false,
}) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const action = isUpdate ? "Save changes" : "Create";
  const { fetchCompanyData } = useCompany();

  const defaultValues = initialData || {
    reference_no: "",
    validity: "",
    date: "",
    title: "",
    country: "",
    state: "",
    duration_days: 0,
    duration_night: 0,
    nos_of_round: 0,
    course_name: "",
    course_date: "",
    hotel_name: "",
    hotel_location: "",
    hotel_date: "",
    company_name: "",
    company_code: "",
    company_address: "",
    company_address_building: "",
    company_street_number: 0,
    company_street_name: "",
    company_building_no: 0,
    company_building_unit: "",
    company_building_name: "",
    company_city: "",
    company_state: "",
    company_country: "",
    company_zip_code: 0,
    company_fax: 0,
    company_website: "",
    company_pic: "",
    company_email: "",
    company_phone: "",
    categories: [],
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      // Submit form data to API
      if (isUpdate && initialData) {
        await axios.put(
          `${API_BASE_URL}/package/update/${initialData.id}`,
          data
        );
        toast("Update Success", {
          description: "Package has been updated successfully",
        });
      } else {
        await axios.post(`${API_BASE_URL}/package`, data);
        toast("Create Success", {
          description: "New package has been created successfully",
        });
      }

      router.push(`/admin/packages/list`);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast("Uh oh! Something went wrong.", {
        description:
          error.response?.data?.message ||
          "There was a problem with your request.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        {/* Section A: General Detail */}
        <div className="p-2">
          <div className="uppercase font-bold text-sm mb-1">
            A. General Detail
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <div className="grid grid-cols-2">
                <FormField
                  control={form.control}
                  name="reference_no"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Reference no</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          className="h-8 text-sm rounded-none"
                          {...field}
                          value={
                            typeof field.value === "string" ? field.value : ""
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="validity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Validity</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          className="h-8 text-sm rounded-none"
                          {...field}
                          value={
                            typeof field.value === "string" ? field.value : ""
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Date</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        className="h-8 text-sm rounded-none"
                        {...field}
                        value={
                          typeof field.value === "string" ? field.value : ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-3">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Title</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        className="h-8 text-sm rounded-none"
                        {...field}
                        value={
                          typeof field.value === "string" ? field.value : ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 col-span-1">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Country</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        className="h-8 text-sm rounded-none"
                        {...field}
                        value={
                          typeof field.value === "string" ? field.value : ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">State</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        className="h-8 text-sm rounded-none"
                        {...field}
                        value={
                          typeof field.value === "string" ? field.value : ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-3">
                <FormField
                  control={form.control}
                  name="duration_days"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Days</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          type="number"
                          className="h-8 text-sm rounded-none"
                          {...field}
                          value={
                            typeof field.value === "number" ? field.value : 0
                          }
                          onChange={(e) =>
                            field.onChange(
                              e.target.value === ""
                                ? 0
                                : parseInt(e.target.value)
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="duration_night"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Night</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          type="number"
                          className="h-8 text-sm rounded-none"
                          {...field}
                          value={
                            typeof field.value === "number" ? field.value : 0
                          }
                          onChange={(e) =>
                            field.onChange(
                              e.target.value === ""
                                ? 0
                                : parseInt(e.target.value)
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nos_of_round"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs">Nos of Round</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          type="number"
                          className="h-8 text-sm rounded-none"
                          {...field}
                          value={
                            typeof field.value === "number" ? field.value : 0
                          }
                          onChange={(e) =>
                            field.onChange(
                              e.target.value === ""
                                ? 0
                                : parseInt(e.target.value)
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section B: Golf Course */}
        <div className="p-2">
          <div className="uppercase font-bold text-sm mb-1">B. Golf Course</div>
          <div className="grid grid-cols-2 mb-2">
            <FormField
              control={form.control}
              name="course_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Course Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      className="h-8 text-sm rounded-none"
                      {...field}
                      value={typeof field.value === "string" ? field.value : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="course_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Date</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      className="h-8 text-sm rounded-none"
                      {...field}
                      value={typeof field.value === "string" ? field.value : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Golf course table */}
          <div className="w-full overflow-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border  px-2 py-1 text-xs text-center">#</th>
                  <th className="border  px-2 py-1 text-xs text-center">
                    Name of Golfer
                  </th>
                  <th className="border  px-2 py-1 text-xs text-center">
                    Green Fee
                  </th>
                  <th className="border  px-2 py-1 text-xs text-center">
                    Buggy
                  </th>
                  <th className="border  px-2 py-1 text-xs text-center">
                    Caddy
                  </th>
                  <th className="border  px-2 py-1 text-xs text-center">
                    Insurance
                  </th>
                  <th className="border  px-2 py-1 text-xs text-center">
                    Total
                  </th>
                  <th className="border  px-2 py-1 text-xs text-center">
                    Nationality
                  </th>
                  <th className="border  px-2 py-1 text-xs text-center">Day</th>
                  <th className="border  px-2 py-1 text-xs text-center">
                    Remark
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((index) => (
                  <tr key={index}>
                    <td className="border  px-2 py-1 text-xs text-center">
                      {index}
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="border  px-2 py-1 text-xs text-center">
                    Total
                  </td>
                  <td className="border  px-2 py-1"></td>
                  <td className="border  px-2 py-1">
                    <Input className="h-8 text-sm rounded-none border-0 p-1" />
                  </td>
                  <td className="border  px-2 py-1">
                    <Input className="h-8 text-sm rounded-none border-0 p-1" />
                  </td>
                  <td className="border px-2 py-1">
                    <Input className="h-8 text-sm rounded-none border-0 p-1" />
                  </td>
                  <td className="border px-2 py-1">
                    <Input className="h-8 text-sm rounded-none border-0 p-1" />
                  </td>
                  <td className="border  px-2 py-1">
                    <Input className="h-8 text-sm rounded-none border-0 p-1" />
                  </td>
                  <td className="border  px-2 py-1"></td>
                  <td className="border  px-2 py-1"></td>
                  <td className="border  px-2 py-1"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section C: Hotel/Accommodation */}
        <div className="p-2">
          <div className="uppercase font-bold text-sm mb-1">
            C. Hotel/Accommodation
          </div>
          <div className="grid grid-cols-3 mb-2">
            <FormField
              control={form.control}
              name="hotel_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Hotel Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      className="h-8 text-sm rounded-none"
                      {...field}
                      value={typeof field.value === "string" ? field.value : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hotel_location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Location</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      className="h-8 text-sm rounded-none"
                      {...field}
                      value={typeof field.value === "string" ? field.value : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hotel_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Date</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      className="h-8 text-sm rounded-none"
                      {...field}
                      value={typeof field.value === "string" ? field.value : ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Hotel/Accommodation table */}
          <div className="w-full overflow-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border px-2 py-1 text-xs text-center">#</th>
                  <th className="border px-2 py-1 text-xs text-center">
                    Name of Golfer
                  </th>
                  <th className="border px-2 py-1 text-xs text-center">
                    Room Type
                  </th>
                  <th className="border px-2 py-1 text-xs text-center">
                    Single
                  </th>
                  <th className="border px-2 py-1 text-xs text-center">
                    Double
                  </th>
                  <th className="border px-2 py-1 text-xs text-center">
                    Breakfast
                  </th>
                  <th className="border px-2 py-1 text-xs text-center">Tax</th>
                  <th className="border px-2 py-1 text-xs text-center">
                    Others
                  </th>
                  <th className="border px-2 py-1 text-xs text-center">
                    Total
                  </th>
                  <th className="border px-2 py-1 text-xs text-center">
                    Remarks
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((index) => (
                  <tr key={index}>
                    <td className="border  px-2 py-1 text-xs text-center">
                      {index}
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                    <td className="border  px-2 py-1">
                      <Input className="h-8 text-sm rounded-none border-0 p-1" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-start ml-2 pb-2">
          <Button disabled={loading} className="rounded-none" type="submit">
            {action}
          </Button>
        </div>
      </form>
    </Form>
  );
};
