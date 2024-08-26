"use client";
import useStudentContext from "@/hooks/useStudentContext";
import editData from "@/utils/restfulfunctions/editData";
import { FC, useEffect, useState } from "react";
import { Animation, Panel } from "rsuite";
import { DIMENSION } from "rsuite/esm/Animation/Collapse";
import { Student } from "../../utils/types";
import { gender } from "../form/static/static";
import LoadUI from "../LoadUI";
import StudentForm from "./StudentForm";
interface EditStudentProps {
  data?: Student;
  handleClose?: () => void;
  edit: boolean;
  closingEditAfterUpdate: () => void;
}
const EditStudent: FC<EditStudentProps> = ({
  data,
  handleClose,
  edit,
  closingEditAfterUpdate,
}) => {
  const [loading, setloading] = useState(false);
  const { messageToast }: any = useStudentContext();
  const [student, setStudent] = useState<Student | null>({
    firstName: "",
    lastName: "",
    gender: "",
    admissionDate: "",
    dateOfBirth: "",
  });
  useEffect(() => {
    setStudent({
      firstName: `${data?.firstName || ""}`,
      lastName: `${data?.lastName || ""}`,
      gender: `${data?.gender || ""}`,
      admissionDate: `${data?.admissionDate || ""}`,
      dateOfBirth: `${data?.dateOfBirth || ""}`,
    });
  }, [data, setStudent]);
  const handleSubmit = async () => {
    await editData(
      "students",
      student,
      data?.id as unknown as string,
      messageToast,
      setloading
    ).then(() => closingEditAfterUpdate());
  };

  return (
    <Animation.Collapse in={edit} dimension={DIMENSION.WIDTH}>
      <Panel className="bg-white shadow-md relative">
        {loading && <LoadUI />}
        <h2 className="text-gray-600 ">Edit Student</h2>
        <StudentForm
          gender={gender}
          handleSubmit={handleSubmit}
          student={student as Student}
          setStudent={setStudent}
        />
      </Panel>
    </Animation.Collapse>
  );
};

export default EditStudent;
