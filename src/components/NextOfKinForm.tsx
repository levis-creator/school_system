import { Button, Form, InputPicker, Panel } from "rsuite";
import TextInput from "./form/TextInput";
import { FC } from "react";
interface NextOfKinFormProps {
  nextOfKin: any;
  setNextOfkin: (value: any) => void;
  handleSubmit: (event: any) => void;
  gender: { label: string; value: string }[] | any[];
}
const NextOfKinForm: FC<NextOfKinFormProps> = ({
  nextOfKin,
  setNextOfkin,
  handleSubmit,
  gender,
}) => {
  return (
    <Form
      onSubmit={handleSubmit}
      fluid
      formValue={nextOfKin}
      onChange={setNextOfkin}
    >
      <div className="flex flex-col md:flex-row md:gap-5">
        <TextInput name="firstName" label="Firstname" required={true} />
        <TextInput name="lastName" label="Lastname" required={true} />
      </div>

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

export default NextOfKinForm;
