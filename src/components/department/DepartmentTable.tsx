"use client";
import useDbHandler from "@/hooks/useDbHandler";
import useStaffContext from "@/hooks/useStaffContext";
import useWindowWidth from "@/hooks/useWindowWidth";
import { getData } from "@/utils/restfulfunctions/getData";
import { Staff } from "@/utils/types";
import { FC, useEffect, useState } from "react";
import { Modal, Panel } from "rsuite";
import DeleteAlert from "../DeleteAlert";
import StaffsDataTable from "../tables/StaffTable/StaffDataTable";
import StaffInfoModel from "./DepartmentInfoModel";
import EditStaff from "./EditDepartment";
interface StaffsProps {}
const StaffsTable: FC<StaffsProps> = () => {
  const {
    staff,
    openModel,
    handleOpenModel,
    staffs,
    setStaffs,
    edit,
    messageToast,
    editStaff,
    handleEdit,
    handleEditClose,
    handleCloseDelete,
    _delete,
  }: any = useStaffContext();
  const { handleDelete } = useDbHandler("staff", null, "", messageToast);
  const [loading, setloading] = useState(true);
  // fetching data
  useEffect(() => {
    getData("staff").then((data) => {
      setStaffs(data);
      setloading(false);
    });
  }, [edit, setStaffs]);
  const width = useWindowWidth();

  const handleDeleteBtn = async () => {
    // handle delete
    await handleDelete(staff?.id)
      .then(() =>
        setStaffs(staffs.filter((item: any) => item.id !== staff?.id))
      )
      .finally(() => handleCloseDelete());
  };

  return (
    <div className="flex gap-5">
      <DeleteAlert
        isOpen={_delete}
        handleCloseDelete={handleCloseDelete}
        title="Staff"
        deleteBtn={handleDeleteBtn}
      />
      <StaffInfoModel
        handleEdit={handleEdit}
        open={openModel}
        handleClose={handleOpenModel}
        rowData={staff as Staff}
      />
      <Panel
        className={`bg-white shadow-md flex-grow ${edit ? "basis-2/3" : null}`}
      >
        <StaffsDataTable data={staffs} loading={loading} displayHidden />
      </Panel>
      {/* conditional modal */}
      {edit === true && width > 768 ? (
        <div className="flex-1 basis-1/3">
          <EditStaff
            edit={edit}
            data={editStaff as Staff}
            handleClose={handleEditClose}
          />
        </div>
      ) : edit === true && width < 768 ? (
        <ModelEditStaff
          edit={edit}
          data={editStaff as Staff}
          handleClose={handleEditClose}
        />
      ) : null}
    </div>
  );
};
const ModelEditStaff = ({
  data,
  handleClose,
  edit,
}: {
  data?: Staff;
  handleClose?: () => void;
  edit: boolean;
}) => {
  return (
    <Modal open>
      <Modal.Body>
        <EditStaff edit={edit} data={data as Staff} handleClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

export default StaffsTable;
