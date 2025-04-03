"use client";
import { ColumnDef } from "@tanstack/react-table";
import { GreenFeeData } from "@/types/green-fee";
import { Checkbox } from "@/components/ui/checkbox";

export const malaysianGreenFeeColumns: ColumnDef<GreenFeeData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "company",
    header: "COMPANY",
  },
  {
    accessorKey: "golfCourse",
    header: "GOLF COURSE",
  },
  {
    accessorKey: "values.0",
    header: "1",
    cell: ({ row }) => row.original.values[0],
  },
  {
    accessorKey: "values.1",
    header: "2",
    cell: ({ row }) => row.original.values[1],
  },
  {
    accessorKey: "values.2",
    header: "3",
    cell: ({ row }) => row.original.values[2],
  },
  {
    accessorKey: "values.3",
    header: "4",
    cell: ({ row }) => row.original.values[3],
  },
  {
    accessorKey: "values.4",
    header: "5",
    cell: ({ row }) => row.original.values[4],
  },
  {
    accessorKey: "values.5",
    header: "6",
    cell: ({ row }) => row.original.values[5],
  },
  {
    accessorKey: "values.6",
    header: "7",
    cell: ({ row }) => row.original.values[6],
  },
  {
    accessorKey: "values.7",
    header: "8",
    cell: ({ row }) => row.original.values[7],
  },
  {
    accessorKey: "remarks",
    header: "REMARKS",
  },
];
