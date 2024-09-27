"use client";
import DepartmentProvider from "@/context/DepartmentProvider";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <DepartmentProvider>{children}</DepartmentProvider>
    </div>
  );
};

export default Layout;
