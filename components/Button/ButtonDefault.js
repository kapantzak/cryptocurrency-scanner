import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  border: 1px solid ${(props) => props.theme.gray_500};
  border-radius: 4px;
  background-color: ${(props) => props.theme.white};
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.black_light};
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: ${(props) => props.theme.gray_200};
  }

  &:disabled {
    cursor: auto;
  }

  &.active {
    background-color: ${(props) => props.theme.gray_300};
  }
`;

const ButtonDefault = ({ type, children, ...props }) => {
  return (
    <Button type={type} {...props}>
      {children}
    </Button>
  );
};

ButtonDefault.defaultProps = {
  type: "button",
};

ButtonDefault.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
};

export default ButtonDefault;
