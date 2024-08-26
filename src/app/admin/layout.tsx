"use client";
import NavBar from "@/components/navigation/NavBar";
import SideBar from "@/components/navigation/SideBar";
import useWindowWidth from "@/hooks/useWindowWidth";
import { MenuItem } from "@/utils/types";
import {
  BookOpen,
  CalendarRange,
  GraduationCap,
  LayoutDashboard,
  ListTodo,
  School,
  Settings,
  User,
  Users,
} from "lucide-react";
import { ReactNode, useState } from "react";
const Layout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
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
      menu_title: "Students",
      menu_link: "students",
      menu_icon: <GraduationCap />,
    },
    {
      menu_title: "Staffs",
      menu_link: "staffs",
      menu_icon: <Users />,
    },
    {
      menu_title: "Departments",
      menu_link: "departments",
      menu_icon: <School />,
    },
    {
      menu_title: "Classes",
      menu_link: "classes",
      menu_icon: <BookOpen />,
    },
    {
      menu_title: "Subjects",
      menu_link: "subjects",
      menu_icon: <ListTodo />,
    },
    {
      menu_title: "Timetables",
      menu_link: "timetables",
      menu_icon: <CalendarRange />,
    },
    {
      menu_title: "Profile",
      menu_link: "profile",
      menu_icon: <User />,
    },
    {
      menu_title: "Settings",
      menu_link: "settings",
      menu_icon: <Settings />,
    },
  ];
  return (
    <>
      <SideBar
        base_route="/admin"
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
        <div className="px-5 p-3 sm:px-14 lg:px-16 lg:pt-4">{children}</div>
      </div>
    </>
  );
};

export default Layout;
