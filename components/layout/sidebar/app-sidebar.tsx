"use client";

import * as React from "react";
import { User } from "lucide-react";

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
      url: "/list-address-book",
      icon: User,
      isActive: true,
      items: [
        {
          title: "List Address Book",
          url: "/list-address-book",
        },
        {
          title: "Add Address Book",
          url: "/add-address-book",
        },
        // {
        //   title: "Edit Address Book",
        //   url: "/edit-address-book",
        // },
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
