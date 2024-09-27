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
const DepartmentForm: FC<StaffFormProps> = ({
  staff,
  setStaff,
  handleSubmit,
  gender,
}) => {
  return (
    <Form onSubmit={handleSubmit} fluid formValue={staff} onChange={setStaff}>
      <TextInput
        name="departmentName"
        label="Department Name"
        required={true}
      />
      <Panel className="flex justify-end ">
        <Button appearance="primary" type="submit">
          Save
        </Button>
      </Panel>
    </Form>
  );
};

export default DepartmentForm;
