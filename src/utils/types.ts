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

export interface Student {
  id?: number;
  firstName: string;
  lastName: string;
  admissionDate: string;
  gender?: string;
  dateOfBirth?: string;
}
export interface Staff {
  id?: number;
  dateOfBirth?: string;
  firstName: string;
  lastName: string;
  gender: string;
  nationalId: string;
  entranceDate: string;
  department?: string;
}
