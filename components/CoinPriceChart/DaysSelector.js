import PropTypes from "prop-types";
import ButtonDefault from "../Button/ButtonDefault";
import styled from "styled-components";
import { priceSinceLiteral } from "./helpers";

const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 0.3rem;
`;

const options = ["1D", "14D", "1M", "2M", "1Y", "ALL"];

const DaysSelector = ({ days, onDaySelection }) => {
  const handleSelection = (option) => {
    if (option !== days) {
      onDaySelection(option);
    }
  };

  return (
    <ButtonsWrapper>
      {options.map((option) => (
        <ButtonDefault
          key={option}
          onClick={() => handleSelection(option)}
          className={days === option ? "active" : ""}
          disabled={days === option}
          aria-label={priceSinceLiteral(days)}
        >
          {option}
        </ButtonDefault>
      ))}
    </ButtonsWrapper>
  );
};

DaysSelector.defaultProps = {
  onDaySelection: () => {},
};

DaysSelector.propTypes = {
  days: PropTypes.oneOf(options).isRequired,
  onDaySelection: PropTypes.func,
};

export default DaysSelector;
