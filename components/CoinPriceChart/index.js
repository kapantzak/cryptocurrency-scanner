import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import getCoinMarketChart from "../../queries/coinMarketChart";

const CoinPriceChart = ({ id }) => {
  const [days, setDays] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;

    getCoinMarketChart(id, days).then(({ data, status }) => {
      if (status === 200 && !ignore) {
        setData(data);
      }
    });

    return () => {
      ignore = true;
    };
  }, [days]);

  return <div>{data && JSON.stringify(data)}</div>;
};

CoinPriceChart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CoinPriceChart;
