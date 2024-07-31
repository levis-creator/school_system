"use client";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import useWindowWidth from "@/hooks/useWindowWidth";
import React, { ReactNode, useState } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const windowWidth = useWindowWidth();

  return (
    <>
      <SideBar
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
