"use client";

import * as React from "react";
import { User, Map, ListCollapse } from "lucide-react";

import { NavMain } from "./nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
// This is sample data.
const data = {
  navMain: [
    {
      title: "Address Book",
      url: "/admin/address-book/list",
      icon: User,
      isActive: true,
      items: [
        {
          title: "List Address Book",
          url: "/admin/address-book/list",
        },
        {
          title: "Add Address Book",
          url: "/admin/address-book/add",
        },
      ],
    },
    {
      title: "Quotation",
      url: "/admin/course-cost",
      icon: ListCollapse,
      isActive: true,
      items: [
        {
          title: "Costing Table",
          url: "/admin/course-cost/list",
        },
        {
          title: "Add Course Cost",
          url: "/admin/course-cost/add",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader className="hidden md:block">
        <div className="flex flex-1 justify-center items-center mt-2 sidebar-expanded:flex sidebar-collapsed:hidden">
          <h1 className="font-bold text-xl">Admin Panel</h1>
        </div>
      </SidebarHeader> */}
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
