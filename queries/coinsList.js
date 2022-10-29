import axios from "axios";
import { headers } from "./helpers";

const getCoins = ({ page, per_page }) => {
  return axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/coins/markets`,
    method: "get",
    headers,
    params: {
      vs_currency: process.env.NEXT_PUBLIC_CURRENCY,
      order: "market_cap_desc",
      per_page,
      page,
      sparkline: false,
      price_change_percentage: "24h",
    },
  });
};

export default getCoins;
