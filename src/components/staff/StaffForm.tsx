import { Staff } from "@/utils/types";
import { FC } from "react";
import { Button, Form, InputPicker, Panel } from "rsuite";
import TextInput from "../form/TextInput";
interface StaffFormProps {
  staff: Staff;
  setStaff: (value: any) => void;
  handleSubmit: (event: any) => void;
  gender: { label: string; value: string }[] | any[];
}
const StaffForm: FC<StaffFormProps> = ({
  staff,
  setStaff,
  handleSubmit,
  gender,
}) => {
  return (
    <Form onSubmit={handleSubmit} fluid formValue={staff} onChange={setStaff}>
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

export default StaffForm;
