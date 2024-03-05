import { paginationRange } from "../../utils/paginaionRange";
import { PageItem, Pagination } from "./styled";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PaginationBar = (props) => {
  const { totalPage, page, limit, siblings, onPageChange } = props;
  let array = paginationRange(totalPage, page, limit, siblings);
  return (
    <Pagination>
      <PageItem
        className={page === 1 ? "hide" : "show"}
        onClick={() => onPageChange("prev")}>
        <FiChevronLeft />
      </PageItem>
      {array.map((value, index) => {
        if (value === page) {
          return (
            <PageItem
              key={index}
              className="active"
              onClick={() => onPageChange(value)}>
              {value}
            </PageItem>
          );
        } else if (value === "...") {
          return (
            <PageItem key={index} className="dot">
              {value}
            </PageItem>
          );
        } else {
          return (
            <PageItem key={index} onClick={() => onPageChange(value)}>
              {value}
            </PageItem>
          );
        }
      })}
      <PageItem
        className={page === totalPage ? "hide" : "show"}
        onClick={() => onPageChange("next")}>
        <FiChevronRight />
      </PageItem>
    </Pagination>
  );
};

export default PaginationBar;
