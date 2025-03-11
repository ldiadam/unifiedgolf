"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { User } from "@/data/data";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<User>[] = [
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
    accessorKey: "company_category",
    header: "COMPANY CATEGORY",
  },
  {
    accessorKey: "company_name",
    header: "COMPANY NAME",
  },
  {
    accessorKey: "company_code",
    header: "CODE",
  },
  {
    accessorKey: "company_address",
    header: "ADDRESS",
  },
  {
    accessorKey: "company_address_building",
    header: "ADDRESS BUILDING",
  },
  {
    accessorKey: "company_street_number",
    header: "STREET NUMBER",
  },
  {
    accessorKey: "company_street_name",
    header: "STREET NAME",
  },
  {
    accessorKey: "company_building_no",
    header: "BUILDING NO",
  },
  {
    accessorKey: "company_building_unit",
    header: "BUILDING UNIT",
  },
  {
    accessorKey: "company_building_name",
    header: "BUILDING NAME",
  },
  {
    accessorKey: "company_city",
    header: "CITY",
  },
  {
    accessorKey: "company_state",
    header: "STATE",
  },
  {
    accessorKey: "company_country",
    header: "COUNTRY",
  },
  {
    accessorKey: "company_zip_code",
    header: "ZIP CODE",
  },
  {
    accessorKey: "company_fax",
    header: "FAX",
  },
  {
    accessorKey: "company_website",
    header: "WEBSITE",
  },
  {
    accessorKey: "company_pic",
    header: "PIC",
  },
  {
    accessorKey: "company_designation",
    header: "DESIGNATION",
  },
  {
    accessorKey: "company_email",
    header: "EMAIL",
  },
  {
    accessorKey: "company_phone",
    header: "PHONE",
  },
  {
    accessorKey: "company_timestamp",
    header: "TIMESTAMP",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
