import { ClassShedule } from "@/utils/types";
import { Panel, Table } from "rsuite";
import { Cell, HeaderCell } from "rsuite-table";
import Column from "rsuite/esm/Table/TableColumn";

const ClassSchedule = () => {
  const schedule: ClassShedule[] = [
    {
      subject: "physics",
      date: 17,
      day: "Mon",
      time: "09:00",
    },
    {
      subject: "history",
      date: 17,
      day: "Mon",
      time: "09:00",
    },
    {
      subject: "Mathematics",
      date: 17,
      day: "Mon",
      time: "09:00",
    },
    {
      subject: "Kiswahili",
      date: 17,
      day: "Mon",
      time: "09:00",
    },
  ];
  return (
    <>
      <Panel header="Class Schedule" className="bg-white shadow-md">
        <Table data={schedule} className="w-full">
          <Column width={150}>
            <HeaderCell>Subject</HeaderCell>
            <Cell dataKey="subject" />
          </Column>
          <Column width={100}>
            <HeaderCell>Date</HeaderCell>
            <Cell dataKey="date" />
          </Column>
          <Column width={100}>
            <HeaderCell>Day</HeaderCell>
            <Cell dataKey="day" />
          </Column>
          <Column width={100}>
            <HeaderCell>Time</HeaderCell>
            <Cell dataKey="time" />
          </Column>
        </Table>
      </Panel>
    </>
  );
};

export default ClassSchedule;
