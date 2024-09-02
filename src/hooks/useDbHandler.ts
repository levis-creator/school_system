import addData from "@/utils/restfulfunctions/addData";
import editData from "@/utils/restfulfunctions/editData";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useDbHandler = (
  data: any,
  endpoint: string,
  back?: string,
  messageToast?: any
) => {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  //   this will be adding data
  //   todo: add conditional navigation
  const handleAdd = async () => {
    await addData(endpoint, data, setloading, messageToast).then(() =>
      router.push(back as string)
    );
  };
  // this function will be called when editing data
  const handleEdit = async (id: any) => {
    await editData("staff", data, id, messageToast, setloading);
  };

  return { handleAdd, handleEdit, loading };
};
export default useDbHandler;
