import StudentProvider from "@/context/StudentProvider";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <StudentProvider>{children}</StudentProvider>
    </div>
  );
};

export default Layout;
