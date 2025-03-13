import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { users } from "@/data/data";
import { Breadcrumbs } from "@/components/layout/breadcrumb";
import { EditAddressBookClient } from "./components/edit-address-book-client";

export default function EditAddressBookPage() {
  const breadcrumbItems = [
    { title: "Admin Panel", link: "/address-book" },
    { title: "Edit Address Book", link: "/edit-address-book" },
    // { title: 'User', link: '/dashboard/user' }
  ];
  return (
    <>
      <SidebarInset>
        <div className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>
        <div className="container max-h-screen ">
          <EditAddressBookClient />
        </div>
      </SidebarInset>
    </>
  );
}
