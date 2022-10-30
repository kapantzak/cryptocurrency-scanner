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
import DaysSelector from "./DaysSelector";
import { BadgeUppercase } from "../../styles/globalStyles";
import { requestOptions, dateTime, priceSinceLiteral } from "./helpers";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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
            return dateTime(new Date(context[0].label));
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

const ChartWrapper = styled.div`
  section {
    display: flex;

    &.top {
      justify-content: space-between;
      padding: 1rem 1.5rem;
    }
  }
`;

const ChartTitleWrapper = styled.div`
  display: flex;
  column-gap: 0.7rem;
`;

const ChartTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => props.theme.black_light};
`;

const CoinPriceChart = ({ id }) => {
  const [days, setDays] = useState("1D");
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;

    const { days: daysRequested, interval } = requestOptions(days) || {};

    getCoinMarketChart({ id, days: daysRequested, interval }).then(
      ({ data, status }) => {
        if (status === 200 && !ignore) {
          setData(data);
        }
      }
    );

    return () => {
      ignore = true;
    };
  }, [days]);

  const handleDaysSelection = (days) => {
    setDays(days);
  };

  return (
    <ChartWrapper>
      <section className="top">
        <ChartTitleWrapper>
          <ChartTitle>Price historical data</ChartTitle>
          <BadgeUppercase>
            {process.env.NEXT_PUBLIC_CURRENCY} - {priceSinceLiteral(days)}
          </BadgeUppercase>
        </ChartTitleWrapper>
        <DaysSelector days={days} onDaySelection={handleDaysSelection} />
      </section>
      <section>
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
      </section>
    </ChartWrapper>
  );
};

CoinPriceChart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CoinPriceChart;
