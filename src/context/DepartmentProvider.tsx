import { createContext, ReactNode, useContext, useState } from "react";
export const DepartmentContext = createContext({});
const DepartmentProvider = ({ children }: { children: ReactNode }) => {
  const [departments, setDepartments] = useState([]);
  return (
    <DepartmentContext.Provider value={{ departments, setDepartments }}>
      {children}
    </DepartmentContext.Provider>
  );
};

export default DepartmentProvider;
