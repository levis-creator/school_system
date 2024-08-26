"use client";
import { FC } from "react";
import { Form } from "rsuite";
interface TextInputProp {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  accepter?: any;
  data?: any[];
}

const TextInput: FC<TextInputProp> = ({
  name,
  label,
  placeholder,
  type,
  required = false,
  accepter,
  data,
}) => {
  return (
    <Form.Group controlId={name} className="w-full !mb-1">
      <Form.ControlLabel className="!text-sm">{label}</Form.ControlLabel>
      <Form.Control
        required={required}
        placeholder={placeholder}
        name={name}
        type={type}
        accepter={accepter}
        data={data}
      />
      {required && <Form.HelpText>Required</Form.HelpText>}
    </Form.Group>
  );
};

export default TextInput;
