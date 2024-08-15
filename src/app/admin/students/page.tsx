import Head from "@/components/Head";
import StudentsTable from "@/components/tables/StudentsTable";
import { getData } from "@/utils/getData";

const Page = async () => {
  const students = await getData("students");
  return (
    <div>
      <Head title="Students" />
      <StudentsTable data={students} />
    </div>
  );
};

export default Page;
