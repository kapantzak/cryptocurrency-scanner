import axios from "axios";
import { headers } from "./helpers";

const getCoinDetails = (id) => {
  return axios({
    url: `${process.env.API_URL}/coins/${id}`,
    method: "get",
    headers,
    params: {
      localization: false,
      community_data: false,
      developer_data: false,
    },
  });
};

export default getCoinDetails;
