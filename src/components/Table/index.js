import React, { useCallback } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";

import * as Table from "./styles";
import Head from "./Head";
import Body from "./Body";
import Pagination from "./Pagination";
import SearchField from "./SearchField";

export default ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    rows,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    { columns, data, initialState: { pageSize: 9 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const onSearch = useCallback((e) => setGlobalFilter(e.target?.value), [
    setGlobalFilter,
  ]);

  return (
    <Table.ContentWrapper>
      <Table.Header>
        <Table.HeaderText>COVID-19 Statistic</Table.HeaderText>
        <SearchField onChange={onSearch} value={globalFilter || ""} />
      </Table.Header>
      <Table.ShadowBox>
        <Table.Wrapper>
          <Table.Container {...getTableProps()}>
            <Head headerGroups={headerGroups} />
            <Body
              getTableBodyProps={getTableBodyProps}
              page={page}
              prepareRow={prepareRow}
            />
          </Table.Container>
        </Table.Wrapper>
        <Pagination
          nextPage={nextPage}
          previousPage={previousPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          pageIndex={pageIndex}
          rowsNumber={rows.length}
        />
      </Table.ShadowBox>
    </Table.ContentWrapper>
  );
};
