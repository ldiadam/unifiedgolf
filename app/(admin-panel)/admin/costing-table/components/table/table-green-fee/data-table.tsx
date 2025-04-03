"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Plus, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title: string;
  searchKey?: string;
  loading?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  title,
  searchKey,
  loading = false,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const router = useRouter();

  const legendItems = [
    { number: "1", description: "Weekday" },
    { number: "2", description: "Weekday Visitor" },
    { number: "3", description: "Weekend and Public Holiday" },
    { number: "4", description: "Weekend and Public Holiday Visitor" },
    { number: "5", description: "Weekend Saturday Afternoon" },
    { number: "6", description: "Weekend Saturday Afternoon Visitor" },
    { number: "7", description: "Weekend Sunday Afternoon" },
    { number: "8", description: "Weekend Sunday Afternoon Visitor" },
  ];

  return (
    <>
      <div className="mb-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Price in Malaysian Ringgit (RM)
        </p>
      </div>

      <ScrollArea className="rounded-md border">
        <div className="min-w-full w-max">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center p-0"
                  >
                    <div className="flex flex-col items-center justify-start h-full">
                      <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                      <p className="text-sm text-muted-foreground">
                        Loading, Please wait...
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    // className={`${
                    //   index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    // } hover:bg-gray-100 transition-colors`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="mt-6 mb-2 space-y-1">
        <div className="p-4 border rounded-md">
          <h3 className="text-md font-medium mb-4">Legend</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            {legendItems.map((item) => (
              <div key={item.number} className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full font-semibold text-sm border border-gray-300 shadow-sm">
                  {item.number}
                </div>
                <span className="text-sm">{item.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="text-sm text-center text-muted-foreground">
          Semua harga dalam Malaysian Ringgit (RM)
        </div> */}
      </div>
    </>
  );
}
