import PropTypes from "prop-types";
import { useState } from "react";
import { getCurrencyFormat, getFormatedDate } from "../../utils/helpers";
import { CURRENCY } from "../../utils/constants";
import { BadgeSmall } from "../../styles/globalStyles";
import { FaLongArrowAltRight } from "react-icons/fa";
import PeriodSelector from "./PeriodSelector";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  color: ${(props) => props.theme.black_light};

  .prices {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    > div {
      display: flex;
      column-gap: 0.3rem;
      align-items: center;

      .price {
        font-size: 0.95rem;

        .date {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

const LowHigh = ({ ath, ath_date, atl, atl_date, high_24h, low_24h }) => {
  const [period, setPeriod] = useState("24h");

  const handlePeriodSelection = (option) => {
    setPeriod(option);
  };

  return (
    <Wrapper>
      <div className="prices">
        {(period === "24h" && (
          <>
            <div className="low">
              <BadgeSmall>Low</BadgeSmall>
              <div className="price">
                {getCurrencyFormat(low_24h[CURRENCY])}
              </div>
            </div>
            <FaLongArrowAltRight />
            <div className="high">
              <BadgeSmall>High</BadgeSmall>
              <div className="price">
                {getCurrencyFormat(high_24h[CURRENCY])}
              </div>
            </div>
          </>
        )) || (
          <>
            <div className="low">
              <BadgeSmall>Low</BadgeSmall>
              <div className="price">
                <div>{getCurrencyFormat(atl[CURRENCY])}</div>
                <div className="date">
                  {getFormatedDate(new Date(atl_date[CURRENCY]))}
                </div>
              </div>
            </div>
            <FaLongArrowAltRight />
            <div className="high">
              <BadgeSmall>High</BadgeSmall>
              <div className="price">
                <div>{getCurrencyFormat(ath[CURRENCY])}</div>
                <div className="date">
                  {getFormatedDate(new Date(ath_date[CURRENCY]))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <PeriodSelector
        period={period}
        onPeriodSelection={handlePeriodSelection}
      />
    </Wrapper>
  );
};

LowHigh.defaultProps = {
  ath: {},
  ath_date: {},
  atl: {},
  atl_date: {},
  high_24h: {},
  low_24h: {},
};

LowHigh.propTypes = {
  ath: PropTypes.object,
  ath_date: PropTypes.object,
  atl: PropTypes.object,
  atl_date: PropTypes.object,
  high_24h: PropTypes.object,
  low_24h: PropTypes.object,
};

export default LowHigh;
