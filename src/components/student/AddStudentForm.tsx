"use client";
import useStudentContext from "@/hooks/useStudentContext";
import addData from "@/utils/restfulfunctions/addData";
import { useState } from "react";
import { Panel } from "rsuite";
import { gender } from "../form/static/static";
import LoadUI from "../LoadUI";
import StudentForm from "./StudentForm";
import { Student } from "@/utils/types";
import useDbHandler from "@/hooks/useDbHandler";

const AddStudentForm = () => {
  const [student, setStudent] = useState<Student | undefined>();
  const { messageToast }: any = useStudentContext();
  const { handleAdd, loading } = useDbHandler(
    student,
    "students",
    "/admin/students",
    messageToast
  );
  return (
    // TODO: Add validation
    <div className="flex  w-full">
      {loading && <LoadUI />}
      <Panel className="bg-white w-[40em] shadow-md mx-auto px-6 py-4">
        <StudentForm
          gender={gender}
          handleSubmit={handleAdd}
          student={student as Student}
          setStudent={setStudent}
        />
      </Panel>
    </div>
  );
};

export default AddStudentForm;
