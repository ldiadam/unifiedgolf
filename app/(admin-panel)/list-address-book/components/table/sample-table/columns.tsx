"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
// import { User } from "@/data/data";
import { Checkbox } from "@/components/ui/checkbox";
import { Company } from "@/types/company";

export const columns: ColumnDef<Company>[] = [
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
    accessorKey: "categories",
    header: "COMPANY CATEGORY",
    cell: ({ row }) => {
      const categories = row.original.categories
        ? row.original.categories.map((cat) => cat.category_name).join(", ")
        : "";
      return <div>{categories}</div>;
    },
    filterFn: (row, id, filterValue) => {
      if (
        !filterValue ||
        !Array.isArray(filterValue) ||
        filterValue.length === 0
      )
        return true;

      const rowCategories = row.original.categories.map(
        (cat) => cat.category_name
      );
      return filterValue.some((category) => rowCategories.includes(category));
    },
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
    accessorKey: "created_at",
    header: "TIMESTAMP",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
