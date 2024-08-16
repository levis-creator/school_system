"use client";
import { GeneralContext } from "@/context/GeneralProvider";
import { useContext } from "react";

const useGeneralContext = () => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw Error("useGeneralContext should be used inside admin environment");
  }
  return context;
};

export default useGeneralContext;
