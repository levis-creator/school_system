import ClassSchedule from "@/components/ClassSchedule";
import IntroCard from "@/components/IntroCard";
import ScheduleCalender from "@/components/ScheduleCalender";

const Page = () => {
  return (
    <div>
      <IntroCard />
      <div className="w-full flex mt-8 gap-7">
        <div className="flex-grow flex-1">
          <ClassSchedule />
        </div>
        <div className="hidden">
          <ScheduleCalender />
        </div>
      </div>
    </div>
  );
};

export default Page;
