"use client";

import { Separator } from "@/components/ui/separator";
import { AddForm } from "./add-form";
import { CompanyForm } from "@/components/layout/form/company-form";

export const EditAddressBookClient: React.FC = () => {
  // const router = useRouter();

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-items-end">
          <h1 className="text-3xl font-bold tracking-tight">
            Edit Address Book
          </h1>
        </div>
        <Separator />
        <CompanyForm initialData={null} />
      </div>
    </>
  );
};
