"use client"
import { IoCalendarNumberOutline } from "react-icons/io5";

import * as React from "react"
import {
    BookText,
  GalleryVerticalEnd,
  LoaderPinwheel 
} from "lucide-react"


import { TeamSwitcher } from "./team-switcher";
import { NavMain } from "./nav-main";
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from "./ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "HealDocs",
      logo: GalleryVerticalEnd,
      icon: LoaderPinwheel      
    },
  ],
  navMain: [
    {
      title: "Todo List",
      url: "#",
      icon: BookText ,
      isActive: true,
      items: [
        {
          title: "Team Meeting",
          url: "#",
        },
        {
          title: "Work on Branding",
          url: "#",
        },
        {
          title: "Make a Report for client",
          url: "#",
        },
                {
          title: "Create a planer",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} >
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <div className="flex items-center gap-3 ml-4 mt-3">
            <IoCalendarNumberOutline  size={23}/> <p className="font-bold ">Overview</p>
        </div>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}