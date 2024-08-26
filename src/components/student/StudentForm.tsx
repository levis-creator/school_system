import { Button, Form, InputPicker, Panel } from "rsuite";
import TextInput from "../form/TextInput";
import { Student } from "@/utils/types";
import { FC, FormEvent } from "react";
interface StudentFormProps {
  student: Student;
  setStudent: (value: any) => void;
  handleSubmit: (event: any) => void;
  gender: { label: string; value: string }[] | any[];
}
const StudentForm: FC<StudentFormProps> = ({
  student,
  setStudent,
  handleSubmit,
  gender,
}) => {
  return (
    <Form
      onSubmit={handleSubmit}
      fluid
      formValue={student}
      onChange={setStudent}
    >
      <div className="flex flex-col md:flex-row md:gap-5">
        <TextInput name="firstName" label="Firstname" required={true} />
        <TextInput name="lastName" label="Lastname" required={true} />
      </div>

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
      </Panel>
    </Form>
  );
};

export default StudentForm;
