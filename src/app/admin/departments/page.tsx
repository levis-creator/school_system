import DepartmentList from "@/components/department/DepartmentList";
import Head from "@/components/Head";

const Page = () => {
  return (
    <div>
      <Head title="Departments" add_btn link="departments/add" />
      <DepartmentList />
    </div>
  );
};

export default Page;
