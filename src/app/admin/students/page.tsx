import Head from "@/components/Head";
import StudentsTable from "@/components/tables/StudentsTable";

const Page = async () => {
  return (
    <div>
      <Head title="Students" />
      <StudentsTable />
    </div>
  );
};

export default Page;
