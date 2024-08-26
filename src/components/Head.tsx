"use client";
import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface HeadProps {
  title: string;
  link?: string;
  back_btn?: boolean;
  add_btn?: boolean;
  additionalButton?: React.ReactNode; // Additional button to add to the head component, e.g., a dropdown menu or search bar.
}
const Head: FC<HeadProps> = ({
  title,
  link,
  back_btn = false,
  add_btn = false,
  additionalButton,
}) => {
  const router = useRouter();
  return (
    <div className="my-4 flex items-center gap-3">
      {back_btn && (
        <button className="text-gray-500" onClick={() => router.back()}>
          <ArrowLeft size={20} />
        </button>
      )}
      <h2 className="text-xl font-semibold text-gray-600 flex-1">{title}</h2>
      {additionalButton}
      {add_btn && (
        <Link href={`${link}`}>
          <button className="bg-blue-700 text-white px-4 rounded-md shadow-md py-2 flex gap-1">
            <Plus />
            <span>Add</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default Head;
