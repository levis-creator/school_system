import addData from "@/utils/restfulfunctions/addData";
import deleteData from "@/utils/restfulfunctions/deleteData";
import editData from "@/utils/restfulfunctions/editData";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useDbHandler = (
  endpoint: string,
  data?: any,
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
    await editData(endpoint, data, id, messageToast, setloading);
  };
  const handleDelete = async (id: any) => {
    await deleteData(endpoint, id, setloading, messageToast);
  };

  return { handleAdd, handleEdit, handleDelete, loading };
};
export default useDbHandler;
