import { GreenFeeTableProps } from "@/types/green-fee";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/utils/utils";

export function GreenFeeTable({
  title,
  headerLabels,
  data,
}: GreenFeeTableProps) {
  return (
    <div className="w-full">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-center">{title}</h2>
      </div>
      <Table className="border border-gray-200">
        <TableCaption className="mt-4">
          Semua harga dalam Malaysian Ringgit (RM)
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            {headerLabels.map((header, index) => (
              <TableHead
                key={index}
                className={cn(
                  "font-medium text-center border border-gray-200",
                  index >= 2 && index <= 9 ? "w-14" : ""
                )}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <TableCell className="border border-gray-200 font-medium">
                {row.company}
              </TableCell>
              <TableCell className="border border-gray-200">
                {row.golfCourse}
              </TableCell>
              {row.values.map((value, index) => (
                <TableCell
                  key={index}
                  className="text-center border border-gray-200"
                >
                  {value}
                </TableCell>
              ))}
              <TableCell className="border border-gray-200">
                {row.remarks}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
