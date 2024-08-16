"use client";
import editData from "@/utils/editData";
import { FC, useEffect, useState } from "react";
import {
  Animation,
  Button,
  Form,
  InputPicker,
  Message,
  Panel,
  useToaster,
} from "rsuite";
import { DIMENSION } from "rsuite/esm/Animation/Collapse";
import { TypeAttributes } from "rsuite/esm/internals/types";
import { Student } from "../utils/types";
import TextInput from "./Form/TextInput";
import LoadUI from "./LoadUI";
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
  const [loading, setloading] = useState(false);
  const toaster = useToaster();

  useEffect(() => {
    setStudent({
      firstName: `${data?.firstName || ""}`,
      lastName: `${data?.lastName || ""}`,
      gender: `${data?.gender || ""}`,
      admissionDate: `${data?.admissionDate || ""}`,
      dateOfBirth: `${data?.dateOfBirth || ""}`,
    });
  }, [data]);
  const messageToast = (type: TypeAttributes.Status, message: string) => {
    toaster.push(
      <Message showIcon type={type} closable>
        {message}
      </Message>,
      { placement: "topCenter", duration: 5000 }
    );
  };

  const handleSubmit = async () => {
    console.log(student);
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
        <Form
          onSubmit={handleSubmit}
          fluid
          formValue={student}
          onChange={setStudent as () => void}
        >
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
            <Button appearance="primary" type="submit">
              Save
            </Button>
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
