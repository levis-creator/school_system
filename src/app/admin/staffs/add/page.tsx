import Head from "@/components/Head";
import AddStudentForm from "@/components/student/AddStudentForm";
import React from "react";

const Page = () => {
  return (
    <div>
      <Head title="Add Student" back_btn />
      <AddStudentForm />
    </div>
  );
};

export default Page;
