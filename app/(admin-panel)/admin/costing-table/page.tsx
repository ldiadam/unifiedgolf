import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Breadcrumbs } from "@/components/layout/breadcrumb";
import { GreenFeeClient } from "./components/green-fee-client";

export default function GreenFeePage() {
  const breadcrumbItems = [
    { title: "Admin Panel", link: "#" },
    { title: "Costing Table", link: "/admin/costing-table" },
  ];

  return (
    <>
      <SidebarInset>
        <div className="flex h-10 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>
        <div className="px-4 w-full">
          <div className="overflow-x-auto rounded-md">
            <GreenFeeClient />
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
