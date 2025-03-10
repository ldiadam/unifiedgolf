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
      <SidebarProvider className="pt-44 lg:pt-36">
        <AppSidebar className="pt-44 lg:pt-36" />
        {children}
      </SidebarProvider>
    </>
  );
}
