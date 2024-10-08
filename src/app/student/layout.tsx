"use client";
import NavBar from "@/components/navigation/NavBar";
import SideBar from "@/components/navigation/SideBar";
import useWindowWidth from "@/hooks/useWindowWidth";
import React, { ReactNode, useState } from "react";
import { CalendarDays, LayoutDashboard, Settings, User } from "lucide-react";
import { MenuItem } from "@/utils/types";
const Layout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const windowWidth = useWindowWidth();
  const menu_list: MenuItem[] = [
    {
      menu_title: "Dashboard",
      menu_link: "/",
      menu_icon: <LayoutDashboard />,
    },
    {
      menu_title: "Schedule",
      menu_link: "schedule",
      menu_icon: <CalendarDays />,
    },
    {
      menu_title: "Grades",
      menu_link: "grades",
      menu_icon: <LayoutDashboard />,
    },
    {
      menu_title: "Profile",
      menu_link: "profile",
      menu_icon: <User />,
    },
    {
      menu_title: "Settings",
      menu_link: "#",
      menu_icon: <Settings />,
    },
  ];

  return (
    <>
      <SideBar
        base_route="/student"
        menu_list={menu_list}
        isOpen={isOpen}
        open_menu={handleMenu}
        windowWidth={windowWidth}
      />

      <div
        className={`${
          isOpen ? "ml-64" : null
        } flex-grow bg-slate-50 min-h-screen`}
      >
        <NavBar open_menu={handleMenu} isOpen={isOpen} />
        <div className="p-3 sm:px-14 lg:px-16 lg:pt-12">{children}</div>
      </div>
    </>
  );
};

export default Layout;
