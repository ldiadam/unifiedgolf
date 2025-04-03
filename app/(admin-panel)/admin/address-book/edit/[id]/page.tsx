import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { users } from "@/data/data";
import { Breadcrumbs } from "@/components/layout/breadcrumb";
import { EditAddressBookClient } from "./components/edit-address-book-client";
import axios from "axios";
import { API_BASE_URL } from "@/config/api";

export default async function EditAddressBookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let data;
  try {
    const res = await axios.get(`${API_BASE_URL}/customer/${id}`);
    data = res.data.data;
  } catch (error) {
    console.log(error);
  }
  // console.log(id);

  // console.log(res.data);

  const breadcrumbItems = [
    { title: "Admin Panel", link: "/admin/address-book/list" },
    { title: "Edit Address Book", link: "/admin/address-book/edit" },
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
          <EditAddressBookClient initialData={data} />
        </div>
      </SidebarInset>
    </>
  );
}
