"use client";
import moment from "moment";
import { useState } from "react";
import {
  Calendar as BigCalendar,
  momentLocalizer,
  View,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

interface ViewsItem {
  MONTH: "month";
  WEEK: "week";
  WORK_WEEK: "work_week";
  DAY: "day";
  AGENDA: "agenda";
}
const localizer = momentLocalizer(moment);

const events = [
  {
    id: 1,
    title: "Some Other Event",
    start: new Date("July 31, 2024 11:00:00"),
    end: new Date("July 31, 2024 13:00:00"),
  },
  {
    id: 2,
    title: "test event",
    start: new Date("July 31, 2024 14:00:00"),
    end: new Date("July 31, 2024 15:59:00"),
  },
];
const Schedules = () => {
  const [view, setView] = useState("agenda");
  const [date, setDate] = useState(new Date());
  const handleNavigate = (newDate: any) => {
    setDate(newDate);
  };

  const handleViewChange = (newView: any) => {
    setView(newView);
  };
  return (
    <div className="h-[500px]">
      <BigCalendar
        view={view as View}
        localizer={localizer}
        onView={handleViewChange}
        events={events}
        onNavigate={handleNavigate}
        date={date}
      />
    </div>
  );
};

export default Schedules;
