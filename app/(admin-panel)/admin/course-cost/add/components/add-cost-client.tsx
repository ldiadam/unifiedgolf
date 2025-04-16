"use client";

import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { CostingForm } from "@/components/layout/form/costing-form";

export const AddCostClient: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-items-end">
          <h1 className="text-3xl font-bold tracking-tight">Costing Detail</h1>
        </div>
        <Separator />
        <CostingForm initialData={null} />
      </div>
    </>
  );
};
