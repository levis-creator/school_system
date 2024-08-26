"use client";
import useStaffContext from "@/hooks/useStaffContext";
import { MoreHorizontal } from "lucide-react";
import { Dropdown, IconButton, Popover, Table, Whisper } from "rsuite";

const ActionCell = ({
  rowData,
  dataKey,
  ...props
}: {
  rowData?: any;
  dataKey?: any;
}) => {
  const { Cell } = Table;
  const { handleOpenModel, handleEdit, handleDelete }: any = useStaffContext();
  const renderMenu = (
    {
      onClose,
      left,
      top,
      className,
    }: {
      onClose: () => void;
      left?: number;
      top?: number;
      className?: string;
    },
    ref?: any
  ) => {
    const handleSelect = (eventKey: any) => {
      onClose();
      switch (eventKey) {
        case 1:
          handleOpenModel(rowData);
          break;
        case 2:
          handleEdit(rowData);
          break;
        case 3:
          handleDelete(rowData);
          break;
        default:
          break;
      }
    };
    return (
      <Popover ref={ref} className={className} style={{ left, top }} full>
        <Dropdown.Menu onSelect={handleSelect}>
          <Dropdown.Item eventKey={1}>View</Dropdown.Item>
          <Dropdown.Item eventKey={2}>Edit</Dropdown.Item>
          <Dropdown.Item eventKey={3}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Popover>
    );
  };

  return (
    <Cell {...props} className="link-group">
      <Whisper
        placement="autoVerticalStart"
        trigger="click"
        speaker={renderMenu}
      >
        <IconButton appearance="subtle" icon={<MoreHorizontal />} />
      </Whisper>
    </Cell>
  );
};
export default ActionCell;
