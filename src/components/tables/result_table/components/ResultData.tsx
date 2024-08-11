import React from "react";
import { Panel, Table } from "rsuite";
import { Cell, HeaderCell } from "rsuite-table";
import Column from "rsuite/esm/Table/TableColumn";

const ResultData = ({ data }: any) => {
  return (
    <Panel
      header="Jan-April/2024"
      className="bg-white h-fit shadow-md rounded-md "
    >
      <Table data={data} className="h-fit w-full" height={350}>
        <Column width={100}>
          <HeaderCell>Subject Code</HeaderCell>
          <Cell dataKey="subject_code" />
        </Column>
        <Column width={300}>
          <HeaderCell>Subject</HeaderCell>
          <Cell dataKey="subject" />
        </Column>
        <Column width={120}>
          <HeaderCell>Mid-term marks</HeaderCell>
          <Cell dataKey="mid_term" />
        </Column>
        <Column width={120}>
          <HeaderCell>Final Exam marks</HeaderCell>
          <Cell dataKey="final_exam" />
        </Column>
        <Column width={120}>
          <HeaderCell>Midterm Grade</HeaderCell>
          <Cell dataKey="midterm_grade" />
        </Column>
        <Column width={120}>
          <HeaderCell>Final Grade</HeaderCell>
          <Cell dataKey="final_exam_grade" />
        </Column>
      </Table>
    </Panel>
  );
};

export default ResultData;
