import { ReactNode } from "react";

export interface MenuItem {
  menu_title: string;
  menu_icon: ReactNode;
  menu_link: string;
}
export interface ClassShedule {
  subject: string;
  date: number;
  day: string;
  time: string;
}
