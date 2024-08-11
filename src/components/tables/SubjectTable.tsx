"use client";
import { Panel, Table } from "rsuite";
import Column from "rsuite/esm/Table/TableColumn";

const SubjectTable = () => {
  const { Column, HeaderCell, Cell } = Table;
  const subjects = [
    {
      subject_code: "MATH101",
      subject_name: "Mathematics I",
      credit_hours: 3,
    },
  ];
  return (
    <Panel
      header="Registered subject"
      className="mt-5 lg:mt-0 bg-white shadow-md !h-fit lg:w-full"
    >
      <Table data={subjects} className="w-full !h-fit">
        <Column width={100}>
          <HeaderCell>Subject Code</HeaderCell>
          <Cell dataKey="subject_code" />
        </Column>
        <Column width={150}>
          <HeaderCell>Subject Name</HeaderCell>
          <Cell dataKey="subject_name" />
        </Column>
        <Column width={100}>
          <HeaderCell>Credit Hours</HeaderCell>
          <Cell dataKey="credit_hours" />
        </Column>
      </Table>
    </Panel>
  );
};

export default SubjectTable;
