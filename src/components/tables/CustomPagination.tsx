import { FC } from "react";
import { Pagination } from "rsuite";
interface CustomPaginationProps {
  datalength: number;
  limit: number;
  page: number;
  setPage: any;
  handleChangeLimit: any;
}
const CustomPagination: FC<CustomPaginationProps> = ({
  datalength = 0,
  limit,
  page,
  setPage,
  handleChangeLimit,
}) => {
  return (
    <div>
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
        total={datalength}
        limitOptions={[10, 30, 50]}
        limit={limit}
        activePage={page}
        onChangePage={setPage}
        onChangeLimit={handleChangeLimit}
      />
    </div>
  );
};

export default CustomPagination;
