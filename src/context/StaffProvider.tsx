"use client";
import Toast from "@/components/Toast";
import useToast from "@/hooks/useToast";
import { Staff } from "@/utils/types";
import { createContext, ReactNode, useState } from "react";
import { TypeAttributes } from "rsuite/esm/internals/types";

export const StaffContext = createContext({});

const StaffProvider = ({ children }: { children: ReactNode }) => {
  const [staffs, setStaffs] = useState<Staff[]>([]);
  const [edit, setEdit] = useState(false);
  const [editStaff, setEditStaff] = useState<Staff | null>(null);
  const [openModel, setOpenModel] = useState(false);
  const [staff, setStaff] = useState<Staff | null>({
    firstName: "",
    lastName: "",
    gender: "",
    entranceDate: "",
    dateOfBirth: "",
    nationalId: "",
  });

  const [_delete, setDelete] = useState(false);
  const toast = useToast();
  const messageToast = (type: TypeAttributes.Status, message: string) => {
    const _toast = <Toast message={message} type={type} />;
    toast({
      message: _toast,
    });
  };

  const handleOpenModel = (rowData?: Staff) => {
    setOpenModel(!openModel);
    setStaff(rowData as Staff);
  };
  const handleEdit = (data?: Staff) => {
    setEdit(true);
    setEditStaff(data as Staff);
  };

  const handleEditClose = () => {
    setEdit(false);
    setEditStaff(null);
  };
  const handleDelete = (data?: Staff) => {
    setDelete(true);
    setStaff(data as Staff);
  };
  const handleCloseDelete = () => {
    setDelete(false);
    setStaff(null);
  };
  return (
    <StaffContext.Provider
      value={{
        _delete,
        staffs,
        setStaff,
        handleEdit,
        handleCloseDelete,
        handleEditClose,
        handleDelete,
        openModel,
        staff,
        setStaffs,
        edit,
        setEdit,
        messageToast,
        editStaff,
        setEditStaff,
        handleOpenModel,
      }}
    >
      {/* children */}
      {children}
    </StaffContext.Provider>
  );
};

export default StaffProvider;
