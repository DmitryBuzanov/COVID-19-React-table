import React from "react";
import * as Table from "../styles";

const Head = ({ headerGroups }) => (
  <Table.Head>
    {headerGroups.map((headerGroup) => (
      <Table.HeaderRow {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <Table.HeadCell
            isSorted={column.isSorted}
            isSortedDesc={column.isSortedDesc}
            align={column.align}
            fixedWidth={column.fixedWidth}
            percentWidth={column.percentWidth}
            minWidth={column.minWidth}
            maxWidth={column.maxWidth}
            {...column.getHeaderProps(
              column.getSortByToggleProps({
                style: column.style,
              })
            )}
          >
            {column.render("Header")}
            {column.isSorted ? (column.isSortedDesc ? " ▲" : " ▼") : ""}
          </Table.HeadCell>
        ))}
      </Table.HeaderRow>
    ))}
  </Table.Head>
);

export default Head;
