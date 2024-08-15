import { Student } from "@/utils/types";
import React, { FC } from "react";
import { Avatar, Button, Modal, Panel } from "rsuite";
interface StudentInfoModel {
  open: boolean;
  handleClose: () => void;
  rowData: Student | null;
  handleEdit: () => void;
}
const StudentInfoModel: FC<StudentInfoModel> = ({
  open,
  handleClose,
  handleEdit,
  rowData,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      backdrop={true}
      className="mx-auto"
      size={400}
    >
      <Modal.Body>
        <Panel className="bg-white ">
          <div className="flex justify-center items-center h-full">
            <h3 className="text-xl">Student Information</h3>
          </div>
          <div className="mt-10">
            <Avatar circle className="h-20 w-20 mx-auto flex" />
          </div>
          <div>
            <div className="text-center mt-1">
              <h4 className="font-medium ">
                {" "}
                {rowData?.firstName} {rowData?.lastName}
              </h4>
            </div>
            <div className="mt-2">
              <div className="text-gray-500 text-sm flex gap-3 mt-2">
                <div>Student ID:</div>
                <div>{rowData?.id}</div>
              </div>
              <div className="text-gray-500 text-sm flex gap-3 mt-2">
                <div>Gender:</div>
                <div>{rowData?.gender}</div>
              </div>
              <div className="text-gray-500 text-sm flex gap-3 mt-2">
                <div>DOB:</div>
                <div>{rowData?.dateOfBirth}</div>
              </div>
              <div className="text-gray-500 text-sm flex gap-3 mt-2">
                <div>Grade:</div>
                <div>1</div>
              </div>
              <div className="text-gray-500 text-sm flex gap-3 mt-2">
                <div>Admission Date:</div>
                <div>{rowData?.admissionDate}</div>
              </div>
            </div>
          </div>
        </Panel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleEdit} appearance="primary" className="mr-2 ">
          Edit
        </Button>
        <Button
          onClick={handleClose}
          appearance="primary"
          className="bg-red-500 hover:bg-red-600"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StudentInfoModel;
