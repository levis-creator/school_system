"use client";
import { Animation, Button, Form, InputPicker, Panel } from "rsuite";
import TextInput from "./Form/TextInput";
import { Student } from "../utils/types";
import { FC, useEffect, useState } from "react";
import { DIMENSION } from "rsuite/esm/Animation/Collapse";
interface EditStudentProps {
  editData?: Student;
  handleClose?: () => void;
  edit: boolean;
}
const EditStudent: FC<EditStudentProps> = ({ editData, handleClose, edit }) => {
  const gender = ["Male", "Female", "Other"].map((item) => ({
    label: item,
    value: item,
  }));
  const [student, setStudent] = useState<Student>({
    firstName: "",
    lastName: "",
    gender: "",
    admissionDate: "",
    dateOfBirth: "",
  });
  useEffect(() => {
    setStudent({
      firstName: `${editData?.firstName || ""}`,
      lastName: `${editData?.lastName || ""}`,
      gender: `${editData?.gender || ""}`,
      admissionDate: `${editData?.admissionDate || ""}`,
      dateOfBirth: `${editData?.dateOfBirth || ""}`,
    });
  }, [editData]);

  return (
    <Animation.Collapse in={edit} dimension={DIMENSION.WIDTH}>
      <Panel className="bg-white shadow-md">
        <h2 className="text-gray-600">Edit Student</h2>
        <Form fluid formValue={student} onChange={setStudent as () => void}>
          <TextInput name="firstName" label="Firstname" required={true} />
          <TextInput name="lastName" label="Lastname" required={true} />
          <TextInput
            name="dateOfBirth"
            label="Date of Birth"
            required={true}
            type="date"
          />
          <TextInput
            name="gender"
            label="Gender"
            required={true}
            accepter={InputPicker}
            data={gender}
          />
          <TextInput
            name="admissionDate"
            label="Admission Date"
            required={true}
            type="date"
          />
          <Panel className="flex justify-end ">
            <Button appearance="primary">Save</Button>
            <Button onClick={handleClose} className="ml-3">
              Cancel
            </Button>
          </Panel>
        </Form>
      </Panel>
    </Animation.Collapse>
  );
};

export default EditStudent;
