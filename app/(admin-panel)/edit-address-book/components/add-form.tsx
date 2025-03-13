"use client";
import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Check, ChevronsUpDown, Trash } from "lucide-react";
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

import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import axios from "axios";

const formSchema = z.object({
  company_name: z
    .string()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_code: z
    .string()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_address: z
    .string()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_address_building: z
    .string()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_street_number: z
    .number()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_street_name: z
    .string()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_building_no: z
    .number()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_building_unit: z
    .string()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_building_name: z
    .string()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_city: z
    .string()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_state: z
    .string()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_country: z
    .string()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_zip_code: z
    .number()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_fax: z
    .number()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_website: z
    .string()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_pic: z
    .string()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_designation: z
    .string()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_email: z
    .string()
    .min(3, { message: "Field must be at least 3 characters" }),
  company_phone: z
    .string()
    .min(3, { message: "Field must be at least 3 characters" }),
});

type AddFormValues = z.infer<typeof formSchema>;

interface AddFormProps {
  initialData: any | null;
}

export const AddForm: React.FC<AddFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  //   const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  //   const title = initialData ? "Edit slider" : "Create slider";
  //   const description = initialData ? "Edit a slider." : "Add a new slider";
  //   const toastMessage = initialData ? "Data updated." : "Data created.";
  const action = initialData ? "Save changes" : "Create";

  const defaultValues = initialData
    ? initialData
    : {
        company_name: "",
        company_code: "",
        company_address: "",
        company_address_building: "",
        company_street_number: "",
        company_street_name: "",
        company_building_no: "",
        company_building_unit: "",
        company_building_name: "",
        company_city: "",
        company_state: "",
        company_country: "",
        company_zip_code: "",
        company_fax: "",
        company_website: "",
        company_pic: "",
        company_email: "",
        company_phone: "",
      };
  //   console.log(defaultValues);

  const form = useForm<AddFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: AddFormValues) => {
    try {
      setLoading(true);
      console.log(data);

      toast("Submit Success", {
        description: "Submit has been successed",
      });
      //   toast({
      //     variant: "destructive",
      //     title: "Submit Success",
      //   });
      if (initialData) {
        await axios.post(`/api/products/edit-product/${initialData._id}`, data);
      } else {
        const res = await axios.post(`/api/products/create-product`, data);
        console.log("product", res);
      }
      router.refresh();
      router.push(`/list-address-book`);
      // toast({
      //   variant: 'destructive',
      //   title: 'Uh oh! Something went wrong.',
      //   description: 'There was a problem with your request.'
      // });
    } catch (error: any) {
      toast("Uh oh! Something went wrong.", {
        description: "There was a problem with your request.",
      });
      //   toast({
      //     variant: "destructive",
      //     title: "Uh oh! Something went wrong.",
      //     description: "There was a problem with your request.",
      //   });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <div className="gap-5 md:grid">
            <FormField
              control={form.control}
              name="company_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company Name..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Code</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder="Company Code..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Address</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company Address..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_address_building"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Address Building</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company Address Building..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_street_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Street Number</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company Street Number..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_street_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Street Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company Street Name..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_building_no"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Building No</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company Building No..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_building_unit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Building Unit</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company Building Unit..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_building_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Building Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company Building Name..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company City</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company City..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company State</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company State..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Country</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company Country..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company_zip_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Zip Code</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company Zip Code..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_fax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Fax</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company Fax..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Website</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company Website..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_pic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company PIC</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company PIC..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_designation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Designation</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company Designation..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company Email..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Phone</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Company Phone.."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
