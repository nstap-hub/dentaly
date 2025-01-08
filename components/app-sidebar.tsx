"use client";
import { LuBookOpenCheck,LuHouse,LuLogOut,LuUsersRound,LuBookPlus } from "react-icons/lu";


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: LuHouse,
  },
  {
    title: "Appointments",
    url: "/dashboard/appointments",
    icon:LuBookOpenCheck ,
  },
  {
    title: "Patients",
    url: "/dashboard/patients",
    icon: LuUsersRound,
  },
  {
    title:"Treatments",
    url:"/dashboard/treatments",
    icon:LuBookPlus,
  },

  {
    title: "Log Out",
    url: "#",
    icon: LuLogOut,
  },
] 

export function AppSideBar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-blg">
        <SidebarGroup className="bg-blg">
          <SidebarGroupLabel className="text-white">Dentaly</SidebarGroupLabel>
          <SidebarGroupContent >
            <SidebarMenu className="text-white">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
