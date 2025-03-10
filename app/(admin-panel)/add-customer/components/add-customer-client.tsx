"use client";

import { Separator } from "@/components/ui/separator";

import { useRouter } from "next/navigation";
import { AddCustomerForm } from "./add-form";

export const AddCustomerClient: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-items-end">
          <h1 className="text-3xl font-bold tracking-tight">Add Customer</h1>
        </div>
        <Separator />
        <AddCustomerForm initialData={null} />
      </div>
    </>
  );
};
