import PropTypes from "prop-types";
import styled from "styled-components";

const CardElem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
`;

const Card = ({ children }) => {
  return <CardElem>{children}</CardElem>;
};

Card.defaultProps = {
  children: null,
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
};

export default Card;
