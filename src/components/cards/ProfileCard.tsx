import { Avatar, Divider, Panel } from "rsuite";
import { today } from "../../utils/date";

const ProfileCard = () => {
  return (
    <>
      <Panel className="bg-white shadow-md rounded-md lg:w-96">
        <div className="flex flex-col items-center gap-3  justify-center">
          <Avatar size="xl" circle />
          <h3 className="text-xl">Levis Goefry</h3>
        </div>
        <Divider />
        <div>
          <ProfileInfo
            data={{
              label: "Admission Number",
              value: "123456",
            }}
          />
          <ProfileInfo
            data={{
              label: "Gender",
              value: "Male",
            }}
          />
          <ProfileInfo
            data={{
              label: "Date of Birth",
              value: `${new Date().toLocaleDateString()}`,
            }}
          />
          <ProfileInfo
            data={{
              label: "Phone",
              value: 254708088195,
            }}
          />
          <ProfileInfo
            data={{
              label: "Email",
              value: "name@email.com",
            }}
          />
          <ProfileInfo
            data={{
              label: "Category",
              value: "student",
            }}
          />
          <ProfileInfo
            data={{
              label: "Admission Date",
              value: `${new Date().toLocaleDateString()}`,
            }}
          />
        </div>
      </Panel>
    </>
  );
};

const ProfileInfo = ({
  data,
}: {
  data: {
    label: string;
    value: any;
  };
}) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="font-bold">{data.label}:</div>
        <div>{data.value}</div>
      </div>
      <Divider />
    </>
  );
};
export default ProfileCard;
