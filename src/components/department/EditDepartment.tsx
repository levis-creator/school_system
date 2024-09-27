"use client";
import useDbHandler from "@/hooks/useDbHandler";
import useStaffContext from "@/hooks/useStaffContext";
import { FC, useEffect, useState } from "react";
import { Animation, Panel } from "rsuite";
import { DIMENSION } from "rsuite/esm/Animation/Collapse";
import { Staff } from "../../utils/types";
import { gender } from "../form/static/static";
import LoadUI from "../LoadUI";
import DepartmentForm from "./DepartmentForm";
interface EditStaffProps {
  data?: Staff;
  handleClose?: () => void;
  edit: boolean;
}
const EditStaff: FC<EditStaffProps> = ({ data, handleClose, edit }) => {
  const [staff, setStaff] = useState<Staff>({
    firstName: "",
    lastName: "",
    gender: "",
    entranceDate: "",
    dateOfBirth: "",
    nationalId: "",
  });
  const { messageToast }: any = useStaffContext();
  const { handleEdit, loading } = useDbHandler(
    "staff",
    staff,
    "",
    messageToast
  );
  useEffect(() => {
    setStaff({
      firstName: `${data?.firstName || ""}`,
      lastName: `${data?.lastName || ""}`,
      gender: `${data?.gender || ""}`,
      entranceDate: `${data?.entranceDate || ""}`,
      dateOfBirth: `${data?.dateOfBirth || ""}`,
      nationalId: `${data?.nationalId || ""}`,
    });
  }, [data]);

  const handleSubmit = async () => {
    handleEdit(data?.id);
    if (handleClose) {
      handleClose();
    }
  };

  return (
    <Animation.Collapse in={edit} dimension={DIMENSION.WIDTH}>
      <Panel className="bg-white shadow-md relative">
        {loading && <LoadUI />}
        <h2 className="text-gray-600 ">Edit Student</h2>
        <DepartmentForm
          gender={gender}
          handleSubmit={handleSubmit}
          staff={staff as Staff}
          setStaff={setStaff}
        />
      </Panel>
    </Animation.Collapse>
  );
};

export default EditStaff;
