import Head from "@/components/Head";
import AddStudentCsv from "@/components/student/AddStudentCsv";
import StudentsTable from "@/components/student/StudentsTable";

const Page = async () => {
  return (
    <div>
      <Head
        title="Students"
        link="students/add"
        add_btn
        additionalButton={<AddStudentCsv />}
      />
      <StudentsTable />
    </div>
  );
};

export default Page;
