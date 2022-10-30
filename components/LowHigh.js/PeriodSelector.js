import PropTypes from "prop-types";
import ButtonDefault from "../Button/ButtonDefault";
import styled from "styled-components";

const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 0.3rem;
`;

const options = ["24h", "All"];

const PeriodSelector = ({ period, onPeriodSelection }) => {
  const handleSelection = (option) => {
    if (option !== period) {
      onPeriodSelection(option);
    }
  };

  return (
    <ButtonsWrapper>
      {options.map((option) => (
        <ButtonDefault
          key={option}
          onClick={() => handleSelection(option)}
          className={period === option ? "active" : ""}
          disabled={period === option}
          aria-label={period}
        >
          {option}
        </ButtonDefault>
      ))}
    </ButtonsWrapper>
  );
};

PeriodSelector.defaultProps = {
  onPeriodSelection: () => {},
};

PeriodSelector.propTypes = {
  period: PropTypes.oneOf(options).isRequired,
  onPeriodSelection: PropTypes.func,
};

export default PeriodSelector;
