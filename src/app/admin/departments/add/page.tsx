import AddDepartmentForm from "@/components/department/AddDepartmentForm";
import Head from "@/components/Head";
import AddStaffForm from "@/components/staff/AddStaffForm";

const Page = () => {
  return (
    <div>
      <Head title="Add Department" back_btn />
      <AddDepartmentForm />
    </div>
  );
};

export default Page;
