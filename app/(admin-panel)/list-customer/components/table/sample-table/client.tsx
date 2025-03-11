"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
// import { Heading } from '@/components/ui/heading';
import { Separator } from "@/components/ui/separator";
import { User } from "@/data/data";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import { Customer } from "@/types/customer";

interface CustomerClientProps {
  // data: Customer[];
  data: User[];
}

export const CustomerClient: React.FC<CustomerClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-items-end">
          <h1 className="text-3xl font-bold tracking-tight">Customers List</h1>
        </div>
        <Separator />
        <DataTable
          searchKey="company_name"
          filterKey="company_category"
          columns={columns}
          data={data}
        />
      </div>
    </>
  );
};
