"use client";
import { StudentContext } from "@/context/StudentProvider";
import { useContext } from "react";

const useStudentContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw Error("useStudentContext should be used inside admin environment");
  }
  return context;
};

export default useStudentContext;
