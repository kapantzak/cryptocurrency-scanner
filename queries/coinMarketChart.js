import axios from "axios";
import { headers } from "./helpers";

const getCoinMarketChart = (id, days = "max") => {
  return axios({
    url: `${process.env.API_URL}/coins/${id}/market_chart`,
    method: "get",
    headers,
    params: {
      vs_currency: process.env.NEXT_PUBLIC_CURRENCY,
      days,
      interval: "daily",
    },
  });
};

export default getCoinMarketChart;
