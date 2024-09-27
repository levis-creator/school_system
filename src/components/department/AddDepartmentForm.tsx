"use client";

import useDbHandler from "@/hooks/useDbHandler";
import useGeneralContext from "@/hooks/useGeneralContext";
import { useState } from "react";
import { Panel } from "rsuite";
import { gender } from "../form/static/static";
import LoadUI from "../LoadUI";
import DepartmentForm from "./DepartmentForm";
import { Staff } from "@/utils/types";

const AddDepartmentForm = () => {
  const [staff, setStaff] = useState<Staff | undefined>();
  const { messageToast }: any = useGeneralContext();
  const { handleAdd, loading } = useDbHandler(
    "staff",
    staff,
    "/admin/staffs",
    messageToast
  );

  return (
    <div className="flex  w-full">
      {loading && <LoadUI />}
      <Panel className="bg-white w-[40em] shadow-md mx-auto px-6 py-4">
        <DepartmentForm
          gender={gender}
          handleSubmit={handleAdd}
          staff={staff as Staff}
          setStaff={setStaff}
        />
      </Panel>
    </div>
  );
};

export default AddDepartmentForm;
