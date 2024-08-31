"use client";
import { Student } from "@/utils/types";
import { MoreHorizontal } from "lucide-react";
import { FC, useState } from "react";
import { Checkbox, Pagination, Table } from "rsuite";
import { RowDataType } from "rsuite/esm/Table";
import ActionCell from "./ActionCell";
import CheckCell from "../CheckCell";
import CustomPagination from "../CustomPagination";
import useHandleData from "@/hooks/useHandleData";

interface StudentTableProps {
  data: Student[];
  loading?: boolean;
  onRowClick?: (row: RowDataType<Student>) => void;
  displayHidden?: boolean;
}

const StudentsDataTable: FC<StudentTableProps> = ({
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
        {displayHidden && (
          <Column width={200}>
            <HeaderCell>DOB</HeaderCell>
            <Cell dataKey="dateOfBirth" />
          </Column>
        )}
        <Column width={200} flexGrow={1} align="center">
          <HeaderCell>Admission Date</HeaderCell>
          <Cell dataKey="admissionDate" />
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

export default StudentsDataTable;
