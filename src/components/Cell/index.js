import React from "react";
import { Info } from "./styles";

const Confirmed = ({ cell: { value } }) => (
  <Info type="confirmed">{value}</Info>
);

const Active = ({ cell: { value } }) => <Info type="active">{value}</Info>;

const Recovered = ({ cell: { value } }) => (
  <Info type="recovered">{value}</Info>
);

const Death = ({ cell: { value } }) => <Info type="death">{value}</Info>;

export default {
  Confirmed,
  Active,
  Recovered,
  Death,
};
