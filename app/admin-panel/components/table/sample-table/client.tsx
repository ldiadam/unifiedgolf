"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
// import { Heading } from '@/components/ui/heading';
import { Separator } from "@/components/ui/separator";
import { User } from "@/data/data";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";

interface ProductsClientProps {
  data: User[];
}

export const UserClient: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-items-end">
          <h1 className="text-3xl font-bold tracking-tight">Customers Data</h1>
        </div>
        <Separator />
        <DataTable searchKey="company_name" columns={columns} data={data} />
      </div>
    </>
  );
};
