"use client";
import useStaffContext from "@/hooks/useStaffContext";
import editData from "@/utils/restfulfunctions/editData";
import { FC, useEffect, useState } from "react";
import { Animation, Panel } from "rsuite";
import { DIMENSION } from "rsuite/esm/Animation/Collapse";
import { Staff } from "../../utils/types";
import LoadUI from "../LoadUI";
import StaffForm from "./StaffForm";
import { gender } from "../form/static/static";
import useDbHandler from "@/hooks/useDbHandler";
interface EditStaffProps {
  data?: Staff;
  handleClose?: () => void;
  edit: boolean;
  closingEditAfterUpdate: () => void;
}
const EditStaff: FC<EditStaffProps> = ({
  data,
  handleClose,
  edit,
  closingEditAfterUpdate,
}) => {
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
    staff,
    "staff",
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
    closingEditAfterUpdate();
  };

  return (
    <Animation.Collapse in={edit} dimension={DIMENSION.WIDTH}>
      <Panel className="bg-white shadow-md relative">
        {loading && <LoadUI />}
        <h2 className="text-gray-600 ">Edit Student</h2>
        <StaffForm
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
