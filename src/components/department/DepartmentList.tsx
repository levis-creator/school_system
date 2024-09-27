"use client";
import useDepartment from "@/hooks/useDepartment";
import { getData } from "@/utils/restfulfunctions/getData";
import React, { useEffect } from "react";
import { Button, ButtonToolbar, Panel, PanelGroup } from "rsuite";

const DepartmentList = () => {
  const { departments, setDepartments }: any = useDepartment();
  // Fetch departments data from API
  useEffect(() => {
    getData("department").then((data) => setDepartments(data));
  }, [setDepartments]);
  // Render department list using PanelGroup and Panel components
  return (
    <PanelGroup>
      {departments.map((department: any) => (
        <Panel
          className="bg-white"
          header={department.departmentName}
          collapsible
          key={department.id}
        >
          {/* Render department details */}
          <p>{department.description}</p>
          <ButtonToolbar>
            <Button appearance="ghost">Edit</Button>
            <Button appearance="primary" className="!bg-red-500 text-white">
              Delete
            </Button>
          </ButtonToolbar>
        </Panel>
      ))}
    </PanelGroup>
  );
};

export default DepartmentList;
