import axios from "axios";

export const http = axios.create({
  baseURL: "https://covid19.mathdro.id/api/",
  headers: { "Content-Type": "application/json; charset=utf-8" },
});
