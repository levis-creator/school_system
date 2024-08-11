import NextofKin from "@/components/cards/NextofKin";
import ProfileCard from "@/components/cards/ProfileCard";
import SubjectTable from "@/components/tables/SubjectTable";

const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <ProfileCard />
      <div className="flex flex-col w-full gap-6">
        <SubjectTable />
        <NextofKin />
      </div>
    </div>
  );
};

export default Page;
