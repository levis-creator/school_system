"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Panel } from "rsuite";

const NoticeBoard = () => {
  const notice = [
    {
      title: "School assembly",
      description: "Emergency assembly",
      date: "02/07/2022",
    },
    {
      title: "School assembly",
      description: "Emergency assembly",
      date: "02/07/2022",
    },
    {
      title: "School assembly",
      description: "Emergency assembly",
      date: "02/07/2022",
    },
  ];

  return (
    <>
      <Panel
        header="School Notice"
        className="bg-white shadow-md mt-7 rounded-lg"
      >
        {notice.map((note, i) => (
          <Note data={note} key={i} />
        ))}
      </Panel>
    </>
  );
};
const Note = ({ data }: { data: any }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <div className="text-sm text p-3">
      <div className="flex ">
        <h3 className="flex-grow font-semibold text-base ">{data.title}</h3>
        <button onClick={handleClose}>
          {open ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      {open && (
        <div className="text-gray-600 font-light">{data.description}</div>
      )}
      <time className="font-light text-xs text-gray-500">{data.date}</time>
    </div>
  );
};

export default NoticeBoard;
