"use client";

import { Separator } from "@/components/ui/separator";
import { GreenFeeTableClient } from "./table/table-green-fee/client";

export const GreenFeeClient: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-items-end">
          <h1 className="text-3xl font-bold tracking-tight">
            Quotation For Course Booking
          </h1>
        </div>
        <Separator />

        <GreenFeeTableClient />
      </div>
    </>
  );
};
