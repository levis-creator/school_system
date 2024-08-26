"use client";
import useStudentContext from "@/hooks/useStudentContext";
import { Button, Modal } from "rsuite";

const DeleteAlert = ({
  title,
  deleteBtn,
}: {
  title: string;
  deleteBtn?: () => void;
}) => {
  const { _delete, handleCloseDelete }: any = useStudentContext();

  return (
    <>
      <Modal
        backdrop="static"
        role="alertdialog"
        open={_delete}
        onClose={handleCloseDelete}
        size="xs"
      >
        <Modal.Header>
          <Modal.Title>
            <h2 className="font-semibold">Delete {title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseDelete} appearance="subtle">
            Cancel
          </Button>
          <button
            onClick={deleteBtn}
            className="bg-red-500 text-white px-3 py-[0.35rem] ml-2 rounded-md"
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteAlert;
