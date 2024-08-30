"use client";
import useStaffContext from "@/hooks/useStaffContext";
import useWindowWidth from "@/hooks/useWindowWidth";
import deleteData from "@/utils/restfulfunctions/deleteData";
import { getData } from "@/utils/restfulfunctions/getData";
import { Staff } from "@/utils/types";
import { FC, useEffect, useState } from "react";
import { Modal, Panel } from "rsuite";
import DeleteAlert from "../DeleteAlert";
import StaffsDataTable from "../tables/StaffTable/StaffDataTable";
import EditStaff from "./EditStaff";
import StaffInfoModel from "./StaffInfoModel";
interface StaffsProps {}
const StaffsTable: FC<StaffsProps> = () => {
  const {
    staff,
    openModel,
    handleOpenModel,
    staffs,
    setStaffs,
    edit,
    setEdit,
    messageToast,
    editStaff,
    setEditStaff,
    handleEdit,
    handleEditClose,
    handleCloseDelete,
    _delete,
  }: any = useStaffContext();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getData("staff").then((data) => {
      setStaffs(data);
      setloading(false);
    });
  }, [edit, setStaffs]);

  const width = useWindowWidth();

  const handleDelete = async () => {
    // handle delete
    await deleteData(`staff/${staff?.id}`, setloading, messageToast)
      .then(() =>
        setStaffs(staffs.filter((item: any) => item.id !== staff?.id))
      )
      .finally(() => handleCloseDelete());
  };

  const closingEditAfterUpdate = () => {
    setEdit(false);
    setEditStaff(null);
  };

  return (
    <div className="flex gap-5">
      <DeleteAlert
        isOpen={_delete}
        handleCloseDelete={handleCloseDelete}
        title="Staff"
        deleteBtn={handleDelete}
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
            closingEditAfterUpdate={closingEditAfterUpdate}
            edit={edit}
            data={editStaff as Staff}
            handleClose={handleEditClose}
          />
        </div>
      ) : edit === true && width < 768 ? (
        <ModelEditStaff
          closingEditAfterUpdate={closingEditAfterUpdate}
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
  closingEditAfterUpdate,
}: {
  data?: Staff;
  handleClose?: () => void;
  edit: boolean;
  closingEditAfterUpdate: () => void;
}) => {
  return (
    <Modal open>
      <Modal.Body>
        <EditStaff
          closingEditAfterUpdate={closingEditAfterUpdate}
          edit={edit}
          data={data as Staff}
          handleClose={handleClose}
        />
      </Modal.Body>
    </Modal>
  );
};

export default StaffsTable;
