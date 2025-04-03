"use client";

import { DataTable } from "./data-table";
import { Separator } from "@/components/ui/separator";
import { malaysianGreenFeeColumns } from "./columns";
import {
  malaysianGreenFeeData,
  nonMalaysianGreenFeeData,
} from "@/data/green-fee";
import { useState, useEffect } from "react";

// Buat salinan kolom untuk non-Malaysian (bisa digunakan kolom yang sama)
const nonMalaysianGreenFeeColumns = [...malaysianGreenFeeColumns];

export const GreenFeeTableClient: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="space-y-4">
        <div>
          <DataTable
            title="A. Green Fee For Malaysian in Malaysian Ringgit"
            columns={malaysianGreenFeeColumns}
            data={malaysianGreenFeeData}
            loading={loading}
          />
        </div>

        <div>
          <Separator className="my-4" />
          <DataTable
            title="B. Green Fee For Non Malaysian in Malaysian Ringgit"
            columns={nonMalaysianGreenFeeColumns}
            data={nonMalaysianGreenFeeData}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};
