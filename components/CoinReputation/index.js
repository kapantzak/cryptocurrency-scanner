import PropTypes from "prop-types";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { getPercentage } from "../../utils/helpers";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

const ThumbBadge = styled.div`
  display: flex;
  column-gap: 0.3rem;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.3rem 0.4rem;
  border: 1px solid ${(props) => props.theme.gray_500};
  border-radius: 4px;
  background-color: ${(props) => props.theme.white};
`;

const ThumbBadgeUp = styled(ThumbBadge)`
  color: ${(props) => props.theme.success};
  border-color: ${(props) => props.theme.success};
`;

const ThumbBadgeDown = styled(ThumbBadge)`
  color: ${(props) => props.theme.error};
  border-color: ${(props) => props.theme.error};
`;

const CoinReputation = ({ votesUp, votesDown }) => {
  return (
    <Wrapper>
      {votesUp !== null && (
        <ThumbBadgeUp>
          <FaThumbsUp />
          {getPercentage(votesUp / 100)}
        </ThumbBadgeUp>
      )}
      {votesDown !== null && (
        <ThumbBadgeDown>
          <FaThumbsDown />
          {getPercentage(votesDown / 100)}
        </ThumbBadgeDown>
      )}
    </Wrapper>
  );
};

CoinReputation.defaultProps = {
  votesUp: null,
  votesDown: null,
};

CoinReputation.propTypes = {
  votesUp: PropTypes.number,
  votesDown: PropTypes.number,
};

export default CoinReputation;
