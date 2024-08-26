"use client";
import { StaffContext } from "@/context/StaffProvider";
import { useContext } from "react";

const useStaffContext = () => {
  const context = useContext(StaffContext);
  if (!context) {
    throw Error("useStaffContext should be used inside admin environment");
  }
  return context;
};

export default useStaffContext;
