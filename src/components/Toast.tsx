import { FC } from "react";
import { Message } from "rsuite";
import { TypeAttributes } from "rsuite/esm/internals/types";
interface ToastProps {
  type: TypeAttributes.Status;
  message: string;
}
const Toast: FC<ToastProps> = ({ type, message }) => {
  return (
    <Message showIcon type={type} closable className="z-50">
      {message}
    </Message>
  );
};

export default Toast;
