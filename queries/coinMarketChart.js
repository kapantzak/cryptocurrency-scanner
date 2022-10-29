import axios from "axios";
import { headers } from "./helpers";

const getCoinMarketChart = (id, days = "max", signal = null) => {
  return axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/coins/${id}/market_chart`,
    method: "get",
    signal,
    headers,
    params: {
      vs_currency: process.env.NEXT_PUBLIC_CURRENCY,
      days,
      // interval: "daily",
    },
  });
};

export default getCoinMarketChart;
