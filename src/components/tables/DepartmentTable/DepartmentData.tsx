"use client";
import { Student as Staff } from "@/utils/types";
import { FC } from "react";
import { Checkbox, Table } from "rsuite";
import useHandleData from "@/hooks/useHandleData";
import CheckCell from "../CheckCell";
import CustomPagination from "../CustomPagination";

interface DepartmentDataProps {
  data: Staff[];
  loading?: boolean;
  displayHidden?: boolean;
}

const DepartmentData: FC<DepartmentDataProps> = ({
  data = [],
  loading,
  displayHidden = false,
}) => {
  const { Column, HeaderCell, Cell } = Table;
  const {
    handleCheck,
    handleCheckAll,
    handleChangeLimit,
    limit,
    page,
    checked,
    indeterminate,
    checkedKeys,
    filteredData,
    setPage,
  } = useHandleData(data);
  return (
    <>
      <Table
        data={filteredData}
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
        <Column width={200} flexGrow={1} align="center">
          <HeaderCell>Entrance Date</HeaderCell>
          <Cell dataKey="entranceDate" />
        </Column>
      </Table>
      {/* TODO: Add action button and stick it to the right */}
      <CustomPagination
        datalength={data.length}
        limit={limit}
        page={page}
        handleChangeLimit={handleChangeLimit}
        setPage={setPage}
      />
    </>
  );
};

export default DepartmentData;
