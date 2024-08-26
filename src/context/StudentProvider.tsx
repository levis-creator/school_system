"use client";
import Toast from "@/components/Toast";
import useToast from "@/hooks/useToast";
import { Student } from "@/utils/types";
import { createContext, ReactNode, useState } from "react";
import { TypeAttributes } from "rsuite/esm/internals/types";

export const StudentContext = createContext({});

const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [edit, setEdit] = useState(false);
  const [editStudent, setEditStudent] = useState<Student | null>(null);
  const [openModel, setOpenModel] = useState(false);
  const [student, setStudent] = useState<Student | null>();

  const [_delete, setDelete] = useState(false);
  const toast = useToast();
  const messageToast = (type: TypeAttributes.Status, message: string) => {
    const _toast = <Toast message={message} type={type} />;
    toast({
      message: _toast,
    });
  };

  const handleOpenModel = (rowData?: Student) => {
    setOpenModel(!openModel);
    setStudent(rowData);
  };
  const handleEdit = (data?: Student) => {
    setEdit(true);
    setEditStudent(data as Student);
  };

  const handleEditClose = () => {
    setEdit(false);
    setEditStudent(null);
  };
  const handleDelete = (data?: Student) => {
    setDelete(true);
    setStudent(data as Student);
  };
  const handleCloseDelete = () => {
    setDelete(false);
    setStudent(null);
  };
  return (
    <StudentContext.Provider
      value={{
        _delete,
        students,
        handleEdit,
        handleCloseDelete,
        handleEditClose,
        handleDelete,
        openModel,
        student,
        setStudents,
        edit,
        setEdit,
        messageToast,
        editStudent,
        setEditStudent,
        handleOpenModel,
      }}
    >
      {/* children */}
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
