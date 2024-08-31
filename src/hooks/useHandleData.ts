import { useState } from "react";

const useHandleData = (data: any[]) => {
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  let checked = false;
  let indeterminate = false;

  if (checkedKeys.length === data.length) {
    checked = true;
  } else if (checkedKeys.length === 0) {
    checked = false;
  } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
    indeterminate = true;
  }

  const handleCheckAll = (value: any, checked: boolean) => {
    const keys: any = checked ? data.map((item) => item.id) : [];
    setCheckedKeys(keys);
  };
  const handleCheck = (value: any, checked: any) => {
    const keys: any = checked
      ? [...checkedKeys, value]
      : checkedKeys.filter((item) => item !== value);
    setCheckedKeys(keys);
  };
  const filteredData =
    data.filter((v, i) => {
      const start = limit * (page - 1);
      const end = start + limit;
      return i >= start && i < end;
    }) || [];

  const handleChangeLimit = (dataKey: number) => {
    setPage(1);
    setLimit(dataKey);
  };
  return {
    handleCheck,
    handleCheckAll,
    handleChangeLimit,
    setPage,
    limit,
    page,
    data,
    checked,
    indeterminate,
    checkedKeys,
    filteredData,
  };
};
export default useHandleData;
