import { AppSidebar } from "@/components/layout/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function ListCustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider className="pt-44 lg:pt-38">
        <AppSidebar className="pt-44 lg:pt-44" />
        <div className="px-4 w-full">
          <div className="w-full overflow-x-auto rounded-md">{children}</div>
        </div>
      </SidebarProvider>
    </>
  );
}
