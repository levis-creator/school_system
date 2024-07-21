"use client";
import { Badge, Calendar } from "rsuite";
import NoticeBoard from "./NoticeBoard";

const ScheduleCalender = () => {
  const dateTime = [
    {
      date: 10,
      tasks: [
        { time: "09:30 pm", title: "Products Introduction Meeting" },
        { time: "12:30 pm", title: "Client entertaining" },
        { time: "02:00 pm", title: "Product design discussion" },
        { time: "05:00 pm", title: "Product test and acceptance" },
        { time: "06:30 pm", title: "Reporting" },
        { time: "10:00 pm", title: "Going home to walk the dog" },
      ],
    },
    {
      date: 15,
      tasks: [
        { time: "09:30 pm", title: "Products Introduction Meeting" },
        { time: "12:30 pm", title: "Client entertaining" },
        { time: "02:00 pm", title: "Product design discussion" },
        { time: "05:00 pm", title: "Product test and acceptance" },
        { time: "06:30 pm", title: "Reporting" },
        { time: "10:00 pm", title: "Going home to walk the dog" },
      ],
    },
  ];
  const getTaskList = (date: any | Date) => {
    const day = date.getDate();
    let taskItems: any[] | null = [];
    dateTime.map((item) =>
      item.date === day ? (taskItems = item.tasks) : null
    );
    return taskItems;
  };
  const renderCell = (date: any) => {
    const tasks = getTaskList(date);

    if (tasks.length !== 0) {
      return <Badge className="bg-blue-600" />;
    } else {
      return null;
    }
  };
  return (
    <>
      <Calendar
        compact
        renderCell={renderCell}
        className="hidden lg:block w-96 p-3 shadow-md rounded-lg bg-white "
      />
      <NoticeBoard />
    </>
  );
};

export default ScheduleCalender;
