import { DepartmentContext } from "@/context/DepartmentProvider";
import { useContext } from "react";

const useDepartment = () => {
  const context = useContext(DepartmentContext);
  if (!context) {
    throw Error("useStudentContext should be used inside admin environment");
  }
  return context;
};

export default useDepartment;
