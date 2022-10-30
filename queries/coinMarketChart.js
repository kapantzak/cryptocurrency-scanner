import axios from "axios";
import { headers } from "./helpers";

const getCoinMarketChart = ({ id, days, interval }) => {
  return axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/coins/${id}/market_chart`,
    method: "get",
    headers,
    params: {
      vs_currency: process.env.NEXT_PUBLIC_CURRENCY,
      days: days || "max",
      interval,
    },
  });
};

export default getCoinMarketChart;
