"use client";

import { Separator } from "@/components/ui/separator";
import { CompanyForm } from "@/components/layout/form/company-form";

interface EditAddressBookClientProps {
  initialData: any; // Replace 'any' with the actual type of initialData
}

export const EditAddressBookClient: React.FC<EditAddressBookClientProps> = ({
  initialData,
}) => {
  // const router = useRouter();
  // console.log(initialData);

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-items-end">
          <h1 className="text-3xl font-bold tracking-tight">
            Edit Address Book
          </h1>
        </div>
        <Separator />
        <CompanyForm initialData={initialData} isUpdate={true} />
      </div>
    </>
  );
};
