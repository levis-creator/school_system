import Head from "@/components/Head";
import StaffsTable from "@/components/staff/StaffTable";
import AddStudentCsv from "@/components/student/AddStudentCsv";
import StudentsTable from "@/components/student/StudentsTable";

const Page = async () => {
  return (
    <div>
      <Head
        title="Staff"
        link="staffs/add"
        add_btn
        additionalButton={<AddStudentCsv />}
      />
      <StaffsTable />
    </div>
  );
};

export default Page;
