import React, { useMemo, memo } from "react";
import * as Table from "../styles";

import { ReactComponent as ArrowLeft } from "../../../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/arrow-right.svg";

const defaultLabelDisplayedRows = ({ from, to, count }) =>
  `${from}-${to === -1 ? count : to} of ${count}`;

const Pagination = memo(
  ({
    previousPage,
    nextPage,
    pageSize,
    setPageSize,
    pageIndex,
    rowsNumber,
    rowsPerPageOptions = [9, 20, 50, 100],
  }) => {
    const onChange = (e) => {
      setPageSize(Number(e.target.value));
    };
    const labelDisplayedRows = useMemo(
      () =>
        defaultLabelDisplayedRows({
          from: rowsNumber === 0 ? 0 : pageIndex * pageSize + 1,
          to: Math.min(rowsNumber, (pageIndex + 1) * pageSize),
          count: rowsNumber,
        }),
      [rowsNumber, pageIndex, pageSize]
    );

    return (
      <Table.PaginationContainer>
        <Table.PaginationText>Rows per page:</Table.PaginationText>
        <Table.StyledSelect value={pageSize} onChange={onChange}>
          {rowsPerPageOptions.map((el, i) => (
            <option key={i} value={el}>
              {el}
            </option>
          ))}
        </Table.StyledSelect>
        <Table.PaginationInfo>{labelDisplayedRows}</Table.PaginationInfo>
        <Table.IconButton onClick={previousPage} mr={10}>
          <ArrowLeft />
        </Table.IconButton>
        <Table.IconButton onClick={nextPage} mr={15}>
          <ArrowRight />
        </Table.IconButton>
      </Table.PaginationContainer>
    );
  }
);

export default Pagination;
