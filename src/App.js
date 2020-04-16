import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Cell from "./components/Cell";
import getDailyInfo from "./http/getDailyInfo";

import * as S from "./styles";

const App = () => {
  const [data, setDate] = useState([]);

  useEffect(() => {
    getDailyInfo().then((data) => {
      setDate(data);
    });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Country",
        accessor: "country",
        percentWidth: 25,
      },
      {
        Header: "Province / State",
        accessor: "provinceState",
        percentWidth: 25,
      },
      {
        Header: "Active",
        accessor: "active",
        percentWidth: 12.5,
        Cell: Cell.Active,
      },
      {
        Header: "Recovered",
        accessor: "recovered",
        percentWidth: 12.5,
        Cell: Cell.Recovered,
      },
      {
        Header: "Deaths",
        accessor: "deaths",
        percentWidth: 12.5,
        Cell: Cell.Death,
      },
      {
        Header: "Confirmed",
        accessor: "confirmed",
        percentWidth: 12.5,
        Cell: Cell.Confirmed,
      },
    ],
    []
  );

  return (
    <S.Container>
      <Table data={data} columns={columns} />
    </S.Container>
  );
};

export default App;
