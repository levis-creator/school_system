"use client";
import useToast from "@/hooks/useToast";
import addData from "@/utils/restfulfunctions/addData";
import { Student } from "@/utils/types";
import { Plus } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { Button, Modal } from "rsuite";
import { TypeAttributes } from "rsuite/esm/internals/types";
import * as XLSX from "xlsx";
import FileUploadInput from "../form/FileUploadInput";
import LoadUI from "../LoadUI";
import StudentsDataTable from "../tables/StudentTable/StudentsDataTable";
import Toast from "../Toast";
import useStaffContext from "@/hooks/useStaffContext";

const AddStudentCsv = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<any>();
  const [data, setData] = useState<Student[]>([]);
  const [showTable, setShowTable] = useState(false);
  const [loading, setloading] = useState(false);
  const { messageToast }: any = useStaffContext();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setFile(null);
    setData([]);
    setShowTable(false);
    setloading(false);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(e.target.files?.[0]);
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        // Convert the file data into an array buffer
        const data = new Uint8Array(event.target?.result as ArrayBufferLike);
        // Read the array buffer using xlsx
        const workbook = XLSX.read(data, { type: "array" });
        // Assuming we want to read the first sheet
        // Get the first sheet's name
        const sheetName = workbook.SheetNames[0];
        // Get the worksheet from the workbook
        const worksheet = workbook.Sheets[sheetName];
        // Convert the worksheet to JSON format
        const json: Student[] = XLSX.utils.sheet_to_json(worksheet);
        console.log(json);
        // Update the state with the JSON data

        setData(json);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleUpload = () => {
    if (data.length > 0) {
      setShowTable(true);
    }
  };

  const handleAdd = async () => {
    setloading(true);
    await addData("students/many", data, setloading).then((res) => {
      if (res != null) {
        messageToast(
          "success",
          `${res.saved} Students added successfully, ${res.failed} failed `
        );
        handleClose();
      }
    });
  };

  return (
    <div>
      <Button className="space-x-5" appearance="ghost" onClick={handleOpen}>
        <Plus />
        Add CSV
      </Button>
      <Modal open={isOpen} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Staff from CSV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading && <LoadUI />}
          {!showTable ? (
            <>
              <p>
                To add students from a CSV file, upload the file here and click
                the "Upload" button. The CSV file should follow the format
                specified in the "Import Students" section.
              </p>
              <FileUploadInput
                id="studentcsv"
                onChange={handleFileChange}
                file={file}
              />
            </>
          ) : (
            <StudentsDataTable data={data} displayHidden />
          )}
        </Modal.Body>
        <Modal.Footer>
          {!showTable ? (
            <Button appearance="primary" onClick={handleUpload}>
              Upload
            </Button>
          ) : (
            <Button appearance="primary" onClick={handleAdd} disabled={loading}>
              Save
            </Button>
          )}
          <Button onClick={handleClose} className="ml-3" disabled={loading}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddStudentCsv;
