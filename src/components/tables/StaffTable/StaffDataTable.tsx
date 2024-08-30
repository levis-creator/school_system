"use client";
import { Student as Staff } from "@/utils/types";
import { MoreHorizontal } from "lucide-react";
import { FC, useState } from "react";
import { Checkbox, Pagination, Table } from "rsuite";
import ActionCell from "./ActionCell";
import CheckCell from "./CheckCell";

interface StaffTableProps {
  data: Staff[];
  loading?: boolean;
  displayHidden?: boolean;
}

const StaffsDataTable: FC<StaffTableProps> = ({
  data = [],
  loading,
  displayHidden = false,
}) => {
  const { Column, HeaderCell, Cell } = Table;
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [checkedKeys, setCheckedKeys] = useState([]);
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
  const setdata =
    data.filter((v, i) => {
      const start = limit * (page - 1);
      const end = start + limit;
      return i >= start && i < end;
    }) || [];

  const handleChangeLimit = (dataKey: number) => {
    setPage(1);
    setLimit(dataKey);
  };
  return (
    <>
      <Table
        data={setdata}
        loading={loading}
        className="w-full mb-3"
        height={500}
      >
        <Column width={50} align="center">
          <HeaderCell style={{ padding: 0 }} aria-disabled={true}>
            <div style={{ lineHeight: "40px" }}>
              <Checkbox
                inline
                checked={checked}
                indeterminate={indeterminate}
                onChange={handleCheckAll}
              />
            </div>
          </HeaderCell>
          <CheckCell
            dataKey="id"
            checkedKeys={checkedKeys}
            onChange={handleCheck}
          />
        </Column>
        <Column width={100}>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column width={150}>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>
        <Column width={150}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>
        <Column width={200}>
          <HeaderCell>Gender</HeaderCell>
          <Cell dataKey="gender" />
        </Column>
        {displayHidden && (
          <Column width={200}>
            <HeaderCell>National ID</HeaderCell>
            <Cell dataKey="nationalId" />
          </Column>
        )}
        <Column width={200} flexGrow={1} align="center">
          <HeaderCell>Entrance Date</HeaderCell>
          <Cell dataKey="entranceDate" />
        </Column>
        {displayHidden && (
          <Column width={120} fixed="right">
            <HeaderCell>
              <MoreHorizontal />
            </HeaderCell>
            <ActionCell dataKey="id" />
          </Column>
        )}
      </Table>
      {/* TODO: Add action button and stick it to the right */}
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        maxButtons={5}
        size="xs"
        layout={["total", "-", "limit", "|", "pager", "skip"]}
        total={data.length}
        limitOptions={[10, 30, 50]}
        limit={limit}
        activePage={page}
        onChangePage={setPage}
        onChangeLimit={handleChangeLimit}
      />
    </>
  );
};

export default StaffsDataTable;
