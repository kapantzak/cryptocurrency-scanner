import PropTypes from "prop-types";
import { useState } from "react";
import { Badge } from "../../styles/globalStyles";
import { DropdownSmall } from "../../styles/globalStyles";
import { priceChangeOptions } from "./helpers";
import { getPercentage } from "../../utils/helpers";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  column-gap: 0.8rem;
`;

const ChangeBadge = styled(Badge)`
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
`;

const ChangePositive = styled(ChangeBadge)`
  background-color: ${({ theme }) => theme.success};
`;

const ChangeNegative = styled(ChangeBadge)`
  background-color: ${({ theme }) => theme.error};
`;

const options = Object.values(priceChangeOptions);

const PriceChange = (props) => {
  const [period, setPeriod] = useState("price_change_percentage_24h");

  const changeNum = (props[period] || 0) / 100;
  const change = getPercentage(changeNum);

  let BagdeElem = ChangeBadge;
  if (changeNum > 0) {
    BagdeElem = ChangePositive;
  } else if (changeNum < 0) {
    BagdeElem = ChangeNegative;
  }

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  return (
    <Wrapper>
      <BagdeElem>{change}</BagdeElem>
      <DropdownSmall onChange={handlePeriodChange}>
        {options.map(({ label, data }) => (
          <option key={data} value={data}>
            {label}
          </option>
        ))}
      </DropdownSmall>
    </Wrapper>
  );
};

export default PriceChange;
