"use client";
import useStudentContext from "@/hooks/useStudentContext";
import useWindowWidth from "@/hooks/useWindowWidth";
import deleteData from "@/utils/restfulfunctions/deleteData";
import { getData } from "@/utils/restfulfunctions/getData";
import { Student } from "@/utils/types";
import { FC, useEffect, useState } from "react";
import { Modal, Panel } from "rsuite";
import EditStudent from "./EditStudent";
import StudentsDataTable from "../tables/StudentTable/StudentsDataTable";
import StudentInfoModel from "./StudentInfoModel";
import DeleteAlert from "../DeleteAlert";
interface StudentsProps {}
const StudentsTable: FC<StudentsProps> = () => {
  const {
    student,
    openModel,
    handleOpenModel,
    students,
    setStudents,
    edit,
    setEdit,
    messageToast,
    editStudent,
    setEditStudent,
    handleEdit,
    handleEditClose,
    handleCloseDelete,
    _delete,
  }: any = useStudentContext();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getData("students").then((data) => {
      setStudents(data);
      setloading(false);
    });
  }, [edit, setStudents]);

  const width = useWindowWidth();

  const handleDelete = async () => {
    // handle delete
    await deleteData(`students/${student?.id}`, setloading, messageToast)
      .then(() =>
        setStudents(students.filter((item: any) => item.id !== student?.id))
      )
      .finally(() => handleCloseDelete());
  };

  const closingEditAfterUpdate = () => {
    setEdit(false);
    setEditStudent(null);
  };

  return (
    <div className="flex gap-5">
      <DeleteAlert
        isOpen={_delete}
        handleCloseDelete={handleCloseDelete}
        title="Student"
        deleteBtn={handleDelete}
      />
      <StudentInfoModel
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        open={openModel}
        handleClose={handleOpenModel}
        rowData={student as Student}
      />
      <Panel
        className={`bg-white shadow-md flex-grow ${edit ? "basis-2/3" : null}`}
      >
        <StudentsDataTable
          data={students}
          loading={loading}
          onRowClick={(rowData: any) => handleOpenModel(rowData)}
          displayHidden
        />
      </Panel>
      {/* conditional modal */}
      {edit === true && width > 768 ? (
        <div className="flex-1 basis-1/3">
          <EditStudent
            closingEditAfterUpdate={closingEditAfterUpdate}
            edit={edit}
            data={editStudent as Student}
            handleClose={handleEditClose}
          />
        </div>
      ) : edit === true && width < 768 ? (
        <ModelEditStudent
          closingEditAfterUpdate={closingEditAfterUpdate}
          edit={edit}
          data={editStudent as Student}
          handleClose={handleEditClose}
        />
      ) : null}
    </div>
  );
};
const ModelEditStudent = ({
  data,
  handleClose,
  edit,
  closingEditAfterUpdate,
}: {
  data?: Student;
  handleClose?: () => void;
  edit: boolean;
  closingEditAfterUpdate: () => void;
}) => {
  return (
    <Modal open>
      <Modal.Body>
        <EditStudent
          closingEditAfterUpdate={closingEditAfterUpdate}
          edit={edit}
          data={data as Student}
          handleClose={handleClose}
        />
      </Modal.Body>
    </Modal>
  );
};

export default StudentsTable;
