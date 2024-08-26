import StaffProvider from "@/context/StaffProvider";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <StaffProvider>{children}</StaffProvider>
    </div>
  );
};

export default Layout;
