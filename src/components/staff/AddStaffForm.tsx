"use client";

import useStaffContext from "@/hooks/useStaffContext";
import { gender } from "../form/static/static";
import StaffForm from "./StaffForm";
import LoadUI from "../LoadUI";
import { Panel } from "rsuite";
import { useState } from "react";
import addData from "@/utils/restfulfunctions/addData";
import useGeneralContext from "@/hooks/useGeneralContext";

const AddStaffForm = () => {
  const [loading, setloading] = useState(false);
  const { setStaff, staff }: any = useStaffContext();
  const { messageToast }: any = useGeneralContext();
  const handleSubmit = async () => {
    await addData("staff", staff, setloading, messageToast).then((res) =>
      console.log(res)
    );
  };
  return (
    <div className="flex  w-full">
      {loading && <LoadUI />}
      <Panel className="bg-white w-[40em] shadow-md mx-auto px-6 py-4">
        <StaffForm
          gender={gender}
          handleSubmit={handleSubmit}
          staff={staff}
          setStaff={setStaff}
        />
      </Panel>
    </div>
  );
};

export default AddStaffForm;
