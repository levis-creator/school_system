import { CloudUpload, File } from "lucide-react";
import React, { ChangeEvent, FC } from "react";

interface FileUploadInputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label?: string;
  accept?: string;
  file: any;
}
const FileUploadInput: FC<FileUploadInputProps> = ({
  id,
  onChange,
  label = "xlsx, xls, csv",
  accept = ".xlsx, .xls, .csv",
  file,
}) => {
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor={`${id}`}
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {file ? <File /> : <CloudUpload />}
          <p className="mb-2 text-sm text-gray-500">
            {file ? (
              <>
                <span className="font-semibold"> filename: </span>
                {file.name}
              </>
            ) : (
              <>
                {" "}
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </>
            )}
          </p>
          {!file && <p className="text-xs text-gray-500 ">{label}</p>}
        </div>
        <input
          id={id}
          type="file"
          className="hidden"
          onChange={onChange}
          accept={accept}
        />
      </label>
    </div>
  );
};

export default FileUploadInput;
