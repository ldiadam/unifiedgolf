"use client";

import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { CompanyForm } from "@/components/layout/form/company-form";

export const AddAddressBookClient: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-items-end">
          <h1 className="text-3xl font-bold tracking-tight">
            Add Address Book
          </h1>
        </div>
        <Separator />
        <CompanyForm initialData={null} />
      </div>
    </>
  );
};
