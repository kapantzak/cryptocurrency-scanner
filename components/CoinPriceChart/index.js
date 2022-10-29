import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import getCoinMarketChart from "../../queries/coinMarketChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const dateTime = (time) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  return new Intl.DateTimeFormat(
    process.env.NEXT_PUBLIC_LOCALE,
    options
  ).format(time);
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: (context) => {
          if (context[0] && context[0].label) {
            return dateTime(context[0].label);
          }

          return null;
        },
        label: (context) => {
          let label = context.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat(process.env.NEXT_PUBLIC_LOCALE, {
              style: "currency",
              currency: "USD",
            }).format(context.parsed.y);
          }
          return label;
        },
      },
    },
  },
};

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

  return (
    <div>
      {data && (
        <Line
          options={options}
          data={{
            labels: (data.prices || []).map(([time, _]) => dateTime(time)),
            datasets: [
              {
                data: (data.prices || []).map(([_, price]) => price),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        />
      )}
    </div>
  );
};

CoinPriceChart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CoinPriceChart;
