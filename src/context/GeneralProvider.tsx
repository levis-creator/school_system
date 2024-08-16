"use client";
import { createContext, ReactNode } from "react";

export const GeneralContext = createContext({});
const GeneralProvider = ({ children }: { children: ReactNode }) => {
  return (
    <GeneralContext.Provider value={{}}>{children}</GeneralContext.Provider>
  );
};

export default GeneralProvider;
