"use client";
import { Student } from "@/utils/types";
import { MoreHorizontalIcon } from "lucide-react";
import { FC, useState } from "react";
import {
  Dropdown,
  IconButton,
  Pagination,
  Panel,
  Popover,
  Table,
  Whisper,
} from "rsuite";
import StudentInfoModel from "../StudentInfoModel";
import EditStudent from "../EditStudent";
interface StudentsProps {
  data: Student[];
}
const StudentsTable: FC<StudentsProps> = ({ data }) => {
  const { Column, HeaderCell, Cell } = Table;
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [openModel, setOpenModel] = useState(false);
  const [student, setStudent] = useState<Student | null>();
  const [editStudent, setEditStudent] = useState<Student | null>(null);
  const [edit, setEdit] = useState(false);

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

  const renderMenu = (
    {
      onClose,
      left,
      top,
      className,
    }: { left?: any; top?: any; className?: string; onClose: () => void },
    ref: any
  ) => {
    const handleSelect = (eventKey: any) => {
      onClose();
      console.log(eventKey);
    };
    return (
      <Popover ref={ref} className={className} style={{ left, top }} full>
        <Dropdown.Menu onSelect={handleSelect}>
          <Dropdown.Item eventKey={1}>Info</Dropdown.Item>
          <Dropdown.Item eventKey={2}>Edit</Dropdown.Item>
          <Dropdown.Item eventKey={3}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Popover>
    );
  };

  const ActionCell = ({
    rowData,
    dataKey,
    ...props
  }: {
    rowData?: any;
    dataKey: any;
  }) => {
    return (
      <Cell {...props} className="link-group">
        <Whisper
          placement="autoVerticalStart"
          trigger="click"
          speaker={renderMenu}
        >
          <IconButton appearance="subtle" icon={<MoreHorizontalIcon />} />
        </Whisper>
      </Cell>
    );
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
          className="w-full"
          height={500}
          onRowClick={(rowData) => handleOpenModel(rowData)}
        >
          <Column width={100}>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>
          <Column width={250}>
            <HeaderCell>First Name</HeaderCell>
            <Cell dataKey="firstName" />
          </Column>
          <Column width={250}>
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
      {edit && (
        <div className="flex-1 basis-1/3">
          <EditStudent
            edit={edit}
            editData={editStudent as Student}
            handleClose={handleEditClose}
          />
        </div>
      )}
    </div>
  );
};

export default StudentsTable;
