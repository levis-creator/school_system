import { FC } from "react";

interface HeadProps {
  title: string;
}
const Head: FC<HeadProps> = ({ title }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold text-gray-600">{title}</h2>
    </div>
  );
};

export default Head;
