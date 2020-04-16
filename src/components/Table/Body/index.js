import React from "react";
import * as Table from "../styles";

const Body = ({ getTableBodyProps, page, prepareRow }) => (
  <Table.Body {...getTableBodyProps()}>
    {page.map((row) => {
      prepareRow(row);

      return (
        <Table.Row {...row.getRowProps()}>
          {row.cells.map((cell) => (
            <Table.BodyCell
              align={cell.column.align}
              fixedWidth={cell.column.fixedWidth}
              percentWidth={cell.column.percentWidth}
              minWidth={cell.column.minWidth}
              maxWidth={cell.column.maxWidth}
              style={cell.column.style}
              {...cell.getCellProps()}
            >
              {cell.render("Cell")}
            </Table.BodyCell>
          ))}
        </Table.Row>
      );
    })}
  </Table.Body>
);

export default Body;
