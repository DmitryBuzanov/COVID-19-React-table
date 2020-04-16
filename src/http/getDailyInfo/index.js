import { http } from "../index";
import { format, subDays } from "date-fns";

export default () => {
  const date = subDays(new Date(), 1);

  return http.get(`daily/${format(date, "MM-dd-yyyy")}`).then(({ data }) =>
    data.map((el) => ({
      country: el.countryRegion,
      provinceState: el.provinceState || "-",
      confirmed: el.confirmed,
      active: el.active,
      recovered: el.recovered,
      deaths: el.deaths,
    }))
  );
};
