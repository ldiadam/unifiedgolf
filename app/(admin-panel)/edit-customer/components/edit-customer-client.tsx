"use client";

import { Separator } from "@/components/ui/separator";
import { AddCustomerForm } from "./add-form";

export const EditCustomerClient: React.FC = () => {
  // const router = useRouter();

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-items-end">
          <h1 className="text-3xl font-bold tracking-tight">Edit Customer</h1>
        </div>
        <Separator />
        <AddCustomerForm initialData={null} />
      </div>
    </>
  );
};
