"use client"

import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { LucideIcon } from "lucide-react"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    icon?: LucideIcon
    logo?: React.ElementType
    plan?: string
  }[]
}) {
  const [activeTeam,] = React.useState(teams[0])


  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground" >
              <div className="flex items-center gap-3 text-left text-sm leading-tight">
                <span className=" text-blue-500">{activeTeam.icon && <activeTeam.icon  className="size-9"/>}</span>
                <span className="truncate font-semibold text-blue-900 text-2xl">{activeTeam.name}</span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}