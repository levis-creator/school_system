"use client";
import useWindowWidth from "@/hooks/useWindowWidth";
import { getData } from "@/utils/getData";
import { Student } from "@/utils/types";
import { FC, useEffect, useState } from "react";
import { Dropdown, Modal, Pagination, Panel, Popover, Table } from "rsuite";
import EditStudent from "../EditStudent";
import StudentInfoModel from "../StudentInfoModel";
interface StudentsProps {}
const StudentsTable: FC<StudentsProps> = () => {
  const { Column, HeaderCell, Cell } = Table;
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [openModel, setOpenModel] = useState(false);
  const [student, setStudent] = useState<Student | null>();
  const [editStudent, setEditStudent] = useState<Student | null>(null);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState<Student[]>([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData("students").then((data) => {
      setData(data);
      setloading(false);
    });
  }, [edit]);

  const width = useWindowWidth();
  const handleEdit = () => {
    setEdit(true);
    setEditStudent(student as Student);
    handleOpenModel();
  };

  const handleEditClose = () => {
    setEdit(false);
    setEditStudent(null);
  };

  const handleOpenModel = (rowData?: Student) => {
    setOpenModel(!openModel);
    setStudent(rowData);
  };
  const handleChangeLimit = (dataKey: number) => {
    setPage(1);
    setLimit(dataKey);
  };

  const setdata = data.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  const closingEditAfterUpdate = () => {
    setEdit(false);
    setEditStudent(null);
  };

  return (
    <div className="flex gap-5">
      <StudentInfoModel
        handleEdit={handleEdit}
        open={openModel}
        handleClose={handleOpenModel}
        rowData={student as Student}
      />
      <Panel
        className={`bg-white shadow-md flex-grow ${edit ? "basis-2/3" : null}`}
      >
        <Table
          data={setdata}
          loading={loading}
          className="w-full"
          height={500}
          onRowClick={(rowData) => handleOpenModel(rowData)}
        >
          <Column width={100}>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={150}>
            <HeaderCell>First Name</HeaderCell>
            <Cell dataKey="firstName" />
          </Column>
          <Column width={150}>
            <HeaderCell>Last Name</HeaderCell>
            <Cell dataKey="lastName" />
          </Column>
          <Column width={200}>
            <HeaderCell>Gender</HeaderCell>
            <Cell dataKey="gender" />
          </Column>
          <Column width={200} flexGrow={1} align="center">
            <HeaderCell>Admission Date</HeaderCell>
            <Cell dataKey="admissionDate" />
          </Column>
        </Table>
        <div>
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            maxButtons={5}
            size="xs"
            layout={["total", "-", "limit", "|", "pager", "skip"]}
            total={data.length}
            limitOptions={[10, 30, 50]}
            limit={limit}
            activePage={page}
            onChangePage={setPage}
            onChangeLimit={handleChangeLimit}
          />
        </div>
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
