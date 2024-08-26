"use client";
import Toast from "@/components/Toast";
import useToast from "@/hooks/useToast";
import { createContext, ReactNode } from "react";
import { TypeAttributes } from "rsuite/esm/internals/types";

export const GeneralContext = createContext({});
const GeneralProvider = ({ children }: { children: ReactNode }) => {
  const toast = useToast();
  const messageToast = (type: TypeAttributes.Status, message: string) => {
    const _toast = <Toast message={message} type={type} />;
    toast({
      message: _toast,
    });
  };
  return (
    <GeneralContext.Provider value={{ messageToast }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
